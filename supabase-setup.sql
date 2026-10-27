/opt/homebrew/Library/Homebrew/cmd/shellenv.sh: line 18: /bin/ps: Operation not permitted
create extension if not exists pgcrypto;

create table if not exists public.game_rooms (
  id uuid primary key default gen_random_uuid(),
  room_code text unique not null check (room_code ~ '^[A-Z0-9]{6}$'),
  game_type text not null check (game_type in ('among','defence')),
  status text not null default 'waiting' check (status in ('waiting','started')),
  shared_card_id uuid,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default now() + interval '2 hours'
);

create table if not exists public.game_players (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.game_rooms(id) on delete cascade,
  nickname text not null check (char_length(nickname) between 1 and 16),
  player_token uuid unique not null,
  is_host boolean not null default false,
  role text,
  joined_at timestamptz not null default now(),
  unique(room_id,nickname)
);

create table if not exists public.defence_cards (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  active boolean not null default true
);

alter table public.game_rooms enable row level security;
alter table public.game_players enable row level security;
alter table public.defence_cards enable row level security;
revoke all on public.game_rooms,public.game_players,public.defence_cards from anon,authenticated;

create or replace function public.create_room(p_game_type text,p_nickname text,p_player_token uuid)
returns jsonb language plpgsql security definer set search_path=public,pg_temp as $$
declare v_room game_rooms; v_code text; v_chars text:='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
begin
  if p_game_type not in ('among','defence') then return jsonb_build_object('error','INVALID_GAME'); end if;
  if char_length(trim(p_nickname)) not between 1 and 16 then return jsonb_build_object('error','INVALID_NAME'); end if;
  delete from game_rooms where expires_at<now();
  loop
    v_code:='';
    for i in 1..6 loop v_code:=v_code||substr(v_chars,1+floor(random()*length(v_chars))::int,1); end loop;
    exit when not exists(select 1 from game_rooms where room_code=v_code);
  end loop;
  insert into game_rooms(room_code,game_type) values(v_code,p_game_type) returning * into v_room;
  insert into game_players(room_id,nickname,player_token,is_host) values(v_room.id,trim(p_nickname),p_player_token,true);
  return jsonb_build_object('room_code',v_code);
end $$;

create or replace function public.join_room(p_room_code text,p_nickname text,p_player_token uuid)
returns jsonb language plpgsql security definer set search_path=public,pg_temp as $$
declare v_room game_rooms; v_count int; v_limit int;
begin
  select * into v_room from game_rooms where room_code=upper(trim(p_room_code)) and expires_at>now() for update;
  if not found then return jsonb_build_object('error','ROOM_NOT_FOUND'); end if;
  if v_room.status<>'waiting' then return jsonb_build_object('error','ROOM_STARTED'); end if;
  select count(*) into v_count from game_players where room_id=v_room.id;
  v_limit:=case when v_room.game_type='among' then 5 else 8 end;
  if v_count>=v_limit then return jsonb_build_object('error','ROOM_FULL'); end if;
  if exists(select 1 from game_players where room_id=v_room.id and lower(nickname)=lower(trim(p_nickname))) then return jsonb_build_object('error','NAME_TAKEN'); end if;
  insert into game_players(room_id,nickname,player_token) values(v_room.id,trim(p_nickname),p_player_token);
  return jsonb_build_object('room_code',v_room.room_code);
end $$;

create or replace function public.get_room_state(p_room_code text,p_player_token uuid)
returns jsonb language plpgsql security definer set search_path=public,pg_temp as $$
declare v_room game_rooms; v_me game_players; v_players jsonb; v_card jsonb;
begin
  select * into v_room from game_rooms where room_code=upper(trim(p_room_code)) and expires_at>now();
  if not found then return jsonb_build_object('error','ROOM_NOT_FOUND'); end if;
  select * into v_me from game_players where room_id=v_room.id and player_token=p_player_token;
  if not found then return jsonb_build_object('error','PLAYER_NOT_FOUND'); end if;
  select coalesce(jsonb_agg(jsonb_build_object('nickname',nickname,'is_host',is_host) order by joined_at),'[]'::jsonb) into v_players from game_players where room_id=v_room.id;
  if v_room.shared_card_id is not null then select jsonb_build_object('title',title,'content',content) into v_card from defence_cards where id=v_room.shared_card_id; end if;
  return jsonb_build_object('room_code',v_room.room_code,'game_type',v_room.game_type,'status',v_room.status,'is_host',v_me.is_host,'own_role',v_me.role,'players',v_players,'shared_card',v_card);
end $$;

create or replace function public.start_among_game(p_room_code text,p_player_token uuid)
returns jsonb language plpgsql security definer set search_path=public,pg_temp as $$
declare v_room game_rooms; v_me game_players; v_count int; v_special uuid;
begin
  select * into v_room from game_rooms where room_code=upper(trim(p_room_code)) and expires_at>now() for update;
  if not found then return jsonb_build_object('error','ROOM_NOT_FOUND'); end if;
  select * into v_me from game_players where room_id=v_room.id and player_token=p_player_token;
  if not found or not v_me.is_host then return jsonb_build_object('error','NOT_HOST'); end if;
  if v_room.status<>'waiting' then return jsonb_build_object('ok',true); end if;
  select count(*) into v_count from game_players where room_id=v_room.id;
  if v_count<3 or v_count>5 then return jsonb_build_object('error','NEED_3_TO_5'); end if;
  select id into v_special from game_players where room_id=v_room.id order by random() limit 1;
  update game_players set role=case when id=v_special then 'possessed' else 'human' end where room_id=v_room.id;
  update game_rooms set status='started' where id=v_room.id;
  return jsonb_build_object('ok',true);
end $$;

create or replace function public.draw_defence_card(p_room_code text,p_player_token uuid)
returns jsonb language plpgsql security definer set search_path=public,pg_temp as $$
declare v_room game_rooms; v_me game_players; v_card uuid;
begin
  select * into v_room from game_rooms where room_code=upper(trim(p_room_code)) and game_type='defence' and expires_at>now() for update;
  if not found then return jsonb_build_object('error','ROOM_NOT_FOUND'); end if;
  select * into v_me from game_players where room_id=v_room.id and player_token=p_player_token;
  if not found or not v_me.is_host then return jsonb_build_object('error','NOT_HOST'); end if;
  if v_room.shared_card_id is not null then return jsonb_build_object('ok',true); end if;
  select id into v_card from defence_cards where active order by random() limit 1;
  if v_card is null then return jsonb_build_object('error','NO_CARDS'); end if;
  update game_rooms set shared_card_id=v_card,status='started' where id=v_room.id;
  return jsonb_build_object('ok',true);
end $$;

create or replace function public.leave_room(p_room_code text,p_player_token uuid)
returns jsonb language plpgsql security definer set search_path=public,pg_temp as $$
declare v_room game_rooms; v_me game_players; v_remaining int;
begin
  select * into v_room from game_rooms where room_code=upper(trim(p_room_code)) for update;
  if not found then return jsonb_build_object('ok',true); end if;
  select * into v_me from game_players where room_id=v_room.id and player_token=p_player_token;
  if not found then return jsonb_build_object('ok',true); end if;
  delete from game_players where id=v_me.id;
  select count(*) into v_remaining from game_players where room_id=v_room.id;
  if v_remaining=0 then delete from game_rooms where id=v_room.id;
  elsif v_me.is_host then update game_players set is_host=true where id=(select id from game_players where room_id=v_room.id order by joined_at limit 1); end if;
  return jsonb_build_object('ok',true);
end $$;

revoke all on function public.create_room(text,text,uuid),public.join_room(text,text,uuid),public.get_room_state(text,uuid),public.start_among_game(text,uuid),public.draw_defence_card(text,uuid),public.leave_room(text,uuid) from public;
grant execute on function public.create_room(text,text,uuid),public.join_room(text,text,uuid),public.get_room_state(text,uuid),public.start_among_game(text,uuid),public.draw_defence_card(text,uuid),public.leave_room(text,uuid) to anon,authenticated;

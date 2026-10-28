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
  difficulty text,
  time_limit text,
  solution text,
  active boolean not null default true
);

alter table public.defence_cards add column if not exists difficulty text;
alter table public.defence_cards add column if not exists time_limit text;
alter table public.defence_cards add column if not exists solution text;
create unique index if not exists defence_cards_title_uq on public.defence_cards(title);

alter table public.game_rooms drop constraint if exists game_rooms_status_check;
alter table public.game_rooms add constraint game_rooms_status_check check (status in ('waiting','started','finished'));

insert into public.defence_cards(title,content,difficulty,time_limit,solution,active) values
('《最后的合影》','万圣节派对结束后，小明收到了一张集体合影。\n照片里的每个人都笑得很开心，但小明仔细看了一会儿，突然脸色惨白，立刻删除了照片。\n为什么？','难度：中等','限时：4分钟','派对当晚，小明和7位朋友一起拍照，现场明明只有8个人。\n然而照片中却出现了第9个人。更诡异的是，多出来的人站在所有人的正中间，而且小明确信拍照时那里根本没有人。',true),
('《完美的万圣节装扮》','万圣节晚上，男孩戴着一副极其逼真的恶魔面具参加游行，并赢得了最佳服装奖。\n回到家后，他对着镜子准备摘下面具，却发现无论怎么用力都摘不下来。\n更奇怪的是，他的手机突然响了起来。看到屏幕上的照片后，他吓得尖叫起来。\n为什么？','难度：中等','限时：4分钟','男孩参加游行之前，曾与朋友拍过一张合影。当时他还没有戴上恶魔面具。朋友刚刚把照片发给了他。\n照片里，男孩的脸已经变成了恶魔的模样。\n原来他从一开始就没有真正戴上过面具，而是在万圣节当晚中了诅咒，变成了恶魔。',true),
('《山林惊魂》','深夜，一对夫妻开车经过山林时，汽车突然抛锚。\n丈夫下车检查，临走前与妻子约定：只有听到三长两短的敲门声，她才能开门。\n丈夫离开后迟迟没有回来。一个小时后，妻子开始听到车窗外持续传来杂乱的敲击声，但她始终没有开门。\n第二天早上，她终于看清了窗外的景象，吓得尖叫起来。她看到了什么？','难度：中等偏难','限时：5分钟','丈夫下车后遭到了附近杀人犯的袭击。\n杀人犯将丈夫的遗体悬挂在车旁的树上。夜里风很大，遗体不断被风吹动，反复撞击车窗，形成了不规则的敲击声。\n妻子以为有人试图敲门，所以一整夜都不敢打开车门。直到第二天早上，她才发现敲击声真正的来源。',true),
('《午夜的最后一位客人》','万圣节午夜，一家旅馆的前台接待了最后一位客人。\n客人看起来十分正常，办理入住时还和工作人员聊了几句。\n然而，当工作人员查看监控录像时，却立刻吓得逃出了旅馆。\n为什么？','难度：中等','限时：4分钟','工作人员在前台亲眼看见了客人，也听见了他的声音。\n但监控录像中，前台只有工作人员一个人。整个入住过程里，工作人员一直对着空无一人的地方说话，甚至将房卡递向了空中。\n原来这位客人并没有出现在监控画面中。',true),
('《清晨血案》','鲁迪先生住在一间很小的房子里。\n某天清晨，他觉得外面的空气格外清新，于是像往常一样，把头伸出门外。\n没想到下一秒，他的头突然掉了下来。奇怪的是，没有人报警，房子的主人甚至只是叹了一口气。\n为什么？','难度：中等','限时：4分钟','鲁迪先生其实不是人，而是一个摆放在万圣节装饰屋里的机械玩偶。\n每天早上，机关都会让他从小门里探出头来。\n但这一天，连接头部的零件松动了，导致头部直接掉落。房子的主人发现后，只能叹气，准备修理玩偶。',true)
on conflict (title) do update set content=excluded.content,difficulty=excluded.difficulty,time_limit=excluded.time_limit,solution=excluded.solution,active=true;

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
  if v_room.shared_card_id is not null then select jsonb_strip_nulls(jsonb_build_object('title',title,'content',content,'difficulty',difficulty,'time_limit',time_limit,'solution',case when v_room.status='finished' then solution else null end)) into v_card from defence_cards where id=v_room.shared_card_id; end if;
  return jsonb_build_object('room_code',v_room.room_code,'game_type',v_room.game_type,'status',v_room.status,'is_host',v_me.is_host,'own_role',v_me.role,'players',v_players,'shared_card',v_card);
end $$;

create or replace function public.finish_defence_game(p_room_code text,p_player_token uuid)
returns jsonb language plpgsql security definer set search_path=public,pg_temp as $$
declare v_room game_rooms; v_me game_players;
begin
  select * into v_room from game_rooms where room_code=upper(trim(p_room_code)) and game_type='defence' and expires_at>now() for update;
  if not found then return jsonb_build_object('error','ROOM_NOT_FOUND'); end if;
  select * into v_me from game_players where room_id=v_room.id and player_token=p_player_token;
  if not found or not v_me.is_host then return jsonb_build_object('error','NOT_HOST'); end if;
  if v_room.shared_card_id is null then return jsonb_build_object('error','NO_CARDS'); end if;
  update game_rooms set status='finished' where id=v_room.id;
  return jsonb_build_object('ok',true);
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

revoke all on function public.create_room(text,text,uuid),public.join_room(text,text,uuid),public.get_room_state(text,uuid),public.start_among_game(text,uuid),public.draw_defence_card(text,uuid),public.finish_defence_game(text,uuid),public.leave_room(text,uuid) from public;
grant execute on function public.create_room(text,text,uuid),public.join_room(text,text,uuid),public.get_room_state(text,uuid),public.start_among_game(text,uuid),public.draw_defence_card(text,uuid),public.finish_defence_game(text,uuid),public.leave_room(text,uuid) to anon,authenticated;

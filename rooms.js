window.RoomUI=(()=>{
  const SUPABASE_URL='https://rukxdhojmnrcbxbjrzsn.supabase.co';
  const SUPABASE_KEY='sb_publishable_hRMfYZTp6WYHp6ddDCR6Mw_1iFdqhJ4';
  let timer=null,currentGame=null,session=null;

  const possessedRules=[
    ['每次回答时，必须提到一种颜色。','Mention a color every time you answer.'],
    ['每次回答时，必须提到一种液体。','Mention a liquid every time you answer.'],
    ['每次回答时，必须提到一种食物。','Mention a food every time you answer.'],
    ['每次回答时，必须包含“其实”。','Include “Actually” in every answer.'],
    ['每次回答时，必须包含“应该”。','Include “Probably” in every answer.'],
    ['每次回答时，必须包含“可能”。','Include “Maybe” in every answer.'],
    ['每次回答时，必须包含“觉得”。','Include “I guess” in every answer.'],
    ['每次回答时，必须重复前一位玩家的一个词。','Repeat one word used by the previous player every time you answer.'],
    ['每次回答时，必须提到一个数字。','Mention a number every time you answer.'],
    ['每次回答时，必须看一眼自己左边的玩家。','Glance at the player on your left every time you answer.'],
    ['每次回答时，必须双手交握或抱胸。','Clasp your hands or cross your arms every time you answer.'],
    ['每次回答时，必须轻轻点头一次。','Nod once every time you answer.'],
    ['每次回答时，必须清嗓子。','Clear your throat every time you answer.'],
    ['回答时，不能与其他玩家对视。','Do not make eye contact with any other player during the game.'],
    ['回答时，不能与主持人对视。','Do not make eye contact with the host during the game.']
  ];

  const gameType=key=>key==='among'?'among':key==='letters'?'defence':null;
  const gameName=type=>type==='among'?'它在我们之中':'黑魔法防御';
  const token=()=>crypto.randomUUID();
  async function rpc(name,body){
    const response=await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`,{method:'POST',headers:{apikey:SUPABASE_KEY,Authorization:`Bearer ${SUPABASE_KEY}`,'Content-Type':'application/json'},body:JSON.stringify(body)});
    const data=await response.json().catch(()=>({error:'网络响应异常'}));
    if(!response.ok)throw new Error(data.message||data.error||'房间连接失败');
    if(data?.error)throw new Error(errorText(data.error));
    return data;
  }
  function errorText(code){return({ROOM_NOT_FOUND:'找不到这个房间，请检查房间码。',ROOM_FULL:'房间人数已满。',ROOM_STARTED:'游戏已经开始，不能再加入。',NAME_TAKEN:'这个昵称已经有人使用。',NEED_3_TO_5:'需要 3–5 名玩家才能开始。',NOT_HOST:'只有房主可以执行这个操作。',NO_CARDS:'题卡尚未录入，房间功能已就绪。'})[code]||code;}
  function panel(key){
    const type=gameType(key);if(!type)return'';
    const hidden=type==='defence'?' is-hidden':'';
    return `<section class="room-section${hidden}" id="room-panel" data-room-type="${type}"><div class="room-head"><div><p class="eyebrow">LIVE ROOM</p><h2>在线房间</h2></div><p>${type==='among'?'3–5 人加入同一房间。开始后，每个人只能看到自己的身份。':'组员加入同一房间，由房主抽取一张全组共享的题卡。'}</p></div><div id="room-view">${entry(type)}</div></section>`;
  }
  function entry(type){return `<div class="room-entry"><article class="room-box"><h3>创建房间</h3><p>输入临时昵称，生成一个房间码。</p><form class="room-form" id="create-room"><input name="nickname" maxlength="16" autocomplete="nickname" placeholder="你的临时昵称" required><button class="primary" type="submit">创建房间</button></form></article><article class="room-box"><h3>加入房间</h3><p>输入队友分享的房间码。</p><form class="room-form" id="join-room"><input name="nickname" maxlength="16" autocomplete="nickname" placeholder="你的临时昵称" required><input class="room-code-input" name="code" maxlength="6" placeholder="房间码" required><button class="secondary" type="submit">加入房间</button></form></article></div><p class="room-error" id="room-error"></p><p class="room-note">无需注册账号。房间和临时昵称只用于本轮游戏。</p>`;}
  function bind(key){
    clearInterval(timer);timer=null;currentGame=gameType(key);if(!currentGame)return;
    const panel=document.querySelector('#room-panel');if(!panel)return;
    document.querySelector('[data-room="defence"]')?.addEventListener('click',()=>{panel.classList.remove('is-hidden');panel.scrollIntoView({behavior:'smooth'});});
    const saved=sessionStorage.getItem(`room_${currentGame}`);if(saved){try{session=JSON.parse(saved);refresh();startPolling();return}catch{sessionStorage.removeItem(`room_${currentGame}`)}}
    bindEntry();
  }
  function bindEntry(){
    document.querySelector('#create-room')?.addEventListener('submit',async event=>{event.preventDefault();const form=new FormData(event.currentTarget);await enter('create_room',{p_game_type:currentGame,p_nickname:String(form.get('nickname')).trim(),p_player_token:token()});});
    document.querySelector('#join-room')?.addEventListener('submit',async event=>{event.preventDefault();const form=new FormData(event.currentTarget);await enter('join_room',{p_room_code:String(form.get('code')).trim().toUpperCase(),p_nickname:String(form.get('nickname')).trim(),p_player_token:token()});});
  }
  async function enter(method,body){try{setError('正在连接…');const data=await rpc(method,body);session={roomCode:data.room_code,playerToken:body.p_player_token,gameType:currentGame};sessionStorage.setItem(`room_${currentGame}`,JSON.stringify(session));await refresh();startPolling();}catch(error){setError(error.message)}}
  function setError(message){const el=document.querySelector('#room-error');if(el)el.textContent=message;}
  function startPolling(){clearInterval(timer);timer=setInterval(refresh,1800);}
  async function refresh(){if(!session)return;try{const state=await rpc('get_room_state',{p_room_code:session.roomCode,p_player_token:session.playerToken});renderLive(state);}catch(error){const el=document.querySelector('#room-stage-error');if(el)el.textContent=error.message;}}
  function renderLive(state){
    const view=document.querySelector('#room-view');if(!view)return;
    const count=state.players.length;
    const canStart=state.game_type==='among'&&state.status==='waiting'&&state.is_host&&count>=3&&count<=5;
    const controls=state.game_type==='among'?(state.status==='waiting'?(state.is_host?`<button class="primary" id="room-action" ${canStart?'':'disabled'}>分配身份并开始</button>`:'<p class="room-status">等待房主开始游戏…</p>'):''):(state.status==='waiting'?(state.is_host?'<button class="primary" id="room-action">共同抽取题卡</button>':'<p class="room-status">等待房主抽取题卡…</p>'):state.status==='started'?(state.is_host?'<button class="primary" id="finish-defence">解散房间并揭晓汤底</button>':'<p class="room-status">正在推理中，等待房主揭晓汤底…</p>'):'<p class="room-status room-finished">本轮已结束，汤底已揭晓。</p>');
    const stage=state.game_type==='among'?(state.status==='started'?identityStage(state):`<h3>等待玩家加入</h3><p class="room-status">满 3 人后房主可以开始，最多 5 人。系统会随机选出且只选出 1 位被附身者。</p>`):(state.shared_card?defenceStage(state.shared_card):`<h3>等待共同抽题</h3><p class="room-status">房主点击抽题后，同一房间的所有组员会看到同一张题卡。</p>`);
    view.innerHTML=`<div class="room-live"><aside class="room-sidebar"><small>房间码 · ROOM CODE</small><div class="room-code">${state.room_code}</div><b>${gameName(state.game_type)} · ${count}${state.game_type==='among'?'/5':''} 人</b><div class="player-list">${state.players.map(p=>`<div class="player"><span>${escapeHTML(p.nickname)}</span>${p.is_host?'<small>房主</small>':''}</div>`).join('')}</div></aside><div class="room-stage">${stage}<div class="room-actions">${controls}<button class="secondary" id="leave-room">离开房间</button></div><p class="room-error" id="room-stage-error"></p></div></div>`;
    document.querySelector('#room-action')?.addEventListener('click',act);
    document.querySelector('#finish-defence')?.addEventListener('click',finishDefence);
    document.querySelector('#leave-room')?.addEventListener('click',leave);
    document.querySelector('#reveal-identity')?.addEventListener('click',()=>{document.querySelector('#private-identity')?.classList.remove('is-concealed');document.querySelector('#reveal-identity')?.remove();});
    if(state.game_type==='defence'&&state.status==='finished'&&state.shared_card?.solution)showSolutionOnce(state);
  }
  function defenceStage(card){return `<article class="soup-surface-card"><div class="soup-card-meta"><span>BLACK MAGIC DEFENCE</span><small>${escapeHTML(card.difficulty||'')} · ${escapeHTML(card.time_limit||'')}</small></div><p>汤面 · THE MYSTERY</p><h3>${escapeHTML(card.title)}</h3><div class="soup-surface">${escapeHTML(card.content).replace(/\n/g,'<br>')}</div><small class="soup-hint">向主持人提出只能用“是 / 不是 / 无关”回答的问题，推理出完整真相。</small></article>`;}
  function showSolutionOnce(state){
    const key=`solution_${state.room_code}`;if(sessionStorage.getItem(key))return;sessionStorage.setItem(key,'1');
    const modal=document.querySelector('#rule-modal'),content=document.querySelector('#rule-content');if(!modal||!content)return;
    content.innerHTML=`<div class="soup-solution-card"><p class="rule-kicker">THE TRUTH REVEALED</p><h2 id="rule-title">汤底揭晓</h2><h3>${escapeHTML(state.shared_card.title)}</h3><div>${escapeHTML(state.shared_card.solution).replace(/\n/g,'<br>')}</div><button class="primary wide" data-solution-close>读完了</button></div>`;
    modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('locked');content.querySelector('[data-solution-close]').addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('locked');});
  }
  function identityStage(state){
    const possessed=state.own_role==='possessed';
    const rule=possessed?possessedRules[stableIndex(session.playerToken,possessedRules.length)]:null;
    return `<div class="identity-warning"><span>请遮住屏幕</span><small>DO NOT SHOW THIS CARD TO OTHER PLAYERS</small></div><button class="primary reveal-identity" id="reveal-identity">查看我的身份 · Reveal my identity</button><article class="identity-card ${possessed?'is-possessed':'is-human'} is-concealed" id="private-identity"><small>只对你可见 · YOUR IDENTITY</small><div class="identity-symbol">${possessed?'◉':'○'}</div><h3>${possessed?'你是“被附身者”':'你是“人类”'}</h3><h4>${possessed?'YOU ARE THE “POSSESSOR”':'YOU ARE “HUMAN”'}</h4>${possessed?`<div class="secret-rule"><small>你的秘密规则 · YOUR SECRET RULE</small><strong>${rule[0]}</strong><b>${rule[1]}</b></div><p>完成秘密规则，并避免在最终投票中被发现。</p><p class="identity-en">Complete your secret rule and avoid being detected in the final vote.</p>`:`<p>人群中混入了一名“被附身者”。仔细观察其他玩家的言语与动作，找出他们试图掩盖的异常。</p><p class="identity-en">A “Possessor” is hiding among the group. Watch the other players closely and identify the unusual behaviour they are trying to conceal.</p><strong class="human-goal">在最终投票中，找出真正的“被附身者”<br><span>Find the true “Possessor” in the final vote.</span></strong>`}</article>`;
  }
  function stableIndex(value,length){let hash=0;for(const char of String(value)){hash=((hash<<5)-hash)+char.charCodeAt(0);hash|=0;}return Math.abs(hash)%length;}
  async function act(){try{const name=currentGame==='among'?'start_among_game':'draw_defence_card';await rpc(name,{p_room_code:session.roomCode,p_player_token:session.playerToken});await refresh();}catch(error){const el=document.querySelector('#room-stage-error');if(el)el.textContent=error.message;}}
  async function finishDefence(){try{await rpc('finish_defence_game',{p_room_code:session.roomCode,p_player_token:session.playerToken});await refresh();}catch(error){const el=document.querySelector('#room-stage-error');if(el)el.textContent=error.message;}}
  async function leave(){const leaving=session;clearInterval(timer);timer=null;sessionStorage.removeItem(`room_${currentGame}`);session=null;if(leaving){try{await rpc('leave_room',{p_room_code:leaving.roomCode,p_player_token:leaving.playerToken});}catch{}}const view=document.querySelector('#room-view');if(view){view.innerHTML=entry(currentGame);bindEntry();}}
  function escapeHTML(text){return String(text).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
  return{panel,bind};
})();

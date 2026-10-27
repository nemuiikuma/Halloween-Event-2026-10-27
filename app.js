const PERSONALITY_URL = 'https://nemuiikuma.github.io/Halloween/';

const games = {
  mystery: {
    no:'01', icon:'◉', theme:'violet', en:'MYSTERY BOX', title:'恐怖箱',
    tagline:'别相信眼睛。今晚，触觉才是唯一线索。',
    intro:'珍贵的宝物藏在黑暗的箱子里。你敢把手伸进去，只凭触感把它找出来吗？',
    meta:['1–2 人','60–90 秒','触觉挑战'],
    modes:[
      {name:'单人模式', tag:'SOLO', text:'抽取任务卡后，把手伸进箱子，仅凭触觉寻找目标物品。限时 60 秒。'},
      {name:'双人协作', tag:'TEAM', text:'观察者可以看，但只能描述位置、形状和大小；探索者只能用手寻找。说出物品名称即挑战失败，限时 90 秒。'}
    ],
    win:'在时限内找到任务卡指定的物品，即为挑战成功。',
    accent:'#a675ff'
  },
  among: {
    no:'02', icon:'⌁', theme:'red', en:"IT'S AMONG US", title:'它在我们之中',
    tagline:'每个人都很正常——至少看起来如此。',
    intro:'你们之中有一位“被附身者”。听回答、看动作、抓住那一点不自然。',
    meta:['3–5 人','约 3–5 分钟','推理游戏'],
    steps:[
      ['抽取身份','随机领取身份卡：1 人是被附身者，其余为人类。'],
      ['秘密行动','被附身者需暗中完成身份卡上的秘密规则，同时隐藏异常。'],
      ['轮流问答','工作人员提出 3–5 个问题，所有人依次回答。人类观察措辞、动作与反应。'],
      ['讨论投票','短暂讨论后投票，选出你认为的被附身者。']
    ],
    win:'人类找出被附身者则人类获胜；若被附身者完成全部秘密规则且未被识破，则被附身者获胜。',
    accent:'#ff6a55'
  },
  ghost: {
    no:'03', icon:'✣', theme:'acid', en:'GHOSTBUSTERS', title:'去抓鬼！',
    tagline:'听清指令，遵守禁忌，别让手比脑子更快。',
    intro:'按照工作人员的口令操作桌上的万圣节玩具。但在开始前，你会先获得一条必须遵守的特殊规则。',
    meta:['1–2 人','60 秒','反应挑战'],
    rules:['特殊规则可能是“只能使用左手”“不能触碰某件玩具”，或听到特定关键词时必须反向行动。','指令会逐渐加快。只有同时完成口令并遵守特殊规则，才算一次有效指令。'],
    modes:[
      {name:'单人模式', tag:'SOLO', text:'60 秒内完成至少 5 条有效指令，错误不超过 2 次。'},
      {name:'双人协作', tag:'TEAM', text:'60 秒内共同完成至少 5 条指令，两人累计错误不超过 4 次。'}
    ],
    accent:'#d8ff69'
  },
  midnight: {
    no:'04', icon:'☎', theme:'cyan', en:'MIDNIGHT CALL · DARE DEVIL', title:'午夜凶铃',
    tagline:'一通不能说破的电话，或一场不能退缩的考验。',
    intro:'先选择你的挑战。两条路都通向胜利，也都可能通向社死现场。',
    meta:['单人挑战','限时任务','二选一'],
    modes:[
      {name:'午夜凶铃', tag:'MIDNIGHT CALL', text:'抽取一个秘密关键词，打给朋友或家人，并引导对方在 90 秒内主动说出它。你不能说出关键词，也不能直接要求对方重复某句话。'},
      {name:'魔鬼挑战', tag:'DARE DEVIL', text:'从三个限时挑战中选择一个：极速叠杯、筷子拯救眼球，或五回合“不要看那边”。完成所选挑战即可过关。'}
    ],
    subgames:['极速叠杯','眼球救援','不要看那边'],
    win:'完成你选择的挑战，即为成功。具体时限与动作由现场工作人员说明。',
    accent:'#65d7ff'
  },
  letters: {
    no:'05', icon:'✉', theme:'pink', en:'CURSED LETTERS', title:'诅咒信件',
    tagline:'每一封信都藏着一门课程，也藏着一次考验。',
    intro:'选择一封诅咒信件，完成信中指定的魔法挑战。你会抽到知识、谜题，还是一杯未知药水？',
    meta:['单人或组队','三类挑战','抽信决定'],
    modes:[
      {name:'魔法史', tag:'HISTORY OF MAGIC', text:'回答万圣节传说、节日文化或世界鬼怪相关问题。'},
      {name:'黑魔法防御术', tag:'DEFENCE', text:'破解谜语、情境推理或脑筋急转弯。'},
      {name:'魔药学', tag:'POTIONS', text:'品尝神秘饮品，并猜出其中的关键原料。'}
    ],
    win:'完成所选信件中的挑战，即可通关并获得盖章。涉及饮品时，如有过敏或饮食限制，请先告知工作人员。',
    accent:'#ff6fb5'
  },
  rewards: {
    no:'07', icon:'★', theme:'gold', en:'REWARDS · LUCKY DRAW', title:'兑奖规则',
    tagline:'收集印章，把今晚的冒险兑换成惊喜。',
    intro:'完成现场游戏可以获得印章。请保管好自己的集章卡，每人限用一张。',
    meta:['集章兑奖','幸运抽奖','每人一张卡'],
    tiers:[
      {count:'1–3 枚', name:'基础奖励', text:'可兑换基础奖品。'},
      {count:'4+ 种', name:'进阶奖励', text:'完成 4 个不同游戏，可兑换进阶奖品，并获得 1 次幸运抽奖机会。'},
      {count:'全部完成', name:'特别奖励', text:'完成全部现场游戏，可兑换特别奖品，并获得 1 次幸运抽奖机会。'},
      {count:'每多 4 枚', name:'追加抽奖', text:'之后每额外获得 4 枚印章，可再获得 1 次幸运抽奖机会。'}
    ],
    rules:['完成人格测试还会解锁你的万圣节隐藏身份。','奖品数量有限，兑换方式与最终解释以现场工作人员说明为准。'],
    accent:'#ffd45c'
  },
  diy: {
    no:'08', icon:'✂', theme:'mint', en:'HALLOWEEN DIY SESSION', title:'DIY Session',
    tagline:'把今晚的怪诞灵感，做成可以带走的纪念。',
    intro:'在指定时段参加 DIY Session，挑选一种创作，把属于你的万圣节作品带回家。',
    meta:['指定时段','材料现场提供','创意手作'],
    modes:[
      {name:'南瓜装饰', tag:'PUMPKIN ART', text:'使用彩笔、贴纸与装饰材料，为南瓜设计独一无二的表情和造型。'},
      {name:'万圣节小手作', tag:'CRAFT LAB', text:'用扭扭棒等材料制作魔法棒、发箍、发夹或其他万圣节小物。'}
    ],
    rules:['请按照现场时段和工作人员安排入场。','材料与席位数量有限；使用工具时请留意安全，并保持桌面整洁。'],
    accent:'#75f0bd'
  }
};

const order=['mystery','among','ghost','midnight','letters','personality','rewards','diy'];
const app=document.querySelector('#app');
const modal=document.querySelector('#rule-modal');
const ruleContent=document.querySelector('#rule-content');
const toast=document.querySelector('#toast');
const visited=new Set();

function card(key,index){
  if(key==='personality') return `<a class="card c6" href="${PERSONALITY_URL}"><span class="num">06</span><i>◈</i><div><small>PERSONALITY TEST</small><h3>万圣节人格测试</h3><p>天黑以后，哪个人格会悄悄苏醒？</p></div><b>开始测试 ↗</b></a>`;
  const g=games[key];
  return `<a class="card c${index+1}" href="#/${key}"><span class="num">${g.no}</span><i>${g.icon}</i><div><small>${g.en}</small><h3>${g.title}</h3><p>${g.tagline}</p></div><b>${key==='rewards'||key==='diy'?'查看详情':'进入游戏'} ↗</b></a>`;
}

function home(){
  document.title='万圣奇妙夜｜活动指南';
  app.className='';
  app.innerHTML=`<section class="hero"><div class="eyebrow">WELCOME, NIGHT CREATURES</div><h1>万圣<br><em>奇妙夜</em></h1><div class="intro"><p>八个入口，一整个怪诞夜晚。</p><span>选择一个板块，查看规则并开始你的万圣节冒险。</span></div><a class="scroll" href="#games">探索活动 <b>↓</b></a></section><section class="games" id="games"><div class="section-head"><p>CHOOSE YOUR ADVENTURE</p><h2>今晚，玩什么？</h2><span>01 — 08</span></div><div class="grid">${order.map(card).join('')}</div></section>`;
  window.scrollTo(0,0);
}

function ruleBody(g){
  return `${g.steps?`<ol class="steps">${g.steps.map((s,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><div><b>${s[0]}</b><p>${s[1]}</p></div></li>`).join('')}</ol>`:''}${g.rules?`<ul class="rule-list">${g.rules.map(r=>`<li>${r}</li>`).join('')}</ul>`:''}${g.modes?`<div class="mode-list">${g.modes.map(m=>`<article><small>${m.tag}</small><h3>${m.name}</h3><p>${m.text}</p></article>`).join('')}</div>`:''}${g.tiers?`<div class="tiers">${g.tiers.map(t=>`<article><strong>${t.count}</strong><div><h3>${t.name}</h3><p>${t.text}</p></div></article>`).join('')}</div>`:''}${g.win?`<div class="win"><span>通关条件</span><p>${g.win}</p></div>`:''}`;
}

function rulesHTML(g){
  return `<div class="rule-kicker">${g.no} · ${g.en}</div><h2 id="rule-title">${g.title}<br><em>游戏规则</em></h2><p class="rule-intro">${g.intro}</p>${ruleBody(g)}<button class="primary wide" data-close>我知道了，开始挑战</button>`;
}

function page(key){
  const g=games[key];
  if(!g){home();return;}
  document.title=`${g.title}｜万圣奇妙夜`;
  app.className=`game-page theme-${g.theme}`;
  app.innerHTML=`<section class="game-hero" style="--accent:${g.accent}"><a class="back" href="#/">← 返回活动大厅</a><div class="game-mark">${g.icon}</div><p class="game-en">${g.no} · ${g.en}</p><h1>${g.title}</h1><p class="tagline">${g.tagline}</p><div class="meta">${g.meta.map(m=>`<span>${m}</span>`).join('')}</div><div class="actions"><button class="primary" id="review-rules">查看完整规则</button>${key!=='rewards'&&key!=='diy'?'<button class="secondary" id="draw-card">随机抽取题卡 <span>↗</span></button>':''}</div></section>${g.modes?`<section class="choice-section"><p class="eyebrow">CHOOSE YOUR MODE</p><div class="choice-head"><h2>${key==='midnight'||key==='letters'?'选择你的挑战':'选择游戏模式'}</h2><span>规则看完后，从这里开始</span></div><div class="choices">${g.modes.map((m,i)=>`<button class="choice" data-choice="${m.name}"><small>0${i+1} / ${m.tag}</small><h3>${m.name}</h3><p>${m.text}</p><b>选择这个挑战 →</b></button>`).join('')}</div>${g.subgames?`<div class="subgames"><span>魔鬼挑战包含</span>${g.subgames.map(s=>`<i>${s}</i>`).join('')}</div>`:''}</section>`:''}<section class="recap"><div><p class="eyebrow">RULES, ALWAYS HERE</p><h2>需要再看一眼？</h2><p>规则不会消失。游戏过程中随时可以回来查看。</p></div><button class="secondary" id="review-rules-2">回顾规则</button></section>`;
  document.documentElement.style.setProperty('--page-accent',g.accent);
  bindPage(g,key);
  window.scrollTo(0,0);
  if(!visited.has(key)){visited.add(key);setTimeout(()=>openRules(g),180);}
}

function openRules(g){ruleContent.innerHTML=rulesHTML(g);modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('locked');ruleContent.querySelector('[data-close]').addEventListener('click',closeRules);}
function closeRules(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('locked');}
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2400);}
function bindPage(g,key){
  document.querySelector('#review-rules')?.addEventListener('click',()=>openRules(g));
  document.querySelector('#review-rules-2')?.addEventListener('click',()=>openRules(g));
  document.querySelector('#draw-card')?.addEventListener('click',()=>showToast('题卡正在准备中，下一阶段即可随机抽取 ✦'));
  document.querySelectorAll('.choice').forEach(button=>button.addEventListener('click',()=>showToast(`已选择「${button.dataset.choice}」· 题卡功能即将加入`)));
}

modal.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeRules));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeRules();});
function route(){const key=location.hash.replace(/^#\/?/,'').split('/')[0];if(key==='personality'){location.href=PERSONALITY_URL;return;}key?page(key):home();}
window.addEventListener('hashchange',route);
route();

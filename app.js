/opt/homebrew/Library/Homebrew/cmd/shellenv.sh: line 18: /bin/ps: Operation not permitted
const PERSONALITY_URL = 'https://nemuiikuma.github.io/Halloween/';

const mysteryCards = [
  {image:'assets/mystery/diamond.webp', alt:'水滴形宝石'},
  {image:'assets/mystery/pocket-watch-cutout.webp', alt:'古董怀表'},
  {image:'assets/mystery/blue-eye-ring-cutout.webp', alt:'蓝色眼球戒指'},
  {image:'assets/mystery/red-eye-ring-cutout.webp', alt:'红色眼球戒指'}
];

const games = {
  mystery: {
    no:'01', icon:'◉', theme:'violet', en:'MYSTERY BOX', title:'恐怖箱', accent:'#a675ff',
    cardText:'在未知的触感中，找回这些失落的宝物。',
    choices:['单人挑战 / Solo Challenge','双人合作 / Team Challenge'],
    rules:`
      <p class="rule-intro">午夜之后，一批珍贵的宝物被藏进了神秘箱子。传说中的宝石、古老的怀表……你敢伸出手，在未知的触感中找回这些失落的宝物吗？</p>
      <h3>单人挑战 / Solo Challenge</h3>
      <ul class="rule-list"><li>随机抽取一张任务卡，确认需要寻找的宝物。</li><li>依将手伸入神秘箱子，通过触摸寻找你的目标。</li><li>在<strong>60秒内</strong>成功找到并取出指定宝物，即挑战成功。</li></ul>
      <h3>双人合作 / Team Challenge</h3>
      <p>两人分别担任“观察者”和“探索者”。</p>
      <ul class="rule-list"><li><strong>观察者：</strong>可以看到箱内情况，但不能直接说出目标宝物的名称，只能通过位置、形状、大小等线索引导队友。</li><li><strong>探索者：</strong>根据队友的提示，在未知的触感中找到正确的宝物。</li><li>在 <strong>90秒内</strong> 成功取出指定宝物，即挑战成功。</li></ul>
      <p>观察者如果不小心说出了目标宝物的名称，本轮挑战将直接失败，小心不要说漏嘴哦～</p>`
  },
  among: {
    no:'02', icon:'⌁', theme:'red', en:"IT'S AMONG US", title:'它在我们之中', accent:'#ff6a55',
    cardText:'有什么东西悄悄混进了人群。',
    choices:[],
    rules:`
      <p class="rule-intro">午夜之后，有什么东西悄悄混进了人群。它看起来和普通人没什么两样，但一些不经意的小动作，可能会暴露它的真实身份……</p>
      <p>每轮由 <strong>3–5名玩家</strong> 参与，随机领取身份卡，其中1人为“被附身者”，其余为“人类”。</p>
      <ul class="rule-list"><li><strong>被附身者：</strong> 你的身份卡上藏着一条秘密规则。回答问题时必须严格遵守，同时想办法隐藏自己的异常行为，千万别露出破绽。</li><li><strong>人类：</strong> 工作人员将依次提出3–5个问题，所有玩家轮流回答。仔细观察身边的人，留意那些奇怪的用词、动作和反应。</li></ul>
      <p>问答结束后，进入最终指认环节。讨论并投票，看看能否找出隐藏在人群中的“被附身者”。</p>
      <h3>获胜条件｜How to Win</h3>
      <p><strong>人类阵营：</strong> 成功找出真正的“被附身者”，即获胜。</p>
      <p><strong>被附身者：</strong> 完成全部秘密规则，且没有被任何“人类”玩家识破，即获胜。</p>
      <p><strong>游戏时长： 约3–5分钟</strong></p>`
  },
  ghost: {
    no:'03', icon:'✣', theme:'acid', en:'GHOSTBUSTERS', title:'去抓鬼！', accent:'#d8ff69',
    cardText:'鬼怪们已经出动，你能跟上指令吗？',
    choices:['单人模式','双人模式'],
    rules:`
      <p class="rule-intro">鬼怪们已经出动，你能跟上指令，成功抓住它们吗？</p>
      <p>可以选择<strong>单人挑战</strong>或<strong>双人合作</strong>模式。</p>
      <ul class="rule-list"><li>游戏开始前，先领取本轮的特殊规则，再根据工作人员发出的指令，对指定的万圣节玩偶完成相应动作。</li><li>小心那些捣乱的特殊规则：只能使用左手、禁止触碰某个玩偶，或是听到特定词语时需要反向操作……千万别被迷惑。</li><li>随着游戏进行，指令会越来越快，难度也会逐渐升级。集中注意力，别让鬼怪趁乱逃跑。</li></ul>
      <h3>获胜条件｜How to Win</h3>
      <p><strong>单人模式：</strong> 在60秒内正确完成至少5个有效指令，且错误次数不超过2次，即挑战成功。</p>
      <p><strong>双人模式：</strong> 两名玩家需在60秒内合作完成至少5个有效指令，总错误次数不超过4次，即挑战成功。</p>`
  },
  midnight: {
    no:'04', icon:'☎', theme:'cyan', en:'MIDNIGHT CALL / DARE DEVIL', title:'午夜凶铃 / 魔鬼挑战', accent:'#65d7ff',
    cardText:'一项神秘的电话任务，或一场魔鬼的考验。',
    choices:['Option A｜午夜凶铃 Midnight Call','Option B｜魔鬼挑战 Dare Devil'],
    choiceDetails:['','极速叠杯 Speed Stacks｜筷子夹眼球 Eyeball Rescue｜别看那边 Don\'t Look That Way'],
    rules:`
      <h3>Option A｜午夜凶铃 Midnight Call</h3>
      <p>午夜时分，一项神秘的电话任务正在等待你……</p>
      <ul class="rule-list"><li>随机抽取一张“午夜任务卡”，解锁你的秘密关键词。</li><li>拨通一位朋友或家人的电话，想办法在聊天中引导对方说出目标词。</li><li>小心暴露任务，不能直接说出关键词，也不能要求对方重复指定词语哦！</li><li>在<strong>90秒</strong>内成功让对方说出目标词，即挑战成功。</li></ul>
      <h3>Option B｜魔鬼挑战 Dare Devil</h3>
      <p>不想打电话？那就接受魔鬼的考验。随机抽取一项限时挑战，看看你能否顺利过关。</p>
      <ul class="rule-list"><li><strong>极速叠杯｜Speed Stacks：</strong>手速大考验——在倒计时结束前，按照指定要求完成杯子堆叠。</li><li><strong>筷子夹眼球｜Eyeball Rescue：</strong>散落的眼球正在等待救援——在倒计时结束前，用筷子将指定数量的“眼球”转移到另一容器吧。</li><li><strong>别看那边｜Don't Look That Way：</strong>你的直觉可能会出卖你——与工作人员面对面进行5轮方向挑战，工作人员会随机指向左侧或右侧，你需要同时转头。若转头方向与手指方向一致，则挑战失败。</li></ul>
      <h3>获胜条件｜How to Win</h3>
      <p>完成所选挑战，即挑战成功！</p>`
  },
  letters: {
    no:'05', icon:'✉', theme:'pink', en:'CURSED LETTERS', title:'诅咒信件', accent:'#ff6fb5',
    cardText:'选择一封密函，完成对应的魔法挑战。',
    choices:['History of Magic｜魔法史','Defence Against the Dark Arts｜黑魔法防御','Potions｜魔药学'],
    rules:`
      <p class="rule-intro">从桌上选择一封神秘的“诅咒信件”，根据密函内容，完成对应的魔法挑战。</p>
      <h3>History of Magic｜魔法史</h3>
      <p>你对魔法世界了解多少？从万圣节的古老传说到世界各地的神秘鬼怪，回答魔法史知识问答，看看你是否有成为魔法学者的潜质。</p>
      <h3>Defence Against the Dark Arts｜黑魔法防御</h3>
      <p>黑魔法考验的不只是勇气，还有你的推理能力。破解脑筋急转弯，或与队友一起寻找情境谜题中隐藏的真相，成功解开谜团才能通过考验。</p>
      <h3>Potions｜魔药学</h3>
      <p>魔药课上出现了几杯配方不明的神秘饮品。发挥你的味觉侦探能力，品尝魔药并猜测其中隐藏的原料，看看你能否破解魔药配方。</p>
      <h3>获胜条件｜How to Win</h3>
      <p>成功完成所选密函对应的挑战，即可通关！</p>`
  },
  rewards: {
    no:'06', icon:'★', theme:'gold', en:'REWARDS & LUCKY DRAW', title:'兑奖摊位', accent:'#ffd45c',
    cardText:'集章兑奖，解锁幸运抽奖。', choices:[],
    rules:`
      <h3>集章兑奖｜Stamp & Redeem</h3>
      <p>参与现场小游戏，完成挑战即可获得对应印章！</p>
      <ul class="rule-list"><li><strong>1–3个印章：</strong> 兑换基础奖品</li><li><strong>4个及以上不同印章：</strong> 兑换进阶奖品，并获得1次Lucky Draw 抽奖机会</li><li><strong>完成全部游戏：</strong> 获得特别奖品及1次Lucky Draw 抽奖机会</li></ul>
      <p><strong>温馨提示：</strong> 每人使用一张集章卡，请妥善保管，凭卡兑换奖品喔～</p>
      <h3>幸运抽奖｜Lucky Draw</h3>
      <p>集齐<strong>4个不同摊位的印章</strong>，即可参与一次幸运抽奖！</p>
      <p>获得额外4枚印章，即可获得再次抽奖的机会哦</p>
      <h3>万圣节人格测试｜Halloween Identity Test</h3>
      <p>完成现场趣味测试，解锁你的万圣节隐藏身份！</p>`
  },
  diy: {
    no:'07', icon:'✂', theme:'mint', en:'HALLOWEEN DIY WORKSHOP', title:'万圣节DIY', accent:'#75f0bd',
    cardText:'制作南瓜雕刻 / 扭扭棒～',
    choices:['DIY A｜南瓜灯制作 Pumpkin Decorating','DIY B｜万圣节扭扭棒创作 Halloween Crafts'],
    rules:`
      <p class="rule-intro"><strong>请根据预约时段来DIY Session制作南瓜雕刻/扭扭棒～</strong></p>
      <h3>DIY A｜南瓜灯制作 Pumpkin Decorating</h3>
      <p>万圣节到了，南瓜们也准备换上新面孔。</p>
      <p>是露出邪恶笑容的南瓜怪，还是古灵精怪的可爱南瓜？拿起彩笔，搭配贴纸和各种装饰材料，发挥你的想象力，为南瓜设计一张独一无二的万圣节面孔吧。</p>
      <h3>DIY B｜万圣节扭扭棒创作 Halloween Crafts</h3>
      <p>女巫的魔杖不一定来自魔法商店，也可以出自你的双手。</p>
      <p>用五颜六色的扭扭棒，制作充满魔法气息的女巫魔杖，或把南瓜、幽灵和蝙蝠变成可爱的发箍与发夹。快来为自己的万圣节装扮增添一点奇妙的魔法元素～</p>`
  }
};

const order=['mystery','among','ghost','midnight','letters','rewards','diy','personality'];
const app=document.querySelector('#app');
const modal=document.querySelector('#rule-modal');
const ruleContent=document.querySelector('#rule-content');
const toast=document.querySelector('#toast');
const visited=new Set();

function card(key){
  if(key==='personality') return `<a class="card c8" href="${PERSONALITY_URL}"><span class="num">08</span><i>◈</i><div><small>HALLOWEEN IDENTITY TEST</small><h3>万圣节人格测试</h3><p>天黑以后，哪个人格会悄悄苏醒？</p></div><b>开始测试 ↗</b></a>`;
  const g=games[key];
  return `<a class="card c${Number(g.no)}" href="#/${key}"><span class="num">${g.no}</span><i>${g.icon}</i><div><small>${g.en}</small><h3>${g.title}</h3><p>${g.cardText}</p></div><b>${key==='rewards'||key==='diy'?'查看详情':'进入游戏'} ↗</b></a>`;
}

function home(){
  document.title='After Midnight｜午夜之后'; app.className='';
  app.innerHTML=`<section class="hero"><div class="eyebrow">HALLOWEEN LIMITED-TIME CHALLENGE</div><h1>AFTER<br><em>MIDNIGHT</em></h1><div class="hero-cn">午夜之后</div><div class="intro"><p>万圣节限时挑战</p><span>城市陷入沉睡，午夜之后，熟悉的规则开始失效，有什么危险的东西即将苏醒</span></div><a class="scroll" href="#games">探索活动 <b>↓</b></a></section><section class="games" id="games"><div class="section-head"><p>CHOOSE YOUR ADVENTURE</p><h2>午夜之后</h2><span>01 — 08</span></div><div class="grid">${order.map(card).join('')}</div></section>`;
  window.scrollTo(0,0);
}

function rulesHTML(g){return `<div class="rule-kicker">${g.no}｜${g.title} ${g.en}</div><h2 id="rule-title">游戏规则<em>How to Play</em></h2><div class="rule-copy">${g.rules}</div><button class="primary wide" data-close>我知道了，开始挑战</button>`;}

function page(key){
  const g=games[key]; if(!g){home();return;}
  document.title=`${g.title}｜After Midnight`; app.className=`game-page theme-${g.theme}`;
  const choices=g.choices.length?`<section class="choice-section" id="challenge-options"><p class="eyebrow">CHOOSE YOUR CHALLENGE</p><div class="choice-head"><h2>选择挑战</h2><span>阅读规则后，从这里开始</span></div><div class="choices">${g.choices.map((name,i)=>`<button class="choice" data-choice="${name}" ${key==='letters'&&i===1?'data-room="defence"':''}><small>0${i+1}</small><h3>${name}</h3>${g.choiceDetails?.[i]?`<p class="choice-detail">${g.choiceDetails[i]}</p>`:''}<b>选择这个挑战 →</b></button>`).join('')}</div></section>`:'';
  const isInfo=key==='rewards'||key==='diy';
  const actionButton=key==='mystery'||key==='ghost'?'<button class="secondary" id="start-challenge">开始挑战 <span>↓</span></button>':key==='among'?'<button class="secondary" id="open-room">在线组队 <span>↓</span></button>':Number(g.no)<=5?'<button class="secondary" id="draw-card">随机抽取题卡 <span>↗</span></button>':'';
  const heroActions=isInfo?'':`<div class="actions"><button class="primary" id="review-rules">查看完整规则</button>${actionButton}</div>`;
  const inlineRules=isInfo?`<section class="inline-rules"><div class="rule-kicker">${g.no}｜${g.title} ${g.en}</div><div class="rule-copy">${g.rules}</div></section>`:'';
  const recap=isInfo?'':`<section class="recap"><div><p class="eyebrow">RULES, ALWAYS HERE</p><h2>需要再看一眼？</h2><p>游戏过程中，随时可以回来查看规则。</p></div><button class="secondary" id="review-rules-2">回顾规则</button></section>`;
  const roomPanel=window.RoomUI?.panel?.(key)||'';
  const mysteryDraw=key==='mystery'?`<section class="mystery-draw is-hidden" id="mystery-draw" aria-live="polite"><div class="mystery-draw-head"><p class="eyebrow">YOUR MISSION</p><h2>本轮题卡</h2></div><div id="mystery-card-shell"></div></section>`:'';
  app.innerHTML=`<section class="game-hero ${isInfo?'info-hero':''}" style="--accent:${g.accent}"><a class="back" href="#/">← 返回活动大厅</a><div class="game-mark">${g.icon}</div><p class="game-en">${g.no}｜${g.en}</p><h1>${g.title}</h1>${heroActions}</section>${inlineRules}${choices}${mysteryDraw}${roomPanel}${recap}`;
  document.documentElement.style.setProperty('--page-accent',g.accent); bindPage(g,key); window.RoomUI?.bind?.(key); window.scrollTo(0,0);
  if(!isInfo&&!visited.has(key)){visited.add(key);setTimeout(()=>openRules(g),180);}
}

function openRules(g){ruleContent.innerHTML=rulesHTML(g);modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('locked');ruleContent.querySelector('[data-close]').addEventListener('click',closeRules);}
function closeRules(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('locked');}
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2400);}
function drawMysteryCard(mode){
  const section=document.querySelector('#mystery-draw');const shell=document.querySelector('#mystery-card-shell');if(!section||!shell)return;
  const last=Number(section.dataset.last??-1);let index=Math.floor(Math.random()*mysteryCards.length);if(mysteryCards.length>1&&index===last)index=(index+1)%mysteryCards.length;section.dataset.last=index;
  const card=mysteryCards[index];section.classList.remove('is-hidden');
  shell.innerHTML=`<article class="mystery-task-card"><div class="mystery-card-meta"><span>MISSION ${String(index+1).padStart(2,'0')}</span><small>${mode||'随机任务 / Random Mission'}</small></div><div class="mystery-card-copy"><strong>你的目标是找到以下物品</strong><b>Your goal is to find the following item</b></div><div class="mystery-object-stage"><div class="mystery-glow"></div><img class="${card.kind==='photo'?'is-photo':''}" src="${card.image}" alt="${card.alt}"></div><div class="mystery-card-actions"><button class="primary" id="draw-again">换一张题卡 · Draw another</button><button class="secondary" id="card-review">回顾规则</button></div></article>`;
  document.querySelector('#draw-again')?.addEventListener('click',()=>drawMysteryCard(mode));document.querySelector('#card-review')?.addEventListener('click',()=>openRules(games.mystery));section.scrollIntoView({behavior:'smooth',block:'start'});
}
function bindPage(g,key){document.querySelector('#review-rules')?.addEventListener('click',()=>openRules(g));document.querySelector('#review-rules-2')?.addEventListener('click',()=>openRules(g));document.querySelector('#start-challenge')?.addEventListener('click',()=>document.querySelector('#challenge-options')?.scrollIntoView({behavior:'smooth'}));document.querySelector('#open-room')?.addEventListener('click',()=>document.querySelector('#room-panel')?.scrollIntoView({behavior:'smooth'}));document.querySelector('#draw-card')?.addEventListener('click',()=>showToast('题卡正在准备中，下一阶段即可随机抽取 ✦'));document.querySelectorAll('.choice:not([data-room])').forEach(button=>button.addEventListener('click',()=>key==='mystery'?drawMysteryCard(button.dataset.choice):showToast(`已选择「${button.dataset.choice}」· 题卡功能即将加入`)));}

modal.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeRules));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeRules();});
function route(){closeRules();const key=location.hash.replace(/^#\/?/,'').split('/')[0];key?page(key):home();}
window.addEventListener('hashchange',route); route();

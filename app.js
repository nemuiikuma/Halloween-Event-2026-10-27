const PERSONALITY_URL = 'https://nemuiikuma.github.io/Halloween/';

const mysteryCards = [
  {image:'assets/mystery/diamond.png', alt:'水滴形宝石'},
  {image:'assets/mystery/pocket-watch.png', alt:'古董怀表'},
  {image:'assets/mystery/blue-eye-ring.png', alt:'蓝色眼球戒指'},
  {image:'assets/mystery/red-eye-ring.png', alt:'红色眼球戒指'}
];

const ghostSoloCards = [
  ['幽灵伪装','「小幽灵」偷偷披上了「白色小猫」的外衣，试图躲过你的追捕。当你听到「小幽灵」时，需要对「白色小猫」作出相应动作。','小幽灵也为你施加了魔法，听到「Thriller!」时，需要迅速击掌并欢呼。'],
  ['南瓜变身','「万圣南瓜」中了神秘的变身魔法，伪装成了「猫头鹰」。当你听到「万圣南瓜」时，需要对「猫头鹰」作出相应动作。','猫头鹰也为你施加了魔法，听到「Thriller!」时，需要迅速击掌并欢呼。'],
  ['黑猫替身','「黑色小猫」被施加了诅咒，与「邪恶小熊」发生了身份错乱。当你听到「黑色小猫」时，需要对「邪恶小熊」作出相应动作。','你也受到神秘魔法的影响，听到「Thriller!」时，需要迅速击掌并欢呼。'],
  ['乌鸦幻影','「乌鸦」在午夜施展了幻影魔法，把自己的身影藏进了「蝙蝠」之中。当你听到「乌鸦」时，需要对「蝙蝠」作出相应动作。','「乌鸦」也为你施加了魔法，听到「Thriller!」时，需要迅速击掌并欢呼。'],
  ['恶魔魔法','「小恶魔」偷偷喝下了女巫的变形药水，变成了「万圣南瓜」的模样。当你听到「小恶魔」时，需要对「万圣南瓜」作出相应动作。','「小恶魔」也为你施加了魔法，听到「Thriller!」时，需要迅速击掌并欢呼。'],
  ['蝙蝠迷踪','「蝙蝠」被黑夜魔法迷惑，变成了「乌鸦」的模样。当你听到「蝙蝠」时，需要对「乌鸦」作出相应动作。','「蝙蝠」也为你施加了魔法，听到「Thriller!」时，需要迅速击掌并欢呼。'],
  ['小熊诅咒','「邪恶小熊」中了女巫的诅咒，躲进了「黑色小猫」的身份里。当你听到「邪恶小熊」时，需要对「黑色小猫」作出相应动作。','女巫也为你施加了魔法，听到「Thriller!」时，需要迅速击掌并欢呼。'],
  ['白猫幻术','「白色小猫」被神秘力量附身，伪装成了「小幽灵」。当你听到「白色小猫」时，需要对「小幽灵」作出相应动作。','「白色小猫」也为你施加了魔法，听到「Thriller!」时，需要迅速击掌并欢呼。'],
  ['猫头鹰魔咒','「猫头鹰」被施加了午夜魔咒，失去了原本的模样，变成了「小恶魔」。当你听到「猫头鹰」时，需要对「小恶魔」作出相应动作。','「小恶魔」也为你施加了魔法，听到「Thriller!」时，需要迅速击掌并欢呼。'],
  ['幽灵变身','「小幽灵」偷偷学会了变身术，化作了「猫头鹰」，混在其他玩偶之中。当你听到「小幽灵」时，需要对「猫头鹰」作出相应动作。','「小幽灵」也为你施加了魔法，听到「Thriller!」时，需要迅速击掌并欢呼。'],
  ['南瓜迷雾','「万圣南瓜」在午夜迷雾中消失了踪影，却留下了一只「黑色小猫」作为替身。当你听到「万圣南瓜」时，需要对「黑色小猫」作出相应动作。','「万圣南瓜」也为你施加了魔法，听到「Thriller!」时，需要迅速击掌并欢呼。'],
  ['黑猫幻象','「黑色小猫」中了幻象魔法，所有人听到它的名字时，真正需要寻找的却是「乌鸦」。当你听到「黑色小猫」时，需要对「乌鸦」作出相应动作。','女巫也为你施加了魔法，听到「Thriller!」时，需要迅速击掌并欢呼。'],
  ['恶魔替身','「小恶魔」为了逃避追捕，找来了「邪恶小熊」替自己接受所有指令。当你听到「小恶魔」时，需要对「邪恶小熊」作出相应动作。','「小恶魔」也为你施加了魔法，听到「Thriller!」时，需要迅速击掌并欢呼。'],
  ['蝙蝠伪装','「蝙蝠」施展了伪装魔法，悄悄混进了「白色小猫」的身份里。当你听到「蝙蝠」时，需要对「白色小猫」作出相应动作。','「蝙蝠」也为你施加了魔法，听到「Thriller!」时，需要迅速击掌并欢呼。'],
  ['午夜乌鸦','午夜钟声响起，「乌鸦」被小幽灵的力量附身，化作了「小幽灵」。当你听到「乌鸦」时，需要对「小幽灵」作出相应动作。','「小幽灵」也为你施加了魔法，听到「Thriller!」时，需要迅速击掌并欢呼。']
];

const ghostTeamCards = [
  ['双人抓鬼大作战——抓鬼','听到「抓鬼」时，两人同时用单手按住各自最喜欢的玩偶，且不能选择同一个。','听到「Thriller!」时，玩家 A 和 B 必须迅速击掌并欢呼。'],
  ['双人抓鬼大作战——万圣节','听到「万圣节」时，玩家 A 和 B 必须迅速交换位置。','听到「Thriller!」时，玩家 A 和 B 必须迅速击掌并欢呼。'],
  ['双人抓鬼大作战——反向','听到「反向」时，玩家需要执行与指令相反的动作。','听到「Thriller!」时，玩家 A 和 B 必须迅速击掌并欢呼。']
];

const midnightCards = [
  {kind:'目标词', target:'吸血鬼', en:'VAMPIRE'},
  {kind:'目标词', target:'南瓜灯', en:"JACK-O'-LANTERN"},
  {kind:'目标词', target:'科学怪人', en:'FRANKENSTEIN'},
  {kind:'目标词', target:'德古拉', en:'DRACULA'},
  {kind:'目标词', target:'招魂', en:'THE CONJURING'},
  {kind:'目标词', target:'女巫', en:'WITCH'},
  {kind:'目标词', target:'不给糖就捣蛋', en:'TRICK OR TREAT'},
  {kind:'目标词', target:'木乃伊', en:'MUMMY'},
  {kind:'目标词', target:'狼人', en:'WEREWOLF'},
  {kind:'目标词', target:'僵尸', en:'ZOMBIE'},
  {kind:'目标句', target:'你是不是喝多了？'},
  {kind:'目标句', target:'你没病吧？/ 你没事儿吧？'},
  {kind:'目标句', target:'你走开啊！'},
  {kind:'目标句', target:'你不要过来啊！'},
  {kind:'目标句', target:'亲爱的 / 宝贝'},
  {kind:'目标句', target:'我不同意'},
  {kind:'目标句', target:'你在干嘛？'},
  {kind:'目标句', target:'你认真的嘛？'},
  {kind:'目标句', target:'你是不是疯了？'},
  {kind:'目标句', target:'快去睡觉！'}
];

const historyQuestions = [
  {n:1,category:'西方文化·万圣节起源',cn:'万圣节（Halloween）的历史与古代凯尔特人的一个传统节日密切相关。这个被认为与生死世界界限变得模糊有关的节日叫什么？',en:'Halloween has historical roots in an ancient Celtic festival associated with a time when the boundary between the world of the living and the world of the dead was believed to become blurred. What was this festival called?',options:['A. Beltane（贝尔坦节）','B. Samhain（萨温节）','C. Yule（尤尔节）','D. Imbolc（因博尔克节）'],answer:'B'},
  {n:2,category:'墨西哥文化·亡灵节',cn:'在墨西哥亡灵节（Day of the Dead）中，人们会用一种鲜艳的橘黄色花朵装饰祭坛和道路，传说它能够指引逝去的亲人回家。这种花是什么？',en:"During Mexico's Day of the Dead celebrations, people decorate altars and pathways with bright orange-yellow flowers that are believed to guide the spirits of deceased loved ones home. What are these flowers called?",options:['A. Sunflower（向日葵）','B. Calendula（金盏花）','C. Marigold（万寿菊）','D. Chrysanthemum（菊花）'],answer:'C'},
  {n:3,category:'日本文化·妖怪传说',cn:'日本民间传说中，有一种只有一只眼睛、一条腿，还伸着长舌头的妖怪，被称为「唐伞小僧」（Karakasa-kozō）。它原本是什么物品？',en:'In Japanese folklore, a yokai called Karakasa-kozō is often depicted with one eye, one leg, and a long tongue. What everyday object did it originally come from?',options:['A. Mirror（镜子）','B. Wooden Clog（木屐）','C. Lantern（灯笼）','D. Umbrella（雨伞）'],answer:'D'},
  {n:4,category:'泰国文化·飞头鬼',cn:'泰国民间传说中，有一种叫作 Krasue 的鬼怪，夜晚会以头颅悬浮在空中的形象出现。它最特别的外貌特征是什么？',en:'In Thai folklore, a supernatural creature called Krasue is said to appear at night as a floating human head. What is its most distinctive physical feature?',options:['A. Internal organs hanging beneath its head（头下悬挂着内脏）','B. Three horns growing from its head（头顶长着三只角）','C. Bird-like wings attached to its body（长着鸟类的翅膀）',"D. A snake's tail extending from its mouth（嘴里伸出蛇的尾巴）"],answer:'A'},
  {n:5,category:'西方传说·狼人',cn:'在许多经典狼人（Werewolf）故事中，哪种材质制作的武器被认为特别能够伤害或杀死狼人？',en:'In many classic werewolf stories, weapons made from which material are believed to be especially effective at harming or killing werewolves?',options:['A. Gold（黄金）','B. Bronze（青铜）','C. Silver（银）','D. Iron（铁）'],answer:'C'},
  {n:6,category:'西方文化·南瓜灯',cn:'万圣节的南瓜灯有一个特别的英文名称。以下哪个是它的正确名称？',en:'The carved pumpkin lantern commonly seen during Halloween has a special English name. Which of the following is correct?',options:["A. Jack-o'-lantern","B. Will-o'-the-wisp",'C. Halloween Lantern','D. Pumpkin Spirit'],answer:'A'},
  {n:7,category:'经典动画·圣诞夜惊魂',cn:'在经典动画电影《圣诞夜惊魂》（The Nightmare Before Christmas）中，拥有瘦长骷髅身躯、被称为「南瓜王」的主角叫什么名字？',en:'In the animated film The Nightmare Before Christmas, what is the name of the tall, skeleton-like main character known as the Pumpkin King?',options:['A. Victor Van Dort','B. Edward Scissorhands','C. Beetlejuice','D. Jack Skellington'],answer:'D'},
  {n:8,category:'西方文学·德古拉',cn:'在经典吸血鬼小说《德古拉》（Dracula）中，德古拉伯爵的城堡位于欧洲的哪个历史地区？',en:"In the classic vampire novel Dracula, in which historical region of Europe is Count Dracula's castle located?",options:['A. Bavaria（巴伐利亚）','B. Transylvania（特兰西瓦尼亚）','C. Tuscany（托斯卡纳）','D. Normandy（诺曼底）'],answer:'B'},
  {n:9,category:'希腊神话·塞壬',cn:'希腊神话中，有一种神秘生物会以美妙的歌声诱惑水手，使船只驶向危险的海域。这种生物叫什么？',en:'In Greek mythology, which mythical creatures lure sailors toward dangerous waters with their enchanting songs?',options:['A. Harpies（哈耳庇厄）','B. Medusa（美杜莎）','C. Sirens（塞壬）','D. Sphinxes（斯芬克斯）'],answer:'C'},
  {n:10,category:'经典恐怖电影·鬼娃回魂',cn:'在经典恐怖电影《鬼娃回魂》（Child\'s Play）中，那个被杀人犯灵魂附身的红发玩偶叫什么名字？',en:"In the classic horror film Child's Play, what is the name of the red-haired doll possessed by the soul of a serial killer?",options:['A. Annabelle（安娜贝尔）','B. Chucky（恰吉）','C. Billy（比利）','D. Slappy（史莱皮）'],answer:'B'},
  {n:11,category:'西方都市传说·血腥玛丽',cn:'在西方著名的都市传说中，据说深夜对着镜子反复呼唤某个名字，就可能召唤出镜中的神秘鬼魂。这个名字是什么？',en:'According to a famous Western urban legend, repeatedly saying a certain name in front of a mirror late at night may summon a mysterious ghost. What is that name?',options:['A. Bloody Mary（血腥玛丽）','B. La Llorona（哭泣的女人）','C. Banshee（报丧女妖）','D. Lady in White（白衣女士）'],answer:'A'},
  {n:12,category:'西方神秘文化·显灵板',cn:'在欧美都市传说和恐怖电影中，人们常使用一种印有字母、数字以及 YES / NO 的板子，试图与灵魂交流。这种工具叫什么？',en:'In Western urban legends and horror films, people sometimes use a board marked with letters, numbers, and the words YES and NO to communicate with spirits. What is this board called?',options:['A. Tarot Cards（塔罗牌）','B. Crystal Ball（水晶球）','C. Spirit Mirror（灵镜）','D. Ouija Board（显灵板）'],answer:'D'},
  {n:13,category:'中国文化·中元节',cn:'中国传统文化中的中元节与祭祖、追思亡者有关。请问中元节通常是在农历哪一天？',en:'In Chinese culture, the Zhongyuan Festival, also known as the Ghost Festival, is associated with honoring ancestors and remembering the deceased. On which day of the lunar calendar is it traditionally observed?',options:['A. 15th day of the 1st lunar month（正月十五）','B. 5th day of the 5th lunar month（五月初五）','C. 15th day of the 7th lunar month（七月十五）','D. 9th day of the 9th lunar month（九月初九）'],answer:'C'},
  {n:14,category:'爱尔兰文化·南瓜灯的起源',cn:'如今人们通常使用南瓜雕刻万圣节灯笼，但在爱尔兰早期传统中，人们曾使用哪种根茎植物制作类似的灯笼？',en:'Today, pumpkins are commonly carved into Halloween lanterns. However, in early Irish traditions, which root vegetable was used to make similar lanterns?',options:['A. Turnip（萝卜）','B. Potato（土豆）','C. Carrot（胡萝卜）','D. Beetroot（甜菜根）'],answer:'A'},
  {n:15,category:'墨西哥文化·亡灵节祭坛',cn:'在墨西哥亡灵节中，人们会在祭坛（Ofrenda）上摆放逝去亲人的照片、蜡烛、鲜花和食物。根据传统习俗，摆放食物和饮水主要是为了什么？',en:"During Mexico's Day of the Dead celebrations, families place photographs, candles, flowers, food, and water on an ofrenda. According to tradition, what is the main purpose of offering food and water?",options:['A. To present gifts to festival organizers（作为献给节日主持人的礼物）','B. To welcome and nourish the returning spirits of loved ones（招待归来的亡者灵魂）','C. To provide refreshments for parade participants（为参加游行的人提供食物）','D. To symbolize a successful harvest in the coming year（象征来年的农业丰收）'],answer:'B'},
  {n:16,category:'日本文化·百鬼夜行',cn:'在日本妖怪文化中，「百鬼夜行」（Hyakki Yagyō）是一个非常经典的概念。它通常描述什么场景？',en:'In Japanese yokai folklore, Hyakki Yagyō, often translated as the Night Parade of One Hundred Demons, traditionally describes which scene?',options:['A. One hundred samurai patrolling at night（一百位武士在夜间巡逻）','B. A group of foxes performing a moonlit ritual（一群狐狸在月下举行祭祀）','C. A procession of supernatural creatures marching through the night（妖怪们在夜间成群游行）','D. Spirits sailing back to the human world by boat（亡者乘坐船只返回人间）'],answer:'C'},
  {n:17,category:'经典动画·鬼妈妈',cn:'在奇幻恐怖动画《鬼妈妈》（Coraline）中，女主角来到一个看似完美的平行世界，却发现那里的人有一个诡异的外貌特征。他们的眼睛被什么东西代替了？',en:'In the dark fantasy animated film Coraline, the main character discovers a seemingly perfect parallel world. However, the people there have a disturbing feature. What replaces their eyes?',options:['A. Glass Beads（玻璃珠）','B. Gemstones（宝石）','C. Coins（硬币）','D. Buttons（纽扣）'],answer:'D'},
  {n:18,category:'经典影视·星期三',cn:'在 Netflix 剧集《星期三》（Wednesday）中，女主角就读于一所专门接纳拥有特殊能力学生的神秘学院。这所学院的英文名称是什么？',en:'In the Netflix series Wednesday, the main character attends a mysterious school for students with supernatural abilities. What is the name of this academy?',options:['A. Nevermore Academy','B. Blackwood Academy','C. Ravenwood Academy','D. Nightshade Academy'],answer:'A'}
];

const erisedCards = [
  {cn:'深夜降临后，死亡手持着镰刀逼近，只要你转身逃跑就会被从背后斩首。',en:'Past midnight, death approaches with a sickle in hand; the moment you turn to flee, you shall be decapitated from behind.',hint:'Courage',cipher:'FMCAIEH',answer:'FACE HIM'},
  {cn:'诅咒的画卷中，画像里的女人正缓缓从画框里伸出头来。',en:'Within the cursed scroll, the woman in the portrait is slowly stretching her head out of the frame.',hint:'She’s cold',cipher:'RCPTIUREEEVCOTH',answer:'COVER THE PICTURE'},
  {cn:'沼泽中的女巫向你施放了定身咒，你的双腿被锁无法移动。',en:'The witch of the swamp has cast a binding curse upon you, locking your legs with her chain.',hint:'6, 4, 8, 3',cipher:'EOTEKWHSNNLKKLITEUCOY',answer:'UNLOCK WITH SKELETON KEY'},
  {cn:'面对使者的致命一击，你需要以最高效的手段进行复仇。',en:'Fearing the demon’s fatal strike, you must exact your revenge with the utmost efficiency.',hint:'5',cipher:'FREEYAOAYEENN',answer:'AN EYE FOR AN EYE'},
  {cn:'古老地牢里传来凶兽的咆哮，重铁门即将被撞开。',en:'The ferocious beast’s roar echoes from the ancient dungeon, and the heavy iron door is about to be smashed open.',hint:'Green',cipher:'ONFERUTIHEXTR',answer:'RUN FOR THE EXIT'},
  {cn:'亡灵的诅咒正在房间里扩散，只有特定的符文能镇压它。',en:'The undead curse is spreading throughout the room; only specific runes can suppress it.',hint:'Perhaps you can cast an ancient RUNE? (1, 2, RUNE, 4)',cipher:'TRLEAWDEHEURANS',answer:'DRAW THE RUNE SEAL'},
  {cn:'附身在同伴身上的恶灵正借用他的獠牙向你发出威胁。',en:'The evil spirit possessing your companion is showing its fangs to issue threats against you.',hint:'Want coffee?',cipher:'FRNEADIUEPYOWKUR',answer:'WAKE UP YOUR FRIEND'},
  {cn:'邪恶的祭坛上正燃烧着黑色的火焰，为深渊使者提供源源不断的力量。',en:'Black flames are burning on the wicked altar, fueling the abyss envoy with a continuous source of power.',hint:'Aw it burns! Stop it, quick!',cipher:'EBAFEOMLTWHOLUT',answer:'BLOW OUT THE FLAME'},
  {cn:'幽灵船长向你伸出枯骨之手，邀请你接下引航的罗盘。',en:'The ghost captain extends a skeletal hand toward you, inviting you to take the guiding compass.',hint:'Time for a new beacon',cipher:'SHTOSPASHCMESAM',answer:'SMASH THE COMPASS'},
  {cn:'深夜的使者向你发起了最后的通牒，留给你的时间只剩三秒。',en:'The midnight envoy has issued their final verdict; you have only three seconds left.',hint:'You need a mic?',cipher:'UHOCLEARPLLOFT',answer:'CALL OUT FOR HELP'}
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
    choices:['History of Magic｜魔法史','Defence Against the Dark Arts｜黑魔法防御','Potions｜魔药学','Mirror of Erised｜厄里斯魔镜'],
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
  app.innerHTML=`<section class="hero"><div class="eyebrow">HALLOWEEN LIMITED-TIME CHALLENGE</div><h1>AFTER<br><em>MIDNIGHT</em></h1><div class="hero-cn">午夜之后</div><div class="intro"><p>万圣节限时挑战</p><span>城市陷入沉睡，午夜之后，熟悉的规则开始失效，有什么危险的东西即将苏醒</span></div><button class="scroll" id="explore-activities" type="button">探索活动 <b>↓</b></button></section><section class="games" id="games"><div class="section-head"><p>CHOOSE YOUR ADVENTURE</p><h2>午夜之后</h2><span>01 — 08</span></div><div class="grid">${order.map(card).join('')}</div></section>`;
  document.querySelector('#explore-activities')?.addEventListener('click',()=>document.querySelector('#games')?.scrollIntoView({behavior:'smooth',block:'start'}));
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
  const ghostDraw=key==='ghost'?`<section class="ghost-draw is-hidden" id="ghost-draw" aria-live="polite"><div class="ghost-draw-head"><p class="eyebrow">SPECIAL RULE</p><h2>本轮特殊规则卡</h2></div><div id="ghost-card-shell"></div></section>`:'';
  const midnightDraw=key==='midnight'?`<section class="midnight-draw is-hidden" id="midnight-draw" aria-live="polite"><div class="midnight-draw-head"><p class="eyebrow">MIDNIGHT MISSION</p><h2>本轮午夜任务卡</h2></div><div id="midnight-card-shell"></div></section>`:'';
  const historyQuiz=key==='letters'?`<section class="history-quiz is-hidden" id="history-quiz" aria-live="polite"><div class="history-quiz-head"><p class="eyebrow">HISTORY OF MAGIC</p><h2>魔法史题卡</h2></div><div id="history-quiz-shell"></div></section>`:'';
  const erisedDraw=key==='letters'?`<section class="erised-draw is-hidden" id="erised-draw" aria-live="polite"><div class="erised-draw-head"><p class="eyebrow">MIRROR OF ERISED</p><h2>厄里斯魔镜题卡</h2></div><div id="erised-card-shell"></div></section>`:'';
  app.innerHTML=`<section class="game-hero ${isInfo?'info-hero':''}" style="--accent:${g.accent}"><a class="back" href="#/">← 返回活动大厅</a><div class="game-mark">${g.icon}</div><p class="game-en">${g.no}｜${g.en}</p><h1>${g.title}</h1>${heroActions}</section>${inlineRules}${choices}${mysteryDraw}${ghostDraw}${midnightDraw}${historyQuiz}${erisedDraw}${roomPanel}${recap}`;
  document.documentElement.style.setProperty('--page-accent',g.accent); bindPage(g,key); window.RoomUI?.bind?.(key); window.scrollTo(0,0);
  if(!isInfo&&!visited.has(key)){visited.add(key);setTimeout(()=>openRules(g),180);}
}

function openRules(g){ruleContent.innerHTML=rulesHTML(g);modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('locked');ruleContent.querySelector('[data-close]').addEventListener('click',closeRules);}
function closeRules(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('locked');}
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2400);}
function showStallNotice(){
  ruleContent.innerHTML=`<div class="stall-notice"><div class="stall-notice-icon">↗</div><p class="rule-kicker">ON-SITE CHALLENGE</p><h2 id="rule-title">请前往游戏摊位游玩</h2><button class="primary wide" data-close>我知道了</button></div>`;
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('locked');ruleContent.querySelector('[data-close]').addEventListener('click',closeRules);
}
function showQuizResult(correct,card){
  const answer=card.options.find(option=>option.startsWith(card.answer+'.'));
  ruleContent.innerHTML=`<div class="quiz-result ${correct?'is-correct':'is-wrong'}"><div class="quiz-result-icon">${correct?'✓':'×'}</div><p class="rule-kicker">${correct?'CORRECT ANSWER':'TRY AGAIN NEXT TIME'}</p><h2 id="rule-title">${correct?'回答正确！':'回答错误'}</h2><p>正确答案：<strong>${answer}</strong></p><button class="primary wide" data-close>继续</button></div>`;
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('locked');ruleContent.querySelector('[data-close]').addEventListener('click',closeRules);
}
function drawMysteryCard(mode){
  const section=document.querySelector('#mystery-draw');const shell=document.querySelector('#mystery-card-shell');if(!section||!shell)return;
  const last=Number(section.dataset.last??-1);let index=Math.floor(Math.random()*mysteryCards.length);if(mysteryCards.length>1&&index===last)index=(index+1)%mysteryCards.length;section.dataset.last=index;
  const card=mysteryCards[index];section.classList.remove('is-hidden');
  shell.innerHTML=`<article class="mystery-task-card"><div class="mystery-card-meta"><span>MISSION ${String(index+1).padStart(2,'0')}</span><small>${mode||'随机任务 / Random Mission'}</small></div><div class="mystery-card-copy"><strong>你的目标是找到以下物品</strong><b>Your goal is to find the following item</b></div><div class="mystery-object-stage"><div class="mystery-glow"></div><img class="${card.kind==='photo'?'is-photo':''}" src="${card.image}" alt="${card.alt}"></div><div class="mystery-card-actions"><button class="primary" id="draw-again">换一张题卡 · Draw another</button><button class="secondary" id="card-review">回顾规则</button></div></article>`;
  document.querySelector('#draw-again')?.addEventListener('click',()=>drawMysteryCard(mode));document.querySelector('#card-review')?.addEventListener('click',()=>openRules(games.mystery));section.scrollIntoView({behavior:'smooth',block:'start'});
}
function drawGhostCard(mode){
  const team=mode.includes('双人');const cards=team?ghostTeamCards:ghostSoloCards;
  const section=document.querySelector('#ghost-draw');const shell=document.querySelector('#ghost-card-shell');if(!section||!shell)return;
  const last=Number(section.dataset.last??-1);let index=Math.floor(Math.random()*cards.length);if(cards.length>1&&index===last)index=(index+1)%cards.length;section.dataset.last=index;
  const card=cards[index];section.classList.remove('is-hidden');
  shell.innerHTML=`<article class="ghost-task-card ${team?'team-card':'solo-card'}"><div class="ghost-card-index"><span>CARD ${String(index+1).padStart(2,'0')}</span><small>${mode}</small></div><div class="ghost-sigil">${team?'✣ ✣':'✣'}</div><p class="ghost-label">特殊规则 · SPECIAL RULE</p><h3>${card[0]}</h3><div class="ghost-rule-main">${card[1]}</div><div class="ghost-thriller"><small>THRILLER!</small><strong>${card[2]}</strong></div><div class="ghost-card-actions"><button class="primary" id="ghost-draw-again">换一张题卡</button><button class="secondary" id="ghost-card-review">回顾规则</button></div></article>`;
  document.querySelector('#ghost-draw-again')?.addEventListener('click',()=>drawGhostCard(mode));document.querySelector('#ghost-card-review')?.addEventListener('click',()=>openRules(games.ghost));section.scrollIntoView({behavior:'smooth',block:'start'});
}
function drawMidnightCard(){
  const section=document.querySelector('#midnight-draw');const shell=document.querySelector('#midnight-card-shell');if(!section||!shell)return;
  const last=Number(section.dataset.last??-1);let index=Math.floor(Math.random()*midnightCards.length);if(midnightCards.length>1&&index===last)index=(index+1)%midnightCards.length;section.dataset.last=index;
  const card=midnightCards[index];section.classList.remove('is-hidden');
  shell.innerHTML=`<article class="midnight-task-card"><div class="midnight-card-index"><span>MIDNIGHT MISSION ${String(index+1).padStart(2,'0')}</span><small>90 SECONDS</small></div><div class="midnight-phone">☎</div><p class="midnight-target-label">你的${card.kind}</p><h3>${card.target}</h3>${card.en?`<strong class="midnight-target-en">${card.en}</strong>`:''}<div class="midnight-instructions"><p>拨通电话，在90秒内引导对方说出目标词</p><p>不能直接说出目标词，也不能要求对方重复</p></div><div class="midnight-card-actions"><button class="primary" id="midnight-draw-again">换一张题卡</button><button class="secondary" id="midnight-card-review">回顾规则</button></div></article>`;
  document.querySelector('#midnight-draw-again')?.addEventListener('click',drawMidnightCard);document.querySelector('#midnight-card-review')?.addEventListener('click',()=>openRules(games.midnight));section.scrollIntoView({behavior:'smooth',block:'start'});
}
function drawHistoryQuiz(){
  const section=document.querySelector('#history-quiz');const shell=document.querySelector('#history-quiz-shell');if(!section||!shell)return;
  const last=Number(section.dataset.last??-1);let index=Math.floor(Math.random()*historyQuestions.length);if(historyQuestions.length>1&&index===last)index=(index+1)%historyQuestions.length;section.dataset.last=index;
  const card=historyQuestions[index];section.classList.remove('is-hidden');
  shell.innerHTML=`<article class="history-question-card"><div class="history-card-index"><span>QUESTION ${String(card.n).padStart(2,'0')} / ${historyQuestions.length}</span><small>${card.category}</small></div><div class="history-question-copy"><h3>${card.cn}</h3><p>${card.en}</p></div><div class="history-options">${card.options.map((option,i)=>`<label><input type="radio" name="history-answer" value="${String.fromCharCode(65+i)}"><span><b>${String.fromCharCode(65+i)}</b>${option.slice(3)}</span></label>`).join('')}</div><div class="history-card-actions"><button class="primary" id="history-submit" disabled>提交答案</button><button class="secondary" id="history-next" disabled>随机下一题</button><button class="secondary" id="history-review">回顾规则</button></div><p class="history-lock-note" id="history-lock-note">请先选择并提交答案，才能抽取下一题。</p></article>`;
  const submit=document.querySelector('#history-submit');const next=document.querySelector('#history-next');const note=document.querySelector('#history-lock-note');
  document.querySelectorAll('input[name="history-answer"]').forEach(input=>input.addEventListener('change',()=>{submit.disabled=false;}));
  submit.addEventListener('click',()=>{const selected=document.querySelector('input[name="history-answer"]:checked');if(!selected)return;const correct=selected.value===card.answer;document.querySelectorAll('input[name="history-answer"]').forEach(input=>input.disabled=true);submit.disabled=true;next.disabled=false;note.textContent='本题已提交，可以随机抽取下一题。';note.classList.add('is-unlocked');showQuizResult(correct,card);});
  next.addEventListener('click',drawHistoryQuiz);document.querySelector('#history-review')?.addEventListener('click',()=>openRules(games.letters));section.scrollIntoView({behavior:'smooth',block:'start'});
}
function drawErisedCard(){
  const section=document.querySelector('#erised-draw');const shell=document.querySelector('#erised-card-shell');if(!section||!shell)return;
  const last=Number(section.dataset.last??-1);let index=Math.floor(Math.random()*erisedCards.length);if(erisedCards.length>1&&index===last)index=(index+1)%erisedCards.length;section.dataset.last=index;
  const card=erisedCards[index];section.classList.remove('is-hidden');
  shell.innerHTML=`<article class="erised-task-card"><div class="erised-card-index"><span>FRAGMENT ${String(index+1).padStart(2,'0')} / ${erisedCards.length}</span><small>REASSEMBLE THE RUNES</small></div><div class="erised-sigil">◇</div><div class="erised-story"><h3>${card.cn}</h3><p>${card.en}</p></div><div class="erised-puzzle"><div><small>提示 · HINT</small><strong>${card.hint}</strong></div><div><small>乱序密码 · CIPHER</small><strong>${card.cipher}</strong></div></div><div class="erised-answer is-hidden" id="erised-answer"><small>答案 · ANSWER</small><strong>${card.answer}</strong></div><div class="erised-card-actions"><button class="primary" id="erised-reveal">显示答案</button><button class="secondary" id="erised-next">随机下一题</button><button class="secondary" id="erised-review">回顾规则</button></div></article>`;
  document.querySelector('#erised-reveal')?.addEventListener('click',event=>{document.querySelector('#erised-answer')?.classList.remove('is-hidden');event.currentTarget.remove();});
  document.querySelector('#erised-next')?.addEventListener('click',drawErisedCard);document.querySelector('#erised-review')?.addEventListener('click',()=>openRules(games.letters));section.scrollIntoView({behavior:'smooth',block:'start'});
}
function bindPage(g,key){document.querySelector('#review-rules')?.addEventListener('click',()=>openRules(g));document.querySelector('#review-rules-2')?.addEventListener('click',()=>openRules(g));document.querySelector('#start-challenge')?.addEventListener('click',()=>document.querySelector('#challenge-options')?.scrollIntoView({behavior:'smooth'}));document.querySelector('#open-room')?.addEventListener('click',()=>document.querySelector('#room-panel')?.scrollIntoView({behavior:'smooth'}));document.querySelector('#draw-card')?.addEventListener('click',()=>key==='midnight'||key==='letters'?document.querySelector('#challenge-options')?.scrollIntoView({behavior:'smooth'}):showToast('题卡正在准备中，下一阶段即可随机抽取 ✦'));document.querySelectorAll('.choice:not([data-room])').forEach(button=>button.addEventListener('click',()=>{const choice=button.dataset.choice;if(key==='mystery')drawMysteryCard(choice);else if(key==='ghost')drawGhostCard(choice);else if(key==='midnight'&&choice.startsWith('Option A'))drawMidnightCard();else if(key==='letters'&&choice.startsWith('History'))drawHistoryQuiz();else if(key==='letters'&&choice.startsWith('Mirror of Erised'))drawErisedCard();else if((key==='midnight'&&choice.startsWith('Option B'))||(key==='letters'&&choice.startsWith('Potions')))showStallNotice();else showToast(`已选择「${choice}」· 题卡功能即将加入`);}));}

modal.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeRules));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeRules();});
function route(){closeRules();let path=location.hash;if(path.startsWith('#/'))path=path.slice(2);else if(path.startsWith('#'))path=path.slice(1);const key=path.split('/')[0];key?page(key):home();}
window.addEventListener('hashchange',route); route();

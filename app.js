// ============================================================
// 专业选择助手 - 数据配置文件
// ============================================================

// 1. 兴趣数据 (~16个)
const interestData = [
  { id: "tech", label: "科技与创新", icon: "fas fa-microchip" },
  { id: "art", label: "艺术与创意", icon: "fas fa-palette" },
  { id: "business", label: "商业与管理", icon: "fas fa-briefcase" },
  { id: "science", label: "科学研究", icon: "fas fa-flask" },
  { id: "medicine", label: "医疗健康", icon: "fas fa-heartbeat" },
  { id: "education", label: "教育教学", icon: "fas fa-chalkboard-teacher" },
  { id: "social", label: "社会服务", icon: "fas fa-hands-helping" },
  { id: "media", label: "传媒与传播", icon: "fas fa-broadcast-tower" },
  { id: "engineering", label: "工程技术", icon: "fas fa-cogs" },
  { id: "nature", label: "自然与环境", icon: "fas fa-leaf" },
  { id: "language", label: "语言与文化", icon: "fas fa-language" },
  { id: "math", label: "数学与逻辑", icon: "fas fa-calculator" },
  { id: "law", label: "法律与政治", icon: "fas fa-balance-scale" },
  { id: "sports", label: "体育与运动", icon: "fas fa-running" },
  { id: "history", label: "历史与考古", icon: "fas fa-landmark" },
  { id: "design", label: "设计与建筑", icon: "fas fa-drafting-compass" }
];

// 2. 性格数据 (4个MBTI维度)
const personalityData = [
  {
    group: "能量来源",
    options: [
      { key: "E", label: "外向型 (E)", desc: "从外部世界和人际交往中获取能量" },
      { key: "I", label: "内向型 (I)", desc: "从内心世界和独处思考中获取能量" }
    ]
  },
  {
    group: "信息获取",
    options: [
      { key: "S", label: "实感型 (S)", desc: "关注具体细节和实际经验" },
      { key: "N", label: "直觉型 (N)", desc: "关注整体模式和未来可能性" }
    ]
  },
  {
    group: "决策方式",
    options: [
      { key: "T", label: "思考型 (T)", desc: "基于逻辑和客观分析做决策" },
      { key: "F", label: "情感型 (F)", desc: "基于价值观和人际关系做决策" }
    ]
  },
  {
    group: "生活方式",
    options: [
      { key: "J", label: "判断型 (J)", desc: "喜欢有计划、有条理的生活方式" },
      { key: "P", label: "感知型 (P)", desc: "喜欢灵活、开放的生活方式" }
    ]
  }
];

// 3. 学科数据 (~9个)
const subjectData = [
  { id: "math", label: "数学", icon: "📐", maxScore: 100 },
  { id: "physics", label: "物理", icon: "⚛️", maxScore: 100 },
  { id: "chemistry", label: "化学", icon: "🧪", maxScore: 100 },
  { id: "biology", label: "生物", icon: "🧬", maxScore: 100 },
  { id: "chinese", label: "语文", icon: "📖", maxScore: 100 },
  { id: "english", label: "英语", icon: "🔤", maxScore: 100 },
  { id: "history", label: "历史", icon: "🏛️", maxScore: 100 },
  { id: "geography", label: "地理", icon: "🌍", maxScore: 100 },
  { id: "politics", label: "政治", icon: "⚖️", maxScore: 100 }
];

// 4. 学习风格数据 (~6个)
const learningStyleData = [
  { id: "visual", label: "视觉型学习者", desc: "通过图表、图像和视频学习效果最佳" },
  { id: "auditory", label: "听觉型学习者", desc: "通过听讲、讨论和音频学习效果最佳" },
  { id: "kinesthetic", label: "动觉型学习者", desc: "通过实践操作和亲身体验学习效果最佳" },
  { id: "reading", label: "阅读型学习者", desc: "通过阅读文字和做笔记学习效果最佳" },
  { id: "social", label: "社交型学习者", desc: "通过小组讨论和协作学习效果最佳" },
  { id: "solitary", label: "独立型学习者", desc: "通过自主学习和独立思考学习效果最佳" }
];

// 5. 城市类型数据 (6个)
const cityData = [
  { id: "tier1", icon: "🏙️", label: "一线城市", desc: "北京、上海、广州、深圳等，机会多、竞争激烈、生活成本高" },
  { id: "tier2", icon: "🌆", label: "新一线城市", desc: "杭州、成都、武汉、南京等，发展迅速、性价比高" },
  { id: "tier3", icon: "🏘️", label: "二三线城市", desc: "生活压力小、环境舒适、发展稳定" },
  { id: "overseas", icon: "✈️", label: "海外发展", desc: "国际化视野、语言要求高、文化差异大" },
  { id: "hometown", icon: "🏠", label: "家乡发展", desc: "人脉资源丰富、生活稳定、照顾家庭" },
  { id: "flexible", icon: "🌐", label: "灵活就业", desc: "远程工作、自由职业、不受地域限制" }
];

// 6. 学位路径数据 (4个)
const degreeData = [
  { id: "bachelor", icon: "🎓", label: "本科直接就业", desc: "四年本科毕业后直接进入职场，快速积累经验" },
  { id: "master", icon: "📚", label: "攻读硕士", desc: "本科后继续深造，提升专业深度和竞争力" },
  { id: "phd", icon: "🔬", label: "攻读博士", desc: "从事学术研究或高端技术岗位，需要长期投入" },
  { id: "overseas", icon: "🌍", label: "海外留学", desc: "出国深造，获得国际化教育和视野" }
];

// 7. 权重维度数据 (8个)
const weightData = [
  { id: "interest", label: "兴趣匹配度", icon: "fas fa-heart" },
  { id: "personality", label: "性格契合度", icon: "fas fa-user" },
  { id: "subject", label: "学科优势", icon: "fas fa-book" },
  { id: "learning", label: "学习风格", icon: "fas fa-brain" },
  { id: "career", label: "职业前景", icon: "fas fa-chart-line" },
  { id: "salary", label: "薪资水平", icon: "fas fa-dollar-sign" },
  { id: "city", label: "城市适配", icon: "fas fa-city" },
  { id: "degree", label: "学位路径", icon: "fas fa-graduation-cap" }
];

// 8. 学校权重数据 (3个)
const schoolWeightData = [
  { id: "rank", label: "学校综合排名", desc: "优先考虑学校的整体声誉和排名" },
  { id: "major", label: "专业实力", desc: "优先考虑目标专业的学科评估和师资力量" },
  { id: "location", label: "地理位置", desc: "优先考虑学校所在城市的发展机会" }
];

// ============================================================
// 专业数据库 - 118个专业
// ============================================================
const majorDB = [
  // ===== 计算机与信息技术类 =====
  {
    name: "计算机科学与技术",
    category: "计算机与信息技术",
    icon: "💻",
    desc: "研究计算机系统结构、软件设计与开发、算法分析等核心理论与技术。",
    interests: ["tech", "math", "engineering"],
    personalityMatch: { E: 0.5, I: 0.9, S: 0.6, N: 0.9, T: 0.95, F: 0.4, J: 0.8, P: 0.7 },
    subjects: ["math", "physics"],
    learningStyles: ["visual", "kinesthetic", "solitary"],
    cityFit: { tier1: 0.95, tier2: 0.85, tier3: 0.5, overseas: 0.8, hometown: 0.4, flexible: 0.9 },
    degreeFit: { bachelor: 0.8, master: 0.95, phd: 0.85, overseas: 0.9 },
    scores: { market: 98, salary: 95, growth: 97, social: 75 },
    tags: ["热门", "高薪", "技术驱动"],
    courses: ["数据结构与算法", "操作系统", "计算机网络", "数据库原理", "编译原理", "人工智能导论"],
    careerPath: ["软件开发工程师", "系统架构师", "技术总监", "CTO"],
    suitableFor: "逻辑思维强、喜欢编程和解决技术问题的人",
    relatedJobs: ["软件工程师", "算法工程师", "全栈开发", "系统工程师"],
    universities: [
      { name: "清华大学", majorRank: 1, majorStrength: "A+", recognition: "国际顶尖", strongMajors: ["计算机科学", "人工智能"] },
      { name: "北京大学", majorRank: 2, majorStrength: "A+", recognition: "国际顶尖", strongMajors: ["计算机科学", "软件工程"] }
    ]
  },
  {
    name: "软件工程",
    category: "计算机与信息技术",
    icon: "🖥️",
    desc: "专注于软件系统的设计、开发、测试与维护，强调工程化方法。",
    interests: ["tech", "math", "engineering"],
    personalityMatch: { E: 0.6, I: 0.85, S: 0.7, N: 0.8, T: 0.9, F: 0.5, J: 0.9, P: 0.6 },
    subjects: ["math", "physics"],
    learningStyles: ["kinesthetic", "visual", "social"],
    cityFit: { tier1: 0.95, tier2: 0.85, tier3: 0.5, overseas: 0.75, hometown: 0.4, flexible: 0.9 },
    degreeFit: { bachelor: 0.9, master: 0.85, phd: 0.5, overseas: 0.7 },
    scores: { market: 97, salary: 94, growth: 95, social: 70 },
    tags: ["热门", "应用型", "就业率高"],
    courses: ["软件工程导论", "面向对象设计", "软件测试", "项目管理", "需求工程", "设计模式"],
    careerPath: ["软件工程师", "项目经理", "产品经理", "技术经理"],
    suitableFor: "注重实践、喜欢团队协作开发软件的人",
    relatedJobs: ["前端工程师", "后端工程师", "测试工程师", "DevOps工程师"],
    universities: [
      { name: "北京航空航天大学", majorRank: 3, majorStrength: "A+", recognition: "国内领先", strongMajors: ["软件工程", "计算机科学"] },
      { name: "浙江大学", majorRank: 4, majorStrength: "A+", recognition: "国内领先", strongMajors: ["软件工程", "人工智能"] }
    ]
  },
  {
    name: "人工智能",
    category: "计算机与信息技术",
    icon: "🤖",
    desc: "研究如何使计算机模拟人类智能，包括机器学习、深度学习、自然语言处理等。",
    interests: ["tech", "math", "science"],
    personalityMatch: { E: 0.4, I: 0.95, S: 0.4, N: 0.95, T: 0.95, F: 0.3, J: 0.7, P: 0.8 },
    subjects: ["math", "physics"],
    learningStyles: ["visual", "solitary", "reading"],
    cityFit: { tier1: 0.98, tier2: 0.8, tier3: 0.4, overseas: 0.9, hometown: 0.3, flexible: 0.85 },
    degreeFit: { bachelor: 0.6, master: 0.95, phd: 0.95, overseas: 0.95 },
    scores: { market: 99, salary: 98, growth: 99, social: 70 },
    tags: ["前沿", "高薪", "研究型"],
    courses: ["机器学习", "深度学习", "计算机视觉", "自然语言处理", "强化学习", "概率图模型"],
    careerPath: ["算法工程师", "AI研究员", "首席科学家", "技术VP"],
    suitableFor: "数学功底扎实、热爱前沿技术研究的人",
    relatedJobs: ["算法工程师", "AI产品经理", "数据科学家", "机器人工程师"],
    universities: [
      { name: "清华大学", majorRank: 1, majorStrength: "A+", recognition: "国际顶尖", strongMajors: ["人工智能", "计算机科学"] },
      { name: "中国科学技术大学", majorRank: 3, majorStrength: "A+", recognition: "国际知名", strongMajors: ["人工智能", "数据科学"] }
    ]
  },
  {
    name: "数据科学与大数据技术",
    category: "计算机与信息技术",
    icon: "📊",
    desc: "从海量数据中提取有价值的信息，结合统计学与计算机技术进行数据分析。",
    interests: ["tech", "math", "business"],
    personalityMatch: { E: 0.5, I: 0.85, S: 0.6, N: 0.85, T: 0.9, F: 0.4, J: 0.75, P: 0.75 },
    subjects: ["math", "physics"],
    learningStyles: ["visual", "reading", "solitary"],
    cityFit: { tier1: 0.95, tier2: 0.8, tier3: 0.45, overseas: 0.85, hometown: 0.35, flexible: 0.8 },
    degreeFit: { bachelor: 0.7, master: 0.95, phd: 0.8, overseas: 0.9 },
    scores: { market: 96, salary: 95, growth: 97, social: 65 },
    tags: ["热门", "跨学科", "高薪"],
    courses: ["统计学", "数据挖掘", "大数据技术", "数据可视化", "分布式系统", "机器学习"],
    careerPath: ["数据分析师", "数据工程师", "数据科学家", "首席数据官"],
    suitableFor: "对数据敏感、擅长从数据中发现规律的人",
    relatedJobs: ["数据分析师", "商业分析师", "数据工程师", "BI工程师"],
    universities: [
      { name: "北京大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["数据科学", "统计学"] },
      { name: "复旦大学", majorRank: 5, majorStrength: "A", recognition: "国内领先", strongMajors: ["数据科学", "统计学"] }
    ]
  },
  {
    name: "网络空间安全",
    category: "计算机与信息技术",
    icon: "🔒",
    desc: "研究网络与信息系统的安全防护技术，包括密码学、网络攻防、安全审计等。",
    interests: ["tech", "math", "engineering"],
    personalityMatch: { E: 0.4, I: 0.9, S: 0.7, N: 0.8, T: 0.9, F: 0.4, J: 0.8, P: 0.7 },
    subjects: ["math", "physics"],
    learningStyles: ["kinesthetic", "solitary", "visual"],
    cityFit: { tier1: 0.9, tier2: 0.75, tier3: 0.6, overseas: 0.7, hometown: 0.5, flexible: 0.7 },
    degreeFit: { bachelor: 0.8, master: 0.9, phd: 0.7, overseas: 0.7 },
    scores: { market: 94, salary: 93, growth: 95, social: 70 },
    tags: ["国家战略", "紧缺人才", "高需求"],
    courses: ["密码学", "网络攻防", "操作系统安全", "Web安全", "逆向工程", "安全协议"],
    careerPath: ["安全工程师", "渗透测试工程师", "安全架构师", "CISO"],
    suitableFor: "对网络安全有浓厚兴趣、喜欢攻防对抗的人",
    relatedJobs: ["网络安全工程师", "安全研究员", "安全顾问", "安全运营"],
    universities: [
      { name: "西安电子科技大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["网络安全", "密码学"] },
      { name: "北京邮电大学", majorRank: 3, majorStrength: "A", recognition: "国内领先", strongMajors: ["网络安全", "通信工程"] }
    ]
  },

  // ===== 电子信息类 =====
  {
    name: "电子信息工程",
    category: "电子信息",
    icon: "📡",
    desc: "研究信息的获取、传输、处理与应用，涵盖通信、信号处理、集成电路等方向。",
    interests: ["tech", "math", "engineering"],
    personalityMatch: { E: 0.5, I: 0.85, S: 0.7, N: 0.75, T: 0.9, F: 0.4, J: 0.8, P: 0.65 },
    subjects: ["math", "physics"],
    learningStyles: ["visual", "kinesthetic", "reading"],
    cityFit: { tier1: 0.9, tier2: 0.8, tier3: 0.55, overseas: 0.75, hometown: 0.45, flexible: 0.6 },
    degreeFit: { bachelor: 0.85, master: 0.9, phd: 0.75, overseas: 0.8 },
    scores: { market: 93, salary: 90, growth: 92, social: 68 },
    tags: ["传统强专业", "应用广泛", "技术密集"],
    courses: ["信号与系统", "数字信号处理", "通信原理", "电磁场与电磁波", "微波技术", "集成电路设计"],
    careerPath: ["硬件工程师", "通信工程师", "射频工程师", "技术总监"],
    suitableFor: "对电子技术和通信原理感兴趣、动手能力强的学生",
    relatedJobs: ["硬件工程师", "FPGA工程师", "通信工程师", "IC设计工程师"],
    universities: [
      { name: "电子科技大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["电子信息", "通信工程"] },
      { name: "东南大学", majorRank: 3, majorStrength: "A", recognition: "国内领先", strongMajors: ["电子信息", "集成电路"] }
    ]
  },
  {
    name: "通信工程",
    category: "电子信息",
    icon: "📶",
    desc: "专注于通信系统与网络的设计、建设与优化，包括5G/6G、卫星通信等前沿领域。",
    interests: ["tech", "math", "engineering"],
    personalityMatch: { E: 0.55, I: 0.8, S: 0.75, N: 0.7, T: 0.85, F: 0.45, J: 0.8, P: 0.6 },
    subjects: ["math", "physics"],
    learningStyles: ["visual", "reading", "kinesthetic"],
    cityFit: { tier1: 0.9, tier2: 0.8, tier3: 0.55, overseas: 0.75, hometown: 0.45, flexible: 0.55 },
    degreeFit: { bachelor: 0.85, master: 0.9, phd: 0.7, overseas: 0.75 },
    scores: { market: 92, salary: 89, growth: 91, social: 68 },
    tags: ["基础设施", "5G时代", "稳定需求"],
    courses: ["通信原理", "移动通信", "光纤通信", "数字通信", "信息论", "通信网络"],
    careerPath: ["通信工程师", "网络优化工程师", "系统工程师", "技术经理"],
    suitableFor: "对通信技术感兴趣、希望参与国家信息基础设施建设的人",
    relatedJobs: ["通信工程师", "网络工程师", "无线工程师", "核心网工程师"],
    universities: [
      { name: "北京邮电大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["通信工程", "信息网络"] },
      { name: "电子科技大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["通信工程", "电子信息"] }
    ]
  },
  {
    name: "自动化",
    category: "电子信息",
    icon: "⚙️",
    desc: "研究自动控制理论与技术，应用于工业过程控制、机器人、智能系统等。",
    interests: ["tech", "math", "engineering"],
    personalityMatch: { E: 0.5, I: 0.8, S: 0.75, N: 0.7, T: 0.9, F: 0.4, J: 0.8, P: 0.65 },
    subjects: ["math", "physics"],
    learningStyles: ["kinesthetic", "visual", "solitary"],
    cityFit: { tier1: 0.85, tier2: 0.85, tier3: 0.65, overseas: 0.7, hometown: 0.5, flexible: 0.6 },
    degreeFit: { bachelor: 0.85, master: 0.9, phd: 0.75, overseas: 0.75 },
    scores: { market: 91, salary: 88, growth: 90, social: 65 },
    tags: ["工业4.0", "智能制造", "跨学科"],
    courses: ["自动控制原理", "现代控制理论", "传感器技术", "PLC编程", "机器人学", "过程控制"],
    careerPath: ["自动化工程师", "控制工程师", "机器人工程师", "技术总监"],
    suitableFor: "喜欢动手实践、对机械和电子结合感兴趣的人",
    relatedJobs: ["自动化工程师", "PLC工程师", "机器人工程师", "控制算法工程师"],
    universities: [
      { name: "清华大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["自动化", "控制科学"] },
      { name: "哈尔滨工业大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["自动化", "机器人"] }
    ]
  },

  // ===== 电气与机械类 =====
  {
    name: "电气工程及其自动化",
    category: "电气与机械",
    icon: "⚡",
    desc: "研究电能的产生、传输、分配与应用，涵盖电力系统、电机控制、新能源等方向。",
    interests: ["tech", "math", "engineering"],
    personalityMatch: { E: 0.5, I: 0.8, S: 0.8, N: 0.65, T: 0.9, F: 0.4, J: 0.85, P: 0.55 },
    subjects: ["math", "physics"],
    learningStyles: ["kinesthetic", "visual", "reading"],
    cityFit: { tier1: 0.85, tier2: 0.85, tier3: 0.7, overseas: 0.65, hometown: 0.6, flexible: 0.5 },
    degreeFit: { bachelor: 0.85, master: 0.85, phd: 0.65, overseas: 0.6 },
    scores: { market: 90, salary: 88, growth: 88, social: 70 },
    tags: ["传统工科", "国家电网", "新能源"],
    courses: ["电路原理", "电机学", "电力系统分析", "电力电子技术", "高电压技术", "新能源发电"],
    careerPath: ["电气工程师", "电力系统工程师", "新能源工程师", "技术总监"],
    suitableFor: "对电力系统和电气设备感兴趣、希望工作稳定的人",
    relatedJobs: ["电气工程师", "电力工程师", "新能源工程师", "电网工程师"],
    universities: [
      { name: "清华大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["电气工程", "电机"] },
      { name: "西安交通大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["电气工程", "高压技术"] }
    ]
  },
  {
    name: "机械工程",
    category: "电气与机械",
    icon: "🔧",
    desc: "研究机械系统的设计、制造与运行，是现代工业的基础学科。",
    interests: ["tech", "math", "engineering"],
    personalityMatch: { E: 0.55, I: 0.75, S: 0.85, N: 0.6, T: 0.9, F: 0.4, J: 0.8, P: 0.6 },
    subjects: ["math", "physics"],
    learningStyles: ["kinesthetic", "visual", "solitary"],
    cityFit: { tier1: 0.8, tier2: 0.85, tier3: 0.7, overseas: 0.7, hometown: 0.55, flexible: 0.5 },
    degreeFit: { bachelor: 0.85, master: 0.85, phd: 0.7, overseas: 0.75 },
    scores: { market: 88, salary: 85, growth: 85, social: 65 },
    tags: ["工业基础", "制造业", "稳定"],
    courses: ["机械原理", "机械设计", "材料力学", "制造工艺", "CAD/CAM", "机器人技术"],
    careerPath: ["机械工程师", "设计工程师", "工艺工程师", "技术总监"],
    suitableFor: "喜欢动手设计、对机械结构和制造工艺感兴趣的人",
    relatedJobs: ["机械工程师", "结构工程师", "工艺工程师", "设备工程师"],
    universities: [
      { name: "华中科技大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["机械工程", "智能制造"] },
      { name: "上海交通大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["机械工程", "机器人"] }
    ]
  },
  {
    name: "土木工程",
    category: "电气与机械",
    icon: "🏗️",
    desc: "研究各类工程建筑物的设计、施工与维护，包括建筑、桥梁、道路、隧道等。",
    interests: ["tech", "math", "design"],
    personalityMatch: { E: 0.6, I: 0.7, S: 0.85, N: 0.55, T: 0.85, F: 0.5, J: 0.85, P: 0.5 },
    subjects: ["math", "physics"],
    learningStyles: ["kinesthetic", "visual", "reading"],
    cityFit: { tier1: 0.8, tier2: 0.85, tier3: 0.75, overseas: 0.6, hometown: 0.65, flexible: 0.4 },
    degreeFit: { bachelor: 0.85, master: 0.8, phd: 0.6, overseas: 0.6 },
    scores: { market: 85, salary: 82, growth: 80, social: 72 },
    tags: ["基建", "传统工科", "项目制"],
    courses: ["结构力学", "土力学", "混凝土结构", "钢结构", "工程测量", "施工技术"],
    careerPath: ["结构工程师", "项目经理", "总工程师", "技术总监"],
    suitableFor: "对建筑结构和工程项目管理感兴趣、能接受现场工作的人",
    relatedJobs: ["结构工程师", "施工工程师", "监理工程师", "造价工程师"],
    universities: [
      { name: "同济大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["土木工程", "结构工程"] },
      { name: "东南大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["土木工程", "桥梁工程"] }
    ]
  },
  {
    name: "航空航天工程",
    category: "电气与机械",
    icon: "🚀",
    desc: "研究飞行器的设计、制造与运行，包括飞机、航天器、无人机等。",
    interests: ["tech", "math", "science"],
    personalityMatch: { E: 0.45, I: 0.85, S: 0.7, N: 0.85, T: 0.9, F: 0.35, J: 0.85, P: 0.55 },
    subjects: ["math", "physics"],
    learningStyles: ["visual", "kinesthetic", "reading"],
    cityFit: { tier1: 0.85, tier2: 0.7, tier3: 0.6, overseas: 0.75, hometown: 0.4, flexible: 0.4 },
    degreeFit: { bachelor: 0.7, master: 0.9, phd: 0.85, overseas: 0.8 },
    scores: { market: 88, salary: 90, growth: 92, social: 75 },
    tags: ["国家战略", "高精尖", "国防相关"],
    courses: ["空气动力学", "飞行力学", "航空发动机", "飞行器设计", "导航制导", "复合材料"],
    careerPath: ["设计工程师", "系统工程师", "型号总师", "技术专家"],
    suitableFor: "对航空航天有强烈兴趣、能承受高学习压力的人",
    relatedJobs: ["飞行器设计工程师", "气动工程师", "航电工程师", "总体设计师"],
    universities: [
      { name: "北京航空航天大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["航空航天", "飞行器设计"] },
      { name: "西北工业大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["航空航天", "无人机"] }
    ]
  },

  // ===== 化工材料能源类 =====
  {
    name: "化学工程与工艺",
    category: "化工材料能源",
    icon: "🧪",
    desc: "研究化学工业生产过程的设计、优化与放大，涉及石油化工、精细化工、生物化工等。",
    interests: ["science", "math", "engineering"],
    personalityMatch: { E: 0.5, I: 0.8, S: 0.8, N: 0.65, T: 0.9, F: 0.4, J: 0.8, P: 0.55 },
    subjects: ["math", "chemistry", "physics"],
    learningStyles: ["kinesthetic", "visual", "reading"],
    cityFit: { tier1: 0.75, tier2: 0.8, tier3: 0.7, overseas: 0.7, hometown: 0.5, flexible: 0.45 },
    degreeFit: { bachelor: 0.8, master: 0.85, phd: 0.75, overseas: 0.75 },
    scores: { market: 85, salary: 84, growth: 83, social: 65 },
    tags: ["工业基础", "流程工业", "稳定"],
    courses: ["化工原理", "反应工程", "分离工程", "化工热力学", "工艺设计", "过程控制"],
    careerPath: ["工艺工程师", "研发工程师", "技术经理", "总工程师"],
    suitableFor: "对化学反应和工业生产过程感兴趣、注重安全的人",
    relatedJobs: ["化工工程师", "工艺工程师", "研发工程师", "安全工程师"],
    universities: [
      { name: "天津大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["化学工程", "制药工程"] },
      { name: "华东理工大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["化学工程", "材料科学"] }
    ]
  },
  {
    name: "材料科学与工程",
    category: "化工材料能源",
    icon: "🔩",
    desc: "研究材料的组成、结构、性能与加工，包括金属材料、高分子、复合材料、纳米材料等。",
    interests: ["science", "math", "engineering"],
    personalityMatch: { E: 0.45, I: 0.85, S: 0.75, N: 0.8, T: 0.9, F: 0.35, J: 0.75, P: 0.7 },
    subjects: ["math", "physics", "chemistry"],
    learningStyles: ["kinesthetic", "visual", "reading"],
    cityFit: { tier1: 0.8, tier2: 0.8, tier3: 0.65, overseas: 0.8, hometown: 0.45, flexible: 0.5 },
    degreeFit: { bachelor: 0.7, master: 0.9, phd: 0.9, overseas: 0.85 },
    scores: { market: 87, salary: 86, growth: 90, social: 65 },
    tags: ["基础学科", "新材料", "研发型"],
    courses: ["材料科学基础", "材料物理", "材料化学", "金属材料", "高分子材料", "纳米材料"],
    careerPath: ["材料工程师", "研发工程师", "技术专家", "首席科学家"],
    suitableFor: "对材料微观结构和性能关系感兴趣、喜欢实验研究的人",
    relatedJobs: ["材料工程师", "研发工程师", "质量工程师", "失效分析工程师"],
    universities: [
      { name: "清华大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["材料科学", "纳米材料"] },
      { name: "北京科技大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["材料科学", "冶金工程"] }
    ]
  },
  {
    name: "能源与动力工程",
    category: "化工材料能源",
    icon: "🔥",
    desc: "研究能源的高效转换与利用，包括热能、核能、新能源等方向。",
    interests: ["tech", "math", "nature"],
    personalityMatch: { E: 0.5, I: 0.8, S: 0.8, N: 0.65, T: 0.9, F: 0.4, J: 0.8, P: 0.55 },
    subjects: ["math", "physics"],
    learningStyles: ["kinesthetic", "visual", "reading"],
    cityFit: { tier1: 0.8, tier2: 0.8, tier3: 0.7, overseas: 0.7, hometown: 0.55, flexible: 0.45 },
    degreeFit: { bachelor: 0.8, master: 0.85, phd: 0.75, overseas: 0.7 },
    scores: { market: 86, salary: 85, growth: 88, social: 70 },
    tags: ["碳中和", "新能源", "国家战略"],
    courses: ["工程热力学", "流体力学", "传热学", "燃烧学", "汽轮机原理", "新能源技术"],
    careerPath: ["热能工程师", "新能源工程师", "动力系统工程师", "技术总监"],
    suitableFor: "对能源转换和利用感兴趣、关注环保和可持续发展的人",
    relatedJobs: ["能源工程师", "热动工程师", "新能源工程师", "环保工程师"],
    universities: [
      { name: "西安交通大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["能源动力", "热能工程"] },
      { name: "清华大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["能源动力", "核工程"] }
    ]
  },
  {
    name: "环境科学与工程",
    category: "化工材料能源",
    icon: "🌿",
    desc: "研究环境污染的防治与生态修复，包括水、气、固废处理及环境监测等。",
    interests: ["nature", "science", "social"],
    personalityMatch: { E: 0.6, I: 0.7, S: 0.75, N: 0.7, T: 0.8, F: 0.7, J: 0.75, P: 0.6 },
    subjects: ["chemistry", "biology", "math"],
    learningStyles: ["kinesthetic", "social", "visual"],
    cityFit: { tier1: 0.8, tier2: 0.8, tier3: 0.7, overseas: 0.75, hometown: 0.6, flexible: 0.5 },
    degreeFit: { bachelor: 0.8, master: 0.85, phd: 0.75, overseas: 0.8 },
    scores: { market: 82, salary: 78, growth: 88, social: 85 },
    tags: ["碳中和", "环保", "社会责任"],
    courses: ["环境化学", "环境监测", "水控工程", "气控工程", "固废处理", "环境影响评价"],
    careerPath: ["环保工程师", "环评工程师", "技术经理", "环保顾问"],
    suitableFor: "关注环境保护、有社会责任感、喜欢户外工作的人",
    relatedJobs: ["环保工程师", "环评工程师", "监测工程师", "EHS工程师"],
    universities: [
      { name: "清华大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["环境科学", "环境工程"] },
      { name: "哈尔滨工业大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["环境工程", "市政工程"] }
    ]
  },

  // ===== 理学类 =====
  {
    name: "数学与应用数学",
    category: "理学",
    icon: "📐",
    desc: "研究数学理论与方法及其在各领域的应用，是众多学科的基础。",
    interests: ["math", "science", "tech"],
    personalityMatch: { E: 0.35, I: 0.95, S: 0.4, N: 0.9, T: 0.95, F: 0.3, J: 0.8, P: 0.7 },
    subjects: ["math"],
    learningStyles: ["reading", "solitary", "visual"],
    cityFit: { tier1: 0.85, tier2: 0.75, tier3: 0.55, overseas: 0.85, hometown: 0.4, flexible: 0.7 },
    degreeFit: { bachelor: 0.7, master: 0.9, phd: 0.95, overseas: 0.9 },
    scores: { market: 88, salary: 88, growth: 90, social: 60 },
    tags: ["基础学科", "万金油", "深造优势"],
    courses: ["数学分析", "高等代数", "概率论", "数理统计", "微分方程", "运筹学"],
    careerPath: ["数据分析师", "算法工程师", "量化分析师", "研究员"],
    suitableFor: "数学天赋突出、喜欢抽象思维和逻辑推理的人",
    relatedJobs: ["数据分析师", "算法工程师", "精算师", "量化研究员"],
    universities: [
      { name: "北京大学", majorRank: 1, majorStrength: "A+", recognition: "国际顶尖", strongMajors: ["数学", "统计学"] },
      { name: "复旦大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["数学", "应用数学"] }
    ]
  },
  {
    name: "物理学",
    category: "理学",
    icon: "⚛️",
    desc: "研究物质的基本结构、相互作用和运动规律，是自然科学的基础。",
    interests: ["science", "math", "tech"],
    personalityMatch: { E: 0.35, I: 0.95, S: 0.4, N: 0.95, T: 0.95, F: 0.25, J: 0.75, P: 0.75 },
    subjects: ["math", "physics"],
    learningStyles: ["reading", "solitary", "visual"],
    cityFit: { tier1: 0.8, tier2: 0.7, tier3: 0.5, overseas: 0.9, hometown: 0.35, flexible: 0.65 },
    degreeFit: { bachelor: 0.6, master: 0.85, phd: 0.95, overseas: 0.95 },
    scores: { market: 82, salary: 82, growth: 85, social: 60 },
    tags: ["基础学科", "科研导向", "深造必备"],
    courses: ["力学", "热学", "电磁学", "光学", "量子力学", "固体物理"],
    careerPath: ["物理教师", "研发工程师", "研究员", "科学家"],
    suitableFor: "对自然奥秘有强烈好奇心、喜欢理论推导和实验的人",
    relatedJobs: ["物理教师", "光学工程师", "半导体工程师", "研究员"],
    universities: [
      { name: "北京大学", majorRank: 1, majorStrength: "A+", recognition: "国际顶尖", strongMajors: ["物理学", "核物理"] },
      { name: "中国科学技术大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["物理学", "量子信息"] }
    ]
  },
  {
    name: "化学",
    category: "理学",
    icon: "🧫",
    desc: "研究物质的组成、结构、性质及变化规律，是材料、医药、环境等领域的基础。",
    interests: ["science", "math"],
    personalityMatch: { E: 0.4, I: 0.85, S: 0.75, N: 0.7, T: 0.9, F: 0.4, J: 0.75, P: 0.65 },
    subjects: ["chemistry", "math", "physics"],
    learningStyles: ["kinesthetic", "reading", "visual"],
    cityFit: { tier1: 0.8, tier2: 0.75, tier3: 0.6, overseas: 0.8, hometown: 0.45, flexible: 0.55 },
    degreeFit: { bachelor: 0.7, master: 0.85, phd: 0.9, overseas: 0.85 },
    scores: { market: 80, salary: 78, growth: 82, social: 62 },
    tags: ["基础学科", "实验型", "医药基础"],
    courses: ["无机化学", "有机化学", "分析化学", "物理化学", "结构化学", "仪器分析"],
    careerPath: ["化学分析师", "研发工程师", "技术专家", "科学家"],
    suitableFor: "喜欢实验操作、对物质变化规律感兴趣的人",
    relatedJobs: ["化学分析师", "研发工程师", "质检工程师", "药物化学家"],
    universities: [
      { name: "北京大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["化学", "化学生物学"] },
      { name: "中国科学技术大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["化学", "材料化学"] }
    ]
  },
  {
    name: "生物科学",
    category: "理学",
    icon: "🧬",
    desc: "研究生命现象和生命活动规律，包括分子生物学、细胞生物学、生态学等方向。",
    interests: ["science", "nature", "medicine"],
    personalityMatch: { E: 0.45, I: 0.85, S: 0.7, N: 0.8, T: 0.85, F: 0.55, J: 0.7, P: 0.75 },
    subjects: ["biology", "chemistry", "math"],
    learningStyles: ["kinesthetic", "reading", "visual"],
    cityFit: { tier1: 0.85, tier2: 0.75, tier3: 0.55, overseas: 0.9, hometown: 0.4, flexible: 0.55 },
    degreeFit: { bachelor: 0.6, master: 0.85, phd: 0.95, overseas: 0.95 },
    scores: { market: 82, salary: 78, growth: 90, social: 70 },
    tags: ["生命科学", "科研导向", "医药基础"],
    courses: ["细胞生物学", "分子生物学", "遗传学", "生物化学", "微生物学", "生态学"],
    careerPath: ["生物研究员", "医药研发", "生物技术工程师", "科学家"],
    suitableFor: "对生命奥秘充满好奇、喜欢实验研究、能接受长期深造的人",
    relatedJobs: ["生物研究员", "医药研发", "基因检测工程师", "生物信息分析师"],
    universities: [
      { name: "北京大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["生物科学", "生物技术"] },
      { name: "清华大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["生物科学", "生物医学"] }
    ]
  },
  {
    name: "地理科学",
    category: "理学",
    icon: "🌍",
    desc: "研究地球表面的自然环境和人文现象的空间分布规律，包括自然地理和人文地理。",
    interests: ["nature", "science", "social"],
    personalityMatch: { E: 0.6, I: 0.7, S: 0.75, N: 0.75, T: 0.7, F: 0.65, J: 0.7, P: 0.7 },
    subjects: ["geography", "math", "physics"],
    learningStyles: ["visual", "kinesthetic", "social"],
    cityFit: { tier1: 0.75, tier2: 0.75, tier3: 0.7, overseas: 0.7, hometown: 0.6, flexible: 0.55 },
    degreeFit: { bachelor: 0.75, master: 0.8, phd: 0.75, overseas: 0.75 },
    scores: { market: 75, salary: 72, growth: 78, social: 72 },
    tags: ["综合学科", "GIS", "户外"],
    courses: ["自然地理学", "人文地理学", "GIS", "遥感技术", "地质学", "气象学"],
    careerPath: ["GIS工程师", "规划师", "环境顾问", "教师"],
    suitableFor: "对地球环境感兴趣、喜欢户外考察和地图分析的人",
    relatedJobs: ["GIS工程师", "遥感分析师", "规划师", "地理教师"],
    universities: [
      { name: "北京师范大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["地理科学", "GIS"] },
      { name: "北京大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["地理科学", "自然地理"] }
    ]
  },
  {
    name: "心理学",
    category: "理学",
    icon: "🧠",
    desc: "研究人类心理现象和行为规律，包括认知、情绪、人格、社会心理等方向。",
    interests: ["science", "social", "medicine"],
    personalityMatch: { E: 0.65, I: 0.7, S: 0.6, N: 0.85, T: 0.7, F: 0.85, J: 0.65, P: 0.75 },
    subjects: ["biology", "math", "chinese"],
    learningStyles: ["social", "reading", "visual"],
    cityFit: { tier1: 0.9, tier2: 0.8, tier3: 0.6, overseas: 0.85, hometown: 0.55, flexible: 0.7 },
    degreeFit: { bachelor: 0.7, master: 0.9, phd: 0.85, overseas: 0.85 },
    scores: { market: 84, salary: 80, growth: 88, social: 85 },
    tags: ["热门", "人文关怀", "应用广泛"],
    courses: ["普通心理学", "发展心理学", "社会心理学", "认知心理学", "心理统计", "心理咨询"],
    careerPath: ["心理咨询师", "用户体验研究员", "人力资源", "研究员"],
    suitableFor: "善于观察和理解他人、对人性有浓厚兴趣的人",
    relatedJobs: ["心理咨询师", "UX研究员", "HR", "教师"],
    universities: [
      { name: "北京师范大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["心理学", "发展心理学"] },
      { name: "北京大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["心理学", "临床心理学"] }
    ]
  },
  {
    name: "统计学",
    category: "理学",
    icon: "📈",
    desc: "研究数据的收集、整理、分析和推断，是数据时代的基础工具学科。",
    interests: ["math", "tech", "business"],
    personalityMatch: { E: 0.4, I: 0.85, S: 0.55, N: 0.85, T: 0.9, F: 0.35, J: 0.8, P: 0.65 },
    subjects: ["math"],
    learningStyles: ["reading", "visual", "solitary"],
    cityFit: { tier1: 0.9, tier2: 0.8, tier3: 0.5, overseas: 0.9, hometown: 0.4, flexible: 0.75 },
    degreeFit: { bachelor: 0.75, master: 0.95, phd: 0.9, overseas: 0.9 },
    scores: { market: 92, salary: 90, growth: 93, social: 60 },
    tags: ["数据时代", "跨学科", "高薪"],
    courses: ["概率论", "数理统计", "回归分析", "时间序列", "抽样调查", "统计计算"],
    careerPath: ["统计分析师", "数据科学家", "精算师", "量化分析师"],
    suitableFor: "对数据敏感、擅长数学建模和概率分析的人",
    relatedJobs: ["统计分析师", "数据分析师", "精算师", "生物统计师"],
    universities: [
      { name: "北京大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["统计学", "概率论"] },
      { name: "中国人民大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["统计学", "经济统计"] }
    ]
  },

  // ===== 经济管理类 =====
  {
    name: "金融学",
    category: "经济管理",
    icon: "💰",
    desc: "研究资金的融通与配置，包括银行、证券、保险、投资等领域。",
    interests: ["business", "math", "social"],
    personalityMatch: { E: 0.7, I: 0.6, S: 0.65, N: 0.8, T: 0.85, F: 0.5, J: 0.75, P: 0.65 },
    subjects: ["math", "english"],
    learningStyles: ["social", "reading", "visual"],
    cityFit: { tier1: 0.95, tier2: 0.8, tier3: 0.5, overseas: 0.9, hometown: 0.45, flexible: 0.7 },
    degreeFit: { bachelor: 0.8, master: 0.95, phd: 0.7, overseas: 0.95 },
    scores: { market: 95, salary: 96, growth: 92, social: 80 },
    tags: ["热门", "高薪", "竞争激烈"],
    courses: ["货币银行学", "投资学", "公司金融", "金融工程", "国际金融", "风险管理"],
    careerPath: ["分析师", "投资经理", "基金经理", "CFO"],
    suitableFor: "对金融市场敏感、抗压能力强、追求高收入的人",
    relatedJobs: ["投行分析师", "基金经理", "风控经理", "理财顾问"],
    universities: [
      { name: "北京大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["金融学", "经济学"] },
      { name: "清华大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["金融学", "金融工程"] }
    ]
  },
  {
    name: "经济学",
    category: "经济管理",
    icon: "📉",
    desc: "研究资源配置和经济运行规律，包括微观经济学、宏观经济学、计量经济学等。",
    interests: ["business", "math", "social"],
    personalityMatch: { E: 0.6, I: 0.7, S: 0.55, N: 0.85, T: 0.85, F: 0.5, J: 0.75, P: 0.7 },
    subjects: ["math", "english", "politics"],
    learningStyles: ["reading", "social", "visual"],
    cityFit: { tier1: 0.9, tier2: 0.8, tier3: 0.55, overseas: 0.9, hometown: 0.45, flexible: 0.65 },
    degreeFit: { bachelor: 0.75, master: 0.95, phd: 0.9, overseas: 0.95 },
    scores: { market: 90, salary: 88, growth: 88, social: 78 },
    tags: ["基础学科", "理论研究", "政策分析"],
    courses: ["微观经济学", "宏观经济学", "计量经济学", "博弈论", "发展经济学", "产业经济学"],
    careerPath: ["经济分析师", "政策研究员", "咨询顾问", "首席经济学家"],
    suitableFor: "对经济现象有洞察力、喜欢理论分析和政策研究的人",
    relatedJobs: ["经济分析师", "政策研究员", "咨询顾问", "教师"],
    universities: [
      { name: "北京大学", majorRank: 1, majorStrength: "A+", recognition: "国际顶尖", strongMajors: ["经济学", "计量经济学"] },
      { name: "中国人民大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["经济学", "政治经济学"] }
    ]
  },
  {
    name: "会计学",
    category: "经济管理",
    icon: "📋",
    desc: "研究企业财务信息的记录、报告与分析，是商业活动的语言。",
    interests: ["business", "math"],
    personalityMatch: { E: 0.55, I: 0.7, S: 0.85, N: 0.5, T: 0.85, F: 0.45, J: 0.9, P: 0.4 },
    subjects: ["math", "english"],
    learningStyles: ["reading", "solitary", "visual"],
    cityFit: { tier1: 0.9, tier2: 0.8, tier3: 0.65, overseas: 0.8, hometown: 0.6, flexible: 0.6 },
    degreeFit: { bachelor: 0.9, master: 0.85, phd: 0.4, overseas: 0.75 },
    scores: { market: 90, salary: 85, growth: 82, social: 72 },
    tags: ["刚需", "稳定", "考证导向"],
    courses: ["财务会计", "管理会计", "审计学", "税法", "成本会计", "财务管理"],
    careerPath: ["会计师", "审计师", "财务经理", "CFO"],
    suitableFor: "细心严谨、对数字敏感、喜欢规则明确工作的人",
    relatedJobs: ["会计师", "审计师", "税务顾问", "财务分析师"],
    universities: [
      { name: "厦门大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["会计学", "财务管理"] },
      { name: "上海财经大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["会计学", "审计学"] }
    ]
  },
  {
    name: "市场营销",
    category: "经济管理",
    icon: "📢",
    desc: "研究如何识别、创造和满足消费者需求，包括品牌管理、数字营销、市场调研等。",
    interests: ["business", "media", "social"],
    personalityMatch: { E: 0.85, I: 0.4, S: 0.65, N: 0.85, T: 0.6, F: 0.8, J: 0.6, P: 0.8 },
    subjects: ["math", "english", "chinese"],
    learningStyles: ["social", "kinesthetic", "visual"],
    cityFit: { tier1: 0.95, tier2: 0.85, tier3: 0.55, overseas: 0.8, hometown: 0.5, flexible: 0.75 },
    degreeFit: { bachelor: 0.9, master: 0.75, phd: 0.3, overseas: 0.7 },
    scores: { market: 90, salary: 85, growth: 88, social: 85 },
    tags: ["创意", "社交", "变化快"],
    courses: ["市场营销学", "消费者行为学", "品牌管理", "数字营销", "市场调研", "广告学"],
    careerPath: ["市场专员", "品牌经理", "市场总监", "CMO"],
    suitableFor: "创意丰富、善于沟通、对市场趋势敏感的人",
    relatedJobs: ["市场专员", "品牌经理", "数字营销", "产品经理"],
    universities: [
      { name: "中国人民大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["市场营销", "工商管理"] },
      { name: "北京大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["市场营销", "战略管理"] }
    ]
  },
  {
    name: "人力资源管理",
    category: "经济管理",
    icon: "👥",
    desc: "研究组织中人力资源的获取、开发、激励与保留，是企业发展的核心职能。",
    interests: ["business", "social", "education"],
    personalityMatch: { E: 0.8, I: 0.5, S: 0.7, N: 0.7, T: 0.6, F: 0.85, J: 0.8, P: 0.55 },
    subjects: ["math", "english", "chinese"],
    learningStyles: ["social", "reading", "visual"],
    cityFit: { tier1: 0.9, tier2: 0.8, tier3: 0.65, overseas: 0.75, hometown: 0.6, flexible: 0.65 },
    degreeFit: { bachelor: 0.9, master: 0.8, phd: 0.4, overseas: 0.7 },
    scores: { market: 85, salary: 80, growth: 82, social: 88 },
    tags: ["社交型", "稳定", "企业刚需"],
    courses: ["人力资源管理", "组织行为学", "薪酬管理", "绩效管理", "劳动法", "招聘与配置"],
    careerPath: ["HR专员", "HR经理", "HR总监", "CHO"],
    suitableFor: "善于与人打交道、有同理心、喜欢协调组织关系的人",
    relatedJobs: ["HR专员", "招聘经理", "培训经理", "HRBP"],
    universities: [
      { name: "中国人民大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["人力资源", "劳动经济"] },
      { name: "北京大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["人力资源", "组织管理"] }
    ]
  },
  {
    name: "工商管理",
    category: "经济管理",
    icon: "🏢",
    desc: "研究企业战略、运营管理和组织发展，培养综合型管理人才。",
    interests: ["business", "social", "law"],
    personalityMatch: { E: 0.8, I: 0.5, S: 0.7, N: 0.75, T: 0.75, F: 0.65, J: 0.8, P: 0.6 },
    subjects: ["math", "english", "chinese"],
    learningStyles: ["social", "reading", "visual"],
    cityFit: { tier1: 0.9, tier2: 0.8, tier3: 0.6, overseas: 0.85, hometown: 0.55, flexible: 0.7 },
    degreeFit: { bachelor: 0.8, master: 0.95, phd: 0.5, overseas: 0.9 },
    scores: { market: 88, salary: 88, growth: 85, social: 85 },
    tags: ["综合管理", "MBA基础", "人脉导向"],
    courses: ["管理学原理", "战略管理", "运营管理", "财务管理", "领导力", "创业管理"],
    careerPath: ["管理培训生", "部门经理", "总经理", "CEO"],
    suitableFor: "有领导潜质、喜欢统筹规划、希望成为管理者的人",
    relatedJobs: ["管理培训生", "运营经理", "项目经理", "创业者"],
    universities: [
      { name: "清华大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["工商管理", "EMBA"] },
      { name: "北京大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["工商管理", "战略管理"] }
    ]
  },
  {
    name: "电子商务",
    category: "经济管理",
    icon: "🛒",
    desc: "研究互联网环境下的商业活动，包括电商平台运营、网络营销、供应链管理等。",
    interests: ["business", "tech", "media"],
    personalityMatch: { E: 0.75, I: 0.55, S: 0.65, N: 0.85, T: 0.7, F: 0.6, J: 0.65, P: 0.8 },
    subjects: ["math", "english"],
    learningStyles: ["kinesthetic", "social", "visual"],
    cityFit: { tier1: 0.95, tier2: 0.85, tier3: 0.5, overseas: 0.75, hometown: 0.45, flexible: 0.85 },
    degreeFit: { bachelor: 0.9, master: 0.7, phd: 0.3, overseas: 0.6 },
    scores: { market: 92, salary: 88, growth: 93, social: 78 },
    tags: ["互联网", "新兴", "变化快"],
    courses: ["电子商务概论", "网络营销", "电商运营", "数据分析", "供应链管理", "跨境电商"],
    careerPath: ["电商运营", "产品经理", "创业者", "电商总监"],
    suitableFor: "对互联网商业感兴趣、思维活跃、适应变化快的人",
    relatedJobs: ["电商运营", "产品经理", "数据运营", "跨境电商专员"],
    universities: [
      { name: "西安交通大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["电子商务", "管理科学"] },
      { name: "武汉大学", majorRank: 2, majorStrength: "A", recognition: "国内领先", strongMajors: ["电子商务", "信息管理"] }
    ]
  },
  {
    name: "国际经济与贸易",
    category: "经济管理",
    icon: "🌐",
    desc: "研究国际间的商品和服务交换，包括国际贸易理论、实务操作和跨国经营。",
    interests: ["business", "language", "social"],
    personalityMatch: { E: 0.75, I: 0.5, S: 0.6, N: 0.8, T: 0.75, F: 0.6, J: 0.7, P: 0.7 },
    subjects: ["english", "math", "politics"],
    learningStyles: ["social", "reading", "auditory"],
    cityFit: { tier1: 0.9, tier2: 0.75, tier3: 0.45, overseas: 0.9, hometown: 0.4, flexible: 0.7 },
    degreeFit: { bachelor: 0.85, master: 0.8, phd: 0.5, overseas: 0.9 },
    scores: { market: 85, salary: 84, growth: 82, social: 82 },
    tags: ["国际化", "英语要求高", "外向型"],
    courses: ["国际贸易理论", "国际金融", "国际结算", "外贸函电", "跨国公司管理", "WTO规则"],
    careerPath: ["外贸专员", "国际商务", "跨国企业经理", "贸易总监"],
    suitableFor: "英语好、喜欢跨文化交流、对国际商务感兴趣的人",
    relatedJobs: ["外贸专员", "国际采购", "报关员", "跨境电商"],
    universities: [
      { name: "对外经济贸易大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["国际贸易", "国际金融"] },
      { name: "上海财经大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["国际贸易", "世界经济"] }
    ]
  },
  {
    name: "物流管理",
    category: "经济管理",
    icon: "📦",
    desc: "研究物资从供应地向接收地的实体流动过程，包括运输、仓储、配送和供应链管理。",
    interests: ["business", "tech", "engineering"],
    personalityMatch: { E: 0.6, I: 0.65, S: 0.8, N: 0.6, T: 0.8, F: 0.5, J: 0.85, P: 0.5 },
    subjects: ["math", "english"],
    learningStyles: ["kinesthetic", "visual", "social"],
    cityFit: { tier1: 0.85, tier2: 0.85, tier3: 0.7, overseas: 0.7, hometown: 0.6, flexible: 0.6 },
    degreeFit: { bachelor: 0.85, master: 0.75, phd: 0.4, overseas: 0.65 },
    scores: { market: 86, salary: 82, growth: 88, social: 68 },
    tags: ["电商支撑", "供应链", "实操型"],
    courses: ["物流学", "供应链管理", "仓储管理", "运输管理", "采购管理", "物流信息系统"],
    careerPath: ["物流专员", "供应链经理", "物流总监", "运营总监"],
    suitableFor: "注重效率、喜欢组织协调、对供应链流程感兴趣的人",
    relatedJobs: ["物流专员", "供应链经理", "仓储经理", "采购经理"],
    universities: [
      { name: "中国人民大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["物流管理", "供应链管理"] },
      { name: "南开大学", majorRank: 2, majorStrength: "A", recognition: "国内领先", strongMajors: ["物流管理", "运营管理"] }
    ]
  },

  // ===== 法学与社会科学类 =====
  {
    name: "法学",
    category: "法学与社会科学",
    icon: "⚖️",
    desc: "研究法律规范、法律现象和法律实践，培养法律专业人才。",
    interests: ["law", "social", "language"],
    personalityMatch: { E: 0.65, I: 0.65, S: 0.7, N: 0.75, T: 0.85, F: 0.55, J: 0.85, P: 0.45 },
    subjects: ["chinese", "history", "politics"],
    learningStyles: ["reading", "social", "auditory"],
    cityFit: { tier1: 0.9, tier2: 0.8, tier3: 0.65, overseas: 0.75, hometown: 0.6, flexible: 0.6 },
    degreeFit: { bachelor: 0.8, master: 0.9, phd: 0.7, overseas: 0.7 },
    scores: { market: 88, salary: 85, growth: 85, social: 85 },
    tags: ["专业壁垒", "考证导向", "社会地位高"],
    courses: ["宪法", "民法", "刑法", "行政法", "商法", "国际法"],
    careerPath: ["律师", "法官", "检察官", "法务总监"],
    suitableFor: "逻辑思维强、记忆力好、有正义感、善于表达的人",
    relatedJobs: ["律师", "法务", "法官", "检察官"],
    universities: [
      { name: "中国政法大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["法学", "宪法学"] },
      { name: "中国人民大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["法学", "民商法"] }
    ]
  },
  {
    name: "政治学与行政学",
    category: "法学与社会科学",
    icon: "🏛️",
    desc: "研究政治现象、政府运作和公共政策，培养公共管理和政策分析人才。",
    interests: ["law", "social", "history"],
    personalityMatch: { E: 0.65, I: 0.65, S: 0.6, N: 0.8, T: 0.75, F: 0.6, J: 0.75, P: 0.6 },
    subjects: ["politics", "history", "chinese"],
    learningStyles: ["reading", "social", "auditory"],
    cityFit: { tier1: 0.85, tier2: 0.75, tier3: 0.7, overseas: 0.65, hometown: 0.65, flexible: 0.5 },
    degreeFit: { bachelor: 0.75, master: 0.85, phd: 0.8, overseas: 0.7 },
    scores: { market: 78, salary: 75, growth: 78, social: 82 },
    tags: ["公务员", "理论研究", "政策分析"],
    courses: ["政治学原理", "行政管理学", "公共政策", "比较政治", "中国政府与政治", "国际政治"],
    careerPath: ["公务员", "政策研究员", "行政人员", "智库专家"],
    suitableFor: "关心社会政治、有志于公共服务和政策研究的人",
    relatedJobs: ["公务员", "政策研究员", "行政人员", "NGO工作者"],
    universities: [
      { name: "北京大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["政治学", "国际关系"] },
      { name: "复旦大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["政治学", "公共管理"] }
    ]
  },
  {
    name: "社会学",
    category: "法学与社会科学",
    icon: "👨‍👩‍👧‍👦",
    desc: "研究社会结构、社会关系和社会变迁，揭示社会运行的规律。",
    interests: ["social", "science", "history"],
    personalityMatch: { E: 0.7, I: 0.6, S: 0.55, N: 0.85, T: 0.7, F: 0.8, J: 0.6, P: 0.75 },
    subjects: ["politics", "history", "chinese"],
    learningStyles: ["social", "reading", "visual"],
    cityFit: { tier1: 0.85, tier2: 0.75, tier3: 0.6, overseas: 0.85, hometown: 0.55, flexible: 0.6 },
    degreeFit: { bachelor: 0.7, master: 0.9, phd: 0.9, overseas: 0.9 },
    scores: { market: 75, salary: 72, growth: 78, social: 85 },
    tags: ["人文关怀", "调查研究", "学术导向"],
    courses: ["社会学概论", "社会调查方法", "社会统计学", "城市社会学", "农村社会学", "社会心理学"],
    careerPath: ["社会研究员", "市场研究员", "咨询顾问", "教师"],
    suitableFor: "对社会现象敏感、善于观察分析、关心社会问题的人",
    relatedJobs: ["社会研究员", "市场研究员", "用户研究员", "公益组织工作者"],
    universities: [
      { name: "北京大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["社会学", "社会工作"] },
      { name: "中国人民大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["社会学", "人口学"] }
    ]
  },
  {
    name: "公共管理",
    category: "法学与社会科学",
    icon: "📋",
    desc: "研究公共部门的管理理论与方法，包括政府管理、非营利组织管理等。",
    interests: ["social", "law", "business"],
    personalityMatch: { E: 0.7, I: 0.55, S: 0.7, N: 0.7, T: 0.75, F: 0.65, J: 0.8, P: 0.55 },
    subjects: ["politics", "chinese", "math"],
    learningStyles: ["social", "reading", "visual"],
    cityFit: { tier1: 0.85, tier2: 0.8, tier3: 0.7, overseas: 0.7, hometown: 0.65, flexible: 0.55 },
    degreeFit: { bachelor: 0.75, master: 0.9, phd: 0.7, overseas: 0.75 },
    scores: { market: 80, salary: 76, growth: 80, social: 85 },
    tags: ["公务员", "公共服务", "管理型"],
    courses: ["公共管理学", "公共政策分析", "行政管理", "公共财政", "非营利组织管理", "电子政务"],
    careerPath: ["公务员", "公共部门经理", "NGO管理者", "咨询顾问"],
    suitableFor: "有公共服务精神、善于协调管理、希望为社会做贡献的人",
    relatedJobs: ["公务员", "公共部门管理者", "NGO工作者", "行政人员"],
    universities: [
      { name: "中国人民大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["公共管理", "行政管理"] },
      { name: "清华大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["公共管理", "MPA"] }
    ]
  },

  // ===== 教育类 =====
  {
    name: "教育学",
    category: "教育",
    icon: "📚",
    desc: "研究教育现象和教育规律，包括教育理论、教育管理和教育技术等方向。",
    interests: ["education", "social", "science"],
    personalityMatch: { E: 0.75, I: 0.55, S: 0.65, N: 0.75, T: 0.6, F: 0.85, J: 0.8, P: 0.55 },
    subjects: ["chinese", "history", "politics"],
    learningStyles: ["social", "reading", "auditory"],
    cityFit: { tier1: 0.8, tier2: 0.8, tier3: 0.75, overseas: 0.7, hometown: 0.7, flexible: 0.6 },
    degreeFit: { bachelor: 0.8, master: 0.85, phd: 0.8, overseas: 0.75 },
    scores: { market: 80, salary: 75, growth: 78, social: 90 },
    tags: ["师范", "稳定", "社会价值高"],
    courses: ["教育学原理", "教育心理学", "课程与教学论", "教育管理学", "教育技术学", "教育研究方法"],
    careerPath: ["教师", "教育管理者", "教研员", "教育咨询师"],
    suitableFor: "热爱教育事业、有耐心、善于沟通和引导他人的人",
    relatedJobs: ["中小学教师", "教育管理者", "培训师", "课程设计师"],
    universities: [
      { name: "北京师范大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["教育学", "教育技术"] },
      { name: "华东师范大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["教育学", "学前教育"] }
    ]
  },

  // ===== 语言文学类 =====
  {
    name: "汉语言文学",
    category: "语言文学",
    icon: "✍️",
    desc: "研究汉语和中国文学，包括古代文学、现当代文学、语言学、文艺理论等方向。",
    interests: ["language", "art", "history"],
    personalityMatch: { E: 0.55, I: 0.8, S: 0.5, N: 0.9, T: 0.5, F: 0.9, J: 0.7, P: 0.75 },
    subjects: ["chinese", "history", "english"],
    learningStyles: ["reading", "solitary", "auditory"],
    cityFit: { tier1: 0.8, tier2: 0.75, tier3: 0.7, overseas: 0.5, hometown: 0.7, flexible: 0.75 },
    degreeFit: { bachelor: 0.85, master: 0.85, phd: 0.85, overseas: 0.5 },
    scores: { market: 78, salary: 72, growth: 75, social: 80 },
    tags: ["人文底蕴", "万金油", "考公优势"],
    courses: ["古代文学", "现当代文学", "语言学概论", "文学理论", "古代汉语", "写作"],
    careerPath: ["教师", "编辑", "文案", "作家"],
    suitableFor: "热爱阅读和写作、对语言文字敏感、有文学情怀的人",
    relatedJobs: ["语文教师", "编辑", "文案策划", "新媒体运营"],
    universities: [
      { name: "北京大学", majorRank: 1, majorStrength: "A+", recognition: "国际顶尖", strongMajors: ["汉语言文学", "古典文献"] },
      { name: "北京师范大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["汉语言文学", "文艺学"] }
    ]
  },
  {
    name: "外国语言文学",
    category: "语言文学",
    icon: "🌐",
    desc: "研究外国语言、文学和文化，培养翻译、外语教学和跨文化交流人才。",
    interests: ["language", "social", "art"],
    personalityMatch: { E: 0.75, I: 0.55, S: 0.6, N: 0.8, T: 0.55, F: 0.8, J: 0.65, P: 0.75 },
    subjects: ["english", "chinese", "history"],
    learningStyles: ["auditory", "social", "reading"],
    cityFit: { tier1: 0.9, tier2: 0.75, tier3: 0.55, overseas: 0.95, hometown: 0.5, flexible: 0.8 },
    degreeFit: { bachelor: 0.85, master: 0.85, phd: 0.7, overseas: 0.95 },
    scores: { market: 82, salary: 78, growth: 80, social: 85 },
    tags: ["语言优势", "国际化", "跨文化"],
    courses: ["综合英语", "英美文学", "翻译理论与实践", "语言学", "跨文化交际", "口译"],
    careerPath: ["翻译", "外语教师", "外贸专员", "国际商务"],
    suitableFor: "语言天赋好、喜欢跨文化交流、希望走向国际的人",
    relatedJobs: ["翻译", "英语教师", "外企职员", "国际导游"],
    universities: [
      { name: "北京外国语大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["英语", "翻译"] },
      { name: "上海外国语大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["英语", "国际新闻"] }
    ]
  },

  // ===== 新闻传播类 =====
  {
    name: "新闻学",
    category: "新闻传播",
    icon: "📰",
    desc: "研究新闻传播活动规律，培养新闻采编、评论和媒体管理人才。",
    interests: ["media", "social", "language"],
    personalityMatch: { E: 0.8, I: 0.45, S: 0.6, N: 0.8, T: 0.6, F: 0.75, J: 0.65, P: 0.8 },
    subjects: ["chinese", "history", "politics"],
    learningStyles: ["social", "kinesthetic", "auditory"],
    cityFit: { tier1: 0.95, tier2: 0.75, tier3: 0.5, overseas: 0.75, hometown: 0.45, flexible: 0.8 },
    degreeFit: { bachelor: 0.9, master: 0.75, phd: 0.5, overseas: 0.7 },
    scores: { market: 82, salary: 78, growth: 80, social: 85 },
    tags: ["媒体", "时效性", "变化快"],
    courses: ["新闻学概论", "新闻采访", "新闻写作", "新闻编辑", "新闻评论", "媒介伦理"],
    careerPath: ["记者", "编辑", "媒体主管", "总编辑"],
    suitableFor: "好奇心强、善于沟通、对时事敏感、能接受快节奏工作的人",
    relatedJobs: ["记者", "编辑", "新媒体运营", "公关专员"],
    universities: [
      { name: "中国人民大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["新闻学", "传播学"] },
      { name: "中国传媒大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["新闻学", "广播电视"] }
    ]
  },
  {
    name: "广告学",
    category: "新闻传播",
    icon: "🎯",
    desc: "研究广告策划、创意与传播，培养品牌传播和营销传播人才。",
    interests: ["media", "art", "business"],
    personalityMatch: { E: 0.85, I: 0.4, S: 0.6, N: 0.9, T: 0.55, F: 0.8, J: 0.55, P: 0.85 },
    subjects: ["chinese", "math", "english"],
    learningStyles: ["visual", "kinesthetic", "social"],
    cityFit: { tier1: 0.95, tier2: 0.8, tier3: 0.5, overseas: 0.75, hometown: 0.45, flexible: 0.8 },
    degreeFit: { bachelor: 0.9, master: 0.65, phd: 0.3, overseas: 0.65 },
    scores: { market: 85, salary: 82, growth: 85, social: 82 },
    tags: ["创意", "商业", "快节奏"],
    courses: ["广告学概论", "广告策划", "广告创意", "品牌管理", "媒介策划", "广告文案"],
    careerPath: ["广告文案", "创意总监", "品牌经理", "广告公司合伙人"],
    suitableFor: "创意丰富、思维活跃、对商业和品牌敏感的人",
    relatedJobs: ["广告文案", "创意策划", "品牌经理", "媒介策划"],
    universities: [
      { name: "中国传媒大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["广告学", "传播学"] },
      { name: "厦门大学", majorRank: 2, majorStrength: "A", recognition: "国内领先", strongMajors: ["广告学", "品牌传播"] }
    ]
  },
  {
    name: "广播电视学",
    category: "新闻传播",
    icon: "📺",
    desc: "研究广播电视节目的策划、制作与传播，培养视听媒体专业人才。",
    interests: ["media", "art", "tech"],
    personalityMatch: { E: 0.8, I: 0.45, S: 0.65, N: 0.8, T: 0.55, F: 0.75, J: 0.6, P: 0.8 },
    subjects: ["chinese", "history", "english"],
    learningStyles: ["kinesthetic", "visual", "social"],
    cityFit: { tier1: 0.95, tier2: 0.75, tier3: 0.45, overseas: 0.7, hometown: 0.4, flexible: 0.75 },
    degreeFit: { bachelor: 0.9, master: 0.7, phd: 0.4, overseas: 0.65 },
    scores: { market: 80, salary: 76, growth: 78, social: 82 },
    tags: ["视听媒体", "实践型", "创意产业"],
    courses: ["广播电视概论", "节目策划", "视听语言", "摄像技术", "非线性编辑", "纪录片创作"],
    careerPath: ["编导", "制片人", "节目总监", "媒体管理者"],
    suitableFor: "对影视制作感兴趣、有创意、善于团队协作的人",
    relatedJobs: ["编导", "摄像师", "后期制作", "节目策划"],
    universities: [
      { name: "中国传媒大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["广播电视", "播音主持"] },
      { name: "北京电影学院", majorRank: 2, majorStrength: "A", recognition: "行业顶尖", strongMajors: ["广播电视", "导演"] }
    ]
  },

  // ===== 历史哲学类 =====
  {
    name: "历史学",
    category: "历史哲学",
    icon: "📜",
    desc: "研究人类社会发展历程，包括中国史、世界史、考古学等方向。",
    interests: ["history", "language", "social"],
    personalityMatch: { E: 0.45, I: 0.9, S: 0.5, N: 0.85, T: 0.7, F: 0.75, J: 0.8, P: 0.65 },
    subjects: ["history", "chinese", "geography"],
    learningStyles: ["reading", "solitary", "visual"],
    cityFit: { tier1: 0.75, tier2: 0.7, tier3: 0.65, overseas: 0.7, hometown: 0.65, flexible: 0.6 },
    degreeFit: { bachelor: 0.75, master: 0.85, phd: 0.9, overseas: 0.8 },
    scores: { market: 72, salary: 68, growth: 72, social: 75 },
    tags: ["人文底蕴", "学术导向", "考公"],
    courses: ["中国通史", "世界通史", "史学概论", "历史文献学", "考古学通论", "历史地理"],
    careerPath: ["历史教师", "研究员", "博物馆工作者", "编辑"],
    suitableFor: "热爱历史、喜欢阅读和思考、能耐得住寂寞做研究的人",
    relatedJobs: ["历史教师", "博物馆研究员", "考古人员", "编辑"],
    universities: [
      { name: "北京大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["历史学", "考古学"] },
      { name: "北京师范大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["历史学", "世界史"] }
    ]
  },
  {
    name: "考古学",
    category: "历史哲学",
    icon: "🏺",
    desc: "通过实物遗存研究古代人类社会，包括田野考古、文物修复、博物馆学等方向。",
    interests: ["history", "nature", "art"],
    personalityMatch: { E: 0.5, I: 0.8, S: 0.75, N: 0.75, T: 0.7, F: 0.7, J: 0.75, P: 0.7 },
    subjects: ["history", "geography", "chinese"],
    learningStyles: ["kinesthetic", "visual", "solitary"],
    cityFit: { tier1: 0.7, tier2: 0.7, tier3: 0.7, overseas: 0.6, hometown: 0.65, flexible: 0.5 },
    degreeFit: { bachelor: 0.7, master: 0.85, phd: 0.9, overseas: 0.7 },
    scores: { market: 70, salary: 68, growth: 72, social: 72 },
    tags: ["冷门", "田野工作", "文化传承"],
    courses: ["考古学通论", "田野考古", "文物学", "博物馆学", "科技考古", "文物保护"],
    careerPath: ["考古队员", "博物馆研究员", "文物修复师", "研究员"],
    suitableFor: "对古代文明有热情、能接受野外工作、细心耐心的人",
    relatedJobs: ["考古人员", "博物馆研究员", "文物修复师", "文化遗产保护"],
    universities: [
      { name: "北京大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["考古学", "文物学"] },
      { name: "吉林大学", majorRank: 2, majorStrength: "A", recognition: "国内领先", strongMajors: ["考古学", "博物馆学"] }
    ]
  },
  {
    name: "哲学",
    category: "历史哲学",
    icon: "🤔",
    desc: "研究世界本质、人生意义和思维规律，培养批判性思维和逻辑分析能力。",
    interests: ["history", "science", "language"],
    personalityMatch: { E: 0.4, I: 0.9, S: 0.35, N: 0.95, T: 0.9, F: 0.6, J: 0.7, P: 0.8 },
    subjects: ["chinese", "history", "politics"],
    learningStyles: ["reading", "solitary", "auditory"],
    cityFit: { tier1: 0.75, tier2: 0.7, tier3: 0.6, overseas: 0.8, hometown: 0.55, flexible: 0.65 },
    degreeFit: { bachelor: 0.7, master: 0.85, phd: 0.95, overseas: 0.9 },
    scores: { market: 70, salary: 68, growth: 72, social: 70 },
    tags: ["思辨", "学术导向", "思维训练"],
    courses: ["中国哲学", "西方哲学", "马克思主义哲学", "逻辑学", "伦理学", "美学"],
    careerPath: ["教师", "研究员", "编辑", "公务员"],
    suitableFor: "喜欢深度思考、对抽象问题有强烈兴趣、追求智慧的人",
    relatedJobs: ["哲学教师", "研究员", "编辑", "公务员"],
    universities: [
      { name: "北京大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["哲学", "逻辑学"] },
      { name: "复旦大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["哲学", "宗教学"] }
    ]
  },

  // ===== 艺术设计类 =====
  {
    name: "美术学",
    category: "艺术设计",
    icon: "🎨",
    desc: "研究美术创作、美术理论和美术教育，包括绘画、雕塑、书法等方向。",
    interests: ["art", "history", "education"],
    personalityMatch: { E: 0.55, I: 0.8, S: 0.6, N: 0.9, T: 0.45, F: 0.9, J: 0.6, P: 0.85 },
    subjects: ["chinese", "history"],
    learningStyles: ["kinesthetic", "visual", "solitary"],
    cityFit: { tier1: 0.85, tier2: 0.75, tier3: 0.6, overseas: 0.8, hometown: 0.55, flexible: 0.75 },
    degreeFit: { bachelor: 0.85, master: 0.8, phd: 0.7, overseas: 0.85 },
    scores: { market: 75, salary: 72, growth: 75, social: 72 },
    tags: ["艺术", "创作", "审美"],
    courses: ["素描", "色彩", "油画", "中国画", "艺术史", "美术教育"],
    careerPath: ["美术教师", "画家", "策展人", "艺术管理者"],
    suitableFor: "有艺术天赋、热爱创作、对美有独特感知的人",
    relatedJobs: ["美术教师", "画家", "插画师", "策展人"],
    universities: [
      { name: "中央美术学院", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["美术学", "油画"] },
      { name: "中国美术学院", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["美术学", "国画"] }
    ]
  },
  {
    name: "设计学",
    category: "艺术设计",
    icon: "✏️",
    desc: "研究设计理论与实践，包括视觉传达、产品设计、环境设计、服装设计等方向。",
    interests: ["art", "design", "tech"],
    personalityMatch: { E: 0.65, I: 0.7, S: 0.6, N: 0.9, T: 0.55, F: 0.85, J: 0.65, P: 0.85 },
    subjects: ["chinese", "math"],
    learningStyles: ["kinesthetic", "visual", "social"],
    cityFit: { tier1: 0.95, tier2: 0.8, tier3: 0.55, overseas: 0.85, hometown: 0.45, flexible: 0.85 },
    degreeFit: { bachelor: 0.9, master: 0.8, phd: 0.5, overseas: 0.85 },
    scores: { market: 88, salary: 85, growth: 88, social: 78 },
    tags: ["创意产业", "互联网", "高薪"],
    courses: ["设计概论", "视觉传达", "产品设计", "交互设计", "设计思维", "品牌设计"],
    careerPath: ["设计师", "设计总监", "创意总监", "独立设计师"],
    suitableFor: "有创意、审美能力强、对用户体验敏感的人",
    relatedJobs: ["UI设计师", "产品设计师", "平面设计师", "交互设计师"],
    universities: [
      { name: "清华大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["设计学", "工业设计"] },
      { name: "江南大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["设计学", "产品设计"] }
    ]
  },
  {
    name: "音乐学",
    category: "艺术设计",
    icon: "🎵",
    desc: "研究音乐理论、音乐史和音乐教育，培养音乐研究和教育人才。",
    interests: ["art", "education", "social"],
    personalityMatch: { E: 0.7, I: 0.65, S: 0.55, N: 0.85, T: 0.5, F: 0.9, J: 0.65, P: 0.8 },
    subjects: ["chinese", "history"],
    learningStyles: ["auditory", "kinesthetic", "social"],
    cityFit: { tier1: 0.85, tier2: 0.75, tier3: 0.65, overseas: 0.8, hometown: 0.6, flexible: 0.7 },
    degreeFit: { bachelor: 0.85, master: 0.8, phd: 0.7, overseas: 0.8 },
    scores: { market: 74, salary: 70, growth: 74, social: 78 },
    tags: ["艺术", "教育", "表演"],
    courses: ["乐理", "和声学", "曲式分析", "音乐史", "视唱练耳", "音乐教育"],
    careerPath: ["音乐教师", "音乐研究员", "音乐编辑", "艺术管理者"],
    suitableFor: "有音乐天赋、热爱音乐、愿意长期练习的人",
    relatedJobs: ["音乐教师", "音乐编辑", "音乐治疗师", "艺术管理"],
    universities: [
      { name: "中央音乐学院", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["音乐学", "作曲"] },
      { name: "上海音乐学院", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["音乐学", "音乐表演"] }
    ]
  },
  {
    name: "舞蹈学",
    category: "艺术设计",
    icon: "💃",
    desc: "研究舞蹈理论与实践，包括舞蹈编导、舞蹈表演和舞蹈教育等方向。",
    interests: ["art", "sports", "education"],
    personalityMatch: { E: 0.8, I: 0.5, S: 0.65, N: 0.8, T: 0.45, F: 0.9, J: 0.6, P: 0.85 },
    subjects: ["chinese", "history"],
    learningStyles: ["kinesthetic", "social", "auditory"],
    cityFit: { tier1: 0.85, tier2: 0.75, tier3: 0.6, overseas: 0.75, hometown: 0.55, flexible: 0.7 },
    degreeFit: { bachelor: 0.85, master: 0.75, phd: 0.5, overseas: 0.7 },
    scores: { market: 70, salary: 68, growth: 72, social: 75 },
    tags: ["艺术", "表演", "体能要求高"],
    courses: ["舞蹈概论", "芭蕾基训", "中国古典舞", "民间舞", "舞蹈编导", "舞蹈史"],
    careerPath: ["舞蹈演员", "舞蹈教师", "编导", "艺术管理者"],
    suitableFor: "有舞蹈天赋、身体条件好、热爱舞台表演的人",
    relatedJobs: ["舞蹈演员", "舞蹈教师", "编导", "艺术管理"],
    universities: [
      { name: "北京舞蹈学院", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["舞蹈学", "舞蹈编导"] },
      { name: "中央民族大学", majorRank: 2, majorStrength: "A", recognition: "国内领先", strongMajors: ["舞蹈学", "民族舞蹈"] }
    ]
  },
  {
    name: "戏剧与影视学",
    category: "艺术设计",
    icon: "🎭",
    desc: "研究戏剧、电影和电视艺术的创作、理论与批评，培养影视创作和研究人才。",
    interests: ["art", "media", "social"],
    personalityMatch: { E: 0.8, I: 0.5, S: 0.55, N: 0.9, T: 0.5, F: 0.85, J: 0.55, P: 0.85 },
    subjects: ["chinese", "history", "english"],
    learningStyles: ["kinesthetic", "social", "visual"],
    cityFit: { tier1: 0.95, tier2: 0.75, tier3: 0.45, overseas: 0.8, hometown: 0.4, flexible: 0.8 },
    degreeFit: { bachelor: 0.85, master: 0.75, phd: 0.6, overseas: 0.8 },
    scores: { market: 80, salary: 78, growth: 82, social: 82 },
    tags: ["影视", "表演", "创意产业"],
    courses: ["戏剧概论", "表演基础", "导演基础", "编剧", "影视制作", "戏剧史"],
    careerPath: ["演员", "导演", "编剧", "制片人"],
    suitableFor: "热爱表演和影视创作、有艺术表现力、善于表达情感的人",
    relatedJobs: ["演员", "导演", "编剧", "制片人"],
    universities: [
      { name: "中央戏剧学院", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["表演", "导演"] },
      { name: "北京电影学院", majorRank: 2, majorStrength: "A+", recognition: "行业顶尖", strongMajors: ["导演", "编剧"] }
    ]
  },
  {
    name: "动画",
    category: "艺术设计",
    icon: "🎬",
    desc: "研究动画创作理论与技术，包括二维动画、三维动画、游戏美术等方向。",
    interests: ["art", "tech", "media"],
    personalityMatch: { E: 0.6, I: 0.75, S: 0.6, N: 0.9, T: 0.55, F: 0.85, J: 0.6, P: 0.85 },
    subjects: ["chinese", "math"],
    learningStyles: ["kinesthetic", "visual", "solitary"],
    cityFit: { tier1: 0.95, tier2: 0.8, tier3: 0.5, overseas: 0.8, hometown: 0.4, flexible: 0.85 },
    degreeFit: { bachelor: 0.9, master: 0.7, phd: 0.3, overseas: 0.8 },
    scores: { market: 86, salary: 84, growth: 88, social: 75 },
    tags: ["游戏", "影视", "创意产业"],
    courses: ["动画原理", "角色设计", "场景设计", "三维建模", "动画制作", "游戏美术"],
    careerPath: ["动画师", "原画师", "游戏美术", "艺术总监"],
    suitableFor: "热爱动画和游戏、有绘画基础、对数字技术感兴趣的人",
    relatedJobs: ["动画师", "原画师", "游戏美术", "特效师"],
    universities: [
      { name: "中国传媒大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["动画", "游戏设计"] },
      { name: "北京电影学院", majorRank: 2, majorStrength: "A", recognition: "行业顶尖", strongMajors: ["动画", "数字媒体"] }
    ]
  },

  // ===== 建筑规划类 =====
  {
    name: "建筑学",
    category: "建筑规划",
    icon: "🏛️",
    desc: "研究建筑物的设计、建造与环境关系，融合艺术与技术。",
    interests: ["design", "art", "tech"],
    personalityMatch: { E: 0.65, I: 0.7, S: 0.65, N: 0.85, T: 0.7, F: 0.75, J: 0.75, P: 0.7 },
    subjects: ["math", "physics", "chinese"],
    learningStyles: ["kinesthetic", "visual", "solitary"],
    cityFit: { tier1: 0.9, tier2: 0.8, tier3: 0.6, overseas: 0.85, hometown: 0.5, flexible: 0.65 },
    degreeFit: { bachelor: 0.85, master: 0.9, phd: 0.6, overseas: 0.9 },
    scores: { market: 88, salary: 88, growth: 85, social: 80 },
    tags: ["艺术与科技", "设计", "周期长"],
    courses: ["建筑设计", "建筑历史", "建筑结构", "建筑物理", "城市设计", "景观设计"],
    careerPath: ["建筑师", "项目负责人", "设计总监", "总建筑师"],
    suitableFor: "有艺术修养和空间想象力、能接受高强度工作的人",
    relatedJobs: ["建筑师", "室内设计师", "景观设计师", "BIM工程师"],
    universities: [
      { name: "清华大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["建筑学", "城市规划"] },
      { name: "东南大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["建筑学", "景观设计"] }
    ]
  },
  {
    name: "城乡规划",
    category: "建筑规划",
    icon: "🏘️",
    desc: "研究城市和乡村的空间布局与发展规划，包括总体规划、详细规划和城市设计。",
    interests: ["design", "social", "nature"],
    personalityMatch: { E: 0.65, I: 0.65, S: 0.7, N: 0.8, T: 0.7, F: 0.65, J: 0.8, P: 0.6 },
    subjects: ["math", "geography", "chinese"],
    learningStyles: ["visual", "kinesthetic", "social"],
    cityFit: { tier1: 0.85, tier2: 0.8, tier3: 0.7, overseas: 0.8, hometown: 0.6, flexible: 0.55 },
    degreeFit: { bachelor: 0.85, master: 0.9, phd: 0.7, overseas: 0.85 },
    scores: { market: 84, salary: 82, growth: 85, social: 82 },
    tags: ["城市发展", "政策导向", "综合型"],
    courses: ["城市规划原理", "城市设计", "区域规划", "交通规划", "GIS应用", "城市经济学"],
    careerPath: ["规划师", "设计师", "规划主管", "总规划师"],
    suitableFor: "关注城市发展、有空间思维、善于综合协调的人",
    relatedJobs: ["城市规划师", "土地规划师", "交通规划师", "GIS分析师"],
    universities: [
      { name: "同济大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["城乡规划", "城市规划"] },
      { name: "清华大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["城乡规划", "城市设计"] }
    ]
  },
  {
    name: "风景园林",
    category: "建筑规划",
    icon: "🌳",
    desc: "研究户外空间的规划设计，包括公园、庭院、风景区等景观环境的营造。",
    interests: ["design", "nature", "art"],
    personalityMatch: { E: 0.6, I: 0.7, S: 0.7, N: 0.8, T: 0.55, F: 0.85, J: 0.7, P: 0.75 },
    subjects: ["biology", "geography", "chinese"],
    learningStyles: ["kinesthetic", "visual", "solitary"],
    cityFit: { tier1: 0.85, tier2: 0.8, tier3: 0.65, overseas: 0.8, hometown: 0.55, flexible: 0.6 },
    degreeFit: { bachelor: 0.85, master: 0.85, phd: 0.6, overseas: 0.8 },
    scores: { market: 82, salary: 80, growth: 85, social: 78 },
    tags: ["生态", "设计", "户外"],
    courses: ["风景园林设计", "植物学", "园林史", "生态学", "景观工程", "园林植物"],
    careerPath: ["景观设计师", "园林工程师", "设计总监", "项目负责人"],
    suitableFor: "热爱自然、有艺术审美、喜欢户外环境设计的人",
    relatedJobs: ["景观设计师", "园林工程师", "植物设计师", "生态修复师"],
    universities: [
      { name: "北京林业大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["风景园林", "园林植物"] },
      { name: "同济大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["风景园林", "景观设计"] }
    ]
  },

  // ===== 医学类 =====
  {
    name: "临床医学",
    category: "医学",
    icon: "🏥",
    desc: "研究疾病的诊断、治疗和预防，培养具备临床诊疗能力的医师。",
    interests: ["medicine", "science", "social"],
    personalityMatch: { E: 0.65, I: 0.65, S: 0.8, N: 0.65, T: 0.85, F: 0.75, J: 0.85, P: 0.45 },
    subjects: ["biology", "chemistry", "physics"],
    learningStyles: ["kinesthetic", "reading", "social"],
    cityFit: { tier1: 0.9, tier2: 0.85, tier3: 0.75, overseas: 0.7, hometown: 0.7, flexible: 0.3 },
    degreeFit: { bachelor: 0.7, master: 0.9, phd: 0.85, overseas: 0.7 },
    scores: { market: 95, salary: 92, growth: 90, social: 95 },
    tags: ["高社会地位", "长学制", "责任重大"],
    courses: ["系统解剖学", "病理学", "药理学", "内科学", "外科学", "诊断学"],
    careerPath: ["住院医师", "主治医师", "副主任医师", "主任医师"],
    suitableFor: "有奉献精神、责任心强、能承受高压和长学制的人",
    relatedJobs: ["临床医生", "外科医生", "内科医生", "专科医生"],
    universities: [
      { name: "北京协和医学院", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["临床医学", "基础医学"] },
      { name: "北京大学医学部", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["临床医学", "口腔医学"] }
    ]
  },
  {
    name: "口腔医学",
    category: "医学",
    icon: "🦷",
    desc: "研究口腔疾病的预防、诊断和治疗，包括牙体牙髓、牙周、正畸等方向。",
    interests: ["medicine", "science", "art"],
    personalityMatch: { E: 0.65, I: 0.65, S: 0.8, N: 0.6, T: 0.85, F: 0.7, J: 0.85, P: 0.5 },
    subjects: ["biology", "chemistry", "physics"],
    learningStyles: ["kinesthetic", "visual", "solitary"],
    cityFit: { tier1: 0.9, tier2: 0.85, tier3: 0.8, overseas: 0.75, hometown: 0.75, flexible: 0.4 },
    degreeFit: { bachelor: 0.75, master: 0.85, phd: 0.7, overseas: 0.75 },
    scores: { market: 94, salary: 95, growth: 90, social: 90 },
    tags: ["高收入", "工作稳定", "精细操作"],
    courses: ["口腔解剖", "牙体牙髓病学", "牙周病学", "口腔外科", "正畸学", "口腔修复"],
    careerPath: ["口腔医师", "专科医师", "诊所 owner", "科室主任"],
    suitableFor: "手巧、细心、对精细操作有天赋、希望高收入的人",
    relatedJobs: ["口腔医生", "正畸医生", "种植牙医生", "口腔修复医生"],
    universities: [
      { name: "四川大学华西口腔医学院", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["口腔医学", "口腔修复"] },
      { name: "北京大学医学部", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["口腔医学", "口腔正畸"] }
    ]
  },
  {
    name: "护理学",
    category: "医学",
    icon: "💉",
    desc: "研究护理理论和实践，培养具备临床护理、护理管理和护理教育能力的专业人才。",
    interests: ["medicine", "social", "education"],
    personalityMatch: { E: 0.75, I: 0.5, S: 0.8, N: 0.6, T: 0.65, F: 0.9, J: 0.8, P: 0.5 },
    subjects: ["biology", "chemistry"],
    learningStyles: ["kinesthetic", "social", "visual"],
    cityFit: { tier1: 0.85, tier2: 0.85, tier3: 0.8, overseas: 0.8, hometown: 0.75, flexible: 0.4 },
    degreeFit: { bachelor: 0.85, master: 0.8, phd: 0.5, overseas: 0.8 },
    scores: { market: 90, salary: 80, growth: 88, social: 92 },
    tags: ["刚需", "就业率高", "人文关怀"],
    courses: ["基础护理学", "内科护理", "外科护理", "妇产科护理", "儿科护理", "护理管理"],
    careerPath: ["护士", "护士长", "护理部主任", "护理教育者"],
    suitableFor: "有爱心、耐心细致、善于照顾他人、能接受轮班工作的人",
    relatedJobs: ["临床护士", "ICU护士", "手术室护士", "社区护士"],
    universities: [
      { name: "中南大学湘雅护理学院", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["护理学", "社区护理"] },
      { name: "北京大学医学部", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["护理学", "护理管理"] }
    ]
  },
  {
    name: "药学",
    category: "医学",
    icon: "💊",
    desc: "研究药物的研发、生产、检验和合理使用，包括药物化学、药理学、药剂学等方向。",
    interests: ["medicine", "science", "chemistry"],
    personalityMatch: { E: 0.5, I: 0.8, S: 0.8, N: 0.65, T: 0.85, F: 0.5, J: 0.8, P: 0.55 },
    subjects: ["chemistry", "biology", "math"],
    learningStyles: ["kinesthetic", "reading", "solitary"],
    cityFit: { tier1: 0.9, tier2: 0.85, tier3: 0.7, overseas: 0.8, hometown: 0.6, flexible: 0.55 },
    degreeFit: { bachelor: 0.8, master: 0.9, phd: 0.85, overseas: 0.85 },
    scores: { market: 90, salary: 88, growth: 90, social: 82 },
    tags: ["医药产业", "研发型", "专业壁垒"],
    courses: ["药物化学", "药理学", "药剂学", "药物分析", "药事管理", "临床药学"],
    careerPath: ["药师", "药物研发", "临床药师", "药事管理"],
    suitableFor: "对药物和化学感兴趣、注重细节、希望从事医药研发的人",
    relatedJobs: ["药师", "药物研发", "医药代表", "临床药师"],
    universities: [
      { name: "中国药科大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["药学", "药物化学"] },
      { name: "北京大学医学部", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["药学", "临床药学"] }
    ]
  },
  {
    name: "公共卫生与预防医学",
    category: "医学",
    icon: "🛡️",
    desc: "研究人群健康和疾病预防，包括流行病学、卫生统计、环境卫生等方向。",
    interests: ["medicine", "science", "social"],
    personalityMatch: { E: 0.65, I: 0.65, S: 0.75, N: 0.7, T: 0.8, F: 0.7, J: 0.8, P: 0.55 },
    subjects: ["biology", "chemistry", "math"],
    learningStyles: ["social", "reading", "visual"],
    cityFit: { tier1: 0.85, tier2: 0.8, tier3: 0.75, overseas: 0.8, hometown: 0.7, flexible: 0.5 },
    degreeFit: { bachelor: 0.8, master: 0.9, phd: 0.85, overseas: 0.85 },
    scores: { market: 86, salary: 82, growth: 90, social: 92 },
    tags: ["公共健康", "疫情应对", "社会价值高"],
    courses: ["流行病学", "卫生统计学", "环境卫生学", "营养与食品卫生", "职业卫生", "健康教育"],
    careerPath: ["疾控人员", "卫生管理者", "研究员", "公共卫生专家"],
    suitableFor: "关注公共健康、有社会责任感、喜欢数据分析和调查研究的人",
    relatedJobs: ["疾控人员", "流行病学家", "卫生管理者", "健康顾问"],
    universities: [
      { name: "华中科技大学同济医学院", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["公共卫生", "流行病学"] },
      { name: "北京大学医学部", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["公共卫生", "预防医学"] }
    ]
  },
  {
    name: "中医学",
    category: "医学",
    icon: "🌿",
    desc: "研究中医药理论和临床诊疗，包括中医基础、中药学、针灸推拿等方向。",
    interests: ["medicine", "nature", "history"],
    personalityMatch: { E: 0.6, I: 0.7, S: 0.75, N: 0.7, T: 0.75, F: 0.75, J: 0.8, P: 0.6 },
    subjects: ["biology", "chemistry", "chinese"],
    learningStyles: ["reading", "kinesthetic", "solitary"],
    cityFit: { tier1: 0.85, tier2: 0.8, tier3: 0.8, overseas: 0.6, hometown: 0.75, flexible: 0.4 },
    degreeFit: { bachelor: 0.8, master: 0.85, phd: 0.75, overseas: 0.5 },
    scores: { market: 86, salary: 82, growth: 85, social: 88 },
    tags: ["传统文化", "国粹", "长线发展"],
    courses: ["中医基础理论", "中医诊断学", "中药学", "方剂学", "针灸学", "中医内科学"],
    careerPath: ["中医师", "针灸师", "中药师", "科室主任"],
    suitableFor: "对传统文化有兴趣、愿意长期积累、喜欢整体思维的人",
    relatedJobs: ["中医师", "针灸推拿师", "中药师", "养生顾问"],
    universities: [
      { name: "北京中医药大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["中医学", "针灸推拿"] },
      { name: "上海中医药大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["中医学", "中药学"] }
    ]
  },
  {
    name: "兽医学",
    category: "医学",
    icon: "🐾",
    desc: "研究动物疾病的预防、诊断和治疗，包括小动物医学、大动物医学和公共卫生兽医。",
    interests: ["medicine", "nature", "science"],
    personalityMatch: { E: 0.65, I: 0.6, S: 0.8, N: 0.6, T: 0.8, F: 0.75, J: 0.75, P: 0.6 },
    subjects: ["biology", "chemistry", "math"],
    learningStyles: ["kinesthetic", "social", "visual"],
    cityFit: { tier1: 0.8, tier2: 0.8, tier3: 0.75, overseas: 0.7, hometown: 0.65, flexible: 0.45 },
    degreeFit: { bachelor: 0.85, master: 0.8, phd: 0.6, overseas: 0.7 },
    scores: { market: 84, salary: 80, growth: 86, social: 78 },
    tags: ["宠物经济", "动物保护", "专业性强"],
    courses: ["动物解剖学", "动物病理学", "兽医内科学", "兽医外科学", "兽医传染病学", "兽医寄生虫学"],
    careerPath: ["兽医", "宠物医生", "检疫人员", "兽药研发"],
    suitableFor: "喜欢动物、有爱心、对动物医学感兴趣的人",
    relatedJobs: ["宠物医生", "兽医", "检疫人员", "兽药研发"],
    universities: [
      { name: "中国农业大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["兽医学", "动物医学"] },
      { name: "华中农业大学", majorRank: 2, majorStrength: "A", recognition: "国内领先", strongMajors: ["兽医学", "动物科学"] }
    ]
  },

  // ===== 农林类 =====
  {
    name: "农学",
    category: "农林",
    icon: "🌾",
    desc: "研究作物生产、遗传育种和农业资源利用，是保障粮食安全的基础学科。",
    interests: ["nature", "science", "social"],
    personalityMatch: { E: 0.55, I: 0.7, S: 0.8, N: 0.6, T: 0.8, F: 0.6, J: 0.75, P: 0.6 },
    subjects: ["biology", "chemistry", "math"],
    learningStyles: ["kinesthetic", "visual", "solitary"],
    cityFit: { tier1: 0.7, tier2: 0.75, tier3: 0.8, overseas: 0.65, hometown: 0.7, flexible: 0.5 },
    degreeFit: { bachelor: 0.8, master: 0.85, phd: 0.8, overseas: 0.7 },
    scores: { market: 78, salary: 72, growth: 82, social: 85 },
    tags: ["粮食安全", "国家战略", "田野工作"],
    courses: ["作物栽培学", "遗传育种", "土壤肥料学", "植物保护", "农业生态学", "种子学"],
    careerPath: ["农艺师", "育种专家", "农业管理者", "研究员"],
    suitableFor: "热爱土地和农业、愿意扎根基层、关注粮食安全的人",
    relatedJobs: ["农艺师", "育种专家", "农业技术员", "农业管理者"],
    universities: [
      { name: "中国农业大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["农学", "作物学"] },
      { name: "华中农业大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["农学", "园艺学"] }
    ]
  },
  {
    name: "林学",
    category: "农林",
    icon: "🌲",
    desc: "研究森林资源的培育、保护和利用，包括森林培育、森林保护、野生动植物保护等方向。",
    interests: ["nature", "science", "social"],
    personalityMatch: { E: 0.5, I: 0.75, S: 0.8, N: 0.65, T: 0.75, F: 0.7, J: 0.75, P: 0.6 },
    subjects: ["biology", "chemistry", "geography"],
    learningStyles: ["kinesthetic", "visual", "solitary"],
    cityFit: { tier1: 0.65, tier2: 0.7, tier3: 0.8, overseas: 0.65, hometown: 0.7, flexible: 0.45 },
    degreeFit: { bachelor: 0.8, master: 0.85, phd: 0.8, overseas: 0.7 },
    scores: { market: 75, salary: 70, growth: 80, social: 82 },
    tags: ["生态保护", "自然资源", "户外工作"],
    courses: ["树木学", "森林培育学", "森林经理学", "森林保护学", "测树学", "林业生态"],
    careerPath: ["林业工程师", "森林经理", "保护区管理者", "研究员"],
    suitableFor: "热爱自然、喜欢户外、关注生态保护和可持续发展的人",
    relatedJobs: ["林业工程师", "森林经理", "保护区管理者", "园林工程师"],
    universities: [
      { name: "北京林业大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["林学", "森林保护"] },
      { name: "南京林业大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["林学", "木材科学"] }
    ]
  },
  {
    name: "园艺",
    category: "农林",
    icon: "🌻",
    desc: "研究果树、蔬菜、花卉和观赏植物的栽培、育种和经营管理。",
    interests: ["nature", "art", "science"],
    personalityMatch: { E: 0.55, I: 0.7, S: 0.8, N: 0.65, T: 0.7, F: 0.75, J: 0.75, P: 0.65 },
    subjects: ["biology", "chemistry"],
    learningStyles: ["kinesthetic", "visual", "solitary"],
    cityFit: { tier1: 0.7, tier2: 0.75, tier3: 0.75, overseas: 0.65, hometown: 0.65, flexible: 0.5 },
    degreeFit: { bachelor: 0.85, master: 0.8, phd: 0.65, overseas: 0.65 },
    scores: { market: 76, salary: 72, growth: 80, social: 78 },
    tags: ["美化生活", "都市农业", "创意农业"],
    courses: ["园艺植物育种学", "果树栽培学", "蔬菜栽培学", "花卉学", "设施园艺", "园林设计"],
    careerPath: ["园艺师", "园林设计师", "农业管理者", "创业者"],
    suitableFor: "喜欢植物、有审美情趣、愿意从事与绿色生活相关工作的人",
    relatedJobs: ["园艺师", "园林设计师", "花艺师", "农业技术员"],
    universities: [
      { name: "华中农业大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["园艺学", "园林"] },
      { name: "浙江大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["园艺学", "茶学"] }
    ]
  },
  {
    name: "动物科学",
    category: "农林",
    icon: "🐄",
    desc: "研究动物的遗传育种、营养饲料和繁殖生产，包括畜牧和特种经济动物。",
    interests: ["nature", "science", "social"],
    personalityMatch: { E: 0.6, I: 0.65, S: 0.8, N: 0.6, T: 0.8, F: 0.65, J: 0.75, P: 0.6 },
    subjects: ["biology", "chemistry", "math"],
    learningStyles: ["kinesthetic", "visual", "social"],
    cityFit: { tier1: 0.65, tier2: 0.7, tier3: 0.8, overseas: 0.65, hometown: 0.7, flexible: 0.45 },
    degreeFit: { bachelor: 0.85, master: 0.8, phd: 0.7, overseas: 0.65 },
    scores: { market: 76, salary: 72, growth: 80, social: 75 },
    tags: ["畜牧业", "食品安全", "生物技术"],
    courses: ["动物遗传育种", "动物营养学", "饲料学", "家畜繁殖学", "畜牧场规划", "动物行为学"],
    careerPath: ["畜牧师", "饲料研发", "养殖管理者", "技术专家"],
    suitableFor: "喜欢动物、对畜牧业感兴趣、愿意在养殖一线工作的人",
    relatedJobs: ["畜牧师", "饲料研发", "养殖技术员", "动物营养师"],
    universities: [
      { name: "中国农业大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["动物科学", "畜牧学"] },
      { name: "华中农业大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["动物科学", "水产养殖"] }
    ]
  },
  {
    name: "食品科学与工程",
    category: "农林",
    icon: "🍞",
    desc: "研究食品的加工、保藏、安全和营养，包括食品工艺、食品检测和食品研发等方向。",
    interests: ["science", "nature", "social"],
    personalityMatch: { E: 0.55, I: 0.7, S: 0.8, N: 0.6, T: 0.8, F: 0.6, J: 0.8, P: 0.55 },
    subjects: ["chemistry", "biology", "math"],
    learningStyles: ["kinesthetic", "visual", "reading"],
    cityFit: { tier1: 0.8, tier2: 0.8, tier3: 0.75, overseas: 0.75, hometown: 0.65, flexible: 0.55 },
    degreeFit: { bachelor: 0.85, master: 0.85, phd: 0.7, overseas: 0.75 },
    scores: { market: 84, salary: 80, growth: 85, social: 82 },
    tags: ["食品安全", "民生刚需", "研发型"],
    courses: ["食品化学", "食品微生物学", "食品工艺学", "食品工程原理", "食品分析", "食品安全"],
    careerPath: ["食品工程师", "研发工程师", "质量经理", "技术总监"],
    suitableFor: "关注食品安全、对食品研发感兴趣、注重细节的人",
    relatedJobs: ["食品工程师", "研发工程师", "质检工程师", "营养师"],
    universities: [
      { name: "江南大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["食品科学", "发酵工程"] },
      { name: "中国农业大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["食品科学", "农产品加工"] }
    ]
  },
  {
    name: "海洋科学",
    category: "农林",
    icon: "🌊",
    desc: "研究海洋的自然现象和规律，包括物理海洋学、海洋化学、海洋生物学和海洋地质学等。",
    interests: ["nature", "science", "nature"],
    personalityMatch: { E: 0.5, I: 0.8, S: 0.7, N: 0.8, T: 0.85, F: 0.5, J: 0.7, P: 0.75 },
    subjects: ["physics", "chemistry", "biology"],
    learningStyles: ["kinesthetic", "visual", "solitary"],
    cityFit: { tier1: 0.75, tier2: 0.75, tier3: 0.7, overseas: 0.8, hometown: 0.55, flexible: 0.5 },
    degreeFit: { bachelor: 0.75, master: 0.9, phd: 0.9, overseas: 0.85 },
    scores: { market: 78, salary: 76, growth: 85, social: 72 },
    tags: ["海洋强国", "科研导向", "探索性"],
    courses: ["物理海洋学", "海洋化学", "海洋生物学", "海洋地质学", "海洋遥感", "海洋资源开发"],
    careerPath: ["海洋研究员", "海洋工程师", "环保专家", "资源开发者"],
    suitableFor: "热爱海洋、对探索未知有兴趣、能接受海上工作的人",
    relatedJobs: ["海洋研究员", "海洋工程师", "环保专家", "水产养殖专家"],
    universities: [
      { name: "中国海洋大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["海洋科学", "水产学"] },
      { name: "厦门大学", majorRank: 2, majorStrength: "A", recognition: "国内领先", strongMajors: ["海洋科学", "海洋化学"] }
    ]
  },

  // ===== 信息管理类 =====
  {
    name: "图书馆学",
    category: "信息管理",
    icon: "📚",
    desc: "研究图书馆和信息中心的组织、管理和服务，包括信息组织、信息检索和数字图书馆等。",
    interests: ["language", "tech", "education"],
    personalityMatch: { E: 0.45, I: 0.8, S: 0.7, N: 0.7, T: 0.7, F: 0.65, J: 0.85, P: 0.5 },
    subjects: ["chinese", "english", "math"],
    learningStyles: ["reading", "solitary", "visual"],
    cityFit: { tier1: 0.75, tier2: 0.75, tier3: 0.7, overseas: 0.7, hometown: 0.65, flexible: 0.6 },
    degreeFit: { bachelor: 0.8, master: 0.85, phd: 0.75, overseas: 0.7 },
    scores: { market: 72, salary: 70, growth: 75, social: 72 },
    tags: ["信息管理", "文化传承", "稳定"],
    courses: ["图书馆学概论", "信息组织", "信息检索", "数字图书馆", "分类编目", "读者服务"],
    careerPath: ["图书馆员", "信息专员", "档案管理员", "知识管理"],
    suitableFor: "喜欢安静环境、热爱书籍、有耐心和条理性的人",
    relatedJobs: ["图书馆员", "档案管理员", "信息专员", "知识管理"],
    universities: [
      { name: "武汉大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["图书馆学", "情报学"] },
      { name: "北京大学", majorRank: 2, majorStrength: "A+", recognition: "国际知名", strongMajors: ["图书馆学", "信息管理"] }
    ]
  },
  {
    name: "信息管理与信息系统",
    category: "信息管理",
    icon: "💾",
    desc: "研究信息系统的规划、开发和管理，融合管理学与信息技术。",
    interests: ["tech", "business", "math"],
    personalityMatch: { E: 0.6, I: 0.7, S: 0.7, N: 0.75, T: 0.85, F: 0.45, J: 0.8, P: 0.6 },
    subjects: ["math", "english"],
    learningStyles: ["kinesthetic", "visual", "social"],
    cityFit: { tier1: 0.9, tier2: 0.8, tier3: 0.6, overseas: 0.75, hometown: 0.5, flexible: 0.8 },
    degreeFit: { bachelor: 0.85, master: 0.85, phd: 0.5, overseas: 0.7 },
    scores: { market: 88, salary: 86, growth: 88, social: 72 },
    tags: ["交叉学科", "应用型", "就业面广"],
    courses: ["管理信息系统", "数据库原理", "信息系统分析与设计", "ERP", "电子商务", "数据挖掘"],
    careerPath: ["系统分析师", "IT顾问", "信息主管", "CIO"],
    suitableFor: "对管理和技术都有兴趣、希望从事企业信息化建设的人",
    relatedJobs: ["系统分析师", "IT顾问", "ERP实施", "数据分析师"],
    universities: [
      { name: "清华大学", majorRank: 1, majorStrength: "A+", recognition: "国际知名", strongMajors: ["信息管理", "系统工程"] },
      { name: "华中科技大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["信息管理", "电子商务"] }
    ]
  },

  // ===== 旅游管理类 =====
  {
    name: "旅游管理",
    category: "旅游管理",
    icon: "✈️",
    desc: "研究旅游业的经营与管理，包括旅游规划、景区管理、旅行社运营等方向。",
    interests: ["social", "nature", "business"],
    personalityMatch: { E: 0.85, I: 0.35, S: 0.7, N: 0.75, T: 0.6, F: 0.8, J: 0.65, P: 0.8 },
    subjects: ["english", "chinese", "geography"],
    learningStyles: ["social", "kinesthetic", "visual"],
    cityFit: { tier1: 0.85, tier2: 0.85, tier3: 0.7, overseas: 0.85, hometown: 0.55, flexible: 0.75 },
    degreeFit: { bachelor: 0.9, master: 0.7, phd: 0.3, overseas: 0.75 },
    scores: { market: 80, salary: 75, growth: 85, social: 85 },
    tags: ["服务业", "外向型", "受经济周期影响"],
    courses: ["旅游学概论", "旅游经济学", "旅游规划", "酒店管理", "导游业务", "旅游营销"],
    careerPath: ["导游", "旅游策划", "景区管理者", "旅游企业高管"],
    suitableFor: "热爱旅行、善于沟通、喜欢接触不同文化的人",
    relatedJobs: ["导游", "旅游策划", "景区管理", "OTA运营"],
    universities: [
      { name: "中山大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["旅游管理", "酒店管理"] },
      { name: "南开大学", majorRank: 2, majorStrength: "A", recognition: "国内领先", strongMajors: ["旅游管理", "会展经济"] }
    ]
  },
  {
    name: "酒店管理",
    category: "旅游管理",
    icon: "🏨",
    desc: "研究酒店和餐饮企业的运营管理，包括前厅、客房、餐饮、人力资源等。",
    interests: ["business", "social", "art"],
    personalityMatch: { E: 0.85, I: 0.35, S: 0.75, N: 0.65, T: 0.65, F: 0.8, J: 0.75, P: 0.65 },
    subjects: ["english", "chinese", "math"],
    learningStyles: ["social", "kinesthetic", "visual"],
    cityFit: { tier1: 0.9, tier2: 0.85, tier3: 0.65, overseas: 0.9, hometown: 0.5, flexible: 0.7 },
    degreeFit: { bachelor: 0.9, master: 0.7, phd: 0.2, overseas: 0.85 },
    scores: { market: 78, salary: 75, growth: 82, social: 85 },
    tags: ["服务业", "国际化", "轮班制"],
    courses: ["酒店管理概论", "前厅与客房管理", "餐饮管理", "酒店营销", "酒店财务", "服务管理"],
    careerPath: ["酒店管培生", "部门经理", "酒店总经理", "区域总监"],
    suitableFor: "服务意识强、善于沟通、能接受轮班和节假日工作的人",
    relatedJobs: ["酒店经理", "餐饮经理", "会展经理", "管培生"],
    universities: [
      { name: "中山大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["酒店管理", "旅游管理"] },
      { name: "北京第二外国语学院", majorRank: 2, majorStrength: "A", recognition: "行业知名", strongMajors: ["酒店管理", "会展管理"] }
    ]
  },

  // ===== 体育类 =====
  {
    name: "体育教育",
    category: "体育",
    icon: "🏃",
    desc: "研究体育教学、训练理论和运动科学，培养体育教师和教练人才。",
    interests: ["sports", "education", "social"],
    personalityMatch: { E: 0.85, I: 0.35, S: 0.75, N: 0.65, T: 0.65, F: 0.8, J: 0.75, P: 0.65 },
    subjects: ["biology", "chinese"],
    learningStyles: ["kinesthetic", "social", "visual"],
    cityFit: { tier1: 0.8, tier2: 0.8, tier3: 0.75, overseas: 0.65, hometown: 0.7, flexible: 0.6 },
    degreeFit: { bachelor: 0.9, master: 0.75, phd: 0.5, overseas: 0.6 },
    scores: { market: 78, salary: 72, growth: 78, social: 82 },
    tags: ["师范", "健康事业", "体能要求高"],
    courses: ["运动解剖学", "运动生理学", "体育教学法", "田径", "球类运动", "体育心理学"],
    careerPath: ["体育教师", "教练", "体育管理者", "健身顾问"],
    suitableFor: "身体素质好、热爱运动、喜欢与人互动和教学的人",
    relatedJobs: ["体育教师", "教练", "健身教练", "体育管理者"],
    universities: [
      { name: "北京体育大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["体育教育", "运动训练"] },
      { name: "上海体育学院", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["体育教育", "运动人体科学"] }
    ]
  },

  // ===== 军事类 =====
  {
    name: "军事科学",
    category: "军事",
    icon: "🎖️",
    desc: "研究国防和军队建设理论，包括战略学、战役学、战术学和军事历史等方向。",
    interests: ["law", "history", "sports"],
    personalityMatch: { E: 0.7, I: 0.55, S: 0.75, N: 0.7, T: 0.8, F: 0.55, J: 0.9, P: 0.4 },
    subjects: ["physics", "math", "history"],
    learningStyles: ["kinesthetic", "social", "reading"],
    cityFit: { tier1: 0.7, tier2: 0.7, tier3: 0.7, overseas: 0.3, hometown: 0.6, flexible: 0.3 },
    degreeFit: { bachelor: 0.85, master: 0.85, phd: 0.75, overseas: 0.2 },
    scores: { market: 80, salary: 78, growth: 80, social: 88 },
    tags: ["国防事业", "纪律性强", "奉献精神"],
    courses: ["军事理论", "战略学", "战役学", "军事历史", "国防动员", "军事管理"],
    careerPath: ["军官", "军事研究员", "国防教育工作者", "军事顾问"],
    suitableFor: "有报国志向、纪律性强、身体素质好、能接受严格管理的人",
    relatedJobs: ["军官", "军事研究员", "国防教育", "安保顾问"],
    universities: [
      { name: "国防科技大学", majorRank: 1, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["军事科学", "信息系统"] },
      { name: "国防大学", majorRank: 2, majorStrength: "A+", recognition: "国内顶尖", strongMajors: ["战略学", "战役学"] }
    ]
  }
];

// ============================================================
// 导出数据（如需要模块化使用）
// ============================================================
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    interestData,
    personalityData,
    subjectData,
    learningStyleData,
    cityData,
    degreeData,
    weightData,
    schoolWeightData,
    majorDB
  };
}
# 智选未来 — 高考专业推荐系统

> 基于兴趣、性格、学科、学习风格、城市偏好、学位路径、职业前景、薪资水平 **8 大维度**，为高考考生精准推荐最适合的专业与高校。

---

## 在线访问

| 方式 | 地址 | 说明 |
|------|------|------|
| **Cloudflare Pages** | https://wild-art-8334.carry950811.workers.dev/ | 推荐，国内访问速度快 |
| **GitHub Pages** | https://bugcreatemachine.github.io/zhixuan-weilai | 备用 |

---

## 功能特性

- **8 维度智能评估** — 兴趣、性格、学科、学习风格、城市、学制、市场、未来
- **73 个热门专业** — 覆盖计算机、金融、医学、建筑、艺术等 12 大门类
- **556 所高校数据** — 含 39 所 985、72 所 211、29 所双一流
- **专业详情展示** — 核心课程、发展路径、适合人群、相关职业
- **快速推荐** — 输入分数+城市，秒级筛选匹配大学
- **学校查询与对比** — 按名称/地区/层次搜索，横向对比两所高校

---

## 本地部署

### 方式一：直接打开（最简单）

```bash
git clone https://github.com/BugCreateMachine/zhixuan-weilai.git
cd zhixuan-weilai
# 直接用浏览器打开 index.html 即可
```

### 方式二：Python 本地服务器

```bash
cd zhixuan-weilai
python3 -m http.server 9002
# 浏览器访问 http://localhost:9002
```

### 方式三：Node.js 本地服务器

```bash
cd zhixuan-weilai
npx serve .
# 浏览器访问 http://localhost:3000
```

---

## 技术栈

| 技术 | 说明 |
|------|------|
| HTML5 | 单页面应用结构 |
| CSS3 | 响应式布局，支持移动端 |
| Vanilla JavaScript | 无框架依赖，纯原生 JS |
| Font Awesome | 图标库 |
| Google Fonts | Noto Serif SC 字体 |

---

## 项目结构

```
zhixuan-weilai/
├── index.html          # 主页面（HTML + CSS）
├── app.js              # 专业数据与评估维度配置
├── logic.js            # 交互逻辑与推荐算法
├── schooldb.js         # 556 所高校数据
├── 部署指南.md          # 详细部署说明
└── zhixuan-weilai-deploy.zip  # 一键部署包
```

---

## 数据规模

| 数据类型 | 数量 |
|----------|------|
| 专业 | 73 个 |
| 高校 | 556 所 |
| 985 高校 | 39 所 |
| 211 高校 | 72 所 |
| 双一流 | 29 所 |
| 评估维度 | 8 个 |
| 兴趣领域 | 16 个 |
| 性格类型 | 16 种（MBTI） |

---

## 更新日志

### v1.0 (2026-06-17)
- 初始版本发布
- 8 维度智能评估系统
- 73 个专业 + 556 所高校数据
- 专业详情（课程/发展路径/适合人群/相关职业）
- 快速推荐（分数+城市筛选）
- 学校查询与对比功能

---

## 免责声明

> 本系统数据仅供参考，请结合当年招生政策、个人实际情况及官方信息做出最终决策。

---

## License

MIT License

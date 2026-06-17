// ============================================================
// 智选未来 — 交互逻辑 (logic.js)
// ============================================================

const state = {
  step: 0,
  interests: [],
  personality: {},
  subjects: {},
  learningStyles: [],
  cities: [],
  degrees: [],
  weights: {},
  weightOrder: [],
  schoolWeight: '',
  totalScore: 0,
  rankPct: 0,
  sliders: {}
};

const sliderConfig = [
  { id: 'career', label: '职业前景重视度', min: 0, max: 100, val: 70 },
  { id: 'salary', label: '薪资水平重视度', min: 0, max: 100, val: 60 },
  { id: 'stability', label: '工作稳定重视度', min: 0, max: 100, val: 50 },
  { id: 'innovation', label: '创新空间重视度', min: 0, max: 100, val: 60 },
  { id: 'social', label: '社会贡献重视度', min: 0, max: 100, val: 40 }
];

function init() {
  renderInterestTags();
  renderPersonality();
  renderSubjects();
  renderLearningStyles();
  renderCities();
  renderDegrees();
  renderSliders();
  renderWeights();
  renderSchoolWeights();
  updateStepBar();
}

/* ---------- Interest ---------- */
function renderInterestTags() {
  const el = document.getElementById('iTags');
  if (!el || typeof interestData === 'undefined') return;
  el.innerHTML = interestData.map(it => `
    <div class="tag ${state.interests.includes(it.id) ? 'selected' : ''}" onclick="toggleInterest('${it.id}')">
      <i class="${it.icon}"></i> ${it.label}
    </div>
  `).join('');
}

function toggleInterest(id) {
  if (state.interests.includes(id)) {
    state.interests = state.interests.filter(x => x !== id);
  } else {
    state.interests.push(id);
  }
  renderInterestTags();
}

/* ---------- Personality ---------- */
function renderPersonality() {
  const el = document.getElementById('pSec');
  if (!el || typeof personalityData === 'undefined') return;
  el.innerHTML = personalityData.map((g, gi) => `
    <div class="pSec">
      <h4>${g.group}</h4>
      <div class="pOpts">
        ${g.options.map(opt => `
          <div class="pOpt ${state.personality[gi] === opt.key ? 'selected' : ''}" onclick="selectPersonality(${gi},'${opt.key}')">
            <div class="key">${opt.label}</div>
            <div class="desc">${opt.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function selectPersonality(gi, key) {
  state.personality[gi] = key;
  renderPersonality();
}

/* ---------- Subjects ---------- */
function renderSubjects() {
  const el = document.getElementById('sGrid');
  if (!el || typeof subjectData === 'undefined') return;
  el.innerHTML = subjectData.map(s => `
    <div class="sItem ${state.subjects[s.id] !== undefined ? 'selected' : ''}" onclick="toggleSubject('${s.id}')">
      <div class="icon">${s.icon}</div>
      <h4>${s.label}</h4>
      <input type="number" min="0" max="${s.maxScore}" placeholder="分数"
        value="${state.subjects[s.id] !== undefined ? state.subjects[s.id] : ''}"
        oninput="event.stopPropagation();updateSubjectScore('${s.id}',this.value)"
        onclick="event.stopPropagation()">
    </div>
  `).join('');
}

function toggleSubject(id) {
  if (state.subjects[id] !== undefined) {
    delete state.subjects[id];
  } else {
    state.subjects[id] = 0;
  }
  renderSubjects();
}

function updateSubjectScore(id, val) {
  const n = parseFloat(val);
  state.subjects[id] = isNaN(n) ? 0 : n;
  renderSubjects();
}

/* ---------- Learning Styles ---------- */
function renderLearningStyles() {
  const el = document.getElementById('lGrid');
  if (!el || typeof learningStyleData === 'undefined') return;
  el.innerHTML = learningStyleData.map(l => `
    <div class="card ${state.learningStyles.includes(l.id) ? 'selected' : ''}" onclick="toggleLearningStyle('${l.id}')">
      <div class="icon">🎯</div>
      <h4>${l.label}</h4>
      <p>${l.desc}</p>
    </div>
  `).join('');
}

function toggleLearningStyle(id) {
  if (state.learningStyles.includes(id)) {
    state.learningStyles = state.learningStyles.filter(x => x !== id);
  } else {
    state.learningStyles.push(id);
  }
  renderLearningStyles();
}

/* ---------- Cities ---------- */
function renderCities() {
  const el = document.getElementById('cGrid');
  if (!el || typeof cityData === 'undefined') return;
  el.innerHTML = cityData.map(c => `
    <div class="card ${state.cities.includes(c.id) ? 'selected' : ''}" onclick="toggleCity('${c.id}')">
      <div class="icon">${c.icon}</div>
      <h4>${c.label}</h4>
      <p>${c.desc}</p>
    </div>
  `).join('');
}

function toggleCity(id) {
  if (state.cities.includes(id)) {
    state.cities = state.cities.filter(x => x !== id);
  } else {
    state.cities.push(id);
  }
  renderCities();
}

/* ---------- Degrees ---------- */
function renderDegrees() {
  const el = document.getElementById('dGrid');
  if (!el || typeof degreeData === 'undefined') return;
  el.innerHTML = degreeData.map(d => `
    <div class="card ${state.degrees.includes(d.id) ? 'selected' : ''}" onclick="toggleDegree('${d.id}')">
      <div class="icon">${d.icon}</div>
      <h4>${d.label}</h4>
      <p>${d.desc}</p>
    </div>
  `).join('');
}

function toggleDegree(id) {
  if (state.degrees.includes(id)) {
    state.degrees = state.degrees.filter(x => x !== id);
  } else {
    state.degrees.push(id);
  }
  renderDegrees();
}

/* ---------- Sliders ---------- */
function renderSliders() {
  const el = document.getElementById('slSec');
  if (!el) return;
  el.innerHTML = sliderConfig.map(s => {
    const v = state.sliders[s.id] !== undefined ? state.sliders[s.id] : s.val;
    return `
      <div class="slRow">
        <label>${s.label}</label>
        <input type="range" min="${s.min}" max="${s.max}" value="${v}" oninput="setSlider('${s.id}',this.value)">
        <div class="val" id="sv-${s.id}">${v}</div>
      </div>
    `;
  }).join('');
}

function setSlider(id, val) {
  state.sliders[id] = parseInt(val, 10);
  const disp = document.getElementById('sv-' + id);
  if (disp) disp.textContent = val;
}

/* ---------- Weights ---------- */
function renderWeights() {
  const el = document.getElementById('wGrid');
  if (!el || typeof weightData === 'undefined') return;
  el.innerHTML = weightData.map(w => `
    <div class="wItem ${state.weights[w.id] ? 'selected' : ''}" onclick="toggleWeight('${w.id}')">
      <i class="${w.icon}"></i>
      <span>${w.label}</span>
    </div>
  `).join('');
}

function toggleWeight(id) {
  if (state.weights[id]) {
    delete state.weights[id];
    state.weightOrder = state.weightOrder.filter(x => x !== id);
  } else {
    state.weights[id] = true;
    state.weightOrder.push(id);
  }
  renderWeights();
}

/* ---------- School Weights ---------- */
function renderSchoolWeights() {
  const el = document.getElementById('swGrid');
  if (!el || typeof schoolWeightData === 'undefined') return;
  el.innerHTML = schoolWeightData.map(sw => `
    <div class="swItem ${state.schoolWeight === sw.id ? 'selected' : ''}" onclick="selectSchoolWeight('${sw.id}')">
      <h4>${sw.label}</h4>
      <p>${sw.desc}</p>
    </div>
  `).join('');
}

function selectSchoolWeight(id) {
  state.schoolWeight = id;
  renderSchoolWeights();
}

/* ---------- Total Display ---------- */
function updateTotalDisplay() {
  const ts = document.getElementById('tScore');
  const rp = document.getElementById('rPct');
  state.totalScore = ts ? parseFloat(ts.value) || 0 : 0;
  state.rankPct = rp ? parseFloat(rp.value) || 0 : 0;
}

/* ---------- Navigation ---------- */
function goTo(n) {
  if (n > state.step && !validateStep(state.step)) return;
  state.step = n;
  showPanel(n);
  updateStepBar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showPanel(n) {
  for (let i = 0; i <= 7; i++) {
    const p = document.getElementById('p' + i);
    if (p) p.classList.toggle('active', i === n);
  }
}

function updateStepBar() {
  const bar = document.getElementById('sbar');
  if (!bar) return;
  const steps = bar.querySelectorAll('.step');
  steps.forEach((s, i) => {
    s.classList.remove('active', 'done');
    if (i < state.step) s.classList.add('done');
    if (i === state.step) s.classList.add('active');
  });
}

/* ---------- Validation ---------- */
function validateStep(s) {
  switch (s) {
    case 0:
      if (state.interests.length === 0) { showToast('请至少选择一个兴趣方向'); return false; }
      break;
    case 1:
      if (Object.keys(state.personality).length < 4) { showToast('请完成所有性格维度选择'); return false; }
      break;
    case 2:
      if (Object.keys(state.subjects).length === 0) { showToast('请至少选择一个学科'); return false; }
      break;
    case 3:
      if (state.learningStyles.length === 0) { showToast('请至少选择一种学习风格'); return false; }
      break;
    case 4:
      if (state.cities.length === 0) { showToast('请至少选择一个城市偏好'); return false; }
      if (state.degrees.length === 0) { showToast('请至少选择一个学位路径'); return false; }
      break;
    case 5:
      if (state.weightOrder.length === 0) { showToast('请至少选择一个维度权重'); return false; }
      if (!state.schoolWeight) { showToast('请选择一个学校偏好'); return false; }
      break;
  }
  return true;
}

/* ---------- Results ---------- */
function generateResults() {
  if (!validateStep(5)) return;
  const results = majorDB.map(m => ({ major: m, score: scoreMajor(m) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
  renderResults(results);
  goTo(6);
}

function scoreMajor(m) {
  let s = 0;
  let wSum = 0;

  const w = (id, def) => state.weights[id] ? def : 0;
  const wVal = (id) => state.weightOrder.includes(id) ? (state.weightOrder.length - state.weightOrder.indexOf(id)) : 0;

  // interest
  const intMatch = m.interests ? m.interests.filter(i => state.interests.includes(i)).length / Math.max(m.interests.length, 1) : 0;
  s += intMatch * 25 * (wVal('interest') || 1);

  // personality
  let pScore = 0;
  if (m.personalityMatch) {
    let pc = 0;
    for (let gi = 0; gi < 4; gi++) {
      const key = state.personality[gi];
      if (key && m.personalityMatch[key] !== undefined) { pc += m.personalityMatch[key]; }
    }
    pScore = pc / 4;
  }
  s += pScore * 25 * (wVal('personality') || 1);

  // subjects
  let subScore = 0;
  if (m.subjects) {
    const matched = m.subjects.filter(sb => state.subjects[sb] !== undefined);
    subScore = matched.length / Math.max(m.subjects.length, 1);
  }
  s += subScore * 25 * (wVal('subject') || 1);

  // learning style
  let lScore = 0;
  if (m.learningStyles) {
    const matched = m.learningStyles.filter(ls => state.learningStyles.includes(ls));
    lScore = matched.length / Math.max(m.learningStyles.length, 1);
  }
  s += lScore * 25 * (wVal('learning') || 1);

  // city fit
  let cScore = 0;
  if (m.cityFit && state.cities.length) {
    cScore = state.cities.reduce((sum, cid) => sum + (m.cityFit[cid] || 0), 0) / state.cities.length;
  }
  s += cScore * 20 * (wVal('city') || 1);

  // degree fit
  let dScore = 0;
  if (m.degreeFit && state.degrees.length) {
    dScore = state.degrees.reduce((sum, did) => sum + (m.degreeFit[did] || 0), 0) / state.degrees.length;
  }
  s += dScore * 20 * (wVal('degree') || 1);

  // career / salary from sliders
  const careerW = (state.sliders.career !== undefined ? state.sliders.career : 70) / 100;
  const salaryW = (state.sliders.salary !== undefined ? state.sliders.salary : 60) / 100;
  const market = m.scores ? (m.scores.market || 0) / 100 : 0;
  const salary = m.scores ? (m.scores.salary || 0) / 100 : 0;
  s += market * 15 * careerW;
  s += salary * 15 * salaryW;

  // school fit by score range
  const schools = getSchoolsForMajor(m);
  let schoolScore = 0;
  if (schools.length) {
    const top = schools[0];
    if (state.schoolWeight === 'rank') schoolScore = (560 - (top.rank || 300)) / 560;
    if (state.schoolWeight === 'major') schoolScore = (top.majorRank ? (50 - top.majorRank) / 50 : 0.5);
    if (state.schoolWeight === 'location') schoolScore = state.cities.some(c => (top.city || '').includes(cityLabelToName(c))) ? 1 : 0.5;
    schoolScore = Math.max(0, Math.min(1, schoolScore));
  }
  s += schoolScore * 15;

  return s;
}

function cityLabelToName(cid) {
  const map = { tier1: '北京', tier2: '杭州', tier3: '武汉', overseas: '海外', hometown: '', flexible: '' };
  return map[cid] || '';
}

function getSchoolsForMajor(major) {
  if (!major.universities) return [];
  const list = major.universities.map(u => {
    const s = schoolDB.find(x => x.name === u.name || (x.aliases && x.aliases.includes(u.name)));
    return s ? { ...s, ...u, majorRank: u.majorRank || 99 } : { name: u.name, ...u, rank: 999, majorRank: u.majorRank || 99 };
  });
  if (state.schoolWeight === 'rank') list.sort((a, b) => (a.rank || 999) - (b.rank || 999));
  if (state.schoolWeight === 'major') list.sort((a, b) => (a.majorRank || 99) - (b.majorRank || 99));
  if (state.schoolWeight === 'location') {
    const pref = state.cities.map(cityLabelToName).filter(Boolean);
    list.sort((a, b) => {
      const pa = pref.some(p => (a.city || '').includes(p)) ? 1 : 0;
      const pb = pref.some(p => (b.city || '').includes(p)) ? 1 : 0;
      return pb - pa;
    });
  }
  // filter by user score
  const minScore = state.totalScore ? state.totalScore - 60 : 0;
  return list.filter(s => !s.scoreRange || s.scoreRange.min <= state.totalScore + 20);
}

function renderResults(results) {
  const el = document.getElementById('resC');
  if (!el) return;
  el.innerHTML = results.map((r, i) => {
    const m = r.major;
    const schools = getSchoolsForMajor(m);
    const topSchool = schools[0] ? schools[0].name : '暂无匹配院校';
    return `
      <div class="res-card">
        <div class="rank">${i + 1}</div>
        <div class="body">
          <h3>${m.icon || ''} ${m.name}</h3>
          <div class="meta">${m.category || ''} · 推荐院校：${topSchool}</div>
          <div class="tags">${(m.tags || []).map(t => `<span class="tag-pill">${t}</span>`).join('')}</div>
          <div class="scores">
            <span>综合得分: <b>${r.score.toFixed(1)}</b></span>
            <span>市场需求: <b>${m.scores ? m.scores.market : '-'}</b></span>
            <span>薪资水平: <b>${m.scores ? m.scores.salary : '-'}</b></span>
          </div>
          <canvas id="radar-${i}" width="280" height="180" style="margin-top:10px;max-width:100%;"></canvas>
        </div>
      </div>
    `;
  }).join('');

  setTimeout(() => {
    results.forEach((r, i) => {
      const canvas = document.getElementById('radar-' + i);
      if (!canvas) return;
      const data = [
        r.major.scores ? r.major.scores.market : 50,
        r.major.scores ? r.major.scores.salary : 50,
        r.major.scores ? r.major.scores.growth : 50,
        r.major.scores ? r.major.scores.social : 50,
        Math.round(r.score)
      ];
      drawRadar(canvas, data);
    });
  }, 50);
}

function getLevelClass(v) {
  if (v >= 90) return 'level-a';
  if (v >= 80) return 'level-b';
  if (v >= 60) return 'level-c';
  return 'level-d';
}

function drawRadar(canvas, data) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  const cx = w / 2, cy = h / 2;
  const r = Math.min(cx, cy) - 20;
  const labels = ['市场', '薪资', '成长', '社会', '匹配'];
  const n = labels.length;

  ctx.clearRect(0, 0, w, h);
  // grid
  for (let j = 1; j <= 4; j++) {
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      const x = cx + Math.cos(angle) * (r * j / 4);
      const y = cy + Math.sin(angle) * (r * j / 4);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = '#e2e8f0';
    ctx.stroke();
  }
  // axes
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
    ctx.strokeStyle = '#e2e8f0';
    ctx.stroke();
    ctx.fillStyle = '#64748b';
    ctx.font = '12px sans-serif';
    const lx = cx + Math.cos(angle) * (r + 14);
    const ly = cy + Math.sin(angle) * (r + 14);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(labels[i], lx, ly);
  }
  // data
  ctx.beginPath();
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const v = Math.min(100, Math.max(0, data[i] || 0)) / 100;
    const x = cx + Math.cos(angle) * (r * v);
    const y = cy + Math.sin(angle) * (r * v);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(37,99,235,0.2)';
  ctx.fill();
  ctx.strokeStyle = '#2563eb';
  ctx.lineWidth = 2;
  ctx.stroke();
}

/* ---------- Reset ---------- */
function reset() {
  state.step = 0;
  state.interests = [];
  state.personality = {};
  state.subjects = {};
  state.learningStyles = [];
  state.cities = [];
  state.degrees = [];
  state.weights = {};
  state.weightOrder = [];
  state.schoolWeight = '';
  state.totalScore = 0;
  state.rankPct = 0;
  state.sliders = {};
  const ts = document.getElementById('tScore');
  const rp = document.getElementById('rPct');
  if (ts) ts.value = '';
  if (rp) rp.value = '';
  init();
}

/* ---------- Toast ---------- */
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2500);
}

/* ---------- Query Functions ---------- */
function switchQTab(t) {
  document.querySelectorAll('.qTab').forEach(b => b.classList.toggle('active', b.textContent.includes(tabLabel(t))));
  document.querySelectorAll('.qPanel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('q-' + t);
  if (panel) panel.classList.add('active');
}
function tabLabel(t) {
  const map = { school: '学校查询', major: '专业查询', detail: '学校详情', compare: '学校对比' };
  return map[t] || t;
}

function onSchoolSearch(q) {
  if (!q) { renderSchoolResults([]); return; }
  const list = schoolDB.filter(s => s.name.includes(q) || (s.aliases && s.aliases.some(a => a.includes(q))));
  renderSchoolResults(list);
}

function renderSchoolResults(list) {
  const el = document.getElementById('schRes');
  if (!el) return;
  if (!list.length) { el.innerHTML = '<p style="color:var(--text-light)">未找到匹配学校</p>'; return; }
  el.innerHTML = list.map(s => `
    <div class="school-card" onclick="showSchoolDetail('${s.name}')">
      <h4>${s.name} <span style="font-size:12px;color:var(--text-light)">${s.tier || ''}</span></h4>
      <p>${s.city || ''} · ${s.type || ''} · 排名 ${s.rank || '-'}</p>
    </div>
  `).join('');
}

function onMajorSearch(q) {
  if (!q) { renderMajorResults([]); return; }
  const list = majorDB.filter(m => m.name.includes(q));
  renderMajorResults(list);
}

function renderMajorResults(list) {
  const el = document.getElementById('majRes');
  if (!el) return;
  if (!list.length) { el.innerHTML = '<p style="color:var(--text-light)">未找到匹配专业</p>'; return; }
  el.innerHTML = list.map(m => `
    <div class="major-card" onclick="showMajorDetail('${m.name}')">
      <h4>${m.icon || ''} ${m.name}</h4>
      <p>${m.category || ''} · ${(m.tags || []).join('、')}</p>
    </div>
  `).join('');
}

function onDetailSearch(q) {
  if (!q) { document.getElementById('detRes').innerHTML = ''; return; }
  const list = schoolDB.filter(s => s.name.includes(q) || (s.aliases && s.aliases.some(a => a.includes(q))));
  const el = document.getElementById('detRes');
  if (!el) return;
  if (!list.length) { el.innerHTML = '<p style="color:var(--text-light)">未找到匹配学校</p>'; return; }
  el.innerHTML = list.map(s => `
    <div class="school-card" onclick="showSchoolDetail('${s.name}')">
      <h4>${s.name}</h4>
      <p>${s.city || ''} · ${s.type || ''}</p>
    </div>
  `).join('');
}

function showSchoolDetail(name) {
  const s = schoolDB.find(x => x.name === name || (x.aliases && x.aliases.includes(name)));
  const el = document.getElementById('detRes');
  if (!s || !el) return;
  el.innerHTML = `
    <div class="detail-view">
      <h3>${s.name} <span style="font-size:14px;color:var(--text-light)">${s.tier || ''}</span></h3>
      <div class="section"><h4>基本信息</h4><p>${s.city || ''} · ${s.province || ''} · ${s.type || ''} · 排名 ${s.rank || '-'}</p></div>
      <div class="section"><h4>简介</h4><p>${s.desc || ''}</p></div>
      <div class="section"><h4>优势</h4><p>${s.advantages || ''}</p></div>
      <div class="section"><h4>劣势</h4><p>${s.disadvantages || ''}</p></div>
      <div class="section"><h4>强势专业</h4><ul>${(s.strongMajors || []).map(m => `<li>${m.name} ${m.level || ''}</li>`).join('')}</ul></div>
      <div class="section"><h4>录取分数</h4><p>${s.scoreRange ? s.scoreRange.min + ' - ' + s.scoreRange.max : '暂无数据'}</p></div>
    </div>
  `;
}

function onCompSearch(side, q) {
  const list = q ? schoolDB.filter(s => s.name.includes(q) || (s.aliases && s.aliases.some(a => a.includes(q)))) : [];
  const el = document.getElementById('comp' + side + 'List');
  if (!el) return;
  el.innerHTML = list.slice(0, 5).map(s => `
    <div class="school-card" style="padding:8px 12px;margin-top:6px;" onclick="selectComp('${side}','${s.name}')">
      <div style="font-size:14px;font-weight:600;">${s.name}</div>
    </div>
  `).join('');
}

let compA = null, compB = null;
function selectComp(side, name) {
  const s = schoolDB.find(x => x.name === name || (x.aliases && x.aliases.includes(name)));
  if (!s) return;
  if (side === 'A') { compA = s; document.getElementById('compA').value = s.name; }
  else { compB = s; document.getElementById('compB').value = s.name; }
  document.getElementById('comp' + side + 'List').innerHTML = '';
}

function doCompare() {
  const el = document.getElementById('compRes');
  if (!compA || !compB) { showToast('请先选择两所学校'); return; }
  const rows = [
    ['名称', compA.name, compB.name],
    ['层次', compA.tier || '-', compB.tier || '-'],
    ['城市', compA.city || '-', compB.city || '-'],
    ['类型', compA.type || '-', compB.type || '-'],
    ['排名', compA.rank || '-', compB.rank || '-'],
    ['录取分', compA.scoreRange ? compA.scoreRange.min + '-' + compA.scoreRange.max : '-', compB.scoreRange ? compB.scoreRange.min + '-' + compB.scoreRange.max : '-'],
    ['优势', compA.advantages || '-', compB.advantages || '-'],
    ['劣势', compA.disadvantages || '-', compB.disadvantages || '-']
  ];
  el.innerHTML = `
    <div class="compare-wrap" style="margin-top:16px;">
      <table class="compare-table">
        ${rows.map(r => `<tr><th>${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}
      </table>
    </div>
  `;
}

function showMajorDetail(name) {
  const m = majorDB.find(x => x.name === name);
  const el = document.getElementById('majRes');
  if (!m || !el) return;
  el.innerHTML = `
    <div class="detail-view">
      <h3>${m.icon || ''} ${m.name}</h3>
      <div class="section"><h4>简介</h4><p>${m.desc || ''}</p></div>
      <div class="section"><h4>核心课程</h4><ul>${(m.courses || []).map(c => `<li>${c}</li>`).join('')}</ul></div>
      <div class="section"><h4>职业路径</h4><ul>${(m.careerPath || []).map(c => `<li>${c}</li>`).join('')}</ul></div>
      <div class="section"><h4>适合人群</h4><p>${m.suitableFor || ''}</p></div>
      <div class="section"><h4>相关岗位</h4><p>${(m.relatedJobs || []).join('、')}</p></div>
      <div class="section"><h4>标签</h4><p>${(m.tags || []).join('、')}</p></div>
    </div>
  `;
}

/* ---------- Homepage Functions ---------- */
function startAssessment() {
  document.getElementById('homepage').style.display = 'none';
  document.getElementById('sbar').style.display = 'block';
  document.getElementById('panels').style.display = 'block';
  reset();
  goTo(0);
}

function goToQuery(tab) {
  document.getElementById('homepage').style.display = 'none';
  document.getElementById('sbar').style.display = 'block';
  document.getElementById('panels').style.display = 'block';
  showPanel(7);
  state.step = 7;
  updateStepBar();
  switchQTab(tab);
}

function goHome() {
  document.getElementById('homepage').style.display = 'block';
  document.getElementById('sbar').style.display = 'none';
  document.getElementById('panels').style.display = 'none';
  for (let i = 0; i <= 7; i++) {
    const p = document.getElementById('p' + i);
    if (p) p.classList.remove('active');
  }
}

function initHomeStats() {
  const m = document.getElementById('stMajors');
  const s = document.getElementById('stSchools');
  if (m && typeof majorDB !== 'undefined') m.textContent = majorDB.length;
  if (s && typeof schoolDB !== 'undefined') s.textContent = schoolDB.length;
}

/* ---------- Quick Recommend ---------- */
function startQuickRecommend() {
  document.getElementById('quickModal').classList.add('show');
}

function closeQuickModal() {
  document.getElementById('quickModal').classList.remove('show');
}

function doQuickRecommend() {
  const score = parseFloat(document.getElementById('qrScore').value) || 0;
  const city = document.getElementById('qrCity').value;
  const tier = document.getElementById('qrTier').value;
  if (!score) { showToast('请输入高考总分'); return; }

  // simple matching by score range
  let matchedSchools = schoolDB.filter(s => {
    if (!s.scoreRange) return true;
    return s.scoreRange.min <= score + 20 && s.scoreRange.max >= score - 40;
  });
  if (city) matchedSchools = matchedSchools.filter(s => s.province === city || s.city === city);
  if (tier) matchedSchools = matchedSchools.filter(s => s.tier === tier);

  closeQuickModal();
  goToQuery('school');
  const el = document.getElementById('schRes');
  if (el) {
    if (!matchedSchools.length) {
      el.innerHTML = '<p style="color:var(--text-light)">根据你的分数和条件未找到匹配学校，建议放宽条件再试。</p>';
      return;
    }
    el.innerHTML = `<p style="margin-bottom:10px;color:var(--text-light)">根据分数 ${score} 找到 ${matchedSchools.length} 所匹配学校：</p>` +
      matchedSchools.slice(0, 20).map(s => `
        <div class="school-card" onclick="showSchoolDetail('${s.name}')">
          <h4>${s.name} <span style="font-size:12px;color:var(--text-light)">${s.tier || ''}</span></h4>
          <p>${s.city || ''} · ${s.type || ''} · 录取分 ${s.scoreRange ? s.scoreRange.min + '-' + s.scoreRange.max : '未知'}</p>
        </div>
      `).join('');
  }
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  init();
  initHomeStats();
});

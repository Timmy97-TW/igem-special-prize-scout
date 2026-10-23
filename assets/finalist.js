/* finalist.html: renders window.SCOUT_FINALIST (data/finalist.js). Needs assets/site.js first. */
window.Finalist=(function(){
const {$,esc,bi,list,paras}=window.Scout;
const A=[
  ['a1','Impressive','令人印象深刻','How impressive is this project?','這個專題有多令人印象深刻？'],
  ['a2','Worked','成功','Did the project work?','專題是否成功？'],
  ['a3','Impact','影響','Is the project likely to have an impact?','專題是否可能產生影響？'],
  ['a4','Engineering','工程','How well were engineering principles used?','工程原則運用得多好？'],
  ['a5','Human practices','人文考量','How thoughtful and thorough was the human practices work?','人文考量工作有多用心、多完整？'],
  ['a6','Own work','自己的工作','How much of the work did the team do themselves?','有多少工作是隊伍自己完成的？'],
  ['a7','SynBio & standards','合成生物與標準','Is the project grounded in synthetic biology and standard parts?','專題是否立基於合成生物學與標準元件？'],
  ['a8','Documentation','文件','How well is the project documented?','專題的文件記錄得多好？']
];
const WK=[
  ['w1','Communicates goals','傳達目標','Does the wiki clearly communicate the project goals?','wiki 是否清楚傳達專題目標？'],
  ['w2','Evidence','證據','Does the wiki show evidence for the results claimed?','wiki 是否為宣稱的成果提供證據？'],
  ['w3','Design/navigation','設計/導覽','Is the wiki well designed and easy to navigate?','wiki 設計是否良好、容易瀏覽？'],
  ['w4','Record for future teams','留給後人的紀錄','Is the wiki a useful record for future teams?','wiki 是否是未來隊伍可用的紀錄？'],
  ['w5','Citations','引用','Are sources and contributions properly cited?','來源與貢獻是否妥善引用？']
];
const J=['J1','J2','J3'];
const f2=v=>v==null?'–':Number(v).toFixed(2);
const sg=v=>v==null?'–':(v>0?'+':'')+Number(v).toFixed(2);

let DROPPED=[];
const isDrop=k=>DROPPED.indexOf(k)>-1;
function abars(defs,obj){return `<div class="abars">${defs.map(d=>{const v=obj&&obj[d[0]];return `<div class="ab${isDrop(d[0])?' off':''}" title="${isDrop(d[0])?'Not counted / 未計入 · ':''}${esc(d[3])}"><span class="l">${bi(d[1],d[2])}</span><span class="tr"><span class="fl" style="width:${(v||0)/5*100}%"></span></span><span class="v">${v??'–'}</span></div>`}).join('')}</div>`}

function render(){
  const F=window.SCOUT_FINALIST;
  if(!F){$('fverdict').innerHTML=bi('No finalist data loaded (data/finalist.js).','尚未載入決賽資料（data/finalist.js）。');return}
  const R=F.ranking||[], g=F.gems||{}, us=R.find(r=>r.ours);
  DROPPED=(F.scoring&&F.scoring.dropped)||[];
  $('fsnap').textContent=F.snapshot;$('fsnap2').textContent=F.snapshot;
  if(F.placeholder)$('fbanner').innerHTML=`<div class="banner">${bi('Placeholder data. The schema is final; every number and sentence on this page will be replaced by the real finalist read.','佔位資料。資料格式已定案；本頁所有數字與文字都會由正式的決賽評估取代。')}</div>`;

  $('fverdict').innerHTML=`<div class="label fin">${bi('Verdict','結論')}</div>
    <h2>${bi(esc(F.lede.en),esc(F.lede.zh))}</h2>
    <div class="vp">${paras(F.verdict)}</div>`;

  $('callout').innerHTML=`<div class="big">#${g.rank}<small> / ${g.of}</small></div>
    <div><h3>GEMS-Taiwan</h3>
    ${us?`<p>${bi(esc(us.one_line.en),esc(us.one_line.zh))}</p>`:''}
    <div class="kv"><span>${bi('Combined','綜合')} <b>${f2(g.combined)}</b></span><span>${bi('Gap to 2nd','與第 2 名差距')} <b>${sg(g.gap_to_second)}</b></span>
    ${us?`<span>${bi('Project','專題')} <b>${f2(us.project_mean)}</b></span><span>${bi('Wiki','Wiki')} <b>${f2(us.wiki_mean)}</b></span><span>${bi('Judge ranks','評審排名')} <b>${J.map(j=>us.judges[j]?us.judges[j].rank:'–').join(' · ')}</b></span>`:''}</div>
    ${us?`<a class="more" href="#rank-${esc(us.slug)}">${bi('Open our row','查看我們的那一列')} →</a>`:''}</div>`;

  $('rsub').innerHTML=bi(`${R.length} teams passed both gates and were read by all three judges. Combined = 0.75 × project mean + 0.25 × wiki mean, 0–5. The dashed line marks the two finalist slots.`,`${R.length} 支隊伍通過兩道關卡，由三位評審全部讀過。綜合分數 = 0.75 × 專題平均 + 0.25 × wiki 平均，0–5 分。虛線標出兩個決賽名額。`);
  let h=`<div class="row head"><span>#</span><span>${bi('Team','隊伍')}</span>${J.map(j=>`<span class="num jc" title="${esc((F.judges.find(x=>x.id===j)||{lens:{en:''}}).lens.en)}">${j}</span>`).join('')}<span style="text-align:right">${bi('Panel','總評')}</span><span class="spread">${bi('Spread','分歧')}</span><span></span></div>`;
  R.forEach((r,i)=>{
    h+=`<details class="row ${r.ours?'ours':''}" id="rank-${esc(r.slug)}"><summary><span class="rank">${r.rank}</span>
      <span class="team"><a href="${esc(r.url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()" style="color:inherit">${esc(r.team)}</a>${r.ours?'<span class="pill">'+bi('US','我們')+'</span>':''}<span class="meta">${esc(r.village)} · ${esc(r.country)}</span></span>
      ${J.map(j=>`<span class="num jc">${f2(r.judges[j]&&r.judges[j].combined)}</span>`).join('')}
      <span class="total">${f2(r.combined)}</span><span class="spread ${r.spread>=0.4?'hi':''}">${f2(r.spread)}</span><span class="chev">›</span></summary>
      <div class="body">
        <div class="full oneline">${bi(esc(r.one_line.en),esc(r.one_line.zh))}</div>
        <div><h4>${bi('Project aspects','專題面向')}</h4>${abars(A,r.project)}<div class="means">${bi('Project mean','專題平均')} <b>${f2(r.project_mean)}</b></div></div>
        <div><h4>${bi('Wiki','Wiki')}</h4>${abars(WK,r.wiki)}<div class="means">${bi('Wiki mean','Wiki 平均')} <b>${f2(r.wiki_mean)}</b></div>
          <h4 style="margin-top:16px">${bi('Judges','評審')}</h4><div class="jt">${J.map(j=>{const x=r.judges[j]||{};return `<div><b>${j}</b> · ${bi('project','專題')} ${f2(x.project)} · wiki ${f2(x.wiki)} · <b>${f2(x.combined)}</b> (#${x.rank??'–'})</div>`}).join('')}</div></div>
        <div><h4>${bi('Strengths','優點')}</h4>${list(r.strengths)}</div>
        <div><h4>${bi('Weaknesses','弱點')}</h4>${list(r.weaknesses)}</div>
        ${r.red_flags&&r.red_flags.length?`<div class="full"><h4>${bi('Red flags','警訊')}</h4>${list(r.red_flags)}</div>`:''}
        <div class="full"><a href="${esc(r.url||'#')}" target="_blank" rel="noopener">${bi('Open the wiki','開啟 wiki')} ↗</a></div>
      </div></details>`;
    if(r.rank===2&&i<R.length-1)h+=`<div class="cutline">${bi('2 finalist slots','決賽 2 個名額')}</div>`;
  });
  $('fboard').innerHTML=h;

  const SH={a5:['HP','人文'],a6:['Own','自製'],a7:['SynBio','合生'],a8:['Docs','文件'],w1:['Goals','目標'],w3:['Design','設計'],w4:['Record','紀錄']};
  const th=(d,cls)=>{const l=SH[d[0]]||[d[1],d[2]];return `<th class="${cls||''}${isDrop(d[0])?' off':''}" title="${esc(d[1])}: ${esc(d[3])} / ${esc(d[2])}：${esc(d[4])}">${bi(l[0],l[1])}</th>`};
  let m=`<thead><tr><th class="gl"></th><th class="gl grp" colspan="8">${bi('Project (aspects 1–8)','專題（面向 1–8）')}</th><th class="gl grp" colspan="5">Wiki</th><th class="gl grp"></th></tr><tr><th>${bi('Team','隊伍')}</th>${A.map((d,i)=>th(d,i===0?'grp':'')).join('')}${WK.map((d,i)=>th(d,i===0?'grp':'')).join('')}<th class="grp">${bi('Combined','綜合')}</th></tr></thead><tbody>`;
  R.forEach(r=>{m+=`<tr class="${r.ours?'us':''}"><td>${r.rank}. ${esc(r.team)}</td>${A.map((d,i)=>`<td class="${i===0?'grp':''}${isDrop(d[0])?' off':''}">${r.project[d[0]]??'–'}</td>`).join('')}${WK.map((d,i)=>`<td class="${i===0?'grp':''}${isDrop(d[0])?' off':''}">${r.wiki[d[0]]??'–'}</td>`).join('')}<td class="grp"><b>${f2(r.combined)}</b></td></tr>`});
  $('matrix').innerHTML=m+'</tbody>';

  const SCG=F.scoring;
  if(SCG&&$('scorenote'))$('scorenote').innerHTML=`<div class="banner note2"><p><b>${bi('Not counted in the combined score','未計入綜合分數')}:</b> ${SCG.dropped.map(k=>{const d=A.concat(WK).find(x=>x[0]===k);return d?bi(d[1],d[2])+' ('+k+')':k}).join(', ')}${SCG.excluded.length?' · '+bi('Excluded from the ranking','排除於排名外')+': '+SCG.excluded.map(x=>esc(x)).join(', '):''}</p><p>${bi(esc(SCG.note.en),esc(SCG.note.zh))}</p><p class="cav">${bi(esc(SCG.caveat.en),esc(SCG.caveat.zh))}</p></div>`;

  $('sens').innerHTML=(F.sensitivity||[]).map(s=>`<div class="card"><h3>${bi(esc(s.label.en),esc(s.label.zh))}</h3><ol>${s.top.map((t,i)=>`<li class="${us&&t===us.team?'us':''}">${esc(t)}</li>`).join('')}</ol>${us&&s.top.indexOf(us.team)>-1&&s.top.indexOf(us.team)<2?`<span class="tag go">${bi('We make the final','我們進入決賽')}</span>`:`<span class="tag no">${bi('We miss the final','我們未進決賽')}</span>`}</div>`).join('');

  $('weights').innerHTML=bi(esc(F.weights.en),esc(F.weights.zh));
  $('steps').innerHTML=(F.method||[]).map(s=>`<li>${bi(esc(s.en),esc(s.zh))}</li>`).join('');
  $('gates').innerHTML=(F.gates||[]).map(x=>`<div class="card"><h3>${bi('Gate','關卡')} ${esc(x.id)} · ${bi(esc(x.name.en),esc(x.name.zh))}</h3><p>${bi(esc(x.rule.en),esc(x.rule.zh))}</p><div class="nums">${bi('Passed','通過')} <b>${x.passed}</b> · ${bi('cut','淘汰')} <b>${x.cut}</b></div></div>`).join('');
  $('judges').innerHTML=(F.judges||[]).map(x=>`<div class="card"><h3>${esc(x.id)} · ${bi(esc(x.lens.en),esc(x.lens.zh))}</h3><p class="memo">${bi(esc(x.memo.en),esc(x.memo.zh))}</p></div>`).join('');

  field(F);
}

function field(F){
  const rows=F.field||[], gl={A:['Gate A','關卡 A'],B:['Gate B','關卡 B'],deep:['Deep','深度']};
  const cut={A:['cut at A','A 淘汰'],B:['cut at B','B 淘汰'],deep:['deep read','深度閱讀']};
  $('fieldsub').innerHTML=bi(`Every high-school team (${rows.length} listed), with the last gate each one reached. Screen is the Gate B screening score, 0–5.`,`所有高中組隊伍（列出 ${rows.length} 隊），以及各隊最後到達的關卡。篩選分數為關卡 B 的 0–5 分。`);
  let gate='';
  const q=$('q');
  function draw(){
    const s=(q.value||'').trim().toLowerCase();
    const vis=rows.filter(r=>(!gate||r.gate===gate)&&(!s||[r.team,r.village,r.country,r.slug,r.note].join(' ').toLowerCase().includes(s)));
    let h=`<thead><tr><th>${bi('Team','隊伍')}</th><th>${bi('Village','領域')}</th><th>${bi('Country','國家/地區')}</th><th>${bi('Reached','到達')}</th><th style="text-align:right">${bi('Core words','核心字數')}</th><th style="text-align:right">${bi('Screen','篩選')}</th><th>${bi('Note','備註')}</th></tr></thead><tbody>`;
    h+=vis.map(r=>`<tr class="${r.slug==='gems-taiwan'?'us':''}"><td class="tm"><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.team)}</a></td><td>${esc(r.village)}</td><td>${esc(r.country)}</td><td><span class="badge g-${esc(r.gate)}" title="${esc(cut[r.gate]?cut[r.gate][0]:'')}">${bi(...(gl[r.gate]||[r.gate,r.gate]))}</span></td><td class="n">${r.core_words!=null?Number(r.core_words).toLocaleString('en-US'):'–'}</td><td class="n">${r.screen!=null?Number(r.screen).toFixed(1):'–'}</td><td class="note">${esc(r.note||'')}</td></tr>`).join('');
    if(!vis.length)h+=`<tr><td colspan="7" style="color:var(--ink3)">${bi('No team matches.','沒有符合的隊伍。')}</td></tr>`;
    $('fieldt').innerHTML=h+'</tbody>';
    $('cnt').innerHTML=bi(`${vis.length} of ${rows.length}`,`${rows.length} 隊中的 ${vis.length} 隊`);
  }
  q.addEventListener('input',draw);
  document.querySelectorAll('#gatef button').forEach(b=>b.addEventListener('click',()=>{gate=b.dataset.g;document.querySelectorAll('#gatef button').forEach(x=>x.setAttribute('aria-pressed',x===b));draw()}));
  draw();
}
return {render};
})();

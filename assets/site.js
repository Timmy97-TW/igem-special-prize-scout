/* Shared script for the five scout pages: helpers, language toggle, prize boards, overview. */
(function(){
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function bi(en,zh){return `<span class="en">${en}</span><span class="zh">${zh??en}</span>`}
function dots(v){let h='<div class="dots">';for(let i=1;i<=5;i++){h+=`<span class="dot ${v>=i?'f':(v>=i-.5?'h':'')}"></span>`}return h+`<span class="v">${v}</span></div>`}
function list(a){return a&&a.length?'<ul>'+a.map(x=>`<li>${esc(x)}</li>`).join('')+'</ul>':''}
const P={
  measurement:{max:20,H:[['Repeatable','可重複'],['Protocol','流程'],['Useful','實用'],['Controls','對照/校正']],name:['Measurement','量測獎']},
  hardware:{max:20,H:[['Need','需求'],['User tests','使用者測試'],['Works','功能'],['Docs','文件']],name:['Hardware','硬體獎']},
  ihp:{max:30,H:[['Throughout','貫穿'],['Thoughtful','用心'],['Responsible','負責'],['Stakeholders','利害關係人'],['Docs','文件'],['Inspiring','啟發']],name:['Integrated HP','整合人文']}
};
const DATA={measurement:()=>window.SCOUT_MEASUREMENT,hardware:()=>window.SCOUT_HARDWARE,ihp:()=>window.SCOUT_IHP};

/* ---- language: ?lang= wins, then localStorage, then English ---- */
let storageOK=true;
function setLang(l,save){
  if(l!=='zh')l='en';
  document.body.dataset.lang=l;document.documentElement.lang=l==='zh'?'zh-Hant':'en';
  document.querySelectorAll('nav .seg button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.set===l));
  if(save!==false){try{localStorage.setItem('lang',l)}catch(e){storageOK=false}}
  // without storage (some file:// setups), carry the choice in the tab links instead
  if(!storageOK)document.querySelectorAll('nav .tabs a').forEach(a=>{const u=a.getAttribute('href').split('?')[0];a.setAttribute('href',l==='zh'?u+'?lang=zh':u)});
}
function initLang(){
  document.querySelectorAll('nav .seg button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.set)));
  let l=null;
  try{l=new URLSearchParams(location.search).get('lang')}catch(e){}
  if(l==='zh'||l==='en'){setLang(l);return}
  try{l=localStorage.getItem('lang')}catch(e){storageOK=false}
  setLang(l||'en',false);
}

/* ---- one prize board, exactly as the single page drew it ---- */
function board(key){
  const rows=DATA[key](), {H,max}=P[key], n=H.length, el=$('board-'+key);
  el.style.setProperty('--n',n);
  const top=rows.slice(0,10); const us=rows.find(r=>r.ours);
  if(us && us.rank>10) top.push(us);
  let h=`<div class="row head"><span>#</span><span>${bi('Team','隊伍')}</span>${H.map(x=>`<span class="c">${bi(x[0],x[1])}</span>`).join('')}<span style="text-align:right">${bi('Total','總分')}</span><span></span></div>`;
  for(const r of top){
    const C=H.map((_,i)=>r['c'+(i+1)]), J=H.map((_,i)=>r['j'+(i+1)]);
    const chg=r.change_note_en?`<div class="full"><h4>${bi('Since 21 October','10/21 以來的變化')}</h4><p class="j">${r.prev_total!=null?`<b>${r.prev_total} → ${r.total}</b> · `:''}${bi(esc(r.change_note_en),esc(r.change_note_zh||r.change_note_en))}</p></div>`:'';
    h+=`<details class="row ${r.ours?'ours':''}" id="${esc(key+'-'+r.slug)}"><summary><span class="rank">${r.rank}</span>
      <span class="team">${esc(r.team)}${r.ours?'<span class="pill">'+bi('US','我們')+'</span>':''}<span class="meta">${esc(r.type||'')}</span></span>
      ${C.map(dots).join('')}
      <span class="total">${r.total}<small>/${max}</small></span><span class="chev">›</span></summary>
      <div class="body">
        <div class="full oneline">${bi(esc(r.one_line),esc(r.one_line_zh))}</div>
        <div><h4>${bi('Strengths','優點')}</h4>${list(r.strengths)}</div>
        <div><h4>${bi('Weaknesses','弱點')}</h4>${list(r.weaknesses)}</div>
        <div class="full"><h4>${bi('Per-criterion notes','各項評語')}</h4>${H.map((x,i)=>`<p class="j"><b>${bi(x[0],x[1])} ${C[i]}</b> · ${esc(J[i])}</p>`).join('')}</div>
        ${chg}
        ${r.red_flags&&r.red_flags.length?`<div class="full"><h4>${bi('Red flags','警訊')}</h4>${list(r.red_flags)}</div>`:''}
        <div class="full"><a href="${esc(r.url||'#')}" target="_blank" rel="noopener">${bi('Open the source page','開啟原始頁面')} ↗</a></div>
      </div></details>`;
  }
  el.innerHTML=h;
  let c=`<div style="font-size:13px;color:var(--ink2);font-weight:600;margin-bottom:10px">${bi('All scored entries (top 15)','所有評分隊伍（前 15）')}</div>`;
  rows.slice(0,15).forEach(r=>{c+=`<div class="bar ${r.ours?'us':''}"><span class="nm">${r.rank}. ${esc(r.team)}</span><span class="tr"><span class="fl" style="display:block;width:${r.total/max*100}%"></span></span><span class="vv">${r.total}</span></div>`});
  $('chart-'+key).innerHTML=c;
}

function snap(){const C=window.SCOUT_CONCL;if(!C)return;['snap','snap2'].forEach(i=>{if($(i))$(i).textContent=C.snapshot})}

/* ---- after render: honour #hash (scroll, and open a board row if it names one) ---- */
function landOnHash(){
  if(!location.hash)return;
  let t=null;try{t=document.querySelector(decodeURIComponent(location.hash))}catch(e){}
  if(!t)return;
  if(t.tagName==='DETAILS'){t.open=true;t.classList.add('hit')}
  requestAnimationFrame(()=>t.scrollIntoView());
}

function prizePage(key){
  const C=window.SCOUT_CONCL;
  snap();
  if(C&&C.sub&&C.sub[key]){$('sub-'+key+'-en').innerHTML=C.sub[key].en;$('sub-'+key+'-zh').innerHTML=C.sub[key].zh}
  board(key);
  const rows=DATA[key](), us=rows.find(r=>r.ours);
  if($('count')&&us)$('count').innerHTML=bi(`Our rank: <b>#${us.rank}</b> of ${rows.length} · ${us.total} / ${P[key].max}`,`我們的排名：<b>第 ${us.rank} 名</b>，共 ${rows.length} 隊 · ${us.total} / ${P[key].max}`);
}

/* ---- overview (index.html) ---- */
function finalistCard(){
  const F=window.SCOUT_FINALIST, el=$('finalist-card');
  if(!el)return;
  if(!F){el.style.display='none';return}
  const g=F.gems||{}, top=(F.ranking||[]).slice(0,5);
  const gap=g.gap_to_second==null?'':(g.gap_to_second>0?'+':'')+g.gap_to_second;
  el.innerHTML=`${F.placeholder?`<div class="banner" style="margin:0 0 18px">${bi('Placeholder data: the finalist judging has not been loaded yet.','佔位資料：決賽入圍評分尚未載入。')}</div>`:''}
    <div class="label fin">${bi('Finalist outlook','決賽入圍展望')}</div>
    <h2>${bi(esc(F.lede.en),esc(F.lede.zh))}</h2>
    <div class="stats">
      <div class="stat"><div class="t">${bi('GEMS-Taiwan · finalist rank','GEMS-Taiwan · 決賽排名')}</div><div class="n">#${g.rank}<small> / ${g.of}</small></div><div class="s">${g.gap_to_second===0?bi('tied · 2 finalist slots','並列 · 決賽 2 個名額'):bi('2 finalist slots','決賽 2 個名額')}</div></div>
      <div class="stat"><div class="t">${bi('Combined score','綜合分數')}</div><div class="n">${g.combined}<small> / 5</small></div><div class="s">${bi('75% project · 25% wiki','75% 專題 · 25% wiki')}</div></div>
      <div class="stat"><div class="t">${bi('Gap to 2nd','與第 2 名差距')}</div><div class="n">${gap}</div><div class="s">${bi('combined points','綜合分數')}</div></div>
    </div>
    <ol class="top5">${top.map(r=>`<li class="${r.ours?'us':''} ${r.rank===2?'cut':''}"><span class="rk">${r.rank}</span><span class="tm">${esc(r.team)}${r.ours?'<span class="pill">'+bi('US','我們')+'</span>':''}</span><span class="sc">${r.combined}</span></li>`).join('')}</ol>
    <a class="more" href="finalist.html">${bi('Full finalist ranking','完整決賽排名')} →</a>`;
}
function paras(o){if(!o)return'';const s=x=>String(x||'').split(/\n\n+/);const e=s(o.en),z=s(o.zh);return bi(e.map(p=>`<p>${esc(p)}</p>`).join(''),z.map(p=>`<p>${esc(p)}</p>`).join(''))}

function overview(){
  // old single-page links (index.html#hardware etc.) now live on their own tab
  const old={'#measurement':'measurement.html','#hardware':'hardware.html','#ihp':'ihp.html','#criteria':'measurement.html#criteria'};
  if(old[location.hash]){location.replace(old[location.hash]+location.search);return}
  const C=window.SCOUT_CONCL;
  snap();
  for(const k of ['lede','rec','recp','vsub']){$(k+'-en').innerHTML=C[k].en;$(k+'-zh').innerHTML=C[k].zh}
  $('stats').innerHTML=Object.keys(P).map(k=>{
    const rows=DATA[k](), us=rows.find(r=>r.ours), best=rows.find(r=>!r.ours);
    const cmp=us.rank===1?[`next best ${best.total}`,`次高 ${best.total}`]:[`leader ${rows[0].total}`,`第一名 ${rows[0].total}`];
    return `<a class="stat" href="${k}.html"><div class="t">${bi(P[k].name[0]+' · our rank',P[k].name[1]+' · 我們的排名')}</div><div class="n">#${us.rank}<small> / ${rows.length}</small></div><div class="s">${bi(`${us.total} / ${P[k].max} · ${cmp[0]}`,`${us.total} / ${P[k].max} · ${cmp[1]}`)}</div></a>`}).join('');
  const keys=Object.keys(P);
  $('compare').innerHTML=C.compare.map((c,i)=>`<a class="card" href="${keys[i]}.html"><h3>${bi(c.title.en,c.title.zh)}</h3><span class="tag ${c.go?'go':'no'}">${bi(c.tag.en,c.tag.zh)}</span><div class="big">${c.score}<small>/${c.max} · #${c.rank}</small></div><ul>${c.points.map(p=>`<li>${bi(p.en,p.zh)}</li>`).join('')}</ul><span class="more" style="color:var(--accent)">${bi('Open the board','查看排行')} →</span></a>`).join('');
  $('todo').innerHTML=C.todo.map(t=>`<li>${bi('<b>'+t.en[0]+'</b>'+t.en[1],'<b>'+t.zh[0]+'</b>'+t.zh[1])}</li>`).join('');
  $('method').innerHTML=C.method.map(p=>`<p>${bi(p.en,p.zh)}</p>`).join('');
  finalistCard();
}

window.Scout={$,esc,bi,dots,list,paras,P,initLang,landOnHash,
  prize(key){initLang();prizePage(key);landOnHash()},
  overview(){initLang();overview();landOnHash()},
  page(fn){initLang();fn();landOnHash()}
};
})();

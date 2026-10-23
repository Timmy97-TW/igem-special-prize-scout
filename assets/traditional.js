/* traditional.html: renders window.SCOUT_TRADITIONAL (data/traditional.js). Needs assets/site.js first. */
window.Traditional=(function(){
const {$,esc,bi,list,paras}=window.Scout;
const KS=['a1','a2','a3','a4','a5','a6','a7','a8','w1','w2','w3','w4','w5'];
const J=['J1','J2','J3'];
const f2=v=>v==null?'–':Number(v).toFixed(2);
const sg=v=>v==null?'–':(v>0?'+':'')+Number(v).toFixed(3);
let L={};

function lb(k){const x=L[k]||{en:k,zh:k};return bi(esc(x.en),esc(x.zh))}

function bars(t){
  return `<div class="abars">${KS.map(k=>{const v=t.aspects[k];return `<div class="ab"><span class="l">${lb(k)}</span><span class="tr"><span class="fl${k[0]==='w'?' wk':''}" style="width:${(v||0)/5*100}%"></span></span><span class="v">${v??'–'}</span></div>`}).join('')}</div>`;
}

function gapTable(t,refs){
  const rows=KS.map(k=>{
    const cells=refs.map(r=>{
      const d=(t.gap[r.slug]||[]).find(x=>x.k===k);
      const v=d?d.d:null, cls=v==null?'':(v<-0.02?'neg':(v>0.02?'pos':''));
      return `<td class="n ${cls}"><span class="dd">${sg(v)}</span><span class="sc">${refs.length?r.aspects[k]:''}</span></td>`;
    }).join('');
    return `<tr><th>${lb(k)}</th><td class="n me">${t.aspects[k]}</td>${cells}</tr>`;
  }).join('');
  const tot=refs.map(r=>`<td class="n ${t.combined<r.combined?'neg':'pos'}"><span class="dd">${sg(+(t.combined-r.combined).toFixed(3))}</span><span class="sc">${f2(r.combined)}</span></td>`).join('');
  return `<div class="tscroll"><table class="gaps">
    <thead><tr><th>${bi('Aspect','面向')}</th><th class="n me">${esc(t.team)}</th>${refs.map(r=>`<th class="n"><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.team)}</a><small>#${r.rank}</small></th>`).join('')}</tr></thead>
    <tbody>${rows}</tbody>
    <tfoot><tr><th>${bi('Combined','綜合分數')}</th><td class="n me">${f2(t.combined)}</td>${tot}</tr></tfoot></table></div>
    <p class="note">${bi('Each cell: the weighted points this team is ahead (+) or behind (−) on that aspect, with the other team’s raw score beneath. Project aspects are weighted 0.75/8 each, wiki aspects 0.25/5.','每格：本隊在該面向領先（+）或落後（−）的加權分數，下方小字是對方的原始分數。專題各面向權重為 0.75/8，wiki 各面向為 0.25/5。')}</p>`;
}

function teamSection(t,refs){
  return `<section class="tsec" id="t-${esc(t.slug)}"><div class="wrap">
    <div class="thead">
      <div class="rk">#${t.rank}</div>
      <div>
        <h2><a href="${esc(t.url)}" target="_blank" rel="noopener">${esc(t.team)}</a></h2>
        <p class="meta">${esc(t.village)} · ${esc(t.country)} · ${bi('combined','綜合')} <b>${f2(t.combined)}</b> · ${bi('project','專題')} ${f2(t.project_mean)} · wiki ${f2(t.wiki_mean)} · ${bi('screening','篩選')} ${f2(t.screen)}</p>
      </div>
    </div>
    <p class="lead">${bi(esc(t.short.en),esc(t.short.zh))}</p>
    <p class="built">${bi(esc(t.built.en),esc(t.built.zh))}</p>
    <h3 class="h3s">${bi('Why it is not in the top ten','為什麼沒有進前十')}</h3>
    <div class="why">${t.why.map(w=>`<p>${bi(esc(w.en),esc(w.zh))}</p>`).join('')}</div>
    <h3 class="h3s">${bi('Aspect by aspect against the teams above it','與前面隊伍的逐項比較')}</h3>
    ${gapTable(t,refs)}
    <div class="cols">
      <div><h3 class="h3s">${bi('Its own scores','本隊各面向分數')}</h3>${bars(t)}</div>
      <div>
        <h3 class="h3s">${bi('What would move it','怎樣才會往上移')}</h3>
        <ol class="whatif">${t.what_if.map(w=>`<li>${bi(esc(w.en),esc(w.zh))}</li>`).join('')}</ol>
        <h3 class="h3s">${bi('How each judge summed it up','三位評審各自的總結')}</h3>
        <div class="jl">${t.judge_lines.map(j=>`<div><b>${esc(j.judge)}</b> <span>${esc(j.one_line)}</span></div>`).join('')}</div>
        <div class="jr">${J.map(j=>t.judges[j]?`<span>${j} ${bi('rank','排名')} #${t.judges[j].rank} · ${f2(t.judges[j].combined)}</span>`:'').join('')}</div>
      </div>
    </div>
    <div class="callout vd"><div><h3>${bi('Verdict','結論')}</h3><p>${bi(esc(t.verdict.en),esc(t.verdict.zh))}</p></div></div>
  </div></section>`;
}

function render(){
  const D=window.SCOUT_TRADITIONAL;
  if(!D){$('tverdict').innerHTML=bi('No data loaded (data/traditional.js).','尚未載入資料（data/traditional.js）。');return}
  L=D.labels||{};
  $('tsnap').textContent=D.snapshot;$('tsnap2').textContent=D.snapshot;
  $('tverdict').innerHTML=`<div class="label fin">${bi('Short answer','簡短回答')}</div>
    <h2>${bi(esc(D.lede.en),esc(D.lede.zh))}</h2>
    <p class="vp">${bi(esc(D.intro.en),esc(D.intro.zh))}</p>`;
  $('tsections').innerHTML=D.teams.map(t=>teamSection(t,D.refs)).join('');
  $('tclosing').innerHTML=paras(D.closing);
}
return {render};
})();

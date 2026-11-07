"use strict";
/* ===== DEFAULTS. Also editable in the Edit tab. [id,start,end,name,purpose,weight,category] ===== */
const SCHEDULE=[ // Monday-Thursday
["s1","05:15","05:45","Wake up, Wudu & Fajr","Start the day bowing to Allah. No phone checking.",2,"Deen"],
["s2","05:45","06:15","Quran & Coffee / Pre-workout","Spiritual detox. 10-15 min Quran minimum.",2,"Deen"],
["s3","06:15","08:15","RBI Grade B Deep Study","Sharpest time. Phone in another room. Core concepts.",3,"Career"],
["s4","08:15","09:30","Newspaper, Breakfast & Grooming","The Hindu/Mint. High-protein breakfast. Dress like a gentleman.",1,"Body"],
["s5","09:30","13:30","WFH Deep Work (first half)","Only office work. No social media.",2,"Career"],
["s6","13:30","14:30","Lunch & Dhuhr","Halal, clean diet. Pray Dhuhr.",1,"Deen"],
["s7","14:30","17:30","WFH (second half) & Asr","Finish remaining work. Pray Asr.",2,"Career"],
["s8","17:30","18:30","RBI Current Affairs","PIB summaries or mock quizzes.",2,"Career"],
["s9","18:30","19:00","Maghrib & Pre-workout","Pray, then fruit or pre-workout meal.",1,"Deen"],
["s10","19:00","20:30","Gym / Intense Workout","Exhaustion kills cravings.",3,"Body"],
["s11","20:30","21:15","Dinner, Shower & Isha","Family and deen.",1,"Deen"],
["s12","21:15","22:00","GF Time & Quality Talk","Calm, mature talk. No toxic arguments.",1,"Relationship"],
["s13","22:00","22:30","Reading, Journaling & Tracker","Finance/self-help book. Plan tomorrow.",2,"Mind"],
["s14","22:30","05:15","Sleep (7 hours)","Phone screen strictly off.",2,"Body"]];
const SCHEDULE_FR=[ // Friday: Jumu'ah
["s1","05:15","05:45","Wake up, Wudu & Fajr","Start the day bowing to Allah.",2,"Deen"],
["s2","05:45","06:15","Quran & Coffee","Quran recitation.",2,"Deen"],
["s3","06:15","08:15","RBI Grade B Deep Study","Sharpest time. Phone away.",3,"Career"],
["s4","08:15","09:30","Breakfast & Grooming","High-protein breakfast, get ready.",1,"Body"],
["s5","09:30","12:00","WFH Deep Work","Office work, finish early.",2,"Career"],
["f1","12:00","12:30","Ghusl, Attar & Clean Clothes","Jumu'ah ki tayyari: ghusl, saaf kapde, khushbu.",1,"Deen"],
["f2","12:30","14:00","Jumu'ah (Khutbah + Namaz)","Jaldi masjid, khutbah khamoshi se suno.",3,"Deen"],
["f3","14:00","14:30","Lunch","Halal, clean food.",1,"Body"],
["s7","14:30","17:30","WFH (second half) & Asr","Finish remaining work. Pray Asr.",2,"Career"],
["f4","17:30","18:30","Surah Kahf, Durood & Dua","Jumu'ah ka khaas waqt. Durood aur dua zyada.",2,"Deen"],
["s9","18:30","19:00","Maghrib & Pre-workout","Pray, then fruit or meal.",1,"Deen"],
["s10","19:00","20:30","Gym / Workout","Heavy lifting or cardio.",3,"Body"],
["s11","20:30","21:15","Dinner, Shower & Isha","Family and deen.",1,"Deen"],
["s12","21:15","22:00","GF Time & Quality Talk","Calm, mature talk.",1,"Relationship"],
["s13","22:00","22:30","Reading, Journaling & Tracker","Plan tomorrow.",2,"Mind"],
["s14","22:30","05:15","Sleep (7 hours)","Phone screen strictly off.",2,"Body"]];
const SCHEDULE_WE=[ // Saturday-Sunday: more free time
["s1","05:15","05:45","Wake up, Wudu & Fajr","Start the day bowing to Allah.",2,"Deen"],
["s2","05:45","06:30","Quran & Coffee","Quran recitation, calm start.",2,"Deen"],
["s3","06:30","09:30","Deep Study","Your main study subject, phone away.",3,"Career"],
["s4","09:30","10:30","Breakfast & Grooming","High-protein breakfast, get ready.",1,"Body"],
["w1","10:30","12:30","Mock Test & Revision","Test yourself, review weak areas.",2,"Career"],
["w2","12:30","13:30","Free Time","Rest, hobby, or friends. No guilt.",1,"Mind"],
["s6","13:30","14:30","Lunch & Dhuhr","Halal, clean food. Pray Dhuhr.",1,"Deen"],
["w3","14:30","16:30","Family Time & Rest","Parents/family, errands, short nap.",2,"Relationship"],
["w4","16:30","18:30","Free Time & Asr","Walk, outdoors, hobby. Pray Asr.",1,"Mind"],
["s9","18:30","19:00","Maghrib & Pre-workout","Pray, then a fruit or meal.",1,"Deen"],
["s10","19:00","20:30","Gym / Workout","Heavy lifting or cardio.",3,"Body"],
["s11","20:30","21:15","Dinner, Shower & Isha","Family and deen.",1,"Deen"],
["s12","21:15","22:00","GF Time & Quality Talk","Calm, mature talk.",1,"Relationship"],
["s13","22:00","22:30","Reading, Journaling & Tracker","Read, plan tomorrow.",2,"Mind"],
["s14","22:30","05:15","Sleep (7 hours)","Phone screen strictly off.",2,"Body"]];
const HABITS=[ // [id,label,weight,category,core(1/0)]. "Core" mode shows only core ones.
["nopmo","No porn / no PMO today",10,"Character",1],["gaze","No lustful gazing / inappropriate scrolling",5,"Character",1],
["notox","No toxicity (abuse, arguments, gheebat)",6,"Character",1],["noneg","No negativity / self-pity / negative self-talk",3,"Character",1],
["lowgaze","Lowered gaze (ghadd al-basar) practiced",3,"Character",0],["nosmoke","No smoking / nasha / junk or sugar binge",3,"Character",0],
["nodoom","No doomscrolling (within limit)",3,"Character",1],["truth","Spoke truthfully, kept every promise",3,"Character",1],
["phone","Phone-free first hour after waking",2,"Character",0],
["fajr","Fajr on time",4,"Deen",1],["dhuhr","Dhuhr on time (Friday: Jumu'ah)",4,"Deen",1],["asr","Asr on time",4,"Deen",1],["maghrib","Maghrib on time",4,"Deen",1],["isha","Isha on time",4,"Deen",1],
["sunnah","Sunnah prayers / Witr",2,"Deen",0],["adhkar","Morning & evening adhkar",2,"Deen",1],["istighfar","Istighfar & salawat",1,"Deen",0],
["sadaqah","Gave sadaqah / one good deed",1,"Deen",0],["tahajjud","Dua / Tahajjud",1,"Deen",0],
["water","Drank 3+ litres water",2,"Body",1],["protein","Protein target hit",2,"Body",0],["steps","8,000+ steps",1,"Body",0],["sleep","Slept by 10:30 PM",2,"Body",1],
["stretch","Stretching / mobility 10 min",1,"Body",0],["skin","Skincare, grooming, clean clothes",1,"Body",0],
["study","Study hours done",3,"Career",1],["mock","Mock test / quiz completed",2,"Career",0],
["fin","Learned one finance/economics concept",2,"Mind",0],["read","Read 10+ pages",1,"Mind",0],["grat","Gratitude: 3 things",1,"Mind",0],["plan","Planned tomorrow's top 3 tasks",1,"Mind",0],
["family","Real time with parents/family",2,"Relationship",0],["gf","Calm & respectful with girlfriend",2,"Relationship",0],["help","Called or helped one person",1,"Relationship",1]];
const TOPICS=[["t1","GA: Banking awareness"],["t2","GA: Current affairs"],["t3","English: Reading comprehension"],["t4","English: Grammar & vocab"],["t5","Quant: Arithmetic"],["t6","Quant: Data interpretation"],["t7","Reasoning: Puzzles & seating"],["t8","ESI: Growth & development"],["t9","ESI: Financial system"],["t10","FM: Financial markets"],["t11","FM: Risk management"],["t12","Phase 2: Descriptive writing"]];
const PT={Fajr:"05:15",Dhuhr:"13:30",Asr:"17:15",Maghrib:"18:30",Isha:"20:45"}; // edit in Edit tab
const CATS=["Deen","Career","Body","Mind","Character","Relationship"];
const KEYS=[["nopmo","No-PMO"],["fajr","Fajr on time"],["s10","Gym"],["s3","Deep study"]];
const KIND={wd:"Weekday (Mon-Thu)",fr:"Friday (Jumu'ah)",we:"Weekend"};
const TRIG=["Boredom","Stress","Late night","Social media","Loneliness","Other"];
const QUOTES=["Verily, with hardship comes ease. (Quran 94:6)","Allah does not burden a soul beyond its capacity. (Quran 2:286)","Remember Me; I will remember you. (Quran 2:152)",
"Indeed, Allah is with the patient. (Quran 2:153)","Do not weaken and do not grieve. (Quran 3:139)","In the remembrance of Allah do hearts find rest. (Quran 13:28)",
"Whoever fears Allah, He makes a way out for him. (Quran 65:2)","Do not despair of the mercy of Allah. (Quran 39:53)","Allah does not change a people until they change themselves. (Quran 13:11)",
"Seek help through patience and prayer. (Quran 2:45)","Those who strive for Us, We will guide them to Our ways. (Quran 29:69)","When you are free, strive. (Quran 94:7)",
"Allah is the best of planners; rely on Him. (Quran 3:159)","Actions are judged by intentions. (Hadith, Bukhari & Muslim)","The strong one is he who controls himself in anger. (Hadith, Bukhari & Muslim)",
"The best deeds are the consistent ones, even if small. (Hadith, Bukhari & Muslim)","Speak good or keep silent. (Hadith, Bukhari & Muslim)","The strong believer is better and more beloved to Allah than the weak. (Hadith, Muslim)",
"Modesty is part of faith. (Hadith, Bukhari & Muslim)","The best of you are the best in character. (Hadith, Bukhari)","Make things easy, do not make them difficult. (Hadith, Bukhari & Muslim)",
"True wealth is the richness of the soul. (Hadith, Bukhari & Muslim)","Every son of Adam errs, and the best of them are those who repent. (Hadith, Tirmidhi)",
"Part of a person's good Islam is leaving what does not concern him. (Hadith, Tirmidhi)","Take advantage of five before five: youth before old age, health before sickness, free time before busyness. (Hadith, Hakim)",
"We are what we repeatedly do. Excellence is a habit. (Will Durant)","Discipline is choosing between what you want now and what you want most. (Common saying)","Small steps, taken daily, move mountains. (Common saying)",
"You fall to the level of your systems, not your goals. (James Clear)","Motivation gets you started, habit keeps you going. (Jim Ryun)","Well done is better than well said. (Benjamin Franklin)","The pain of discipline is lighter than the pain of regret. (Common saying)"];
/* ===== HELPERS ===== */
const pad=n=>String(n).padStart(2,"0");
const dk=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const fromK=k=>new Date(k+"T00:00:00");
const todayK=()=>dk(new Date()); // recomputed each call: midnight rollover safe
const $=s=>document.querySelector(s),app=$("#app");
const jp=(s,d)=>{try{return JSON.parse(s)??d}catch(_){return d}};
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const nowHM=()=>{const n=new Date();return pad(n.getHours())+":"+pad(n.getMinutes())};
/* ===== STORAGE ===== */
const KEY="dos_v1";let db=jp(localStorage.getItem(KEY),{});
function hasData(k){const e=db[k];return !!e&&(Object.values(e.ticks||{}).some(Boolean)||Object.values(e.numbers||{}).some(v=>v!=null)||!!e.note||!!e.mood||!!e.energy||!!e.gym||(e.urgeLog||[]).length>0||(e.relapse||[]).length>0)}
Object.keys(db).forEach(k=>{if(!hasData(k))delete db[k]}); // drop blank days: they must not count as 0% days
const save=()=>localStorage.setItem(KEY,JSON.stringify(db));
const ent=k=>db[k]||(db[k]={ticks:{},numbers:{},urgeLog:[]}); // only called on WRITE
/* ===== EDITABLE CONFIG ===== */
const defCfg=()=>({v:2,wd:SCHEDULE.map(x=>[...x]),fr:SCHEDULE_FR.map(x=>[...x]),we:SCHEDULE_WE.map(x=>[...x]),habits:HABITS.map(x=>[...x]),topics:TOPICS.map(x=>[...x]),pt:{...PT}});
function loadCfg(){const c=jp(localStorage.dos_cfg,null),d=defCfg();if(!c)return d;
c.fr=c.fr||d.fr;c.topics=c.topics||d.topics;c.pt=c.pt||d.pt;
if(!c.v){[...c.wd,...c.we].forEach(s=>{if(["s6","s9","s11"].includes(s[0]))s[5]=1;if(s[0]==="s1")s[5]=2}); // prayers no longer double counted
c.habits.forEach(h=>{const m=d.habits.find(x=>x[0]===h[0]);h[4]=m?m[4]:1});c.v=2}return c}
let cfg=loadCfg(),core=localStorage.dos_core!=="0";
const srt=a=>a.sort((x,y)=>x[1]<y[1]?-1:x[1]>y[1]?1:0);
const saveCfg=()=>{srt(cfg.wd);srt(cfg.fr);srt(cfg.we);localStorage.dos_cfg=JSON.stringify(cfg)};
const kind=k=>{const g=fromK(k).getDay();return g===5?"fr":g===0||g===6?"we":"wd"};
const sch=k=>cfg[kind(k)];
const zoom=()=>+(localStorage.dos_zoom||90);
const setZoom=z=>{z=Math.min(120,Math.max(80,z));localStorage.dos_zoom=z;document.documentElement.style.zoom=z/100};
/* ===== PURE ANALYTICS ===== */
const habs=()=>cfg.habits.filter(h=>!core||h[4]);
const allFor=k=>[...sch(k).map(s=>({id:s[0],w:+s[5],c:s[6]})),...habs().map(h=>({id:h[0],w:+h[2],c:h[3]}))];
const rawScore=(k,cat)=>{const t=db[k]?.ticks||{};let a=0,b=0;allFor(k).forEach(i=>{if(cat&&i.c!==cat)return;b+=i.w;if(t[i.id])a+=i.w});return b?Math.round(100*a/b):0};
const gated=k=>habs().some(h=>h[0]==="nopmo")&&!db[k]?.ticks?.nopmo; // No-PMO is a gate
const score=(k,cat)=>{const r=rawScore(k,cat);return !cat&&gated(k)?Math.min(r,60):r};
const lastN=(n,end=new Date())=>Array.from({length:n},(_,i)=>{const d=new Date(end);d.setDate(d.getDate()-(n-1-i));return dk(d)});
const avg=a=>a.length?Math.round(a.reduce((x,y)=>x+y,0)/a.length):0;
const avgScore=ks=>avg(ks.filter(hasData).map(k=>score(k)));
const streak=id=>{let d=new Date();if(!db[dk(d)]?.ticks?.[id])d.setDate(d.getDate()-1);let n=0;while(db[dk(d)]?.ticks?.[id]){n++;d.setDate(d.getDate()-1)}return n};
const best=id=>{let b=0,n=0;lastN(730).forEach(k=>{if(db[k]?.ticks?.[id]){n++;b=Math.max(b,n)}else n=0});return b};
const consist=(id,n)=>{const ks=lastN(n).filter(k=>allFor(k).some(i=>i.id===id));return ks.length?Math.round(100*ks.filter(k=>db[k]?.ticks?.[id]).length/ks.length):0};
const label=id=>([...cfg.wd,...cfg.fr,...cfg.we].find(s=>s[0]===id)||[])[3]||(cfg.habits.find(h=>h[0]===id)||[])[1]||id;
const delta=(a,b)=>{const p=b?Math.round(100*(a-b)/b):0;return `${p>=0?"▲":"▼"} ${Math.abs(p)}% (${a}% vs ${b}%)`};
const heat=k=>`<div class="cell" title="${k}" style="${hasData(k)?`background:rgba(111,183,168,${.15+score(k)/120})`:""}"></div>`;
const urgeTs=u=>typeof u==="number"?u:u.t;
/* ===== UI: TODAY ===== */
let cur=todayK(),view="today",rng="Weekly",lastDay=cur,scrolled=false,charts=[],trig="Other";
const CK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>';
const row=(id,name,sub,time,extra,now)=>`<div class="row ${now?"now":""}" ${now?'id="now"':""}><div>${time?`<div class="t">${time}</div>`:""}<div>${esc(name)}</div>${sub?`<div class="p">${esc(sub)}</div>`:""}${extra||""}</div><button class="ck ${db[cur]?.ticks?.[id]?"on":""}" role="checkbox" aria-checked="${!!db[cur]?.ticks?.[id]}" aria-label="${esc(name)}" data-id="${id}">${CK}</button></div>`;
const chips=id=>{const L=id==="dhuhr"&&kind(cur)==="fr"?RAKAT_FRI:RAKAT[id];return L?`<div class="chips">${L.map((p,i)=>`<button class="chip ${db[cur]?.ticks?.[id+"_"+i]?"on":""}" data-id="${id}_${i}" aria-label="${p[1]} ${p[0]}">${p[1]} ${p[0]}</button>`).join("")}</div>`:""};
const ringHTML=()=>{const s=score(cur),c=2*Math.PI*38;return `<div class="ring"><svg width="92" height="92" viewBox="0 0 92 92"><circle class="bg" cx="46" cy="46" r="38"/><circle class="fg" cx="46" cy="46" r="38" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-s/100)}"/></svg><b>${s}%</b></div>`};
const capNote=()=>gated(cur)&&rawScore(cur)>60?"No-PMO tick ke bina score 60% par ruka hai.":"";
const nowIdx=l=>{const h=nowHM();return l.findIndex(s=>s[1]<s[2]?h>=s[1]&&h<s[2]:h>=s[1]||h<s[2])};
function hijri(d){try{const t=new Intl.DateTimeFormat("en-u-ca-islamic-umalqura",{day:"numeric",month:"long",year:"numeric",era:"short"}).format(d);return /AH/.test(t)?t:""}catch(_){return""}}
function renderToday(){const d=fromK(cur),isT=cur===todayK(),doy=Math.floor((d-new Date(d.getFullYear(),0,0))/864e5),list=sch(cur),ni=isT?nowIdx(list):-1;
const exam=localStorage.dos_exam,left=exam?Math.ceil((fromK(exam)-fromK(todayK()))/864e5):null;
const stale=Object.keys(db).length&&Date.now()-(+localStorage.dos_lastbackup||0)>7*864e5;
app.innerHTML=`<div class="card hd"><div><h1>${d.toLocaleDateString(undefined,{weekday:"long",day:"numeric",month:"short",year:"numeric"})}</h1><div class="mut">${hijri(d)}</div><div class="mut">Assalamu alaikum. Be honest, be gentle.</div><div class="mut" id="cap">${capNote()}</div>
<button class="btn" id="th" aria-label="Switch theme">${document.documentElement.dataset.theme==="light"?"🌙 Dark":"☀️ Light"}</button><button class="btn" id="zm" aria-label="Smaller">A−</button><button class="btn" id="zp" aria-label="Bigger">A+</button><span class="mut"> ${zoom()}%</span>
<button class="btn" id="cm">${core?"Core habits":"All habits"}</button></div><div id="rg">${ringHTML()}</div></div>
${stale?`<div class="card">Backup ko 7+ din ho gaye. <button class="btn g" id="exp2">Export Backup</button></div>`:""}
${left!==null&&left>=0?`<div class="card">Exam me <b>${left}</b> din baaki.</div>`:""}
<div class="q">${QUOTES[doy%QUOTES.length]}</div><div class="mut">${Object.entries(cfg.pt).map(([n,t])=>n+" "+t).join(" · ")}</div>
<div id="cel" class="card" ${score(cur)>=90?"":"hidden"}>MashaAllah, strong day.</div>
<div class="hd"><button class="btn" id="pv" aria-label="Previous day">‹ Prev</button><span class="mut">${isT?"Today":"Past day"}</span><button class="btn" id="nx" ${isT?"disabled":""} aria-label="Next day">Next ›</button></div>
<div class="two"><section><h2>Schedule · ${KIND[kind(cur)]}</h2><div class="card">${list.map((x,i)=>row(x[0],x[3],x[4],x[1]+"–"+x[2],"",i===ni)).join("")}</div></section>
<aside><h2>Character & Habits</h2>${CATS.map(c=>{const hs=habs().filter(h=>h[3]===c);return hs.length?`<details class="card" open><summary><h3>${c}</h3></summary>${hs.map(h=>row(h[0],h[1],"","",chips(h[0]))).join("")}</details>`:""}).join("")}</aside></div>`;
$("#pv").onclick=()=>{const x=fromK(cur);x.setDate(x.getDate()-1);cur=dk(x);renderToday()};
$("#nx").onclick=()=>{const x=fromK(cur);x.setDate(x.getDate()+1);if(dk(x)<=todayK()){cur=dk(x);renderToday()}}}
const upd=()=>{$("#rg").innerHTML=ringHTML();$("#cel").hidden=score(cur)<90;$("#cap").textContent=capNote()};
/* ===== CHARTS ===== */
function mk(host,type,labels,sets,max){if(typeof Chart==="undefined"){host.insertAdjacentHTML("beforeend",'<p class="mut">Charts ke liye Chart.js chahiye (ek baar online kholo).</p>');return}
const c=document.createElement("canvas");host.appendChild(c);const css=getComputedStyle(document.documentElement),gc=css.getPropertyValue("--line").trim(),cols=["#6fb7a8","#d4af5a","#c98a8a"];Chart.defaults.color=css.getPropertyValue("--mut").trim();
charts.push(new Chart(c,{type,data:{labels,datasets:sets.map((s,i)=>({label:s.label||"",data:s.data,backgroundColor:cols[i]+"88",borderColor:cols[i],tension:.3,spanGaps:true}))},options:{scales:type==="radar"?{r:{min:0,max:max||100,grid:{color:gc},ticks:{display:false}}}:{y:{min:0,max,grid:{color:gc}},x:{grid:{display:false}}},plugins:{legend:{display:sets.length>1}}}}))}
function trend(title,type,labels,sets,note){const has=sets.some(s=>s.data.some(v=>v!=null));const d=document.createElement("div");d.className="card";d.innerHTML=`<h3>${title}</h3>${has?"":`<p class="mut">${note}</p>`}`;$("#tr").appendChild(d);if(has)mk(d,type,labels,sets)}
/* ===== PROGRESS ===== */
function renderProgress(){const T=new Date(),w=lastN(7),sc=w.map(k=>score(k)),pw=lastN(7,new Date(T.getTime()-7*864e5)),m=lastN(30),pm=lastN(30,new Date(T.getTime()-30*864e5)),any=Object.keys(db).some(hasData);
const tabs=`<h1>Progress</h1><div class="seg">${["Daily","Weekly","Monthly","Yearly"].map(r=>`<button class="btn ${r===rng?"on":""}" data-r="${r}">${r}</button>`).join("")}</div>`;
const bind=()=>document.querySelectorAll("[data-r]").forEach(b=>b.onclick=()=>{rng=b.dataset.r;render()});
if(!any){app.innerHTML=tabs+`<div class="card"><p>Abhi koi data nahi hai.</p><p class="mut">Today tab me kuch tick karo (ya Journal me kuch likho), phir yahan charts, streaks aur insights dikhenge.</p></div>`;bind();return}
let extra="";if(rng==="Weekly")extra=`<p>Avg <b>${avg(sc)}%</b> · Best ${Math.max(...sc)}% · Worst ${Math.min(...sc)}%</p>`;
if(rng==="Monthly")extra=`<div class="grid">${m.map(heat).join("")}</div>`;if(rng==="Yearly")extra=`<div class="grid yr">${lastN(365).map(heat).join("")}</div>`;
const ids=[...new Set([...cfg.wd,...cfg.fr,...cfg.we].map(s=>s[0]).concat(cfg.habits.map(h=>h[0])))];
const rows=ids.map(id=>({id,a:consist(id,7),b:consist(id,30),c:consist(id,90)})).sort((x,y)=>x.b-y.b),weak=rows.slice(0,3).map(r=>label(r.id)),strong=rows[rows.length-1];
const review=`Weekly review: strongest habit "${label(strong.id)}", weakest "${label(rows[0].id)}". Suggestion: attach "${label(rows[0].id)}" to a fixed time tomorrow.`;
app.innerHTML=tabs+`<div class="card" id="ch"></div>${extra?`<div class="card">${extra}</div>`:""}
<div class="card"><h3>Am I growing?</h3><p>Week: ${delta(avgScore(w),avgScore(pw))}</p><p>Month: ${delta(avgScore(m),avgScore(pm))}</p><p class="${T.getDay()===0?"":"mut"}">${review}</p></div>
<div class="card"><h3>Streaks (current / best)</h3>${KEYS.map(k=>`<div class="row"><span>${k[1]}</span><b>${streak(k[0])} / ${best(k[0])} days</b></div>`).join("")}</div>
<div class="card"><h3>Focus on these 3 weak habits</h3><p>${weak.join(" · ")}</p><table><tr><th>Habit</th><th>7d</th><th>30d</th><th>90d</th></tr>${rows.map(r=>`<tr><td>${esc(label(r.id))}</td><td>${r.a}%</td><td>${r.b}%</td><td>${r.c}%</td></tr>`).join("")}</table></div><h2>Trends</h2><div id="tr"></div>`;bind();
const H=$("#ch");
if(rng==="Daily")mk(H,"radar",CATS,[{data:CATS.map(c=>score(cur,c))}]);
if(rng==="Weekly")mk(H,"bar",w.map(k=>k.slice(5)),[{data:sc}],100);
if(rng==="Monthly")mk(H,"line",m.map(k=>k.slice(8)),[{data:m.map(k=>score(k))}],100);
if(rng==="Yearly"){const by={};lastN(365).forEach(k=>{(by[k.slice(0,7)]=by[k.slice(0,7)]||[]).push(k)});mk(H,"bar",Object.keys(by),[{data:Object.values(by).map(avgScore)}],100)}
const y90=lastN(90),L90=y90.map(k=>k.slice(5)),num=(ks,f)=>ks.map(k=>db[k]?.numbers?.[f]??null);
trend("Body weight (kg)","line",L90,[{data:num(y90,"weight")}],"Journal me weight likho.");
trend("Measurements (chest / waist / arms)","line",L90,[{label:"Chest",data:num(y90,"chest")},{label:"Waist",data:num(y90,"waist")},{label:"Arms",data:num(y90,"arms")}],"Mahine me ek baar Journal me naap likho.");
trend("Study hours (30 days)","bar",m.map(k=>k.slice(5)),[{data:num(m,"studyHours")}],"Journal me study hours likho.");
trend("Mock scores","line",L90,[{data:num(y90,"mockScore")}],"Journal me mock score likho.");
trend("Mood vs discipline score (30 days)","line",m.map(k=>k.slice(5)),[{label:"Score",data:m.map(k=>hasData(k)?score(k):null)},{label:"Mood x20",data:m.map(k=>db[k]?.mood?db[k].mood*20:null)}],"Mood aur score dono chahiye.");
const hrs=Array(24).fill(0),tc={};Object.values(db).forEach(e=>(e.urgeLog||[]).forEach(u=>{hrs[new Date(urgeTs(u)).getHours()]++;if(u.trig)tc[u.trig]=(tc[u.trig]||0)+1}));
const top=Object.entries(tc).sort((a,b)=>b[1]-a[1])[0];
trend("Urges by hour"+(top?` (top trigger: ${top[0]})`:""),"bar",hrs.map((_,i)=>i+":00"),[{data:hrs.some(Boolean)?hrs:[]}],"Urge button use karoge to yahan dikhega kis time sabse zyada urge aata hai.")}
/* ===== JOURNAL ===== */
function renderJournal(){const e=db[cur]||{},n=e.numbers||{},syl=jp(localStorage.dos_syl,{}),dn=cfg.topics.filter(t=>syl[t[0]]).length;
const sel=f=>[1,2,3,4,5].map(v=>`<button class="btn ${e[f]===v?"on":""}" data-f="${f}" data-v="${v}">${f==="mood"?["😞","😕","😐","🙂","😊"][v-1]:v}</button>`).join("");
const num=(f,l,s="1")=>`<label>${l}<input type="number" step="${s}" min="0" data-n="${f}" value="${n[f]??""}"></label>`;
app.innerHTML=`<h1>Journal · ${cur}</h1>
<div class="card"><p>Mood</p><div class="seg">${sel("mood")}</div><p>Energy</p><div class="seg">${sel("energy")}</div></div>
<div class="card">${num("studyHours","Study hours","0.5")}${num("mockScore","Mock score")}${num("weight","Body weight (kg)","0.1")}<p class="mut">Monthly measurements (cm), mahine me ek baar. Progress photo bhi lo.</p>${num("chest","Chest","0.5")}${num("waist","Waist","0.5")}${num("arms","Arms","0.5")}
<label>Workout log (exercise, sets x reps)<textarea rows="3" id="gym">${esc(e.gym||"")}</textarea></label><label>What went well / fix tomorrow<textarea rows="4" id="note">${esc(e.note||"")}</textarea></label></div>
<div class="card"><button class="btn g" id="urgeb">I'm having an urge</button><button class="btn" id="relb">Mujhse galti ho gayi</button><p>No-PMO streak: <b>${streak("nopmo")}</b> days · Longest: <b>${best("nopmo")}</b> · Urges resisted today: ${(e.urgeLog||[]).length}</p></div>
<div class="card"><h3>Exam / Syllabus</h3><label>Exam date<input type="date" id="exam" value="${localStorage.dos_exam||""}"></label><p>Syllabus: ${dn}/${cfg.topics.length} (${cfg.topics.length?Math.round(100*dn/cfg.topics.length):0}%)</p><div class="chips">${cfg.topics.map(t=>`<button class="chip ${syl[t[0]]?"on":""}" data-syl="${t[0]}">${esc(t[1])}</button>`).join("")}</div><p class="mut">Topics Edit tab me badal sakti ho.</p></div>
<div class="card"><h3>Privacy</h3><button class="btn" id="pin">${localStorage.dos_pin?"Change PIN":"Set PIN lock"}</button>${localStorage.dos_pin?'<button class="btn" id="nopin">Remove PIN</button>':""}<p class="mut">PIN bhool gayi to data nikalna mushkil hoga, pehle Export Backup karo. App ka naam badalna ho to manifest.json me "name" aur "short_name" badlo, ya home screen icon ka naam long-press karke rename karo.</p></div>
<div class="card"><h3>Reminders & Backup</h3><button class="btn" id="notif">Enable notifications</button><button class="btn" id="ics">Download Calendar Alarms (.ics)</button><button class="btn" id="exp">Export Backup</button><label class="btn" style="display:inline-grid;place-items:center">Import Backup<input type="file" id="imp" accept=".json" hidden></label>
<p class="mut">Last backup: ${localStorage.dos_lastbackup?new Date(+localStorage.dos_lastbackup).toLocaleDateString():"kabhi nahi"}. Notifications sirf app khula ho tab chalte hain; asli alarms ke liye .ics Google Calendar me import karo.</p></div>`;
document.querySelectorAll("[data-f]").forEach(b=>b.onclick=()=>{ent(cur)[b.dataset.f]=+b.dataset.v;save();renderJournal()});
document.querySelectorAll("[data-n]").forEach(i=>i.onchange=()=>{ent(cur).numbers[i.dataset.n]=i.value===""?null:+i.value;save()});
$("#note").oninput=ev=>{ent(cur).note=ev.target.value;save()};$("#gym").oninput=ev=>{ent(cur).gym=ev.target.value;save()};
$("#exam").onchange=ev=>{localStorage.dos_exam=ev.target.value};
$("#urgeb").onclick=urge;$("#relb").onclick=relapse;$("#notif").onclick=()=>window.Notification?Notification.requestPermission().then(p=>alert("Notifications: "+p)):alert("Is browser me notifications support nahi hain.");
$("#ics").onclick=ics;$("#exp").onclick=exportBackup;$("#imp").onchange=importBackup;
$("#pin").onclick=async()=>{const p=prompt("4-6 digit PIN daalo");if(p&&/^\d{4,6}$/.test(p)){localStorage.dos_pin=await sha(p);renderJournal()}else if(p)alert("Sirf 4-6 digits.")};
if($("#nopin"))$("#nopin").onclick=()=>{if(confirm("PIN hata dein?")){delete localStorage.dos_pin;renderJournal()}}}
function dl(name,txt,type){const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([txt],{type}));a.download=name;a.click()}
/* ===== BACKUP (includes edits, settings, syllabus, memorization) ===== */
function exportBackup(){localStorage.dos_lastbackup=Date.now();const o={v:2,db,cfg,core,zoom:zoom(),theme:document.documentElement.dataset.theme,exam:localStorage.dos_exam||"",syl:jp(localStorage.dos_syl,{}),mem:jp(localStorage.dos_mem,{})};
dl("discipline-backup-"+todayK()+".json",JSON.stringify(o),"application/json");render()}
function importBackup(ev){const f=ev.target.files[0];if(!f)return;f.text().then(t=>{try{const o=JSON.parse(t);if(!o||typeof o!=="object")throw 0;
if(o.db){db=o.db;if(o.cfg){localStorage.dos_cfg=JSON.stringify(o.cfg);cfg=loadCfg()}if(o.zoom)setZoom(o.zoom);if(o.theme){localStorage.dos_theme=o.theme;document.documentElement.dataset.theme=o.theme}
localStorage.dos_core=o.core===false?"0":"1";core=o.core!==false;localStorage.dos_exam=o.exam||"";localStorage.dos_syl=JSON.stringify(o.syl||{});localStorage.dos_mem=JSON.stringify(o.mem||{})}else db=o; // old format: plain days
save();alert("Backup imported.");render()}catch(_){alert("Invalid backup file.")}})}
/* ===== URGE / RELAPSE ===== */
const trigHTML=()=>`<p>Trigger kya tha?</p><div class="seg" style="justify-content:center">${TRIG.map(t=>`<button class="btn ${t===trig?"on":""}" data-trig="${t}">${t}</button>`).join("")}</div>`;
function overlay(html){const u=$("#urge");u.hidden=false;u.innerHTML=html;trig="Other";u.onclick=e=>{const b=e.target.closest("[data-trig]");if(b){trig=b.dataset.trig;u.querySelectorAll("[data-trig]").forEach(x=>x.classList.toggle("on",x===b))}};return u}
function urge(){let s=60;const u=overlay(`<h1>Pause. Breathe.</h1><div class="big" id="tm">60</div><p id="br">Breathe in…</p>
<div class="card"><p>"Do not approach unlawful sexual intercourse." (Quran 17:32)</p><p>"Tell the believing men to lower their gaze and guard their chastity." (Quran 24:30)</p><p>Allah is watching over you (Quran 4:1). He loves those who turn back to Him.</p></div>
<div class="card">Make wudu · Cold shower · Walk outside · Do 20 pushups · Call a friend</div>${trigHTML()}<button class="btn g" id="dn" disabled>I resisted</button><button class="btn" id="cx">Close</button>`);
const iv=setInterval(()=>{s--;$("#tm").textContent=s;$("#br").textContent=s%8<4?"Breathe in…":"Breathe out…";if(s<=0){clearInterval(iv);$("#dn").disabled=false}},1000);
$("#cx").onclick=()=>{clearInterval(iv);u.hidden=true};
$("#dn").onclick=()=>{ent(todayK()).urgeLog.push({t:Date.now(),trig});save();u.hidden=true;render()}}
function relapse(){const u=overlay(`<h1>Allah tawbah qubool karne wala hai</h1><div class="card"><p>"Do not despair of the mercy of Allah." (Quran 39:53)</p><p>Sharm me mat doobo. Abhi wudu karo, tawbah ki 2 rakat padho, aur seedha agle kadam par aao. Streak reset hogi, par tumhari mehnat nahi.</p></div>${trigHTML()}
<label>Kya hua, aur kal kaise bachunga?<textarea rows="4" id="rp"></textarea></label><button class="btn g" id="rs">Save</button><button class="btn" id="cx">Close</button>`);
$("#cx").onclick=()=>u.hidden=true;
$("#rs").onclick=()=>{const e=ent(cur);e.ticks.nopmo=false;(e.relapse=e.relapse||[]).push({t:Date.now(),trig,plan:$("#rp").value});save();u.hidden=true;render()}}
/* ===== PRAYER TIMES, ICS, REMINDERS ===== */
function autoPT(){if(typeof adhan==="undefined")return alert("Auto-calc library load nahi hui. Internet on karke dobara try karo, ya time haath se bharo.");
const p=adhan.CalculationMethod.Karachi();p.madhab=adhan.Madhab.Hanafi;const t=new adhan.PrayerTimes(new adhan.Coordinates(19.076,72.8777),new Date(),p),f=d=>pad(d.getHours())+":"+pad(d.getMinutes());
cfg.pt={Fajr:f(t.fajr),Dhuhr:f(t.dhuhr),Asr:f(t.asr),Maghrib:f(t.maghrib),Isha:f(t.isha)};saveCfg();render()}
function ics(){const L=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//DisciplineOS//EN"],now=new Date().toISOString().replace(/[-:]|\.\d+/g,"");
const add=(n,t,key,by)=>{const [h,m]=t.split(":"),ds=dk(new Date()).replace(/-/g,"");L.push("BEGIN:VEVENT",`UID:${n.replace(/\W/g,"")}${t}${by.replace(/,/g,"")}@dos`,`DTSTAMP:${now}`,`DTSTART:${ds}T${h}${m}00`,"DURATION:PT15M",`RRULE:FREQ=WEEKLY;BYDAY=${by}`,`SUMMARY:${n}`,"BEGIN:VALARM","ACTION:DISPLAY",`DESCRIPTION:${n}`,"TRIGGER:PT0S","END:VALARM");
if(key)L.push("BEGIN:VALARM","ACTION:DISPLAY",`DESCRIPTION:${n} in 5 min`,"TRIGGER:-PT5M","END:VALARM");L.push("END:VEVENT")};
cfg.wd.forEach(s=>add(s[3],s[1],s[5]>=3,"MO,TU,WE,TH"));cfg.fr.forEach(s=>add(s[3],s[1],s[5]>=3,"FR"));cfg.we.forEach(s=>add(s[3],s[1],s[5]>=3,"SA,SU"));
Object.entries(cfg.pt).forEach(([n,t])=>add("Time for "+n+" (gentle reminder)",t,true,"MO,TU,WE,TH,FR,SA,SU"));add("Fill Discipline OS tracker","22:00",false,"MO,TU,WE,TH,FR,SA,SU");
L.push("END:VCALENDAR");dl("discipline-alarms.ics",L.join("\r\n"),"text/calendar")}
let fired="";setInterval(()=>{const hm=nowHM();
if(todayK()!==lastDay){if(cur===lastDay)cur=todayK();lastDay=todayK();render()}
if(fired===hm||!window.Notification||Notification.permission!=="granted")return;
const p=Object.entries(cfg.pt).find(x=>x[1]===hm),s=sch(todayK()).find(x=>x[1]===hm);if(!p&&!s)return;fired=hm;
navigator.serviceWorker.ready.then(r=>r.showNotification(p?"Time for "+p[0]:hm==="22:00"?"Time to fill your tracker":hm+" · "+s[3],{body:p?"Gentle reminder":s[4],icon:"./icon-192.png"}))},20000);
/* ===== EDIT TAB ===== */
const opt=v=>CATS.map(c=>`<option ${c===v?"selected":""}>${c}</option>`).join("");
function renderEdit(){const f=(k,i,j,v,t="text",ph="")=>`<input type="${t}" data-k="${k}" data-i="${i}" data-j="${j}" value="${esc(v)}" placeholder="${ph}" aria-label="${ph||t}">`;
const sc=(t,k)=>`<h2>${t}</h2><div class="card">${cfg[k].map((x,i)=>`<div class="ed" data-uid="${x[0]}">${f(k,i,3,x[3],"text","Activity name")}<div class="seg">${f(k,i,1,x[1],"time")}${f(k,i,2,x[2],"time")}${f(k,i,5,x[5],"number","Weight")}</div>${f(k,i,4,x[4],"text","Purpose")}<select data-k="${k}" data-i="${i}" data-j="6">${opt(x[6])}</select><button class="btn" data-del="${k}:${i}">Delete</button></div>`).join("")}<button class="btn g" data-add="${k}">+ Add activity</button></div>`;
app.innerHTML=`<h1>Edit</h1><p class="mut">Weight = importance in score. Weight badalne ya item delete karne se purane scores bhi badalte hain. Core mode me sirf "Core" tick wali habits dikhti hain.</p>${sc(KIND.wd,"wd")}${sc(KIND.fr,"fr")}${sc(KIND.we,"we")}
<h2>Habits</h2><div class="card">${cfg.habits.map((x,i)=>`<div class="ed" data-uid="${x[0]}">${f("habits",i,1,x[1],"text","Habit")}<div class="seg">${f("habits",i,2,x[2],"number","Weight")}<select data-k="habits" data-i="${i}" data-j="3">${opt(x[3])}</select></div><label class="mut"><input type="checkbox" data-k="habits" data-i="${i}" data-j="4" ${x[4]?"checked":""} style="width:auto;min-height:0"> Core</label><button class="btn" data-del="habits:${i}">Delete</button></div>`).join("")}<button class="btn g" data-add="habits">+ Add habit</button></div>
<h2>Syllabus topics</h2><div class="card">${cfg.topics.map((x,i)=>`<div class="ed" data-uid="${x[0]}">${f("topics",i,1,x[1],"text","Topic")}<button class="btn" data-del="topics:${i}">Delete</button></div>`).join("")}<button class="btn g" data-add="topics">+ Add topic</button></div>
<h2>Prayer times</h2><div class="card">${Object.entries(cfg.pt).map(([n,t])=>`<label>${n}<input type="time" data-pt="${n}" value="${t}"></label>`).join("")}<button class="btn" id="apt">Auto-calculate (Mumbai, Hanafi)</button><p class="mut">Auto time aapke masjid ke timetable se ek-do minute alag ho sakta hai, confirm kar lena. Mausam ke saath time badalta hai, .ics mahine me dobara download karo.</p></div>
<button class="btn" id="rst">Reset everything to default</button>`}
document.addEventListener("change",e=>{const t=e.target;if(view!=="edit")return;if(t.dataset.pt){cfg.pt[t.dataset.pt]=t.value;saveCfg();return}if(t.dataset.k===undefined)return;
cfg[t.dataset.k][+t.dataset.i][+t.dataset.j]=t.type==="number"?+t.value:t.type==="checkbox"?(t.checked?1:0):t.value;saveCfg();render()});
/* ===== LOCK ===== */
async function sha(s){const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode("dos"+s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")}
function lock(){if(!localStorage.dos_pin)return;const l=$("#lock");l.hidden=false;l.innerHTML='<h1>Discipline OS</h1><input id="lp" type="password" inputmode="numeric" placeholder="PIN" autocomplete="off"><button class="btn g" id="lg">Unlock</button>';
$("#lg").onclick=async()=>{if(await sha($("#lp").value)===localStorage.dos_pin){l.hidden=true;l.innerHTML=""}else $("#lp").value=""}}
let hiddenAt=0;document.addEventListener("visibilitychange",()=>{if(document.hidden)hiddenAt=Date.now();else if(Date.now()-hiddenAt>30000)lock()});
/* ===== GLOBAL CLICKS ===== */
document.addEventListener("click",e=>{const T=e.target,b=T.closest(".ck,.chip");
if(b&&view==="today"&&b.dataset.id){if(cur>todayK())return;const t=ent(cur).ticks,id=b.dataset.id;t[id]=!t[id];save();b.classList.toggle("on",t[id]);b.setAttribute("aria-checked",t[id]);upd()}
const n=T.closest("#nav button");if(n){view=n.dataset.v;document.querySelectorAll("#nav button").forEach(x=>x.classList.toggle("on",x===n));render()}
if(T.closest("#zm,#zp")){setZoom(zoom()+(T.closest("#zp")?5:-5));render()}
if(T.closest("#th")){const t=document.documentElement.dataset.theme==="light"?"dark":"light";document.documentElement.dataset.theme=t;localStorage.dos_theme=t;$("#tc").content=t==="light"?"#f6f4ef":"#0f1419";render()}
if(T.closest("#cm")){core=!core;localStorage.dos_core=core?"1":"0";render()}
if(T.closest("#exp2"))exportBackup();
const sy=T.closest("[data-syl]");if(sy&&view==="journal"){const s=jp(localStorage.dos_syl,{});s[sy.dataset.syl]=!s[sy.dataset.syl];localStorage.dos_syl=JSON.stringify(s);const y=scrollY;render();scrollTo(0,y)}
const mm=T.closest("[data-mem]");if(mm&&view==="namaz"){const m=jp(localStorage.dos_mem,{}),k=mm.dataset.mem;m[k]=m[k]||{};if(mm.dataset.act==="done")m[k].done=!m[k].done;else m[k].rev=todayK();localStorage.dos_mem=JSON.stringify(m);const y=scrollY;render();scrollTo(0,y)}
if(view==="edit"){const d=T.closest("[data-del]"),ad=T.closest("[data-add]");
if(d){const [k,i]=d.dataset.del.split(":");if(confirm("Delete this item?")){cfg[k].splice(+i,1);saveCfg();render()}}
if(ad){const k=ad.dataset.add,id="u"+Date.now();cfg[k].push(k==="habits"?[id,"New habit",1,"Mind",1]:k==="topics"?[id,"New topic"]:[id,"12:00","13:00","New activity","",1,"Mind"]);saveCfg();focusUid=id;render()}
if(T.id==="rst"&&confirm("Reset all habits, schedules and prayer times to default?")){localStorage.removeItem("dos_cfg");cfg=defCfg();render()}
if(T.id==="apt")autoPT()}
if(window.Notification&&Notification.permission==="default"&&!localStorage.dos_asked){localStorage.dos_asked=1;Notification.requestPermission()}});
let lastView="",focusUid=null;
function render(){const y=scrollY;charts.forEach(c=>c.destroy());charts=[];({today:renderToday,progress:renderProgress,journal:renderJournal,namaz:()=>{app.innerHTML=namazHTML()},edit:renderEdit})[view]();scrollTo(0,view===lastView?y:0);lastView=view; // same screen: keep scroll position

if(view==="today"&&!scrolled&&cur===todayK()){scrolled=true;const n=$("#now");if(n)n.scrollIntoView({block:"center"})}
if(view==="edit"&&focusUid){const n=document.querySelector(`[data-uid="${focusUid}"]`);focusUid=null;if(n){n.scrollIntoView({block:"center"});const i=n.querySelector("input");if(i)i.focus()}}}
/* ===== START ===== */
if(navigator.storage&&navigator.storage.persist)navigator.storage.persist(); // ask browser not to evict data
if("serviceWorker"in navigator){addEventListener("load",()=>navigator.serviceWorker.register("service-worker.js"));let had=!!navigator.serviceWorker.controller;
navigator.serviceWorker.addEventListener("controllerchange",()=>{if(had)$("#upd").hidden=false;had=true})}
lock();render();

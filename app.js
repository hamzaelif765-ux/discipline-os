"use strict";
/* ===== EDIT HABITS HERE (code-only). [id, start, end, name, purpose, weight, category] ===== */
const SCHEDULE=[
["s1","05:15","05:45","Wake up, Wudu & Fajr","Start the day bowing to Allah. No phone checking.",3,"Deen"],
["s2","05:45","06:15","Quran & Coffee / Pre-workout","Spiritual detox. 10-15 min Quran minimum.",2,"Deen"],
["s3","06:15","08:15","RBI Grade B Deep Study","Sharpest time. Phone in another room. Core concepts.",3,"Career"],
["s4","08:15","09:30","Newspaper, Breakfast & Grooming","The Hindu/Mint. High-protein breakfast. Dress like a gentleman.",1,"Body"],
["s5","09:30","13:30","WFH Deep Work (first half)","Only office work. No social media.",2,"Career"],
["s6","13:30","14:30","Lunch & Dhuhr","Halal, clean diet. Pray Dhuhr.",2,"Deen"],
["s7","14:30","17:30","WFH (second half) & Asr","Finish remaining work. Pray Asr.",2,"Career"],
["s8","17:30","18:30","RBI Current Affairs","PIB summaries or mock quizzes.",2,"Career"],
["s9","18:30","19:00","Maghrib & Pre-workout","Pray, then fruit or pre-workout meal.",2,"Deen"],
["s10","19:00","20:30","Gym / Intense Workout","Exhaustion kills cravings.",3,"Body"],
["s11","20:30","21:15","Dinner, Shower & Isha","Family and deen.",2,"Deen"],
["s12","21:15","22:00","GF Time & Quality Talk","Calm, mature talk. No toxic arguments.",1,"Relationship"],
["s13","22:00","22:30","Reading, Journaling & Tracker","Finance/self-help book. Plan tomorrow.",2,"Mind"],
["s14","22:30","05:15","Sleep (7 hours)","Phone screen strictly off.",2,"Body"]];
const HABITS=[ // [id,label,weight,category]
["nopmo","No porn / no PMO today",10,"Character"],["gaze","No lustful gazing / inappropriate scrolling",5,"Character"],
["notox","No toxicity (abuse, arguments, gheebat)",6,"Character"],["noneg","No negativity / self-pity / negative self-talk",3,"Character"],
["lowgaze","Lowered gaze (ghadd al-basar) practiced",3,"Character"],["nosmoke","No smoking / nasha / junk or sugar binge",3,"Character"],
["nodoom","No doomscrolling (within limit)",3,"Character"],["truth","Spoke truthfully, kept every promise",3,"Character"],
["fajr","Fajr on time",4,"Deen"],["dhuhr","Dhuhr on time",4,"Deen"],["asr","Asr on time",4,"Deen"],["maghrib","Maghrib on time",4,"Deen"],["isha","Isha on time",4,"Deen"],
["sunnah","Sunnah prayers / Witr",2,"Deen"],["adhkar","Morning & evening adhkar",2,"Deen"],["istighfar","Istighfar & salawat",1,"Deen"],
["sadaqah","Gave sadaqah / one good deed",1,"Deen"],["tahajjud","EXTRA: Dua / Tahajjud / sincere dua for guidance",1,"Deen"],
["water","Drank 3+ litres water",2,"Body"],["protein","Protein target hit",2,"Body"],["steps","8,000+ steps",1,"Body"],["sleep","Slept by 10:30 PM",2,"Body"],
["stretch","Stretching / mobility 10 min",1,"Body"],["skin","Skincare, grooming, clean clothes",1,"Body"],
["study","RBI study hours done",3,"Career"],["mock","Mock test / quiz completed",2,"Career"],
["fin","Learned one finance/economics concept",2,"Mind"],["read","Read 10+ pages",1,"Mind"],["grat","Gratitude: 3 things",1,"Mind"],
["plan","EXTRA: Planned tomorrow's top 3 tasks",1,"Mind"],["phone","EXTRA: Phone-free first hour after waking",2,"Character"],
["family","Real time with parents/family",2,"Relationship"],["gf","Calm & respectful with girlfriend, no ego fights",2,"Relationship"],["help","Called or helped one person",1,"Relationship"]];
const CATS=["Deen","Career","Body","Mind","Character","Relationship"];
const KEYS=[["nopmo","No-PMO"],["fajr","Fajr on time"],["s10","Gym"],["s3","RBI study"]];
const QUOTES=["Verily, with hardship comes ease. (Quran 94:6)","Allah does not burden a soul beyond its capacity. (Quran 2:286)","Remember Me; I will remember you. (Quran 2:152)",
"Actions are judged by intentions. (Hadith, Bukhari & Muslim)","The strong one is he who controls himself in anger. (Hadith, Bukhari & Muslim)","The best deeds are the consistent ones, even if small. (Hadith, Bukhari & Muslim)",
"Whoever believes in Allah and the Last Day, let him speak good or keep silent. (Hadith, Bukhari & Muslim)","We are what we repeatedly do. Excellence is a habit. (Will Durant)","Discipline is choosing between what you want now and what you want most. (Common saying)",
"Small steps, taken daily, move mountains. (Common saying)"];
/* ===== STORAGE ===== */
const KEY="dos_v1";let db=JSON.parse(localStorage.getItem(KEY)||"{}");
const save=()=>localStorage.setItem(KEY,JSON.stringify(db));
const pad=n=>String(n).padStart(2,"0");
const dk=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const fromK=k=>new Date(k+"T00:00:00");
const todayK=()=>dk(new Date()); // recomputed each call, so midnight rollover is safe
const ent=k=>db[k]||(db[k]={ticks:{},numbers:{},urgeLog:[]});
let cur=todayK(),view="today",rng="Weekly",chart=null,lastDay=cur;
const ALL=[...SCHEDULE.map(s=>({id:s[0],w:s[5],c:s[6]})),...HABITS.map(h=>({id:h[0],w:h[2],c:h[3]}))];
/* ===== PURE ANALYTICS ===== */
const score=(k,cat)=>{const t=db[k]?.ticks||{};let a=0,b=0;ALL.forEach(i=>{if(cat&&i.c!==cat)return;b+=i.w;if(t[i.id])a+=i.w});return b?Math.round(100*a/b):0};
const lastN=(n,end=new Date())=>Array.from({length:n},(_,i)=>{const d=new Date(end);d.setDate(d.getDate()-(n-1-i));return dk(d)});
const avg=a=>a.length?Math.round(a.reduce((x,y)=>x+y,0)/a.length):0;
const avgScore=ks=>avg(ks.filter(k=>db[k]).map(k=>score(k)));
const streak=id=>{let d=new Date();if(!db[dk(d)]?.ticks?.[id])d.setDate(d.getDate()-1);let n=0;while(db[dk(d)]?.ticks?.[id]){n++;d.setDate(d.getDate()-1)}return n};
const best=id=>{let b=0,n=0;lastN(730).forEach(k=>{if(db[k]?.ticks?.[id]){n++;b=Math.max(b,n)}else n=0});return b};
const consist=(id,n)=>{const ks=lastN(n);return Math.round(100*ks.filter(k=>db[k]?.ticks?.[id]).length/n)};
const label=id=>(SCHEDULE.find(s=>s[0]===id)||[])[3]||(HABITS.find(h=>h[0]===id)||[])[1]||id;
const delta=(a,b)=>{const p=b?Math.round(100*(a-b)/b):0;return `${p>=0?"▲":"▼"} ${Math.abs(p)}% (${a}% vs ${b}%)`};
const heat=k=>`<div class="cell" title="${k}" style="${db[k]?`background:rgba(111,183,168,${.15+score(k)/120})`:""}"></div>`;
/* ===== UI ===== */
const $=s=>document.querySelector(s),app=$("#app");
const CK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>';
const row=(id,name,sub,time)=>`<div class="row"><div>${time?`<div class="t">${time}</div>`:""}<div>${name}</div>${sub?`<div class="p">${sub}</div>`:""}</div><button class="ck ${db[cur]?.ticks?.[id]?"on":""}" role="checkbox" aria-checked="${!!db[cur]?.ticks?.[id]}" aria-label="${name}" data-id="${id}">${CK}</button></div>`;
function ringHTML(){const s=score(cur),c=2*Math.PI*38;return `<div class="ring"><svg width="92" height="92" viewBox="0 0 92 92"><circle class="bg" cx="46" cy="46" r="38"/><circle class="fg" cx="46" cy="46" r="38" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-s/100)}"/></svg><b>${s}%</b></div>`}
function hijri(d){try{return new Intl.DateTimeFormat("en-u-ca-islamic",{day:"numeric",month:"long",year:"numeric"}).format(d)}catch(_){return""}}
function renderToday(){const d=fromK(cur),h=d.getHours(),doy=Math.floor((d-new Date(d.getFullYear(),0,0))/864e5);
const s=score(cur),isT=cur===todayK();
app.innerHTML=`<div class="card hd"><div><h1>${d.toLocaleDateString(undefined,{weekday:"long",day:"numeric",month:"short",year:"numeric"})}</h1><div class="mut">${hijri(d)}</div><div class="mut">Assalamu alaikum. Be honest, be gentle.</div></div><div id="rg">${ringHTML()}</div></div>
<div class="q">${QUOTES[doy%QUOTES.length]}</div><div id="cel" class="card" ${s>=90?"":"hidden"}>MashaAllah, strong day.</div>
<div class="hd"><button class="btn" id="pv" aria-label="Previous day">‹ Prev</button><span class="mut">${isT?"Today":"Past day"}</span><button class="btn" id="nx" ${isT?"disabled":""} aria-label="Next day">Next ›</button></div>
<div class="two"><section><h2>Schedule</h2><div class="card">${SCHEDULE.map(x=>row(x[0],x[3],x[4],x[1]+"–"+x[2])).join("")}</div></section>
<aside><h2>Character & Habits</h2>${CATS.map(c=>{const hs=HABITS.filter(h=>h[3]===c);return hs.length?`<div class="card"><h3>${c}</h3>${hs.map(h=>row(h[0],h[1])).join("")}</div>`:""}).join("")}</aside></div>`;
$("#pv").onclick=()=>{const x=fromK(cur);x.setDate(x.getDate()-1);cur=dk(x);renderToday()};
$("#nx").onclick=()=>{const x=fromK(cur);x.setDate(x.getDate()+1);if(dk(x)<=todayK()){cur=dk(x);renderToday()}};}
document.addEventListener("click",e=>{const b=e.target.closest(".ck");if(b&&view==="today"){if(cur>todayK())return;const t=ent(cur).ticks,id=b.dataset.id;t[id]=!t[id];save();b.classList.toggle("on",t[id]);b.setAttribute("aria-checked",t[id]);$("#rg").innerHTML=ringHTML();$("#cel").hidden=score(cur)<90}
const n=e.target.closest("#nav button");if(n){view=n.dataset.v;document.querySelectorAll("#nav button").forEach(x=>x.classList.toggle("on",x===n));render()}
if(Notification&&Notification.permission==="default"&&!localStorage.dos_asked){localStorage.dos_asked=1;Notification.requestPermission()}});
function render(){if(chart){chart.destroy();chart=null}({today:renderToday,progress:renderProgress,journal:renderJournal})[view]();scrollTo(0,0)}
/* ===== PROGRESS ===== */
function draw(type,labels,data,max=100,cfg={}){const c=document.createElement("canvas");$("#ch").appendChild(c);if(typeof Chart==="undefined"){$("#ch").innerHTML='<p class="mut">Charts need the Chart.js file (open once online to cache it).</p>';return}
chart=new Chart(c,{type,data:{labels,datasets:[{data,backgroundColor:"rgba(111,183,168,.5)",borderColor:"#6fb7a8",tension:.3,...cfg}]},options:{scales:type==="radar"?{r:{min:0,max,grid:{color:"#263241"},ticks:{display:false}}}:{y:{min:0,max,grid:{color:"#263241"}},x:{grid:{display:false}}},plugins:{legend:{display:false}}}})}
function renderProgress(){const T=new Date(),w=lastN(7),sc=w.map(k=>score(k)),pw=lastN(7,new Date(T.getTime()-7*864e5)),m=lastN(30),pm=lastN(30,new Date(T.getTime()-30*864e5));
let extra="";
if(rng==="Weekly")extra=`<p>Avg <b>${avg(sc)}%</b> · Best ${Math.max(...sc)}% · Worst ${Math.min(...sc)}%</p>`;
if(rng==="Monthly")extra=`<div class="grid">${m.map(heat).join("")}</div>`;
if(rng==="Yearly"){const y=lastN(365);extra=`<div class="grid yr">${y.map(heat).join("")}</div>`}
const rows=ALL.map(i=>({id:i.id,a:consist(i.id,7),b:consist(i.id,30),c:consist(i.id,90)})).sort((x,y)=>x.b-y.b),weak=rows.slice(0,3).map(r=>label(r.id)),strong=rows[rows.length-1];
const review=`Weekly review: strongest habit "${label(strong.id)}", weakest "${label(rows[0].id)}". Suggestion: attach "${label(rows[0].id)}" to a fixed time tomorrow.`;
app.innerHTML=`<h1>Progress</h1><div class="seg">${["Daily","Weekly","Monthly","Yearly"].map(r=>`<button class="btn ${r===rng?"on":""}" data-r="${r}">${r}</button>`).join("")}</div>
<div class="card"><div id="ch"></div>${extra}</div>
<div class="card"><h3>Am I growing?</h3><p>Week: ${delta(avgScore(w),avgScore(pw))}</p><p>Month: ${delta(avgScore(m),avgScore(pm))}</p>${new Date().getDay()===0?`<p>${review}</p>`:`<p class="mut">${review}</p>`}</div>
<div class="card"><h3>Streaks (current / best)</h3>${KEYS.map(k=>`<div class="row"><span>${k[1]}</span><b>${streak(k[0])} / ${best(k[0])} days</b></div>`).join("")}</div>
<div class="card"><h3>Focus on these 3 weak habits</h3><p>${weak.join(" · ")}</p><table><tr><th>Habit</th><th>7d</th><th>30d</th><th>90d</th></tr>${rows.map(r=>`<tr><td>${label(r.id)}</td><td>${r.a}%</td><td>${r.b}%</td><td>${r.c}%</td></tr>`).join("")}</table></div>`;
document.querySelectorAll("[data-r]").forEach(b=>b.onclick=()=>{rng=b.dataset.r;render()});
if(rng==="Daily")draw("radar",CATS,CATS.map(c=>score(cur,c)));
if(rng==="Weekly")draw("bar",w.map(k=>k.slice(5)),sc);
if(rng==="Monthly")draw("line",m.map(k=>k.slice(8)),m.map(k=>score(k)));
if(rng==="Yearly"){const y=lastN(365),by={};y.forEach(k=>{const mo=k.slice(0,7);(by[mo]=by[mo]||[]).push(k)});draw("bar",Object.keys(by),Object.values(by).map(avgScore))}}
/* ===== JOURNAL / LOGS / BACKUP / REMINDERS ===== */
function renderJournal(){const e=ent(cur),n=e.numbers;
const sel=(f)=>[1,2,3,4,5].map(v=>`<button class="btn ${e[f]===v?"on":""}" data-f="${f}" data-v="${v}">${f==="mood"?["😞","😕","😐","🙂","😊"][v-1]:v}</button>`).join("");
app.innerHTML=`<h1>Journal · ${cur}</h1>
<div class="card"><p>Mood</p><div class="seg">${sel("mood")}</div><p>Energy</p><div class="seg">${sel("energy")}</div></div>
<div class="card"><label>Study hours<input type="number" step="0.5" min="0" data-n="studyHours" value="${n.studyHours??""}"></label><label>Mock score<input type="number" data-n="mockScore" value="${n.mockScore??""}"></label><label>Body weight (kg)<input type="number" step="0.1" data-n="weight" value="${n.weight??""}"></label>
<p class="mut">Monthly: note chest / waist / arms below and take a progress photo.</p><label>What went well / fix tomorrow<textarea rows="4" id="note">${e.note||""}</textarea></label></div>
<div class="card"><button class="btn g" id="urgeb">I'm having an urge</button><p>No-PMO streak: <b>${streak("nopmo")}</b> days · Longest: <b>${best("nopmo")}</b> · Urges resisted today: ${(e.urgeLog||[]).length}</p></div>
<div class="card"><h3>Reminders & Backup</h3><button class="btn" id="notif">Enable notifications</button><button class="btn" id="ics">Download Calendar Alarms (.ics)</button><button class="btn" id="exp">Export Backup</button><label class="btn" style="display:inline-grid;place-items:center">Import Backup<input type="file" id="imp" accept=".json" hidden></label>
<p class="mut">Notifications only fire while the app is open or recently active. For guaranteed alarms, import the .ics into Google Calendar.</p></div>`;
document.querySelectorAll("[data-f]").forEach(b=>b.onclick=()=>{ent(cur)[b.dataset.f]=+b.dataset.v;save();renderJournal()});
document.querySelectorAll("[data-n]").forEach(i=>i.onchange=()=>{ent(cur).numbers[i.dataset.n]=i.value===""?null:+i.value;save()});
$("#note").oninput=ev=>{ent(cur).note=ev.target.value;save()};
$("#urgeb").onclick=urge;$("#notif").onclick=()=>Notification.requestPermission().then(p=>alert("Notifications: "+p));
$("#ics").onclick=ics;$("#exp").onclick=()=>dl("discipline-backup-"+todayK()+".json",JSON.stringify(db),"application/json");
$("#imp").onchange=ev=>{const f=ev.target.files[0];if(!f)return;f.text().then(t=>{try{const o=JSON.parse(t);if(typeof o!=="object")throw 0;db=o;save();alert("Backup imported.");render()}catch(_){alert("Invalid backup file.")}})}}
function dl(name,txt,type){const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([txt],{type}));a.download=name;a.click()}
function urge(){const u=$("#urge");let s=60;u.hidden=false;
u.innerHTML=`<h1>Pause. Breathe.</h1><div class="big" id="tm">60</div><p id="br">Breathe in…</p>
<div class="card"><p>"Do not approach unlawful sexual intercourse." (Quran 17:32)</p><p>"Tell the believing men to lower their gaze and guard their chastity." (Quran 24:30)</p><p>Allah is watching over you (Quran 4:1). He loves those who turn back to Him.</p></div>
<div class="card">Make wudu · Cold shower · Walk outside · Do 20 pushups · Call a friend</div><button class="btn g" id="dn" disabled>I resisted</button><button class="btn" id="cx">Close</button>`;
const iv=setInterval(()=>{s--;$("#tm").textContent=s;$("#br").textContent=s%8<4?"Breathe in…":"Breathe out…";if(s<=0){clearInterval(iv);$("#dn").disabled=false}},1000);
$("#cx").onclick=()=>{clearInterval(iv);u.hidden=true};
$("#dn").onclick=()=>{ent(todayK()).urgeLog.push(Date.now());save();u.hidden=true;render()}}
const PRAY=[["Fajr","05:15"],["Dhuhr","13:30"],["Asr","17:15"],["Maghrib","18:30"],["Isha","20:45"]]; // edit prayer times here
function ics(){const L=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//DisciplineOS//EN"],now=new Date().toISOString().replace(/[-:]|\.\d+/g,"");
const add=(n,t,key)=>{const [h,m]=t.split(":"),ds=dk(new Date()).replace(/-/g,"");L.push("BEGIN:VEVENT",`UID:${n.replace(/\W/g,"")}${t}@dos`,`DTSTAMP:${now}`,`DTSTART:${ds}T${h}${m}00`,"DURATION:PT15M","RRULE:FREQ=DAILY",`SUMMARY:${n}`,"BEGIN:VALARM","ACTION:DISPLAY",`DESCRIPTION:${n}`,"TRIGGER:PT0S","END:VALARM");
if(key)L.push("BEGIN:VALARM","ACTION:DISPLAY",`DESCRIPTION:${n} in 5 min`,"TRIGGER:-PT5M","END:VALARM");L.push("END:VEVENT")};
SCHEDULE.forEach(s=>add(s[3],s[1],s[5]>=3));PRAY.forEach(p=>add("Time for "+p[0]+" (gentle reminder)",p[1],true));add("Fill Discipline OS tracker","22:00",false);
L.push("END:VCALENDAR");dl("discipline-alarms.ics",L.join("\r\n"),"text/calendar")}
/* ===== IN-APP REMINDERS (fire only while app is open) ===== */
let fired="";setInterval(()=>{const n=new Date(),hm=pad(n.getHours())+":"+pad(n.getMinutes());
if(todayK()!==lastDay){if(cur===lastDay)cur=todayK();lastDay=todayK();render()}
if(fired===hm||!("Notification" in window)||Notification.permission!=="granted")return;
const s=SCHEDULE.find(x=>x[1]===hm);if(!s)return;fired=hm;
navigator.serviceWorker.ready.then(r=>r.showNotification(hm==="22:00"?"Time to fill your tracker":hm+" · "+s[3],{body:s[4],icon:"icons/icon-192.png"}))},20000);
if("serviceWorker"in navigator)addEventListener("load",()=>navigator.serviceWorker.register("service-worker.js"));
render();

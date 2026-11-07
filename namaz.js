/* Rakat plan (Hanafi). Edit freely. [label, rakat] */
const RAKAT_FRI=[["Sunnat",4],["Jumu'ah Farz",2],["Sunnat",4],["Sunnat",2],["Nafl",2]];
const RAKAT={fajr:[["Sunnat",2],["Farz",2]],dhuhr:[["Sunnat",4],["Farz",4],["Sunnat",2],["Nafl",2]],asr:[["Sunnat",4],["Farz",4]],maghrib:[["Farz",3],["Sunnat",2],["Nafl",2]],isha:[["Sunnat",4],["Farz",4],["Sunnat",2],["Nafl",2],["Witr",3]]};
const ROM={
"1. Al-Fatiha":[["Bismillahir Rahmanir Raheem","Alhamdu lillahi Rabbil 'aalameen","Ar-Rahmanir Raheem","Maaliki yawmid deen","Iyyaaka na'budu wa iyyaaka nasta'een","Ihdinas siraatal mustaqeem","Siraatal lazeena an'amta 'alayhim ghayril maghdoobi 'alayhim wa lad daaalleen"],"Allah ki tareef, usi ki ibadat aur madad, aur seedhe raaste ki dua."],
"112. Al-Ikhlas":[["Qul huwallahu ahad","Allahus samad","Lam yalid wa lam yoolad","Wa lam yakun lahu kufuwan ahad"],"Allah ek hai, bey-niyaz hai; na uska koi beta, na wo kisi ka beta, aur koi uski barabari nahi."],
"108. Al-Kawthar":[["Inna a'taynaakal kawthar","Fa salli li Rabbika wanhar","Inna shaani'aka huwal abtar"],"Allah ne tumhe kawthar di; apne Rab ke liye namaz padho aur qurbani karo; tumhara dushman hi be-nishaan hai."],
"103. Al-Asr":[["Wal 'asr","Innal insaana lafee khusr","Illal lazeena aamanoo wa 'amilus saalihaati wa tawaasaw bil haqqi wa tawaasaw bis sabr"],"Zamane ki qasam, insaan nuksan me hai, siwaye imaan, nek amal, haq aur sabr ki nasihat karne walon ke."],
"110. An-Nasr":[["Iza jaa'a nasrullahi wal fath","Wa ra'aytan naasa yadkhuloona fee deenillahi afwaajaa","Fa sabbih bihamdi Rabbika was taghfirh, innahu kaana tawwaabaa"],"Jab Allah ki madad aur fatah aaye, to apne Rab ki tasbeeh aur istighfar karo."],
"109. Al-Kafirun":[["Qul yaa ayyuhal kaafiroon","Laa a'budu maa ta'budoon","Wa laa antum 'aabidoona maa a'bud","Wa laa ana 'aabidum maa 'abattum","Wa laa antum 'aabidoona maa a'bud","Lakum deenukum wa liya deen"],"Mai us ki ibadat nahi karta jiski tum karte ho; tumhara deen tumhare liye, mera deen mere liye."],
"113. Al-Falaq":[["Qul a'oozu bi Rabbil falaq","Min sharri maa khalaq","Wa min sharri ghaasiqin iza waqab","Wa min sharrin naffaasaati fil 'uqad","Wa min sharri haasidin iza hasad"],"Subah ke Rab ki panah, har makhlooq, andheri raat, jaadu aur hasad ke shar se."],
"114. An-Nas":[["Qul a'oozu bi Rabbin naas","Malikin naas","Ilaahin naas","Min sharril waswaasil khannaas","Allazee yuwaswisu fee sudoorin naas","Minal jinnati wan naas"],"Insaanon ke Rab ki panah, waswase daalne walon ke shar se, jinn aur insaan dono se."],
"105. Al-Fil":[["Alam tara kayfa fa'ala Rabbuka bi ashaabil feel","Alam yaj'al kaydahum fee tadleel","Wa arsala 'alayhim tayran abaabeel","Tarmeehim bihijaaratim min sijjeel","Fa ja'alahum ka'asfim ma'kool"],"Allah ne haathi walon (Abraha ki fauj) ke saath kya kiya: parindon ne kankar maarke unhe tabaah kar diya."],
"106. Quraysh":[["Li eelaafi Quraysh","Eelaafihim rihlatash shitaa'i was sayf","Fal ya'budoo Rabba haazal bayt","Allazee at'amahum min joo'in wa aamanahum min khawf"],"Quraysh ko safar ki aadat; Kaabe ke Rab ki ibadat karo jisne bhookh me khilaya aur khauf se amaan di."]};
const mem=()=>{try{return JSON.parse(localStorage.dos_mem||"{}")}catch(_){return{}}};
const S=(n,t,a)=>{const m=mem()[n]||{},r=ROM[n],old=m.rev&&(Date.now()-new Date(m.rev))/864e5>7;return `<div class="card"><h3>${n}</h3><p class="mut">${t}</p><div class="ar">${a.join("<br>")}</div>${r?`<p>${r[0].join("<br>")}</p><p class="mut">Matlab: ${r[1]}</p>`:""}${/^\d/.test(n)?`<button class="btn ${m.done?"on":""}" data-mem="${n}" data-act="done">${m.done?"Yaad hai ✓":"Yaad kiya?"}</button><button class="btn" data-mem="${n}" data-act="rev">Aaj revise kiya</button><span class="mut"> ${m.rev?"Last revise: "+m.rev:""}${old?" (revise karo!)":""}</span>`:""}</div>`};
const namazHTML=()=>`<h1>Namaz ka tarika</h1><p class="mut">Hanafi tarike ke mutabiq. Tajweed aur kisi bhi masle ke liye apne maulana/ustaad se zaroor confirm karo.</p>
<h2>2 rakat padhne ka tarika</h2><div class="card"><ol>
<li>Wudu karo, qibla ki taraf khade ho, dil me niyyat karo.</li>
<li>Takbir: "Allahu Akbar" kehke haath baandho (naaf ke neeche).</li>
<li>Sana, phir Ta'awwuz + Bismillah padho.</li>
<li><b>Surah Fatiha</b> padho, phir koi ek surat (jaise Ikhlas).</li>
<li>Ruku: "Allahu Akbar" kehke jhuko, 3 baar "Subhana Rabbiyal Azeem".</li>
<li>Seedhe khade ho: "Sami Allahu liman hamidah", phir "Rabbana lakal hamd".</li>
<li>Sajda: "Allahu Akbar", 3 baar "Subhana Rabbiyal A'la". Thoda baitho (jalsa), phir dusra sajda.</li>
<li>Dusri rakat: Fatiha + surat (Sana nahi), ruku, 2 sajde.</li>
<li>Qaida (baithna): Attahiyyat, Durood Ibrahim, Dua padho.</li>
<li>Salam: pehle daayen, phir baayen "Assalamu alaikum wa rahmatullah".</li></ol>
<p>3 ya 4 rakat me: 2 rakat ke baad Attahiyyat padh ke khade ho jao. Farz ki 3rd/4th rakat me sirf Fatiha. Sunnat/nafl/witr ki har rakat me Fatiha + surat.</p></div>
<h2>Kaunsi surat kab</h2><div class="card"><p>Rakat 1 aur 2 me Fatiha ke baad koi bhi surat. Shuru me ye order yaad karo: Ikhlas, Kawthar, Asr, Nasr, Kafirun, Falaq, Nas, Fil, Quraysh.</p>
<p>Aasan plan: Fajr (Kafirun + Ikhlas), Dhuhr (Asr + Nasr), Asr (Kawthar + Ikhlas), Maghrib (Quraysh + Ikhlas), Isha (Falaq + Nas). Witr me: Fatiha + Ikhlas (har rakat), 3rd me surat ke baad Takbir, Dua Qunoot, phir ruku.</p></div>
<h2>Namaz ki dua (Arabic)</h2>
${S("Ta'awwuz","Surat se pehle",["أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ"])}
${S("Sana","Takbir ke baad, pehli rakat me",["سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَٰهَ غَيْرُكَ"])}
${S("Ruku, Qauma, Sajda","3 baar tasbeeh",["سُبْحَانَ رَبِّيَ الْعَظِيمِ (ruku)","سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا لَكَ الْحَمْدُ (qauma)","سُبْحَانَ رَبِّيَ الْأَعْلَىٰ (sajda)"])}
${S("Attahiyyat","Qaida me",["التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ"])}
${S("Durood Ibrahim","Aakhri qaida me",["اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ","اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ"])}
${S("Dua (salam se pehle)","",["رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ"])}
${S("Dua Qunoot","Witr ki 3rd rakat me",["اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ وَنَشْكُرُكَ وَلَا نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ","اللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ وَإِلَيْكَ نَسْعَىٰ وَنَحْفِدُ وَنَرْجُو رَحْمَتَكَ وَنَخْشَىٰ عَذَابَكَ إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحِقٌ"])}
<h2>Jumu'ah (Friday)</h2><div class="card"><ol><li>Ghusl karo, saaf kapde pehno, khushbu lagao, naakhun aur baal saaf rakho.</li><li>Jaldi masjid pahucho. Khutbah shuru ho to baat ya phone mat karo, khamoshi se suno.</li><li>Rakat (Hanafi): 4 sunnat (khutbah se pehle), 2 farz (jamaat ke saath), phir 4 sunnat, 2 sunnat, 2 nafl.</li><li>Surah Kahf padho, durood zyada bhejo, aur Asr ke baad Maghrib tak dua karo (Jumu'ah ka khaas waqt).</li></ol></div>
<h2>Surah (poori)</h2>
${S("1. Al-Fatiha","Har rakat me",["بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ","الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ","الرَّحْمَٰنِ الرَّحِيمِ","مَالِكِ يَوْمِ الدِّينِ","إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ","اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ","صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ"])}
${S("112. Al-Ikhlas","4 ayat",["قُلْ هُوَ اللَّهُ أَحَدٌ","اللَّهُ الصَّمَدُ","لَمْ يَلِدْ وَلَمْ يُولَدْ","وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ"])}
${S("108. Al-Kawthar","3 ayat",["إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ","فَصَلِّ لِرَبِّكَ وَانْحَرْ","إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ"])}
${S("103. Al-Asr","3 ayat",["وَالْعَصْرِ","إِنَّ الْإِنسَانَ لَفِي خُسْرٍ","إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ"])}
${S("110. An-Nasr","3 ayat",["إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ","وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا","فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا"])}
${S("109. Al-Kafirun","6 ayat",["قُلْ يَا أَيُّهَا الْكَافِرُونَ","لَا أَعْبُدُ مَا تَعْبُدُونَ","وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ","وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ","وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ","لَكُمْ دِينُكُمْ وَلِيَ دِينِ"])}
${S("113. Al-Falaq","5 ayat",["قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ","مِن شَرِّ مَا خَلَقَ","وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ","وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ","وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ"])}
${S("114. An-Nas","6 ayat",["قُلْ أَعُوذُ بِرَبِّ النَّاسِ","مَلِكِ النَّاسِ","إِلَٰهِ النَّاسِ","مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ","الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ","مِنَ الْجِنَّةِ وَالنَّاسِ"])}
${S("105. Al-Fil","5 ayat",["أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ","أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ","وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ","تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ","فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ"])}
${S("106. Quraysh","4 ayat",["لِإِيلَافِ قُرَيْشٍ","إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ","فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ","الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ"])}`;

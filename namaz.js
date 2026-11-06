/* Rakat plan (Hanafi). Edit freely. [label, rakat] */
const RAKAT={fajr:[["Sunnat",2],["Farz",2]],dhuhr:[["Sunnat",4],["Farz",4],["Sunnat",2],["Nafl",2]],asr:[["Sunnat",4],["Farz",4]],maghrib:[["Farz",3],["Sunnat",2],["Nafl",2]],isha:[["Sunnat",4],["Farz",4],["Sunnat",2],["Nafl",2],["Witr",3]]};
const S=(n,t,a)=>`<div class="card"><h3>${n}</h3><p class="mut">${t}</p><div class="ar">${a.join("<br>")}</div></div>`;
const NAMAZ_HTML=`<h1>Namaz ka tarika</h1><p class="mut">Hanafi tarike ke mutabiq. Tajweed aur kisi bhi masle ke liye apne maulana/ustaad se zaroor confirm karo.</p>
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

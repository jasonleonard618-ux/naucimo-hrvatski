// Conversations, grammar and pronunciation for Naučimo. Loaded after content.js.
// Standard Croatian (ijekavian). Written by Claude: still needs a native speaker's review.
Object.assign(window.COURSE, {

  // Each line is [speaker, croatian, english, note]. Speaker A uses the second (female) voice, B uses George.
  dialogues: [
    { id: "kbok", hr: "Hoćeš se igrati?", en: "Want to play?", pic: "🧒", level: "Easy", kids: true, grammar: "biti",
      lines: [
        ["A", "Bok! Kako se zoveš?", "Hi! What's your name?"],
        ["B", "Zovem se Luka. A ti?", "My name is Luka. And you?"],
        ["A", "Ja sam Ana. Koliko imaš godina?", "I'm Ana. How old are you?"],
        ["B", "Imam šest godina.", "I'm six."],
        ["A", "I ja! Hoćeš se igrati?", "Me too! Do you want to play?"],
        ["B", "Hoću! Imam loptu.", "Yes! I have a ball."]
      ],
      questions: [
        { q: "Kako se zove dječak?", en: "What is the boy called?", options: ["Ana", "Luka", "Rex"], answer: 1 },
        { q: "Koliko godina ima Luka?", en: "How old is Luka?", options: ["šest", "osam", "pet"], answer: 0 }
      ]},
    { id: "kpas", hr: "Moj pas", en: "My dog", pic: "🐕", level: "Easy", kids: true, grammar: "gender",
      lines: [
        ["A", "Imaš li psa?", "Do you have a dog?"],
        ["B", "Imam! Moj pas se zove Rex.", "I do! My dog is called Rex."],
        ["A", "Kakav je?", "What's he like?"],
        ["B", "Velik je i smeđ.", "He's big and brown."],
        ["A", "Ja imam mačku. Ona je mala i crna.", "I have a cat. She's small and black."],
        ["B", "Super! Volim mačke.", "Great! I love cats."]
      ],
      questions: [
        { q: "Kakav je Rex?", en: "What is Rex like?", options: ["mali i crn", "velik i smeđ", "velik i bijel"], answer: 1 },
        { q: "Što ima Ana?", en: "What does Ana have?", options: ["psa", "mačku", "konja"], answer: 1 }
      ]},
    { id: "krucak", hr: "Ručak", en: "Lunchtime", pic: "🍲", level: "Easy", kids: true, grammar: "neg",
      lines: [
        ["A", "Jesi li gladan?", "Are you hungry?"],
        ["B", "Jesam! Što je za ručak?", "Yes! What's for lunch?"],
        ["A", "Juha i piletina.", "Soup and chicken."],
        ["B", "Mmm! A može sladoled?", "Mmm! And can I have ice cream?"],
        ["A", "Može, ali poslije ručka!", "Yes, but after lunch!"]
      ],
      questions: [
        { q: "Što je za ručak?", en: "What's for lunch?", options: ["riba i riža", "juha i piletina", "kruh i sir"], answer: 1 },
        { q: "Kada je sladoled?", en: "When is the ice cream?", options: ["sada", "poslije ručka", "sutra"], answer: 1 }
      ]},
    { id: "upoznavanje", hr: "Upoznavanje", en: "Meeting someone", pic: "🤝", level: "Beginner", grammar: "biti",
      lines: [
        ["A", "Bok! Ja sam Marija. Kako se zoveš?", "Hi! I'm Marija. What's your name?"],
        ["B", "Bok, Marija! Zovem se Ivan.", "Hi Marija! My name is Ivan."],
        ["A", "Drago mi je. Odakle si?", "Nice to meet you. Where are you from?"],
        ["B", "Iz Amerike sam. A ti?", "I'm from America. And you?"],
        ["A", "Ja sam iz Splita. Govoriš li hrvatski?", "I'm from Split. Do you speak Croatian?"],
        ["B", "Govorim malo hrvatski. Učim.", "I speak a little Croatian. I'm learning."],
        ["A", "Odlično! Dobro ti ide.", "Excellent! You're doing well."]
      ],
      questions: [
        { q: "Odakle je Marija?", en: "Where is Marija from?", options: ["iz Amerike", "iz Splita", "iz Zagreba"], answer: 1 },
        { q: "Govori li Ivan hrvatski?", en: "Does Ivan speak Croatian?", options: ["da, malo", "ne, nimalo", "da, odlično"], answer: 0 }
      ]},
    { id: "kafic", hr: "U kafiću", en: "At the café", pic: "☕", level: "Beginner", grammar: "acc",
      lines: [
        ["A", "Dobar dan! Izvolite.", "Good afternoon! What can I get you?"],
        ["B", "Dobar dan. Jednu kavu s mlijekom, molim.", "Good afternoon. One coffee with milk, please."],
        ["A", "Može. Još nešto?", "Sure. Anything else?"],
        ["B", "I jedan sok od naranče.", "And an orange juice."],
        ["A", "Veliki ili mali?", "Large or small?"],
        ["B", "Mali, molim.", "Small, please."],
        ["A", "Izvolite. To je pet eura.", "Here you go. That's five euros."],
        ["B", "Hvala lijepa!", "Thank you very much!"]
      ],
      questions: [
        { q: "Što gost pije?", en: "What does the guest drink?", options: ["čaj i vodu", "kavu i sok", "mlijeko"], answer: 1 },
        { q: "Koliko sve košta?", en: "How much is it all?", options: ["pet eura", "dva eura", "deset eura"], answer: 0 }
      ]},
    { id: "trznica", hr: "Na tržnici", en: "At the market", pic: "🍓", level: "Beginner", grammar: "numbers",
      lines: [
        ["A", "Dobro jutro! Što trebate?", "Good morning! What do you need?"],
        ["B", "Dobro jutro. Imate li jagode?", "Good morning. Do you have strawberries?"],
        ["A", "Imam. Jagode su danas jako lijepe.", "I do. The strawberries are really nice today."],
        ["B", "Koliko koštaju?", "How much are they?"],
        ["A", "Tri eura kilogram.", "Three euros a kilo."],
        ["B", "Dobro. Jedan kilogram i dvije jabuke, molim.", "OK. One kilo and two apples, please."],
        ["A", "Izvolite. Četiri eura.", "Here you go. Four euros."],
        ["B", "Hvala, doviđenja!", "Thanks, goodbye!"]
      ],
      questions: [
        { q: "Što kupac kupuje?", en: "What does the customer buy?", options: ["jagode i jabuke", "kruh i sir", "naranče"], answer: 0 },
        { q: "Koliko jabuka kupuje?", en: "How many apples does he buy?", options: ["jednu", "dvije", "pet"], answer: 1 }
      ]},
    { id: "obitelj", hr: "Imaš li djecu?", en: "Talking about family", pic: "👨‍👩‍👧‍👦", level: "Beginner", grammar: "acc",
      lines: [
        ["A", "Imaš li djecu?", "Do you have children?"],
        ["B", "Imam. Imam sina i kćer.", "I do. I have a son and a daughter."],
        ["A", "Koliko godina imaju?", "How old are they?"],
        ["B", "Sin ima osam godina, a kći ima pet.", "My son is eight and my daughter is five."],
        ["A", "A tvoja supruga? Govori li ona hrvatski?", "And your wife? Does she speak Croatian?"],
        ["B", "Da, i ona uči. Učimo zajedno!", "Yes, she's learning too. We're learning together!"]
      ],
      questions: [
        { q: "Koliko djece ima?", en: "How many children does he have?", options: ["jedno", "dvoje", "troje"], answer: 1 },
        { q: "Koliko godina ima kći?", en: "How old is the daughter?", options: ["pet", "osam", "šest"], answer: 0 }
      ]},
    { id: "put", hr: "Gdje je ljekarna?", en: "Asking the way", pic: "🗺️", level: "Beginner", grammar: "neg",
      lines: [
        ["B", "Oprostite, gdje je ljekarna?", "Excuse me, where is the pharmacy?"],
        ["A", "Ljekarna? Idite ravno pa lijevo.", "The pharmacy? Go straight on, then left."],
        ["B", "Je li daleko?", "Is it far?"],
        ["A", "Ne, blizu je. Pet minuta pješice.", "No, it's close. Five minutes on foot."],
        ["B", "Hvala lijepa!", "Thank you very much!"],
        ["A", "Nema problema.", "No problem."]
      ],
      questions: [
        { q: "Gdje je ljekarna?", en: "Where is the pharmacy?", options: ["ravno pa lijevo", "ravno pa desno", "daleko"], answer: 0 },
        { q: "Je li ljekarna daleko?", en: "Is the pharmacy far?", options: ["da", "ne, blizu je"], answer: 1 }
      ]},
    { id: "plaza", hr: "Idemo plivati?", en: "At the beach", pic: "🏖️", level: "Beginner", grammar: "loc",
      lines: [
        ["A", "Kakvo je more danas?", "What's the sea like today?"],
        ["B", "More je toplo! Idemo plivati?", "The sea is warm! Shall we go swimming?"],
        ["A", "Može! Gdje su djeca?", "Sure! Where are the kids?"],
        ["B", "Djeca su na plaži. Igraju se s loptom.", "The kids are on the beach. They're playing with a ball."],
        ["A", "Poslije idemo na sladoled?", "Ice cream afterwards?"],
        ["B", "Naravno!", "Of course!"]
      ],
      questions: [
        { q: "Kakvo je more?", en: "What is the sea like?", options: ["hladno", "toplo"], answer: 1 },
        { q: "Gdje su djeca?", en: "Where are the kids?", options: ["u kući", "na plaži", "u školi"], answer: 1 }
      ]},
    { id: "lijecnik", hr: "Kod liječnice", en: "At the doctor's", pic: "🩺", level: "Beginner", grammar: "neg",
      lines: [
        ["A", "Dobar dan. Što vas boli?", "Good afternoon. What hurts?"],
        ["B", "Boli me trbuh.", "My stomach hurts."],
        ["A", "Od kada?", "Since when?"],
        ["B", "Od jučer. I jako sam umoran.", "Since yesterday. And I'm very tired.", "A woman says 'umorna sam'."],
        ["A", "Imate li temperaturu?", "Do you have a temperature?"],
        ["B", "Mislim da nemam.", "I don't think so."],
        ["A", "Dobro. Pijte puno vode i odmarajte se.", "OK. Drink lots of water and rest."],
        ["B", "Hvala, doktorice.", "Thank you, doctor."]
      ],
      questions: [
        { q: "Što ga boli?", en: "What hurts?", options: ["glava", "trbuh", "noga"], answer: 1 },
        { q: "Što treba piti?", en: "What should he drink?", options: ["kavu", "vodu", "sok"], answer: 1 }
      ]},
    { id: "vikend", hr: "Vikend", en: "The weekend", pic: "🌊", level: "Next step", grammar: "past",
      lines: [
        ["A", "Što si radio za vikend?", "What did you do at the weekend?", "To a woman: 'Što si radila?'"],
        ["B", "U subotu sam bio na moru.", "On Saturday I was at the seaside.", "A woman says 'bila sam'."],
        ["A", "Super! Je li bilo toplo?", "Great! Was it warm?"],
        ["B", "Bilo je jako toplo. Plivao sam i čitao knjigu.", "It was very warm. I swam and read a book.", "A woman says 'plivala sam i čitala'."],
        ["A", "A u nedjelju?", "And on Sunday?"],
        ["B", "U nedjelju smo ručali kod bake.", "On Sunday we had lunch at grandma's."]
      ],
      questions: [
        { q: "Gdje je bio u subotu?", en: "Where was he on Saturday?", options: ["na moru", "kod bake", "u gradu"], answer: 0 },
        { q: "Što je radio na moru?", en: "What did he do at the seaside?", options: ["spavao i jeo", "plivao i čitao", "radio"], answer: 1 }
      ]},
    { id: "sutra", hr: "Planovi za sutra", en: "Plans for tomorrow", pic: "📅", level: "Next step", grammar: "future",
      lines: [
        ["A", "Što ćeš raditi sutra?", "What will you do tomorrow?"],
        ["B", "Sutra ću raditi do četiri sata.", "Tomorrow I'll work until four."],
        ["A", "A poslije?", "And afterwards?"],
        ["B", "Poslije ću kuhati večeru. Hoćeš li doći?", "Afterwards I'll cook dinner. Will you come?"],
        ["A", "Hoću, hvala! Što ćeš kuhati?", "I will, thanks! What will you cook?"],
        ["B", "Ribu i krumpir.", "Fish and potatoes."],
        ["A", "Odlično. Vidimo se sutra!", "Great. See you tomorrow!"]
      ],
      questions: [
        { q: "Do kada radi sutra?", en: "Until when is he working tomorrow?", options: ["do dva", "do četiri", "do pet"], answer: 1 },
        { q: "Što će kuhati?", en: "What will he cook?", options: ["juhu", "ribu i krumpir", "tjesteninu"], answer: 1 }
      ]}
  ],

  // Word forms in the conversations that aren't plain course words: form -> [meaning, base course word (for "known" estimates)].
  // A base of "*" marks a very common little word that counts as known from the start.
  lexicon: {
    "hoćeš": ["do you want / will you", "htjeti"], "hoću": ["I want / I will", "htjeti"], "igrati": ["to play", "igrati"], "se": ["oneself (part of the verb)", "*"],
    "zoveš": ["you are called", "zovem se"], "zovem": ["I am called", "zovem se"], "zove": ["is called", "zovem se"], "ti": ["you", "*"], "ja": ["I", "*"], "sam": ["am", "*"], "si": ["are (you)", "*"], "je": ["is", "*"],
    "imaš": ["you have", "imati"], "imam": ["I have", "imati"], "ima": ["has", "imati"], "imate": ["you have (formal)", "imati"], "imaju": ["they have", "imati"],
    "godina": ["years", "godina"], "šest": ["six", "šest"], "loptu": ["ball (object form of lopta)", "lopta"], "a": ["and / but", "*"], "i": ["and / too", "*"],
    "li": ["(turns it into a question)", "*"], "psa": ["dog (object form of pas)", "pas"], "moj": ["my", "*"], "kakav": ["what kind / what … like", "kako"], "kakvo": ["what … like (for neuter words)", "kako"],
    "velik": ["big", "velik"], "smeđ": ["brown", "smeđ"], "mačku": ["cat (object form of mačka)", "mačka"], "ona": ["she", "*"], "mala": ["small (feminine)", "malen"], "crna": ["black (feminine)", "crn"],
    "super": ["great", "*"], "volim": ["I love", "voljeti"], "mačke": ["cats", "mačka"], "jesi": ["are you (in questions)", "biti"], "jesam": ["yes, I am", "biti"],
    "za": ["for", "*"], "mmm": ["mmm", "*"], "može": ["can / OK", "Može."], "ali": ["but", "*"], "poslije": ["after / afterwards", "*"], "ručka": ["lunch (after a word like 'poslije')", "ručak"],
    "marija": ["Marija (a name)", "*"], "ivan": ["Ivan (a name)", "*"], "luka": ["Luka (a name)", "*"], "ana": ["Ana (a name)", "*"], "rex": ["Rex (a dog's name)", "*"],
    "drago": ["glad (drago mi je = nice to meet you)", "drago mi je"], "mi": ["to me / we", "*"], "odakle": ["where from", "gdje"], "iz": ["from", "*"], "amerike": ["America (after 'iz')", "*"], "splita": ["Split (after 'iz')", "*"],
    "govoriš": ["you speak", "govoriti"], "govorim": ["I speak", "govoriti"], "govori": ["speaks", "govoriti"], "hrvatski": ["Croatian", "*"], "malo": ["a little", "*"], "učim": ["I'm learning", "učiti"], "uči": ["is learning", "učiti"], "učimo": ["we're learning", "učiti"],
    "odlično": ["excellent", "Odlično!"], "dobro": ["well / good / OK", "dobar"], "ide": ["goes (dobro ti ide = you're doing well)", "ići"],
    "jednu": ["one (object form, feminine)", "jedan"], "kavu": ["coffee (object form of kava)", "kava"], "s": ["with", "*"], "mlijekom": ["milk (after 's')", "mlijeko"], "još": ["more / else", "*"], "nešto": ["something", "*"],
    "od": ["of / from / since", "*"], "naranče": ["orange (after 'od')", "naranča"], "veliki": ["big / large", "velik"], "ili": ["or", "*"], "mali": ["small", "malen"], "to": ["that / it", "*"], "eura": ["euros", "*"], "lijepa": ["lovely (hvala lijepa = thanks a lot)", "lijep"],
    "trebate": ["you need (formal)", "*"], "jagode": ["strawberries", "jagoda"], "su": ["are", "*"], "jako": ["very", "*"], "lijepe": ["lovely (plural)", "lijep"], "koštaju": ["they cost", "Koliko košta?"],
    "kilogram": ["kilo", "*"], "dvije": ["two (for feminine words)", "dva"], "jabuke": ["apples", "jabuka"],
    "djecu": ["children (object form of djeca)", "djeca"], "sina": ["son (object form of sin)", "sin"], "kćer": ["daughter (object form of kći)", "kći"], "tvoja": ["your", "*"], "zajedno": ["together", "*"],
    "oprostite": ["excuse me", "oprostite"], "idite": ["go (instruction, formal)", "ići"], "pa": ["then", "*"], "minuta": ["minutes", "*"], "pješice": ["on foot", "*"], "nema": ["there's no", "Nema problema."], "problema": ["problem (nema problema = no problem)", "Nema problema."],
    "idemo": ["we go / let's go", "Idemo!"], "plivati": ["to swim", "plivati"], "toplo": ["warm", "toplo"], "plaži": ["beach (after 'na')", "plaža"], "igraju": ["they play", "igrati"], "loptom": ["ball (after 's')", "lopta"], "na": ["on / at / to", "*"], "naravno": ["of course", "Naravno."],
    "vas": ["you (formal)", "*"], "boli": ["hurts", "*"], "me": ["me", "*"], "kada": ["when", "kada"], "umoran": ["tired (said by a man)", "umoran"], "temperaturu": ["a temperature (object form)", "*"],
    "mislim": ["I think", "*"], "da": ["that / yes", "da"], "nemam": ["I don't have", "imati"], "pijte": ["drink (instruction, formal)", "piti"], "puno": ["a lot", "*"], "vode": ["water (after 'puno')", "voda"], "odmarajte": ["rest (instruction, formal)", "*"], "doktorice": ["doctor! (talking to a woman doctor)", "*"],
    "radio": ["did / worked (said by or about a man)", "raditi"], "vikend": ["weekend", "*"], "subotu": ["Saturday (after 'u')", "subota"], "bio": ["was (man)", "biti"], "moru": ["seaside / sea (after 'na')", "more"], "bilo": ["was (it)", "biti"],
    "plivao": ["swam (man)", "plivati"], "čitao": ["read (past, man)", "čitati"], "knjigu": ["book (object form of knjiga)", "knjiga"], "u": ["in / on / at", "*"], "nedjelju": ["Sunday (after 'u')", "nedjelja"], "smo": ["are (we)", "*"], "ručali": ["had lunch (we)", "ručak"], "kod": ["at (someone's place)", "*"], "bake": ["grandma (after 'kod')", "baka"],
    "ćeš": ["will (you)", "htjeti"], "ću": ["will (I)", "htjeti"], "raditi": ["to work / to do", "raditi"], "do": ["until", "*"], "sata": ["o'clock", "sat"], "kuhati": ["to cook", "kuhati"], "večeru": ["dinner (object form)", "večera"], "doći": ["to come", "*"], "ribu": ["fish (object form of riba)", "riba"], "vidimo": ["we see (vidimo se = see you)", "vidimo se"]
  },

  // Grammar units. Each drill is a sentence with a gap: s with ___ replaced by a gives the full sentence (it gets a recording).
  grammar: [
    { id: "biti", hr: "Biti", en: "To be: sam, si, je…", pic: "✨",
      examples: [["Ja sam Ivan.", "I'm Ivan."], ["Ti si moj prijatelj.", "You're my friend."], ["Mama je u kuhinji.", "Mum is in the kitchen."], ["Mi smo obitelj.", "We're a family."], ["Umoran sam.", "I'm tired."]],
      spot: { q: "\"Umoran sam\" has no word for \"I\". Why does that still work?", options: ["The form 'sam' already says who it is", "It's a mistake", "It means 'you are tired'"], answer: 0 },
      // Taught one step at a time: t heading, x explanation, how worked example, short reminder shown on a miss,
      // f isolated form drills (q cue, a answer, en meaning, o choices, alt other accepted answers).
      steps: [
        { t: "One short form for each person", x: "'To be' has six short forms: sam (I), si (you), je (he, she, it), smo (we), ste (you all, or polite 'you') and su (they). The form already says who, so ja, ti, on… are usually left out.", how: "Mi ___ obitelj. Who is it? mi = we, so the form is smo: Mi smo obitelj.", short: "ja sam, ti si, on/ona je, mi smo, vi ste, oni su.", ask: "Which form of 'to be' goes with this person?", f: [{ q: "ja", a: "sam" }, { q: "ti", a: "si" }, { q: "ona", a: "je" }, { q: "mi", a: "smo" }, { q: "vi", a: "ste" }, { q: "oni", a: "su" }] },
        { t: "Second place, never first", x: "These short words lean on the word before them, so they can't start a sentence. They sit in second place: 'Ja sam umoran', or drop ja and say 'Umoran sam'. 'Sam umoran' is wrong.", how: "I'm hungry, without 'ja': gladan goes first and sam second, so Gladan sam.", short: "sam, si, je… sit in second place: Umoran sam, never Sam umoran.", ask: "Say the same thing without the pronoun (ja, ti, mi…).", f: [{ q: "Ja sam umoran.", a: "Umoran sam.", en: "I'm tired." }, { q: "Ti si gladan.", a: "Gladan si.", en: "You're hungry." }, { q: "Mi smo sretni.", a: "Sretni smo.", en: "We're happy." }] },
        { t: "'Not' joins on: nisam, nije…", x: "For 'not', put ni- in front and write it as one word: nisam, nisi, nije, nismo, niste, nisu. Unlike sam, these can start a sentence: Nisam umoran.", how: "He isn't here: on goes with je, so 'not' is nije: On nije ovdje.", short: "'not' = ni- + the form, as one word: nisam, nisi, nije, nismo, niste, nisu.", ask: "Make it 'not'.", f: [{ q: "sam", a: "nisam" }, { q: "je", a: "nije" }, { q: "su", a: "nisu" }, { q: "smo", a: "nismo" }, { q: "si", a: "nisi" }] }
      ],
      table: { head: ["", "is", "is not"], rows: [["ja", "sam", "nisam"], ["ti", "si", "nisi"], ["on / ona / ono", "je", "nije"], ["mi", "smo", "nismo"], ["vi", "ste", "niste"], ["oni / one / ona", "su", "nisu"]] },
      drills: [
        { s: "Ja ___ umoran.", a: "sam", o: ["sam", "si", "je"], en: "I'm tired.", r: 0 },
        { s: "Ti ___ moj prijatelj.", a: "si", o: ["si", "sam", "su"], en: "You're my friend.", r: 0 },
        { s: "Mama ___ u kuhinji.", a: "je", o: ["je", "smo", "ste"], en: "Mum is in the kitchen.", r: 0 },
        { s: "Mi ___ obitelj.", a: "smo", o: ["smo", "su", "ste"], en: "We're a family.", r: 0 },
        { s: "Djeca ___ na plaži.", a: "su", o: ["su", "je", "smo"], en: "The children are on the beach.", r: 0 },
        { s: "Kako ___?", a: "ste", o: ["ste", "si", "smo"], en: "How are you? (formal)", r: 0 },
        { s: "On ___ gladan.", a: "nije", o: ["nije", "nisam", "ne"], en: "He isn't hungry.", r: 2 },
        { s: "Ja ___ umorna.", a: "nisam", o: ["nisam", "nije", "ne"], en: "I'm not tired. (a woman)", r: 2 },
        { s: "Gladan ___.", a: "sam", o: ["sam", "je", "su"], en: "I'm hungry. (a man)", r: 1 }
      ]},
    { id: "present", hr: "Sadašnje vrijeme", en: "Present tense: -am, -im, -em", pic: "🏃",
      examples: [["Čitam knjigu.", "I'm reading a book."], ["Govorim malo hrvatski.", "I speak a little Croatian."], ["Pijem kavu.", "I'm drinking coffee."], ["Mi čitamo.", "We're reading."], ["Oni govore engleski.", "They speak English."]],
      spot: { q: "čitam, govorim, pijem: what do all the 'I' forms have in common?", options: ["They end in -m", "They end in -a", "They end in -ti"], answer: 0 },
      // Taught one step at a time: t heading, x explanation, how worked example, short reminder shown on a miss,
      // f isolated form drills (q cue, a answer, en meaning, o choices, alt other accepted answers).
      steps: [
        { t: "The 'I' form shows the verb's group", x: "Dictionary forms end in -ti (čitati, govoriti, piti). The 'I' form ends in -am, -im or -em, and that vowel (a, i or e) stays in almost every other form, so once you know the 'I' form you know the pattern. There's one present tense for both 'I read' and 'I'm reading'.", how: "čitati → čitam (a-group), govoriti → govorim (i-group), piti → pijem (e-group). The e-group often changes its stem (pisati → pišem), so learn those with their 'I' form.", short: "The 'I' form ends in -m: -am (čitam), -im (govorim), -em (pijem).", ask: "Give the 'I' form.", f: [{ q: "čitati", a: "čitam", en: "to read" }, { q: "gledati", a: "gledam", en: "to watch" }, { q: "govoriti", a: "govorim", en: "to speak" }, { q: "raditi", a: "radim", en: "to work" }, { q: "piti", a: "pijem", en: "to drink (stem changes)" }] },
        { t: "Swap the ending for who", x: "Keep the vowel and change only the ending: -m (I), -š (you), nothing (he, she), -mo (we), -te (you all, polite 'you'). 'They' is the odd one: a-verbs add -ju (čitaju), i-verbs end in -e (govore), e-verbs end in -u (piju).", how: "Mi ___ (gledati): the stem is gleda-, and 'we' adds -mo, so gledamo.", short: "-m, -š, (nothing), -mo, -te; 'they' is -aju, -e or -u (čitaju, govore, piju).", ask: "Make the form for this person.", f: [{ q: "čitati · ti", a: "čitaš" }, { q: "čitati · mi", a: "čitamo" }, { q: "govoriti · on", a: "govori" }, { q: "govoriti · vi", a: "govorite" }, { q: "gledati · oni", a: "gledaju" }, { q: "govoriti · oni", a: "govore" }, { q: "piti · oni", a: "piju" }] }
      ],
      table: { head: ["", "čitati", "govoriti", "piti"], rows: [["ja", "čitam", "govorim", "pijem"], ["ti", "čitaš", "govoriš", "piješ"], ["on / ona", "čita", "govori", "pije"], ["mi", "čitamo", "govorimo", "pijemo"], ["vi", "čitate", "govorite", "pijete"], ["oni", "čitaju", "govore", "piju"]] },
      drills: [
        { s: "Ja ___ knjigu.", h: "čitati", a: "čitam", o: ["čitam", "čita", "čitaju"], en: "I'm reading a book.", r: 0 },
        { s: "Ti ___ hrvatski.", h: "govoriti", a: "govoriš", o: ["govoriš", "govorim", "govori"], en: "You speak Croatian.", r: 1 },
        { s: "Mama ___ juhu.", h: "kuhati", a: "kuha", o: ["kuha", "kuham", "kuhaju"], en: "Mum is cooking soup.", r: 1 },
        { s: "Mi ___ vodu.", h: "piti", a: "pijemo", o: ["pijemo", "pijete", "piju"], en: "We're drinking water.", r: 1 },
        { s: "Djeca se ___ na plaži.", h: "igrati", a: "igraju", o: ["igraju", "igra", "igramo"], en: "The children are playing on the beach.", r: 1 },
        { s: "___ li engleski?", h: "govoriti, formal 'you'", a: "Govorite", o: ["Govorite", "Govorimo", "Govore"], en: "Do you speak English?", r: 1 },
        { s: "Oni ___ film.", h: "gledati", a: "gledaju", o: ["gledaju", "gleda", "gledamo"], en: "They're watching a film.", r: 1 },
        { s: "Tata ___ u vrtu.", h: "raditi", a: "radi", o: ["radi", "radim", "rade"], en: "Dad is working in the garden.", r: 1 },
        { s: "Ja ___ pismo.", h: "pisati", a: "pišem", o: ["pišem", "pisam", "piše"], en: "I'm writing a letter.", r: 0 }
      ]},
    { id: "gender", hr: "Rod i pridjevi", en: "Gender: velik, velika, veliko", pic: "⚖️",
      examples: [["Pas je velik.", "The dog is big."], ["Kuća je velika.", "The house is big."], ["More je veliko.", "The sea is big."], ["Dobar dan! Dobra večer! Dobro jutro!", "Good day! Good evening! Good morning!"]],
      spot: { q: "velik, velika, veliko: what decides the ending?", options: ["The word it describes", "Who is speaking to whom", "Whether it's a question"], answer: 0 },
      // Taught one step at a time: t heading, x explanation, how worked example, short reminder shown on a miss,
      // f isolated form drills (q cue, a answer, en meaning, o choices, alt other accepted answers).
      steps: [
        { t: "Read the gender from the ending", x: "Every noun is masculine, feminine or neuter, and the last letter usually tells you. A consonant means masculine (pas, stol, dan), -a means feminine (kuća, mačka), and -o or -e means neuter (more, selo, jutro). A few break the pattern: auto is masculine, and noć, večer, sol and obitelj are feminine.", how: "jabuka ends in -a, so it's feminine. selo ends in -o, so it's neuter.", short: "consonant = masculine, -a = feminine, -o / -e = neuter.", ask: "Masculine, feminine or neuter?", o: ["masculine", "feminine", "neuter"], f: [{ q: "kuća", a: "feminine", en: "house" }, { q: "grad", a: "masculine", en: "city" }, { q: "more", a: "neuter", en: "sea" }, { q: "knjiga", a: "feminine", en: "book" }, { q: "selo", a: "neuter", en: "village" }, { q: "stol", a: "masculine", en: "table" }] },
        { t: "The describing word copies the gender", x: "A describing word takes the noun's gender: nothing added for masculine (velik pas), -a for feminine (velika kuća), -o for neuter (veliko more). It works the same after je: Kuća je velika.", how: "Jabuka je ___ (crven): jabuka is feminine, so add -a: crvena.", short: "masculine velik, feminine velika, neuter veliko.", ask: "Put the two words together.", f: [{ q: "velik + more", a: "veliko more", en: "big sea" }, { q: "nov + kuća", a: "nova kuća", en: "new house" }, { q: "nov + stan", a: "nov stan", en: "new flat" }, { q: "crven + jabuka", a: "crvena jabuka", en: "red apple" }, { q: "plav + more", a: "plavo more", en: "blue sea" }] },
        { t: "The vanishing 'a'", x: "Some describing words have an 'a' before their last letter: dobar, sretan, umoran, gladan, hladan. When an ending is added, that 'a' drops out: dobar → dobra, dobro; sretan → sretna. The same goes for you: a man says Umoran sam and a woman says Umorna sam.", how: "Noć je ___ (hladan): noć is feminine, so hladan + -a, and the 'a' drops: hladna.", short: "dobar → dobra / dobro, umoran → umorna: the 'a' drops when an ending is added.", ask: "Put the two words together.", f: [{ q: "dobar + večer", a: "dobra večer", en: "good evening" }, { q: "dobar + jutro", a: "dobro jutro", en: "good morning" }, { q: "hladan + noć", a: "hladna noć", en: "cold night" }, { q: "umoran + I'm (a woman)", a: "umorna sam", alt: ["ja sam umorna"], en: "I'm tired." }, { q: "sretan + I'm (a man)", a: "sretan sam", alt: ["ja sam sretan"], en: "I'm happy." }] }
      ],
      table: { head: ["masculine", "feminine", "neuter"], rows: [["velik pas", "velika kuća", "veliko more"], ["nov stan", "nova haljina", "novo selo"], ["dobar dan", "dobra večer", "dobro jutro"], ["sretan", "sretna", "sretno"]] },
      drills: [
        { s: "Kuća je ___.", h: "velik", a: "velika", o: ["velika", "velik", "veliko"], en: "The house is big.", r: 1 },
        { s: "More je ___.", h: "plav", a: "plavo", o: ["plavo", "plava", "plav"], en: "The sea is blue.", r: 1 },
        { s: "Stol je ___.", h: "nov", a: "nov", o: ["nov", "nova", "novo"], en: "The table is new.", r: 1 },
        { s: "___ jutro!", a: "Dobro", o: ["Dobro", "Dobra", "Dobar"], en: "Good morning!", r: 2 },
        { s: "___ večer!", a: "Dobra", o: ["Dobra", "Dobro", "Dobar"], en: "Good evening!", r: 2 },
        { s: "Ana je ___.", h: "sretan", a: "sretna", o: ["sretna", "sretan", "sretano"], en: "Ana is happy.", r: 2 },
        { s: "Mama je ___.", h: "umoran", a: "umorna", o: ["umorna", "umorana", "umoran"], en: "Mum is tired.", r: 2 },
        { s: "Jabuka je ___.", h: "crven", a: "crvena", o: ["crvena", "crven", "crveno"], en: "The apple is red.", r: 1 },
        { s: "Noć je ___.", h: "hladan", a: "hladna", o: ["hladna", "hladan", "hladno"], en: "The night is cold.", r: 2 },
        { s: "Selo je ___.", h: "lijep", a: "lijepo", o: ["lijepo", "lijepa", "lijep"], en: "The village is beautiful.", r: 1 }
      ]},
    { id: "neg", hr: "Ne i pitanja", en: "Saying 'not' and asking questions", pic: "❓",
      examples: [["Ne razumijem.", "I don't understand."], ["Nemam psa.", "I don't have a dog."], ["Govorite li engleski?", "Do you speak English?"], ["Je li daleko?", "Is it far?"], ["Gdje je zahod?", "Where is the toilet?"]],
      spot: { q: "Govorite li…? Imate li…? Je li…? Where does 'li' go?", options: ["Straight after the verb at the start", "At the very end", "Before the verb"], answer: 0 },
      // Taught one step at a time: t heading, x explanation, how worked example, short reminder shown on a miss,
      // f isolated form drills (q cue, a answer, en meaning, o choices, alt other accepted answers).
      steps: [
        { t: "ne goes right before the verb", x: "To say 'not', put ne in front of the verb as a separate word: znam → ne znam, razumijem → ne razumijem.", how: "I don't speak: govorim → ne govorim.", short: "'not' = ne + the verb, as two words: ne znam.", ask: "Make it 'not'.", f: [{ q: "znam", a: "ne znam", en: "I know" }, { q: "razumijem", a: "ne razumijem", en: "I understand" }, { q: "govorim", a: "ne govorim", en: "I speak" }, { q: "volim", a: "ne volim", en: "I love / like" }] },
        { t: "Three verbs fuse with ne", x: "Three everyday verbs join ne into one word: sam → nisam, imam → nemam, hoću → neću. The same goes for every person: nije, nemaš, nećemo… 'Ne sam' and 'ne imam' are common mistakes.", how: "He doesn't have: on ima → nema.", short: "nisam, nemam, neću are one word, never 'ne sam' or 'ne imam'.", ask: "Make it 'not'.", f: [{ q: "sam", a: "nisam", en: "I am" }, { q: "imam", a: "nemam", en: "I have" }, { q: "hoću", a: "neću", en: "I will" }, { q: "je", a: "nije", en: "he / she / it is" }, { q: "ima", a: "nema", en: "he / she has" }] },
        { t: "Yes/no questions: verb first, then li", x: "Put the verb first and li straight after it: Govoriš hrvatski. → Govoriš li hrvatski? For 'is it…?' say Je li…? In speech you'll also hear Da li… or just a rising voice.", how: "You have a dog: Imaš psa. Verb first, then li: Imaš li psa?", short: "a yes/no question = the verb first, then li: Govoriš li…?", ask: "Turn it into a question with li.", f: [{ q: "Govoriš hrvatski.", a: "Govoriš li hrvatski?", en: "Do you speak Croatian?" }, { q: "Imaš psa.", a: "Imaš li psa?", en: "Do you have a dog?" }, { q: "Imate jagode.", a: "Imate li jagode?", en: "Do you have strawberries?" }, { q: "Daleko je.", a: "Je li daleko?", en: "Is it far?" }] },
        { t: "Question words go first", x: "With a question word you don't need li: just put the question word first. tko (who), što (what), gdje (where), kada (when), zašto (why), kako (how), koliko (how much, how many).", how: "Where is the toilet? gdje goes first: Gdje je zahod?", short: "tko who, što what, gdje where, kada when, zašto why, kako how, koliko how much.", ask: "The Croatian question word", f: [{ q: "where", a: "gdje" }, { q: "who", a: "tko" }, { q: "what", a: "što" }, { q: "how", a: "kako" }, { q: "how much", a: "koliko" }, { q: "when", a: "kada" }, { q: "why", a: "zašto" }] }
      ],
      table: { head: ["yes", "no"], rows: [["znam", "ne znam"], ["govorim", "ne govorim"], ["sam", "nisam"], ["imam", "nemam"], ["hoću", "neću"]] },
      drills: [
        { s: "Ja ___ razumijem.", a: "ne", o: ["ne", "nisam", "nemam"], en: "I don't understand.", r: 0 },
        { s: "Ja ___ psa.", h: "I don't have", a: "nemam", o: ["nemam", "ne imam", "nisam"], en: "I don't have a dog.", r: 1 },
        { s: "On ___ ovdje.", h: "isn't", a: "nije", o: ["nije", "ne je", "nema"], en: "He isn't here.", r: 1 },
        { s: "Govoriš ___ hrvatski?", a: "li", o: ["li", "da", "je"], en: "Do you speak Croatian?", r: 2 },
        { s: "___ li jagode?", h: "formal 'you have'", a: "Imate", o: ["Imate", "Imam", "Ima"], en: "Do you have strawberries?", r: 2 },
        { s: "___ li daleko?", a: "Je", o: ["Je", "Si", "Sam"], en: "Is it far?", r: 2 },
        { s: "___ je zahod?", h: "where", a: "Gdje", o: ["Gdje", "Kada", "Tko"], en: "Where is the toilet?", r: 3 },
        { s: "___ košta?", h: "how much", a: "Koliko", o: ["Koliko", "Kako", "Što"], en: "How much does it cost?", r: 3 },
        { s: "___ se zoveš?", h: "how", a: "Kako", o: ["Kako", "Što", "Tko"], en: "What's your name?", r: 3 },
        { s: "___ je to?", h: "who", a: "Tko", o: ["Tko", "Gdje", "Koliko"], en: "Who is that?", r: 3 }
      ]},
    { id: "acc", hr: "Akuzativ", en: "Objects: kava → Pijem kavu", pic: "🎯",
      examples: [["Imam mamu i tatu.", "I have a mum and a dad."], ["Pijem kavu.", "I'm drinking coffee."], ["Imamo psa.", "We have a dog."], ["Volim sladoled.", "I love ice cream."], ["Pijem mlijeko.", "I'm drinking milk."]],
      spot: { q: "mama → mamu, kava → kavu, but sladoled stays sladoled. Which words change?", options: ["Feminine words: -a becomes -u", "Every word changes", "Only names change"], answer: 0 },
      // Taught one step at a time: t heading, x explanation, how worked example, short reminder shown on a miss,
      // f isolated form drills (q cue, a answer, en meaning, o choices, alt other accepted answers).
      steps: [
        { t: "Find the object", x: "The object is the thing or person the action is done to: what you have, want, eat, drink, love or see. Only the object changes. The person doing it stays in the dictionary form. Croatian has seven of these case forms, and this one, the accusative, is the one you'll use most.", how: "Mama kuha juhu. Who cooks? Mama, so it stays as it is. What gets cooked? juha, so it's the object and changes to juhu.", short: "the object (what you have, eat, see…) changes; the doer doesn't.", ask: "Which word is the object?", f: [{ q: "Mama kuha juhu.", a: "juhu", o: ["Mama", "kuha", "juhu"], en: "Mum is cooking soup." }, { q: "Tata voli sladoled.", a: "sladoled", o: ["Tata", "voli", "sladoled"], en: "Dad loves ice cream." }, { q: "Ana čita knjigu.", a: "knjigu", o: ["Ana", "čita", "knjigu"], en: "Ana is reading a book." }] },
        { t: "Words ending in -a: -a becomes -u", x: "If the word ends in -a, change it to -u: kava → kavu, mama → mamu, knjiga → knjigu. This includes the few masculine words that end in -a, like tata → tatu.", how: "Čitam ___ (knjiga): it ends in -a, so knjigu.", short: "-a becomes -u: kava → kavu.", ask: "The object form", f: [{ q: "kava", a: "kavu", en: "coffee" }, { q: "sestra", a: "sestru", en: "sister" }, { q: "jabuka", a: "jabuku", en: "apple" }, { q: "juha", a: "juhu", en: "soup" }, { q: "tata", a: "tatu", en: "dad" }] },
        { t: "Living masculine words add -a", x: "Masculine words for people and animals add -a: brat → brata, sin → sina. Watch the vanishing 'a' again: pas → psa.", how: "Imam ___ (brat): a person, and masculine, so add -a: brata.", short: "masculine person or animal: add -a (brat → brata, pas → psa).", ask: "The object form", f: [{ q: "brat", a: "brata", en: "brother" }, { q: "sin", a: "sina", en: "son" }, { q: "pas", a: "psa", en: "dog" }, { q: "prijatelj", a: "prijatelja", en: "friend" }] },
        { t: "Everything else stays the same", x: "Masculine things (kruh, sladoled), neuter words (mlijeko, more) and feminine words that end in a consonant (noć, obitelj) don't change. One to memorise: kći → kćer.", how: "Jedem ___ (kruh): masculine, but a thing, not alive, so it stays kruh.", short: "masculine things, neuter words and feminine words without -a don't change.", ask: "The object form", f: [{ q: "kruh", a: "kruh", en: "bread" }, { q: "mlijeko", a: "mlijeko", en: "milk" }, { q: "sladoled", a: "sladoled", en: "ice cream" }, { q: "obitelj", a: "obitelj", en: "family" }, { q: "kći", a: "kćer", en: "daughter" }] }
      ],
      table: { head: ["word", "as the object"], rows: [["kava (f)", "Pijem kavu."], ["brat (m, person)", "Imam brata."], ["pas (m, animal)", "Imamo psa."], ["kruh (m, thing)", "Jedem kruh."], ["mlijeko (n)", "Pijem mlijeko."]] },
      drills: [
        { s: "Pijem ___.", h: "kava", a: "kavu", o: ["kavu", "kava", "kave"], en: "I'm drinking coffee.", r: 1 },
        { s: "Imam ___.", h: "sestra", a: "sestru", o: ["sestru", "sestra", "sestri"], en: "I have a sister.", r: 1 },
        { s: "Imamo ___.", h: "pas", a: "psa", o: ["psa", "pas", "pasa"], en: "We have a dog.", r: 2 },
        { s: "Volim ___.", h: "sladoled", a: "sladoled", o: ["sladoled", "sladoleda", "sladoledu"], en: "I love ice cream.", r: 3 },
        { s: "Jedem ___.", h: "jabuka", a: "jabuku", o: ["jabuku", "jabuka", "jabuke"], en: "I'm eating an apple.", r: 1 },
        { s: "Imam ___ i kćer.", h: "sin", a: "sina", o: ["sina", "sin", "sinu"], en: "I have a son and a daughter.", r: 2 },
        { s: "Čitam ___.", h: "knjiga", a: "knjigu", o: ["knjigu", "knjiga", "knjige"], en: "I'm reading a book.", r: 1 },
        { s: "Pijem ___.", h: "mlijeko", a: "mlijeko", o: ["mlijeko", "mlijeka", "mlijeku"], en: "I'm drinking milk.", r: 3 },
        { s: "Baka kuha ___.", h: "juha", a: "juhu", o: ["juhu", "juha", "juhe"], en: "Grandma is cooking soup.", r: 1 },
        { s: "Volim ___.", h: "tata", a: "tatu", o: ["tatu", "tata", "tate"], en: "I love Dad.", r: 1 }
      ]},
    { id: "loc", hr: "Gdje? U i na", en: "Where: u školi, na plaži", pic: "📍",
      examples: [["Mama je u kuhinji.", "Mum is in the kitchen."], ["Djeca su na plaži.", "The children are on the beach."], ["Živimo u gradu.", "We live in the city."], ["Knjiga je na stolu.", "The book is on the table."], ["Ljeti smo na moru.", "In summer we're at the seaside."]],
      spot: { q: "plaža → na plaži, kuhinja → u kuhinji. What happens to the final -a?", options: ["It becomes -i", "It becomes -u", "It disappears"], answer: 0 },
      // Taught one step at a time: t heading, x explanation, how worked example, short reminder shown on a miss,
      // f isolated form drills (q cue, a answer, en meaning, o choices, alt other accepted answers).
      steps: [
        { t: "u or na?", x: "To say where something is, use u (in) for inside places: u kući, u školi, u gradu. Use na (on, at) for surfaces and open places: na stolu, na plaži, na moru, na otoku.", how: "On the beach: a beach is an open place, so na.", short: "u = inside (u školi), na = on a surface or an open place (na plaži).", ask: "u or na?", o: ["u", "na"], f: [{ q: "škola", a: "u", en: "school" }, { q: "plaža", a: "na", en: "beach" }, { q: "stol", a: "na", en: "table" }, { q: "grad", a: "u", en: "city" }, { q: "kuhinja", a: "u", en: "kitchen" }, { q: "otok", a: "na", en: "island" }] },
        { t: "Words ending in -a: -a becomes -i", x: "After u or na, when you're saying where, a final -a becomes -i: kuhinja → u kuhinji, plaža → na plaži, škola → u školi. This form is called the locative.", how: "Mama je u ___ (kuhinja): it ends in -a, so kuhinji.", short: "where? -a becomes -i: plaža → na plaži.", ask: "Where? Add u or na and the ending.", f: [{ q: "kuhinja", a: "u kuhinji", en: "kitchen" }, { q: "plaža", a: "na plaži", en: "beach" }, { q: "škola", a: "u školi", en: "school" }, { q: "kuća", a: "u kući", en: "house, home" }] },
        { t: "Masculine and neuter words end in -u", x: "Masculine words add -u, and neuter -o or -e becomes -u: grad → u gradu, stol → na stolu, selo → u selu, more → na moru.", how: "Knjiga je na ___ (stol): stol is masculine, so add -u: stolu.", short: "where? masculine adds -u, neuter -o / -e becomes -u: u gradu, na moru.", ask: "Where? Add u or na and the ending.", f: [{ q: "grad", a: "u gradu", en: "city" }, { q: "stol", a: "na stolu", en: "table" }, { q: "selo", a: "u selu", en: "village" }, { q: "more", a: "na moru", en: "sea, seaside" }, { q: "otok", a: "na otoku", en: "island" }] },
        { t: "k, g and h soften before -i", x: "If the word ends in -ka, -ga or -ha, the consonant softens when -a becomes -i: k becomes c, g becomes z, h becomes s. ruka → u ruci, rijeka → na rijeci, knjiga → u knjizi.", how: "Ključ je u ___ (ruka): -a becomes -i, and k before i becomes c: ruci.", short: "before -i, k → c, g → z, h → s: ruka → u ruci.", ask: "Where? Add u or na and the ending.", f: [{ q: "ruka", a: "u ruci", en: "hand" }, { q: "rijeka", a: "na rijeci", en: "river" }, { q: "knjiga", a: "u knjizi", en: "book" }] }
      ],
      table: { head: ["word", "where"], rows: [["plaža", "na plaži"], ["škola", "u školi"], ["kuća", "u kući"], ["grad", "u gradu"], ["more", "na moru"], ["ruka", "u ruci"]] },
      drills: [
        { s: "Mama je u ___.", h: "kuhinja", a: "kuhinji", o: ["kuhinji", "kuhinju", "kuhinja"], en: "Mum is in the kitchen.", r: 1 },
        { s: "Djeca su na ___.", h: "plaža", a: "plaži", o: ["plaži", "plažu", "plaža"], en: "The children are on the beach.", r: 1 },
        { s: "Živimo u ___.", h: "grad", a: "gradu", o: ["gradu", "grad", "gradi"], en: "We live in the city.", r: 2 },
        { s: "Knjiga je na ___.", h: "stol", a: "stolu", o: ["stolu", "stol", "stoli"], en: "The book is on the table.", r: 2 },
        { s: "Ljeti smo na ___.", h: "more", a: "moru", o: ["moru", "more", "mori"], en: "In summer we're at the seaside.", r: 2 },
        { s: "Sin je u ___.", h: "škola", a: "školi", o: ["školi", "školu", "škola"], en: "My son is at school.", r: 1 },
        { s: "Baka živi u ___.", h: "selo", a: "selu", o: ["selu", "selo", "seli"], en: "Grandma lives in a village.", r: 2 },
        { s: "Ključ je u ___.", h: "ruka", a: "ruci", o: ["ruci", "ruki", "ruku"], en: "The key is in my hand.", r: 3 },
        { s: "Mi smo na ___.", h: "otok", a: "otoku", o: ["otoku", "otok", "otoki"], en: "We're on an island.", r: 2 },
        { s: "Tata je u ___.", h: "kuća", a: "kući", o: ["kući", "kuću", "kuća"], en: "Dad is at home.", r: 1 }
      ]},
    { id: "numbers", hr: "Brojevi i imenice", en: "Numbers: dvije jabuke, pet jabuka", pic: "🍎",
      examples: [["jedna jabuka", "one apple"], ["dvije jabuke", "two apples"], ["pet jabuka", "five apples"], ["Luka ima osam godina.", "Luka is eight."], ["To je pet eura.", "That's five euros."]],
      spot: { q: "jedna jabuka, dvije jabuke, pet jabuka. What changes?", options: ["The word's ending depends on the number", "Nothing changes", "Only the number changes"], answer: 0 },
      // Taught one step at a time: t heading, x explanation, how worked example, short reminder shown on a miss,
      // f isolated form drills (q cue, a answer, en meaning, o choices, alt other accepted answers).
      steps: [
        { t: "'One' matches the gender", x: "jedan, jedna and jedno match the noun like a describing word, and the noun itself stays as it is: jedan kruh, jedna jabuka, jedno jaje.", how: "One apple: jabuka is feminine, so jedna jabuka.", short: "masculine jedan, feminine jedna, neuter jedno; the noun doesn't change.", ask: "Say 'one …'.", f: [{ q: "1 + kruh", a: "jedan kruh", en: "bread" }, { q: "1 + jabuka", a: "jedna jabuka", en: "apple" }, { q: "1 + jaje", a: "jedno jaje", en: "egg" }, { q: "1 + dan", a: "jedan dan", en: "day" }, { q: "1 + kava", a: "jedna kava", en: "coffee" }] },
        { t: "2, 3 and 4: -e or -a", x: "After dva, tri and četiri, feminine words change -a to -e (dvije jabuke), and masculine and neuter words end in -a (dva kruha, tri dana, četiri eura). 'Two' itself changes too: dvije for feminine words, dva for the rest.", how: "Two apples: jabuka is feminine, so dvije, and -a becomes -e: dvije jabuke.", short: "2–4: feminine -e (dvije jabuke), masculine and neuter -a (dva dana).", ask: "Put the number and the word together.", f: [{ q: "2 + jabuka", a: "dvije jabuke", en: "apple" }, { q: "2 + dan", a: "dva dana", en: "day" }, { q: "3 + kava", a: "tri kave", en: "coffee" }, { q: "4 + euro", a: "četiri eura", en: "euro" }, { q: "2 + sestra", a: "dvije sestre", en: "sister" }] },
        { t: "5 and up: the 'of' form", x: "From 5 to 20, and after koliko (how many) and puno (a lot of), use the 'of' form. For most feminine words that's -a (pet jabuka, osam godina), and masculine and neuter words also end in -a (pet dana, deset eura).", how: "Eight years: 8 is 5 or more, so the 'of' form: osam godina.", short: "5–20, koliko and puno take the 'of' form: pet jabuka, pet dana.", ask: "Put the number and the word together.", f: [{ q: "5 + jabuka", a: "pet jabuka", en: "apple" }, { q: "8 + godina", a: "osam godina", en: "year" }, { q: "5 + dan", a: "pet dana", en: "day" }, { q: "10 + euro", a: "deset eura", en: "euro" }] },
        { t: "Bigger numbers: look at the last digit", x: "For 21, 32, 44 and so on, follow the rule for the last digit: dvadeset jedna godina, dvadeset dva dana, trideset pet eura. 11 to 19 always take the 'of' form: dvanaest godina.", how: "22 days: the last digit is 2, so it's like dva dana: dvadeset dva dana.", short: "the last digit decides (dvadeset dva dana), but 11–19 always take the 'of' form.", ask: "Put the number and the word together.", f: [{ q: "22 + dan", a: "dvadeset dva dana", alt: ["dvadeset i dva dana"], en: "day" }, { q: "12 + godina", a: "dvanaest godina", en: "year" }, { q: "25 + euro", a: "dvadeset pet eura", alt: ["dvadeset i pet eura"], en: "euro" }] }
      ],
      table: { head: ["1", "2–4", "5+"], rows: [["jedna jabuka", "dvije jabuke", "pet jabuka"], ["jedna godina", "dvije godine", "pet godina"], ["jedan dan", "dva dana", "pet dana"], ["jedan euro", "dva eura", "pet eura"]] },
      drills: [
        { s: "dvije ___", h: "jabuka", a: "jabuke", o: ["jabuke", "jabuka", "jabuku"], en: "two apples", r: 1 },
        { s: "pet ___", h: "jabuka", a: "jabuka", o: ["jabuka", "jabuke", "jabuku"], en: "five apples", r: 2 },
        { s: "___ jabuka", h: "1", a: "jedna", o: ["jedna", "jedan", "jedno"], en: "one apple", r: 0 },
        { s: "___ kruh", h: "1", a: "jedan", o: ["jedan", "jedna", "jedno"], en: "one loaf of bread", r: 0 },
        { s: "___ eura", h: "2", a: "dva", o: ["dva", "dvije", "dvoje"], en: "two euros", r: 1 },
        { s: "___ sestre", h: "2", a: "dvije", o: ["dvije", "dva", "dvoje"], en: "two sisters", r: 1 },
        { s: "Luka ima osam ___.", h: "godina", a: "godina", o: ["godina", "godine", "godinu"], en: "Luka is eight.", r: 2 },
        { s: "tri ___", h: "dan", a: "dana", o: ["dana", "dan", "dani"], en: "three days", r: 1 },
        { s: "četiri ___", h: "kava", a: "kave", o: ["kave", "kava", "kavu"], en: "four coffees", r: 1 },
        { s: "To je pet ___.", h: "euro", a: "eura", o: ["eura", "euro", "euri"], en: "That's five euros.", r: 2 }
      ]},
    { id: "past", hr: "Prošlo vrijeme", en: "Past tense: bio sam / bila sam", pic: "⏪",
      examples: [["Bio sam na moru.", "I was at the seaside. (a man)"], ["Bila sam na moru.", "I was at the seaside. (a woman)"], ["Jučer smo ručali kod bake.", "Yesterday we had lunch at grandma's."], ["Čitala sam knjigu.", "I was reading a book. (a woman)"], ["Što si radio?", "What did you do? (to a man)"]],
      spot: { q: "bio sam / bila sam. What's the difference?", options: ["Who's speaking: a man says bio, a woman says bila", "bio is further in the past", "bila is a question"], answer: 0 },
      // Taught one step at a time: t heading, x explanation, how worked example, short reminder shown on a miss,
      // f isolated form drills (q cue, a answer, en meaning, o choices, alt other accepted answers).
      steps: [
        { t: "Make the past form of the verb", x: "Take the dictionary form, drop -ti and add an ending for who did it: -o for a man, -la for a woman, -lo for 'it', -li for a group (or a mixed group) and -le for a group of women. čitati → čita- → čitao, čitala, čitalo, čitali, čitale.", how: "Mama ___ (kuhati): drop -ti to get kuha-, and a woman adds -la: kuhala.", short: "drop -ti, then add -o (a man), -la (a woman), -lo (it), -li (a group), -le (women).", ask: "The past form", f: [{ q: "čitati · a woman", a: "čitala" }, { q: "kuhati · a man", a: "kuhao" }, { q: "gledati · a group", a: "gledali" }, { q: "raditi · a man", a: "radio" }, { q: "plivati · a woman", a: "plivala" }, { q: "ručati · a group", a: "ručali" }] },
        { t: "Add sam, si, je… in second place", x: "The past is that form plus the short 'to be' word for the person: Čitala sam (I read, said by a woman), Radio si (you worked, said to a man), Gledali su (they watched). The short word still sits in second place: Jučer sam radila. With 'I' and 'you', the ending follows the speaker's or listener's gender.", how: "We had lunch: we is smo, and a group is ručali: Ručali smo, or Mi smo ručali.", short: "past = the -o / -la / -li form + sam, si, je…, with the short word in second place.", ask: "Say it in Croatian.", f: [{ q: "I read (a woman)", a: "Čitala sam.", alt: ["Ja sam čitala."] }, { q: "He cooked.", a: "Kuhao je.", alt: ["On je kuhao."] }, { q: "We watched.", a: "Gledali smo.", alt: ["Mi smo gledali."] }, { q: "You worked (to a man)", a: "Radio si.", alt: ["Ti si radio."] }] },
        { t: "A few irregular ones", x: "Learn these as they are: biti → bio, bila, bili (was, were); ići → išao, išla, išli (went); jesti → jeo, jela, jeli (ate).", how: "I was at the seaside, said by a woman: biti → bila, so Bila sam na moru.", short: "biti → bio / bila, ići → išao / išla, jesti → jeo / jela.", ask: "The past form", f: [{ q: "biti · a man", a: "bio" }, { q: "biti · a woman", a: "bila" }, { q: "ići · a woman", a: "išla" }, { q: "ići · a man", a: "išao" }, { q: "jesti · a man", a: "jeo" }] }
      ],
      table: { head: ["", "man / masculine", "woman / feminine"], rows: [["ja", "čitao sam", "čitala sam"], ["ti", "čitao si", "čitala si"], ["on / ona", "čitao je", "čitala je"], ["mi", "čitali smo", "čitale smo"], ["oni / one", "čitali su", "čitale su"]] },
      drills: [
        { s: "Jučer sam ___ na moru.", h: "biti, a man", a: "bio", o: ["bio", "bila", "bili"], en: "Yesterday I was at the seaside. (a man)", r: 2 },
        { s: "Jučer sam ___ na moru.", h: "biti, a woman", a: "bila", o: ["bila", "bio", "bili"], en: "Yesterday I was at the seaside. (a woman)", r: 2 },
        { s: "Mi smo ___ kod bake.", h: "ručati", a: "ručali", o: ["ručali", "ručala", "ručao"], en: "We had lunch at grandma's.", r: 0 },
        { s: "Mama je ___ knjigu.", h: "čitati", a: "čitala", o: ["čitala", "čitao", "čitali"], en: "Mum was reading a book.", r: 0 },
        { s: "Tata je ___ ribu.", h: "kuhati", a: "kuhao", o: ["kuhao", "kuhala", "kuhali"], en: "Dad cooked fish.", r: 0 },
        { s: "Oni su ___ film.", h: "gledati", a: "gledali", o: ["gledali", "gledao", "gledala"], en: "They watched a film.", r: 0 },
        { s: "Što si ___ jučer?", h: "raditi, to a man", a: "radio", o: ["radio", "radila", "radili"], en: "What did you do yesterday? (to a man)", r: 0 },
        { s: "___ sam umorna.", h: "biti, a woman", a: "Bila", o: ["Bila", "Bio", "Bili"], en: "I was tired. (a woman)", r: 2 },
        { s: "Ana je ___ u školu.", h: "ići", a: "išla", o: ["išla", "išao", "išli"], en: "Ana went to school.", r: 2 },
        { s: "Ja sam ___ kolač.", h: "jesti, a man", a: "jeo", o: ["jeo", "jela", "jesao"], en: "I ate cake. (a man)", r: 2 }
      ]},
    { id: "future", hr: "Buduće vrijeme", en: "Future: ću + verb", pic: "⏩",
      examples: [["Sutra ću raditi.", "Tomorrow I'll work."], ["Što ćeš kuhati?", "What will you cook?"], ["Ići ćemo na more.", "We'll go to the seaside."], ["Hoćeš li doći?", "Will you come?"], ["Radit ću sutra.", "I'll work tomorrow."]],
      spot: { q: "ću raditi, ćeš kuhati, ćemo ići. What's the pattern?", options: ["A short word (ću, ćeš…) plus the dictionary form", "The verb gets a new ending", "You add 'sutra'"], answer: 0 },
      // Taught one step at a time: t heading, x explanation, how worked example, short reminder shown on a miss,
      // f isolated form drills (q cue, a answer, en meaning, o choices, alt other accepted answers).
      steps: [
        { t: "ću, ćeš, će… plus the dictionary form", x: "The future is a short word for the person plus the verb's dictionary form: ja ću raditi, ti ćeš raditi, on će raditi, mi ćemo, vi ćete, oni će. The short words come from htjeti (to want), a bit like English 'will'.", how: "We will swim: mi goes with ćemo: Mi ćemo plivati.", short: "ću, ćeš, će, ćemo, ćete, će + the dictionary form.", ask: "Which 'will' word goes with this person?", f: [{ q: "ja", a: "ću" }, { q: "ti", a: "ćeš" }, { q: "on", a: "će" }, { q: "mi", a: "ćemo" }, { q: "vi", a: "ćete" }, { q: "oni", a: "će" }] },
        { t: "Second place, so the verb can lead", x: "Like sam, ću can't start a sentence. Without the pronoun, put the verb first: a verb ending in -ti drops its final -i (Radit ću), while verbs ending in -ći stay whole (Ići ćemo).", how: "I'll cook, without ja: kuhati loses its -i, then ću: Kuhat ću.", short: "without ja, ti…, the verb goes first: -ti loses its -i (Radit ću), -ći stays (Ići ćemo).", ask: "Say the same thing without the pronoun.", f: [{ q: "Ja ću raditi.", a: "Radit ću.", en: "I'll work." }, { q: "Mi ćemo plivati.", a: "Plivat ćemo.", en: "We'll swim." }, { q: "Ti ćeš kuhati.", a: "Kuhat ćeš.", en: "You'll cook." }, { q: "Mi ćemo ići.", a: "Ići ćemo.", en: "We'll go." }] },
        { t: "Will you? Hoćeš li…?", x: "To ask 'will you…?', use the long form: Hoćeš li doći? Answer hoću (I will) or neću (I won't), and neću is always one word.", how: "Will you come? (to a friend): Hoćeš li doći?", short: "ask with Hoćeš li…?, answer hoću or neću (one word).", ask: "Say it in Croatian.", f: [{ q: "Will you come? (to a friend)", a: "Hoćeš li doći?" }, { q: "I will.", a: "Hoću." }, { q: "I won't.", a: "Neću." }] }
      ],
      table: { head: ["", "will", "verb first"], rows: [["ja", "ja ću raditi", "radit ću"], ["ti", "ti ćeš raditi", "radit ćeš"], ["on / ona", "on će raditi", "radit će"], ["mi", "mi ćemo raditi", "radit ćemo"], ["vi", "vi ćete raditi", "radit ćete"], ["oni", "oni će raditi", "radit će"]] },
      drills: [
        { s: "Sutra ___ raditi.", h: "ja", a: "ću", o: ["ću", "ćeš", "će"], en: "Tomorrow I'll work.", r: 0 },
        { s: "Što ___ kuhati?", h: "ti", a: "ćeš", o: ["ćeš", "ću", "ćemo"], en: "What will you cook?", r: 0 },
        { s: "Mi ___ ići na more.", a: "ćemo", o: ["ćemo", "ćete", "će"], en: "We'll go to the seaside.", r: 0 },
        { s: "Oni ___ doći sutra.", a: "će", o: ["će", "ćemo", "ću"], en: "They'll come tomorrow.", r: 0 },
        { s: "Vi ___ učiti hrvatski.", a: "ćete", o: ["ćete", "ćemo", "ćeš"], en: "You'll learn Croatian.", r: 0 },
        { s: "___ li doći?", h: "you", a: "Hoćeš", o: ["Hoćeš", "Hoću", "Ćeš"], en: "Will you come?", r: 2 },
        { s: "Ne, ___.", h: "I won't", a: "neću", o: ["neću", "ne ću", "nisam"], en: "No, I won't.", r: 2 },
        { s: "Radit ___ sutra.", h: "ja", a: "ću", o: ["ću", "će", "ćeš"], en: "I'll work tomorrow.", r: 1 },
        { s: "Ona ___ plivati.", a: "će", o: ["će", "ću", "ćemo"], en: "She will swim.", r: 0 }
      ]}
  ],

  // Pronunciation: rules with examples, plus ear-training. "id" drills: hear a word, pick the sound; "pairs": hear one of two words, pick it.
  sounds: [
    { id: "letters", hr: "Jedno slovo, jedan glas", en: "One letter, one sound", pic: "🔡",
      rule: "Croatian is spelled exactly as it sounds. Every letter is said, there are no silent letters, and a letter never changes its sound. The five vowels are short and pure: a, e, i, o, u never glide the way English 'no' becomes 'noh-oo'. Say each vowel separately even when two sit together: Eu-ro-pa, a-u-to.",
      examples: ["auto", "Europa", "ime", "oko", "uho", "jaje"] },
    { id: "cc", hr: "Č ili Ć", en: "Hard č and soft ć", pic: "🎯",
      rule: "Č is hard, like 'ch' in 'church', with the tongue pulled back and lips pushed forward a little. Ć is softer and lighter, close to the 't' in a quick 'tune', with the tip of the tongue down behind the lower teeth. Many Croatians blur them in speech, but spelling keeps them apart, so train your ear early.",
      examples: ["čaj", "četiri", "ključ", "kuća", "noć", "šećer"],
      which: { choices: ["č", "ć"], items: [["čaj", "č"], ["četiri", "č"], ["ključ", "č"], ["kolač", "č"], ["naranča", "č"], ["ručak", "č"], ["čarape", "č"], ["večera", "č"], ["kuća", "ć"], ["noć", "ć"], ["kći", "ć"], ["tisuća", "ć"], ["proljeće", "ć"], ["vruć", "ć"], ["ići", "ć"]] } },
    { id: "dz", hr: "Dž ili Đ", en: "Hard dž and soft đ", pic: "🎯",
      rule: "These are the 'voiced' partners of č and ć. Dž is hard, like 'j' in 'jungle'. Đ is soft, close to the 'd' in a quick 'dew'. Đ is much more common: doviđenja, leđa, smeđ.",
      examples: ["džep", "đak", "smeđ", "leđa", "doviđenja"] },
    { id: "sz", hr: "S, Š, Z, Ž, C", en: "Hissing and hushing sounds", pic: "🐍",
      rule: "S is 's' in 'sun' and Š is 'sh' in 'shoe'. Z is 'z' in 'zoo' and Ž is the 's' in 'pleasure'. C is always 'ts' as in 'cats', never 'k' or 's'. Some words differ only by one of these sounds: sto (a hundred) and što (what), kosa (hair) and koza (goat).",
      examples: ["sok", "šest", "zec", "žaba", "cipele", "ulica"],
      which: { choices: ["s", "š", "z", "ž"], items: [["sok", "s"], ["sir", "s"], ["sin", "s"], ["sol", "s"], ["šećer", "š"], ["škola", "š"], ["miš", "š"], ["kokoš", "š"], ["zec", "z"], ["zub", "z"], ["zima", "z"], ["koza", "z"], ["žaba", "ž"], ["žut", "ž"], ["muž", "ž"], ["riža", "ž"]] },
      pairs: [["sto", "što"], ["kosa", "koza"], ["sok", "sol"], ["riba", "riža"]] },
    { id: "r", hr: "Slovo R", en: "The rolled R, and R as a vowel", pic: "🌀",
      rule: "R is a quick tap or roll of the tongue tip, as in Spanish or Scottish English. Between consonants it can act as the vowel of a syllable: prst (finger) is one syllable, crn (black), vrt (garden), trbuh is trb-uh, and Hrvatska starts with 'Hr'. Hum the r rather than adding an 'e' before it.",
      examples: ["riba", "prst", "crn", "vrt", "trbuh", "crkva"],
      pairs: [["krava", "kava"], ["sir", "sin"]] },
    { id: "h", hr: "Slovo H", en: "The breathy H", pic: "💨",
      rule: "H is rougher than English h, like 'ch' in Scottish 'loch' or German 'Bach', and it's never silent, even at the end of a word: kruh, trbuh.",
      examples: ["hvala", "kruh", "juha", "hlače", "uho"],
      pairs: [["kuća", "kuha"]] },
    { id: "lj", hr: "Lj, Nj, J", en: "lj, nj and j", pic: "🔗",
      rule: "Lj and nj are each one sound, not two letters. Lj is like the 'lli' in 'million' and nj is like 'ny' in 'canyon'. J is always 'y' as in 'yes', never 'j' as in 'jam': jaje is 'ya-ye'.",
      examples: ["ljeto", "ključ", "konj", "kuhinja", "jabuka"],
      which: { choices: ["l", "lj", "n", "nj"], items: [["lav", "l"], ["lice", "l"], ["stol", "l"], ["ljeto", "lj"], ["ljekarna", "lj"], ["ljubičast", "lj"], ["nos", "n"], ["noga", "n"], ["nula", "n"], ["konj", "nj"], ["kuhinja", "nj"], ["svinja", "nj"]] } },
    { id: "ije", hr: "Ije i je", en: "ije and je", pic: "🌼",
      rule: "Standard Croatian writes 'ije' in a long syllable and 'je' in a short one. 'ije' is said as one smooth syllable, a long 'ye': mli-ye-ko, not mli-i-ye-ko. 'je' is the same sound, only short: djed, svjetlo, medvjed.",
      examples: ["mlijeko", "lijep", "rijeka", "snijeg", "djed", "svjetlo"] },
    { id: "stress", hr: "Naglasak", en: "Stress and melody", pic: "🎵",
      rule: "Croatian words are almost never stressed on the last syllable, and two-syllable words are stressed on the first: MA-ma, VO-da, KU-ća, SE-stra. Vowels can also be long or short, and stressed syllables have a rising or falling pitch. That melody is learned best by ear, so shadow whole phrases slowly, then at full speed. The voices here are synthetic, so for melody, trust a native speaker over them.",
      examples: ["mama", "voda", "kuća", "sestra", "jabuka", "Hrvatska"] }
  ]
});

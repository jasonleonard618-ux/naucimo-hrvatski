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
      rule: [
        "The everyday forms of 'to be' are short: sam, si, je, smo, ste, su. Each one already tells you who, so ja, ti, on… are usually left out: Umoran sam = I'm tired.",
        "These short words never start a sentence. They sit in second place: 'Ja sam umoran' or 'Umoran sam', but never 'Sam umoran'.",
        "For 'not', the form changes to nisam, nisi, nije, nismo, niste, nisu."
      ],
      table: { head: ["", "is", "is not"], rows: [["ja", "sam", "nisam"], ["ti", "si", "nisi"], ["on / ona / ono", "je", "nije"], ["mi", "smo", "nismo"], ["vi", "ste", "niste"], ["oni / one / ona", "su", "nisu"]] },
      drills: [
        { s: "Ja ___ umoran.", a: "sam", o: ["sam", "si", "je"], en: "I'm tired." },
        { s: "Ti ___ moj prijatelj.", a: "si", o: ["si", "sam", "su"], en: "You're my friend." },
        { s: "Mama ___ u kuhinji.", a: "je", o: ["je", "smo", "ste"], en: "Mum is in the kitchen." },
        { s: "Mi ___ obitelj.", a: "smo", o: ["smo", "su", "ste"], en: "We're a family." },
        { s: "Djeca ___ na plaži.", a: "su", o: ["su", "je", "smo"], en: "The children are on the beach." },
        { s: "Kako ___?", a: "ste", o: ["ste", "si", "smo"], en: "How are you? (formal)" },
        { s: "On ___ gladan.", a: "nije", o: ["nije", "nisam", "ne"], en: "He isn't hungry." },
        { s: "Ja ___ umorna.", a: "nisam", o: ["nisam", "nije", "ne"], en: "I'm not tired. (a woman)" },
        { s: "Gladan ___.", a: "sam", o: ["sam", "je", "su"], en: "I'm hungry. (a man)" }
      ]},
    { id: "present", hr: "Sadašnje vrijeme", en: "Present tense: -am, -im, -em", pic: "🏃",
      examples: [["Čitam knjigu.", "I'm reading a book."], ["Govorim malo hrvatski.", "I speak a little Croatian."], ["Pijem kavu.", "I'm drinking coffee."], ["Mi čitamo.", "We're reading."], ["Oni govore engleski.", "They speak English."]],
      spot: { q: "čitam, govorim, pijem: what do all the 'I' forms have in common?", options: ["They end in -m", "They end in -a", "They end in -ti"], answer: 0 },
      rule: [
        "Dictionary forms end in -ti (čitati, govoriti, piti) or -ći (ići). Croatian has one present tense for both 'I read' and 'I am reading'.",
        "Verbs fall into three groups by their 'I' form: -am (čitati → čitam), -im (govoriti → govorim) and -em (piti → pijem, pisati → pišem, jesti → jedem).",
        "The -em verbs often change their stem, so learn each verb together with its 'I' form (the Everyday verbs topic shows them). Once you know the 'I' form, the other endings follow the table."
      ],
      table: { head: ["", "čitati", "govoriti", "piti"], rows: [["ja", "čitam", "govorim", "pijem"], ["ti", "čitaš", "govoriš", "piješ"], ["on / ona", "čita", "govori", "pije"], ["mi", "čitamo", "govorimo", "pijemo"], ["vi", "čitate", "govorite", "pijete"], ["oni", "čitaju", "govore", "piju"]] },
      drills: [
        { s: "Ja ___ knjigu.", h: "čitati", a: "čitam", o: ["čitam", "čita", "čitaju"], en: "I'm reading a book." },
        { s: "Ti ___ hrvatski.", h: "govoriti", a: "govoriš", o: ["govoriš", "govorim", "govori"], en: "You speak Croatian." },
        { s: "Mama ___ juhu.", h: "kuhati", a: "kuha", o: ["kuha", "kuham", "kuhaju"], en: "Mum is cooking soup." },
        { s: "Mi ___ vodu.", h: "piti", a: "pijemo", o: ["pijemo", "pijete", "piju"], en: "We're drinking water." },
        { s: "Djeca se ___ na plaži.", h: "igrati", a: "igraju", o: ["igraju", "igra", "igramo"], en: "The children are playing on the beach." },
        { s: "___ li engleski?", h: "govoriti, formal 'you'", a: "Govorite", o: ["Govorite", "Govorimo", "Govore"], en: "Do you speak English?" },
        { s: "Oni ___ film.", h: "gledati", a: "gledaju", o: ["gledaju", "gleda", "gledamo"], en: "They're watching a film." },
        { s: "Tata ___ u vrtu.", h: "raditi", a: "radi", o: ["radi", "radim", "rade"], en: "Dad is working in the garden." },
        { s: "Ja ___ pismo.", h: "pisati", a: "pišem", o: ["pišem", "pisam", "piše"], en: "I'm writing a letter." }
      ]},
    { id: "gender", hr: "Rod i pridjevi", en: "Gender: velik, velika, veliko", pic: "⚖️",
      examples: [["Pas je velik.", "The dog is big."], ["Kuća je velika.", "The house is big."], ["More je veliko.", "The sea is big."], ["Dobar dan! Dobra večer! Dobro jutro!", "Good day! Good evening! Good morning!"]],
      spot: { q: "velik, velika, veliko: what decides the ending?", options: ["The word it describes", "Who is speaking to whom", "Whether it's a question"], answer: 0 },
      rule: [
        "Every noun is masculine, feminine or neuter, and you can usually tell from the ending. A consonant at the end means masculine (pas, stol, dan), -a means feminine (kuća, mačka), and -o or -e means neuter (more, selo, jutro).",
        "Describing words match the noun: nothing extra for masculine (velik), -a for feminine (velika), -o for neuter (veliko).",
        "Watch for a vanishing 'a': sretan → sretna, umoran → umorna, gladan → gladna, dobar → dobra.",
        "When you talk about yourself, the ending follows your own gender. A woman says 'Umorna sam' and a man says 'Umoran sam'.",
        "A few words break the pattern: auto is masculine, and noć, sol, obitelj and večer are feminine."
      ],
      table: { head: ["masculine", "feminine", "neuter"], rows: [["velik pas", "velika kuća", "veliko more"], ["nov stan", "nova haljina", "novo selo"], ["dobar dan", "dobra večer", "dobro jutro"], ["sretan", "sretna", "sretno"]] },
      drills: [
        { s: "Kuća je ___.", h: "velik", a: "velika", o: ["velika", "velik", "veliko"], en: "The house is big." },
        { s: "More je ___.", h: "plav", a: "plavo", o: ["plavo", "plava", "plav"], en: "The sea is blue." },
        { s: "Stol je ___.", h: "nov", a: "nov", o: ["nov", "nova", "novo"], en: "The table is new." },
        { s: "___ jutro!", a: "Dobro", o: ["Dobro", "Dobra", "Dobar"], en: "Good morning!" },
        { s: "___ večer!", a: "Dobra", o: ["Dobra", "Dobro", "Dobar"], en: "Good evening!" },
        { s: "Ana je ___.", h: "sretan", a: "sretna", o: ["sretna", "sretan", "sretano"], en: "Ana is happy." },
        { s: "Mama je ___.", h: "umoran", a: "umorna", o: ["umorna", "umorana", "umoran"], en: "Mum is tired." },
        { s: "Jabuka je ___.", h: "crven", a: "crvena", o: ["crvena", "crven", "crveno"], en: "The apple is red." },
        { s: "Noć je ___.", h: "hladan", a: "hladna", o: ["hladna", "hladan", "hladno"], en: "The night is cold." },
        { s: "Selo je ___.", h: "lijep", a: "lijepo", o: ["lijepo", "lijepa", "lijep"], en: "The village is beautiful." }
      ]},
    { id: "neg", hr: "Ne i pitanja", en: "Saying 'not' and asking questions", pic: "❓",
      examples: [["Ne razumijem.", "I don't understand."], ["Nemam psa.", "I don't have a dog."], ["Govorite li engleski?", "Do you speak English?"], ["Je li daleko?", "Is it far?"], ["Gdje je zahod?", "Where is the toilet?"]],
      spot: { q: "Govorite li…? Imate li…? Je li…? Where does 'li' go?", options: ["Straight after the verb at the start", "At the very end", "Before the verb"], answer: 0 },
      rule: [
        "To say 'not', put ne before the verb: ne znam, ne razumijem, ne govorim.",
        "Three common verbs join with ne into one word: nisam (I'm not), nemam (I don't have) and neću (I won't).",
        "For a yes/no question, put the verb first and add li: Govoriš li hrvatski? Imate li jagode? For 'is it…?' say 'Je li…?'. In speech you'll also hear 'Da li…?' or just a rising voice: 'Govoriš hrvatski?'",
        "Question words go first: tko (who), što (what), gdje (where), kada (when), zašto (why), kako (how), koliko (how much)."
      ],
      table: { head: ["yes", "no"], rows: [["znam", "ne znam"], ["govorim", "ne govorim"], ["sam", "nisam"], ["imam", "nemam"], ["hoću", "neću"]] },
      drills: [
        { s: "Ja ___ razumijem.", a: "ne", o: ["ne", "nisam", "nemam"], en: "I don't understand." },
        { s: "Ja ___ psa.", h: "I don't have", a: "nemam", o: ["nemam", "ne imam", "nisam"], en: "I don't have a dog." },
        { s: "On ___ ovdje.", h: "isn't", a: "nije", o: ["nije", "ne je", "nema"], en: "He isn't here." },
        { s: "Govoriš ___ hrvatski?", a: "li", o: ["li", "da", "je"], en: "Do you speak Croatian?" },
        { s: "___ li jagode?", h: "formal 'you have'", a: "Imate", o: ["Imate", "Imam", "Ima"], en: "Do you have strawberries?" },
        { s: "___ li daleko?", a: "Je", o: ["Je", "Si", "Sam"], en: "Is it far?" },
        { s: "___ je zahod?", h: "where", a: "Gdje", o: ["Gdje", "Kada", "Tko"], en: "Where is the toilet?" },
        { s: "___ košta?", h: "how much", a: "Koliko", o: ["Koliko", "Kako", "Što"], en: "How much does it cost?" },
        { s: "___ se zoveš?", h: "how", a: "Kako", o: ["Kako", "Što", "Tko"], en: "What's your name?" },
        { s: "___ je to?", h: "who", a: "Tko", o: ["Tko", "Gdje", "Koliko"], en: "Who is that?" }
      ]},
    { id: "acc", hr: "Akuzativ", en: "Objects: kava → Pijem kavu", pic: "🎯",
      examples: [["Imam mamu i tatu.", "I have a mum and a dad."], ["Pijem kavu.", "I'm drinking coffee."], ["Imamo psa.", "We have a dog."], ["Volim sladoled.", "I love ice cream."], ["Pijem mlijeko.", "I'm drinking milk."]],
      spot: { q: "mama → mamu, kava → kavu, but sladoled stays sladoled. Which words change?", options: ["Feminine words: -a becomes -u", "Every word changes", "Only names change"], answer: 0 },
      rule: [
        "The thing you have, want, eat, love or see is the object. It takes the object form, called the accusative.",
        "Feminine words ending in -a change it to -u: kava → kavu, mama → mamu, knjiga → knjigu.",
        "Masculine words for people and animals add -a: brat → brata, sin → sina, pas → psa (the vanishing 'a' again).",
        "Masculine things, neuter words and feminine words ending in a consonant stay the same: Volim sladoled. Pijem mlijeko. Volim svoju obitelj. One to memorise: kći → kćer.",
        "Croatian has seven of these case forms. This is the one you'll use most, and the others follow the same idea of changing the ending."
      ],
      table: { head: ["word", "as the object"], rows: [["kava (f)", "Pijem kavu."], ["brat (m, person)", "Imam brata."], ["pas (m, animal)", "Imamo psa."], ["kruh (m, thing)", "Jedem kruh."], ["mlijeko (n)", "Pijem mlijeko."]] },
      drills: [
        { s: "Pijem ___.", h: "kava", a: "kavu", o: ["kavu", "kava", "kave"], en: "I'm drinking coffee." },
        { s: "Imam ___.", h: "sestra", a: "sestru", o: ["sestru", "sestra", "sestri"], en: "I have a sister." },
        { s: "Imamo ___.", h: "pas", a: "psa", o: ["psa", "pas", "pasa"], en: "We have a dog." },
        { s: "Volim ___.", h: "sladoled", a: "sladoled", o: ["sladoled", "sladoleda", "sladoledu"], en: "I love ice cream." },
        { s: "Jedem ___.", h: "jabuka", a: "jabuku", o: ["jabuku", "jabuka", "jabuke"], en: "I'm eating an apple." },
        { s: "Imam ___ i kćer.", h: "sin", a: "sina", o: ["sina", "sin", "sinu"], en: "I have a son and a daughter." },
        { s: "Čitam ___.", h: "knjiga", a: "knjigu", o: ["knjigu", "knjiga", "knjige"], en: "I'm reading a book." },
        { s: "Pijem ___.", h: "mlijeko", a: "mlijeko", o: ["mlijeko", "mlijeka", "mlijeku"], en: "I'm drinking milk." },
        { s: "Baka kuha ___.", h: "juha", a: "juhu", o: ["juhu", "juha", "juhe"], en: "Grandma is cooking soup." },
        { s: "Volim ___.", h: "tata", a: "tatu", o: ["tatu", "tata", "tate"], en: "I love Dad." }
      ]},
    { id: "loc", hr: "Gdje? U i na", en: "Where: u školi, na plaži", pic: "📍",
      examples: [["Mama je u kuhinji.", "Mum is in the kitchen."], ["Djeca su na plaži.", "The children are on the beach."], ["Živimo u gradu.", "We live in the city."], ["Knjiga je na stolu.", "The book is on the table."], ["Ljeti smo na moru.", "In summer we're at the seaside."]],
      spot: { q: "plaža → na plaži, kuhinja → u kuhinji. What happens to the final -a?", options: ["It becomes -i", "It becomes -u", "It disappears"], answer: 0 },
      rule: [
        "To say where something is, use u (in) or na (on, at) and change the ending. This form is called the locative.",
        "Feminine -a becomes -i: u kuhinji, na plaži, u školi.",
        "Masculine and neuter words end in -u: u gradu, na stolu, u selu, na moru.",
        "Use u for inside places (u kući, u školi, u gradu) and na for surfaces and open places (na stolu, na plaži, na moru, na otoku).",
        "Before -i, k becomes c, g becomes z and h becomes s: ruka → u ruci, rijeka → na rijeci, knjiga → u knjizi."
      ],
      table: { head: ["word", "where"], rows: [["plaža", "na plaži"], ["škola", "u školi"], ["kuća", "u kući"], ["grad", "u gradu"], ["more", "na moru"], ["ruka", "u ruci"]] },
      drills: [
        { s: "Mama je u ___.", h: "kuhinja", a: "kuhinji", o: ["kuhinji", "kuhinju", "kuhinja"], en: "Mum is in the kitchen." },
        { s: "Djeca su na ___.", h: "plaža", a: "plaži", o: ["plaži", "plažu", "plaža"], en: "The children are on the beach." },
        { s: "Živimo u ___.", h: "grad", a: "gradu", o: ["gradu", "grad", "gradi"], en: "We live in the city." },
        { s: "Knjiga je na ___.", h: "stol", a: "stolu", o: ["stolu", "stol", "stoli"], en: "The book is on the table." },
        { s: "Ljeti smo na ___.", h: "more", a: "moru", o: ["moru", "more", "mori"], en: "In summer we're at the seaside." },
        { s: "Sin je u ___.", h: "škola", a: "školi", o: ["školi", "školu", "škola"], en: "My son is at school." },
        { s: "Baka živi u ___.", h: "selo", a: "selu", o: ["selu", "selo", "seli"], en: "Grandma lives in a village." },
        { s: "Ključ je u ___.", h: "ruka", a: "ruci", o: ["ruci", "ruki", "ruku"], en: "The key is in my hand." },
        { s: "Mi smo na ___.", h: "otok", a: "otoku", o: ["otoku", "otok", "otoki"], en: "We're on an island." },
        { s: "Tata je u ___.", h: "kuća", a: "kući", o: ["kući", "kuću", "kuća"], en: "Dad is at home." }
      ]},
    { id: "numbers", hr: "Brojevi i imenice", en: "Numbers: dvije jabuke, pet jabuka", pic: "🍎",
      examples: [["jedna jabuka", "one apple"], ["dvije jabuke", "two apples"], ["pet jabuka", "five apples"], ["Luka ima osam godina.", "Luka is eight."], ["To je pet eura.", "That's five euros."]],
      spot: { q: "jedna jabuka, dvije jabuke, pet jabuka. What changes?", options: ["The word's ending depends on the number", "Nothing changes", "Only the number changes"], answer: 0 },
      rule: [
        "With 1, the noun stays as it is, and 'one' matches its gender: jedan kruh, jedna jabuka, jedno jaje.",
        "With 2, 3 and 4, feminine words end in -e (dvije jabuke), and masculine and neuter words end in -a (dva kruha, dva dana, dva eura). 'Two' is dva for masculine and neuter words and dvije for feminine ones.",
        "With 5 and above (and 11–19), and after koliko or puno, use the 'of' form: pet jabuka, osam godina, pet dana, pet eura.",
        "Numbers ending in 1, 2, 3 or 4 (21, 32, 44…) follow the rule for that last digit."
      ],
      table: { head: ["1", "2–4", "5+"], rows: [["jedna jabuka", "dvije jabuke", "pet jabuka"], ["jedna godina", "dvije godine", "pet godina"], ["jedan dan", "dva dana", "pet dana"], ["jedan euro", "dva eura", "pet eura"]] },
      drills: [
        { s: "dvije ___", h: "jabuka", a: "jabuke", o: ["jabuke", "jabuka", "jabuku"], en: "two apples" },
        { s: "pet ___", h: "jabuka", a: "jabuka", o: ["jabuka", "jabuke", "jabuku"], en: "five apples" },
        { s: "___ jabuka", h: "1", a: "jedna", o: ["jedna", "jedan", "jedno"], en: "one apple" },
        { s: "___ kruh", h: "1", a: "jedan", o: ["jedan", "jedna", "jedno"], en: "one loaf of bread" },
        { s: "___ eura", h: "2", a: "dva", o: ["dva", "dvije", "dvoje"], en: "two euros" },
        { s: "___ sestre", h: "2", a: "dvije", o: ["dvije", "dva", "dvoje"], en: "two sisters" },
        { s: "Luka ima osam ___.", h: "godina", a: "godina", o: ["godina", "godine", "godinu"], en: "Luka is eight." },
        { s: "tri ___", h: "dan", a: "dana", o: ["dana", "dan", "dani"], en: "three days" },
        { s: "četiri ___", h: "kava", a: "kave", o: ["kave", "kava", "kavu"], en: "four coffees" },
        { s: "To je pet ___.", h: "euro", a: "eura", o: ["eura", "euro", "euri"], en: "That's five euros." }
      ]},
    { id: "past", hr: "Prošlo vrijeme", en: "Past tense: bio sam / bila sam", pic: "⏪",
      examples: [["Bio sam na moru.", "I was at the seaside. (a man)"], ["Bila sam na moru.", "I was at the seaside. (a woman)"], ["Jučer smo ručali kod bake.", "Yesterday we had lunch at grandma's."], ["Čitala sam knjigu.", "I was reading a book. (a woman)"], ["Što si radio?", "What did you do? (to a man)"]],
      spot: { q: "bio sam / bila sam. What's the difference?", options: ["Who's speaking: a man says bio, a woman says bila", "bio is further in the past", "bila is a question"], answer: 0 },
      rule: [
        "The past tense is the short form of 'to be' (sam, si, je…) plus a past form of the verb.",
        "To make the past form, take the dictionary form, drop -ti and add an ending for who did it: -o for a man, -la for a woman, -lo for a neuter thing, -li for a group (or a mixed group), -le for a group of women. čitati → čitao, čitala, čitali.",
        "In 'I' and 'you' sentences, the ending follows the speaker or listener. That's why a woman says 'Bila sam umorna' and a man says 'Bio sam umoran'.",
        "A few common verbs are irregular: biti → bio/bila, ići → išao/išla, jesti → jeo/jela.",
        "The short word still sits in second place: 'Jučer sam radila' or 'Radila sam jučer'."
      ],
      table: { head: ["", "man / masculine", "woman / feminine"], rows: [["ja", "čitao sam", "čitala sam"], ["ti", "čitao si", "čitala si"], ["on / ona", "čitao je", "čitala je"], ["mi", "čitali smo", "čitale smo"], ["oni / one", "čitali su", "čitale su"]] },
      drills: [
        { s: "Jučer sam ___ na moru.", h: "biti, a man", a: "bio", o: ["bio", "bila", "bili"], en: "Yesterday I was at the seaside. (a man)" },
        { s: "Jučer sam ___ na moru.", h: "biti, a woman", a: "bila", o: ["bila", "bio", "bili"], en: "Yesterday I was at the seaside. (a woman)" },
        { s: "Mi smo ___ kod bake.", h: "ručati", a: "ručali", o: ["ručali", "ručala", "ručao"], en: "We had lunch at grandma's." },
        { s: "Mama je ___ knjigu.", h: "čitati", a: "čitala", o: ["čitala", "čitao", "čitali"], en: "Mum was reading a book." },
        { s: "Tata je ___ ribu.", h: "kuhati", a: "kuhao", o: ["kuhao", "kuhala", "kuhali"], en: "Dad cooked fish." },
        { s: "Oni su ___ film.", h: "gledati", a: "gledali", o: ["gledali", "gledao", "gledala"], en: "They watched a film." },
        { s: "Što si ___ jučer?", h: "raditi, to a man", a: "radio", o: ["radio", "radila", "radili"], en: "What did you do yesterday? (to a man)" },
        { s: "___ sam umorna.", h: "biti, a woman", a: "Bila", o: ["Bila", "Bio", "Bili"], en: "I was tired. (a woman)" },
        { s: "Ana je ___ u školu.", h: "ići", a: "išla", o: ["išla", "išao", "išli"], en: "Ana went to school." },
        { s: "Ja sam ___ kolač.", h: "jesti, a man", a: "jeo", o: ["jeo", "jela", "jesao"], en: "I ate cake. (a man)" }
      ]},
    { id: "future", hr: "Buduće vrijeme", en: "Future: ću + verb", pic: "⏩",
      examples: [["Sutra ću raditi.", "Tomorrow I'll work."], ["Što ćeš kuhati?", "What will you cook?"], ["Ići ćemo na more.", "We'll go to the seaside."], ["Hoćeš li doći?", "Will you come?"], ["Radit ću sutra.", "I'll work tomorrow."]],
      spot: { q: "ću raditi, ćeš kuhati, ćemo ići. What's the pattern?", options: ["A short word (ću, ćeš…) plus the dictionary form", "The verb gets a new ending", "You add 'sutra'"], answer: 0 },
      rule: [
        "The future is ću, ćeš, će, ćemo, ćete or će plus the dictionary form of the verb: Ja ću raditi = I will work. The short words come from htjeti (to want).",
        "Like sam, these short words sit in second place. If the verb comes first, a verb ending in -ti drops its final -i: Radit ću. Verbs ending in -ći stay whole: Ići ćemo.",
        "To ask 'will you…?', say 'Hoćeš li…?'. To answer, say hoću (I will) or neću (I won't)."
      ],
      table: { head: ["", "will", "verb first"], rows: [["ja", "ja ću raditi", "radit ću"], ["ti", "ti ćeš raditi", "radit ćeš"], ["on / ona", "on će raditi", "radit će"], ["mi", "mi ćemo raditi", "radit ćemo"], ["vi", "vi ćete raditi", "radit ćete"], ["oni", "oni će raditi", "radit će"]] },
      drills: [
        { s: "Sutra ___ raditi.", h: "ja", a: "ću", o: ["ću", "ćeš", "će"], en: "Tomorrow I'll work." },
        { s: "Što ___ kuhati?", h: "ti", a: "ćeš", o: ["ćeš", "ću", "ćemo"], en: "What will you cook?" },
        { s: "Mi ___ ići na more.", a: "ćemo", o: ["ćemo", "ćete", "će"], en: "We'll go to the seaside." },
        { s: "Oni ___ doći sutra.", a: "će", o: ["će", "ćemo", "ću"], en: "They'll come tomorrow." },
        { s: "Vi ___ učiti hrvatski.", a: "ćete", o: ["ćete", "ćemo", "ćeš"], en: "You'll learn Croatian." },
        { s: "___ li doći?", h: "you", a: "Hoćeš", o: ["Hoćeš", "Hoću", "Ćeš"], en: "Will you come?" },
        { s: "Ne, ___.", h: "I won't", a: "neću", o: ["neću", "ne ću", "nisam"], en: "No, I won't." },
        { s: "Radit ___ sutra.", h: "ja", a: "ću", o: ["ću", "će", "ćeš"], en: "I'll work tomorrow." },
        { s: "Ona ___ plivati.", a: "će", o: ["će", "ću", "ćemo"], en: "She will swim." }
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

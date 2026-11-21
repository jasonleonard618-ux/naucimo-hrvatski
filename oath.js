// The citizenship oath (svečana prisega) for Naučimo's "Prisega" practice page. Loaded after lessons.js.
// Wording: Zakon o hrvatskom državljanstvu (oath added by the 2019 amendment, NN 102/19) and the Pravilnik o načinu i postupku
// davanja svečane prisege (NN 108/2021), whose form holds the text. Collected 2026-10-31 from quotations of those texts;
// the official Narodne novine page couldn't be opened from the build sandbox, so check it against the official form.
// Each line is [croatian, english, words], words are [word as written, meaning]. A line with `f` has a woman's version.
window.COURSE.oath = {
  title: "Svečana prisega",
  en: "The citizenship oath",
  source: "Zakon o hrvatskom državljanstvu and the Pravilnik o načinu i postupku davanja svečane prisege (Narodne novine 108/2021)",
  link: "https://narodne-novine.nn.hr/clanci/sluzbeni/2021_10_108_1890.html",
  how: "New citizens give the oath at a short ceremony, usually at the police administration, with the Croatian flag and coat of arms on display. The person leading the ceremony reads the oath first, you say it yourself after them, and then you sign it.",
  lines: [
    ["Prisežem svojom čašću", "I swear on my honour",
      [["Prisežem", "I swear (prisegnuti; prisega = oath)"], ["svojom", "my own (svoj, the 'with / by' form)"], ["čašću", "honour, 'by honour' (čast, the 'with / by' form)"]]],
    ["da ću se kao hrvatski državljanin", "that, as a Croatian citizen, I will",
      [["da", "that"], ["ću", "I will (makes the future, short form of htjeti)"], ["se", "part of 'se pridržavati', to abide by"], ["kao", "as"], ["hrvatski", "Croatian (for a man)"], ["državljanin", "citizen (a man)"]],
      { f: ["da ću se kao hrvatska državljanka", [["hrvatska", "Croatian (for a woman)"], ["državljanka", "citizen (a woman)"]]] }],
    ["pridržavati Ustava i zakona", "abide by the Constitution and the laws",
      [["pridržavati", "to abide by (se pridržavati + the 'of' form)"], ["Ustava", "the Constitution (Ustav, 'of' form)"], ["i", "and"], ["zakona", "the laws (zakon, 'of' form, plural)"]]],
    ["te poštivati pravni poredak,", "and respect the legal order,",
      [["te", "and (formal, adds the second promise)"], ["poštivati", "to respect"], ["pravni", "legal"], ["poredak", "order (object form, same as the dictionary form)"]]],
    ["kulturu i običaje", "the culture and customs",
      [["kulturu", "culture (kultura, object form)"], ["i", "and"], ["običaje", "customs (običaj, object form, plural)"]]],
    ["u Republici Hrvatskoj.", "in the Republic of Croatia.",
      [["u", "in"], ["Republici", "Republic (Republika, 'in' form)"], ["Hrvatskoj", "Croatia (Hrvatska, 'in' form)"]]],
  ],
  // The grammar packed into one sentence, in the course's own terms.
  notes: [
    ["ću + infinitive", "One 'ću' carries both promises: da ću se pridržavati … te poštivati. That is the future tense you know (ja ću raditi)."],
    ["se pridržavati + 'of' form", "To abide by something takes the genitive, so Ustav becomes Ustava and zakoni becomes zakona."],
    ["poštivati + object form", "To respect takes the accusative: kulturu, običaje. Poredak looks unchanged because masculine words for things (not people or animals) keep their dictionary form."],
    ["u + 'in' form", "u Republici Hrvatskoj: Republika and Hrvatska both take -i / -oj after u, like u kući, u Hrvatskoj."],
    ["svojom čašću", "'By my honour' uses the instrumental, the 'with / by' form (s mamom, svojom čašću)."],
  ],
};

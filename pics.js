// Kids' pictures (Riva style): flat shapes in the app's palette, drawn on a 120×120 grid. Keyed by the emoji used in content.js,
// so words keep their emoji as data and the page swaps in the drawing; emoji with no drawing yet still show as emoji.
// Add a drawing by adding its emoji here: [English name, SVG body].
(() => {
  const N = "#13233a", T = "#c4553b", S = "#2d6a8a", SL = "#8db3c4", O = "#6f8350", Y = "#e0a93b", P = "#fffdf8", K = "#efe6d6", B = "#8a5a3c", G = "#9aa3ad", PK = "#e7a0a6", OR = "#e8812f";
  const eyes = (y = 58, dx = 11, r = 3.6, c = N) => `<circle cx="${60 - dx}" cy="${y}" r="${r}" fill="${c}"/><circle cx="${60 + dx}" cy="${y}" r="${r}" fill="${c}"/>`;
  const blob = c => `<path d="M30 34c10-8 46-10 58-2 9 6 8 46 2 56-8 11-48 12-58 4-9-8-12-50-2-58z" fill="${c}"${c === "#ffffff" ? ` stroke="${N}" stroke-opacity=".18" stroke-width="2"` : ""}/>`;
  const dot = c => `<circle cx="60" cy="60" r="32" fill="${c}"${c === "#ffffff" ? ` stroke="${N}" stroke-opacity=".18" stroke-width="2"` : ""}/>`;
  const num = (n, label = String(n)) => {
    const dots = Array.from({ length: n }, (_, i) => { const row = i < 5 ? 0 : 1, col = i % 5; return `<circle cx="${32 + col * 14}" cy="${90 + row * 13}" r="5" fill="${T}"/>`; }).join("");
    return `<text x="60" y="${n ? 74 : 82}" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-size="${label.length > 2 ? 46 : 62}" font-weight="400" fill="${N}">${label}</text>${n ? dots : ""}`;
  };
  const flower = (petal, mid) => `<g fill="${petal}">${[0, 72, 144, 216, 288].map(a => `<ellipse cx="60" cy="38" rx="13" ry="18" transform="rotate(${a} 60 58)"/>`).join("")}</g><circle cx="60" cy="58" r="11" fill="${mid}"/>`;
  const sun = `<g stroke="${Y}" stroke-width="6" stroke-linecap="round">${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<line x1="60" y1="16" x2="60" y2="27" transform="rotate(${a} 60 60)"/>`).join("")}</g><circle cx="60" cy="60" r="24" fill="${Y}"/>`;
  const cloud = c => `<path d="M34 80a14 14 0 0 1 2-28 20 20 0 0 1 38-6 16 16 0 0 1 14 34z" fill="${c}"/>`;
  const cat = (fur, eye) => `<path d="M34 56 L36 26 L56 42z" fill="${fur}"/><path d="M86 56 L84 26 L64 42z" fill="${fur}"/><circle cx="60" cy="64" r="29" fill="${fur}"/>
    <ellipse cx="49" cy="61" rx="3.6" ry="5" fill="${eye}"/><ellipse cx="71" cy="61" rx="3.6" ry="5" fill="${eye}"/><path d="M56 71h8l-4 4z" fill="${eye === N ? N : PK}"/>
    <path d="M28 70h14M28 77l14-3M92 70H78M92 77l-14-3" stroke="${eye === N ? N : K}" stroke-width="1.6" stroke-linecap="round"/>`;
  const dog = `<ellipse cx="33" cy="50" rx="10" ry="22" fill="${N}" transform="rotate(18 33 50)"/><ellipse cx="87" cy="50" rx="10" ry="22" fill="${N}" transform="rotate(-18 87 50)"/>
    <circle cx="60" cy="62" r="30" fill="${P}"/><circle cx="44" cy="46" r="5" fill="${N}"/><circle cx="78" cy="72" r="4" fill="${N}"/><circle cx="72" cy="40" r="3" fill="${N}"/>
    <ellipse cx="60" cy="77" rx="15" ry="11" fill="${K}"/><ellipse cx="60" cy="71" rx="6" ry="4.5" fill="${N}"/>${eyes(58, 11)}`;

  const D = {
    // colours
    "🟥": ["red", blob("#d0342c")], "🟦": ["blue", blob("#2f6fb5")], "🟩": ["green", blob("#4c9a4a")], "🟨": ["yellow", blob("#f2c230")],
    "⬛": ["black", blob("#1f2329")], "⬜": ["white", blob("#ffffff")], "🟫": ["brown", blob(B)], "🟧": ["orange", blob(OR)], "🟪": ["purple", blob("#7e4fa0")],
    "🔴": ["red", dot("#d0342c")], "🔵": ["blue", dot("#2f6fb5")], "🟢": ["green", dot("#4c9a4a")], "🟡": ["yellow", dot("#f2c230")], "⚫": ["black", dot("#1f2329")],
    "⚪": ["white", dot("#ffffff")], "🟤": ["brown", dot(B)], "🩶": ["grey", blob(G)], "🌸": ["pink flower", flower("#e895b0", Y)],
    "🎨": ["paint palette", `<path d="M60 24c22 0 38 14 38 32 0 12-10 14-18 12-8-2-12 4-8 10 4 8-2 14-12 14-22 0-38-16-38-34s16-34 38-34z" fill="${K}" stroke="${B}" stroke-opacity=".35" stroke-width="2"/>
      <circle cx="42" cy="46" r="7" fill="#d0342c"/><circle cx="62" cy="38" r="7" fill="#f2c230"/><circle cx="80" cy="48" r="7" fill="#2f6fb5"/><circle cx="38" cy="68" r="7" fill="#4c9a4a"/>`],
    // numbers: the numeral with that many dots to count
    "0️⃣": ["zero", num(0)], "1️⃣": ["one", num(1)], "2️⃣": ["two", num(2)], "3️⃣": ["three", num(3)], "4️⃣": ["four", num(4)], "5️⃣": ["five", num(5)],
    "6️⃣": ["six", num(6)], "7️⃣": ["seven", num(7)], "8️⃣": ["eight", num(8)], "9️⃣": ["nine", num(9)], "🔟": ["ten", num(10)], "💯": ["one hundred", num(0, "100")],
    "🔢": ["numbers", `<text x="60" y="76" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-size="44" fill="${N}">123</text>`],
    // animals
    "🐕": ["dog", dog], "🐶": ["dog", dog], "🐈": ["cat", cat(T, N)], "🐱": ["cat", cat(T, N)], "🐈‍⬛": ["black cat", cat(N, Y)],
    "🐴": ["horse", `<path d="M44 34 L46 16 L56 30z M76 34 L74 16 L64 30z" fill="${B}"/><ellipse cx="60" cy="60" rx="22" ry="32" fill="${B}"/><path d="M52 26c6-6 14-6 18 2-6 0-10 4-12 10-2-5-4-9-6-12z" fill="${N}"/>
      <ellipse cx="60" cy="84" rx="17" ry="12" fill="${K}"/><circle cx="54" cy="85" r="2.6" fill="${N}"/><circle cx="66" cy="85" r="2.6" fill="${N}"/>${eyes(52, 12, 3.4)}`],
    "🐄": ["cow", `<path d="M40 36q-6-12 2-16M80 36q6-12-2-16" stroke="${Y}" stroke-width="6" stroke-linecap="round" fill="none"/><ellipse cx="28" cy="50" rx="13" ry="7" fill="${P}" transform="rotate(20 28 50)"/><ellipse cx="92" cy="50" rx="13" ry="7" fill="${P}" transform="rotate(-20 92 50)"/>
      <ellipse cx="60" cy="58" rx="26" ry="28" fill="${P}"/><path d="M38 44c6-8 16-8 18 2-4 8-14 8-18-2z" fill="${N}"/><path d="M72 60c4-6 12-4 12 4-4 6-10 4-12-4z" fill="${N}"/>
      <ellipse cx="60" cy="80" rx="22" ry="14" fill="${PK}"/><circle cx="52" cy="80" r="3" fill="${N}"/><circle cx="68" cy="80" r="3" fill="${N}"/>${eyes(56, 11, 3.4)}`],
    "🐖": ["pig", `<path d="M36 46 L34 24 L54 36z M84 46 L86 24 L66 36z" fill="#d98088"/><circle cx="60" cy="62" r="30" fill="${PK}"/><ellipse cx="60" cy="72" rx="14" ry="10" fill="#d98088"/>
      <ellipse cx="55" cy="72" rx="2.6" ry="4" fill="${N}"/><ellipse cx="65" cy="72" rx="2.6" ry="4" fill="${N}"/>${eyes(54, 12, 3.4)}`],
    "🐑": ["sheep", `<g fill="${P}">${[[40, 40], [60, 32], [80, 40], [88, 60], [80, 80], [60, 88], [40, 80], [32, 60]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="15"/>`).join("")}</g><circle cx="60" cy="60" r="26" fill="${P}"/>
      <ellipse cx="38" cy="56" rx="9" ry="5" fill="${N}" transform="rotate(-25 38 56)"/><ellipse cx="82" cy="56" rx="9" ry="5" fill="${N}" transform="rotate(25 82 56)"/><ellipse cx="60" cy="64" rx="15" ry="20" fill="${N}"/>${eyes(60, 6, 2.6, P)}`],
    "🐐": ["goat", `<path d="M50 34c-8-10-16-10-20-4M70 34c8-10 16-10 20-4" stroke="${N}" stroke-width="6" stroke-linecap="round" fill="none"/><ellipse cx="34" cy="50" rx="11" ry="5" fill="#cfc8bb" transform="rotate(20 34 50)"/><ellipse cx="86" cy="50" rx="11" ry="5" fill="#cfc8bb" transform="rotate(-20 86 50)"/>
      <ellipse cx="60" cy="58" rx="20" ry="28" fill="${P}"/><path d="M54 84 L60 104 L66 84z" fill="${G}"/><ellipse cx="60" cy="78" rx="10" ry="6" fill="#e3d9c6"/>${eyes(54, 10, 3.2)}`],
    "🐔": ["hen", `<path d="M50 30c0-8 6-8 8-2 2-8 8-8 8 0 4-4 8 0 4 6z" fill="${T}"/><ellipse cx="62" cy="70" rx="30" ry="28" fill="${P}"/><circle cx="56" cy="44" r="16" fill="${P}"/>
      <path d="M40 44 L28 48 L40 52z" fill="${Y}"/><path d="M42 54c-2 6 0 10 4 10 2-4 0-8-4-10z" fill="${T}"/><circle cx="52" cy="42" r="3" fill="${N}"/><path d="M70 66c8-2 14 4 14 12-8 2-14-4-14-12z" fill="${K}"/><path d="M52 98v8M66 98v8" stroke="${Y}" stroke-width="4" stroke-linecap="round"/>`],
    "🦆": ["duck", `<ellipse cx="66" cy="74" rx="32" ry="22" fill="#f2c230"/><path d="M96 66 L106 58 L102 74z" fill="#f2c230"/><circle cx="46" cy="46" r="17" fill="#f2c230"/><path d="M30 46 L14 50 L30 56z" fill="${OR}"/>
      <circle cx="44" cy="42" r="3" fill="${N}"/><path d="M62 70c10-4 22 0 24 10-12 4-22 0-24-10z" fill="${Y}"/>`],
    "🐦": ["bird", `<path d="M34 64 L14 54 L18 72z" fill="${B}"/><circle cx="58" cy="62" r="28" fill="${Y}"/><path d="M85 57 L101 63 L85 69z" fill="${T}"/>
      <ellipse cx="54" cy="70" rx="15" ry="10" fill="#b98322" transform="rotate(-15 54 70)"/><circle cx="70" cy="54" r="3.8" fill="${N}"/><path d="M52 90v10M64 90v10" stroke="${T}" stroke-width="4" stroke-linecap="round"/>`],
    "🐭": ["mouse", `<circle cx="34" cy="38" r="17" fill="${G}"/><circle cx="86" cy="38" r="17" fill="${G}"/><circle cx="34" cy="38" r="9" fill="${PK}"/><circle cx="86" cy="38" r="9" fill="${PK}"/>
      <circle cx="60" cy="66" r="27" fill="${G}"/><ellipse cx="60" cy="78" rx="5" ry="4" fill="${PK}"/><path d="M30 74h16M30 82l16-4M90 74H74M90 82l-16-4" stroke="${N}" stroke-width="1.6" stroke-linecap="round"/>${eyes(62, 10, 3.4)}`],
    "🐰": ["rabbit", `<ellipse cx="46" cy="30" rx="9" ry="24" fill="${P}"/><ellipse cx="74" cy="30" rx="9" ry="24" fill="${P}"/><ellipse cx="46" cy="30" rx="4" ry="16" fill="${PK}"/><ellipse cx="74" cy="30" rx="4" ry="16" fill="${PK}"/>
      <circle cx="60" cy="72" r="27" fill="${P}"/><path d="M56 78h8l-4 4z" fill="${PK}"/><rect x="56" y="84" width="8" height="7" rx="2" fill="${K}"/>${eyes(68, 10, 3.4)}`],
    "🐻": ["bear", `<circle cx="36" cy="38" r="12" fill="${B}"/><circle cx="84" cy="38" r="12" fill="${B}"/><circle cx="36" cy="38" r="6" fill="#b07a55"/><circle cx="84" cy="38" r="6" fill="#b07a55"/>
      <circle cx="60" cy="64" r="30" fill="${B}"/><ellipse cx="60" cy="76" rx="15" ry="12" fill="#d9b38c"/><ellipse cx="60" cy="71" rx="6" ry="4.5" fill="${N}"/>${eyes(58, 12, 3.4)}`],
    "🐺": ["wolf", `<path d="M30 52 L34 18 L54 40z M90 52 L86 18 L66 40z" fill="#6c7682"/><path d="M28 50c4-14 18-18 32-18s28 4 32 18c-4 16-16 34-32 44C44 84 32 66 28 50z" fill="${G}"/>
      <path d="M44 68c6-4 26-4 32 0-4 12-10 18-16 22-6-4-12-10-16-22z" fill="${K}"/><ellipse cx="60" cy="74" rx="6" ry="4.5" fill="${N}"/><path d="M44 56l10 2M76 56l-10 2" stroke="${N}" stroke-width="3" stroke-linecap="round"/>`],
    "🦁": ["lion", `<g fill="#b9772a">${Array.from({ length: 12 }, (_, i) => `<circle cx="${60 + 32 * Math.cos(i * Math.PI / 6)}" cy="${62 + 32 * Math.sin(i * Math.PI / 6)}" r="13"/>`).join("")}</g>
      <circle cx="60" cy="62" r="28" fill="${Y}"/><ellipse cx="60" cy="74" rx="13" ry="10" fill="#f1d08a"/><path d="M55 69h10l-5 5z" fill="${N}"/>${eyes(57, 11, 3.4)}`],
    "🐘": ["elephant", `<ellipse cx="30" cy="58" rx="20" ry="26" fill="#7d8792"/><ellipse cx="90" cy="58" rx="20" ry="26" fill="#7d8792"/><circle cx="60" cy="54" r="26" fill="${G}"/>
      <path d="M54 66c0 14-2 26 6 32 6 4 10 0 8-4-4-2-4-14-4-28z" fill="${G}"/>${eyes(50, 11, 3.4)}`],
    "🐒": ["monkey", `<circle cx="28" cy="60" r="12" fill="${B}"/><circle cx="92" cy="60" r="12" fill="${B}"/><circle cx="28" cy="60" r="6" fill="#d9b38c"/><circle cx="92" cy="60" r="6" fill="#d9b38c"/>
      <circle cx="60" cy="60" r="30" fill="${B}"/><path d="M60 50c-4-8-22-8-22 6 0 6 2 10 6 12-6 4-6 18 16 18s22-14 16-18c4-2 6-6 6-12 0-14-18-14-22-6z" fill="#d9b38c"/>
      <circle cx="56" cy="74" r="1.8" fill="${N}"/><circle cx="64" cy="74" r="1.8" fill="${N}"/><path d="M52 81q8 5 16 0" stroke="${N}" stroke-width="2" fill="none" stroke-linecap="round"/>${eyes(58, 9, 3.2)}`],
    "🐸": ["frog", `<circle cx="40" cy="40" r="14" fill="${O}"/><circle cx="80" cy="40" r="14" fill="${O}"/><ellipse cx="60" cy="66" rx="36" ry="26" fill="${O}"/>
      <circle cx="40" cy="40" r="8" fill="${P}"/><circle cx="80" cy="40" r="8" fill="${P}"/><circle cx="41" cy="41" r="4" fill="${N}"/><circle cx="79" cy="41" r="4" fill="${N}"/>
      <path d="M40 72q20 12 40 0" stroke="${N}" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="36" cy="66" r="4" fill="${PK}" opacity=".8"/><circle cx="84" cy="66" r="4" fill="${PK}" opacity=".8"/>`],
    "🦋": ["butterfly", `<ellipse cx="38" cy="44" rx="22" ry="18" fill="${T}" transform="rotate(-20 38 44)"/><ellipse cx="82" cy="44" rx="22" ry="18" fill="${T}" transform="rotate(20 82 44)"/>
      <ellipse cx="42" cy="78" rx="15" ry="13" fill="${Y}" transform="rotate(20 42 78)"/><ellipse cx="78" cy="78" rx="15" ry="13" fill="${Y}" transform="rotate(-20 78 78)"/>
      <circle cx="36" cy="44" r="6" fill="${P}"/><circle cx="84" cy="44" r="6" fill="${P}"/><rect x="56" y="34" width="8" height="56" rx="4" fill="${N}"/><path d="M58 36q-6-14-14-16M62 36q6-14 14-16" stroke="${N}" stroke-width="2" fill="none" stroke-linecap="round"/>`],
    "🐍": ["snake", `<path d="M22 92c10 8 26 4 30-8s-10-20-4-32 26-10 32-2" stroke="${O}" stroke-width="14" fill="none" stroke-linecap="round"/><path d="M22 92c10 8 26 4 30-8s-10-20-4-32 26-10 32-2" stroke="${Y}" stroke-width="3" stroke-dasharray="3 9" fill="none" stroke-linecap="round"/>
      <ellipse cx="86" cy="50" rx="14" ry="11" fill="${O}"/><circle cx="90" cy="46" r="2.8" fill="${N}"/><path d="M100 52h8l3-3M108 52l3 3" stroke="${T}" stroke-width="2" fill="none" stroke-linecap="round"/>`],
    "🐬": ["dolphin", `<path d="M14 70c10-22 40-34 66-26 10 3 18 8 24 14l-12 2c-2 8-10 14-22 16-10 2-22 0-30 4l-8 12-4-12c-6 0-10-4-14-10z" fill="${S}"/><path d="M58 44l8-14 6 14z" fill="${S}"/>
      <path d="M36 72c12 6 30 6 44 0-6 8-34 10-44 0z" fill="${SL}"/><circle cx="84" cy="56" r="3" fill="${N}"/>`],
    "🐟": ["fish", `<path d="M86 60 L108 42 L104 60 L108 78z" fill="${SL}"/><ellipse cx="54" cy="60" rx="36" ry="23" fill="${S}"/><path d="M62 40 q6 20 0 40" fill="none" stroke="${SL}" stroke-width="5" stroke-linecap="round"/><circle cx="34" cy="55" r="4" fill="${N}"/>`],
    "🐾": ["animals", `<g fill="${N}"><ellipse cx="60" cy="74" rx="20" ry="16"/><ellipse cx="34" cy="50" rx="8" ry="11"/><ellipse cx="50" cy="36" rx="8" ry="11"/><ellipse cx="70" cy="36" rx="8" ry="11"/><ellipse cx="86" cy="50" rx="8" ry="11"/></g>`],
    // sky, nature and greetings
    "☀️": ["sun", sun], "🌞": ["sun", sun + `<path d="M50 66q10 8 20 0" stroke="${N}" stroke-width="2.6" fill="none" stroke-linecap="round"/>${eyes(56, 8, 2.6)}`],
    "🌙": ["moon", `<path d="M70 22a38 38 0 1 0 28 56A30 30 0 0 1 70 22z" fill="${Y}"/>`],
    "🌅": ["sunrise", `<circle cx="60" cy="72" r="26" fill="${Y}"/><rect x="10" y="72" width="100" height="40" fill="${S}"/><path d="M22 84h30M64 84h34M32 96h56" stroke="${SL}" stroke-width="4" stroke-linecap="round"/>`],
    "🌆": ["evening", `<rect x="10" y="10" width="100" height="100" rx="18" fill="${N}"/><circle cx="84" cy="34" r="9" fill="${Y}"/><path d="M18 102V70h18V56h16v46M56 102V62h20v40M80 102V74h22v28z" fill="#2b3b52"/>
      <g fill="${Y}"><rect x="24" y="76" width="5" height="6"/><rect x="42" y="64" width="5" height="6"/><rect x="62" y="70" width="5" height="6"/><rect x="62" y="84" width="5" height="6"/><rect x="88" y="82" width="5" height="6"/></g>`],
    "🌧️": ["rain", cloud(SL) + `<path d="M42 88l-4 10M60 88l-4 10M78 88l-4 10" stroke="${S}" stroke-width="4" stroke-linecap="round"/>`],
    "☁️": ["cloud", cloud(SL)],
    "❄️": ["snow", `<g stroke="${S}" stroke-width="5" stroke-linecap="round">${[0, 60, 120].map(a => `<g transform="rotate(${a} 60 60)"><line x1="60" y1="22" x2="60" y2="98"/><path d="M50 30l10 10 10-10M50 90l10-10 10 10" fill="none"/></g>`).join("")}</g>`],
    "🌊": ["sea", `<path d="M10 70c12-14 24-14 34 0s22 14 32 0 24-14 34 0v40H10z" fill="${S}"/><path d="M10 54c12-14 24-14 34 0s22 14 32 0 24-14 34 0" stroke="${SL}" stroke-width="6" fill="none" stroke-linecap="round"/>`],
    "🌳": ["tree", `<rect x="54" y="66" width="12" height="38" rx="3" fill="${B}"/><circle cx="60" cy="48" r="30" fill="${O}"/><circle cx="42" cy="62" r="16" fill="${O}"/><circle cx="78" cy="62" r="16" fill="${O}"/>`],
    "🌼": ["flower", flower(Y, B) + `<path d="M60 70v34" stroke="${O}" stroke-width="5"/>`],
    "🚪": ["door", `<rect x="34" y="16" width="52" height="92" rx="4" fill="${T}"/><rect x="42" y="26" width="36" height="30" rx="3" fill="#b04a31"/><rect x="42" y="64" width="36" height="34" rx="3" fill="#b04a31"/><circle cx="74" cy="62" r="4" fill="${Y}"/>`],
    "🏠": ["house", `<path d="M22 58 L60 26 L98 58z" fill="${T}"/><rect x="30" y="56" width="60" height="44" fill="${P}"/><rect x="52" y="72" width="16" height="28" fill="${N}"/><rect x="36" y="64" width="12" height="12" fill="${SL}"/><rect x="72" y="64" width="12" height="12" fill="${SL}"/>`],
    "🔑": ["key", `<circle cx="40" cy="60" r="18" fill="none" stroke="${Y}" stroke-width="9"/><path d="M58 60h44M90 60v14M78 60v10" stroke="${Y}" stroke-width="9" stroke-linecap="round"/>`],
    "❓": ["question", `<text x="60" y="88" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-size="84" fill="${T}">?</text>`],
    "👀": ["eyes", `<ellipse cx="42" cy="60" rx="16" ry="22" fill="${P}" stroke="${N}" stroke-opacity=".2" stroke-width="2"/><ellipse cx="78" cy="60" rx="16" ry="22" fill="${P}" stroke="${N}" stroke-opacity=".2" stroke-width="2"/><circle cx="48" cy="62" r="8" fill="${N}"/><circle cx="84" cy="62" r="8" fill="${N}"/>`],
    // food
    "🍎": ["apple", `<path d="M60 36c-6-10-2-16 2-18" fill="none" stroke="${N}" stroke-width="4" stroke-linecap="round"/><path d="M62 30c8-10 20-8 22-6-6 8-16 10-22 6z" fill="${O}"/>
      <path d="M60 40c-12-8-36-4-36 22 0 22 16 38 28 38 4 0 6-2 8-2s4 2 8 2c12 0 28-16 28-38 0-26-24-30-36-22z" fill="${T}"/>`],
    "🍌": ["banana", `<path d="M26 40c4 34 34 52 70 38-4 10-20 22-40 18C34 92 20 66 26 40z" fill="#f2c230"/><path d="M24 40l-4-8 8 2z" fill="${B}"/><path d="M96 78l6 2-4 4z" fill="${B}"/>`],
    "🍊": ["orange", `<circle cx="60" cy="64" r="32" fill="${OR}"/><path d="M60 32c4-8 14-10 20-8-4 8-12 10-20 8z" fill="${O}"/><circle cx="50" cy="56" r="2" fill="#f2a35a"/><circle cx="70" cy="70" r="2" fill="#f2a35a"/><circle cx="56" cy="80" r="2" fill="#f2a35a"/>`],
    "🍓": ["strawberry", `<path d="M30 46c10-8 50-8 60 0 4 26-14 50-30 56-16-6-34-30-30-56z" fill="#d0342c"/><path d="M40 42l10-14 10 10 10-10 10 14-20 6z" fill="${O}"/>
      <g fill="${Y}">${[[46, 58], [60, 56], [74, 58], [52, 72], [68, 72], [60, 86]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="1.8" ry="3"/>`).join("")}</g>`],
    "🍞": ["bread", `<path d="M20 60c0-18 18-26 40-26s40 8 40 26c0 6-4 8-8 8v26H28V68c-4 0-8-2-8-8z" fill="#d9a066"/><path d="M28 68h64v26H28z" fill="#e8c08a"/><path d="M40 46l6 8M56 42l6 8M72 44l6 8" stroke="#b07a40" stroke-width="3" stroke-linecap="round"/>`],
    "🥛": ["milk", `<path d="M38 24h44l-6 82H44z" fill="${P}" stroke="${S}" stroke-opacity=".5" stroke-width="3" stroke-linejoin="round"/><path d="M40 44h40l-4 58H44z" fill="#f4f6f8"/>`],
    "🧀": ["cheese", `<path d="M18 80 L84 40 L102 80z" fill="#f2c230"/><path d="M18 80h84v16H18z" fill="#e0a93b"/><circle cx="62" cy="64" r="6" fill="#e0a93b"/><circle cx="80" cy="72" r="4" fill="#e0a93b"/><circle cx="40" cy="88" r="4" fill="#c98f22"/>`],
    "🥚": ["egg", `<ellipse cx="60" cy="64" rx="26" ry="34" fill="${P}" stroke="${N}" stroke-opacity=".15" stroke-width="2"/><ellipse cx="52" cy="50" rx="6" ry="10" fill="#fff" opacity=".9"/>`],
    "💧": ["water", `<path d="M60 18c14 24 30 40 30 58a30 30 0 0 1-60 0c0-18 16-34 30-58z" fill="${S}"/><path d="M46 76a14 14 0 0 0 10 14" stroke="${SL}" stroke-width="4" fill="none" stroke-linecap="round"/>`],
  };

  // people: one bust drawn with different hair and clothes, so family words read as one cast
  const SK = "#f1c9a5";
  const bust = ({ hair = B, style = "short", shirt = S, beard = false, closed = false, glasses = false, tie = false, veil = false } = {}) => {
    const top = `<path d="M38 50c0-17 10-26 22-26s22 9 22 26c-4-9-12-13-22-13s-18 4-22 13z" fill="${hair}"/>`;
    const hairs = {
      short: top,
      long: `<rect x="35" y="40" width="11" height="40" rx="5" fill="${hair}"/><rect x="74" y="40" width="11" height="40" rx="5" fill="${hair}"/>` + top,
      bun: top + `<circle cx="60" cy="24" r="9" fill="${hair}"/>`,
      bald: `<ellipse cx="39" cy="48" rx="5" ry="8" fill="${hair}"/><ellipse cx="81" cy="48" rx="5" ry="8" fill="${hair}"/>`,
      curly: [[42, 36], [50, 28], [60, 26], [70, 28], [78, 36]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="8" fill="${hair}"/>`).join(""),
      tuft: `<path d="M58 28q4-8 10-4-6 0-6 6z" fill="${hair}"/>`,
    };
    const eye = closed ? `<path d="M46 52q4 3 8 0M66 52q4 3 8 0" stroke="${N}" stroke-width="2.4" fill="none" stroke-linecap="round"/>` : `<circle cx="51" cy="51" r="2.8" fill="${N}"/><circle cx="69" cy="51" r="2.8" fill="${N}"/>`;
    return (veil ? `<path d="M34 46c0-26 52-26 52 0l6 50H28z" fill="${P}" opacity=".95"/>` : "") +
      `<path d="M24 114c0-22 16-34 36-34s36 12 36 34z" fill="${shirt}"/><rect x="53" y="66" width="14" height="16" fill="${SK}"/>` +
      (tie ? `<path d="M52 84l8 4 8-4v8l-8-4-8 4z" fill="${N}"/>` : "") +
      `<circle cx="60" cy="50" r="22" fill="${SK}"/>${hairs[style]}${eye}` +
      (glasses ? `<g fill="none" stroke="${N}" stroke-width="2"><circle cx="51" cy="51" r="6"/><circle cx="69" cy="51" r="6"/><path d="M57 51h6"/></g>` : "") +
      (beard ? `<path d="M50 61q10-5 20 0q-10 4-20 0z" fill="${hair}"/>` : `<path d="M53 60q7 5 14 0" stroke="${N}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`);
  };
  const at = (x, y, k, body) => `<g transform="translate(${x} ${y}) scale(${k})">${body}</g>`;
  const woman = bust({ hair: B, style: "long", shirt: T }), man = bust({ hair: N, style: "short", shirt: S });
  const boy = bust({ hair: B, style: "short", shirt: O }), girl = bust({ hair: "#d9a24a", style: "long", shirt: PK });
  const face = mouth => `<circle cx="60" cy="60" r="34" fill="#f2c230"/>` + mouth;
  const hand = `<g fill="${SK}"><rect x="40" y="56" width="42" height="42" rx="15"/>${[[41, 26, 34], [51, 18, 42], [61, 20, 40], [71, 28, 32]].map(([x, y, hh]) => `<rect x="${x}" y="${y}" width="10" height="${hh + 10}" rx="5"/>`).join("")}<rect x="24" y="58" width="10" height="30" rx="5" transform="rotate(-40 29 73)"/></g>`;
  const thumb = `<g fill="${SK}"><rect x="38" y="54" width="46" height="40" rx="12"/><rect x="44" y="22" width="15" height="42" rx="7.5"/></g><path d="M62 64h22M62 74h22M62 84h20" stroke="#d9a989" stroke-width="2.4" stroke-linecap="round"/><rect x="34" y="94" width="54" height="14" rx="4" fill="${S}"/>`;
  Object.assign(D, {
    "🙂": ["smiling face", face(`<circle cx="48" cy="52" r="4" fill="${N}"/><circle cx="72" cy="52" r="4" fill="${N}"/><path d="M46 70q14 10 28 0" stroke="${N}" stroke-width="3.4" fill="none" stroke-linecap="round"/>`)],
    "😊": ["happy face", face(`<path d="M42 52q6-6 12 0M66 52q6-6 12 0" stroke="${N}" stroke-width="3.4" fill="none" stroke-linecap="round"/><path d="M44 68q16 14 32 0" stroke="${N}" stroke-width="3.4" fill="none" stroke-linecap="round"/><circle cx="40" cy="64" r="6" fill="${T}" opacity=".35"/><circle cx="80" cy="64" r="6" fill="${T}" opacity=".35"/>`)],
    "😀": ["grinning face", face(`<circle cx="48" cy="50" r="4.5" fill="${N}"/><circle cx="72" cy="50" r="4.5" fill="${N}"/><path d="M40 64h40q-2 20-20 20t-20-20z" fill="${N}"/><path d="M44 64h32v6H44z" fill="${P}"/>`)],
    "👋": ["waving hand", `<g transform="rotate(-14 60 64)">${hand}</g><path d="M92 30q8 8 6 20M100 22q12 12 8 30" stroke="${N}" stroke-opacity=".5" stroke-width="3" fill="none" stroke-linecap="round"/>`],
    "✋": ["hand", hand],
    "👍": ["thumbs up", thumb], "👎": ["thumbs down", `<g transform="rotate(180 60 64)">${thumb}</g>`],
    "🙏": ["thank you", `<path d="M58 22c-8 2-14 30-16 50l-8 22h24z" fill="${SK}"/><path d="M62 22c8 2 14 30 16 50l8 22H62z" fill="${SK}"/><rect x="30" y="92" width="28" height="18" rx="4" fill="${S}"/><rect x="62" y="92" width="28" height="18" rx="4" fill="${S}"/>`],
    "🤝": ["handshake", `<rect x="8" y="52" width="30" height="24" rx="4" fill="${S}"/><rect x="82" y="52" width="30" height="24" rx="4" fill="${T}"/><rect x="34" y="50" width="34" height="28" rx="12" fill="${SK}"/><rect x="54" y="46" width="32" height="28" rx="12" fill="#e2b48c"/><path d="M60 60h16M60 68h14" stroke="#c99a74" stroke-width="2.4" stroke-linecap="round"/>`],
    "🎩": ["top hat", `<ellipse cx="60" cy="88" rx="44" ry="12" fill="${N}"/><path d="M38 34h44v54H38z" fill="${N}"/><ellipse cx="60" cy="34" rx="22" ry="6" fill="#2b3b52"/><rect x="38" y="70" width="44" height="9" fill="${T}"/>`],
    "📛": ["name tag", `<rect x="16" y="30" width="88" height="62" rx="10" fill="${P}" stroke="${T}" stroke-width="4"/><path d="M18 40a8 8 0 0 1 8-8h68a8 8 0 0 1 8 8v8H18z" fill="${T}"/><path d="M34 70h52" stroke="${N}" stroke-width="4" stroke-linecap="round"/><path d="M34 80h30" stroke="${N}" stroke-opacity=".3" stroke-width="4" stroke-linecap="round"/>`],
    "🙇": ["excuse me", bust({ hair: N, style: "short", shirt: S, closed: true })],
    "💁": ["here you go", bust({ hair: B, style: "long", shirt: Y })],
    // family
    "👩": ["woman", woman], "👨": ["man", man], "👦": ["boy", at(10, 22, .84, boy)], "👧": ["girl", at(10, 22, .84, girl)],
    "👵": ["grandma", bust({ hair: "#c9ccd1", style: "bun", shirt: "#9b86b5", glasses: true })], "👴": ["grandpa", bust({ hair: "#c9ccd1", style: "bald", shirt: B, beard: true })],
    "🧒": ["child", at(10, 22, .84, bust({ hair: N, style: "curly", shirt: Y }))], "👶": ["baby", at(14, 30, .76, bust({ hair: "#d9a24a", style: "tuft", shirt: "#f4f6f8" }))],
    "🤵": ["husband", bust({ hair: N, style: "short", shirt: "#2b3b52", tie: true })], "👰": ["wife", bust({ hair: B, style: "long", shirt: P, veil: true })],
    "👫": ["parents", at(-6, 14, .7, woman) + at(42, 14, .7, man)], "👧👦": ["children", at(-4, 26, .64, girl) + at(48, 26, .64, boy)],
    "🧑‍🤝‍🧑": ["friends", at(-4, 26, .64, boy) + at(48, 26, .64, bust({ hair: N, style: "curly", shirt: T }))],
    "👨‍👩‍👧‍👦": ["family", at(-6, 4, .56, woman) + at(52, 4, .56, man) + at(4, 52, .46, girl) + at(60, 52, .46, boy)],
    "👩‍🏫": ["teacher", bust({ hair: B, style: "bun", shirt: O, glasses: true })],
  });
  window.PICS = D;
})();

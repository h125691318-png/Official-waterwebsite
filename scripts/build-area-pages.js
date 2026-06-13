const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const siteUrl = "https://sdhx-tw.com";

const areas = [
  {
    slug: "taipei",
    file: "pages/area-taipei.html",
    title: "台北管路疏通案例｜萬華廚房排水堵塞高壓水刀清洗｜百川通",
    description: "台北市萬華區廚房排水堵塞案例，百川通使用高壓水刀清洗處理排水不良與積水回堵，提供台北管路疏通、管路內視鏡檢測與 24 小時諮詢服務。",
    area: "台北市萬華區",
    service: "台北管路疏通、廚房排水堵塞、高壓水刀清洗",
    questions: [
      ["台北廚房排水堵塞適合用高壓水刀嗎？", "若是油垢、皂垢或污泥長期附著造成反覆堵塞，高壓水刀可沖洗管壁並改善排水速度。"],
      ["台北可以做管路內視鏡檢測嗎？", "可以。內視鏡可協助確認油垢堆積、異物卡住、管線破損或坡度異常。"],
      ["台北是否提供 24 小時諮詢？", "百川通提供 24 小時 LINE 諮詢，可先傳照片、影片與地址區域。"]
    ]
  },
  {
    slug: "taoyuan",
    file: "pages/area-taoyuan.html",
    title: "桃園管路疏通案例｜大園廁所排水堵塞高壓水刀清洗｜百川通",
    description: "桃園市大園區透天三樓廁所排水堵塞案例，百川通使用高壓水刀清洗改善積水回堵，提供桃園管路疏通、排水管堵塞處理與管路內視鏡檢測。",
    area: "桃園市大園區",
    service: "桃園管路疏通、廁所排水堵塞、高壓水刀清洗",
    questions: [
      ["桃園廁所排水回堵要怎麼判斷原因？", "常見原因包含毛髮、污泥、異物卡住或管線坡度不良，反覆堵塞建議搭配內視鏡檢測。"],
      ["桃園透天三樓排水堵塞可以處理嗎？", "可以先依樓層、排水口位置與堵塞範圍評估施工方式，必要時使用高壓水刀清洗。"],
      ["桃園服務可以先用 LINE 詢問嗎？", "可以。建議提供地區、堵塞位置、照片或影片，方便初步判斷與安排。"]
    ]
  },
  {
    slug: "hsinchu",
    file: "pages/area-hsinchu.html",
    title: "新竹管路疏通案例｜竹東廚房油污堵塞高壓水刀清洗｜百川通",
    description: "新竹縣竹東鎮廚房油污堆積造成排水堵塞案例，百川通使用高壓水刀清洗改善積水回堵，提供新竹管路疏通、廚房排水管清洗與內視鏡檢測。",
    area: "新竹縣竹東鎮",
    service: "新竹管路疏通、廚房油污堵塞、排水管清洗",
    questions: [
      ["新竹廚房油污堵塞為什麼容易反覆發生？", "油脂冷卻後會附著在管壁，逐漸卡住污泥與食物殘渣，造成排水變慢或再次堵塞。"],
      ["高壓水刀可以清廚房排水管油垢嗎？", "高壓水刀可沖洗管壁油垢與污泥，適合油污堆積、排水變慢與反覆堵塞。"],
      ["新竹竹東可安排到府評估嗎？", "可先透過 LINE 提供照片、影片與地址區域，再依狀況安排評估與施工。"]
    ]
  },
  {
    slug: "miaoli",
    file: "pages/area-miaoli.html",
    title: "苗栗管路疏通案例｜後龍廚房油污堵塞高壓水刀清洗｜百川通",
    description: "苗栗縣後龍鎮一樓廚房油污堆積造成排水堵塞案例，百川通使用高壓水刀清洗處理積水回堵，提供苗栗管路疏通與管路內視鏡檢測服務。",
    area: "苗栗縣後龍鎮",
    service: "苗栗管路疏通、廚房排水堵塞、油污清洗",
    questions: [
      ["苗栗廚房排水堵塞需要馬上施工嗎？", "若已經積水回堵、排水完全不下去或有臭味，建議盡快處理。"],
      ["苗栗後龍可以做水刀通管嗎？", "可依現場管線條件評估高壓水刀清洗，尤其適合油污厚、污泥多或反覆堵塞的排水管。"],
      ["施工前需要準備什麼？", "建議先清出排水口周邊空間，並提供堵塞位置、發生時間與照片。"]
    ]
  },
  {
    slug: "taichung",
    file: "pages/area-taichung.html",
    title: "台中管路疏通案例｜清水餐飲廚房油污堵塞高壓水刀清洗｜百川通",
    description: "台中市清水區餐飲廚房油污堆積造成排水堵塞案例，百川通使用高壓水刀清洗改善積水回堵，提供台中管路疏通、餐飲廚房排水管清洗與內視鏡檢測。",
    area: "台中市清水區",
    service: "台中管路疏通、餐飲廚房油污堵塞、水刀清洗",
    questions: [
      ["台中餐飲廚房排水堵塞適合水刀清洗嗎？", "餐飲廚房通常油污量較高，若排水變慢或反覆堵塞，高壓水刀清洗能較完整沖洗管壁油垢。"],
      ["營業店面施工會影響營業嗎？", "施工時間可依現場狀況討論，建議安排非尖峰時段並先確認施工空間。"],
      ["台中清水可以先傳照片估狀況嗎？", "可以。請提供堵塞位置、照片或影片、店面型態與大約地址區域。"]
    ]
  },
  {
    slug: "yilan",
    file: "pages/area-yilan.html",
    title: "宜蘭管路疏通案例｜羅東民宿廚房油污堵塞高壓水刀清洗｜百川通",
    description: "宜蘭縣羅東鎮民宿廚房油污堆積造成排水堵塞案例，百川通使用高壓水刀清洗處理積水回堵，提供宜蘭管路疏通、民宿廚房排水管清洗與內視鏡檢測。",
    area: "宜蘭縣羅東鎮",
    service: "宜蘭管路疏通、民宿廚房排水堵塞、高壓水刀清洗",
    questions: [
      ["宜蘭民宿廚房排水堵塞怎麼處理？", "可先檢查排水口與管線狀況，若油垢堆積嚴重或反覆堵塞，通常會評估高壓水刀清洗。"],
      ["民宿排水管可以做內視鏡檢測嗎？", "可以。內視鏡可協助查看油垢、異物、管線破損或其他異常。"],
      ["宜蘭羅東可以提供 24 小時諮詢嗎？", "可透過 LINE 先提供照片、影片與地點，百川通會依現場狀況回覆建議。"]
    ]
  }
];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));
}

function normalizeArticle(html) {
  return html
    .replace('<article class="page area-case-page"', '<article class="page active area-case-page"')
    .replace(/href="#home" data-page-link="home"/g, 'href="index.html#home"')
    .replace(/href="#area" data-page-link="area"/g, 'href="index.html#area"');
}

function header() {
  return `
  <div class="topbar">LINE ID：567tonwater｜電話：0983-313-815｜服務地區：桃園・新竹・苗栗・台中・台北・宜蘭</div>
  <header>
    <nav class="nav" aria-label="主選單">
      <a class="brand" href="index.html#home" aria-label="歐佳利百川通首頁">
        <span class="brand-logo-wrap">
          <img class="brand-logo" src="img/Gemini_Generated_Image_9631yw9631yw9631.png" alt="歐佳利百川通 Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" />
          <span class="logo-fallback">歐</span>
        </span>
        <span class="brand-text">
          <span class="brand-title">水刀服務</span>
          <small>免打牆止漏 水刀通管 水刀清潔</small>
        </span>
      </a>
      <div class="menu">
        <a href="index.html#home">首頁</a>
        <div class="menu-group">
          <button class="menu-trigger" type="button" data-menu-group="pipe">水管工程服務</button>
          <div class="submenu" aria-label="水管工程服務">
            <a href="index.html#leak-repair">冷熱水管免打牆止漏</a>
            <a href="index.html#waterjet">水刀疏通通管</a>
          </div>
        </div>
        <a href="index.html#process">施工流程</a>
        <a href="index.html#area">服務範圍</a>
        <a href="index.html#faq">常見問題</a>
        <a href="index.html#contact">聯絡我們</a>
      </div>
      <button class="nav-toggle" type="button" aria-label="開啟選單" aria-expanded="false">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M4 12h16"></path><path d="M4 17h16"></path></svg>
      </button>
      <a class="nav-cta" href="tel:0983313815">立即來電</a>
    </nav>
  </header>`;
}

function footer() {
  return `
  <div class="sticky-cta">
    <a class="line-btn" href="https://line.me/R/ti/p/~567tonwater" target="_blank" rel="noopener" aria-label="LINE">LINE</a>
    <a class="phone-btn" href="tel:0983313815" aria-label="電話">☎</a>
  </div>
  <footer>
    <div class="container footer-inner">
      <div><strong>歐佳利百川通</strong><br />冷熱水管免打牆止漏・水刀疏通通管・高壓清洗服務・管道內視鏡檢查</div>
      <div>服務地區：台北・桃園・新竹・苗栗・台中・宜蘭<br />© 歐佳利科技事業有限公司｜統編 90333090</div>
    </div>
  </footer>
  <script>
    (() => {
      const nav = document.querySelector('.nav');
      const navToggle = document.querySelector('.nav-toggle');
      if (!nav || !navToggle) return;
      navToggle.addEventListener('click', () => {
        const expanded = nav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      });
    })();
  </script>`;
}

function jsonLd(area, canonical) {
  return JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "首頁", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "服務地區", item: `${siteUrl}/#area` },
        { "@type": "ListItem", position: 3, name: area.area, item: canonical }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: area.service,
      areaServed: area.area,
      provider: {
        "@type": "LocalBusiness",
        name: "歐佳利百川通",
        legalName: "歐佳利科技事業有限公司",
        telephone: "+886-983-313-815",
        url: `${siteUrl}/`
      },
      serviceType: ["管路疏通", "高壓水刀清洗", "管路內視鏡檢測"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: area.questions.map(([name, text]) => ({
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text }
      }))
    }
  ], null, 2);
}

function page(area) {
  const article = normalizeArticle(fs.readFileSync(path.join(root, area.file), "utf8").trim());
  const canonical = `${siteUrl}/area-${area.slug}.html`;
  return `<!doctype html>
<html lang="zh-Hant-TW">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(area.title)}</title>
  <meta name="description" content="${esc(area.description)}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="zh_TW" />
  <meta property="og:title" content="${esc(area.title)}" />
  <meta property="og:description" content="${esc(area.description)}" />
  <link rel="stylesheet" href="css/style.css" />
  <script type="application/ld+json">${jsonLd(area, canonical)}</script>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-TCQKD1YYL9"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-TCQKD1YYL9');
    gtag('config', 'AW-452340554');
  </script>
</head>
<body>
${header()}
  <main>
    ${article.replace(/\n/g, "\n    ")}
  </main>
${footer()}
</body>
</html>
`;
}

for (const area of areas) {
  fs.writeFileSync(path.join(root, `area-${area.slug}.html`), page(area), "utf8");
  console.log(`built area-${area.slug}.html`);
}

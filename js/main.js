(() => {
  const pages = {
    home: 'page-home',
    'leak-repair': 'page-leak-repair',
    waterjet: 'page-waterjet',
    'high-pressure': 'page-high-pressure',
    'large-vehicle-cleaning': 'page-large-vehicle-cleaning',
    'construction-vehicle-cleaning': 'page-construction-vehicle-cleaning',
    'oil-cleaning': 'page-oil-cleaning',
    'water-tank-cleaning': 'page-water-tank-cleaning',
    'fish-pond-cleaning': 'page-fish-pond-cleaning',
    process: 'page-process',
    area: 'page-area',
    'area-taipei': 'page-area-taipei',
    'area-taoyuan': 'page-area-taoyuan',
    'area-hsinchu': 'page-area-hsinchu',
    'area-miaoli': 'page-area-miaoli',
    'area-taichung': 'page-area-taichung',
    'area-yilan': 'page-area-yilan',
    faq: 'page-faq',
    contact: 'page-contact'
  };

  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const areaPages = ['area-taipei', 'area-taoyuan', 'area-hsinchu', 'area-miaoli', 'area-taichung', 'area-yilan'];
  const siteUrl = 'https://sdhx-tw.com/';
  const defaultTitle = document.title || '歐佳利百川通';
  const defaultDescription = getMeta('description') || '歐佳利百川通提供冷熱水管免打牆止漏、排水道水刀通管清洗與管道內視鏡檢查。';
  const areaSeo = {
    'area-taipei': {
      area: '台北市萬華區',
      service: '台北管路疏通、廚房排水堵塞、高壓水刀清洗',
      questions: [
        ['台北廚房排水堵塞適合用高壓水刀嗎？', '若是油垢、皂垢或污泥長期附著造成反覆堵塞，高壓水刀可沖洗管壁並改善排水速度。'],
        ['台北可以做管路內視鏡檢測嗎？', '可以。內視鏡可協助確認油垢堆積、異物卡住、管線破損或坡度異常。'],
        ['台北是否提供 24 小時諮詢？', '百川通提供 24 小時 LINE 諮詢，可先傳照片、影片與地址區域。']
      ]
    },
    'area-taoyuan': {
      area: '桃園市大園區',
      service: '桃園管路疏通、廁所排水堵塞、高壓水刀清洗',
      questions: [
        ['桃園廁所排水回堵要怎麼判斷原因？', '常見原因包含毛髮、污泥、異物卡住或管線坡度不良，反覆堵塞建議搭配內視鏡檢測。'],
        ['桃園透天三樓排水堵塞可以處理嗎？', '可以先依樓層、排水口位置與堵塞範圍評估施工方式，必要時使用高壓水刀清洗。'],
        ['桃園服務可以先用 LINE 詢問嗎？', '可以。建議提供地區、堵塞位置、照片或影片，方便初步判斷與安排。']
      ]
    },
    'area-hsinchu': {
      area: '新竹縣竹東鎮',
      service: '新竹管路疏通、廚房油污堵塞、排水管清洗',
      questions: [
        ['新竹廚房油污堵塞為什麼容易反覆發生？', '油脂冷卻後會附著在管壁，逐漸卡住污泥與食物殘渣，造成排水變慢或再次堵塞。'],
        ['高壓水刀可以清廚房排水管油垢嗎？', '高壓水刀可沖洗管壁油垢與污泥，適合油污堆積、排水變慢與反覆堵塞。'],
        ['新竹竹東可安排到府評估嗎？', '可先透過 LINE 提供照片、影片與地址區域，再依狀況安排評估與施工。']
      ]
    },
    'area-miaoli': {
      area: '苗栗縣後龍鎮',
      service: '苗栗管路疏通、廚房排水堵塞、油污清洗',
      questions: [
        ['苗栗廚房排水堵塞需要馬上施工嗎？', '若已經積水回堵、排水完全不下去或有臭味，建議盡快處理。'],
        ['苗栗後龍可以做水刀通管嗎？', '可依現場管線條件評估高壓水刀清洗，尤其適合油污厚、污泥多或反覆堵塞的排水管。'],
        ['施工前需要準備什麼？', '建議先清出排水口周邊空間，並提供堵塞位置、發生時間與照片。']
      ]
    },
    'area-taichung': {
      area: '台中市清水區',
      service: '台中管路疏通、餐飲廚房油污堵塞、水刀清洗',
      questions: [
        ['台中餐飲廚房排水堵塞適合水刀清洗嗎？', '餐飲廚房通常油污量較高，若排水變慢或反覆堵塞，高壓水刀清洗能較完整沖洗管壁油垢。'],
        ['營業店面施工會影響營業嗎？', '施工時間可依現場狀況討論，建議安排非尖峰時段並先確認施工空間。'],
        ['台中清水可以先傳照片估狀況嗎？', '可以。請提供堵塞位置、照片或影片、店面型態與大約地址區域。']
      ]
    },
    'area-yilan': {
      area: '宜蘭縣羅東鎮',
      service: '宜蘭管路疏通、民宿廚房排水堵塞、高壓水刀清洗',
      questions: [
        ['宜蘭民宿廚房排水堵塞怎麼處理？', '可先檢查排水口與管線狀況，若油垢堆積嚴重或反覆堵塞，通常會評估高壓水刀清洗。'],
        ['民宿排水管可以做內視鏡檢測嗎？', '可以。內視鏡可協助查看油垢、異物、管線破損或其他異常。'],
        ['宜蘭羅東可以提供 24 小時諮詢嗎？', '可透過 LINE 先提供照片、影片與地點，百川通會依現場狀況回覆建議。']
      ]
    }
  };

  function getMeta(name) {
    const meta = document.querySelector(`meta[name="${name}"]`);
    return meta ? meta.getAttribute('content') : '';
  }

  function setMeta(selector, attr, value) {
    const meta = document.querySelector(selector);
    if (meta && value) meta.setAttribute(attr, value);
  }

  function updateSeo(key, target) {
    const title = target.dataset.title || defaultTitle;
    const description = target.dataset.description || defaultDescription;
    const canonical = key === 'home' ? siteUrl : `${siteUrl}#${key}`;

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', canonical);

    const seo = areaSeo[key];
    let structured = document.getElementById('route-jsonld');
    if (!structured) {
      structured = document.createElement('script');
      structured.type = 'application/ld+json';
      structured.id = 'route-jsonld';
      document.head.appendChild(structured);
    }

    if (!seo) {
      structured.textContent = '';
      return;
    }

    structured.textContent = JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首頁', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: '服務地區', item: `${siteUrl}#area` },
          { '@type': 'ListItem', position: 3, name: seo.area, item: canonical }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: seo.service,
        areaServed: seo.area,
        provider: {
          '@type': 'LocalBusiness',
          name: '歐佳利百川通',
          telephone: '+886-983-313-815',
          url: siteUrl
        },
        serviceType: ['管路疏通', '高壓水刀清洗', '管路內視鏡檢測']
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: seo.questions.map(([name, text]) => ({
          '@type': 'Question',
          name,
          acceptedAnswer: { '@type': 'Answer', text }
        }))
      }
    ]);
  }

  function go(name, scrollTarget) {
    const key = pages[name] ? name : 'home';
    const target = document.getElementById(pages[key]);
    if (!target) return;

    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    target.classList.add('active');
    if (target.classList.contains('area-case-page')) {
      target.classList.remove('case-animate');
      void target.offsetWidth;
      target.classList.add('case-animate');
    }

    document.querySelectorAll('[data-page-link]').forEach(link => {
      const isActiveAreaParent = link.dataset.pageLink === 'area' && (key === 'area' || areaPages.includes(key));
      link.classList.toggle('active', (link.dataset.pageLink === key || isActiveAreaParent) && !link.dataset.scrollTarget);
    });
    document.querySelectorAll('[data-menu-group]').forEach(trigger => {
      const group = trigger.dataset.menuGroup;
      const cleaningPages = ['high-pressure', 'large-vehicle-cleaning', 'construction-vehicle-cleaning', 'oil-cleaning', 'water-tank-cleaning', 'fish-pond-cleaning'];
      const active = (group === 'pipe' && ['leak-repair', 'waterjet'].includes(key)) || (group === 'cleaning' && cleaningPages.includes(key));
      trigger.classList.toggle('active', active);
    });

    updateSeo(key, target);
    if (location.hash !== '#' + key) history.pushState(null, '', '#' + key);
    const section = scrollTarget ? document.getElementById(scrollTarget) : null;
    if (section) {
      setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    } else {
      scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (nav && nav.classList.contains('open')) nav.classList.remove('open');
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    nav.querySelectorAll('.menu a').forEach(anchor => {
      anchor.addEventListener('click', () => {
        if (nav.classList.contains('open')) nav.classList.remove('open');
      });
    });
  }

  document.body.addEventListener('click', event => {
    const link = event.target.closest('[data-page-link]');
    if (!link) return;
    event.preventDefault();
    go(link.dataset.pageLink, link.dataset.scrollTarget);
  });

  addEventListener('popstate', () => go(location.hash.slice(1) || 'home'));
  go(location.hash.slice(1) || 'home');
})();

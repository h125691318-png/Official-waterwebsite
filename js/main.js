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
    faq: 'page-faq',
    contact: 'page-contact'
  };

  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');

  function go(name, scrollTarget) {
    const key = pages[name] ? name : 'home';
    const target = document.getElementById(pages[key]);
    if (!target) return;

    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    target.classList.add('active');

    document.querySelectorAll('[data-page-link]').forEach(link => {
      link.classList.toggle('active', link.dataset.pageLink === key && !link.dataset.scrollTarget);
    });
    document.querySelectorAll('[data-menu-group]').forEach(trigger => {
      const group = trigger.dataset.menuGroup;
      const cleaningPages = ['high-pressure', 'large-vehicle-cleaning', 'construction-vehicle-cleaning', 'oil-cleaning', 'water-tank-cleaning', 'fish-pond-cleaning'];
      const active = (group === 'pipe' && ['leak-repair', 'waterjet'].includes(key)) || (group === 'cleaning' && cleaningPages.includes(key));
      trigger.classList.toggle('active', active);
    });

    document.title = target.dataset.title || '歐佳利百川通';
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

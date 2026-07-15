import { getLocale, setLocale, getCopy } from './i18n.js';
import { SITE } from './config.js';
import { enhanceFooterWithReview } from './internal-review.js';

function getNav() {
  return getCopy().nav;
}

function getFooterGroups() {
  return getCopy().footerGroups;
}

function getUi() {
  return getCopy().ui;
}

function getSiteTagline() {
  return getCopy().site?.tagline ?? SITE.tagline;
}

const LOGO_SVG = `<svg viewBox="0 0 1182 1182" aria-hidden="true"><g transform="matrix(0.526154,0,0,0.526154,-54.1775,-54.2715)"><path d="M574.625,1181.59C534.577,1115.01 511.538,1037.06 511.538,953.776C511.538,709.325 710.001,510.862 954.452,510.862C1115.07,510.862 1255.84,596.544 1333.49,724.656C1374.02,791.521 1397.37,869.944 1397.37,953.776C1397.37,1073.97 1349.39,1183.04 1271.55,1262.88C1270.31,1264.07 1269.07,1265.27 1267.85,1266.49C1266.06,1268.25 1264.3,1270.04 1262.55,1271.85C1226,1309.73 1198.56,1356.46 1183.78,1408.49C1175.76,1436.72 1171.47,1466.52 1171.47,1497.31C1171.47,1528.09 1175.76,1557.89 1183.78,1586.12C1222.46,1722.27 1347.8,1822.11 1496.27,1822.11C1675.54,1822.11 1821.08,1676.57 1821.08,1497.31C1821.08,1408.25 1785.15,1327.51 1727.03,1268.81L1875.69,1268.81C1915.99,1335.54 1939.19,1413.74 1939.19,1497.31C1939.19,1741.76 1740.72,1940.22 1496.27,1940.22C1335.37,1940.22 1194.39,1854.24 1116.82,1725.75C1076.54,1659.03 1053.36,1580.86 1053.36,1497.31C1053.36,1457.36 1058.66,1418.64 1068.59,1381.82C1089.13,1305.67 1129.49,1237.62 1183.78,1183.55L1183.78,1183.48C1242.39,1124.71 1278.64,1043.64 1278.64,954.166C1278.64,925.375 1274.89,897.454 1267.85,870.866C1231.03,731.907 1104.31,629.362 953.842,629.362C774.578,629.362 629.038,774.902 629.038,954.166C629.038,1042.69 664.527,1122.98 722.039,1181.59L574.625,1181.59Z" style="fill:#9FAF52;"/></g><g transform="matrix(0.414294,0,0,0.414294,254.535,129.476)"><path d="M392,527C392,485.606 425.606,452 467,452C508.394,452 542,485.606 542,527L542,985.47C542,1026.86 508.394,1060.47 467,1060.47C425.606,1060.47 392,1026.86 392,985.47L392,527Z" style="fill:#464646;"/></g><g transform="matrix(0.81846,0,0,0.81846,-621.282,-427.039)"><path d="M1656,1270C1741,1270 1810,1339.01 1810,1424C1810,1509 1741,1578 1656,1578C1571.01,1578 1502,1509 1502,1424C1502,1339.01 1571.01,1270 1656,1270ZM1656,1348.07C1614.09,1348.07 1580.07,1382.09 1580.07,1424C1580.07,1465.91 1614.09,1499.93 1656,1499.93C1697.91,1499.93 1731.93,1465.91 1731.93,1424C1731.93,1382.09 1697.91,1348.07 1656,1348.07Z" style="fill:#464646;"/></g></svg>`;

function href(path) {
  if (path.startsWith('#') || path.startsWith('http') || path.startsWith('../')) return path;
  return path;
}

function langHref(path) {
  if (path.startsWith('#') || path.startsWith('http') || path.startsWith('../')) return path;
  const locale = getLocale();
  const hashIndex = path.indexOf('#');
  const file = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  const params = new URLSearchParams();
  params.set('lang', locale);
  const hero = new URLSearchParams(location.search).get('hero');
  if (hero) params.set('hero', hero);
  return `${file}?${params.toString()}${hash}`;
}

export function renderHeader() {
  const el = document.getElementById('site-header');
  if (!el) return;

  const navData = getNav();
  const uiData = getUi();
  const locale = getLocale();

  const techLinks = navData.technical
    .map((l) => `<a href="${langHref(l.href)}" role="menuitem">${l.label}</a>`)
    .join('');

  el.innerHTML = `
    <header class="nav" id="nav">
      <div class="wrap nav-in">
        <a class="brand" href="${langHref('index.html')}" aria-label="${uiData.zuraioHome}">
          <img class="brand-logo" src="${SITE.logo}" alt="Zuraio — own your data" width="4796" height="1465" decoding="async" />
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu" aria-label="${uiData.openMenu}">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-menu" id="nav-menu">
          <nav class="nav-links" aria-label="Primary">
            ${navData.main.map((l) => `<a href="${langHref(l.href)}">${l.label}</a>`).join('')}
            <div class="nav-dropdown">
              <button type="button" class="nav-dropdown-btn" aria-expanded="false" aria-haspopup="true">${uiData.technical}</button>
              <div class="nav-dropdown-menu" role="menu">${techLinks}</div>
            </div>
            <a href="${langHref(navData.about.href)}">${navData.about.label}</a>
          </nav>
          <div class="nav-actions">
            <div class="lang-switch" aria-label="Language">
              <button type="button" class="lang-btn${locale === 'en' ? ' is-active' : ''}" data-lang="en" aria-pressed="${locale === 'en'}">${uiData.langEn}</button>
              <button type="button" class="lang-btn${locale === 'de' ? ' is-active' : ''}" data-lang="de" aria-pressed="${locale === 'de'}">${uiData.langDe}</button>
            </div>
            <a class="btn btn-primary" href="${langHref('contact.html')}">${uiData.bookDemo}</a>
          </div>
        </div>
      </div>
    </header>`;

  const navEl = el.querySelector('#nav');
  const toggle = el.querySelector('.nav-toggle');
  const menu = el.querySelector('#nav-menu');
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
    toggle.setAttribute('aria-label', open ? uiData.openMenu : uiData.closeMenu);
    menu.classList.toggle('is-open', !open);
  });

  const ddBtn = el.querySelector('.nav-dropdown-btn');
  const ddMenu = el.querySelector('.nav-dropdown-menu');
  ddBtn?.addEventListener('click', () => {
    const open = ddBtn.getAttribute('aria-expanded') === 'true';
    ddBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
    ddMenu.classList.toggle('is-open', !open);
  });

  el.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = btn.dataset.lang;
      if (next && next !== getLocale()) setLocale(next);
    });
  });

  if (el && !el.dataset.scrollBound) {
    el.dataset.scrollBound = 'true';
    const updateNavScroll = () => {
      const floating = window.scrollY > 48;
      el.classList.toggle('is-floating', floating);
      navEl?.classList.toggle('is-floating', floating);
      navEl?.classList.toggle('scrolled', floating);
    };
    updateNavScroll();
    window.addEventListener('scroll', updateNavScroll, { passive: true });
  }
}

export function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;

  const uiData = getUi();
  const locale = getLocale();
  const groups = getFooterGroups()
    .map(
      (g) => `
      <div class="foot-col">
        <h3 class="foot-col-title">${g.title}</h3>
        <ul class="foot-col-links">${g.links.map((l) => `<li><a href="${langHref(l.href)}">${l.label}</a></li>`).join('')}</ul>
      </div>`,
    )
    .join('');

  el.innerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="foot-grid">
          ${groups}
          <div class="foot-col">
            <h3 class="foot-col-title">${uiData.languageContact}</h3>
            <ul class="foot-col-links">
              <li><span class="foot-muted">${uiData.langEn}${locale === 'en' ? ` (${uiData.languageActive})` : ''}</span></li>
              <li><span class="foot-muted">${uiData.langDe}${locale === 'de' ? ` (${uiData.languageActive})` : ''}</span></li>
              <li><a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a></li>
            </ul>
          </div>
        </div>
        <div class="foot-bottom">
          <div class="brand foot-brand">${LOGO_SVG.replace('fill:#464646', 'fill:#fff')}<span class="wm">Zuraio</span></div>
          <p class="foot-tagline">${getSiteTagline()}</p>
        </div>
        <div id="footer-review-notes" data-internal-only></div>
      </div>
    </footer>`;

  enhanceFooterWithReview();
}

export function initReveal() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = document.querySelectorAll('.reveal');
  if (reduce) {
    els.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );
  els.forEach((el) => io.observe(el));
}

export function initTabs() {
  document.querySelectorAll('.tabs').forEach((tablist) => {
    const tabs = tablist.querySelectorAll('.tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.setAttribute('aria-selected', 'false'));
        tab.setAttribute('aria-selected', 'true');
        const panelId = tab.dataset.tab;
        const container = tablist.closest('section') || tablist.parentElement;
        container.querySelectorAll('.panel').forEach((p) => p.classList.remove('active'));
        document.getElementById(panelId)?.classList.add('active');
      });
    });
  });
}

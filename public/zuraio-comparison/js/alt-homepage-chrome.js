import { SITE } from './config.js';
import { assetHref, currentLocale, getLocaleFromPathname } from './path-locale.js';
import { resolveRouteFromLocation, langSwitchHref } from './site-routes.js';

/** 2× raster for ~92×28 CSS display (alt preview nav caps logo at 28px). */
const ALT_HOME_LOGO = 'assets/zuraio-logo-nav@2x.webp';
const ALT_HOME_LOGO_WIDTH = 184;
const ALT_HOME_LOGO_HEIGHT = 56;
import { PUBLIC_SITE_LOCALES } from './locales.js';
import { getLocaleLabels } from './locales.js';
import * as copyEn from './copy-en.js';
import * as copyDe from './copy-de.js';
import * as copyFr from './copy-fr.js';
import * as copyIt from './copy-it.js';

function siteCopyBundle(locale) {
  if (locale === 'de') return copyDe;
  if (locale === 'fr') return copyFr;
  if (locale === 'it') return copyIt;
  return copyEn;
}

function viewingLocale() {
  return currentLocale();
}

function routeHref(routeKey, targetLocale = viewingLocale()) {
  return resolveRouteFromLocation(routeKey, targetLocale, location.pathname);
}

const FOOTER_ROUTE_BY_HREF = {
  'how-it-helps.html': 'how-it-helps',
  'how-it-helps.html#skills': 'skills',
  'integrations.html': 'integrations',
  'contact.html': 'contact',
  'security.html': 'security',
  'technical-architecture.html': 'it-partner',
  'about.html': 'about',
  'faq.html': 'faq',
  'impressum.html': 'impressum',
  'privacy.html': 'privacy',
  'cookies.html': 'cookies',
  'terms.html': 'terms',
};

function bindNavUi(root, ui) {
  const toggle = root.querySelector('.nav-toggle');
  const menu = root.querySelector('#nav-menu');
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
    toggle.setAttribute('aria-label', open ? ui.openMenu : ui.closeMenu);
    menu?.classList.toggle('is-open', !open);
  });
}

/** Same floating pill + scroll state as main site header (site.js). */
function bindAltNavScroll(root) {
  if (!root || root.dataset.scrollBound) return;
  root.dataset.scrollBound = 'true';
  const navEl = root.querySelector('#nav');
  const update = () => {
    const floating = window.scrollY > 48;
    root.classList.toggle('is-floating', floating);
    navEl?.classList.toggle('is-floating', floating);
    navEl?.classList.toggle('scrolled', floating);
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
}

function navLinksHtml(nav, mode, active) {
  const items = [
    { route: 'how-it-helps', label: nav.howItWorks, key: 'how' },
    { route: 'skills', label: nav.skills, key: 'skills' },
    { route: 'security', label: nav.security, key: 'security' },
    { route: 'about', label: nav.about, key: 'about' },
  ];
  return items
    .map(({ route, label, key }) => {
      const isCurrent = active === key;
      return `<a href="${routeHref(route)}" data-route="${route}"${isCurrent ? ' aria-current="page"' : ''}>${label}</a>`;
    })
    .join('');
}

function brandHref(mode) {
  return routeHref('home');
}

export function renderAltHomeHeader(copy, locale, options = {}) {
  const el = document.getElementById('site-header');
  if (!el) return;

  const mode = options.mode ?? 'preview';
  const ui = siteCopyBundle(locale).ui;
  const { nav } = copy;
  const active = options.active;

  el.innerHTML = `
    <header class="nav alt-home-nav" id="nav">
      <div class="wrap nav-in">
        <a class="brand" href="${brandHref(mode)}" data-route="home" aria-label="${ui.zuraioHome}">
          <img class="brand-logo" src="${assetHref(ALT_HOME_LOGO)}" alt="${ui.logoAlt ?? 'Zuraio'}" width="${ALT_HOME_LOGO_WIDTH}" height="${ALT_HOME_LOGO_HEIGHT}" decoding="async" fetchpriority="high" />
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu" aria-label="${ui.openMenu}">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-menu" id="nav-menu">
          <nav class="nav-links" aria-label="${ui.primaryNavAria ?? 'Primary'}">
            ${navLinksHtml(nav, mode, active)}
          </nav>
          <div class="nav-actions alt-home-nav__actions">
            <div class="lang-dropdown alt-home-lang">
              <button type="button" class="lang-dropdown-btn" aria-expanded="false" aria-haspopup="listbox" aria-label="${ui.languageLabel}">
                <span class="lang-dropdown-current">${locale.toUpperCase()}</span>
              </button>
              <div class="lang-dropdown-menu" role="listbox">
                ${PUBLIC_SITE_LOCALES.map((code) => {
                  const href = langSwitchHref(code, location.pathname, location.hash);
                  return `<a class="lang-dropdown-option${code === locale ? ' is-active' : ''}" href="${href}" hreflang="${code}">${getLocaleLabels(ui)[code]}</a>`;
                }).join('')}
              </div>
            </div>
            <a class="btn btn-primary alt-home-cta" data-alt-cta="nav" data-route="contact" href="${routeHref('contact')}">${nav.bookDemo}</a>
          </div>
        </div>
      </div>
    </header>`;

  bindNavUi(el, ui);

  const langBtn = el.querySelector('.lang-dropdown-btn');
  const langMenu = el.querySelector('.lang-dropdown-menu');
  langBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = langBtn.getAttribute('aria-expanded') === 'true';
    langBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
    langMenu?.classList.toggle('is-open', !open);
  });
  document.addEventListener('click', () => {
    langBtn?.setAttribute('aria-expanded', 'false');
    langMenu?.classList.remove('is-open');
  });

  bindAltNavScroll(el);
}

function founderEmailLinksHtml() {
  const emails = SITE.founderEmails?.length ? SITE.founderEmails : [SITE.contactEmail];
  return emails.map((email) => `<li><a href="mailto:${email}">${email}</a></li>`).join('');
}

function footerLinkHref(rawHref) {
  const routeKey = FOOTER_ROUTE_BY_HREF[rawHref.replace(/^\.\.\//, '')];
  if (routeKey) return { href: routeHref(routeKey), route: routeKey };
  return { href: rawHref, route: null };
}

export function renderAltHomeFooter(copy, locale, options = {}) {
  const el = document.getElementById('site-footer');
  if (!el) return;

  const bundle = siteCopyBundle(locale);
  const ui = bundle.ui;
  const groups = bundle.footerGroups;
  const localeLabels = getLocaleLabels(ui);
  const groupsHtml = groups
    .map(
      (g) => `
      <div class="foot-col">
        <h3 class="foot-col-title">${g.title}</h3>
        <ul class="foot-col-links">${g.links
          .map((l) => {
            const { href, route } = footerLinkHref(l.href);
            const routeAttr = route ? ` data-route="${route}"` : '';
            return `<li><a href="${href}"${routeAttr}>${l.label}</a></li>`;
          })
          .join('')}</ul>
      </div>`,
    )
    .join('');

  const langLinks = PUBLIC_SITE_LOCALES.map((code) => {
    const href = langSwitchHref(code, location.pathname, location.hash);
    return `<li><a href="${href}" hreflang="${code}">${localeLabels[code]}${locale === code ? ` (${ui.languageActive})` : ''}</a></li>`;
  }).join('');

  el.innerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="foot-grid">
          ${groupsHtml}
          <div class="foot-col">
            <h3 class="foot-col-title">${ui.languageContact}</h3>
            <ul class="foot-col-links">
              ${langLinks}
              <li><a href="${routeHref('contact')}" data-route="contact">${ui.footerContactLink ?? 'Contact'}</a></li>
              ${founderEmailLinksHtml()}
            </ul>
          </div>
        </div>
        <div class="foot-bottom">
          <a class="brand foot-brand" href="${brandHref()}" data-route="home" aria-label="${ui.zuraioHome}">
            <img class="brand-logo" src="${assetHref(ALT_HOME_LOGO)}" alt="" width="${ALT_HOME_LOGO_WIDTH}" height="${ALT_HOME_LOGO_HEIGHT}" decoding="async" loading="lazy" />
          </a>
          <p class="foot-tagline">${bundle.site?.tagline ?? SITE.tagline}</p>
          ${!options.omitFooterTrademark && copy.aiTrademark ? `<p class="foot-trademark alt-home-trademark alt-home-trademark--ai">${copy.aiTrademark}</p>` : ''}
          ${!options.omitFooterTrademark && copy.footerTrademark ? `<p class="foot-trademark alt-home-trademark">${copy.footerTrademark}</p>` : ''}
        </div>
      </div>
    </footer>`;
}

/** Keep language links aligned with the current URL hash (FAQ deep links). */
export function syncLangSwitchHrefs() {
  document.querySelectorAll('#site-header a[hreflang], #site-footer a[hreflang]').forEach((a) => {
    const code = a.getAttribute('hreflang');
    if (!code) return;
    a.setAttribute('href', langSwitchHref(code, location.pathname, location.hash));
  });
}

/** Remember explicit language choice so the EN homepage first-visit redirect does not run again. */
export function bindLocalePreference(root = document) {
  root.querySelectorAll('#site-header a[hreflang], #site-footer a[hreflang]').forEach((a) => {
    if (a.dataset.localeBound) return;
    a.dataset.localeBound = 'true';
    a.addEventListener('click', () => {
      const code = a.getAttribute('hreflang');
      if (!code) return;
      try {
        localStorage.setItem('zuraio-locale', code);
      } catch {
        /* ignore */
      }
    });
  });
}

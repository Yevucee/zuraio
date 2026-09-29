import { SITE } from './config.js';
import { assetHref } from './path-locale.js';

/** 2× raster for ~92×28 CSS display (alt preview nav caps logo at 28px). */
const ALT_HOME_LOGO = 'assets/zuraio-logo-nav@2x.webp';
const ALT_HOME_LOGO_WIDTH = 184;
const ALT_HOME_LOGO_HEIGHT = 56;
import { SUPPORTED_LOCALES } from './locales.js';
import { getLocaleLabels } from './locales.js';
import { setLocale, getCopy } from './i18n.js';

function previewLangHref(locale, file = 'homepage-preview.html') {
  const base = locale === 'de' ? '../de/' : '../en/';
  return `${base}${file}`;
}

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

export function renderAltHomeHeader(copy, locale) {
  const el = document.getElementById('site-header');
  if (!el) return;

  const ui = getCopy().ui;
  const { nav } = copy;

  el.innerHTML = `
    <header class="nav alt-home-nav" id="nav">
      <div class="wrap nav-in">
        <a class="brand" href="${previewLangHref(locale)}" aria-label="${ui.zuraioHome}">
          <img class="brand-logo" src="${assetHref(ALT_HOME_LOGO)}" alt="${ui.logoAlt ?? 'Zuraio'}" width="${ALT_HOME_LOGO_WIDTH}" height="${ALT_HOME_LOGO_HEIGHT}" decoding="async" fetchpriority="high" />
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu" aria-label="${ui.openMenu}">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-menu" id="nav-menu">
          <nav class="nav-links" aria-label="${ui.primaryNavAria ?? 'Primary'}">
            <a href="#demo">${nav.howItWorks}</a>
            <a href="#skills">${nav.skills}</a>
            <a href="#data-control">${nav.security}</a>
            <a href="#team">${nav.about}</a>
          </nav>
          <div class="nav-actions alt-home-nav__actions">
            <div class="lang-dropdown alt-home-lang">
              <button type="button" class="lang-dropdown-btn" aria-expanded="false" aria-haspopup="listbox" aria-label="${ui.languageLabel}">
                <span class="lang-dropdown-current">${locale.toUpperCase()}</span>
              </button>
              <div class="lang-dropdown-menu" role="listbox">
                ${SUPPORTED_LOCALES.map(
                  (code) =>
                    `<a class="lang-dropdown-option${code === locale ? ' is-active' : ''}" href="${previewLangHref(code)}">${getLocaleLabels(ui)[code]}</a>`,
                ).join('')}
              </div>
            </div>
            <a class="btn btn-primary alt-home-cta" data-alt-cta="nav" href="../contact.html">${nav.bookDemo}</a>
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
}

export function renderAltHomeFooter(copy, locale) {
  const el = document.getElementById('site-footer');
  if (!el) return;

  const ui = getCopy().ui;
  const groups = getCopy().footerGroups;
  const localeLabels = getLocaleLabels(ui);
  const newLink = copy.footerNewLink;

  const groupsHtml = groups
    .map(
      (g) => `
      <div class="foot-col">
        <h3 class="foot-col-title">${g.title}</h3>
        <ul class="foot-col-links">${g.links.map((l) => `<li><a href="../${l.href.replace(/^\//, '')}">${l.label}</a></li>`).join('')}</ul>
      </div>`,
    )
    .join('');

  el.innerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="foot-grid">
          ${groupsHtml}
          <div class="foot-col">
            <h3 class="foot-col-title">${ui.languageContact}</h3>
            <ul class="foot-col-links">
              ${SUPPORTED_LOCALES.map(
                (code) =>
                  `<li><a href="${previewLangHref(code)}">${localeLabels[code]}${locale === code ? ` (${ui.languageActive})` : ''}</a></li>`,
              ).join('')}
              <li><a href="${newLink.href}">${newLink.label}</a></li>
              <li><a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a></li>
            </ul>
          </div>
        </div>
        <div class="foot-bottom">
          <a class="brand foot-brand" href="${previewLangHref(locale)}" aria-label="${ui.zuraioHome}">
            <img class="brand-logo" src="${assetHref(ALT_HOME_LOGO)}" alt="" width="${ALT_HOME_LOGO_WIDTH}" height="${ALT_HOME_LOGO_HEIGHT}" decoding="async" loading="lazy" />
          </a>
          <p class="foot-tagline">${getCopy().site?.tagline ?? SITE.tagline}</p>
          ${copy.footerTrademark ? `<p class="foot-trademark alt-home-trademark">${copy.footerTrademark}</p>` : ''}
        </div>
      </div>
    </footer>`;
}

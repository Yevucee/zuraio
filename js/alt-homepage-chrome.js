import { SITE } from './config.js';
import { assetHref, getLocaleFromPathname, langHrefForLocale } from './path-locale.js';

/** 2× raster for ~92×28 CSS display (alt preview nav caps logo at 28px). */
const ALT_HOME_LOGO = 'assets/zuraio-logo-nav@2x.webp';
const ALT_HOME_LOGO_WIDTH = 184;
const ALT_HOME_LOGO_HEIGHT = 56;
import { PUBLIC_SITE_LOCALES } from './locales.js';
import { getLocaleLabels } from './locales.js';
import { getCopy } from './i18n.js';

function previewLangHref(locale, file = 'homepage-preview.html') {
  const base = locale === 'de' ? '../de/' : '../en/';
  return `${base}${file}`;
}

function siteRootPrefix() {
  return getLocaleFromPathname() !== null ? '../' : '';
}

function sitePageHref(path) {
  return `${siteRootPrefix()}${path.replace(/^\//, '')}`;
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

function navLinksHtml(nav, mode, active) {
  if (mode === 'site') {
    const items = [
      { href: 'how-it-helps.html', label: nav.howItWorks, key: 'how' },
      { href: 'how-it-helps.html#skills', label: nav.skills, key: 'skills' },
      { href: 'security.html', label: nav.security, key: 'security' },
      { href: 'about.html', label: nav.about, key: 'about' },
    ];
    return items
      .map(({ href, label, key }) => {
        const current = active === key ? ' aria-current="page"' : '';
        return `<a href="${sitePageHref(href)}"${current}>${label}</a>`;
      })
      .join('');
  }
  return `
            <a href="${sitePageHref('how-it-helps.html')}">${nav.howItWorks}</a>
            <a href="${sitePageHref('how-it-helps.html#skills')}">${nav.skills}</a>
            <a href="${sitePageHref('security.html')}">${nav.security}</a>
            <a href="${sitePageHref('about.html')}">${nav.about}</a>`;
}

function brandHref(mode, locale) {
  if (mode === 'site') return sitePageHref('index.html');
  return previewLangHref(locale);
}

export function renderAltHomeHeader(copy, locale, options = {}) {
  const el = document.getElementById('site-header');
  if (!el) return;

  const mode = options.mode ?? 'preview';
  const ui = getCopy().ui;
  const { nav } = copy;

  el.innerHTML = `
    <header class="nav alt-home-nav" id="nav">
      <div class="wrap nav-in">
        <a class="brand" href="${brandHref(mode, locale)}" aria-label="${ui.zuraioHome}">
          <img class="brand-logo" src="${assetHref(ALT_HOME_LOGO)}" alt="${ui.logoAlt ?? 'Zuraio'}" width="${ALT_HOME_LOGO_WIDTH}" height="${ALT_HOME_LOGO_HEIGHT}" decoding="async" fetchpriority="high" />
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu" aria-label="${ui.openMenu}">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-menu" id="nav-menu">
          <nav class="nav-links" aria-label="${ui.primaryNavAria ?? 'Primary'}">
            ${navLinksHtml(nav, mode, options.active)}
          </nav>
          <div class="nav-actions alt-home-nav__actions">
            <div class="lang-dropdown alt-home-lang">
              <button type="button" class="lang-dropdown-btn" aria-expanded="false" aria-haspopup="listbox" aria-label="${ui.languageLabel}">
                <span class="lang-dropdown-current">${locale.toUpperCase()}</span>
              </button>
              <div class="lang-dropdown-menu" role="listbox">
                ${PUBLIC_SITE_LOCALES.map((code) => {
                  const href =
                    mode === 'site'
                      ? langHrefForLocale('security.html', code)
                      : previewLangHref(code);
                  return `<a class="lang-dropdown-option${code === locale ? ' is-active' : ''}" href="${href}">${getLocaleLabels(ui)[code]}</a>`;
                }).join('')}
              </div>
            </div>
            <a class="btn btn-primary alt-home-cta" data-alt-cta="nav" href="${sitePageHref('contact.html')}">${nav.bookDemo}</a>
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

function founderEmailLinksHtml() {
  const emails = SITE.founderEmails?.length ? SITE.founderEmails : [SITE.contactEmail];
  return emails.map((email) => `<li><a href="mailto:${email}">${email}</a></li>`).join('');
}

export function renderAltHomeFooter(copy, locale, options = {}) {
  const el = document.getElementById('site-footer');
  if (!el) return;

  const mode = options.mode ?? 'preview';
  const ui = getCopy().ui;
  const groups = getCopy().footerGroups;
  const localeLabels = getLocaleLabels(ui);
  const linkPrefix = mode === 'site' ? siteRootPrefix() : '../';
  const groupsHtml = groups
    .map(
      (g) => `
      <div class="foot-col">
        <h3 class="foot-col-title">${g.title}</h3>
        <ul class="foot-col-links">${g.links.map((l) => `<li><a href="${linkPrefix}${l.href.replace(/^\//, '')}">${l.label}</a></li>`).join('')}</ul>
      </div>`,
    )
    .join('');

  const langLinks =
    mode === 'site'
      ? PUBLIC_SITE_LOCALES.map((code) => {
          const href = langHrefForLocale('security.html', code);
          return `<li><a href="${href}" hreflang="${code}">${localeLabels[code]}${locale === code ? ` (${ui.languageActive})` : ''}</a></li>`;
        }).join('')
      : PUBLIC_SITE_LOCALES.map(
          (code) =>
            `<li><a href="${previewLangHref(code)}">${localeLabels[code]}${locale === code ? ` (${ui.languageActive})` : ''}</a></li>`,
        ).join('');

  el.innerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="foot-grid">
          ${groupsHtml}
          <div class="foot-col">
            <h3 class="foot-col-title">${ui.languageContact}</h3>
            <ul class="foot-col-links">
              ${langLinks}
              <li><a href="${linkPrefix}contact.html">${ui.footerContactLink ?? 'Contact'}</a></li>
              ${founderEmailLinksHtml()}
            </ul>
          </div>
        </div>
        <div class="foot-bottom">
          <a class="brand foot-brand" href="${brandHref(mode, locale)}" aria-label="${ui.zuraioHome}">
            <img class="brand-logo" src="${assetHref(ALT_HOME_LOGO)}" alt="" width="${ALT_HOME_LOGO_WIDTH}" height="${ALT_HOME_LOGO_HEIGHT}" decoding="async" loading="lazy" />
          </a>
          <p class="foot-tagline">${getCopy().site?.tagline ?? SITE.tagline}</p>
          ${!options.omitFooterTrademark && copy.footerTrademark ? `<p class="foot-trademark alt-home-trademark">${copy.footerTrademark}</p>` : ''}
        </div>
      </div>
    </footer>`;
}

import { getIntegrationsCopy, SWISS_WORDMARK_CARDS } from './copy-integrations.js';
import { renderAltHomeHeader, renderAltHomeFooter } from './alt-homepage-chrome.js';
import { assetHref, getLocaleFromPathname } from './path-locale.js';
import { initAltPreviewMarquee } from './alt-integrations-marquee.js';

function pageLocale() {
  return getLocaleFromPathname() ?? (document.documentElement.lang || 'en');
}

function copyLocale() {
  return pageLocale() === 'de' ? 'de' : 'en';
}

function pageHref(href) {
  if (href.startsWith('http') || href.startsWith('#')) return href;
  const inLocale = getLocaleFromPathname() !== null;
  if (!inLocale) return href;
  return href.startsWith('../') ? href : `../${href.replace(/^\//, '')}`;
}

function wordmarkCardsHtml() {
  return SWISS_WORDMARK_CARDS.map(
    (w) => `<article class="alt-int-wordmark-card">
      <img src="${assetHref(w.logo)}" alt="${w.alt}" width="${w.width}" height="${w.height}" loading="lazy" decoding="async" />
    </article>`,
  ).join('');
}

function groupsHtml(groups) {
  return groups
    .map(
      (g) => `<div class="alt-int-group">
        <h3 class="alt-int-group__title">${g.title}</h3>
        <p class="alt-int-group__systems">${g.systems}</p>
      </div>`,
    )
    .join('');
}

function connectCardsHtml(cards) {
  return cards
    .map(
      (c) => `<article class="alt-int-connect-card">
        <h3><strong>${c.title}</strong> ${c.body}</h3>
      </article>`,
    )
    .join('');
}

function renderMain(copy) {
  const marqueeLabel = copyLocale() === 'de' ? 'Integrationen' : 'Integrations';
  return `
    <section class="alt-section alt-section--paper alt-int-hero">
      <div class="wrap alt-int-hero__stack">
        <h1>${copy.hero.heading}</h1>
        <p class="lede">${copy.hero.sub}</p>
      </div>
    </section>

    <section class="alt-section alt-section--paper alt-int-marquee" aria-label="${marqueeLabel}">
      <div class="marquee-track alt-home-integrations__marquee" data-alt-marquee tabindex="0" aria-label="${marqueeLabel}">
        <div class="marquee-inner"></div>
      </div>
    </section>

    <section class="alt-section alt-section--tint">
      <div class="wrap">
        <div class="alt-section-head">
          <h2>${copy.swissBand.heading}</h2>
          <p class="lede">${copy.swissBand.intro}</p>
        </div>
        <div class="alt-int-wordmark-grid">${wordmarkCardsHtml()}</div>
      </div>
    </section>

    <section class="alt-section alt-section--paper">
      <div class="wrap">
        <div class="alt-section-head">
          <h2>${copy.allHeading}</h2>
        </div>
        <div class="alt-int-groups">${groupsHtml(copy.groups)}</div>
        <p class="alt-int-groups-note">${copy.groupsNote}</p>
      </div>
    </section>

    <section class="alt-section alt-section--tint">
      <div class="wrap">
        <div class="alt-section-head">
          <h2>${copy.connect.heading}</h2>
        </div>
        <div class="alt-int-connect-grid">${connectCardsHtml(copy.connect.cards)}</div>
        <p class="alt-int-connect-note">${copy.connect.note}</p>
      </div>
    </section>

    <section class="alt-section alt-section--paper alt-int-cta">
      <div class="wrap alt-int-cta__inner">
        <div>
          <h2>${copy.cta.heading}</h2>
          <p class="lede">${copy.cta.body}</p>
        </div>
        <div class="alt-int-cta__actions">
          <a class="btn btn-primary btn-lg alt-home-cta" href="${pageHref('contact.html')}">${copy.cta.demo}</a>
          <a class="btn btn-ghost btn-lg" href="${pageHref(copy.cta.itHref)}">${copy.cta.itLink}</a>
        </div>
      </div>
    </section>

    <section class="alt-section alt-section--paper alt-int-trademark-band">
      <div class="wrap">
        <p class="alt-int-trademark">${copy.trademark}</p>
      </div>
    </section>`;
}

function boot() {
  document.body.setAttribute('data-alt-chrome', '');
  const locale = pageLocale();
  const copy = getIntegrationsCopy(copyLocale());
  document.title = copy.metaTitle;
  document.documentElement.lang = locale;

  renderAltHomeHeader(copy, copyLocale(), { mode: 'site' });
  renderAltHomeFooter(copy, copyLocale(), { mode: 'site', omitFooterTrademark: true });

  const main = document.getElementById('integrations-main');
  if (main) main.innerHTML = renderMain(copy);

  initAltPreviewMarquee();
}

boot();

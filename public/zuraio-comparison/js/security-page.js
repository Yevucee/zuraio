import { getSecurityCopy } from './copy-security.js';
import { renderAltHomeHeader, renderAltHomeFooter } from './alt-homepage-chrome.js';
import { assetHref, getLocaleFromPathname } from './path-locale.js';
import { initControlParticles } from './control-particles.js';
import { ALT_HOME_REASON_ICONS } from './alt-home-reason-icons.js';
import { ROUTES_OUTCOME_CHECK } from './workflow-icons.js';

const SECURITY_CACHE = '20261001c';

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

function renderTrustList(lines) {
  return `<ul class="alt-home-hero__trust-list">${lines
    .map(
      (line) =>
        `<li class="alt-home-hero__trust-item"><span class="alt-home-hero__trust-icon" aria-hidden="true">${ROUTES_OUTCOME_CHECK}</span><span>${line}</span></li>`,
    )
    .join('')}</ul>`;
}

function promiseCards(cards) {
  return cards
    .map((card, i) => {
      const icon = ALT_HOME_REASON_ICONS[i % ALT_HOME_REASON_ICONS.length] ?? '';
      return `<article class="alt-home-skill-card alt-security-promise">
        <div class="alt-home-skill-card__icon" aria-hidden="true">${icon}</div>
        <h3 class="alt-home-skill-card__title">${card.title}</h3>
        <p class="alt-home-skill-card__body">${card.body}</p>
      </article>`;
    })
    .join('');
}

function hostingColumns(options) {
  return options
    .map(
      (opt) => `<article class="alt-security-hosting-card">
        <span class="alt-security-hosting-tag alt-security-hosting-tag--${opt.tagKind}">${opt.tag}</span>
        <h3>${opt.title}</h3>
        <p>${opt.body}</p>
      </article>`,
    )
    .join('');
}

function renderMain(copy) {
  const modelsCards = copy.models.cards
    .map(
      (c) => `<article class="ccard">
        <h4>${c.title}</h4>
        <p>${c.body}</p>
      </article>`,
    )
    .join('');

  return `
    <section class="alt-section alt-section--tint alt-security-hero">
      <div class="wrap">
        <span class="marker hero-eyebrow">${copy.hero.eyebrow}</span>
        <h1>${copy.hero.heading}</h1>
        <p class="lede alt-security-hero__sub">${copy.hero.sub}</p>
        ${renderTrustList(copy.hero.trust)}
      </div>
    </section>

    <section class="alt-section alt-section--paper">
      <div class="wrap">
        <div class="alt-section-head">
          <h2>${copy.promises.heading}</h2>
        </div>
        <div class="alt-security-promises">${promiseCards(copy.promises.cards)}</div>
      </div>
    </section>

    <section class="control alt-section alt-section--control" id="today" aria-labelledby="security-models-h">
      <canvas class="control-particles" data-control-particles aria-hidden="true"></canvas>
      <div class="wrap">
        <div class="head-block alt-section-head">
          <span class="marker">${copy.models.eyebrow}</span>
          <h2 id="security-models-h">${copy.models.heading}</h2>
          <p class="lede alt-control-intro-support">${copy.models.body}</p>
        </div>
        <div class="ctrl-panel">
          <div class="ctrl-grid">${modelsCards}</div>
        </div>
      </div>
    </section>

    <section class="alt-section alt-section--tint" id="hosting" aria-labelledby="security-hosting-h">
      <div class="wrap">
        <div class="alt-section-head">
          <h2 id="security-hosting-h">${copy.hosting.heading}</h2>
          <p class="lede">${copy.hosting.intro}</p>
        </div>
        <div class="alt-security-hosting-grid">${hostingColumns(copy.hosting.options)}</div>
      </div>
    </section>

    <section class="alt-section alt-section--paper">
      <div class="wrap">
        <p class="alt-security-fine-print">${copy.finePrint}</p>
      </div>
    </section>

    <section class="alt-section alt-section--paper alt-security-cta">
      <div class="wrap alt-security-cta__inner">
        <div>
          <h2>${copy.cta.heading}</h2>
          <p class="lede">${copy.cta.body}</p>
        </div>
        <div class="alt-security-cta__actions">
          <a class="btn btn-ghost btn-lg" href="${pageHref(copy.cta.itHref)}">${copy.cta.itLink}</a>
          <a class="btn btn-primary btn-lg" href="${pageHref('contact.html')}">${copy.cta.demo}</a>
        </div>
      </div>
    </section>`;
}

function boot() {
  const locale = pageLocale();
  const copy = getSecurityCopy(copyLocale());
  document.title = copy.metaTitle;
  document.documentElement.lang = locale;

  renderAltHomeHeader(copy, copyLocale(), { mode: 'site', active: 'security' });
  renderAltHomeFooter({ ...copy, footerTrademark: copy.footerTrademark }, copyLocale(), { mode: 'site' });

  const main = document.getElementById('security-main');
  if (main) main.innerHTML = renderMain(copy);

  initControlParticles();
}

boot();

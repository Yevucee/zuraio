import { getHowItHelpsCopy } from './copy-how-it-helps.js';
import { renderAltHomeHeader, renderAltHomeFooter } from './alt-homepage-chrome.js';
import { getLocaleFromPathname } from './path-locale.js';
import { ALT_HOME_BUILT_WITH_ICON } from './alt-home-skill-icons.js';
import { ALT_HOME_REASON_ICONS } from './alt-home-reason-icons.js';
import { HOW_IT_HELPS_USE_CASE_ICONS, HOW_IT_HELPS_SKILL_ICONS } from './how-it-helps-icons.js';

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

function useCasesHtml(cards) {
  return cards
    .map(
      (c, i) => `<article class="alt-home-skill-card alt-help-use-card">
        <span class="alt-home-skill-card__icon" aria-hidden="true">${HOW_IT_HELPS_USE_CASE_ICONS[i] ?? ''}</span>
        <h3 class="alt-home-skill-card__title">${c.title}</h3>
        <p class="alt-home-skill-card__body">${c.body}</p>
        <p class="alt-home-skill-card__sources alt-help-use-card__examples">${c.examples}</p>
      </article>`,
    )
    .join('');
}

function skillsHtml(cards) {
  return cards
    .map(
      (c, i) => `<article class="alt-home-skill-card">
        <span class="alt-home-skill-card__icon" aria-hidden="true">${HOW_IT_HELPS_SKILL_ICONS[i] ?? ''}</span>
        <h3 class="alt-home-skill-card__title">${c.title}</h3>
        <p class="alt-home-skill-card__body">${c.body}</p>
      </article>`,
    )
    .join('');
}

function rolesHtml(columns) {
  return columns
    .map(
      (col) => `<article class="alt-help-role-col">
        <h3 class="alt-help-role-col__title">${col.title}</h3>
        <ul class="alt-help-role-col__list">${col.items.map((item) => `<li>${item}</li>`).join('')}</ul>
      </article>`,
    )
    .join('');
}

function peopleStripHtml(items) {
  return items
    .map(
      (c, i) => `<div class="alt-home-reasons-strip__item" role="listitem">
        <span class="alt-home-reasons-strip__icon" aria-hidden="true">${ALT_HOME_REASON_ICONS[i] ?? ''}</span>
        <div class="alt-home-reasons-strip__text">
          <h3 class="alt-home-reasons-strip__title">${c.title}</h3>
          <p class="alt-home-reasons-strip__body">${c.body}</p>
        </div>
      </div>`,
    )
    .join('');
}

function renderMain(copy) {
  const builtChips = copy.skills.builtPills
    .map((pill) => `<span class="alt-home-skills-built__chip">${pill}</span>`)
    .join('');

  return `
    <section class="alt-section alt-section--tint alt-help-hero">
      <div class="wrap">
        <span class="marker hero-eyebrow">${copy.hero.eyebrow}</span>
        <h1>${copy.hero.heading}</h1>
        <p class="lede alt-help-hero__sub">${copy.hero.sub}</p>
        <div class="alt-help-hero__actions">
          <a class="btn btn-primary btn-lg alt-home-cta" href="${pageHref('contact.html')}">${copy.hero.cta}</a>
        </div>
      </div>
    </section>

    <section class="alt-section alt-section--paper" id="use-cases">
      <div class="wrap">
        <div class="alt-section-head">
          <h2>${copy.useCases.heading}</h2>
          <p class="lede">${copy.useCases.intro}</p>
        </div>
        <div class="alt-home-skills-grid alt-help-use-grid">${useCasesHtml(copy.useCases.cards)}</div>
      </div>
    </section>

    <section class="alt-section alt-section--tint" id="skills" aria-labelledby="help-skills-h">
      <div class="wrap">
        <div class="alt-section-head">
          <span class="marker alt-skills-eyebrow">${copy.skills.eyebrow}</span>
          <h2 id="help-skills-h">${copy.skills.heading}</h2>
          <p class="lede">${copy.skills.intro}</p>
        </div>
        <div class="alt-home-skills-grid alt-help-skills-grid">${skillsHtml(copy.skills.cards)}</div>
        <div class="alt-home-skills-built">
          <div class="alt-home-skills-built__main">
            <p class="alt-home-skills-built__label">
              <span class="alt-home-skills-built__label-icon" aria-hidden="true">${ALT_HOME_BUILT_WITH_ICON}</span>
              ${copy.skills.builtLabel}
            </p>
            <div class="alt-home-skills-built__chips">${builtChips}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="alt-section alt-section--paper">
      <div class="wrap">
        <div class="alt-section-head">
          <h2>${copy.roles.heading}</h2>
        </div>
        <div class="alt-help-roles-grid">${rolesHtml(copy.roles.columns)}</div>
      </div>
    </section>

    <section class="alt-section alt-section--tint alt-help-people">
      <div class="wrap">
        <div class="alt-section-head">
          <h2>${copy.people.heading}</h2>
        </div>
        <div class="alt-home-reasons-strip alt-help-people-strip" role="list">${peopleStripHtml(copy.people.items)}</div>
      </div>
    </section>

    <section class="alt-section alt-section--paper alt-help-cta">
      <div class="wrap alt-help-cta__inner">
        <div>
          <h2>${copy.cta.heading}</h2>
          <p class="lede">${copy.cta.body}</p>
        </div>
        <a class="btn btn-primary btn-lg alt-home-cta" href="${pageHref('contact.html')}">${copy.cta.demo}</a>
      </div>
    </section>`;
}

function boot() {
  document.body.setAttribute('data-alt-chrome', '');
  const locale = pageLocale();
  const copy = getHowItHelpsCopy(copyLocale());
  document.title = copy.metaTitle;
  document.documentElement.lang = locale;

  renderAltHomeHeader(copy, copyLocale(), { mode: 'site', active: 'how' });
  renderAltHomeFooter({ footerTrademark: copy.footerTrademark }, copyLocale(), { mode: 'site' });

  const main = document.getElementById('how-it-helps-main');
  if (main) main.innerHTML = renderMain(copy);
}

boot();

import * as en from './copy-en.js';
import * as de from './copy-de.js';

const LOCALE_KEY = 'zuraio-locale';

const copies = { en, de };

export function getLocale() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (fromUrl === 'de' || fromUrl === 'en') return fromUrl;
  const stored = localStorage.getItem(LOCALE_KEY);
  if (stored === 'de' || stored === 'en') return stored;
  return 'en';
}

export function setLocale(locale) {
  if (locale !== 'en' && locale !== 'de') return;
  localStorage.setItem(LOCALE_KEY, locale);
  document.documentElement.lang = locale;
  const url = new URL(location.href);
  url.searchParams.set('lang', locale);
  history.replaceState(null, '', url);
  window.dispatchEvent(new CustomEvent('zuraio:locale', { detail: locale }));
}

export function getCopy() {
  return copies[getLocale()] ?? copies.en;
}

export function t(path) {
  const parts = path.split('.');
  let value = getCopy();
  for (const part of parts) {
    if (value == null) return undefined;
    value = value[part];
  }
  return value;
}

function setText(selector, text) {
  if (text == null) return;
  document.querySelectorAll(selector).forEach((el) => {
    el.textContent = text;
  });
}

function setHtml(selector, html) {
  if (html == null) return;
  document.querySelectorAll(selector).forEach((el) => {
    el.innerHTML = html;
  });
}

function applyList(selector, items, template) {
  const container = document.querySelector(selector);
  if (!container || !items) return;
  container.innerHTML = items.map(template).join('');
}

export function applyDataI18n() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = t(el.dataset.i18n);
    if (value == null) return;
    if (el.dataset.i18nHtml === 'true') {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
}

export function applyHomeTranslations() {
  const home = getCopy().home;
  if (!home) return;

  if (home.meta?.title) document.title = home.meta.title;

  setText('#problem .marker', home.problem.marker);
  setText('#problem [data-problem-body], #problem .lede', home.problem.body);
  applyList('#problem .pain-grid', home.problem.cards, (c, i) =>
    `<div class="pcard reveal${i ? ` d${i}` : ''}"><span class="n">${c.title}</span><p>${c.body}</p></div>`,
  );
  setHtml('#problem .section-link a', home.problem.link);

  setText('#different .marker', home.different.marker);
  setText('#different h2', home.different.heading);
  setText('#different .lede', home.different.body);
  const generic = document.querySelector('#different .compare-generic');
  const zuraio = document.querySelector('#different .compare-zuraio');
  if (generic && home.different.generic) {
    generic.querySelector('.compare-title').textContent = home.different.generic.title;
    generic.querySelector('ul').innerHTML = home.different.generic.items.map((i) => `<li>${i}</li>`).join('');
  }
  if (zuraio && home.different.zuraio) {
    zuraio.querySelector('.compare-title').textContent = home.different.zuraio.title;
    zuraio.querySelector('ul').innerHTML = home.different.zuraio.items.map((i) => `<li>${i}</li>`).join('');
  }

  setText('#pillars h2', home.pillars.heading);
  const pillarCards = document.querySelectorAll('#pillars .pillar-card');
  home.pillars.items?.forEach((item, i) => {
    const card = pillarCards[i];
    if (!card) return;
    card.querySelector('.marker').textContent = item.title;
    card.querySelector('p').textContent = item.body;
    const link = card.querySelector('.text-link');
    if (link) {
      link.textContent = item.link;
      link.href = item.href;
    }
  });

  setText('#integrations h2', home.integrations.heading);
  setText('#integrations .lede', home.integrations.body);
  setText('#integrations .clarify', home.integrations.clarify);
  setHtml('#integrations .section-link a', home.integrations.link);

  setText('#assistant-demo h2', home.demo.heading);
  setText('#assistant-demo .lede', home.demo.body);
  setText('#assistant-demo .demo-disclaimer', home.demo.disclaimer);
  home.demo.steps?.forEach((label, i) => {
    const btn = document.querySelector(`[data-demo-step="${i + 1}"]`);
    if (btn) btn.textContent = label;
  });
  home.demo.tabs?.forEach((tab, i) => {
    const labels = ['demo-email', 'demo-meeting', 'demo-knowledge'];
    const btn = document.querySelector(`[data-tab="${labels[i]}"]`);
    if (btn) btn.textContent = tab.label;
    const panel = document.getElementById(labels[i]);
    if (panel) {
      panel.querySelector('h3').textContent = tab.heading;
      panel.querySelector('p').textContent = tab.body;
    }
  });

  setText('#outcomes h2', home.outcomes.heading);
  setText('#outcomes .lede', home.outcomes.body);
  const bentoCards = document.querySelectorAll('#outcomes .bcard');
  home.outcomes.cards?.forEach((card, i) => {
    const el = bentoCards[i];
    if (!el) return;
    el.querySelector('.tag').textContent = card.tag;
    el.querySelector('h4').textContent = card.title;
    el.querySelector('p').textContent = card.body;
  });

  setText('#data-control .marker', home.dataControl.marker);
  setText('#data-control h2', home.dataControl.heading);
  setText('#data-control .lede', home.dataControl.body);
  const ccards = document.querySelectorAll('#data-control .ccard');
  home.dataControl.cards?.forEach((card, i) => {
    const el = ccards[i];
    if (!el) return;
    el.querySelector('h4').textContent = card.title;
    el.querySelector('p').textContent = card.body;
  });
  setHtml('#data-control .ctrl-note span:last-child', home.dataControl.note);
  setHtml('#data-control .section-link a', home.dataControl.link);

  setText('#reviewable h2', home.reviewable.heading);
  setText('#reviewable .lede', home.reviewable.body);
  const acols = document.querySelectorAll('#reviewable .acol');
  home.reviewable.steps?.forEach((step, i) => {
    const el = acols[i];
    if (!el) return;
    el.querySelector('.step').textContent = step.label;
    el.querySelector('h4').textContent = step.title;
    el.querySelector('p').textContent = step.body;
  });
  setHtml('#reviewable .section-link a', home.reviewable.link);

  setText('#origin .marker', home.origin.marker);
  setText('#origin h2', home.origin.heading);
  const originText = document.querySelector('#origin .origin-text');
  if (originText) {
    const paragraphs = originText.querySelectorAll('p:not(.section-link)');
    home.origin.paragraphs?.forEach((p, i) => {
      if (paragraphs[i]) paragraphs[i].textContent = p;
    });
  }
  setHtml('#origin .section-link a', home.origin.link);
  const cap = document.querySelector('#origin .cap');
  if (cap) cap.textContent = home.origin.caption;
  const originImg = document.querySelector('#origin img');
  if (originImg && home.origin.imageAlt) originImg.alt = home.origin.imageAlt;

  setText('#final h2', home.final.heading);
  setText('#final p:not(.small)', home.final.body);
  const finalCtas = document.querySelectorAll('#final .cta-row a');
  if (finalCtas[0]) finalCtas[0].textContent = home.final.primaryCta;
  if (finalCtas[1]) finalCtas[1].textContent = home.final.secondaryCta;
  setText('#final .small', home.final.supporting);
}

export function applyPageTranslations() {
  const pageId = document.body.dataset.page;
  if (!pageId) return;
  const page = getCopy().pages?.[pageId];
  if (!page) return;
  if (page.title) document.title = page.title;
  if (page.hero) {
    setText('.page-hero .marker', page.hero.marker);
    setText('.page-hero h1', page.hero.heading);
    setText('.page-hero .lede', page.hero.lede);
  }
  applyDataI18n();
}

export function applyAllTranslations() {
  document.documentElement.lang = getLocale();
  applyHomeTranslations();
  applyPageTranslations();
  applyDataI18n();
}

export function initLocaleSwitcher(onChange) {
  window.addEventListener('zuraio:locale', () => {
    applyAllTranslations();
    onChange?.();
  });
}

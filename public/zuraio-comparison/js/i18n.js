import * as en from './copy-en.js';
import * as de from './copy-de.js';
import * as fr from './copy-fr.js';
import * as it from './copy-it.js';
import { isSupportedLocale } from './locales.js';
import { PAIN_CARD_ICONS } from './pain-card-icons.js';
import {
  WORKFLOW_ICONS_WITHOUT,
  WORKFLOW_ICONS_WITH,
} from './workflow-icons.js';
import { formatHeadline, setHeadlineHtml } from './headline-emphasis.js';

const LOCALE_KEY = 'zuraio-locale';

const copies = { en, de, fr, it };

export function getLocale() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (isSupportedLocale(fromUrl)) return fromUrl;
  const stored = localStorage.getItem(LOCALE_KEY);
  if (isSupportedLocale(stored)) return stored;
  return 'en';
}

export function setLocale(locale) {
  if (!isSupportedLocale(locale)) return;
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

function setHeading(selector, text, emphasis) {
  if (text == null) return;
  document.querySelectorAll(selector).forEach((el) => {
    setHeadlineHtml(el, text, emphasis);
  });
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

function renderWorkflowSteps(steps, icons, tone) {
  if (!steps?.length) return '';
  return steps
    .map((step, i) => {
      const arrow =
        i < steps.length - 1
          ? `<span class="compare-step-arrow compare-step-arrow--${tone}" aria-hidden="true"></span>`
          : '';
      return `<article class="compare-step compare-step--${tone}">
        <span class="compare-step__icon">${icons[i] || ''}</span>
        <h4 class="compare-step__title">${step.title}</h4>
        <p class="compare-step__body">${step.body}</p>
      </article>${arrow}`;
    })
    .join('');
}

function applyComparePanel(panelKey, panelCopy, icons, tone) {
  const panel = document.querySelector(`[data-compare-box="${panelKey}"]`);
  if (!panel || !panelCopy) return;

  panel.querySelector('.compare-box__title').innerHTML = formatHeadline(
    panelCopy.title,
    panelCopy.titleEmphasis,
  );
  panel.querySelector('.compare-box__subtitle').textContent = panelCopy.subtitle;
  panel.querySelector('.compare-box__time').textContent = panelCopy.timeLabel;

  const status = panel.querySelector(`[data-compare-status="${panelKey}"]`);
  if (status) {
    status.dataset.completingLabel = panelCopy.progressCompleting;
    status.dataset.completedLabel = panelCopy.progressCompleted;
    if (!status.classList.contains('is-complete')) {
      status.textContent = panelCopy.progressCompleting;
    }
  }

  const stepsEl = panel.querySelector(`[data-workflow-steps="${panelKey}"]`);
  if (stepsEl) {
    stepsEl.innerHTML = renderWorkflowSteps(panelCopy.steps, icons, tone);
  }
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
  setHtml('#problem [data-problem-headline]', home.problem.headingHtml || home.problem.heading);
  setText('#problem [data-problem-body], #problem .lede', home.problem.body);
  applyList('#problem .pain-grid', home.problem.cards, (c, i) =>
    `<div class="pain-card reveal${i ? ` d${i}` : ''}"><span class="pain-card__icon">${PAIN_CARD_ICONS[i] || ''}</span><span class="n">${c.title}</span><p>${c.body}</p></div>`,
  );
  setHtml('#problem .section-link a', home.problem.link);

  setText('#different .marker', home.different.marker);
  setText('#different h2', home.different.heading);
  setText('#different .lede', home.different.body);

  const withoutPanel = document.querySelector('[data-compare-box="without"]');
  const withPanel = document.querySelector('[data-compare-box="with"]');
  if (withoutPanel && home.different.without) {
    applyComparePanel('without', home.different.without, WORKFLOW_ICONS_WITHOUT, 'neutral');
  }
  if (withPanel && home.different.with) {
    applyComparePanel('with', home.different.with, WORKFLOW_ICONS_WITH, 'olive');
  }

  setText('#integrations h2', home.integrations.heading);
  setText('#integrations .lede', home.integrations.body);
  setText('#integrations [data-integrations-clarify]', home.integrations.clarify);
  setHtml('#integrations .section-link a', home.integrations.link);

  setText('#assistant-demo h2', home.demo.heading);
  setText('#assistant-demo .lede', home.demo.body);
  setText('#assistant-demo .demo-disclaimer', home.demo.disclaimer);
  const activeSlide = document.querySelector('#demo-showcase [data-demo-slide].is-active');
  const slideIndex = activeSlide ? parseInt(activeSlide.dataset.demoSlide, 10) : 0;
  const slideCopy = home.demo.slides?.[slideIndex];
  if (slideCopy) {
    setText('[data-demo-label]', slideCopy.label);
    setText('[data-demo-caption-text]', slideCopy.body);
    const headingEl = document.querySelector('[data-demo-heading]');
    if (headingEl) headingEl.textContent = slideCopy.heading;
  }

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

  setText('#reviewable .marker', home.reviewable.marker);
  setText('#reviewable h2', home.reviewable.heading);
  const reviewableLedes = document.querySelectorAll('#reviewable .lede');
  home.reviewable.bodyParagraphs?.forEach((paragraph, i) => {
    if (reviewableLedes[i]) reviewableLedes[i].textContent = paragraph;
  });
  const processSteps = document.querySelectorAll('#reviewable .acol');
  home.reviewable.steps?.forEach((step, i) => {
    const el = processSteps[i];
    if (!el) return;
    const label = el.querySelector('.step');
    const title = el.querySelector('h4');
    const body = el.querySelector('p');
    if (label) label.textContent = step.label;
    if (title) title.textContent = step.title;
    if (body) body.textContent = step.body;
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
    setHeading('.page-hero h1', page.hero.heading, page.hero.headingEmphasis);
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

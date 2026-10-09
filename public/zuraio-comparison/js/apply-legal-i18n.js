import * as enLegal from './copy-en-legal.js';
import * as deLegal from './copy-de-legal.js';
import * as frLegal from './copy-fr-legal.js';
import * as itLegal from './copy-it-legal.js';
import { langHrefForLocale } from './path-locale.js';

const BUNDLES = { en: enLegal, de: deLegal, fr: frLegal, it: itLegal };

const LEGAL_PAGE_IDS = new Set(['impressum', 'privacy', 'terms', 'cookies']);

function localizeHref(href, locale) {
  return langHrefForLocale(href, locale);
}

function applyLinkLocales(root, locale) {
  root.querySelectorAll('a[href]').forEach((anchor) => {
    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    const file = href.split('#')[0];
    if (!file.endsWith('.html')) return;
    anchor.setAttribute('href', localizeHref(href, locale));
  });
}

function renderBanners() {
  return '';
}

function renderSection(section) {
  const headingId = section.id ? ` id="${section.id}"` : '';
  let html = `<article class="legal-section reveal">`;
  html += `<h2${headingId}>${section.heading}</h2>`;

  if (section.type === 'dl' && section.items) {
    html += '<dl class="legal-dl">';
    section.items.forEach(({ dt, dd, mailto }) => {
      html += `<dt>${dt}</dt><dd>`;
      if (mailto) {
        html += '<a href="mailto:michael.wili@zuraio.ch">michael.wili@zuraio.ch</a>';
      } else {
        html += dd;
      }
      html += '</dd>';
    });
    html += '</dl>';
  }

  section.paragraphs?.forEach((p) => {
    html += p.includes('<') ? `<p>${p}</p>` : `<p>${p}</p>`;
  });

  if (section.list?.length) {
    html += '<ul>';
    section.list.forEach((item) => {
      if (typeof item === 'string') {
        html += `<li>${item}</li>`;
      } else {
        html += `<li><strong>${item.strong}</strong>${item.text}</li>`;
      }
    });
    html += '</ul>';
  }

  html += '</article>';
  return html;
}

function renderLegalPage(page) {
  return page.sections.map(renderSection).join('\n\n    ');
}

function applyLegalPageMeta(page) {
  if (page.title) document.title = page.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && page.description) metaDesc.setAttribute('content', page.description);
  if (page.lastUpdated) {
    const el = document.querySelector('.page-hero .legal-last-updated');
    if (el) el.textContent = page.lastUpdated;
  }
}

export function applyLegalTranslations(locale) {
  const pageId = document.body.dataset.page;
  if (!LEGAL_PAGE_IDS.has(pageId)) return;

  const bundle = BUNDLES[locale] ?? BUNDLES.en;
  const page = bundle?.legalPages?.[pageId];
  if (!page) return;

  applyLegalPageMeta(page);

  const container = document.querySelector('.legal-content');
  if (!container) return;

  container.innerHTML = renderLegalPage(page);
  applyLinkLocales(container, locale);
  scrollToLegalHashIfPresent();
}

function scrollToLegalHashIfPresent() {
  const raw = location.hash;
  if (!raw || raw.length < 2) return;
  const id = decodeURIComponent(raw.slice(1));
  const target = document.getElementById(id);
  if (!target) return;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
      const offset =
        parseFloat(getComputedStyle(target).scrollMarginTop) ||
        parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) + 16 ||
        72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
    });
  });
}

export function isLegalPage(pageId) {
  return LEGAL_PAGE_IDS.has(pageId);
}

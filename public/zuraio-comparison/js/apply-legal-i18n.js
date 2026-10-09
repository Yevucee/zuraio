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
  const idAttr = section.id ? ` id="${section.id}"` : '';
  let html = `<article class="legal-section reveal"${idAttr}>`;
  html += `<h2>${section.heading}</h2>`;

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

export function applyLegalTranslations(locale) {
  const pageId = document.body.dataset.page;
  if (!LEGAL_PAGE_IDS.has(pageId)) return;

  const bundle = BUNDLES[locale] ?? BUNDLES.en;
  const page = bundle?.legalPages?.[pageId];
  if (!page) return;

  const container = document.querySelector('.legal-content');
  if (!container) return;

  container.innerHTML = renderLegalPage(page);
  applyLinkLocales(container, locale);
}

export function isLegalPage(pageId) {
  return LEGAL_PAGE_IDS.has(pageId);
}

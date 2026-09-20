import * as deLegal from './copy-de-legal.js';
import * as frLegal from './copy-fr-legal.js';
import * as itLegal from './copy-it-legal.js';
import { langHrefForLocale } from './path-locale.js';

const BUNDLES = { de: deLegal, fr: frLegal, it: itLegal };

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

function renderBanners(banners) {
  if (!banners?.length) return '';
  return banners
    .map((banner) => {
      if (banner.type === 'status') {
        return `<div class="todo-block data-internal-only reveal" role="status">
      <p class="todo-label">${banner.label}</p>
      <p>${banner.text}</p>
    </div>`;
      }
      if (banner.type === 'mono') {
        return `<div class="todo-block data-internal-only reveal">
      <p class="mono">${banner.text}</p>
    </div>`;
      }
      return '';
    })
    .join('\n\n    ');
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
    html += `<p>${p}</p>`;
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

  if (section.todo) {
    html += `<p class="mono">${section.todo}</p>`;
  }

  if (section.todoBlock) {
    html += `<div class="todo-block data-internal-only" style="margin-top:16px;">
        <p class="mono">${section.todoBlock}</p>
      </div>`;
  }

  html += '</article>';
  return html;
}

function renderLegalPage(page) {
  let html = renderBanners(page.banners);
  if (html) html += '\n\n    ';
  html += page.sections.map(renderSection).join('\n\n    ');
  if (page.lastUpdated) {
    html += `\n\n    <p class="mono reveal" style="margin-top:40px;">${page.lastUpdated}</p>`;
  }
  return html;
}

export function applyLegalTranslations(locale) {
  const pageId = document.body.dataset.page;
  if (!LEGAL_PAGE_IDS.has(pageId) || locale === 'en') return;

  const bundle = BUNDLES[locale];
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

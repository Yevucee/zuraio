import { getTechnicalCopy } from './copy-technical.js';
import { renderAltHomeHeader, renderAltHomeFooter } from './alt-homepage-chrome.js';
import { renderAltPageCta } from './alt-page-cta.js';
import { getLocaleFromPathname } from './path-locale.js';
import { resolveRouteFromLocation } from './site-routes.js';
import { ROUTES_ICONS_WITH } from './workflow-icons.js';

function pageLocale() {
  return getLocaleFromPathname() ?? (document.documentElement.lang || 'en');
}

function copyLocale() {
  return pageLocale() === 'de' ? 'de' : 'en';
}

function viewingLocale() {
  return getLocaleFromPathname() === 'de' ? 'de' : 'en';
}

function routeHref(key) {
  return resolveRouteFromLocation(key, viewingLocale(), location.pathname);
}

function layerSection(arch) {
  const tableRows = arch.layers
    .map(
      (layer, i) => `<tr>
        <th scope="row">${i + 1}. ${layer.title}</th>
        <td>${layer.body}</td>
      </tr>`,
    )
    .join('');
  const mobileCards = arch.layers
    .map(
      (layer, i) => `<article class="alt-kv-card">
        <p class="alt-kv-card__label">${i + 1}. ${layer.title}</p>
        <p class="alt-kv-card__value">${layer.body}</p>
      </article>`,
    )
    .join('');

  return `
    <div class="alt-tech-layer-table-wrap">
      <table class="alt-tech-layer-table">
        <caption class="visually-hidden">${arch.heading}</caption>
        <tbody>${tableRows}</tbody>
      </table>
    </div>
    <div class="alt-kv-stack">${mobileCards}</div>
    ${archDiagram(arch)}`;
}

function archDiagram(arch) {
  const labels = arch.diagramLabels;
  const markerId = 'alt-tech-arrow';
  const rows = [
    { y: 16, h: 44, kind: 'accent' },
    { y: 76, h: 44, kind: 'paper' },
    { y: 136, h: 44, kind: 'olive' },
    { y: 196, h: 56, kind: 'paper' },
    { y: 268, h: 44, kind: 'paper' },
    { y: 328, h: 44, kind: 'accent' },
    { y: 388, h: 44, kind: 'paper' },
  ];
  const boxes = rows
    .map((row, i) => {
      const label = labels[i] ?? '';
      const fontSize = label.length > 34 ? 9 : label.length > 26 ? 10 : 11;
      const textY = row.h === 56 ? row.y + 32 : row.y + 28;
      const cls =
        row.kind === 'olive'
          ? 'alt-tech-arch-box alt-tech-arch-box--olive'
          : row.kind === 'accent'
            ? 'alt-tech-arch-box alt-tech-arch-box--accent'
            : 'alt-tech-arch-box';
      const lineBefore =
        i === 0
          ? ''
          : `<line class="alt-tech-arch-line" x1="240" y1="${row.y - 16}" x2="240" y2="${row.y}" marker-end="url(#${markerId})"/>`;
      return `${lineBefore}<rect class="${cls}" x="40" y="${row.y}" width="400" height="${row.h}" rx="8"/>
        <text class="alt-tech-arch-label${row.kind === 'olive' ? ' alt-tech-arch-label--light' : ''}" x="240" y="${textY}" text-anchor="middle" font-size="${fontSize}">${label}</text>`;
    })
    .join('');

  return `<div class="alt-tech-diagram-box">
    <svg class="alt-tech-arch-svg" viewBox="0 0 480 720" role="img" aria-labelledby="alt-tech-arch-title alt-tech-arch-desc">
      <title id="alt-tech-arch-title">${arch.diagramTitle}</title>
      <desc id="alt-tech-arch-desc">${arch.diagramDesc}</desc>
      <defs>
        <marker id="${markerId}" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z"/></marker>
      </defs>
      ${boxes}
    </svg>
    <p class="mono alt-tech-diagram-caption">${arch.diagramCaption}</p>
  </div>`;
}

function flowSteps(steps) {
  return `<ol class="alt-tech-flow">${steps
    .map(
      (step, i) =>
        `<li class="alt-tech-flow__step"><span class="alt-tech-flow__num">${i + 1}</span><span class="alt-tech-flow__text">${step}</span></li>`,
    )
    .join('')}</ol>`;
}

function lifecycleHtml(lifecycle) {
  const pills = lifecycle.stages
    .map((stage, i) => {
      const active = i === lifecycle.highlightIndex ? ' alt-skill-lifecycle__pill--active' : '';
      return `<li class="alt-skill-lifecycle__pill${active}"><span>${stage}</span></li>`;
    })
    .join('');
  return `
    <p class="lede alt-sub-max">${lifecycle.body}</p>
    <ol class="alt-skill-lifecycle" aria-label="${lifecycle.heading}">${pills}</ol>`;
}

function hostingHtml(hosting) {
  const cols = hosting.columns;
  const head = cols
    .map(
      (c) => `<th scope="col">
        <span class="alt-security-hosting-tag alt-security-hosting-tag--${c.tagKind}">${c.tag}</span>
        <span class="alt-tech-hosting-col-title">${c.title}</span>
      </th>`,
    )
    .join('');
  const body = hosting.rowLabels
    .map((label, rowIdx) => {
      const cells = hosting.rows[rowIdx].map((val) => `<td>${val}</td>`).join('');
      return `<tr><th scope="row">${label}</th>${cells}</tr>`;
    })
    .join('');

  const mobileCards = cols
    .map((col, colIdx) => {
      const pairs = hosting.rowLabels
        .map(
          (label, rowIdx) =>
            `<div class="alt-kv-card__row"><span class="alt-kv-card__label">${label}</span><span class="alt-kv-card__value">${hosting.rows[rowIdx][colIdx]}</span></div>`,
        )
        .join('');
      return `<article class="alt-home-skill-card alt-tech-hosting-card">
        <span class="alt-security-hosting-tag alt-security-hosting-tag--${col.tagKind}">${col.tag}</span>
        <h3 class="alt-home-skill-card__title">${col.title}</h3>
        ${pairs}
      </article>`;
    })
    .join('');

  return `
    <div class="alt-tech-hosting-table-wrap">
      <table class="alt-tech-hosting-table">
        <thead><tr><th scope="col"></th>${head}</tr></thead>
        <tbody>${body}</tbody>
      </table>
    </div>
    <div class="alt-tech-hosting-cards">${mobileCards}</div>
    <p class="alt-tech-hosting-more">
      <a class="alt-home-link-secondary" data-route="security-hosting" href="${routeHref('security-hosting')}">${hosting.moreLink} →</a>
    </p>`;
}

function recordedHtml(recorded) {
  return recorded.items
    .map((item, i) => {
      const icon = ROUTES_ICONS_WITH[i % ROUTES_ICONS_WITH.length] ?? '';
      return `<article class="alt-recorded-row">
        <div class="alt-recorded-row__icon" aria-hidden="true">${icon}</div>
        <p class="alt-recorded-row__text"><strong>${item.label}:</strong> ${item.text}</p>
      </article>`;
    })
    .join('');
}

function deploymentChecklist(items) {
  return `<ul class="alt-tech-checklist">${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function renderMain(copy) {
  const arch = copy.architecture;
  return `
    <section class="alt-section alt-section--tint alt-tech-hero">
      <div class="wrap">
        <span class="marker hero-eyebrow">${copy.hero.eyebrow}</span>
        <h1 class="alt-page-h1">${copy.hero.heading}</h1>
        <p class="lede alt-sub-max">${copy.hero.sub}</p>
        <p class="alt-page-hero-cta">
          <a class="btn btn-primary btn-lg alt-page-hero-cta__btn" data-route="contact" href="${routeHref('contact')}">${copy.hero.cta}</a>
        </p>
      </div>
    </section>

    <section class="alt-section alt-section--paper" id="architecture">
      <div class="wrap">
        <div class="alt-section-head"><h2>${arch.heading}</h2></div>
        ${layerSection(arch)}
      </div>
    </section>

    <section class="alt-section alt-section--tint" id="request-flow">
      <div class="wrap">
        <div class="alt-section-head"><h2>${copy.requestFlow.heading}</h2></div>
        ${flowSteps(copy.requestFlow.steps)}
      </div>
    </section>

    <section class="alt-section alt-section--paper" id="skill-lifecycle">
      <div class="wrap">
        <div class="alt-section-head"><h2>${copy.lifecycle.heading}</h2></div>
        ${lifecycleHtml(copy.lifecycle)}
      </div>
    </section>

    <section class="alt-section alt-section--tint" id="hosting-compare">
      <div class="wrap">
        <div class="alt-section-head"><h2>${copy.hosting.heading}</h2></div>
        ${hostingHtml(copy.hosting)}
      </div>
    </section>

    <section class="alt-section alt-section--paper" id="whats-recorded">
      <div class="wrap">
        <div class="alt-section-head">
          <h2>${copy.recorded.heading}</h2>
          <p class="lede alt-sub-max">${copy.recorded.intro}</p>
        </div>
        <div class="alt-recorded-grid">${recordedHtml(copy.recorded)}</div>
      </div>
    </section>

    <section class="alt-section alt-section--tint" id="deployment">
      <div class="wrap">
        <div class="alt-section-head"><h2>${copy.deployment.heading}</h2></div>
        ${deploymentChecklist(copy.deployment.items)}
      </div>
    </section>

    ${renderAltPageCta(copy.cta, 'paper')}`;
}

function boot() {
  document.body.setAttribute('data-alt-chrome', '');
  const locale = pageLocale();
  const copy = getTechnicalCopy(copyLocale());
  document.title = copy.metaTitle;
  document.documentElement.lang = locale;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && copy.metaDescription) metaDesc.setAttribute('content', copy.metaDescription);

  renderAltHomeHeader(copy, copyLocale(), { mode: 'site', active: 'it-partner' });
  renderAltHomeFooter({ ...copy, footerTrademark: copy.footerTrademark }, copyLocale(), {
    mode: 'site',
    omitFooterTrademark: false,
  });

  const main = document.getElementById('tech-arch-main');
  if (main) main.innerHTML = renderMain(copy);
}

boot();

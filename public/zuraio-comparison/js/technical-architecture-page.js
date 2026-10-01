import { getTechnicalArchitectureCopy } from './copy-technical-architecture.js';
import { renderAltHomeHeader, renderAltHomeFooter } from './alt-homepage-chrome.js';
import { getLocaleFromPathname } from './path-locale.js';

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

function layerCards(layers) {
  return layers
    .map(
      (layer) => `<article class="alt-tech-layer-card">
        <p class="alt-tech-layer-card__text"><strong>${layer.title}.</strong> ${layer.body}</p>
      </article>`,
    )
    .join('');
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
    .map((step, i) => `<li class="alt-tech-flow__step"><span class="alt-tech-flow__num">${i + 1}</span><span class="alt-tech-flow__text">${step}</span></li>`)
    .join('')}</ol>`;
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
        <h1>${copy.hero.heading}</h1>
        <p class="lede alt-tech-hero__sub">${copy.hero.sub}</p>
        <p class="alt-tech-hero__cta">
          <a class="btn btn-primary btn-lg" href="${pageHref('contact.html')}">${copy.hero.cta}</a>
        </p>
      </div>
    </section>

    <section class="alt-section alt-section--paper" id="architecture">
      <div class="wrap">
        <div class="alt-section-head">
          <h2>${arch.heading}</h2>
        </div>
        <div class="alt-tech-layer-grid">${layerCards(arch.layers)}</div>
        ${archDiagram(arch)}
      </div>
    </section>

    <section class="alt-section alt-section--tint" id="request-flow">
      <div class="wrap">
        <div class="alt-section-head">
          <h2>${copy.requestFlow.heading}</h2>
        </div>
        ${flowSteps(copy.requestFlow.steps)}
      </div>
    </section>

    <section class="alt-section alt-section--paper" id="deployment">
      <div class="wrap">
        <div class="alt-section-head">
          <h2>${copy.deployment.heading}</h2>
        </div>
        ${deploymentChecklist(copy.deployment.items)}
      </div>
    </section>

    <section class="alt-section alt-section--tint alt-tech-cta">
      <div class="wrap alt-tech-cta__inner">
        <div>
          <h2>${copy.cta.heading}</h2>
          <p class="lede">${copy.cta.body}</p>
        </div>
        <div class="alt-tech-cta__actions">
          <a class="btn btn-primary btn-lg" href="${pageHref('contact.html')}">${copy.cta.button}</a>
        </div>
      </div>
    </section>`;
}

function boot() {
  document.body.setAttribute('data-alt-chrome', '');
  const locale = pageLocale();
  const copy = getTechnicalArchitectureCopy(copyLocale());
  document.title = copy.metaTitle;
  document.documentElement.lang = locale;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && copy.metaDescription) metaDesc.setAttribute('content', copy.metaDescription);

  renderAltHomeHeader(copy, copyLocale(), { mode: 'site', active: null });
  renderAltHomeFooter({ ...copy, footerTrademark: copy.footerTrademark }, copyLocale(), {
    mode: 'site',
    omitFooterTrademark: false,
  });

  const main = document.getElementById('tech-arch-main');
  if (main) main.innerHTML = renderMain(copy);
}

boot();

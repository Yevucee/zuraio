import { renderHeader, renderFooter, initReveal } from './site.js?v=20260750';
import { initHeroComparison } from './hero-comparison.js?v=20260773';
import { initScatteredKnowledge } from './scattered-knowledge.js';
import { initRoutesDiagram, refreshRoutesDiagram } from './routes-diagram.js?v=20260820';

document.documentElement.lang = 'en';

const DESKTOP_EXPAND_MQ = window.matchMedia('(min-width: 768px)');

function syncMobileOnlyDetails() {
  document.querySelectorAll('.hp-preview-expand--mobile-only').forEach((detailsEl) => {
    detailsEl.open = DESKTOP_EXPAND_MQ.matches;
  });
}

/** Prefer static scattered-knowledge layout on narrow screens to avoid overlapping labels. */
function syncPreviewDiagramLayout() {
  const scattered = document.querySelector('[data-scattered-knowledge]');
  const mobileScattered = window.matchMedia('(max-width: 767px)').matches;
  if (scattered) {
    scattered.classList.toggle('is-static', mobileScattered);
    scattered.classList.toggle('hp-preview-scattered--mobile', mobileScattered);
  }
}

function bootPreviewHomepage() {
  renderHeader();
  renderFooter();
  initReveal();
  initHeroComparison();
  initScatteredKnowledge();
  initRoutesDiagram();
  syncPreviewDiagramLayout();
  syncMobileOnlyDetails();

  DESKTOP_EXPAND_MQ.addEventListener('change', syncMobileOnlyDetails);

  const layoutMq = window.matchMedia('(max-width: 767px)');
  layoutMq.addEventListener('change', () => {
    syncPreviewDiagramLayout();
    refreshRoutesDiagram();
  });

  window.addEventListener('resize', () => {
    refreshRoutesDiagram();
  });
}

bootPreviewHomepage();

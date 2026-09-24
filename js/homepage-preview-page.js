import { renderHeader, renderFooter, initReveal } from './site.js?v=20260750';

document.documentElement.lang = 'en';

const DESKTOP_EXPAND_MQ = window.matchMedia('(min-width: 768px)');

/** On desktop, show collapsible section bodies without requiring <details open>. */
function syncMobileOnlyDetails() {
  document.querySelectorAll('.hp-preview-expand--mobile-only').forEach((detailsEl) => {
    detailsEl.open = DESKTOP_EXPAND_MQ.matches;
  });
}

function bootPreviewHomepage() {
  renderHeader();
  renderFooter();
  initReveal();
  syncMobileOnlyDetails();
  DESKTOP_EXPAND_MQ.addEventListener('change', syncMobileOnlyDetails);
}

bootPreviewHomepage();

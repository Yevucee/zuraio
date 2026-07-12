import { renderHeader, renderFooter, initReveal, initTabs } from './site.js?v=20260728';
import { initHeroComparison } from './hero-comparison.js?v=20260716';
import { initProblemComparison } from './problem-comparison.js?v=20260716';
import { initDemoShowcase } from './demo-showcase.js?v=20260723';
import { initControlParticles } from './control-particles.js?v=20260727';
import { initMarquee } from './integrations-marquee.js';
import { initFaq } from './faq-accordion.js';
import { initInternalReview, refreshInternalReview, isInternalReviewMode } from './internal-review.js';
import { initLogoWatermarks } from './logo-watermarks.js';
import { SITE } from './config.js';
import { initWorkflowComparison, resetWorkflowComparison } from './workflow-comparison.js?v=20260746';
import { applyAllTranslations, getLocale, initLocaleSwitcher } from './i18n.js?v=20260746';

document.documentElement.lang = getLocale();

function boot() {
  renderHeader();
  renderFooter();
  applyAllTranslations();
  initInternalReview();
  initLogoWatermarks();
  initReveal();
  initTabs();
  initHeroComparison();
  initProblemComparison();
  initDemoShowcase();
  initControlParticles();
  initMarquee();
  initFaq();
  initWorkflowComparison();
}

boot();

initLocaleSwitcher(() => {
  renderHeader();
  renderFooter();
  applyAllTranslations();
  initReveal();
  refreshInternalReview();
  initMarquee();
  resetWorkflowComparison();
});

// Contact form
const form = document.getElementById('contact-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const notice = document.getElementById('form-notice');
  if (!notice) return;
  notice.hidden = false;

  if (isInternalReviewMode()) {
    notice.textContent =
      getLocale() === 'de'
        ? 'Entwicklungshinweis: Dieses Formular ist noch nicht mit einem Backend verbunden. Integrationspunkt in contact.html dokumentiert.'
        : 'Development notice: this form is not yet connected to a backend. Integration point documented in contact.html source.';
    return;
  }

  notice.innerHTML =
    getLocale() === 'de'
      ? `Das Formular ist noch nicht verbunden. Bitte schreiben Sie uns an <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>.`
      : `This form is not yet connected. Please email us at <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>.`;
});

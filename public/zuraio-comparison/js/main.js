import { renderHeader, renderFooter, initReveal, initTabs } from './site.js';
import { initHeroComparison } from './hero-comparison.js?v=20260706';
import { initMarquee } from './integrations-marquee.js';
import { initFaq } from './faq-accordion.js';
import { initInternalReview, refreshInternalReview, isInternalReviewMode } from './internal-review.js';
import { initLogoWatermarks } from './logo-watermarks.js';
import { SITE } from './config.js';
import {
  applyAllTranslations,
  getLocale,
  initLocaleSwitcher,
} from './i18n.js';

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
  initMarquee();
  initFaq();
}

boot();

initLocaleSwitcher(() => {
  renderHeader();
  renderFooter();
  applyAllTranslations();
  refreshInternalReview();
  initMarquee();
});

// Email demo step controls
document.querySelectorAll('[data-demo-step]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const step = btn.dataset.demoStep;
    document.querySelectorAll('[data-demo-panel]').forEach((p) => {
      p.hidden = p.dataset.demoPanel !== step;
    });
    document.querySelectorAll('[data-demo-step]').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.demoStep === step);
      b.setAttribute('aria-selected', b.dataset.demoStep === step ? 'true' : 'false');
    });
  });
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

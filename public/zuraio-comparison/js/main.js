import { renderHeader, renderFooter, initReveal, initTabs } from './site.js';
import { initHeroComparison } from './hero-comparison.js';
import { initProblemComparison } from './problem-comparison.js';
import { initMarquee } from './integrations-marquee.js';
import { initFaq } from './faq-accordion.js';
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
  initReveal();
  initTabs();
  initHeroComparison();
  initProblemComparison();
  initMarquee();
  initFaq();
}

boot();

initLocaleSwitcher(() => {
  renderHeader();
  renderFooter();
  applyAllTranslations();
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
  if (notice) {
    notice.hidden = false;
    notice.textContent =
      getLocale() === 'de'
        ? 'Entwicklungshinweis: Dieses Formular ist noch nicht mit einem Backend verbunden. Integrationspunkt in contact.html dokumentiert.'
        : 'Development notice: this form is not yet connected to a backend. Integration point documented in contact.html source.';
  }
});

import { HERO_COMPARISON_ENABLED, DEFAULT_HERO_OPTION } from './config.js';
import { getCopy } from './i18n.js';
import { getLocale } from './i18n.js';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function getHeroFromUrl() {
  const n = parseInt(new URLSearchParams(location.search).get('hero') || '', 10);
  return n >= 1 && n <= 5 ? n : DEFAULT_HERO_OPTION;
}

export function initHeroComparison() {
  const root = document.getElementById('hero-comparison');
  if (!root) return;

  let current = getHeroFromUrl();

  const imgEl = root.querySelector('[data-hero-image]');
  const headlineEl = root.querySelector('[data-hero-headline]');
  const statusEl = root.querySelector('[data-hero-status]');
  const controlsEl = root.querySelector('[data-hero-controls]');
  const dots = root.querySelectorAll('[data-hero-dot]');
  const prevBtn = root.querySelector('[data-hero-prev]');
  const nextBtn = root.querySelector('[data-hero-next]');

  function applyControlLabels() {
    const ui = getCopy().ui;
    if (prevBtn) {
      prevBtn.textContent = ui.previous;
      prevBtn.setAttribute('aria-label', ui.previousAria);
    }
    if (nextBtn) {
      nextBtn.textContent = ui.next;
      nextBtn.setAttribute('aria-label', ui.nextAria);
    }
    dots.forEach((dot) => {
      const n = parseInt(dot.dataset.heroDot, 10);
      dot.setAttribute('aria-label', ui.optionLabel(n));
    });
    const dotsGroup = root.querySelector('.hero-dots');
    if (dotsGroup) dotsGroup.setAttribute('aria-label', ui.heroOptionsGroup);
  }

  function render(option, animate) {
    const { heroOptions, ui } = getCopy();
    const data = heroOptions[option - 1];
    if (!data) return;

    const update = () => {
      if (headlineEl) headlineEl.textContent = data.headline;
      if (imgEl && data.image) {
        imgEl.src = data.image;
        imgEl.alt = data.imageAlt || data.headline;
      }
      statusEl.textContent = ui.optionOf(option);
      dots.forEach((dot) => {
        const n = parseInt(dot.dataset.heroDot, 10);
        dot.setAttribute('aria-pressed', n === option ? 'true' : 'false');
        dot.classList.toggle('is-active', n === option);
      });
      const url = new URL(location.href);
      url.searchParams.set('hero', String(option));
      url.searchParams.set('lang', getLocale());
      history.replaceState(null, '', url);
    };

    if (animate && !reduce && imgEl && data.image) {
      imgEl.classList.add('is-changing');
      const preload = new Image();
      preload.onload = () => {
        update();
        imgEl.classList.remove('is-changing');
      };
      preload.onerror = () => {
        update();
        imgEl.classList.remove('is-changing');
      };
      preload.src = data.image;
    } else {
      update();
    }
  }

  function goTo(option) {
    current = Math.max(1, Math.min(5, option));
    render(current, true);
  }

  prevBtn?.addEventListener('click', () => goTo(current === 1 ? 5 : current - 1));
  nextBtn?.addEventListener('click', () => goTo(current === 5 ? 1 : current + 1));
  dots.forEach((dot) => {
    dot.addEventListener('click', () => goTo(parseInt(dot.dataset.heroDot, 10)));
  });

  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(current === 1 ? 5 : current - 1);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(current === 5 ? 1 : current + 1);
    }
  });

  applyControlLabels();

  if (!HERO_COMPARISON_ENABLED && controlsEl) {
    controlsEl.hidden = true;
    goTo(DEFAULT_HERO_OPTION);
  } else {
    render(current, false);
  }

  window.addEventListener('zuraio:locale', () => {
    applyControlLabels();
    render(current, false);
  });
}

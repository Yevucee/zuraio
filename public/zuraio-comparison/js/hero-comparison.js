import { HERO_COMPARISON_ENABLED, HERO_AUTO_PLAY_MS, DEFAULT_HERO_OPTION } from './config.js';
import { getCopy } from './i18n.js';
import { getLocale } from './i18n.js';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function getHeroFromUrl() {
  const n = parseInt(new URLSearchParams(location.search).get('hero') || '', 10);
  return n >= 1 && n <= 5 ? n : DEFAULT_HERO_OPTION;
}

function renderTrustSignals() {
  const list = document.querySelector('.hero-trust');
  const { trustSignals } = getCopy();
  const ui = getCopy().ui;
  if (!list || !trustSignals) return;
  list.setAttribute('aria-label', ui.trustAria);
  list.innerHTML = trustSignals
    .map((item) => {
      const label = typeof item === 'string' ? item : item.label;
      const href = typeof item === 'string' ? null : item.href;
      if (href) return `<li><a href="${href}">${label}</a></li>`;
      return `<li>${label}</li>`;
    })
    .join('');
}

export function initHeroComparison() {
  const root = document.getElementById('hero-comparison');
  if (!root) return;

  let current = getHeroFromUrl();
  let autoTimer = null;

  const copyEl = root.querySelector('[data-hero-copy]');
  const headlineEl = root.querySelector('[data-hero-headline]');
  const paraEl = root.querySelector('[data-hero-paragraph]');
  const ctaEl = root.querySelector('[data-hero-cta]');

  function stopAutoPlay() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    if (!HERO_COMPARISON_ENABLED || reduce) return;
    autoTimer = setInterval(() => {
      goTo(current === 5 ? 1 : current + 1);
    }, HERO_AUTO_PLAY_MS);
  }

  function render(option, animate) {
    const { heroOptions } = getCopy();
    const data = heroOptions[option - 1];
    if (!data) return;

    const update = () => {
      headlineEl.textContent = data.headline;
      paraEl.textContent = data.paragraph;
      ctaEl.textContent = data.cta;
      ctaEl.href = data.ctaHref;
      const url = new URL(location.href);
      url.searchParams.set('hero', String(option));
      url.searchParams.set('lang', getLocale());
      history.replaceState(null, '', url);
    };

    if (animate && !reduce && copyEl) {
      copyEl.classList.add('is-changing');
      setTimeout(() => {
        update();
        copyEl.classList.remove('is-changing');
      }, 180);
    } else {
      update();
    }
  }

  function goTo(option) {
    current = Math.max(1, Math.min(5, option));
    render(current, true);
  }

  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(current === 1 ? 5 : current - 1);
      startAutoPlay();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(current === 5 ? 1 : current + 1);
      startAutoPlay();
    }
  });

  root.addEventListener('mouseenter', stopAutoPlay);
  root.addEventListener('mouseleave', startAutoPlay);
  root.addEventListener('focusin', stopAutoPlay);
  root.addEventListener('focusout', (e) => {
    if (!root.contains(e.relatedTarget)) startAutoPlay();
  });

  renderTrustSignals();

  if (!HERO_COMPARISON_ENABLED) {
    goTo(DEFAULT_HERO_OPTION);
  } else {
    render(current, false);
    startAutoPlay();
  }

  window.addEventListener('zuraio:locale', () => {
    renderTrustSignals();
    render(current, false);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAutoPlay();
    else startAutoPlay();
  });
}

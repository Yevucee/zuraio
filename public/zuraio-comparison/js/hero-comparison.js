import {
  HERO_COMPARISON_ENABLED,
  HERO_AUTO_PLAY_MS,
  DEFAULT_HERO_OPTION,
} from './config.js';
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
  const rail = document.querySelector('[data-hero-rail]');
  if (!root) return;

  let current = getHeroFromUrl();
  let paused = reduce;
  let autoTimer = null;

  const copyEl = root.querySelector('[data-hero-copy]');
  const headlineEl = root.querySelector('[data-hero-headline]');
  const paraEl = root.querySelector('[data-hero-paragraph]');
  const ctaEl = root.querySelector('[data-hero-cta]');
  const statusEls = document.querySelectorAll('[data-hero-status]');
  const dots = document.querySelectorAll('[data-hero-dot]');
  const prevBtns = document.querySelectorAll('[data-hero-prev]');
  const nextBtns = document.querySelectorAll('[data-hero-next]');
  const pauseBtn = document.querySelector('[data-hero-pause]');
  const railLabel = document.querySelector('[data-hero-rail-label]');
  const progressBar = document.querySelector('[data-hero-progress]');
  const dotsGroup = document.querySelector('.hero-option-rail__dots');

  function applyControlLabels() {
    const ui = getCopy().ui;
    prevBtns.forEach((btn) => {
      btn.textContent = ui.previous;
      btn.setAttribute('aria-label', ui.previousAria);
    });
    nextBtns.forEach((btn) => {
      btn.textContent = ui.next;
      btn.setAttribute('aria-label', ui.nextAria);
    });
    dots.forEach((dot) => {
      const n = parseInt(dot.dataset.heroDot, 10);
      dot.setAttribute('aria-label', ui.optionLabel(n));
    });
    if (dotsGroup) dotsGroup.setAttribute('aria-label', ui.heroOptionsGroup);
    if (railLabel) railLabel.textContent = ui.heroRailLabel;
    updatePauseButton();
  }

  function updatePauseButton() {
    if (!pauseBtn) return;
    const ui = getCopy().ui;
    pauseBtn.textContent = paused ? ui.play : ui.pause;
    pauseBtn.setAttribute('aria-label', paused ? ui.playAria : ui.pauseAria);
    pauseBtn.setAttribute('aria-pressed', paused ? 'true' : 'false');
    rail?.classList.toggle('is-paused', paused);
  }

  function restartProgress() {
    if (!progressBar || paused || reduce || !HERO_COMPARISON_ENABLED) return;
    progressBar.style.animation = 'none';
    progressBar.offsetHeight;
    progressBar.style.animation = '';
  }

  function stopAutoPlay() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    if (!HERO_COMPARISON_ENABLED || paused || reduce) return;
    restartProgress();
    autoTimer = setInterval(() => {
      goTo(current === 5 ? 1 : current + 1, false);
    }, HERO_AUTO_PLAY_MS);
  }

  function render(option, animate) {
    const { heroOptions, ui } = getCopy();
    const data = heroOptions[option - 1];
    if (!data) return;

    const update = () => {
      headlineEl.textContent = data.headline;
      paraEl.textContent = data.paragraph;
      ctaEl.textContent = data.cta;
      ctaEl.href = data.ctaHref;
      statusEls.forEach((el) => {
        el.textContent = ui.optionOf(option);
      });
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

  function goTo(option, userInitiated = true) {
    current = Math.max(1, Math.min(5, option));
    render(current, true);
    if (userInitiated) startAutoPlay();
    else restartProgress();
  }

  function togglePause() {
    paused = !paused;
    updatePauseButton();
    if (paused) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  }

  prevBtns.forEach((btn) => {
    btn.addEventListener('click', () => goTo(current === 1 ? 5 : current - 1));
  });
  nextBtns.forEach((btn) => {
    btn.addEventListener('click', () => goTo(current === 5 ? 1 : current + 1));
  });
  dots.forEach((dot) => {
    dot.addEventListener('click', () => goTo(parseInt(dot.dataset.heroDot, 10)));
  });
  pauseBtn?.addEventListener('click', togglePause);

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
  renderTrustSignals();

  if (!HERO_COMPARISON_ENABLED) {
    if (rail) rail.hidden = true;
    goTo(DEFAULT_HERO_OPTION, false);
  } else {
    if (rail) rail.hidden = false;
    render(current, false);
    startAutoPlay();
  }

  window.addEventListener('zuraio:locale', () => {
    applyControlLabels();
    renderTrustSignals();
    render(current, false);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAutoPlay();
    else startAutoPlay();
  });
}

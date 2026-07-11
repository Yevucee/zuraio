import {
  PROBLEM_COMPARISON_ENABLED,
  PROBLEM_AUTO_PLAY_MS,
  DEFAULT_PROBLEM_OPTION,
} from './config.js';
import { getCopy, getLocale } from './i18n.js';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function getProblemFromUrl() {
  const n = parseInt(new URLSearchParams(location.search).get('problem') || '', 10);
  return n >= 1 && n <= 5 ? n : DEFAULT_PROBLEM_OPTION;
}

export function initProblemComparison() {
  const root = document.getElementById('problem-comparison');
  if (!root) return;

  let current = getProblemFromUrl();
  let autoTimer = null;

  const copyEl = root.querySelector('[data-problem-copy]');
  const headlineEl = root.querySelector('[data-problem-headline]');

  function stopAutoPlay() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    if (!PROBLEM_COMPARISON_ENABLED || reduce) return;
    autoTimer = setInterval(() => {
      goTo(current === 5 ? 1 : current + 1);
    }, PROBLEM_AUTO_PLAY_MS);
  }

  function render(option, animate) {
    const { problemOptions } = getCopy();
    const data = problemOptions[option - 1];
    if (!data || !headlineEl) return;

    const update = () => {
      headlineEl.textContent = data.heading;
      const url = new URL(location.href);
      url.searchParams.set('problem', String(option));
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

  if (!PROBLEM_COMPARISON_ENABLED) {
    goTo(DEFAULT_PROBLEM_OPTION);
  } else {
    render(current, false);
    startAutoPlay();
  }

  window.addEventListener('zuraio:locale', () => {
    render(current, false);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAutoPlay();
    else startAutoPlay();
  });
}

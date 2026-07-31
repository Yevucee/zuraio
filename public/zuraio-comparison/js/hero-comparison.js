import {
  HERO_COMPARISON_ENABLED,
  HERO_CONTROLS_VISIBLE,
  HERO_AUTO_PLAY_MS,
  DEFAULT_HERO_OPTION,
} from './config.js';
import { getCopy } from './i18n.js';
import { getLocale } from './i18n.js';
import { isInternalReviewMode } from './internal-review.js';
import { setHeadlineHtml } from './headline-emphasis.js';
import { SITE } from './config.js';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function trustHref(path) {
  if (!path || path.startsWith('#') || path.startsWith('http') || path.startsWith('../')) return path;
  const hashIndex = path.indexOf('#');
  const file = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  const params = new URLSearchParams();
  params.set('lang', getLocale());
  return `${file}?${params.toString()}${hash}`;
}

function getHeroFromUrl() {
  if (!HERO_COMPARISON_ENABLED) return DEFAULT_HERO_OPTION;
  const n = parseInt(new URLSearchParams(location.search).get('hero') || '', 10);
  return n >= 1 && n <= 5 ? n : DEFAULT_HERO_OPTION;
}

function renderTrustSignals() {
  const bar = document.querySelector('[data-hero-trust-bar]');
  const list = document.querySelector('[data-hero-trust-bar] .hero-trust-bar__list');
  const { trustSignals, ui } = getCopy();
  if (bar && ui?.trustAria) bar.setAttribute('aria-label', ui.trustAria);
  if (!list || !trustSignals) return;
  list.innerHTML = trustSignals
    .map((item) => {
      const label = typeof item === 'string' ? item : item.label;
      const href = typeof item === 'string' ? null : item.href;
      if (!href) {
        return `<li><span class="hero-trust-bar__link hero-trust-bar__link--static"><span>${label}</span></span></li>`;
      }
      return `<li><a class="hero-trust-bar__link" href="${trustHref(href)}"><span>${label}</span><svg class="hero-trust-bar__arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M5 3.5 10.5 8 5 12.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>`;
    })
    .join('');
}

function updateHeroVisual() {
  const img = document.querySelector('.hero-popup-img');
  if (img && SITE.heroPopup) {
    img.src = `${SITE.heroPopup}?v=20260756`;
  }
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
  const statusEl = root.querySelector('[data-hero-status]');
  const controlsEl = root.querySelector('[data-hero-controls]');
  const dots = root.querySelectorAll('[data-hero-dot]');
  const prevBtn = root.querySelector('[data-hero-prev]');
  const nextBtn = root.querySelector('[data-hero-next]');

  function applyControlLabels() {
    if (!HERO_COMPARISON_ENABLED) return;
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

  function stopAutoPlay() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    if (!HERO_COMPARISON_ENABLED || reduce || HERO_CONTROLS_VISIBLE || isInternalReviewMode()) return;
    autoTimer = setInterval(() => {
      goTo(current === 5 ? 1 : current + 1);
    }, HERO_AUTO_PLAY_MS);
  }

  function render(option, animate) {
    const { heroOptions } = getCopy();
    const data = heroOptions[option - 1];
    if (!data) return;

    const update = () => {
      setHeadlineHtml(headlineEl, data.headline, data.emphasis);
      paraEl.textContent = data.paragraph;
      ctaEl.textContent = data.cta;
      ctaEl.href = trustHref(data.ctaHref);
      const heroImg = document.querySelector('.hero-popup-img');
      if (heroImg && data.imageAlt) heroImg.alt = data.imageAlt;
      if (statusEl) statusEl.textContent = getCopy().ui.optionOf(option);
      dots.forEach((dot) => {
        const n = parseInt(dot.dataset.heroDot, 10);
        dot.setAttribute('aria-pressed', n === option ? 'true' : 'false');
        dot.classList.toggle('is-active', n === option);
      });
      if (HERO_COMPARISON_ENABLED) {
        const url = new URL(location.href);
        url.searchParams.set('hero', String(option));
        url.searchParams.set('lang', getLocale());
        history.replaceState(null, '', url);
      }
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
    if (!HERO_COMPARISON_ENABLED) return;
    current = Math.max(1, Math.min(5, option));
    render(current, true);
  }

  if (HERO_COMPARISON_ENABLED) {
    prevBtn?.addEventListener('click', () => goTo(current === 1 ? 5 : current - 1));
    nextBtn?.addEventListener('click', () => goTo(current === 5 ? 1 : current + 1));
    dots.forEach((dot) => {
      dot.addEventListener('click', () => goTo(parseInt(dot.dataset.heroDot, 10)));
    });

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
  }

  applyControlLabels();
  renderTrustSignals();
  updateHeroVisual();

  if (controlsEl) {
    controlsEl.hidden = !(HERO_COMPARISON_ENABLED && (HERO_CONTROLS_VISIBLE || isInternalReviewMode()));
  }

  current = DEFAULT_HERO_OPTION;
  render(current, false);

  if (HERO_COMPARISON_ENABLED) {
    startAutoPlay();
  }

  window.addEventListener('zuraio:locale', () => {
    applyControlLabels();
    renderTrustSignals();
    updateHeroVisual();
    render(current, false);
  });

  if (HERO_COMPARISON_ENABLED) {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopAutoPlay();
      else startAutoPlay();
    });
  }
}

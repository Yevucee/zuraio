import { DEMO_AUTO_PLAY_MS, DEMO_SHOWCASE_SLIDES } from './config.js';
import { getCopy } from './i18n.js';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initDemoShowcase() {
  const root = document.getElementById('demo-showcase');
  if (!root || !DEMO_SHOWCASE_SLIDES.length) return;

  const stage = root.querySelector('[data-demo-slides]');
  const labelEl = root.querySelector('[data-demo-label]');
  const headingEl = root.querySelector('[data-demo-heading]');
  const captionEl = root.querySelector('[data-demo-caption-text]');
  const progressEl = root.querySelector('[data-demo-progress]');
  if (!stage || !labelEl || !headingEl || !captionEl) return;

  let current = 0;
  let autoTimer = null;
  let progressRaf = null;
  let cycleStart = 0;
  let slides = [];

  function getMergedSlides() {
    const { home } = getCopy();
    return DEMO_SHOWCASE_SLIDES.map((slide, index) => {
      const copy = home.demo.slides?.find((item) => item.id === slide.id) ?? home.demo.slides?.[index];
      return { ...slide, ...copy };
    });
  }

  function buildSlides() {
    slides = getMergedSlides();
    stage.innerHTML = slides
      .map(
        (slide, index) => `
      <figure class="demo-showcase__slide${index === current ? ' is-active' : ''}" data-demo-slide="${index}">
        <img
          src="${slide.image}?v=20260723"
          alt="${slide.alt || ''}"
          width="1586"
          height="992"
          decoding="async"
          ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
        />
      </figure>`
      )
      .join('');
  }

  function slideEls() {
    return stage.querySelectorAll('[data-demo-slide]');
  }

  function stopAutoPlay() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
    if (progressRaf) {
      cancelAnimationFrame(progressRaf);
      progressRaf = null;
    }
    if (progressEl) progressEl.style.width = '0%';
  }

  function animateProgress() {
    if (!progressEl || reduce) return;
    cycleStart = performance.now();
    const tick = (now) => {
      const pct = Math.min(100, ((now - cycleStart) / DEMO_AUTO_PLAY_MS) * 100);
      progressEl.style.width = `${pct}%`;
      if (pct < 100) progressRaf = requestAnimationFrame(tick);
    };
    progressRaf = requestAnimationFrame(tick);
  }

  function render(index, animate) {
    const data = slides[index];
    if (!data) return;

    slideEls().forEach((el, i) => {
      el.classList.toggle('is-active', i === index);
    });

    const updateCopy = () => {
      labelEl.textContent = data.label || '';
      headingEl.textContent = data.heading || '';
      captionEl.textContent = data.body || '';
      root.setAttribute('aria-label', data.heading || data.label || 'Platform demonstration');
    };

    if (animate && !reduce) {
      root.classList.add('is-changing');
      setTimeout(() => {
        updateCopy();
        root.classList.remove('is-changing');
      }, 220);
    } else {
      updateCopy();
    }
  }

  function goTo(index, animate = true) {
    current = (index + slides.length) % slides.length;
    render(current, animate);
    animateProgress();
  }

  function startAutoPlay() {
    stopAutoPlay();
    if (reduce || slides.length < 2) return;
    animateProgress();
    autoTimer = setInterval(() => {
      goTo(current + 1);
    }, DEMO_AUTO_PLAY_MS);
  }

  function mount() {
    buildSlides();
    render(current, false);
    startAutoPlay();
  }

  if (!root.dataset.demoReady) {
    root.dataset.demoReady = '1';

    root.addEventListener('mouseenter', stopAutoPlay);
    root.addEventListener('mouseleave', startAutoPlay);
    root.addEventListener('focusin', stopAutoPlay);
    root.addEventListener('focusout', (e) => {
      if (!root.contains(e.relatedTarget)) startAutoPlay();
    });

    root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goTo(current - 1);
        startAutoPlay();
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goTo(current + 1);
        startAutoPlay();
      }
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopAutoPlay();
      else startAutoPlay();
    });

    window.addEventListener('zuraio:locale', () => {
      buildSlides();
      render(current, false);
    });
  }

  mount();
}

import { getCopy } from './i18n.js';

const DEMO_CACHE = '20260805';

function applyDemoMedia(root, demo) {
  const videoEl = root.querySelector('[data-demo-video]');
  if (!videoEl) return;

  if (demo.video) videoEl.src = `${demo.video}?v=${DEMO_CACHE}`;
  if (demo.poster) videoEl.poster = `${demo.poster}?v=${DEMO_CACHE}`;
  if (demo.videoAlt) videoEl.setAttribute('aria-label', demo.videoAlt);

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    videoEl.removeAttribute('autoplay');
    videoEl.pause();
    return;
  }

  videoEl.play().catch(() => {});
}

export function initDemoStatic() {
  const root = document.getElementById('demo-static');
  if (!root) return;

  const stepsEl = root.querySelector('[data-demo-steps]');
  const captionEl = root.querySelector('[data-demo-caption]');
  const demo = getCopy().home?.demo;
  if (!demo) return;

  applyDemoMedia(root, demo);

  if (stepsEl && demo.steps?.length) {
    stepsEl.innerHTML = demo.steps
      .map(
        (step, index) =>
          `<li class="demo-static__step"><span class="demo-static__step-num">${index + 1}</span><span class="demo-static__step-text">${step.title}</span></li>`,
      )
      .join('');
  }

  if (captionEl && demo.caption) {
    captionEl.textContent = demo.caption;
  }
}

export function refreshDemoStatic() {
  const root = document.getElementById('demo-static');
  const demo = getCopy().home?.demo;
  if (!root || !demo) return;
  applyDemoMedia(root, demo);
}

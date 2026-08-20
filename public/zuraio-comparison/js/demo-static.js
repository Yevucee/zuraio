import { getCopy } from './i18n.js';

const DEMO_CACHE = '20260805v2';

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

function renderDemoExamples(examplesEl, examples) {
  if (!examplesEl || !examples?.length) return;
  examplesEl.innerHTML = examples
    .map(
      (example) =>
        `<li class="demo-example"><span class="demo-example__label">${example.label}</span><p class="demo-example__prompt">${example.prompt}</p></li>`,
    )
    .join('');
}

export function initDemoStatic() {
  const root = document.getElementById('demo-static');
  if (!root) return;

  const captionEl = root.querySelector('[data-demo-caption]');
  const demo = getCopy().home?.demo;
  if (!demo) return;

  renderDemoExamples(document.querySelector('[data-demo-examples]'), demo.examples);
  applyDemoMedia(root, demo);

  if (captionEl && demo.caption) {
    captionEl.textContent = demo.caption;
  }
}

export function refreshDemoStatic() {
  const root = document.getElementById('demo-static');
  const demo = getCopy().home?.demo;
  if (!root || !demo) return;
  renderDemoExamples(document.querySelector('[data-demo-examples]'), demo.examples);
  applyDemoMedia(root, demo);
}

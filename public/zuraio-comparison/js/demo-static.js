import { getCopy } from './i18n.js';

const DEMO_CACHE = '20260805v2';

function cacheBust(url) {
  if (!url) return url;
  return url.includes('?') ? url : `${url}?v=${DEMO_CACHE}`;
}

function applyDemoPoster(videoEl, demo) {
  if (demo.poster) videoEl.poster = cacheBust(demo.poster);
  if (demo.videoAlt) videoEl.setAttribute('aria-label', demo.videoAlt);
}

function loadDemoVideoSource(videoEl, demo) {
  if (videoEl.dataset.loaded === 'true') return;
  const src = videoEl.dataset.src || demo.video;
  if (!src) return;
  videoEl.src = cacheBust(src);
  videoEl.dataset.loaded = 'true';
}

function bindDeferredDemoVideo(videoEl, demo) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const tryPlay = () => {
    if (reduceMotion.matches) {
      videoEl.pause();
      return;
    }
    videoEl.play().catch(() => {});
  };

  const pause = () => {
    videoEl.pause();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadDemoVideoSource(videoEl, demo);
          tryPlay();
        } else {
          pause();
        }
      });
    },
    { rootMargin: '200px 0px', threshold: 0.15 },
  );

  observer.observe(videoEl);

  reduceMotion.addEventListener?.('change', () => {
    if (reduceMotion.matches) pause();
    else if (videoEl.dataset.loaded === 'true') tryPlay();
  });
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

  renderDemoExamples(document.querySelector('[data-demo-examples]'), demo);

  const videoEl = root.querySelector('[data-demo-video]');
  if (videoEl) {
    applyDemoPoster(videoEl, demo);
    bindDeferredDemoVideo(videoEl, demo);
  }

  if (captionEl && demo.caption) {
    captionEl.textContent = demo.caption;
  }
}

export function refreshDemoStatic() {
  const root = document.getElementById('demo-static');
  const demo = getCopy().home?.demo;
  if (!root || !demo) return;
  renderDemoExamples(document.querySelector('[data-demo-examples]'), demo);

  const videoEl = root.querySelector('[data-demo-video]');
  if (videoEl) {
    applyDemoPoster(videoEl, demo);
  }
}

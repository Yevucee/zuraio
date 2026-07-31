import { getCopy } from './i18n.js';

export function initDemoStatic() {
  const root = document.getElementById('demo-static');
  if (!root) return;

  const imageEl = root.querySelector('[data-demo-image]');
  const stepsEl = root.querySelector('[data-demo-steps]');
  const captionEl = root.querySelector('[data-demo-caption]');
  const demo = getCopy().home?.demo;
  if (!demo) return;

  if (imageEl) {
    if (demo.image) imageEl.src = `${demo.image}?v=20260723c`;
    if (demo.imageAlt) imageEl.alt = demo.imageAlt;
  }

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

import { LOGO_WATERMARKS_ENABLED } from './config.js';
import { renderMarkSvg } from './logo-svg.js';

/**
 * Decorative logo watermarks — adapted from Roland reference
 * (cherrypicker77/zuraio-webseite intro-band-mark, integrations-tool-watermark).
 */
export function initLogoWatermarks() {
  if (!LOGO_WATERMARKS_ENABLED) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-logo-watermark]').forEach((section) => {
    if (section.querySelector('.logo-watermark')) return;

    const variants = section.dataset.logoWatermark.split(/\s+/).filter(Boolean);
    const wm = document.createElement('div');
    wm.className = ['logo-watermark', ...variants.map((v) => `logo-watermark--${v}`)].join(' ');
    wm.setAttribute('aria-hidden', 'true');
    wm.innerHTML = renderMarkSvg();
    section.prepend(wm);

    if (reduce) wm.classList.add('logo-watermark--static');
  });
}

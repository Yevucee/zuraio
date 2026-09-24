import { LOGO_WATERMARKS_ENABLED } from './config.js';
import { renderMarkSvg } from './logo-svg.js';

/** Roland reference outer wrappers per section placement. */
const WATERMARK_LAYOUTS = {
  'left soft': { outerClass: 'intro-band-mark', tone: 'soft' },
  'right soft': { outerClass: 'intro-band-mark integrations-tool-watermark', tone: 'soft' },
  'left dark': { outerClass: 'team-section-mark', tone: 'dark' },
};

/**
 * Decorative logo watermarks — Roland reference structure
 * (cherrypicker77/zuraio-webseite intro-band-mark, integrations-tool-watermark, team-section-mark).
 */
export function initLogoWatermarks() {
  if (!LOGO_WATERMARKS_ENABLED) return;

  document.querySelectorAll('[data-logo-watermark]').forEach((section) => {
    if (section.querySelector('.intro-band-mark, .team-section-mark')) return;

    const layout = WATERMARK_LAYOUTS[section.dataset.logoWatermark.trim()] ?? WATERMARK_LAYOUTS['left soft'];

    const wm = document.createElement('div');
    wm.className = layout.outerClass;
    wm.setAttribute('aria-hidden', 'true');
    wm.innerHTML = renderMarkSvg(layout.tone);
    section.prepend(wm);
  });
}

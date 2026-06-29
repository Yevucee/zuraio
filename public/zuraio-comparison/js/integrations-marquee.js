import { getCopy } from './i18n.js';

export function initMarquee() {
  document.querySelectorAll('[data-marquee]').forEach((track) => {
    const inner = track.querySelector('.marquee-inner');
    if (!inner) return;

    const { integrations } = getCopy();
    const html = integrations.map((t) => `<span class="tool">${t}</span>`).join('');

    if (!track.dataset.marqueeReady) {
      track.dataset.marqueeReady = 'true';
      inner.innerHTML = html + html;
      track.addEventListener('mouseenter', () => track.classList.add('is-paused'));
      track.addEventListener('mouseleave', () => track.classList.remove('is-paused'));
      track.addEventListener('focusin', () => track.classList.add('is-paused'));
      track.addEventListener('focusout', () => track.classList.remove('is-paused'));
      return;
    }

    const tools = [...inner.querySelectorAll('.tool')];
    const half = tools.length / 2;
    integrations.forEach((label, i) => {
      if (tools[i]) tools[i].textContent = label;
      if (tools[i + half]) tools[i + half].textContent = label;
    });
  });
}

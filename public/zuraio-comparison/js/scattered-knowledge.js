import {
  SCATTERED_FRAGMENTS,
  SCATTERED_LABELS,
  SCATTERED_PATHS,
  FRAGMENT_SVGS,
} from './scattered-knowledge-data.js';
import { getCopy } from './i18n.js';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let observer = null;

function renderFragment(fragment) {
  const svg = FRAGMENT_SVGS[fragment.type] ?? '';
  const classes = [
    'sk-fragment',
    `sk-fragment--${fragment.type}`,
    fragment.secondary ? 'sk-fragment--secondary' : '',
    fragment.hub ? 'sk-fragment--hub' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const flash = fragment.flash
    ? `<span class="sk-flash" style="--flash-delay:${(fragment.delay + 1.5).toFixed(1)}s"></span>`
    : '';

  return `<div class="${classes}" data-sk-fragment="${fragment.id}" style="--x:${fragment.x}%;--y:${fragment.y}%;--drift:${fragment.drift}s;--delay:${fragment.delay}s;--pulse:${fragment.pulse}s">${flash}<span class="sk-fragment__icon">${svg}</span></div>`;
}

function renderLabel(label, text) {
  if (!text) return '';
  return `<span class="sk-label sk-label--${label.tier}" data-sk-label="${label.id}" style="--x:${label.x}%;--y:${label.y}%;--fade:${label.fade}s;--delay:${label.delay}s">${text}</span>`;
}

function renderPath(path, index) {
  const classes = [
    'sk-path',
    path.animate === 'draw' ? 'sk-path--draw' : 'sk-path--fade',
    path.central ? 'sk-path--central' : '',
    path.partial ? 'sk-path--partial' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const dash = path.partial ? ` stroke-dasharray="${(path.partial * 100).toFixed(0)} 100"` : '';

  return `<path class="${classes}" data-sk-path="${index}" d="${path.d}" pathLength="1" vector-effect="non-scaling-stroke" fill="none" stroke="${path.stroke}" stroke-width="${path.width}" stroke-linecap="round" opacity="${path.opacity}" style="--path-delay:${path.delay}s;--path-duration:${path.duration}s"${dash}/>`;
}

function buildStage(labelsCopy) {
  const fragments = SCATTERED_FRAGMENTS.map(renderFragment).join('');
  const labels = SCATTERED_LABELS.map((label) => renderLabel(label, labelsCopy[label.id])).join('');
  const paths = SCATTERED_PATHS.map(renderPath).join('');

  return `<div class="scattered-knowledge__stage">
    <svg class="scattered-knowledge__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${paths}</svg>
    <div class="scattered-knowledge__fragments">${fragments}</div>
    <div class="scattered-knowledge__labels">${labels}</div>
  </div>`;
}

function observeStage(root) {
  if (observer) observer.disconnect();

  if (reduceMotion) {
    root.classList.add('is-active', 'is-static');
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          root.classList.add('is-active');
          observer?.unobserve(root);
        }
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
  );

  observer.observe(root);
}

export function renderScatteredKnowledge(root) {
  if (!root) return;

  const { home } = getCopy();
  const labelsCopy = home?.problem?.illustration?.labels ?? {};

  root.innerHTML = buildStage(labelsCopy);
  root.classList.remove('is-active', 'is-static');
  observeStage(root);
}

export function initScatteredKnowledge() {
  const root = document.querySelector('[data-scattered-knowledge]');
  if (!root) return;
  renderScatteredKnowledge(root);
}

export function destroyScatteredKnowledge() {
  observer?.disconnect();
  observer = null;
}

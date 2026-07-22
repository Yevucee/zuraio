import {
  SCATTERED_FRAGMENTS,
  SCATTERED_LABELS,
  SCATTERED_PATHS,
  FRAGMENT_SVGS,
  SVG_DEFS,
} from './scattered-knowledge-data.js';
import { getCopy } from './i18n.js';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let observer = null;

function renderFragment(fragment) {
  const isClock = fragment.type === 'clock';
  const isBrain = fragment.type === 'brain';
  const svg = FRAGMENT_SVGS[fragment.type] ?? '';

  const classes = [
    'sk-fragment',
    `sk-fragment--${fragment.type}`,
    fragment.secondary ? 'sk-fragment--secondary' : '',
    fragment.hub ? 'sk-fragment--hub' : '',
    isBrain ? 'sk-fragment--brain' : '',
    isClock ? 'sk-fragment--clock' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const flash = fragment.flash
    ? `<span class="sk-flash" style="--flash-delay:${(fragment.delay + 2.1).toFixed(1)}s;--flash-duration:${(4.5 + fragment.delay).toFixed(1)}s"></span>`
    : '';

  const style = [
    `--x:${fragment.x}%`,
    `--y:${fragment.y}%`,
    `--drift:${fragment.drift}s`,
    `--delay:${fragment.delay}s`,
    `--pulse:${fragment.pulse ?? 6.5}s`,
    isBrain ? `--brain-pulse:${fragment.brainPulse}s` : '',
    isClock ? `--clock-anim:${fragment.clockAnim}s` : '',
  ]
    .filter(Boolean)
    .join(';');

  return `<div class="${classes}" data-sk-fragment="${fragment.id}" style="${style}">${flash}<span class="sk-fragment__icon">${svg}</span></div>`;
}

function renderLabel(label, text) {
  if (!text) return '';
  return `<span class="sk-label sk-label--${label.tier}" data-sk-label="${label.id}" style="--x:${label.x}%;--y:${label.y}%;--fade:${label.fade}s;--delay:${label.delay}s">${text}</span>`;
}

function renderPath(path, index) {
  const animate = path.animate || 'static';
  const classes = [
    'sk-path',
    `sk-path--${animate}`,
    path.dashed ? 'sk-path--dashed' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const marker = path.arrow ? ' marker-end="url(#sk-arrow)"' : '';

  return `<path class="${classes}" data-sk-path="${index}" d="${path.d}" pathLength="1" vector-effect="non-scaling-stroke" fill="none" stroke="${path.stroke}" stroke-width="${path.width}" stroke-linecap="round" opacity="${path.opacity}" style="--path-delay:${path.delay}s;--path-duration:${path.duration}s"${marker}/>`;
}

function renderTravelDots() {
  if (reduceMotion) return '';

  const dotPaths = SCATTERED_PATHS.filter((p) => p.dot).slice(0, 4);
  return dotPaths
    .map(
      (path, i) =>
        `<circle class="sk-travel-dot" r="0.9" fill="#8ca33f" opacity="0.55" style="--dot-delay:${path.delay + i * 0.5}s;--dot-duration:${path.duration}s">
          <animateMotion dur="${path.duration}s" begin="${path.delay}s" repeatCount="indefinite" path="${path.d}"/>
        </circle>`,
    )
    .join('');
}

function buildStage(labelsCopy) {
  const fragments = SCATTERED_FRAGMENTS.map(renderFragment).join('');
  const labels = SCATTERED_LABELS.map((label) => renderLabel(label, labelsCopy[label.id])).join('');
  const paths = SCATTERED_PATHS.map(renderPath).join('');
  const dots = renderTravelDots();

  return `<div class="scattered-knowledge__stage">
    <svg class="scattered-knowledge__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      ${SVG_DEFS}
      ${paths}
      ${dots}
    </svg>
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
    { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
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

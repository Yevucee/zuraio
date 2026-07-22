import {
  SCATTERED_ICONS,
  SCATTERED_QUESTIONS,
  ICON_RENDERERS,
  generateTanglePaths,
} from './scattered-knowledge-data.js';
import { getCopy } from './i18n.js';

const VIEWBOX = { w: 480, h: 420 };

const QUESTION_SIZES = {
  sm: { font: 11, weight: 500 },
  md: { font: 13, weight: 500 },
  lg: { font: 22, weight: 600 },
  xl: { font: 34, weight: 600 },
};

function renderTangle() {
  const paths = generateTanglePaths(VIEWBOX.w, VIEWBOX.h);
  return paths
    .map(
      (path, index) =>
        `<path class="scattered-knowledge__line" data-sk-line="${index}" d="${path.d}" fill="none" stroke="${path.stroke}" stroke-width="${path.width.toFixed(2)}" stroke-linecap="round" opacity="${path.opacity.toFixed(2)}"/>`,
    )
    .join('');
}

function renderIcons() {
  return SCATTERED_ICONS.map((icon, index) => {
    const render = ICON_RENDERERS[icon.type];
    if (!render) return '';
    const x = icon.x * VIEWBOX.w;
    const y = icon.y * VIEWBOX.h;
    return `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${icon.scale})" opacity="${icon.opacity}"><g class="scattered-knowledge__icon" data-sk-icon="${icon.id}" style="--sk-delay:${(index * 0.7).toFixed(1)}s">${render(1)}</g></g>`;
  }).join('');
}

function renderQuestions(questionsCopy = {}) {
  return SCATTERED_QUESTIONS.map((item, index) => {
    const text = questionsCopy[item.id] ?? '';
    if (!text) return '';
    const size = QUESTION_SIZES[item.size] ?? QUESTION_SIZES.md;
    const x = item.x * VIEWBOX.w;
    const y = item.y * VIEWBOX.h;
    const rotate = item.rotate ?? 0;
    const tone = item.size === 'xl' || item.size === 'lg' ? 'rgba(70, 70, 70, 0.55)' : 'rgba(108, 111, 102, 0.42)';
    return `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rotate})"><g class="scattered-knowledge__question-wrap" data-sk-question="${item.id}" style="--sk-delay:${(index * 0.9 + 0.4).toFixed(1)}s"><text class="scattered-knowledge__question" x="0" y="0" text-anchor="middle" dominant-baseline="central" font-size="${size.font}" font-weight="${size.weight}" fill="${tone}" font-family="'IBM Plex Sans', sans-serif">${text}</text></g></g>`;
  }).join('');
}

function buildSvg(questionsCopy) {
  return `<svg class="scattered-knowledge__svg" viewBox="0 0 ${VIEWBOX.w} ${VIEWBOX.h}" role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="sk-vignette" cx="52%" cy="46%" r="58%">
        <stop offset="0%" stop-color="#fbfbf8" stop-opacity="0"/>
        <stop offset="68%" stop-color="#fbfbf8" stop-opacity="0"/>
        <stop offset="100%" stop-color="#fbfbf8" stop-opacity="1"/>
      </radialGradient>
    </defs>
    <g class="scattered-knowledge__tangle" data-sk-tangle>${renderTangle()}</g>
    <g class="scattered-knowledge__icons" data-sk-icons>${renderIcons()}</g>
    <g class="scattered-knowledge__questions" data-sk-questions>${renderQuestions(questionsCopy)}</g>
    <rect width="100%" height="100%" fill="url(#sk-vignette)" pointer-events="none"/>
  </svg>`;
}

export function renderScatteredKnowledge(root) {
  if (!root) return;
  const { home } = getCopy();
  const questionsCopy = home?.problem?.illustration?.questions ?? {};
  root.innerHTML = buildSvg(questionsCopy);
}

export function initScatteredKnowledge() {
  const root = document.querySelector('[data-scattered-knowledge]');
  if (!root) return;
  renderScatteredKnowledge(root);
}

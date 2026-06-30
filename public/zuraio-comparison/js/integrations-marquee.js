import { INTEGRATIONS, getIntegrationLabel, getIntegrationAlt } from './integrations-data.js';
import { getLocale } from './i18n.js';
import { isInternalReviewMode, renderStatusBadge } from './internal-review.js';

const PLACEHOLDER_ICON = `<svg class="integration-icon-placeholder" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="2" y="2" width="16" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 10h8M10 6v8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;

function renderIntegrationItem(integration, locale) {
  const name = getIntegrationLabel(integration, locale);
  const alt = getIntegrationAlt(integration, locale);
  const showAssetStatus = isInternalReviewMode() && integration.assetStatus === 'missing';

  return `<span class="tool integration-item" data-integration="${integration.id}">
    <span class="integration-logo-wrap" aria-hidden="true">${PLACEHOLDER_ICON}</span>
    <span class="integration-name">${name}</span>
    ${showAssetStatus ? renderStatusBadge('missing-asset', 'ASSET NEEDED') : ''}
    <span class="visually-hidden">${alt}${showAssetStatus ? ' — logo asset needed' : ''}</span>
  </span>`;
}

export function initMarquee() {
  const locale = getLocale();

  document.querySelectorAll('[data-marquee]').forEach((track) => {
    const inner = track.querySelector('.marquee-inner');
    if (!inner) return;

    const html = INTEGRATIONS.map((item) => renderIntegrationItem(item, locale)).join('');

    if (!track.dataset.marqueeReady) {
      track.dataset.marqueeReady = 'true';
      inner.innerHTML = html + html;
      track.addEventListener('mouseenter', () => track.classList.add('is-paused'));
      track.addEventListener('mouseleave', () => track.classList.remove('is-paused'));
      track.addEventListener('focusin', () => track.classList.add('is-paused'));
      track.addEventListener('focusout', () => track.classList.remove('is-paused'));
      return;
    }

    const items = [...inner.querySelectorAll('.integration-item')];
    const half = items.length / 2;
    INTEGRATIONS.forEach((integration, i) => {
      [items[i], items[i + half]].forEach((el) => {
        if (!el) return;
        el.querySelector('.integration-name').textContent = getIntegrationLabel(integration, locale);
      });
    });
  });
}

export { INTEGRATIONS };

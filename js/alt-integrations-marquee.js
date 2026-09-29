import { assetHref } from './path-locale.js';

/** Preview homepage marquee — Swiss logos first; Microsoft names are text-only per trademark rules. */
export const ALT_PREVIEW_MARQUEE_ITEMS = [
  {
    id: 'bexio',
    label: 'bexio',
    logo: 'assets/integrations/official/zuraio-logo-bexio.svg',
    alt: 'bexio',
  },
  {
    id: 'abacus',
    label: 'Abacus',
    logo: 'assets/integrations/official/zuraio-logo-abacus.svg',
    alt: 'Abacus',
  },
  {
    id: 'klara',
    label: 'Klara',
    logo: 'assets/integrations/official/zuraio-logo-klara.svg',
    alt: 'Klara',
  },
  {
    id: 'proffix',
    label: 'Proffix',
    logo: 'assets/integrations/official/zuraio-logo-proffix.png',
    alt: 'Proffix',
  },
  { id: 'sap', label: 'SAP', logo: 'assets/integrations/sap.svg', alt: 'SAP' },
  {
    id: 'salesforce',
    label: 'Salesforce',
    logo: 'assets/integrations/salesforce.svg',
    alt: 'Salesforce',
  },
  { id: 'hubspot', label: 'HubSpot', logo: 'assets/integrations/hubspot.svg', alt: 'HubSpot' },
  { id: 'odoo', label: 'Odoo', logo: 'assets/integrations/odoo.svg', alt: 'Odoo' },
  { id: 'sage', label: 'Sage', logo: 'assets/integrations/sage.svg', alt: 'Sage' },
  { id: 'microsoft-365', label: 'Microsoft 365', textOnly: true },
  { id: 'microsoft-outlook', label: 'Microsoft Outlook', textOnly: true },
  { id: 'microsoft-sharepoint', label: 'Microsoft SharePoint', textOnly: true },
  { id: 'microsoft-teams', label: 'Microsoft Teams', textOnly: true },
  { id: 'microsoft-exchange', label: 'Microsoft Exchange', textOnly: true },
  { id: 'microsoft-dynamics', label: 'Microsoft Dynamics 365', textOnly: true },
];

function renderLogo(item) {
  if (!item.logo) return '';
  const wide = item.logo.includes('/official/');
  const w = wide ? 88 : 20;
  const h = 20;
  return `<img class="integration-logo-img" src="${assetHref(item.logo)}" alt="${item.alt ?? item.label}" width="${w}" height="${h}" loading="lazy" decoding="async" />`;
}

function renderItem(item) {
  if (item.textOnly) {
    return `<span class="tool integration-item" data-integration="${item.id}">
      <span class="integration-name">${item.label}</span>
    </span>`;
  }
  const wordmark = item.logo.includes('/official/');
  const visibleName = wordmark
    ? `<span class="visually-hidden">${item.label}</span>`
    : `<span class="integration-name">${item.label}</span><span class="visually-hidden">${item.alt ?? item.label}</span>`;
  return `<span class="tool integration-item has-logo" data-integration="${item.id}">
    <span class="integration-logo-wrap" aria-hidden="true">${renderLogo(item)}</span>
    ${visibleName}
  </span>`;
}

/** Same behaviour as integrations-marquee.js initMarquee, scoped to preview tracks. */
export function initAltPreviewMarquee() {
  document.querySelectorAll('[data-alt-marquee]').forEach((track) => {
    const inner = track.querySelector('.marquee-inner');
    if (!inner) return;

    const html = ALT_PREVIEW_MARQUEE_ITEMS.map((item) => renderItem(item)).join('');

    if (!track.dataset.marqueeReady) {
      track.dataset.marqueeReady = 'true';
      inner.innerHTML = html + html;
      track.addEventListener('mouseenter', () => track.classList.add('is-paused'));
      track.addEventListener('mouseleave', () => track.classList.remove('is-paused'));
      track.addEventListener('focusin', () => track.classList.add('is-paused'));
      track.addEventListener('focusout', () => track.classList.remove('is-paused'));
      return;
    }

    inner.innerHTML = html + html;
  });
}

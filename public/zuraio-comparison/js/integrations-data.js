/**
 * Homepage integration marquee — named categories shown on the homepage.
 */
export const INTEGRATIONS = [
  {
    id: 'microsoft-365',
    name: { en: 'Microsoft 365', de: 'Microsoft 365', fr: 'Microsoft 365', it: 'Microsoft 365' },
    logo: 'assets/integrations/microsoft-365.svg',
    alt: { en: 'Microsoft 365', de: 'Microsoft 365', fr: 'Microsoft 365', it: 'Microsoft 365' },
    assetStatus: 'available',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'sharepoint',
    name: { en: 'SharePoint', de: 'SharePoint', fr: 'SharePoint', it: 'SharePoint' },
    logo: 'assets/integrations/sharepoint.svg',
    alt: { en: 'SharePoint', de: 'SharePoint', fr: 'SharePoint', it: 'SharePoint' },
    assetStatus: 'available',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'exchange',
    name: { en: 'Exchange', de: 'Exchange', fr: 'Exchange', it: 'Exchange' },
    logo: 'assets/integrations/outlook.svg',
    alt: { en: 'Microsoft Exchange', de: 'Microsoft Exchange', fr: 'Microsoft Exchange', it: 'Microsoft Exchange' },
    assetStatus: 'available',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'teams',
    name: { en: 'Teams', de: 'Teams', fr: 'Teams', it: 'Teams' },
    logo: 'assets/integrations/teams.svg',
    alt: { en: 'Microsoft Teams', de: 'Microsoft Teams', fr: 'Microsoft Teams', it: 'Microsoft Teams' },
    assetStatus: 'available',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'crm',
    name: { en: 'CRM', de: 'CRM', fr: 'CRM', it: 'CRM' },
    logo: null,
    alt: { en: 'CRM systems', de: 'CRM-Systeme', fr: 'Systèmes CRM', it: 'Sistemi CRM' },
    assetStatus: 'placeholder',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'erp',
    name: { en: 'ERP', de: 'ERP', fr: 'ERP', it: 'ERP' },
    logo: null,
    alt: { en: 'ERP systems', de: 'ERP-Systeme', fr: 'Systèmes ERP', it: 'Sistemi ERP' },
    assetStatus: 'placeholder',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'mcp',
    name: { en: 'MCP', de: 'MCP', fr: 'MCP', it: 'MCP' },
    logo: null,
    alt: { en: 'Model Context Protocol', de: 'Model Context Protocol', fr: 'Model Context Protocol', it: 'Model Context Protocol' },
    assetStatus: 'placeholder',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'rest-api',
    name: { en: 'REST API', de: 'REST-API', fr: 'API REST', it: 'API REST' },
    logo: null,
    alt: { en: 'REST API', de: 'REST-API', fr: 'API REST', it: 'API REST' },
    assetStatus: 'placeholder',
    productStatus: 'unverified',
    link: null,
  },
];

export function getIntegrationLabel(integration, locale) {
  return integration.name[locale] ?? integration.name.en;
}

export function getIntegrationAlt(integration, locale) {
  return integration.alt[locale] ?? integration.alt.en;
}

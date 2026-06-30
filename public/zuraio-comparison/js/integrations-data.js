/**
 * Central integration registry.
 * TODO — INTEGRATION LOGOS — Owner: Mickey / Roland — Supply approved official logo assets.
 * TODO — INTEGRATION AVAILABILITY — Owner: Mickey — Confirm available / pilot / planned status.
 */
export const INTEGRATIONS = [
  {
    id: 'outlook',
    name: { en: 'Outlook', de: 'Outlook' },
    logo: 'assets/integrations/outlook.svg',
    alt: { en: 'Outlook', de: 'Outlook' },
    assetStatus: 'missing',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'gmail',
    name: { en: 'Gmail', de: 'Gmail' },
    logo: 'assets/integrations/gmail.svg',
    alt: { en: 'Gmail', de: 'Gmail' },
    assetStatus: 'missing',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'microsoft-365',
    name: { en: 'Microsoft 365', de: 'Microsoft 365' },
    logo: 'assets/integrations/microsoft-365.svg',
    alt: { en: 'Microsoft 365', de: 'Microsoft 365' },
    assetStatus: 'missing',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'google-workspace',
    name: { en: 'Google Workspace', de: 'Google Workspace' },
    logo: 'assets/integrations/google-workspace.svg',
    alt: { en: 'Google Workspace', de: 'Google Workspace' },
    assetStatus: 'missing',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'teams',
    name: { en: 'Teams', de: 'Teams' },
    logo: 'assets/integrations/teams.svg',
    alt: { en: 'Microsoft Teams', de: 'Microsoft Teams' },
    assetStatus: 'missing',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'slack',
    name: { en: 'Slack', de: 'Slack' },
    logo: 'assets/integrations/slack.svg',
    alt: { en: 'Slack', de: 'Slack' },
    assetStatus: 'missing',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'notion',
    name: { en: 'Notion', de: 'Notion' },
    logo: 'assets/integrations/notion.svg',
    alt: { en: 'Notion', de: 'Notion' },
    assetStatus: 'missing',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'sharepoint',
    name: { en: 'SharePoint', de: 'SharePoint' },
    logo: 'assets/integrations/sharepoint.svg',
    alt: { en: 'SharePoint', de: 'SharePoint' },
    assetStatus: 'missing',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'onedrive',
    name: { en: 'OneDrive', de: 'OneDrive' },
    logo: 'assets/integrations/onedrive.svg',
    alt: { en: 'OneDrive', de: 'OneDrive' },
    assetStatus: 'missing',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'hubspot',
    name: { en: 'HubSpot', de: 'HubSpot' },
    logo: 'assets/integrations/hubspot.svg',
    alt: { en: 'HubSpot', de: 'HubSpot' },
    assetStatus: 'missing',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'salesforce',
    name: { en: 'Salesforce', de: 'Salesforce' },
    logo: 'assets/integrations/salesforce.svg',
    alt: { en: 'Salesforce', de: 'Salesforce' },
    assetStatus: 'missing',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'whatsapp',
    name: { en: 'WhatsApp', de: 'WhatsApp' },
    logo: 'assets/integrations/whatsapp.svg',
    alt: { en: 'WhatsApp', de: 'WhatsApp' },
    assetStatus: 'missing',
    productStatus: 'unverified',
    link: null,
  },
  {
    id: 'voice-notes',
    name: { en: 'Voice notes', de: 'Sprachnotizen' },
    logo: 'assets/integrations/voice-notes.svg',
    alt: { en: 'Voice notes', de: 'Sprachnotizen' },
    assetStatus: 'missing',
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

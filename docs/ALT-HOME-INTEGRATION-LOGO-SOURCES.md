# Alt homepage preview — integrations & trademarks

## Microsoft trademark rules (preview + pricing pages)

Source: [Microsoft trademark & brand guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks)

- **No Microsoft logos or product icons** on preview homepage or pricing pages (including Commons mirrors). Microsoft products appear as **plain-text marquee chips** only, with full names: Microsoft 365, Microsoft Outlook, Microsoft SharePoint, Microsoft Teams, Microsoft Exchange, Microsoft Dynamics 365.
- **Compatibility wording** must not imply partnership or endorsement. Integrations subline and hero trust line use factual compatibility language only.
- **Footer attribution** (DE/EN) lists Microsoft and third-party trademarks on preview homepage and pricing pages.

## Marquee implementation

Same markup and classes as live `index.html`: `marquee-track`, `[data-marquee]` behaviour via `data-alt-marquee`, `marquee-inner`, `tool integration-item`, live `site.css` animation and `prefers-reduced-motion` static row.

Preview-only script: `public/zuraio-comparison/js/alt-integrations-marquee.js`.

## Logo order and files

| # | Product | Asset | Source |
|---|---------|-------|--------|
| 1 | bexio | `assets/integrations/official/zuraio-logo-bexio.svg` | [bexio Treuhand downloads](https://www.bexio.com/de-CH/treuhand/downloads) |
| 2 | Abacus | `assets/integrations/official/zuraio-logo-abacus.svg` | [abacus.ch](https://www.abacus.ch/) |
| 3 | Klara | `assets/integrations/official/zuraio-logo-klara.svg` | [klara.ch](https://www.klara.ch/) |
| 4 | Proffix | `assets/integrations/official/zuraio-logo-proffix.png` | [portal.proffix.net](https://portal.proffix.net/) (976×275 standard logo) |
| 5 | SAP | `assets/integrations/sap.svg` | Same file as live homepage marquee |
| 6 | Salesforce | `assets/integrations/salesforce.svg` | Same as live marquee — **flag:** may match Wikimedia/Commons mirror; confirm against [Salesforce media kit](https://www.salesforce.com/news/media-kit/) |
| 7 | HubSpot | `assets/integrations/hubspot.svg` | Same as live marquee — **flag:** confirm against [HubSpot brand kit](https://www.hubspot.com/brand-kit) |
| 8 | Odoo | `assets/integrations/odoo.svg` | Same as live marquee |
| 9 | Sage | `assets/integrations/sage.svg` | Same as live marquee — **flag:** confirm against Sage press/brand materials |
| 10–15 | Microsoft products | *(text chips, no image files)* | Names only per Microsoft guidelines |

Official Swiss logos: use as supplied — no recolouring, stretching, cropping or redrawing.

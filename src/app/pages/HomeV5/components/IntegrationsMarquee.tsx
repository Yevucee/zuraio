import { V5 } from '../tokens';
import { IntegrationGlyph } from './IntegrationGlyph';

const integrations = [
  'Outlook',
  'Gmail',
  'Microsoft 365',
  'Google Workspace',
  'Slack',
  'Teams',
  'Notion',
  'Confluence',
  'OneDrive',
  'SharePoint',
  'Drive',
  'Dropbox',
  'Salesforce',
  'HubSpot',
  'WhatsApp',
  'Voice',
];

export function IntegrationsMarquee() {
  const items = [...integrations, ...integrations];

  return (
    <section className="border-y py-10 md:py-12" style={{ borderColor: V5.hairline, backgroundColor: '#FFFFFF' }}>
      <div className="mx-auto max-w-[1320px] px-6">
        <p
          className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.08em]"
          style={{ color: V5.inkMuted }}
        >
          It connects with the tools your team already uses
        </p>
        {/* TODO: replace generic glyph placeholders with official brand assets only when usage is approved. */}
        <div className="v5-marquee overflow-hidden">
          <div className="v5-marquee-track gap-4 pr-4">
            {items.map((label, index) => (
              <IntegrationGlyph key={`${label}-${index}`} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

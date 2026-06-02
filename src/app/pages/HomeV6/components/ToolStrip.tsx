import { V6Section } from './V6Section';
import { ToolGlyph } from './ToolGlyph';

const tools = [
  'Outlook',
  'Gmail',
  'Microsoft 365',
  'Google Workspace',
  'Teams',
  'Slack',
  'Notion',
  'SharePoint',
  'OneDrive',
  'HubSpot',
  'Salesforce',
  'WhatsApp',
  'Voice notes',
] as const;

export function ToolStrip() {
  return (
    <V6Section background="grey">
      <h2 className="mb-4 text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
        Fits into the tools you already use.
      </h2>
      <p className="mb-4 max-w-[720px] text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
        Zuraio is designed to connect with the tools your team already uses, from email and documents to meetings,
        messages, notes and company systems.
      </p>
      <p className="mb-8 text-base" style={{ color: 'var(--charcoal)' }}>
        Start with the work that matters most: email, meetings, documents, reports, internal search and follow-ups.
      </p>

      {/* TODO: replace generic tool glyphs with official assets only after logo usage is approved. */}
      <div className="flex flex-wrap gap-2">
        {tools.map((label) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm"
            style={{
              borderColor: 'rgba(70, 70, 70, 0.12)',
              backgroundColor: 'var(--paper-white)',
              color: 'var(--deep-charcoal)',
            }}
          >
            <ToolGlyph />
            {label}
          </span>
        ))}
      </div>

      <p className="mt-6 text-sm" style={{ color: 'var(--charcoal)' }}>
        Specific connections depend on your company setup, approved tools and pilot scope.
      </p>
    </V6Section>
  );
}

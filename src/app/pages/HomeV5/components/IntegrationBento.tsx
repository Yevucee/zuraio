import { V5 } from '../tokens';
import { V5Section } from './V5Section';

function BentoGlyph() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke={V5.inkMuted} strokeWidth="1.5" />
      <path d="M8 12h8M12 8v8" stroke={V5.olive} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const cards = [
  { title: 'Outlook', description: 'Draft replies and summarise long threads.' },
  { title: 'Gmail', description: 'Prepare replies and identify follow-ups.' },
  { title: 'Teams', description: 'Prepare meeting notes and actions.' },
  { title: 'Slack', description: 'Catch up on channels and open actions.' },
  { title: 'Notion', description: 'Use workspace notes as company memory.' },
  { title: 'WhatsApp', description: 'Capture important messages and turn them into actions.' },
  { title: 'Voice', description: 'Turn spoken notes into structured follow-ups.' },
  { title: 'SharePoint / OneDrive', description: 'Find documents and policies with sources.' },
] as const;

export function IntegrationBento() {
  return (
    <V5Section background="cream">
      {/* TODO: replace generic glyph placeholders with official brand assets only when usage is approved. */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ title, description }) => (
          <div
            key={title}
            className="v5-card rounded-2xl border bg-white p-5"
            style={{ borderColor: V5.hairline }}
          >
            <div className="mb-3 flex items-center gap-3">
              <BentoGlyph />
              <h3 className="text-base font-semibold" style={{ color: V5.ink }}>
                {title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: V5.inkMuted }}>
              {description}
            </p>
          </div>
        ))}
      </div>
    </V5Section>
  );
}

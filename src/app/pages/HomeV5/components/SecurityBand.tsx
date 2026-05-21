import { V5 } from '../tokens';
import { V5Section } from './V5Section';

const cards = [
  {
    title: 'Swiss, local-country and on-premise hosting',
    description: 'Deployment designed around your data-control needs. Configurable data residency for Swiss and international organisations.',
  },
  {
    title: 'Access permissions',
    description: 'Control who can use which sources, models and workflows. Built with Swiss and European data-control expectations in mind.',
  },
  {
    title: 'AI audit readiness',
    description: 'Designed for upcoming AI audits. Built so prompts, sources and outputs can be reviewed according to your governance model.',
  },
] as const;

export function SecurityBand() {
  return (
    <V5Section background="soft" reveal>
      <div className="mb-12 text-center">
        <p
          className="mb-4 text-xs font-semibold tracking-[0.12em]"
          style={{ fontFamily: 'var(--font-mono)', color: V5.olive }}
        >
          SECURITY & CONTROL
        </p>
        <h2 className="mb-5 text-3xl font-semibold md:text-4xl" style={{ color: V5.ink }}>
          Ready for the next phase of AI governance.
        </h2>
        <p className="mx-auto max-w-[720px] text-lg leading-relaxed" style={{ color: V5.inkMuted }}>
          Zuraio is designed around configurable hosting, model choice, access permissions and reviewable outputs,
          helping companies use AI while preparing for future audit, governance and data-control expectations.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map(({ title, description }) => (
          <div
            key={title}
            className="v5-card rounded-2xl border bg-white p-6"
            style={{ borderColor: V5.hairline }}
          >
            <h3 className="mb-3 text-lg font-semibold" style={{ color: V5.ink }}>
              {title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: V5.inkMuted }}>
              {description}
            </p>
          </div>
        ))}
      </div>
    </V5Section>
  );
}

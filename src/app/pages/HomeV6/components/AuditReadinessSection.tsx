import { V6Section } from './V6Section';

const proofCards = [
  {
    title: 'What was asked',
    body: 'See the prompt or request that started the work.',
  },
  {
    title: 'What was used',
    body: 'Show the approved company sources behind the answer.',
  },
  {
    title: 'What was produced',
    body: 'Keep a reviewable record of the draft, answer or summary.',
  },
] as const;

const sources = ['Email thread', 'Contract draft', 'Policy note'] as const;

function AuditTrailVisual() {
  const steps = [
    {
      label: 'Prompt',
      content: '“What changed in the Q3 contract thread?”',
      type: 'text' as const,
    },
    {
      label: 'Sources used',
      content: null,
      type: 'sources' as const,
    },
    {
      label: 'Output',
      content: 'Draft reply prepared',
      type: 'text' as const,
    },
    {
      label: 'Review',
      content: 'Hans Peter Meyer · Saved for review',
      type: 'text' as const,
    },
  ];

  return (
    <div
      className="v6-card rounded-xl border bg-white p-5 md:p-6"
      style={{ borderColor: 'rgba(70, 70, 70, 0.12)' }}
      aria-label="Example audit trail showing prompt, sources, output and review"
    >
      <div className="relative space-y-0">
        {steps.map((step, index) => (
          <div key={step.label} className="relative flex gap-4 pb-6 last:pb-0">
            {index < steps.length - 1 && (
              <span
                className="absolute left-[11px] top-7 bottom-0 w-px"
                style={{ backgroundColor: 'rgba(70, 70, 70, 0.15)' }}
                aria-hidden="true"
              />
            )}
            <span
              className="relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold"
              style={{ backgroundColor: 'var(--zuraio-olive)', color: 'var(--paper-white)' }}
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p
                className="mb-1.5 text-xs font-semibold uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}
              >
                {step.label}
              </p>
              {step.type === 'sources' ? (
                <div className="flex flex-wrap gap-2">
                  {sources.map((source) => (
                    <span
                      key={source}
                      className="rounded-full border px-2.5 py-1 text-xs font-medium"
                      style={{
                        borderColor: 'rgba(70, 70, 70, 0.12)',
                        color: 'var(--data-teal)',
                        backgroundColor: 'var(--cloud-grey)',
                      }}
                    >
                      {source}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--deep-charcoal)' }}>
                  {step.content}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AuditReadinessSection() {
  return (
    <V6Section background="grey" reveal>
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p
            className="mb-4 text-xs font-semibold tracking-[0.12em]"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--zuraio-olive)' }}
          >
            REVIEWABLE AI USE
          </p>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
            AI you can explain later.
          </h2>
          <p className="mb-4 text-base leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            As AI becomes part of daily work, companies will need to understand how answers, drafts and summaries were
            produced.
          </p>
          <p className="mb-8 text-base leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            Zuraio is designed to make prompts, sources, outputs and review steps easier to trace, so your team can use
            AI with more confidence.
          </p>

          <div className="mb-8 flex flex-col gap-3">
            {proofCards.map(({ title, body }) => (
              <article
                key={title}
                className="rounded-lg border bg-white p-4"
                style={{ borderColor: 'rgba(70, 70, 70, 0.12)' }}
              >
                <h3 className="mb-1.5 text-sm font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--charcoal)' }}>
                  {body}
                </p>
              </article>
            ))}
          </div>

          <p className="text-sm leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            This helps companies prepare for future AI governance, internal review and audit expectations.
          </p>
        </div>

        <AuditTrailVisual />
      </div>
    </V6Section>
  );
}

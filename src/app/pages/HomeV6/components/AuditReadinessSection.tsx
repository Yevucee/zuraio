import { useI18n } from '../../../../i18n/I18nProvider';
import { V6Section } from './V6Section';

function AuditTrailVisual() {
  const { messages: m } = useI18n();
  const a = m.homeV6.audit;

  const steps = [
    { label: a.steps.prompt.label, content: a.steps.prompt.content, type: 'text' as const },
    { label: a.steps.sources.label, content: null, type: 'sources' as const },
    { label: a.steps.output.label, content: a.steps.output.content, type: 'text' as const },
    { label: a.steps.review.label, content: a.steps.review.content, type: 'text' as const },
  ];

  return (
    <div
      className="v6-card rounded-xl border bg-white p-5 md:p-6"
      style={{ borderColor: 'rgba(70, 70, 70, 0.12)' }}
      aria-label={a.trailAria}
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
                  {a.sourceTags.map((source) => (
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
  const { messages: m } = useI18n();
  const a = m.homeV6.audit;

  return (
    <V6Section background="grey" reveal>
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p
            className="mb-4 text-xs font-semibold tracking-[0.12em]"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--zuraio-olive)' }}
          >
            {a.label}
          </p>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
            {a.title}
          </h2>
          <p className="mb-4 text-base leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            {a.body1}
          </p>
          <p className="mb-8 text-base leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            {a.body2}
          </p>

          <div className="mb-8 flex flex-col gap-3">
            {a.proofCards.map(({ title, body }) => (
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
            {a.footnote}
          </p>
        </div>

        <AuditTrailVisual />
      </div>
    </V6Section>
  );
}

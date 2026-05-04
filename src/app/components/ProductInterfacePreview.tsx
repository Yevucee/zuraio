export function ProductInterfacePreview() {
  return (
    <div
      className="w-full max-w-[720px] rounded-2xl border p-4 shadow-2xl"
      style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.16)' }}
      aria-label="Zuraio AI Hub product interface preview"
    >
      <div className="mb-4 flex items-center justify-between border-b pb-3" style={{ borderColor: 'rgba(70, 70, 70, 0.12)' }}>
        <div>
          <p className="text-xs uppercase tracking-[0.18em]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
            Zuraio AI Hub
          </p>
          <p className="text-lg font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
            Meeting brief prepared
          </p>
        </div>
        <span className="rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: 'var(--soft-olive)', color: 'var(--deep-charcoal)' }}>
          Controlled
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-xl p-5" style={{ backgroundColor: 'var(--cloud-grey)' }}>
          <p className="mb-4 text-xs uppercase tracking-[0.18em]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
            Client context
          </p>
          <div className="space-y-3">
            <div className="h-3 w-11/12 rounded-full" style={{ backgroundColor: 'rgba(70, 70, 70, 0.24)' }} />
            <div className="h-3 w-9/12 rounded-full" style={{ backgroundColor: 'rgba(70, 70, 70, 0.18)' }} />
            <div className="h-3 w-10/12 rounded-full" style={{ backgroundColor: 'rgba(70, 70, 70, 0.18)' }} />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {['Email', 'Documents', 'CRM', 'Tasks'].map((source) => (
              <div key={source} className="rounded-lg border p-3" style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.12)' }}>
                <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
                  {source}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl p-5" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
            <p className="mb-2 text-xs uppercase tracking-[0.18em]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--paper-white)' }}>
              Next actions
            </p>
            <p className="text-2xl font-semibold leading-tight" style={{ color: 'var(--paper-white)' }}>
              4 follow-ups found
            </p>
          </div>

          <div className="rounded-xl border p-5" style={{ borderColor: 'rgba(70, 70, 70, 0.12)' }}>
            <p className="mb-3 text-xs uppercase tracking-[0.18em]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
              Data route
            </p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--data-teal)' }} />
              <p className="text-sm font-medium" style={{ color: 'var(--deep-charcoal)' }}>
                Approved sources only
              </p>
            </div>
          </div>

          <div className="rounded-xl border p-5" style={{ borderColor: 'rgba(70, 70, 70, 0.12)' }}>
            <p className="mb-3 text-xs uppercase tracking-[0.18em]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
              Audit
            </p>
            <p className="text-sm" style={{ color: 'var(--charcoal)' }}>
              Sources and model route logged for review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

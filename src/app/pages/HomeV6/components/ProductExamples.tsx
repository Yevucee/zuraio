import { useRef, useState } from 'react';
import { useI18n } from '../../../../i18n/I18nProvider';
import { V6Section } from './V6Section';
import { useInViewOnce } from './hooks/useInViewOnce';

type TabId = 'email' | 'meetings' | 'knowledge';

function EmailPanel({ animate }: { animate: boolean }) {
  const { messages: m } = useI18n();
  const p = m.homeV6.productExamples.emailPanel;

  return (
    <div className={`v6-card rounded-xl border bg-white p-5 md:p-6 ${animate ? 'v6-animate' : ''}`} style={{ borderColor: 'rgba(70, 70, 70, 0.12)' }}>
      <p className="v6-step mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--zuraio-olive)' }}>
        {p.label}
      </p>
      <p className="v6-step mb-2 text-sm font-medium" style={{ color: 'var(--deep-charcoal)' }}>
        {p.subject}
      </p>
      <p className="v6-step mb-4 text-sm" style={{ color: 'var(--charcoal)' }}>
        {p.summary}
      </p>
      <div className="v6-step rounded-lg border p-4" style={{ borderColor: 'rgba(70, 70, 70, 0.12)', backgroundColor: 'var(--cloud-grey)' }}>
        <p className="mb-2 text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--charcoal)' }}>
          {p.draftLabel}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--deep-charcoal)' }}>
          {p.draftBody}
        </p>
      </div>
      <p className="v6-step mt-3 text-xs" style={{ color: 'var(--data-teal)' }}>
        {p.sources}
      </p>
      <div className="v6-step mt-4 flex flex-wrap gap-2">
        <span className="rounded-md px-3 py-1.5 text-xs font-medium" style={{ backgroundColor: 'var(--zuraio-olive)', color: 'var(--paper-white)' }}>
          {p.reviewDraft}
        </span>
        <span className="rounded-md border px-3 py-1.5 text-xs font-medium" style={{ borderColor: 'rgba(70, 70, 70, 0.2)', color: 'var(--deep-charcoal)' }}>
          {p.editBeforeSend}
        </span>
      </div>
    </div>
  );
}

function MeetingsPanel({ animate }: { animate: boolean }) {
  const { messages: m } = useI18n();
  const p = m.homeV6.productExamples.meetingsPanel;

  return (
    <div className={`v6-card rounded-xl border bg-white p-5 md:p-6 ${animate ? 'v6-animate' : ''}`} style={{ borderColor: 'rgba(70, 70, 70, 0.12)' }}>
      <p className="v6-step mb-1 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--zuraio-olive)' }}>
        {p.label}
      </p>
      <p className="v6-step mb-4 text-base font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
        {p.title}
      </p>
      <ul className="space-y-2">
        {p.items.map((item) => (
          <li key={item} className="v6-step flex gap-2 text-sm" style={{ color: 'var(--charcoal)' }}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: 'var(--zuraio-olive)' }} />
            {item}
          </li>
        ))}
      </ul>
      <div className="v6-step mt-4 flex flex-wrap gap-2">
        {p.sources.map((s) => (
          <span key={s} className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: 'rgba(70, 70, 70, 0.15)', color: 'var(--data-teal)' }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function KnowledgePanel({ animate }: { animate: boolean }) {
  const { messages: m } = useI18n();
  const p = m.homeV6.productExamples.knowledgePanel;

  return (
    <div className={`v6-card rounded-xl border bg-white p-5 md:p-6 ${animate ? 'v6-animate' : ''}`} style={{ borderColor: 'rgba(70, 70, 70, 0.12)' }}>
      <p className="v6-step mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--zuraio-olive)' }}>
        {p.label}
      </p>
      <div className="v6-step mb-4 rounded-lg border px-4 py-3 text-sm" style={{ borderColor: 'rgba(70, 70, 70, 0.12)', color: 'var(--charcoal)' }}>
        {p.question}
      </div>
      <div className="v6-step mb-3 rounded-lg p-4" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--deep-charcoal)' }}>
          {p.answer}
        </p>
      </div>
      <p className="v6-step mb-2 text-xs font-medium" style={{ color: 'var(--data-teal)' }}>
        {p.sourcesLabel}
      </p>
      <div className="v6-step flex flex-wrap gap-2">
        {p.sources.map((s) => (
          <span key={s} className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: 'rgba(70, 70, 70, 0.15)', color: 'var(--data-teal)' }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProductExamples() {
  const { messages: m } = useI18n();
  const pe = m.homeV6.productExamples;
  const [active, setActive] = useState<TabId>('email');
  const panelRef = useRef<HTMLDivElement>(null);
  const inView = useInViewOnce(panelRef);
  const activeTab = pe.tabs.find((t) => t.id === active)!;

  return (
    <V6Section id="see-it-in-action" background="grey" reveal>
      <h2 className="mb-4 text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
        {pe.title}
      </h2>
      <p className="mb-10 max-w-[720px] text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
        {pe.body}
      </p>

      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label={pe.tablistLabel}>
        {pe.tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            className="v6-focus rounded-md px-4 py-2 text-sm font-medium transition-colors"
            style={{
              backgroundColor: active === tab.id ? 'var(--zuraio-olive)' : 'var(--paper-white)',
              color: active === tab.id ? 'var(--paper-white)' : 'var(--deep-charcoal)',
              border: active === tab.id ? 'none' : '1px solid rgba(70, 70, 70, 0.15)',
            }}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <h3 className="mb-4 text-2xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
            {activeTab.heading}
          </h3>
          <p className="text-base leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            {activeTab.copy}
          </p>
        </div>
        <div ref={panelRef} role="tabpanel">
          {active === 'email' && <EmailPanel animate={inView} />}
          {active === 'meetings' && <MeetingsPanel animate={inView} />}
          {active === 'knowledge' && <KnowledgePanel animate={inView} />}
        </div>
      </div>
    </V6Section>
  );
}

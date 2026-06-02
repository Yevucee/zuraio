import { useRef, useState } from 'react';
import { V6Section } from './V6Section';
import { useInViewOnce } from './hooks/useInViewOnce';

type TabId = 'email' | 'meetings' | 'knowledge';

const tabs: { id: TabId; label: string; heading: string; copy: string }[] = [
  {
    id: 'email',
    label: 'Email',
    heading: 'The reply is already waiting.',
    copy: 'Long email threads slow people down. Zuraio helps summarise the conversation, identify what matters and prepare a reply in your tone. You review, edit and decide what gets sent.',
  },
  {
    id: 'meetings',
    label: 'Meetings',
    heading: 'Walk in prepared.',
    copy: 'Before a meeting, Zuraio can bring together relevant emails, notes, documents, decisions and open actions. Your team starts with a clear brief instead of searching through folders and inboxes.',
  },
  {
    id: 'knowledge',
    label: 'Knowledge',
    heading: 'Find the answer. See the proof.',
    copy: 'Ask questions across approved company knowledge and see where the answer came from. This makes answers easier to check, share and trust.',
  },
];

function EmailPanel({ animate }: { animate: boolean }) {
  return (
    <div className={`v6-card rounded-xl border bg-white p-5 md:p-6 ${animate ? 'v6-animate' : ''}`} style={{ borderColor: 'rgba(70, 70, 70, 0.12)' }}>
      <p className="v6-step mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--zuraio-olive)' }}>
        Email Assistant
      </p>
      <p className="v6-step mb-2 text-sm font-medium" style={{ color: 'var(--deep-charcoal)' }}>
        Re: Q3 contract renewal — thread summary
      </p>
      <p className="v6-step mb-4 text-sm" style={{ color: 'var(--charcoal)' }}>
        Key points: pricing alignment needed, delivery timeline open, legal review pending.
      </p>
      <div className="v6-step rounded-lg border p-4" style={{ borderColor: 'rgba(70, 70, 70, 0.12)', backgroundColor: 'var(--cloud-grey)' }}>
        <p className="mb-2 text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--charcoal)' }}>
          Draft reply
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--deep-charcoal)' }}>
          Thank you for the update. We reviewed the terms and can confirm alignment with our guidelines. Please find our
          proposed adjustments attached for your review.
        </p>
      </div>
      <p className="v6-step mt-3 text-xs" style={{ color: 'var(--data-teal)' }}>
        Sources: thread history, prior agreement
      </p>
      <div className="v6-step mt-4 flex flex-wrap gap-2">
        <span className="rounded-md px-3 py-1.5 text-xs font-medium" style={{ backgroundColor: 'var(--zuraio-olive)', color: 'var(--paper-white)' }}>
          Review draft
        </span>
        <span className="rounded-md border px-3 py-1.5 text-xs font-medium" style={{ borderColor: 'rgba(70, 70, 70, 0.2)', color: 'var(--deep-charcoal)' }}>
          Edit before send
        </span>
      </div>
    </div>
  );
}

function MeetingsPanel({ animate }: { animate: boolean }) {
  const items = [
    'Client context from recent emails',
    'Open follow-up: confirm delivery timeline',
    'Decision: approve revised contract terms',
    'Suggested talking points for review',
  ];

  return (
    <div className={`v6-card rounded-xl border bg-white p-5 md:p-6 ${animate ? 'v6-animate' : ''}`} style={{ borderColor: 'rgba(70, 70, 70, 0.12)' }}>
      <p className="v6-step mb-1 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--zuraio-olive)' }}>
        Meeting brief
      </p>
      <p className="v6-step mb-4 text-base font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
        Acme AG — Tuesday 10:00
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="v6-step flex gap-2 text-sm" style={{ color: 'var(--charcoal)' }}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: 'var(--zuraio-olive)' }} />
            {item}
          </li>
        ))}
      </ul>
      <div className="v6-step mt-4 flex flex-wrap gap-2">
        {['Email thread', 'Last notes', 'Q3 proposal'].map((s) => (
          <span key={s} className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: 'rgba(70, 70, 70, 0.15)', color: 'var(--data-teal)' }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function KnowledgePanel({ animate }: { animate: boolean }) {
  return (
    <div className={`v6-card rounded-xl border bg-white p-5 md:p-6 ${animate ? 'v6-animate' : ''}`} style={{ borderColor: 'rgba(70, 70, 70, 0.12)' }}>
      <p className="v6-step mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--zuraio-olive)' }}>
        Knowledge search
      </p>
      <div className="v6-step mb-4 rounded-lg border px-4 py-3 text-sm" style={{ borderColor: 'rgba(70, 70, 70, 0.12)', color: 'var(--charcoal)' }}>
        What is our remote work policy for new hires?
      </div>
      <div className="v6-step mb-3 rounded-lg p-4" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--deep-charcoal)' }}>
          New hires may work remotely up to two days per week after onboarding. Manager approval is required for
          additional remote days.
        </p>
      </div>
      <p className="v6-step mb-2 text-xs font-medium" style={{ color: 'var(--data-teal)' }}>
        Sources attached
      </p>
      <div className="v6-step flex flex-wrap gap-2">
        {['HR Policy 2024.pdf', 'Onboarding guide'].map((s) => (
          <span key={s} className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: 'rgba(70, 70, 70, 0.15)', color: 'var(--data-teal)' }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProductExamples() {
  const [active, setActive] = useState<TabId>('email');
  const panelRef = useRef<HTMLDivElement>(null);
  const inView = useInViewOnce(panelRef);
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <V6Section id="see-it-in-action" background="grey" reveal>
      <h2 className="mb-4 text-3xl font-semibold md:text-4xl" style={{ color: 'var(--deep-charcoal)' }}>
        Watch the work take shape.
      </h2>
      <p className="mb-10 max-w-[720px] text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
        Short examples show how Zuraio helps teams prepare, reply and find answers from approved company knowledge.
      </p>

      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Product examples">
        {tabs.map((tab) => (
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

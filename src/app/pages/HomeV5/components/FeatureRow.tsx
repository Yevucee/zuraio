import { useRef } from 'react';
import { V5 } from '../tokens';
import { V5Section } from './V5Section';
import { useInViewOnce } from './hooks/useInViewOnce';

type FeatureVariant = 'email' | 'meetings' | 'knowledge';

interface FeatureRowProps {
  variant: FeatureVariant;
  reverse?: boolean;
}

const featureContent: Record<
  FeatureVariant,
  { eyebrow: string; headline: string; body: string }
> = {
  email: {
    eyebrow: 'EMAIL',
    headline: 'Replies ready to review.',
    body: 'Zuraio reads the thread, prepares a draft in your tone and keeps you in control of what gets sent.',
  },
  meetings: {
    eyebrow: 'MEETINGS',
    headline: 'Walk in already prepared.',
    body: 'Before your next call, Zuraio gathers relevant emails, decisions and open actions into a clear meeting brief.',
  },
  knowledge: {
    eyebrow: 'KNOWLEDGE',
    headline: 'Ask once. Get the answer with sources.',
    body: 'Pull context from approved company files, emails, messages and notes. Answers are designed to include the sources behind them.',
  },
};

function EmailVisual({ animate }: { animate: boolean }) {
  return (
    <div
      className={`v5-card rounded-2xl border bg-white p-5 md:p-6 ${animate ? 'v5-animate' : ''}`}
      style={{ borderColor: V5.hairline }}
    >
      <p className="v5-step mb-4 text-xs font-semibold uppercase tracking-wider" style={{ color: V5.olive }}>
        Email Assistant
      </p>
      <div className="v5-step mb-4 space-y-2">
        <p className="text-xs" style={{ color: V5.inkMuted }}>
          Re: Q3 contract renewal
        </p>
        <p className="text-sm" style={{ color: V5.ink }}>
          From: client@example.com · 3 messages in thread
        </p>
      </div>
      <div
        className="v5-step rounded-xl border p-4"
        style={{ borderColor: V5.hairline, backgroundColor: V5.creamBg }}
      >
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider" style={{ color: V5.inkMuted }}>
          Draft reply — ready for your review
        </p>
        <p className={`text-sm leading-relaxed ${animate ? '' : 'v5-typing-cursor'}`} style={{ color: V5.ink }}>
          {animate
            ? 'Thank you for sharing the updated terms. We reviewed the pricing section and can confirm alignment with our internal guidelines. Please find our proposed adjustments attached — you stay in control of what leaves the company.'
            : ''}
        </p>
      </div>
      <div className="v5-step mt-4 flex gap-2">
        <span
          className="rounded-md px-3 py-1.5 text-xs font-medium"
          style={{ backgroundColor: V5.olive, color: '#FFFFFF' }}
        >
          Edit draft
        </span>
        <span
          className="rounded-md border px-3 py-1.5 text-xs font-medium"
          style={{ borderColor: V5.hairline, color: V5.ink }}
        >
          Send when ready
        </span>
      </div>
    </div>
  );
}

function MeetingsVisual({ animate }: { animate: boolean }) {
  const bullets = [
    'Context from last week’s email thread on pricing',
    'Open action: confirm delivery timeline with operations',
    'Decision needed: approve revised contract terms',
    'Related document: Q3 proposal (SharePoint)',
    'Suggested talking points prepared for review',
  ];

  return (
    <div
      className={`v5-card rounded-2xl border bg-white p-5 md:p-6 ${animate ? 'v5-animate' : ''}`}
      style={{ borderColor: V5.hairline }}
    >
      <p className="v5-step mb-1 text-xs font-semibold uppercase tracking-wider" style={{ color: V5.olive }}>
        Meeting brief
      </p>
      <p className="v5-step mb-5 text-base font-semibold" style={{ color: V5.ink }}>
        Acme AG — Tuesday 10:00
      </p>
      <ul className="space-y-3">
        {bullets.map((item) => (
          <li key={item} className="v5-step flex gap-3 text-sm" style={{ color: V5.inkMuted }}>
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: V5.olive }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function KnowledgeVisual({ animate }: { animate: boolean }) {
  return (
    <div
      className={`v5-card rounded-2xl border bg-white p-5 md:p-6 ${animate ? 'v5-animate' : ''}`}
      style={{ borderColor: V5.hairline }}
    >
      <div className="v5-step mb-4 flex items-center gap-2 rounded-lg border px-4 py-3" style={{ borderColor: V5.hairline }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke={V5.inkMuted} strokeWidth="1.5" />
          <path d="M16 16l4 4" stroke={V5.inkMuted} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="text-sm" style={{ color: V5.inkMuted }}>
          What is our remote work policy for new hires?
        </span>
      </div>
      <div className="v5-step mb-4 rounded-xl p-4" style={{ backgroundColor: V5.creamBg }}>
        <p className="text-sm leading-relaxed" style={{ color: V5.ink }}>
          New hires may work remotely up to two days per week after completing onboarding. Manager approval is required
          for any additional remote days.
        </p>
      </div>
      <div className="v5-step flex flex-wrap gap-2">
        {['HR Policy 2024.pdf', 'Onboarding guide', 'Team handbook'].map((source) => (
          <span
            key={source}
            className="rounded-full border px-3 py-1 text-xs font-medium"
            style={{ borderColor: V5.hairline, color: V5.dataTeal, backgroundColor: '#FFFFFF' }}
          >
            {source}
          </span>
        ))}
      </div>
    </div>
  );
}

function FeatureVisual({ variant, animate }: { variant: FeatureVariant; animate: boolean }) {
  if (variant === 'email') return <EmailVisual animate={animate} />;
  if (variant === 'meetings') return <MeetingsVisual animate={animate} />;
  return <KnowledgeVisual animate={animate} />;
}

export function FeatureRow({ variant, reverse = false }: FeatureRowProps) {
  const visualRef = useRef<HTMLDivElement>(null);
  const inView = useInViewOnce(visualRef);
  const content = featureContent[variant];

  return (
    <V5Section background={reverse ? 'soft' : 'cream'}>
      <div
        className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? 'lg:[direction:rtl]' : ''}`}
      >
        <div className={reverse ? 'lg:[direction:ltr]' : ''}>
          <p
            className="mb-4 text-xs font-semibold tracking-[0.12em]"
            style={{ fontFamily: 'var(--font-mono)', color: V5.olive }}
          >
            {content.eyebrow}
          </p>
          <h2 className="mb-5 text-3xl font-semibold leading-tight md:text-4xl" style={{ color: V5.ink }}>
            {content.headline}
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: V5.inkMuted }}>
            {content.body}
          </p>
        </div>
        <div ref={visualRef} className={reverse ? 'lg:[direction:ltr]' : ''}>
          <FeatureVisual variant={variant} animate={inView} />
        </div>
      </div>
    </V5Section>
  );
}

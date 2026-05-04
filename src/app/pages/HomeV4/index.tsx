import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ComparisonBanner } from '../../components/ComparisonBanner';
import heroImage from '../../../imports/hero_image_2_-.png';
import { SilhouetteAvatar, TestimonialCard } from './components/TestimonialCard';

const RED = '#C8102E';
const PAPER = '#F7F5EE';
const SOFT = '#F4EDDB';
const BORDER = '#E5E1D5';
const INK = '#0B1424';
const BODY = '#1F2937';
const MUTED = '#6B7280';
const CONTROL = '#2C7A6B';

const problemCards = [
  ['mail', 'Missed follow-ups', 'Important actions disappear inside long email threads.'],
  ['clock', 'Slow meeting prep', 'People search instead of preparing.'],
  ['loop', 'Repeated admin', 'Reports and updates rebuilt from scratch each time.'],
  ['branch', 'Inconsistent information', 'Different teams work from different versions of the truth.'],
] as const;

const workflowTabs = [
  {
    id: 'meeting',
    label: 'Meeting brief',
    title: 'Meeting brief — Acme AG (Tuesday 10:00)',
    bullets: [
      'Pulls from: recent emails, last meeting notes, CRM record, open tasks',
      'Produces: 1-page brief with talking points, open follow-ups, next-action suggestions',
      'Audit trail: every source listed, every action logged',
    ],
    mockup: 'meeting',
  },
  {
    id: 'email',
    label: 'Email summary',
    title: 'Thread summary — Re: Q3 contract',
    bullets: [
      'Pulls from: full email thread, related prior threads',
      'Produces: key points, open questions, draft reply, follow-up task',
      'Tone matches your previous replies in the thread',
    ],
    mockup: 'email',
  },
  {
    id: 'report',
    label: 'Report draft',
    title: 'Monthly management summary — May 2026',
    bullets: [
      'Pulls from: approved internal sources only',
      'Produces: structured first draft with section headers',
      'Flags missing inputs instead of inventing them',
    ],
    mockup: 'report',
  },
  {
    id: 'knowledge',
    label: 'Knowledge search',
    title: 'Knowledge answer',
    bullets: [
      'Asks across approved company documents',
      'Returns source-backed answers, never invented citations',
      'Respects user permissions on every document',
    ],
    mockup: 'knowledge',
  },
] as const;

const personas = [
  ['Owners & management', ['meeting preparation', 'decision summaries', 'company-wide knowledge search']],
  ['Operations', ['project summaries', 'handovers', 'process checklists']],
  ['Administration', ['email summaries', 'document search', 'report drafts']],
  ['Sales & client teams', ['client briefs', 'proposal preparation', 'follow-up drafting']],
] as const;

const customerLogoSlots = ['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5', 'Logo 6'];

function useRevealSections() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.v4-reveal').forEach((section) => section.classList.add('v4-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('v4-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll('.v4-reveal').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
}

function Icon({ type, className = 'h-6 w-6' }: { type: string; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {type === 'swiss' && (
        <>
          <rect x="4" y="4" width="16" height="16" rx="3" {...common} />
          <path d="M12 7.5v9M7.5 12h9" {...common} />
        </>
      )}
      {type === 'lock' && (
        <>
          <rect x="5" y="10" width="14" height="10" rx="2" {...common} />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" {...common} />
        </>
      )}
      {type === 'branch' && (
        <>
          <path d="M5 6h5a4 4 0 0 1 4 4v8" {...common} />
          <path d="M14 10a4 4 0 0 1 4-4h1" {...common} />
          <path d="M17 4l2 2-2 2M12 16l2 2-2 2" {...common} />
        </>
      )}
      {type === 'doc' && (
        <>
          <path d="M7 3h7l4 4v14H7z" {...common} />
          <path d="M14 3v5h4M9 14l2 2 4-5" {...common} />
        </>
      )}
      {type === 'mail' && (
        <>
          <rect x="4" y="6" width="16" height="12" rx="2" {...common} />
          <path d="m5 8 7 5 7-5" {...common} />
          <path d="M7 20h10" {...common} />
        </>
      )}
      {type === 'clock' && (
        <>
          <circle cx="12" cy="12" r="8" {...common} />
          <path d="M12 7v5l3 2" {...common} />
        </>
      )}
      {type === 'loop' && (
        <>
          <path d="M7 7h8a4 4 0 0 1 0 8H9" {...common} />
          <path d="M9 11 5 15l4 4M15 3l4 4-4 4" {...common} />
        </>
      )}
      {type === 'x' && <path d="M7 7l10 10M17 7 7 17" {...common} />}
      {type === 'check' && <path d="m6 12 4 4 8-9" {...common} />}
      {type === 'arrow' && <path d="M5 12h14M13 6l6 6-6 6" {...common} />}
      {type === 'person' && (
        <>
          <circle cx="12" cy="8" r="3" {...common} />
          <path d="M5 20a7 7 0 0 1 14 0" {...common} />
        </>
      )}
    </svg>
  );
}

function V4Styles() {
  return (
    <style>{`
      .v4-reveal { opacity: 0; transform: translateY(12px); transition: opacity 500ms ease, transform 500ms ease; }
      .v4-visible { opacity: 1; transform: translateY(0); }
      .v4-card { box-shadow: 0 1px 2px rgba(11,20,36,0.04), 0 8px 24px rgba(11,20,36,0.04); transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease; }
      .v4-card:hover { transform: translateY(-2px); box-shadow: 0 2px 4px rgba(11,20,36,0.06), 0 16px 40px rgba(11,20,36,0.08); }
      .v4-card:hover .v4-icon { color: ${RED}; }
      .v4-button { position: relative; overflow: hidden; transition: transform 180ms ease, box-shadow 180ms ease; }
      .v4-button::after { content: ""; position: absolute; inset: 0; transform: translateX(-120%); background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent); transition: transform 600ms ease; }
      .v4-button:hover { transform: translateY(-1px); box-shadow: 0 12px 30px rgba(11,20,36,0.10); }
      .v4-button:hover::after { transform: translateX(120%); }
      .v4-button:active { transform: translateY(0); box-shadow: none; }
      .v4-focus:focus-visible { outline: 2px solid ${RED}; outline-offset: 2px; }
      .v4-flow-dot { animation: v4Flow 4s ease-in-out infinite; }
      .v4-flow-dot:nth-of-type(2) { animation-delay: 700ms; }
      .v4-flow-dot:nth-of-type(3) { animation-delay: 1400ms; }
      .v4-flow-dot:nth-of-type(4) { animation-delay: 2100ms; }
      @keyframes v4Flow { 0% { opacity: 0; transform: translateX(0); } 15% { opacity: 1; } 60% { opacity: 1; transform: translateX(440px); } 100% { opacity: 0; transform: translateX(620px); } }
      .v4-row-shift { transition: transform 180ms ease; }
      .v4-with-card:hover .v4-row-shift { transform: translateX(4px); }
      .v4-panel { animation: v4Panel 200ms ease; }
      @keyframes v4Panel { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      @media (prefers-reduced-motion: reduce) {
        .v4-reveal, .v4-card, .v4-button, .v4-panel, .v4-row-shift { transition: none; animation: none; transform: none; opacity: 1; }
        .v4-flow-dot { animation: none; opacity: 0; }
      }
    `}</style>
  );
}

function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`v4-reveal py-16 md:py-24 lg:py-32 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-6">{children}</div>
    </section>
  );
}

function PrimaryButton({ children, to, onClick }: { children: React.ReactNode; to?: string; onClick?: () => void }) {
  const className = 'v4-button v4-focus inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold';
  const style = { backgroundColor: RED, color: 'white' };

  if (to) {
    return (
      <Link className={className} style={style} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} style={style} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

function GhostButton({ children, to, onClick }: { children: React.ReactNode; to?: string; onClick?: () => void }) {
  const className = 'v4-button v4-focus inline-flex items-center justify-center rounded-lg border px-6 py-3 font-semibold';
  const style = { borderColor: BORDER, color: INK, backgroundColor: 'white' };

  if (to) {
    return (
      <Link className={className} style={style} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} style={style} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), video[controls], [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-6" role="dialog" aria-modal="true" aria-labelledby="v4-modal-title">
      <div ref={dialogRef} className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white p-6 shadow-2xl" style={{ color: BODY }}>
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 id="v4-modal-title" className="text-2xl font-semibold" style={{ color: INK }}>
            {title}
          </h2>
          <button ref={closeRef} type="button" className="v4-focus rounded-md px-3 py-2" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function TrustStrip() {
  const pills = [
    ['swiss', 'Hosted in Switzerland (configurable)'],
    ['lock', 'FADP & GDPR aligned'],
    ['branch', 'Model-independent'],
    ['doc', 'Audit-ready'],
  ] as const;

  return (
    <Section className="border-y py-10" style={{ borderColor: BORDER } as never}>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {pills.map(([icon, label]) => (
          <div key={label} className="flex items-center justify-center gap-3 rounded-xl border px-4 py-4 text-sm font-medium" style={{ borderColor: BORDER, color: INK }}>
            <Icon type={icon} className="h-5 w-5" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HubDefinitionDiagram() {
  return (
    <svg viewBox="0 0 420 320" role="img" className="w-full" aria-labelledby="hub-definition-title">
      <title id="hub-definition-title">Zuraio AI Hub sits between people, models, knowledge and systems.</title>
      {[
        ['Your people', 40, BORDER],
        ['Zuraio AI Hub', 130, RED],
        ['Models · Knowledge · Systems', 220, BORDER],
      ].map(([label, y, stroke]) => (
        <g key={label as string}>
          <rect x="50" y={y as number} width="320" height="64" rx="20" fill="white" stroke={stroke as string} strokeWidth="2" />
          <text x="210" y={(y as number) + 40} textAnchor="middle" fontSize="18" fontWeight="600" fill={INK}>
            {label}
          </text>
        </g>
      ))}
      <path d="M210 104v26M210 194v26" stroke={MUTED} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DataFlowDiagram() {
  return (
    <div>
      <svg viewBox="0 0 980 480" role="img" className="w-full" aria-labelledby="data-flow-title">
        <title id="data-flow-title">Approved sources route through Zuraio AI Hub to source-backed outputs.</title>
        <text x="70" y="48" fill={MUTED} fontSize="16" fontWeight="600">Sources</text>
        <text x="782" y="48" fill={MUTED} fontSize="16" fontWeight="600">Outputs</text>
        {['Email', 'Documents', 'Meeting notes', 'CRM', 'Policies'].map((label, index) => (
          <g key={label}>
            <rect x="40" y={80 + index * 68} width="190" height="44" rx="12" fill="white" stroke={BORDER} />
            <text x="78" y={108 + index * 68} fill={INK} fontSize="15" fontWeight="600">{label}</text>
          </g>
        ))}
        <rect x="395" y="150" width="210" height="160" rx="22" fill="white" stroke={RED} />
        <text x="500" y="205" textAnchor="middle" fill={INK} fontSize="20" fontWeight="700">Zuraio AI Hub</text>
        {['Routing', 'Permissions', 'Audit'].map((label, index) => (
          <g key={label}>
            <rect x={425 + index * 52} y="230" width="82" height="30" rx="15" fill={SOFT} stroke={BORDER} />
            <text x={466 + index * 52} y="250" textAnchor="middle" fill={BODY} fontSize="12">{label}</text>
          </g>
        ))}
        {['Meeting brief', 'Email summary', 'Report draft', 'Knowledge answer'].map((label, index) => (
          <g key={label}>
            <rect x="750" y={100 + index * 78} width="190" height="48" rx="12" fill="white" stroke={BORDER} />
            <text x="782" y={130 + index * 78} fill={INK} fontSize="15" fontWeight="600">{label}</text>
          </g>
        ))}
        {[102, 170, 238, 306].map((y, index) => (
          <g key={y}>
            <path d={`M230 ${y} C310 ${y}, 320 230, 395 230 M605 230 C680 230, 690 ${124 + index * 78}, 750 ${124 + index * 78}`} stroke={BORDER} strokeWidth="2" fill="none" />
            <circle className="v4-flow-dot" cx="238" cy={y} r="5" fill={index % 2 === 0 ? RED : CONTROL} />
          </g>
        ))}
      </svg>
      <p className="mt-6 text-center text-base" style={{ color: MUTED }}>
        Every output is traceable to its sources, every request is routed by policy, every action is logged.
      </p>
    </div>
  );
}

function WorkflowMockup({ type, title }: { type: string; title: string }) {
  return (
    <div className="v4-card rounded-2xl border bg-white p-6" style={{ borderColor: BORDER }}>
      <p className="mb-5 text-lg font-semibold" style={{ color: INK }}>{title}</p>
      {type === 'meeting' && (
        <div className="space-y-4 text-sm" style={{ color: BODY }}>
          <div><p className="font-semibold">Last contact</p><p>Acme asked for revised rollout timing and commercial terms.</p></div>
          <div><p className="font-semibold">Open follow-ups</p><p>□ Send security appendix</p><p>□ Confirm pilot users</p><p>□ Align next workshop</p></div>
          <div><p className="font-semibold">Suggested next actions</p><p>Prepare pricing note · Ask about procurement timeline</p></div>
          <span className="inline-flex rounded-full px-3 py-1 text-xs" style={{ backgroundColor: SOFT, color: INK }}>Sources: 4 emails · 2 docs · 1 CRM record</span>
        </div>
      )}
      {type === 'email' && (
        <div className="space-y-4 text-sm" style={{ color: BODY }}>
          <ul className="list-disc space-y-1 pl-5"><li>Contract wording accepted except liability clause.</li><li>Client needs updated timeline by Friday.</li></ul>
          <div><p className="font-semibold">Open questions</p><p>Who approves the revised liability cap?</p></div>
          <div className="rounded-xl border p-3" style={{ borderColor: BORDER }}>Draft reply: Thank you for the comments. We can confirm the delivery timeline...</div>
        </div>
      )}
      {type === 'report' && (
        <div className="space-y-4 text-sm" style={{ color: BODY }}>
          <p>Revenue activity remained stable across active client accounts. Delivery capacity improved after the new onboarding process.</p>
          <p>Operational risk is concentrated in two delayed supplier inputs. The team recommends a short review before the next steering meeting.</p>
          <p className="rounded-lg border px-3 py-2" style={{ backgroundColor: '#FFF7D6', borderColor: '#E6C55C' }}>Missing: April KPI export — please attach.</p>
        </div>
      )}
      {type === 'knowledge' && (
        <div className="space-y-4 text-sm" style={{ color: BODY }}>
          <div className="rounded-full border px-4 py-2" style={{ borderColor: BORDER }}>What's in our standard NDA?</div>
          <p>The NDA covers confidential information, permitted recipients and a two-year post-termination obligation for protected materials.</p>
          <span className="inline-flex rounded-full px-3 py-1 text-xs" style={{ backgroundColor: SOFT, color: INK }}>Source: NDA_template_v4.docx · §3</span>
        </div>
      )}
    </div>
  );
}

function WorkflowTabs() {
  const [active, setActive] = useState(workflowTabs[0].id);
  const current = workflowTabs.find((tab) => tab.id === active) ?? workflowTabs[0];

  return (
    <div>
      <div role="tablist" aria-label="Workflow examples" className="mb-10 flex flex-wrap gap-4 border-b" style={{ borderColor: BORDER }}>
        {workflowTabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            aria-selected={active === tab.id}
            aria-controls={`panel-${tab.id}`}
            className="v4-focus pb-3 text-left font-semibold transition-colors"
            style={{ color: active === tab.id ? RED : MUTED, borderBottom: active === tab.id ? `2px solid ${RED}` : '2px solid transparent' }}
            type="button"
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div id={`panel-${current.id}`} role="tabpanel" aria-labelledby={`tab-${current.id}`} className="v4-panel grid gap-10 lg:grid-cols-2">
        <div>
          <ul className="space-y-4 text-lg" style={{ color: BODY }}>
            {current.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}
          </ul>
        </div>
        <WorkflowMockup type={current.mockup} title={current.title} />
      </div>
    </div>
  );
}

function BeforeAfter() {
  const before = ['Information spread across inboxes and folders', 'Manual preparation before every meeting', 'Long email threads and missed actions', 'Reports rebuilt from scratch', 'Sensitive data copied into public tools'];
  const after = ['Context brought together from approved sources', 'Meeting briefs prepared automatically', 'Email summaries and draft replies ready', 'Drafts and summaries created faster', 'AI routed through a controlled company layer'];

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="v4-card rounded-2xl border bg-white p-8" style={{ borderColor: BORDER }}>
        <h3 className="mb-6 text-2xl font-semibold" style={{ color: INK }}>Before Zuraio</h3>
        <div className="space-y-4">{before.map((row) => <p key={row} className="flex gap-3" style={{ color: BODY }}><Icon type="x" className="h-5 w-5 text-gray-400" />{row}</p>)}</div>
      </div>
      <div className="v4-card v4-with-card rounded-2xl border p-8" style={{ backgroundColor: SOFT, borderColor: RED }}>
        <h3 className="mb-6 text-2xl font-semibold" style={{ color: INK }}>With Zuraio</h3>
        <div className="space-y-4">{after.map((row) => <p key={row} className="v4-row-shift flex gap-3" style={{ color: BODY }}><Icon type="check" className="h-5 w-5" />{row}</p>)}</div>
      </div>
    </div>
  );
}

function ControlCards() {
  const cards = [
    ['Model choice', 'Route work to cloud, open-source or local models by task and policy. Sensitive workloads stay on infrastructure you control.'],
    ['Access control', "Use roles and per-source permissions to control who can access which knowledge. Every request respects the user's existing rights."],
    ['Internal knowledge', 'Connect selected documents, systems and sources. Zuraio uses approved internal context, not whatever a public model happens to remember.'],
    ['Auditability', 'Every source, action and model call is recorded. Workflows are designed so reviews and audits are easier, not afterthoughts.'],
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {cards.map(([title, body], index) => (
        <div key={title} className="v4-card rounded-2xl border bg-white p-6" style={{ borderColor: BORDER }}>
          <svg viewBox="0 0 180 110" role="img" className="mb-5 w-full" aria-label={`${title} illustration`}>
            <title>{title} illustration</title>
            <rect x="20" y="20" width="140" height="70" rx="16" fill={SOFT} stroke={BORDER} />
            <path d={index === 0 ? 'M45 55h90M90 30v50M120 42l18 13-18 13' : index === 1 ? 'M48 40h84M48 55h84M48 70h54' : index === 2 ? 'M45 35h40M45 55h90M45 75h60M120 35v40' : 'M50 35h80M50 55h65M50 75h90'} stroke={index === 3 ? CONTROL : RED} strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
          <h3 className="mb-3 text-xl font-semibold" style={{ color: INK }}>{title}</h3>
          <p className="mb-5 text-sm leading-relaxed" style={{ color: BODY }}>{body}</p>
          <Link to="/data-control" className="v4-focus inline-flex items-center gap-2 text-sm font-semibold" style={{ color: RED }}>Learn more <Icon type="arrow" className="h-4 w-4" /></Link>
        </div>
      ))}
    </div>
  );
}

function ModelRoutingDiagram() {
  return (
    <svg viewBox="0 0 980 330" role="img" className="w-full" aria-labelledby="routing-title">
      <title id="routing-title">Tasks route to public, EU or on-prem models by sensitivity and policy.</title>
      {['Draft a routine email', 'Summarise client meeting', 'Process board minutes'].map((label, index) => (
        <g key={label}>
          <rect x="40" y={52 + index * 82} width="250" height="48" rx="14" fill="white" stroke={BORDER} />
          <text x="65" y={82 + index * 82} fill={INK} fontSize="15" fontWeight="600">{label}</text>
        </g>
      ))}
      {['Public cloud model', 'EU/CH cloud model', 'On-prem model'].map((label, index) => (
        <g key={label}>
          <rect x="690" y={52 + index * 82} width="240" height="48" rx="14" fill={index === 2 ? SOFT : 'white'} stroke={BORDER} />
          <text x="715" y={82 + index * 82} fill={INK} fontSize="15" fontWeight="600">{label}</text>
        </g>
      ))}
      {[['#2C7A6B', 76], ['#B58A1A', 158], [RED, 240]].map(([color, y]) => <path key={y as number} d={`M290 ${y} C420 ${y}, 560 ${y}, 690 ${y}`} stroke={color as string} strokeWidth="3" fill="none" strokeLinecap="round" />)}
    </svg>
  );
}

function ArchitectureDiagram() {
  const layers = ['Users & teams', 'Zuraio AI Hub — orchestration, permissions, audit', 'Agents — email, knowledge, research, reporting', 'Models — cloud, EU/CH cloud, open-source, on-prem', 'Connectors — Email, SharePoint, CRM, ERP, files', 'Company knowledge — approved sources'];

  return (
    <svg viewBox="0 0 980 520" role="img" className="w-full" aria-labelledby="architecture-title">
      <title id="architecture-title">Simplified layered architecture for Zuraio AI Hub.</title>
      {layers.map((label, index) => (
        <g key={label}>
          <rect x="90" y={34 + index * 76} width="800" height="52" rx="16" fill={index === 1 ? SOFT : 'white'} stroke={index === 1 ? RED : BORDER} />
          <circle cx="125" cy={60 + index * 76} r="10" fill={index === 1 ? RED : CONTROL} />
          <text x="155" y={66 + index * 76} fill={INK} fontSize="17" fontWeight={index === 1 ? 700 : 600}>{label}</text>
        </g>
      ))}
    </svg>
  );
}

function StickyDemoBar({ show, onDemo, onDismiss }: { show: boolean; onDemo: () => void; onDismiss: () => void }) {
  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 hidden border-t bg-white/95 px-6 py-3 backdrop-blur md:block" style={{ borderColor: BORDER }}>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4">
        <p className="font-medium" style={{ color: INK }}>Ready to see Zuraio on your work?</p>
        <div className="flex items-center gap-3">
          <PrimaryButton onClick={onDemo}>Book a demo</PrimaryButton>
          <button type="button" className="v4-focus rounded-md px-3 py-2" onClick={onDismiss} aria-label="Dismiss demo bar">×</button>
        </div>
      </div>
    </div>
  );
}

function CustomerLogoStrip() {
  return (
    <Section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1100px] text-center">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: MUTED }}>
          Trusted by Swiss companies
        </p>
        {/* TODO: replace placeholder logo slots with real customer/partner SVG logos.
            Each logo should be a single-color SVG, max-height 40px, rendered in muted
            greyscale by default and full color on hover. */}
        <div className="grid grid-cols-2 gap-4 min-[481px]:grid-cols-3 md:grid-cols-6">
          {customerLogoSlots.map((label) => (
            <div
              key={label}
              role="img"
              aria-label="Customer logo placeholder"
              className="flex h-10 items-center justify-center rounded border bg-white text-sm opacity-60 transition-opacity duration-300 hover:opacity-100"
              style={{ borderColor: BORDER, color: MUTED }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FounderPhotoSlot() {
  const [hasPhotoError, setHasPhotoError] = useState(false);

  if (hasPhotoError) {
    return <SilhouetteAvatar size={160} className="mx-auto mb-4" />;
  }

  return (
    <img
      src="src/assets/founders/founder-1.jpg"
      alt="Founder portrait placeholder"
      className="mx-auto mb-4 h-40 w-40 rounded-full border object-cover"
      style={{
        borderColor: SOFT,
        boxShadow: 'inset 0 1px 2px rgba(11,20,36,0.04)',
      }}
      onError={() => setHasPhotoError(true)}
    />
  );
}

function SwissContextPhotoSlot() {
  return (
    <div
      className="mx-auto mt-8 hidden aspect-[4/3] w-full max-w-[320px] items-center justify-center rounded-xl border px-6 text-center text-sm md:flex"
      style={{ backgroundColor: 'white', borderColor: BORDER, color: MUTED }}
    >
      {/* TODO: when a real Swiss-context photo is available, drop at
          src/assets/founders/environment-1.jpg and replace the placeholder. Avoid
          generic "team smiling at laptop" stock photography. */}
      Photo placeholder — Swiss-context image (office, Zurich skyline, boardroom)
    </div>
  );
}

export default function HomeV4() {
  const [activeModal, setActiveModal] = useState<'video' | 'pdf' | null>(null);
  const [pdfSubmitted, setPdfSubmitted] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useRevealSections();

  useEffect(() => {
    if (sessionStorage.getItem('zuraio-home-v4-demo-bar-dismissed') === 'true') return;
    const hero = heroRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setShowSticky(!entry.isIntersecting), { threshold: 0 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const dismissSticky = () => {
    sessionStorage.setItem('zuraio-home-v4-demo-bar-dismissed', 'true');
    setShowSticky(false);
  };

  return (
    <div className="w-full" style={{ backgroundColor: PAPER }}>
      <V4Styles />
      <ComparisonBanner currentVersion="refined" />

      <section ref={heroRef} className="w-full py-24 md:py-40" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 lg:px-20 xl:px-24 max-w-[1560px]">
          <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-12 lg:gap-14 items-center">
            <div className="max-w-[560px]">
              <p className="mb-6 inline-flex rounded-full px-4 py-2 text-sm font-semibold" style={{ backgroundColor: SOFT, color: INK }}>
                Controlled AI for Swiss companies
              </p>
              <h1 className="mb-6 text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl" style={{ color: INK }}>
                <span className="block">Use AI.</span>
                <span className="block">Keep control.</span>
              </h1>
              <p className="mb-10 max-w-[520px] text-lg leading-relaxed md:text-xl" style={{ color: MUTED }}>
                One Hub for your emails, documents and meetings — with residency, model choice and audit built in.
              </p>
              <div className="mb-5 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton to="/contact">Book a private demo</PrimaryButton>
                <GhostButton onClick={() => setActiveModal('video')}>Watch the 90-second tour</GhostButton>
              </div>
              <p className="text-sm" style={{ color: MUTED }}>Swiss-hosted options · FADP-aligned · Model-independent · Audit-ready</p>
            </div>
            <div className="relative flex justify-center items-center overflow-visible">
              <img
                src={heroImage}
                alt="Zuraio AI Hub product interface"
                className="relative z-10 w-full h-auto max-w-[720px] cursor-zoom-in scale-[1.08] rounded-lg transition-all duration-700 ease-out hover:z-30 hover:scale-[1.38] hover:opacity-90 lg:hover:-translate-x-[22%]"
                style={{
                  display: 'block',
                  transformOrigin: 'center'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-semibold md:text-5xl" style={{ color: INK }}>An AI Hub, plainly.</h2>
            <p className="text-xl leading-relaxed" style={{ color: BODY }}>
              An AI Hub is a single controlled layer that sits between your people and the AI models you choose to use. It connects approved company sources — emails, documents, meeting notes, CRM, project files — and routes each request through the right model, the right permissions and the right audit trail. You decide what data goes where. Zuraio is that layer.
            </p>
          </div>
          <HubDefinitionDiagram />
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mb-14 text-center">
          <h2 className="mb-5 text-4xl font-semibold md:text-5xl" style={{ color: INK }}>Your company knowledge is already there. It is just scattered.</h2>
          <p className="mx-auto max-w-[720px] text-xl" style={{ color: MUTED }}>Most teams spend 20–40% of their week searching, re-summarising and rebuilding context. Not because the information is missing — because it lives in too many places.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problemCards.map(([icon, title, description]) => (
            <div key={title} className="v4-card rounded-2xl border bg-white p-6" style={{ borderColor: BORDER }}>
              <Icon type={icon} className="v4-icon mb-5 h-6 w-6" />
              <h3 className="mb-3 text-xl font-semibold" style={{ color: INK }}>{title}</h3>
              <p style={{ color: BODY }}>{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section><div className="mb-12 text-center"><h2 className="mb-5 text-4xl font-semibold md:text-5xl" style={{ color: INK }}>One controlled layer. Many sources. Source-backed answers.</h2></div><DataFlowDiagram /></Section>

      <Section className="bg-white">
        <div className="mb-12">
          <h2 className="mb-4 text-4xl font-semibold md:text-5xl" style={{ color: INK }}>See it on real work.</h2>
          <p className="text-xl" style={{ color: MUTED }}>Four workflows your team will recognise. Each one runs through the Hub.</p>
        </div>
        <WorkflowTabs />
      </Section>

      <Section>
        <h2 className="mb-12 text-4xl font-semibold md:text-5xl" style={{ color: INK }}>A meeting brief, in 30 seconds.</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['1', 'You ask.', '"Brief me on the Acme meeting at 10."'],
            ['2', 'The Hub gathers.', 'Pulls from four approved sources, respecting your permissions.'],
            ['3', 'You get a brief.', 'With every source cited and every action logged.'],
          ].map(([number, title, body]) => (
            <div key={title} className="v4-card rounded-2xl border bg-white p-6" style={{ borderColor: BORDER }}>
              <p className="mb-4 font-serif text-5xl" style={{ color: MUTED }}>{number}</p>
              <h3 className="mb-3 text-xl font-semibold" style={{ color: INK }}>{title}</h3>
              <p style={{ color: BODY }}>{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        {/* TODO: replace placeholder customer name, role, photo and quote with a real
            reference once approved. Photo should be square, min 320×320, neutral
            background. Drop it at src/assets/customers/customer-1.jpg. */}
        <TestimonialCard />
      </Section>

      <Section className="bg-white">
        <div className="mb-12 text-center"><h2 className="text-4xl font-semibold md:text-5xl" style={{ color: INK }}>Less searching. Fewer missed details. Better-prepared teams.</h2></div>
        <BeforeAfter />
      </Section>

      <CustomerLogoStrip />

      <Section>
        <div className="mb-12">
          <h2 className="mb-4 text-4xl font-semibold md:text-5xl" style={{ color: INK }}>Serious technology. Clear controls.</h2>
          <p className="text-xl" style={{ color: MUTED }}>Four controls that decide where your data goes, who sees it, and how every action is reviewed.</p>
        </div>
        <ControlCards />
      </Section>

      <Section className="bg-white"><h2 className="mb-10 text-4xl font-semibold md:text-5xl" style={{ color: INK }}>You decide where each request runs.</h2><ModelRoutingDiagram /><p className="mt-6 text-center" style={{ color: MUTED }}>Sensitivity, task type and policy decide the route. You define the policy. The Hub enforces it.</p></Section>

      <Section><h2 className="mb-10 text-4xl font-semibold md:text-5xl" style={{ color: INK }}>Under the hood.</h2><ArchitectureDiagram /><div className="mt-8 text-center"><GhostButton to="/platform">View the full architecture</GhostButton></div></Section>

      <Section className="bg-white">
        <h2 className="mb-12 text-4xl font-semibold md:text-5xl" style={{ color: INK }}>Built for the way your teams actually work.</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {personas.map(([title, examples]) => (
            <div key={title} className="v4-card rounded-2xl border bg-white p-6" style={{ borderColor: BORDER }}>
              <Icon type="person" className="mb-5 h-7 w-7" />
              <h3 className="mb-4 text-xl font-semibold" style={{ color: INK }}>{title}</h3>
              <ul className="space-y-2" style={{ color: BODY }}>{examples.map((example) => <li key={example}>• {example}</li>)}</ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-12 text-center"><h2 className="text-4xl font-semibold md:text-5xl" style={{ color: INK }}>Start at your own pace.</h2></div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="v4-card rounded-2xl border p-8" style={{ backgroundColor: SOFT, borderColor: RED }}><h3 className="mb-4 text-2xl font-semibold" style={{ color: INK }}>Book a private demo</h3><p className="mb-6" style={{ color: BODY }}>30 minutes. We walk through your systems, data-control needs and the first workflow where Zuraio could help.</p><PrimaryButton to="/contact">Book a private demo</PrimaryButton></div>
          <div className="v4-card rounded-2xl border bg-white p-8" style={{ borderColor: BORDER }}><h3 className="mb-4 text-2xl font-semibold" style={{ color: INK }}>Download the Swiss data-control guide</h3><p className="mb-6" style={{ color: BODY }}>A short PDF for IT and legal. Architecture, residency options, model routing, auditability.</p><GhostButton onClick={() => setActiveModal('pdf')}>Get the PDF</GhostButton></div>
          <div className="v4-card rounded-2xl border bg-white p-8" style={{ borderColor: BORDER }}><h3 className="mb-4 text-2xl font-semibold" style={{ color: INK }}>Watch the 90-second tour</h3><p className="mb-6" style={{ color: BODY }}>See the Hub running on a real meeting brief and a real email summary.</p><GhostButton onClick={() => setActiveModal('video')}>Watch the tour</GhostButton></div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <h2 className="mb-6 text-4xl font-semibold md:text-5xl" style={{ color: INK }}>We built the layer we wanted to use ourselves.</h2>
            <p className="text-xl leading-relaxed" style={{ color: BODY }}>Zuraio started because we needed a better way to prepare, search, summarise, draft and follow up — without handing sensitive company knowledge to uncontrolled tools. <em>We built the layer we wanted to use ourselves.</em></p>
          </div>
          <div className="text-center">
            {/* TODO: drop a real founder headshot at src/assets/founders/founder-1.jpg
                (square, min 320×320, neutral background). Replace placeholder name + title
                at the same time. Until the asset exists, the silhouette fallback renders. */}
            <FounderPhotoSlot />
            <p className="font-semibold" style={{ color: INK }}>[Founder Name]</p>
            <p style={{ color: MUTED }}>Co-founder & CEO</p>
            <SwissContextPhotoSlot />
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-semibold md:text-5xl" style={{ color: INK }}>See what controlled AI could do inside your company.</h2>
          <p className="mb-8 text-xl" style={{ color: MUTED }}>We will walk through your current systems, data-control needs and the first workflows where Zuraio could help.</p>
          <PrimaryButton to="/contact">Book a private demo</PrimaryButton>
          <p className="mt-5 text-sm" style={{ color: MUTED }}>Your enquiry will be handled confidentially.</p>
        </div>
      </Section>

      <StickyDemoBar show={showSticky} onDemo={() => setActiveModal('video')} onDismiss={dismissSticky} />

      {activeModal === 'video' && (
        <Modal title="90-second tour" onClose={() => setActiveModal(null)}>
          <div className="relative overflow-hidden rounded-xl border" style={{ borderColor: BORDER }}>
            <video className="aspect-video w-full bg-black" poster="/2602029_Zuraio_Logo.svg" controls aria-label="Zuraio demo video placeholder" />
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 text-lg font-semibold" style={{ color: INK }}>Demo video coming soon</div>
          </div>
        </Modal>
      )}

      {activeModal === 'pdf' && (
        <Modal title="Swiss data-control guide" onClose={() => setActiveModal(null)}>
          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              console.log('PDF guide requested');
              setPdfSubmitted(true);
            }}
          >
            <label className="block font-medium" style={{ color: INK }} htmlFor="v4-pdf-email">Email</label>
            <input id="v4-pdf-email" required type="email" className="v4-focus w-full rounded-lg border px-4 py-3" style={{ borderColor: BORDER }} placeholder="you@company.ch" />
            <PrimaryButton>Send me the guide</PrimaryButton>
            {pdfSubmitted && <p className="rounded-lg px-4 py-3" style={{ backgroundColor: SOFT, color: INK }}>Thanks — we'll send it shortly.</p>}
          </form>
        </Modal>
      )}
    </div>
  );
}

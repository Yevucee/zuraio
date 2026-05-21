import { V5 } from '../tokens';
import { V5Section } from './V5Section';

function PillIcon({ type }: { type: string }) {
  const common = {
    fill: 'none' as const,
    stroke: V5.dataTeal,
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      {type === 'hosting' && (
        <>
          <rect x="4" y="4" width="16" height="16" rx="3" {...common} />
          <path d="M12 7.5v9M7.5 12h9" {...common} />
        </>
      )}
      {type === 'audit' && (
        <>
          <path d="M7 3h7l4 4v14H7z" {...common} />
          <path d="M14 3v5h4M9 14l2 2 4-5" {...common} />
        </>
      )}
      {type === 'model' && (
        <>
          <path d="M5 6h5a4 4 0 0 1 4 4v8" {...common} />
          <path d="M14 10a4 4 0 0 1 4-4h1" {...common} />
        </>
      )}
      {type === 'setup' && (
        <>
          <circle cx="12" cy="8" r="3" {...common} />
          <path d="M5 20a7 7 0 0 1 14 0" {...common} />
        </>
      )}
    </svg>
  );
}

const pills = [
  { icon: 'hosting', label: 'Swiss, local-country or on-premise hosting' },
  { icon: 'audit', label: 'Designed for upcoming AI audits' },
  { icon: 'model', label: 'Model-independent' },
  { icon: 'setup', label: 'Personal setup support' },
] as const;

export function TrustPillRow() {
  return (
    <V5Section background="soft">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {pills.map(({ icon, label }) => (
          <div
            key={label}
            className="v5-card flex items-center gap-3 rounded-xl border px-4 py-4 text-sm font-medium"
            style={{ borderColor: V5.hairline, backgroundColor: '#FFFFFF', color: V5.ink }}
          >
            <PillIcon type={icon} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </V5Section>
  );
}

export type ControlIconType =
  | 'swiss-hosting'
  | 'on-premise'
  | 'access'
  | 'sources'
  | 'model'
  | 'review';

const stroke = {
  fill: 'none' as const,
  stroke: 'var(--zuraio-olive)',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function ControlIcon({ type }: { type: ControlIconType }) {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
      style={{ backgroundColor: 'var(--soft-olive)' }}
      aria-hidden="true"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        {type === 'swiss-hosting' && (
          <>
            <rect x="4" y="8" width="16" height="12" rx="2" {...stroke} />
            <path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3M12 12v4" {...stroke} />
          </>
        )}
        {type === 'on-premise' && (
          <>
            <rect x="3" y="4" width="7" height="16" rx="1" {...stroke} />
            <rect x="14" y="7" width="7" height="13" rx="1" {...stroke} />
            <path d="M5 8h3M5 12h3M16 10h3M16 14h3" {...stroke} />
          </>
        )}
        {type === 'access' && (
          <>
            <circle cx="9" cy="8" r="3" {...stroke} />
            <path d="M4 20a5 5 0 0 1 10 0M17 11l2 2 3-4" {...stroke} />
          </>
        )}
        {type === 'sources' && (
          <>
            <path d="M8 4h8l2 3v13H6V7l2-3z" {...stroke} />
            <path d="M10 11h4M10 15h4" {...stroke} />
          </>
        )}
        {type === 'model' && (
          <>
            <circle cx="6" cy="12" r="2" {...stroke} />
            <circle cx="18" cy="8" r="2" {...stroke} />
            <circle cx="18" cy="16" r="2" {...stroke} />
            <path d="M8 12h4M14 9l2-1M14 15l2 1" {...stroke} />
          </>
        )}
        {type === 'review' && (
          <>
            <rect x="6" y="4" width="12" height="16" rx="2" {...stroke} />
            <path d="M9 9h6M9 13h4M9 17l2 2 4-4" {...stroke} />
          </>
        )}
      </svg>
    </span>
  );
}

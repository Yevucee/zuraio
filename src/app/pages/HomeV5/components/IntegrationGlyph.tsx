import { V5 } from '../tokens';

interface IntegrationGlyphProps {
  label: string;
  className?: string;
}

export function IntegrationGlyph({ label, className = '' }: IntegrationGlyphProps) {
  return (
    <div
      className={`flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 ${className}`}
      style={{ borderColor: V5.hairline, backgroundColor: '#FFFFFF' }}
      aria-label={label}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="4"
          stroke={V5.inkMuted}
          strokeWidth="1.5"
        />
        <path
          d="M8 12h8M12 8v8"
          stroke={V5.olive}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-sm font-medium whitespace-nowrap" style={{ color: V5.ink }}>
        {label}
      </span>
    </div>
  );
}

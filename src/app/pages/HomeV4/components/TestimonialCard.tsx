import { useState } from 'react';

const RED = '#C8102E';
const SOFT = '#F4EDDB';
const BORDER = '#E5E1D5';
const INK = '#0B1424';
const BODY = '#1F2937';
const MUTED = '#6B7280';

interface TestimonialCardProps {
  quote?: string;
  name?: string;
  role?: string;
  company?: string;
  photoSrc?: string;
  isSwiss?: boolean;
}

export function SilhouetteAvatar({ size = 56, className = '' }: { size?: number; className?: string }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full border ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: SOFT,
        borderColor: SOFT,
        boxShadow: 'inset 0 1px 2px rgba(11,20,36,0.04)',
      }}
      aria-hidden="true"
    >
      <svg width={Math.round(size * 0.62)} height={Math.round(size * 0.62)} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="23" r="11" stroke={MUTED} strokeWidth="2" />
        <path d="M14 55c3.6-11.2 10-16.8 18-16.8S46.4 43.8 50 55" stroke={MUTED} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function SwissChip() {
  return (
    <span
      className="inline-flex items-center gap-2 rounded px-2 py-1 text-[11px]"
      style={{ border: `1px solid ${BORDER}`, color: MUTED }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4" stroke={RED} strokeWidth="1.5" />
        <path d="M12 7.5v9M7.5 12h9" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      Switzerland
    </span>
  );
}

export function TestimonialCard({
  quote = 'Zuraio gave us AI inside the company without giving up control of our data. Our team prepares for meetings in minutes, not hours.',
  name = '[Customer Name]',
  role = '[Role]',
  company = '[Company]',
  photoSrc = 'src/assets/customers/customer-1.jpg',
  isSwiss = true,
}: TestimonialCardProps) {
  const [hasPhotoError, setHasPhotoError] = useState(false);

  return (
    <article className="v4-card mx-auto max-w-[760px] rounded-2xl border bg-white p-8 md:p-12 lg:p-14" style={{ borderColor: BORDER }}>
      <h3 className="mb-8 text-2xl font-semibold leading-[1.4] md:text-3xl" style={{ color: INK }}>
        “{quote}”
      </h3>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {hasPhotoError ? (
          <SilhouetteAvatar size={56} />
        ) : (
          <img
            src={photoSrc}
            alt="Customer portrait placeholder"
            className="h-14 w-14 shrink-0 rounded-full border object-cover"
            style={{ borderColor: BORDER }}
            onError={() => setHasPhotoError(true)}
          />
        )}
        <div className="flex-1">
          <p className="font-semibold" style={{ color: INK }}>
            {name}
          </p>
          <p className="text-sm" style={{ color: MUTED }}>
            {role}, {company}
          </p>
        </div>
        {isSwiss && <SwissChip />}
      </div>
      <p className="mt-5 text-sm" style={{ color: BODY }}>
        Customer reference placeholder.
      </p>
    </article>
  );
}

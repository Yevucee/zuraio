import { Link } from 'react-router-dom';

interface ComparisonBannerProps {
  currentVersion: 'original' | 'revised' | 'product-led' | 'refined' | 'motion-led';
}

const options = [
  { id: 'original', label: 'Original', to: '/home-original' },
  { id: 'revised', label: 'Visual / Photo-led', to: '/home-revised' },
  { id: 'product-led', label: 'Product-led', to: '/home-product-led' },
  { id: 'refined', label: 'Refined', to: '/home-v4' },
  { id: 'motion-led', label: 'Home v5 — Motion-led', to: '/home-v5' },
] as const;

export function ComparisonBanner({ currentVersion }: ComparisonBannerProps) {
  return (
    <div className="w-full border-b py-3" style={{ backgroundColor: 'var(--soft-olive)', borderColor: 'rgba(70, 70, 70, 0.16)' }}>
      <div className="container mx-auto px-6 max-w-[1320px]">
        <div className="flex items-center justify-center gap-3 text-sm flex-wrap">
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--deep-charcoal)' }}>
            HOMEPAGE OPTIONS:
          </span>
          {options.map((option) => {
            const isActive = currentVersion === option.id;

            return (
              <Link
                key={option.id}
                to={option.to}
                className={`px-3 py-1 rounded transition-colors ${isActive ? 'font-semibold' : ''}`}
                style={{
                  backgroundColor: isActive ? 'var(--zuraio-olive)' : 'transparent',
                  color: isActive ? 'var(--paper-white)' : 'var(--deep-charcoal)',
                }}
              >
                {option.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

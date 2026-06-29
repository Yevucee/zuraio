import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/I18nProvider';

interface ComparisonBannerProps {
  currentVersion: 'original' | 'revised' | 'product-led' | 'refined' | 'motion-led' | 'swiss-one-page';
}

const optionIds = [
  { id: 'original' as const, to: '/home-original' },
  { id: 'revised' as const, to: '/home-revised' },
  { id: 'product-led' as const, to: '/home-product-led' },
  { id: 'refined' as const, to: '/home-v4' },
  { id: 'motion-led' as const, to: '/home-v5' },
  { id: 'swiss-one-page' as const, to: '/home-v6' },
];

const heroComparisonHref = './zuraio-comparison/index.html?hero=1&lang=en';

export function ComparisonBanner({ currentVersion }: ComparisonBannerProps) {
  const { messages: m } = useI18n();
  const labels = m.common.comparison;

  const options = [
    { id: optionIds[0].id, label: labels.original, to: optionIds[0].to },
    { id: optionIds[1].id, label: labels.revised, to: optionIds[1].to },
    { id: optionIds[2].id, label: labels.productLed, to: optionIds[2].to },
    { id: optionIds[3].id, label: labels.refined, to: optionIds[3].to },
    { id: optionIds[4].id, label: labels.motionLed, to: optionIds[4].to },
    { id: optionIds[5].id, label: labels.swissOnePage, to: optionIds[5].to },
  ];

  return (
    <div className="w-full border-b py-3" style={{ backgroundColor: 'var(--soft-olive)', borderColor: 'rgba(70, 70, 70, 0.16)' }}>
      <div className="container mx-auto px-6 max-w-[1320px]">
        <div className="flex items-center justify-center gap-3 text-sm flex-wrap">
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--deep-charcoal)' }}>
            {labels.label}
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
          <a
            href={heroComparisonHref}
            className="px-3 py-1 rounded transition-colors border"
            style={{
              borderColor: 'rgba(70, 70, 70, 0.2)',
              color: 'var(--deep-charcoal)',
            }}
          >
            {labels.heroComparison}
          </a>
        </div>
      </div>
    </div>
  );
}

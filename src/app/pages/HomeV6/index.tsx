import { useEffect } from 'react';
import { ComparisonBanner } from '../../components/ComparisonBanner';
import { V6Styles } from './components/V6Styles';
import { HeroV6 } from './components/HeroV6';
import { ToolStrip } from './components/ToolStrip';
import { DailyWorkCards } from './components/DailyWorkCards';
import { ProductExamples } from './components/ProductExamples';
import { ControlSection } from './components/ControlSection';
import { AuditReadinessSection } from './components/AuditReadinessSection';
import { FounderSection } from './components/FounderSection';
import { FinalCTA } from './components/FinalCTA';
import { useReducedMotion } from './components/hooks/useReducedMotion';

function useRevealSections() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      document.querySelectorAll('.v6-reveal').forEach((el) => el.classList.add('v6-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('v6-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.v6-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [reducedMotion]);
}

export default function HomeV6() {
  useRevealSections();

  return (
    <div className="v6-page w-full">
      <V6Styles />
      <ComparisonBanner currentVersion="swiss-one-page" />
      <HeroV6 />
      <ToolStrip />
      <DailyWorkCards />
      <ProductExamples />
      <ControlSection />
      <AuditReadinessSection />
      <FounderSection />
      <FinalCTA />
    </div>
  );
}

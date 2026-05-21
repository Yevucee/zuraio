import { useEffect } from 'react';
import { ComparisonBanner } from '../../components/ComparisonBanner';
import { V5Styles } from './components/V5Styles';
import { HeroV5 } from './components/HeroV5';
import { IntegrationsMarquee } from './components/IntegrationsMarquee';
import { TrustPillRow } from './components/TrustPillRow';
import { FeatureRow } from './components/FeatureRow';
import { ControlSection } from './components/ControlSection';
import { IntegrationBento } from './components/IntegrationBento';
import { HowItWorks } from './components/HowItWorks';
import { TestimonialSection } from './components/TestimonialSection';
import { LogoStrip } from './components/LogoStrip';
import { SecurityBand } from './components/SecurityBand';
import { FinalCTA } from './components/FinalCTA';
import { useReducedMotion } from './components/hooks/useReducedMotion';

function useRevealSections() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      document.querySelectorAll('.v5-reveal').forEach((section) => section.classList.add('v5-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('v5-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll('.v5-reveal').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [reducedMotion]);
}

export default function HomeV5() {
  useRevealSections();

  return (
    <div className="v5-page w-full">
      <V5Styles />
      <ComparisonBanner currentVersion="motion-led" />
      <HeroV5 />
      <IntegrationsMarquee />
      <TrustPillRow />
      <FeatureRow variant="email" />
      <FeatureRow variant="meetings" reverse />
      <FeatureRow variant="knowledge" />
      <ControlSection />
      <IntegrationBento />
      <HowItWorks />
      <TestimonialSection />
      <LogoStrip />
      <SecurityBand />
      <FinalCTA />
    </div>
  );
}

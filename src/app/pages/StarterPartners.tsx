import { Button } from '../components/Button';
import { SectionPurpose } from '../components/SectionPurpose';
import { useI18n } from '../../i18n/I18nProvider';

export default function StarterPartners() {
  const { messages: m } = useI18n();
  const p = m.pages.starterPartners;

  return (
    <div className="w-full">
      <section className="w-full py-20 md:py-32" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This page positions the starter partner route as selective, practical and collaborative.
          </SectionPurpose>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
              {p.hero.title}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              {p.hero.body}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section qualifies the right type of partner and avoids attracting purely experimental interest.
          </SectionPurpose>
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {p.who.title}
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {p.who.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 items-start p-6 rounded-lg"
                  style={{ backgroundColor: 'var(--paper-white)' }}
                >
                  <span className="text-2xl" style={{ color: 'var(--zuraio-olive)' }}>•</span>
                  <span className="text-xl" style={{ color: 'var(--charcoal)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section explains the value of becoming an early partner without overcommitting on unconfirmed commercial terms.
          </SectionPurpose>
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {p.expect.title}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {p.expect.items.map((item) => (
              <div key={item} className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
                <p className="text-xl" style={{ color: 'var(--charcoal)' }}>• {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section reduces perceived implementation risk by showing a measured rollout process.
          </SectionPurpose>
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {p.start.title}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {p.start.steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 items-start p-6 rounded-lg"
                style={{ backgroundColor: 'var(--paper-white)' }}
              >
                <span className="text-3xl font-semibold" style={{ color: 'var(--zuraio-olive)' }}>
                  {index + 1}
                </span>
                <div>
                  <p className="text-xl font-semibold mb-2" style={{ color: 'var(--deep-charcoal)' }}>
                    {step.title}
                  </p>
                  <p style={{ color: 'var(--charcoal)' }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section converts qualified interest into a private founder-led conversation.
          </SectionPurpose>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--paper-white)' }}>
              {p.cta.title}
            </h2>
            <Button to="/contact" className="bg-white text-[var(--zuraio-olive)] hover:bg-white/90">
              {p.cta.button}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

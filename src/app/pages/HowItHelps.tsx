import { Button } from '../components/Button';
import { SectionPurpose } from '../components/SectionPurpose';
import { useI18n } from '../../i18n/I18nProvider';

export default function HowItHelps() {
  const { messages: m } = useI18n();
  const p = m.pages.howItHelps;

  return (
    <div className="w-full">
      <section className="w-full py-20 md:py-32" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This page helps visitors understand where Zuraio creates value in normal daily work.
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
            This section shows that Zuraio is useful for everyday work, not only for technical or experimental AI use cases.
          </SectionPurpose>
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {p.workflows.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {p.workflows.cards.map((card) => (
              <div key={card.title} className="p-8 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                  {card.title}
                </h3>
                <p className="text-lg mb-4" style={{ color: 'var(--charcoal)' }}>{card.body}</p>
                <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
                  {p.workflows.examplesLabel}
                </p>
                <ul className="space-y-2">
                  {card.examples.map((example) => (
                    <li key={example} style={{ color: 'var(--charcoal)' }}>• {example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section helps each visitor see how Zuraio applies to their role or department.
          </SectionPurpose>
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {p.roles.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {p.roles.cards.map((card) => (
              <div key={card.title} className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} style={{ color: 'var(--charcoal)' }}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section moves practical interest into a consultation around the visitor's own company setup.
          </SectionPurpose>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--paper-white)' }}>
              {p.cta.title}
            </h2>
            <Button to="/contact" className="bg-white text-[var(--zuraio-olive)] hover:bg-white/90">
              {m.common.buttons.bookPrivateDemo}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

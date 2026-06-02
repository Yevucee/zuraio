import { Button } from '../components/Button';
import { SectionPurpose } from '../components/SectionPurpose';
import { useI18n } from '../../i18n/I18nProvider';

function FlowArrow() {
  return (
    <div className="flex items-center justify-center">
      <svg width="2" height="40" style={{ stroke: 'var(--charcoal)', strokeWidth: 2 }}>
        <line x1="1" y1="0" x2="1" y2="40" />
      </svg>
    </div>
  );
}

export default function Platform() {
  const { messages: m } = useI18n();
  const p = m.pages.platform;
  const d = p.diagram;

  return (
    <div className="w-full">
      <section className="w-full py-20 md:py-32" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This page explains the platform in simple terms before directing technical readers to the architecture page.
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
            This section gives non-technical buyers a simple mental model of the product.
          </SectionPurpose>
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {d.title}
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-6">
              <div className="w-full p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>{d.people}</p>
              </div>
              <FlowArrow />
              <div className="w-full p-8 rounded-lg text-center" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
                <p className="text-2xl font-semibold" style={{ color: 'var(--paper-white)' }}>{d.hub}</p>
              </div>
              <FlowArrow />
              <div className="w-full p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>{d.middle}</p>
              </div>
              <FlowArrow />
              <div className="w-full p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>{d.outputs}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section introduces the product architecture using business-friendly language.
          </SectionPurpose>
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {p.layers.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {p.layers.cards.map((card) => (
              <div key={card.title} className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                  {card.title}
                </h3>
                <p className="text-lg" style={{ color: 'var(--charcoal)' }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section connects the platform structure back to operational business outcomes.
          </SectionPurpose>
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {p.enables.title}
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {p.enables.items.map((item) => (
                <li key={item} className="flex gap-4 items-start">
                  <span className="text-2xl" style={{ color: 'var(--zuraio-olive)' }}>•</span>
                  <span className="text-xl" style={{ color: 'var(--charcoal)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section invites visitors to discuss integration possibilities without forcing technical decisions too early.
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

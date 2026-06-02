import { Button } from '../components/Button';
import { SectionPurpose } from '../components/SectionPurpose';
import { useI18n } from '../../i18n/I18nProvider';

export default function DataControl() {
  const { messages: m } = useI18n();
  const p = m.pages.dataControl;

  return (
    <div className="w-full">
      <section className="w-full py-20 md:py-32" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This page reassures cautious buyers that data control is central to the product, not an afterthought.
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
            This section explains the real commercial sensitivity of company data in plain business language.
          </SectionPurpose>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--deep-charcoal)' }}>
              {p.why.title}
            </h2>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>{p.why.body}</p>
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section frames Zuraio as the responsible choice by helping buyers ask harder questions of any AI provider.
          </SectionPurpose>
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {p.questions.title}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {p.questions.items.map((item) => (
              <div key={item} className="p-6 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
                <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section translates the trust promise into concrete product principles.
          </SectionPurpose>
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {p.design.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {p.design.cards.map((card) => (
              <div key={card.title} className="p-8 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                  {card.title}
                </h3>
                <p className="text-lg" style={{ color: 'var(--charcoal)' }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section makes the competitive difference clear without using aggressive or legally risky language.
          </SectionPurpose>
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {p.compare.title}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto">
              <thead>
                <tr className="border-b-2" style={{ borderColor: 'var(--charcoal)' }}>
                  <th className="text-left p-4 font-semibold text-lg" style={{ color: 'var(--deep-charcoal)' }}>
                    {p.compare.headers.question}
                  </th>
                  <th className="text-left p-4 font-semibold text-lg" style={{ color: 'var(--deep-charcoal)' }}>
                    {p.compare.headers.generic}
                  </th>
                  <th className="text-left p-4 font-semibold text-lg" style={{ color: 'var(--zuraio-olive)' }}>
                    {p.compare.headers.zuraio}
                  </th>
                </tr>
              </thead>
              <tbody>
                {p.compare.rows.map((row, index) => (
                  <tr
                    key={row.question}
                    className={index < p.compare.rows.length - 1 ? 'border-b' : ''}
                    style={{ borderColor: 'var(--charcoal)' }}
                  >
                    <td className="p-4 font-medium" style={{ color: 'var(--deep-charcoal)' }}>{row.question}</td>
                    <td className="p-4" style={{ color: 'var(--charcoal)' }}>{row.generic}</td>
                    <td className="p-4 font-medium" style={{ color: 'var(--deep-charcoal)' }}>{row.zuraio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section gives concerned buyers a private route to discuss sensitive questions.
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

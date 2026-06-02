import { Button } from '../components/Button';
import { SectionPurpose } from '../components/SectionPurpose';
import { useI18n } from '../../i18n/I18nProvider';

function TealArrow() {
  return (
    <div className="flex items-center justify-center">
      <svg width="2" height="40" style={{ stroke: 'var(--data-teal)', strokeWidth: 2 }}>
        <line x1="1" y1="0" x2="1" y2="40" />
      </svg>
    </div>
  );
}

function TextSection({ title, body, background }: { title: string; body: string; background: 'white' | 'grey' }) {
  return (
    <section
      className="w-full py-20"
      style={{ backgroundColor: background === 'white' ? 'var(--paper-white)' : 'var(--cloud-grey)' }}
    >
      <div className="container mx-auto px-6 max-w-[1320px]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--deep-charcoal)' }}>
            {title}
          </h2>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>{body}</p>
        </div>
      </div>
    </section>
  );
}

export default function TechnicalArchitecture() {
  const { messages: m } = useI18n();
  const p = m.pages.technicalArchitecture;

  return (
    <div className="w-full">
      <section className="w-full py-20 md:py-32" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This page gives technical stakeholders enough depth to take Zuraio seriously and support a buying conversation.
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
            This section gives technical readers a high-level view of the system flow.
          </SectionPurpose>
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {p.flow.title}
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-6">
              {p.flow.steps.map((step, index) => {
                const isHub = index === 2;
                const isFirstOrLast = index === 0 || index === p.flow.steps.length - 1;

                return (
                  <div key={step} className="w-full flex flex-col items-center gap-6">
                    {index > 0 && <TealArrow />}
                    <div
                      className={`w-full rounded-lg text-center ${isFirstOrLast ? 'p-6 border-2' : isHub ? 'p-8' : 'p-6'}`}
                      style={
                        isHub
                          ? { backgroundColor: 'var(--zuraio-olive)' }
                          : isFirstOrLast
                            ? { borderColor: 'var(--data-teal)', backgroundColor: 'var(--paper-white)' }
                            : { backgroundColor: 'var(--soft-olive)' }
                      }
                    >
                      <p
                        className={`font-semibold ${isHub ? 'text-2xl' : 'text-xl'}`}
                        style={{ color: isHub ? 'var(--paper-white)' : 'var(--deep-charcoal)' }}
                      >
                        {step}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <TextSection title={p.residency.title} body={p.residency.body} background="white" />
      <TextSection title={p.routing.title} body={p.routing.body} background="grey" />
      <TextSection title={p.permissions.title} body={p.permissions.body} background="white" />
      <TextSection title={p.knowledge.title} body={p.knowledge.body} background="grey" />
      <TextSection title={p.audit.title} body={p.audit.body} background="white" />
      <TextSection title={p.integrations.title} body={p.integrations.body} background="grey" />

      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section lowers implementation anxiety by showing a staged rollout process.
          </SectionPurpose>
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {p.rollout.title}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {p.rollout.steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 items-start p-6 rounded-lg"
                style={{ backgroundColor: 'var(--cloud-grey)' }}
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
            This section moves technical readers towards a deeper private discussion.
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

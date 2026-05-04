import { Button } from '../components/Button';
import { SectionPurpose } from '../components/SectionPurpose';

export default function DataControl() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This page reassures cautious buyers that data control is central to the product, not an afterthought.
          </SectionPurpose>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
              Keep control of company data while using AI.
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              Zuraio AI Hub is designed for companies that want AI benefits without uncontrolled data exposure, unclear model routing or generic external processing.
            </p>
          </div>
        </div>
      </section>

      {/* Why Data Control Matters */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section explains the real commercial sensitivity of company data in plain business language.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--deep-charcoal)' }}>
              Company knowledge is more than information.
            </h2>

            <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              Company knowledge includes client context, pricing, negotiations, internal decisions, project history, employee knowledge and commercial judgement. Once that knowledge enters uncontrolled tools, companies may lose visibility over where it goes and how it is used.
            </p>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section frames Zuraio as the responsible choice by helping buyers ask harder questions of any AI provider.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            Six questions before using AI with company data.
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
                1. Where is our data processed?
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
                2. Can we decide which model handles which task?
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
                3. Can users only access what they are allowed to access?
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
                4. Can we review which sources were used?
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
                5. Can we prevent sensitive data from going to the wrong place?
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
                6. Can the system adapt to our internal processes?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Zuraio is Designed */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section translates the trust promise into concrete product principles.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            Control built into the design.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Configurable data residency
              </h3>
              <p className="text-lg" style={{ color: 'var(--charcoal)' }}>
                Deployment and storage options are designed to reflect the company's data-control requirements.
              </p>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Model choice
              </h3>
              <p className="text-lg" style={{ color: 'var(--charcoal)' }}>
                Requests can be routed to different models depending on sensitivity, task type and policy.
              </p>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Permissions
              </h3>
              <p className="text-lg" style={{ color: 'var(--charcoal)' }}>
                Access can be structured around roles, users and approved data sources.
              </p>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Auditability
              </h3>
              <p className="text-lg" style={{ color: 'var(--charcoal)' }}>
                Workflows are designed so sources, actions and model usage are easier to review.
              </p>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Company-specific knowledge
              </h3>
              <p className="text-lg" style={{ color: 'var(--charcoal)' }}>
                AI assistance can be connected to approved internal knowledge instead of relying only on generic model memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Contrast */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section makes the competitive difference clear without using aggressive or legally risky language.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            A different approach to business AI.
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto">
              <thead>
                <tr className="border-b-2" style={{ borderColor: 'var(--charcoal)' }}>
                  <th className="text-left p-4 font-semibold text-lg" style={{ color: 'var(--deep-charcoal)' }}>Question</th>
                  <th className="text-left p-4 font-semibold text-lg" style={{ color: 'var(--deep-charcoal)' }}>Generic cloud AI</th>
                  <th className="text-left p-4 font-semibold text-lg" style={{ color: 'var(--zuraio-olive)' }}>Zuraio AI Hub</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'var(--charcoal)' }}>
                  <td className="p-4 font-medium" style={{ color: 'var(--deep-charcoal)' }}>Who controls the model route?</td>
                  <td className="p-4" style={{ color: 'var(--charcoal)' }}>Often platform-defined</td>
                  <td className="p-4 font-medium" style={{ color: 'var(--deep-charcoal)' }}>Designed for model choice</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--charcoal)' }}>
                  <td className="p-4 font-medium" style={{ color: 'var(--deep-charcoal)' }}>Where is data processed?</td>
                  <td className="p-4" style={{ color: 'var(--charcoal)' }}>May depend on provider</td>
                  <td className="p-4 font-medium" style={{ color: 'var(--deep-charcoal)' }}>Designed for configurable residency</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--charcoal)' }}>
                  <td className="p-4 font-medium" style={{ color: 'var(--deep-charcoal)' }}>Is knowledge company-specific?</td>
                  <td className="p-4" style={{ color: 'var(--charcoal)' }}>Often limited or generic</td>
                  <td className="p-4 font-medium" style={{ color: 'var(--deep-charcoal)' }}>Built around internal sources</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--charcoal)' }}>
                  <td className="p-4 font-medium" style={{ color: 'var(--deep-charcoal)' }}>Can usage be reviewed?</td>
                  <td className="p-4" style={{ color: 'var(--charcoal)' }}>Often limited</td>
                  <td className="p-4 font-medium" style={{ color: 'var(--deep-charcoal)' }}>Designed around auditability</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium" style={{ color: 'var(--deep-charcoal)' }}>Can it fit internal workflows?</td>
                  <td className="p-4" style={{ color: 'var(--charcoal)' }}>Often standardised</td>
                  <td className="p-4 font-medium" style={{ color: 'var(--deep-charcoal)' }}>Modular and integration-led</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section gives concerned buyers a private route to discuss sensitive questions.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--paper-white)' }}>
              Discuss your data-control requirements.
            </h2>

            <Button to="/contact" className="bg-white text-[var(--zuraio-olive)] hover:bg-white/90">
              Book a private demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Button } from '../components/Button';
import { SectionPurpose } from '../components/SectionPurpose';

export default function TechnicalArchitecture() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This page gives technical stakeholders enough depth to take Zuraio seriously and support a buying conversation.
          </SectionPurpose>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
              Technical architecture for controlled AI adoption.
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              A deeper look at how Zuraio AI Hub manages routing, agents, models, permissions, data access and auditability.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section gives technical readers a high-level view of the system flow.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            A controlled route from request to output.
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-6">
              <div className="w-full p-6 rounded-lg border-2 text-center" style={{ borderColor: 'var(--data-teal)', backgroundColor: 'var(--paper-white)' }}>
                <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>User request</p>
              </div>

              <div className="flex items-center justify-center">
                <svg width="2" height="40" style={{ stroke: 'var(--data-teal)', strokeWidth: 2 }}>
                  <line x1="1" y1="0" x2="1" y2="40" />
                </svg>
              </div>

              <div className="w-full p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>Governance and permissions</p>
              </div>

              <div className="flex items-center justify-center">
                <svg width="2" height="40" style={{ stroke: 'var(--data-teal)', strokeWidth: 2 }}>
                  <line x1="1" y1="0" x2="1" y2="40" />
                </svg>
              </div>

              <div className="w-full p-8 rounded-lg text-center" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
                <p className="text-2xl font-semibold" style={{ color: 'var(--paper-white)' }}>AI Hub orchestration</p>
              </div>

              <div className="flex items-center justify-center">
                <svg width="2" height="40" style={{ stroke: 'var(--data-teal)', strokeWidth: 2 }}>
                  <line x1="1" y1="0" x2="1" y2="40" />
                </svg>
              </div>

              <div className="w-full p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>Agents / models / tools</p>
              </div>

              <div className="flex items-center justify-center">
                <svg width="2" height="40" style={{ stroke: 'var(--data-teal)', strokeWidth: 2 }}>
                  <line x1="1" y1="0" x2="1" y2="40" />
                </svg>
              </div>

              <div className="w-full p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>Source-backed output</p>
              </div>

              <div className="flex items-center justify-center">
                <svg width="2" height="40" style={{ stroke: 'var(--data-teal)', strokeWidth: 2 }}>
                  <line x1="1" y1="0" x2="1" y2="40" />
                </svg>
              </div>

              <div className="w-full p-6 rounded-lg border-2 text-center" style={{ borderColor: 'var(--data-teal)', backgroundColor: 'var(--paper-white)' }}>
                <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>Audit and review layer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Residency */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section reassures buyers that deployment can be discussed around their requirements rather than forced into one pattern.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--deep-charcoal)' }}>
              Designed for configurable deployment choices.
            </h2>

            <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              Zuraio is designed to support deployment and storage choices that reflect company data-control needs. The right model depends on the organisation, use case, sensitivity of data and agreed technical setup.
            </p>
          </div>
        </div>
      </section>

      {/* Model Routing */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section explains model independence and reduces fear of vendor lock-in.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--deep-charcoal)' }}>
              Use the right model for the right task.
            </h2>

            <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              Zuraio is designed to route work to different AI models depending on sensitivity, task type, policy and deployment model. This can include cloud, open-source or local model options where appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* Permissions */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section shows that AI access is not treated as separate from company governance.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--deep-charcoal)' }}>
              Access should follow company rules.
            </h2>

            <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              Zuraio is designed around permissions, roles and approved data sources so that AI assistance reflects the company's access model.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Knowledge / RAG */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section explains how Zuraio moves beyond generic AI answers.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--deep-charcoal)' }}>
              Company-specific answers need company-specific sources.
            </h2>

            <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              Zuraio can connect approved documents and sources to AI assistance so that users receive source-backed answers based on relevant internal knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Audit and Logging */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section gives technical and compliance-minded stakeholders confidence that usage can be reviewed.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--deep-charcoal)' }}>
              Designed for reviewable workflows.
            </h2>

            <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              Requests, model calls and source usage are designed to be logged according to the agreed deployment and audit model, helping companies review how AI-assisted work is produced.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section shows that Zuraio is an integration layer, not an isolated chatbot.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--deep-charcoal)' }}>
              Built to connect with business systems.
            </h2>

            <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              Zuraio is designed to connect with tools such as email, Microsoft 365, SharePoint, CRM, ERP, APIs and future integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section lowers implementation anxiety by showing a staged rollout process.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            Start controlled. Expand carefully.
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4 items-start p-6 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <span className="text-3xl font-semibold" style={{ color: 'var(--zuraio-olive)' }}>1</span>
              <div>
                <p className="text-xl font-semibold mb-2" style={{ color: 'var(--deep-charcoal)' }}>Select first use cases</p>
                <p style={{ color: 'var(--charcoal)' }}>Identify the most valuable initial applications</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <span className="text-3xl font-semibold" style={{ color: 'var(--zuraio-olive)' }}>2</span>
              <div>
                <p className="text-xl font-semibold mb-2" style={{ color: 'var(--deep-charcoal)' }}>Review systems and data sources</p>
                <p style={{ color: 'var(--charcoal)' }}>Map existing systems and knowledge sources</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <span className="text-3xl font-semibold" style={{ color: 'var(--zuraio-olive)' }}>3</span>
              <div>
                <p className="text-xl font-semibold mb-2" style={{ color: 'var(--deep-charcoal)' }}>Configure permissions and deployment model</p>
                <p style={{ color: 'var(--charcoal)' }}>Set up governance and access controls</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <span className="text-3xl font-semibold" style={{ color: 'var(--zuraio-olive)' }}>4</span>
              <div>
                <p className="text-xl font-semibold mb-2" style={{ color: 'var(--deep-charcoal)' }}>Pilot with selected users</p>
                <p style={{ color: 'var(--charcoal)' }}>Test with a controlled group</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <span className="text-3xl font-semibold" style={{ color: 'var(--zuraio-olive)' }}>5</span>
              <div>
                <p className="text-xl font-semibold mb-2" style={{ color: 'var(--deep-charcoal)' }}>Review results</p>
                <p style={{ color: 'var(--charcoal)' }}>Evaluate outcomes and refine approach</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <span className="text-3xl font-semibold" style={{ color: 'var(--zuraio-olive)' }}>6</span>
              <div>
                <p className="text-xl font-semibold mb-2" style={{ color: 'var(--deep-charcoal)' }}>Expand into further workflows</p>
                <p style={{ color: 'var(--charcoal)' }}>Scale based on proven value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section moves technical readers towards a deeper private discussion.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--paper-white)' }}>
              Discuss the technical architecture with us.
            </h2>

            <Button to="/contact" className="bg-white text-[var(--zuraio-olive)] hover:bg-white/90">
              Book a technical conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

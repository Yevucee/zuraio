import { Button } from '../components/Button';
import { SectionPurpose } from '../components/SectionPurpose';

export default function Platform() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This page explains the platform in simple terms before directing technical readers to the architecture page.
          </SectionPurpose>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
              One controlled AI Hub for your people, systems and knowledge.
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              Zuraio connects users, agents, AI models and company systems through a central orchestration layer.
            </p>
          </div>
        </div>
      </section>

      {/* Simple Architecture */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section gives non-technical buyers a simple mental model of the product.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            How Zuraio connects the pieces.
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-6">
              <div className="w-full p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>People</p>
              </div>

              <div className="flex items-center justify-center">
                <svg width="2" height="40" style={{ stroke: 'var(--charcoal)', strokeWidth: 2 }}>
                  <line x1="1" y1="0" x2="1" y2="40" />
                </svg>
              </div>

              <div className="w-full p-8 rounded-lg text-center" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
                <p className="text-2xl font-semibold" style={{ color: 'var(--paper-white)' }}>Zuraio AI Hub</p>
              </div>

              <div className="flex items-center justify-center">
                <svg width="2" height="40" style={{ stroke: 'var(--charcoal)', strokeWidth: 2 }}>
                  <line x1="1" y1="0" x2="1" y2="40" />
                </svg>
              </div>

              <div className="w-full p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
                  Agents · Models · Company systems
                </p>
              </div>

              <div className="flex items-center justify-center">
                <svg width="2" height="40" style={{ stroke: 'var(--charcoal)', strokeWidth: 2 }}>
                  <line x1="1" y1="0" x2="1" y2="40" />
                </svg>
              </div>

              <div className="w-full p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <p className="text-xl font-semibold" style={{ color: 'var(--deep-charcoal)' }}>
                  Source-backed outputs · Drafts · Reports · Actions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Layers */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section introduces the product architecture using business-friendly language.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            The platform layers.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                AI Hub
              </h3>
              <p className="text-lg" style={{ color: 'var(--charcoal)' }}>
                The central control layer for routing, permissions, model choice and auditability.
              </p>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Agents
              </h3>
              <p className="text-lg" style={{ color: 'var(--charcoal)' }}>
                Specialist assistants for different types of work, such as email, internal knowledge, web research or reporting.
              </p>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Company knowledge
              </h3>
              <p className="text-lg" style={{ color: 'var(--charcoal)' }}>
                Approved documents, emails, project files, policies and system data.
              </p>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Model routing
              </h3>
              <p className="text-lg" style={{ color: 'var(--charcoal)' }}>
                The ability to use different AI models depending on the task, sensitivity and deployment model.
              </p>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Integrations
              </h3>
              <p className="text-lg" style={{ color: 'var(--charcoal)' }}>
                Designed to connect with tools such as email, SharePoint, CRM, ERP and other business systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What This Enables */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section connects the platform structure back to operational business outcomes.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            What a controlled AI Hub makes possible.
          </h2>

          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <span className="text-2xl" style={{ color: 'var(--zuraio-olive)' }}>•</span>
                <span className="text-xl" style={{ color: 'var(--charcoal)' }}>company-specific AI assistance</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-2xl" style={{ color: 'var(--zuraio-olive)' }}>•</span>
                <span className="text-xl" style={{ color: 'var(--charcoal)' }}>repeatable workflows</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-2xl" style={{ color: 'var(--zuraio-olive)' }}>•</span>
                <span className="text-xl" style={{ color: 'var(--charcoal)' }}>controlled access to knowledge</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-2xl" style={{ color: 'var(--zuraio-olive)' }}>•</span>
                <span className="text-xl" style={{ color: 'var(--charcoal)' }}>source-backed answers</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-2xl" style={{ color: 'var(--zuraio-olive)' }}>•</span>
                <span className="text-xl" style={{ color: 'var(--charcoal)' }}>reduced manual preparation</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-2xl" style={{ color: 'var(--zuraio-olive)' }}>•</span>
                <span className="text-xl" style={{ color: 'var(--charcoal)' }}>fewer missed details</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-2xl" style={{ color: 'var(--zuraio-olive)' }}>•</span>
                <span className="text-xl" style={{ color: 'var(--charcoal)' }}>better reporting and follow-up</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section invites visitors to discuss integration possibilities without forcing technical decisions too early.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--paper-white)' }}>
              See how Zuraio could connect to your company systems.
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

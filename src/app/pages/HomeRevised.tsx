import { Button } from '../components/Button';
import { SectionPurpose } from '../components/SectionPurpose';
import { ComparisonBanner } from '../components/ComparisonBanner';

export default function HomeRevised() {
  return (
    <div className="w-full">
      <ComparisonBanner currentVersion="revised" />
      {/* Hero Section with Image */}
      <section className="w-full py-32 md:py-40 relative" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section explains the business value of Zuraio immediately and pairs it with a trustworthy human image.
          </SectionPurpose>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-[600px]">
              <p
                className="text-xs uppercase tracking-wider mb-8"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)', opacity: 0.8 }}
              >
                AI for Swiss companies that need control of their data.
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-10 leading-[1.1]" style={{ color: 'var(--deep-charcoal)' }}>
                Prepare better. Work faster. Keep control.
              </h1>

              <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: 'var(--charcoal)' }}>
                Zuraio AI Hub helps teams use AI across emails, documents, meetings, reports and internal knowledge, while keeping control of data, access and model choice.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button to="/contact">Book a private demo</Button>
                <Button variant="secondary" to="/how-it-helps">See how it works</Button>
              </div>

              <p
                className="text-xs opacity-70"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}
              >
                Configurable data residency · Model-independent AI · Designed for auditability
              </p>
            </div>

            <div className="relative">
              <div className="w-full h-[500px] lg:h-[600px] rounded-md relative overflow-hidden shadow-2xl border" style={{ borderColor: 'rgba(70, 70, 70, 0.15)' }}>
                <img
                  src="https://images.unsplash.com/photo-1714974528757-f63c72154a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                  alt="Mature business professionals in discussion at meeting table"
                  className="w-full h-full object-cover"
                />

                {/* Product-like overlay cards */}
                <div className="absolute top-6 right-6 px-4 py-2 rounded-md shadow-lg border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)', borderColor: 'rgba(159, 175, 82, 0.3)' }}>
                  <p className="text-sm font-semibold" style={{ fontFamily: 'var(--font-mono)', color: 'var(--zuraio-olive)' }}>
                    Meeting brief prepared
                  </p>
                </div>

                <div className="absolute bottom-6 left-6 px-4 py-3 rounded-md shadow-lg border space-y-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)', borderColor: 'rgba(70, 70, 70, 0.2)' }}>
                  <div>
                    <p className="text-[10px] uppercase tracking-wide mb-1" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)', opacity: 0.6 }}>
                      Sources
                    </p>
                    <p className="text-xs font-medium" style={{ fontFamily: 'var(--font-mono)', color: 'var(--deep-charcoal)' }}>
                      Email · Documents · CRM
                    </p>
                  </div>
                  <div className="pt-2 border-t" style={{ borderColor: 'rgba(70, 70, 70, 0.2)' }}>
                    <p className="text-[10px] uppercase tracking-wide mb-1" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)', opacity: 0.6 }}>
                      Access
                    </p>
                    <p className="text-xs font-medium" style={{ fontFamily: 'var(--font-mono)', color: 'var(--success)' }}>
                      Approved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flow motif */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 flex-wrap" style={{ opacity: 0.4 }}>
              <span className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>Email</span>
              <svg width="16" height="2" style={{ stroke: 'var(--data-teal)', strokeWidth: 1.5 }}>
                <line x1="0" y1="1" x2="16" y2="1" />
              </svg>
              <span className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>Documents</span>
              <svg width="16" height="2" style={{ stroke: 'var(--data-teal)', strokeWidth: 1.5 }}>
                <line x1="0" y1="1" x2="16" y2="1" />
              </svg>
              <span className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>Systems</span>
              <svg width="16" height="2" style={{ stroke: 'var(--data-teal)', strokeWidth: 1.5 }}>
                <line x1="0" y1="1" x2="16" y2="1" />
              </svg>
              <span className="text-xs font-semibold" style={{ fontFamily: 'var(--font-mono)', color: 'var(--zuraio-olive)' }}>Zuraio Hub</span>
              <svg width="16" height="2" style={{ stroke: 'var(--data-teal)', strokeWidth: 1.5 }}>
                <line x1="0" y1="1" x2="16" y2="1" />
              </svg>
              <span className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>Brief · Report · Follow-up</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="w-full py-24" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section makes the problem instantly recognisable to business owners and managers.
          </SectionPurpose>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-center" style={{ color: 'var(--deep-charcoal)' }}>
              Your company knowledge is already there. It is just scattered.
            </h2>

            <p className="text-xl text-center mb-16" style={{ color: 'var(--charcoal)' }}>
              Emails, documents, meeting notes and system data often sit in different places. Zuraio helps bring the right context together so teams waste less time searching and miss fewer details.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-8 rounded-md text-center border" style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.2)' }}>
                <p className="font-semibold text-base" style={{ color: 'var(--deep-charcoal)' }}>Missed follow-ups</p>
              </div>
              <div className="p-8 rounded-md text-center border" style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.2)' }}>
                <p className="font-semibold text-base" style={{ color: 'var(--deep-charcoal)' }}>Slow meeting preparation</p>
              </div>
              <div className="p-8 rounded-md text-center border" style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.2)' }}>
                <p className="font-semibold text-base" style={{ color: 'var(--deep-charcoal)' }}>Repeated admin</p>
              </div>
              <div className="p-8 rounded-md text-center border" style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.2)' }}>
                <p className="font-semibold text-base" style={{ color: 'var(--deep-charcoal)' }}>Inconsistent information</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Everyday Use Section */}
      <section className="w-full py-24" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section translates the technology into practical daily use cases.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            Practical AI for everyday work.
          </h2>

          <p className="text-xl text-center max-w-3xl mx-auto mb-20" style={{ color: 'var(--charcoal)' }}>
            Use Zuraio to prepare meetings, summarise emails, draft reports and search company knowledge from approved sources.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-md border hover:shadow-md transition-shadow" style={{ backgroundColor: 'var(--cloud-grey)', borderColor: 'rgba(70, 70, 70, 0.1)' }}>
              <div className="w-14 h-14 mb-6 rounded-md flex items-center justify-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
                Meeting briefs
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--charcoal)', opacity: 0.85 }}>
                Prepare faster with relevant emails, documents and history.
              </p>
            </div>

            <div className="p-8 rounded-md border hover:shadow-md transition-shadow" style={{ backgroundColor: 'var(--cloud-grey)', borderColor: 'rgba(70, 70, 70, 0.1)' }}>
              <div className="w-14 h-14 mb-6 rounded-md flex items-center justify-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
                Email support
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--charcoal)', opacity: 0.85 }}>
                Summarise threads, draft replies and identify follow-ups.
              </p>
            </div>

            <div className="p-8 rounded-md border hover:shadow-md transition-shadow" style={{ backgroundColor: 'var(--cloud-grey)', borderColor: 'rgba(70, 70, 70, 0.1)' }}>
              <div className="w-14 h-14 mb-6 rounded-md flex items-center justify-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
                Reports and updates
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--charcoal)', opacity: 0.85 }}>
                Create first drafts from approved company sources.
              </p>
            </div>

            <div className="p-8 rounded-md border hover:shadow-md transition-shadow" style={{ backgroundColor: 'var(--cloud-grey)', borderColor: 'rgba(70, 70, 70, 0.1)' }}>
              <div className="w-14 h-14 mb-6 rounded-md flex items-center justify-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
                Knowledge search
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--charcoal)', opacity: 0.85 }}>
                Ask questions across internal documents with source-backed answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="w-full py-24" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section shows the operational improvement without overexplaining the technology.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-20 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            Less searching. Fewer missed details. Better-prepared teams.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="p-10 rounded-md border" style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.2)' }}>
              <h3 className="text-lg font-semibold mb-8" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)', opacity: 0.7 }}>
                Before
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <span className="text-lg mt-0.5" style={{ color: 'var(--error)', opacity: 0.6 }}>✗</span>
                  <span className="text-base" style={{ color: 'var(--charcoal)' }}>Information spread across inboxes and folders</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-lg mt-0.5" style={{ color: 'var(--error)', opacity: 0.6 }}>✗</span>
                  <span className="text-base" style={{ color: 'var(--charcoal)' }}>Reports rebuilt from scratch</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-lg mt-0.5" style={{ color: 'var(--error)', opacity: 0.6 }}>✗</span>
                  <span className="text-base" style={{ color: 'var(--charcoal)' }}>Sensitive data copied into public tools</span>
                </li>
              </ul>
            </div>

            <div className="p-10 rounded-md border shadow-md" style={{ backgroundColor: 'var(--soft-olive)', borderColor: 'rgba(159, 175, 82, 0.3)' }}>
              <h3 className="text-lg font-semibold mb-8" style={{ fontFamily: 'var(--font-mono)', color: 'var(--deep-charcoal)' }}>
                With Zuraio
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <span className="text-lg mt-0.5" style={{ color: 'var(--success)' }}>✓</span>
                  <span className="text-base font-medium" style={{ color: 'var(--deep-charcoal)' }}>Context brought together from approved sources</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-lg mt-0.5" style={{ color: 'var(--success)' }}>✓</span>
                  <span className="text-base font-medium" style={{ color: 'var(--deep-charcoal)' }}>Drafts and summaries prepared faster</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-lg mt-0.5" style={{ color: 'var(--success)' }}>✓</span>
                  <span className="text-base font-medium" style={{ color: 'var(--deep-charcoal)' }}>AI routed through a controlled company layer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Control Section */}
      <section className="w-full py-24" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section builds trust by showing why Zuraio is different from generic cloud-first AI tools.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-center max-w-4xl mx-auto" style={{ color: 'var(--deep-charcoal)' }}>
            AI should not mean losing control of company data.
          </h2>

          <p className="text-xl text-center max-w-3xl mx-auto mb-20" style={{ color: 'var(--charcoal)' }}>
            Zuraio is designed around configurable data residency, access permissions, model choice and workflows that are easier to review.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-12">
            <div className="p-10 rounded-md border" style={{ borderColor: 'rgba(70, 70, 70, 0.2)', backgroundColor: 'var(--paper-white)' }}>
              <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)', opacity: 0.7 }}>
                Generic cloud AI
              </h3>
              <ul className="space-y-3">
                <li className="text-base" style={{ color: 'var(--charcoal)', opacity: 0.8 }}>• External platform-first</li>
                <li className="text-base" style={{ color: 'var(--charcoal)', opacity: 0.8 }}>• Generic assistant</li>
                <li className="text-base" style={{ color: 'var(--charcoal)', opacity: 0.8 }}>• Limited visibility</li>
              </ul>
            </div>

            <div className="p-10 rounded-md border shadow-lg" style={{ backgroundColor: 'var(--zuraio-olive)', borderColor: 'rgba(159, 175, 82, 0.5)' }}>
              <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: 'var(--font-mono)', color: 'var(--paper-white)' }}>
                Zuraio AI Hub
              </h3>
              <ul className="space-y-3">
                <li className="text-base font-medium" style={{ color: 'var(--paper-white)' }}>• Control-first design</li>
                <li className="text-base font-medium" style={{ color: 'var(--paper-white)' }}>• Company-specific knowledge</li>
                <li className="text-base font-medium" style={{ color: 'var(--paper-white)' }}>• Designed for traceability</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button to="/data-control">Read about data control</Button>
          </div>
        </div>
      </section>

      {/* Built From Real Need Section */}
      <section className="w-full py-24" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section creates human credibility and shows that the product came from a real operational need.
          </SectionPurpose>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-md overflow-hidden border shadow-lg" style={{ borderColor: 'rgba(70, 70, 70, 0.15)' }}>
                <img
                  src="https://images.unsplash.com/photo-1758876203342-fc14c0bba67c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Team members collaborating at desk"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
                We built the AI layer we wanted to use ourselves.
              </h2>

              <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
                Zuraio started because we needed a better way to prepare, search, summarise, draft and follow up, without handing sensitive company knowledge to uncontrolled external tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Confidence Section */}
      <section className="w-full py-24" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section reassures technical stakeholders without overwhelming the homepage.
          </SectionPurpose>

          <h2 className="text-4xl md:text-5xl font-semibold mb-20 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            Serious technology. Clear controls.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="p-8 rounded-md border text-center hover:shadow-md transition-shadow" style={{ backgroundColor: 'var(--cloud-grey)', borderColor: 'rgba(70, 70, 70, 0.1)' }}>
              <div className="w-16 h-16 mx-auto mb-5 rounded-md flex items-center justify-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <span className="text-2xl">🔄</span>
              </div>
              <p className="font-semibold text-base" style={{ color: 'var(--deep-charcoal)' }}>Model choice</p>
            </div>

            <div className="p-8 rounded-md border text-center hover:shadow-md transition-shadow" style={{ backgroundColor: 'var(--cloud-grey)', borderColor: 'rgba(70, 70, 70, 0.1)' }}>
              <div className="w-16 h-16 mx-auto mb-5 rounded-md flex items-center justify-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <span className="text-2xl">🔒</span>
              </div>
              <p className="font-semibold text-base" style={{ color: 'var(--deep-charcoal)' }}>Access control</p>
            </div>

            <div className="p-8 rounded-md border text-center hover:shadow-md transition-shadow" style={{ backgroundColor: 'var(--cloud-grey)', borderColor: 'rgba(70, 70, 70, 0.1)' }}>
              <div className="w-16 h-16 mx-auto mb-5 rounded-md flex items-center justify-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <span className="text-2xl">📚</span>
              </div>
              <p className="font-semibold text-base" style={{ color: 'var(--deep-charcoal)' }}>Internal knowledge</p>
            </div>

            <div className="p-8 rounded-md border text-center hover:shadow-md transition-shadow" style={{ backgroundColor: 'var(--cloud-grey)', borderColor: 'rgba(70, 70, 70, 0.1)' }}>
              <div className="w-16 h-16 mx-auto mb-5 rounded-md flex items-center justify-center" style={{ backgroundColor: 'var(--soft-olive)' }}>
                <span className="text-2xl">📝</span>
              </div>
              <p className="font-semibold text-base" style={{ color: 'var(--deep-charcoal)' }}>Auditability</p>
            </div>
          </div>

          <p className="text-lg text-center max-w-3xl mx-auto mb-10" style={{ color: 'var(--charcoal)', opacity: 0.8 }}>
            For technical teams, Zuraio provides a deeper architecture view covering routing, permissions, integrations, deployment options and auditability.
          </p>

          <div className="text-center">
            <Button to="/technical-architecture">View technical architecture</Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-24" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This section turns interest into a private, low-pressure conversation.
          </SectionPurpose>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--paper-white)' }}>
              See what controlled AI could do inside your company.
            </h2>

            <p className="text-xl mb-12" style={{ color: 'var(--paper-white)' }}>
              We will walk through your current systems, data-control needs and the first workflows where Zuraio could help.
            </p>

            <Button to="/contact" className="bg-white text-[var(--zuraio-olive)] hover:bg-white/90">
              Book a private demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

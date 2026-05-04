import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { FeatureCard } from '../components/FeatureCard';
import { ComparisonBanner } from '../components/ComparisonBanner';
import heroImage from '../../imports/hero_image_2_-.png';

export default function HomeProductLed() {
  return (
    <div className="w-full">
      <ComparisonBanner currentVersion="product-led" />

      {/* Hero Section with Product Interface */}
      <section className="w-full py-24 md:py-40" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 lg:px-20 xl:px-24 max-w-[1560px]">
          <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-12 lg:gap-14 items-center">
            <div className="max-w-[540px]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
                Prepare better.<br />
                Work faster.<br />
                Keep Control.
              </h1>

              <p
                className="text-sm uppercase tracking-wider mb-8"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}
              >
                AI for Swiss companies that need control of their data.
              </p>

              <p className="text-lg md:text-xl mb-10 leading-relaxed" style={{ color: 'var(--charcoal)' }}>
                Zuraio AI Hub helps teams use AI across emails, documents, meetings, reports and internal knowledge, while keeping control of data, access and model choice.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact">Book a private demo</Button>
                <Button variant="secondary" to="/how-it-helps">See how it works</Button>
              </div>
            </div>

            <div className="relative flex justify-center items-center overflow-visible">
              <img
                src={heroImage}
                alt="Zuraio AI Hub product interface"
                className="relative z-10 w-full h-auto max-w-[720px] cursor-zoom-in scale-[1.08] rounded-lg transition-transform duration-700 ease-out hover:z-30 hover:scale-[1.38] lg:hover:-translate-x-[22%]"
                style={{
                  display: 'block',
                  transformOrigin: 'center'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Everyday Problem Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center max-w-3xl mx-auto" style={{ color: 'var(--deep-charcoal)' }}>
            Your company already has the knowledge. It is just scattered.
          </h2>

          <p className="text-xl text-center max-w-3xl mx-auto mb-16" style={{ color: 'var(--charcoal)' }}>
            Emails, documents, meeting notes, CRM records, project files and internal policies often sit in different places. That slows teams down, creates repeated admin and increases the risk of missed details.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Missed follow-ups"
              description="Important actions disappear inside long email threads."
            />
            <FeatureCard
              title="Slow meeting preparation"
              description="People spend time searching instead of preparing."
            />
            <FeatureCard
              title="Repeated manual admin"
              description="Reports, summaries and updates are rebuilt again and again."
            />
            <FeatureCard
              title="Inconsistent information"
              description="Different teams work from different versions of the truth."
            />
          </div>
        </div>
      </section>

      {/* Practical AI Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            Practical AI for the work your company does every day.
          </h2>

          <p className="text-xl text-center max-w-3xl mx-auto mb-16" style={{ color: 'var(--charcoal)' }}>
            Zuraio turns scattered company knowledge into controlled assistance for meetings, emails, reports and internal search.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <FeatureCard
              title="Meetings"
              description="Prepare meeting briefs from recent emails, documents, notes and client history."
            />
            <FeatureCard
              title="Emails"
              description="Summarise long threads, draft replies and identify actions that need follow-up."
            />
            <FeatureCard
              title="Reports"
              description="Create first drafts of summaries, updates and management reports from approved sources."
            />
            <FeatureCard
              title="Knowledge"
              description="Ask questions across company documents and receive source-backed answers."
            />
          </div>

          <div className="text-center">
            <Button to="/how-it-helps">Explore how it helps</Button>
          </div>
        </div>
      </section>

      {/* See How It Works in Practice Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            See how Zuraio works in practice.
          </h2>

          <p className="text-xl text-center max-w-3xl mx-auto mb-16" style={{ color: 'var(--charcoal)' }}>
            Start with one workflow, then expand. Zuraio can help prepare meetings, manage email threads and create reports using approved company knowledge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-md border" style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.2)' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Prepare for a meeting
              </h3>
              <p className="text-base mb-6" style={{ color: 'var(--charcoal)' }}>
                Zuraio brings together recent emails, documents, CRM notes and open tasks to create a clear meeting brief.
              </p>
              <div className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)', opacity: 0.7 }}>
                <p>→ Sources: Email · CRM · Project folder</p>
                <p>→ Open follow-ups: Flagged</p>
                <p>→ Suggested next actions</p>
                <p>→ Audit: Logged</p>
              </div>
            </div>

            <div className="p-8 rounded-md border" style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.2)' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Summarise an email thread
              </h3>
              <p className="text-base mb-6" style={{ color: 'var(--charcoal)' }}>
                Long email chains can be summarised into key points, open questions, draft replies and follow-up tasks.
              </p>
              <div className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)', opacity: 0.7 }}>
                <p>→ Thread summary</p>
                <p>→ Draft reply</p>
                <p>→ Follow-up task</p>
                <p>→ Source email trail</p>
              </div>
            </div>

            <div className="p-8 rounded-md border" style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.2)' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                Create a report
              </h3>
              <p className="text-base mb-6" style={{ color: 'var(--charcoal)' }}>
                Zuraio can create first drafts of management updates, project summaries or decision notes from approved sources.
              </p>
              <div className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)', opacity: 0.7 }}>
                <p>→ Source documents</p>
                <p>→ Draft report</p>
                <p>→ Missing information flagged</p>
                <p>→ Review required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            Less searching. Fewer missed details. Better-prepared teams.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--deep-charcoal)' }}>
                Before Zuraio
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span style={{ color: 'var(--error)' }}>✗</span>
                  <span style={{ color: 'var(--charcoal)' }}>Information spread across inboxes and folders</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: 'var(--error)' }}>✗</span>
                  <span style={{ color: 'var(--charcoal)' }}>Manual preparation before meetings</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: 'var(--error)' }}>✗</span>
                  <span style={{ color: 'var(--charcoal)' }}>Long email threads and missed actions</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: 'var(--error)' }}>✗</span>
                  <span style={{ color: 'var(--charcoal)' }}>Reports rebuilt from scratch</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: 'var(--error)' }}>✗</span>
                  <span style={{ color: 'var(--charcoal)' }}>Sensitive data copied into public tools</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--soft-olive)' }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--deep-charcoal)' }}>
                With Zuraio
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span style={{ color: 'var(--success)' }}>✓</span>
                  <span style={{ color: 'var(--deep-charcoal)' }}>Context brought together from approved sources</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: 'var(--success)' }}>✓</span>
                  <span style={{ color: 'var(--deep-charcoal)' }}>Meeting briefs prepared automatically</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: 'var(--success)' }}>✓</span>
                  <span style={{ color: 'var(--deep-charcoal)' }}>Email summaries and draft replies ready</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: 'var(--success)' }}>✓</span>
                  <span style={{ color: 'var(--deep-charcoal)' }}>Drafts and summaries created faster</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: 'var(--success)' }}>✓</span>
                  <span style={{ color: 'var(--deep-charcoal)' }}>AI routed through a controlled company layer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Control Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center max-w-3xl mx-auto" style={{ color: 'var(--deep-charcoal)' }}>
            AI should not mean losing control of company data.
          </h2>

          <p className="text-xl text-center max-w-3xl mx-auto mb-16" style={{ color: 'var(--charcoal)' }}>
            Zuraio is designed around configurable data residency, access permissions, model choice and workflows that are easier to review.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-12">
            <div className="p-8 rounded-md border" style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.2)' }}>
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)', opacity: 0.7 }}>
                Generic cloud AI
              </h3>
              <ul className="space-y-3">
                <li className="text-base" style={{ color: 'var(--charcoal)' }}>• External platform-first</li>
                <li className="text-base" style={{ color: 'var(--charcoal)' }}>• Generic assistant</li>
                <li className="text-base" style={{ color: 'var(--charcoal)' }}>• Limited visibility</li>
              </ul>
            </div>

            <div className="p-8 rounded-md border" style={{ backgroundColor: 'var(--zuraio-olive)', borderColor: 'rgba(159, 175, 82, 0.5)' }}>
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--paper-white)' }}>
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

      {/* Built from Real Need Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
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
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            Serious technology. Clear controls.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="p-6 rounded-md border text-center" style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.1)' }}>
              <p className="font-semibold text-base mb-2" style={{ color: 'var(--deep-charcoal)' }}>Model choice</p>
              <p className="text-sm" style={{ color: 'var(--charcoal)', opacity: 0.8 }}>Route work to cloud, open-source or local models by task and policy.</p>
            </div>

            <div className="p-6 rounded-md border text-center" style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.1)' }}>
              <p className="font-semibold text-base mb-2" style={{ color: 'var(--deep-charcoal)' }}>Access control</p>
              <p className="text-sm" style={{ color: 'var(--charcoal)', opacity: 0.8 }}>Use permissions and roles to control who can access which knowledge.</p>
            </div>

            <div className="p-6 rounded-md border text-center" style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.1)' }}>
              <p className="font-semibold text-base mb-2" style={{ color: 'var(--deep-charcoal)' }}>Internal knowledge</p>
              <p className="text-sm" style={{ color: 'var(--charcoal)', opacity: 0.8 }}>Connect selected documents, systems and sources to company-specific AI assistance.</p>
            </div>

            <div className="p-6 rounded-md border text-center" style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.1)' }}>
              <p className="font-semibold text-base mb-2" style={{ color: 'var(--deep-charcoal)' }}>Auditability</p>
              <p className="text-sm" style={{ color: 'var(--charcoal)', opacity: 0.8 }}>Design workflows so sources, actions and model usage are easier to review.</p>
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
      <section className="w-full py-20" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--paper-white)' }}>
              See what controlled AI could do inside your company.
            </h2>

            <p className="text-xl mb-12" style={{ color: 'var(--paper-white)' }}>
              We will walk through your current systems, data-control needs and the first workflows where Zuraio could help.
            </p>

            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-md font-medium transition-all hover:opacity-90"
              style={{
                backgroundColor: 'var(--paper-white)',
                color: 'var(--deep-charcoal)'
              }}
            >
              Book a private demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

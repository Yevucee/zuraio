import { useState } from 'react';
import { SectionPurpose } from '../components/SectionPurpose';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    companySize: '',
    mainInterest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This page makes the sales conversation feel confidential, practical and low-pressure.
          </SectionPurpose>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
              Book a private Zuraio demo.
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              We will discuss your company setup, data-control needs and the first workflows where controlled AI could help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <SectionPurpose>
            This form captures the information needed for a useful first conversation without making the visitor feel like they are entering an automated sales funnel.
          </SectionPurpose>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-lg" style={{ backgroundColor: 'var(--paper-white)' }}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium" style={{ color: 'var(--deep-charcoal)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border"
                    style={{ borderColor: 'var(--charcoal)', backgroundColor: 'var(--paper-white)' }}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block mb-2 font-medium" style={{ color: 'var(--deep-charcoal)' }}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border"
                    style={{ borderColor: 'var(--charcoal)', backgroundColor: 'var(--paper-white)' }}
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block mb-2 font-medium" style={{ color: 'var(--deep-charcoal)' }}>
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border"
                    style={{ borderColor: 'var(--charcoal)', backgroundColor: 'var(--paper-white)' }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium" style={{ color: 'var(--deep-charcoal)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border"
                    style={{ borderColor: 'var(--charcoal)', backgroundColor: 'var(--paper-white)' }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium" style={{ color: 'var(--deep-charcoal)' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border"
                    style={{ borderColor: 'var(--charcoal)', backgroundColor: 'var(--paper-white)' }}
                  />
                </div>

                <div>
                  <label htmlFor="companySize" className="block mb-2 font-medium" style={{ color: 'var(--deep-charcoal)' }}>
                    Company size
                  </label>
                  <input
                    type="text"
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    placeholder="e.g., 50-100 employees"
                    className="w-full px-4 py-3 rounded-md border"
                    style={{ borderColor: 'var(--charcoal)', backgroundColor: 'var(--paper-white)' }}
                  />
                </div>

                <div>
                  <label htmlFor="mainInterest" className="block mb-2 font-medium" style={{ color: 'var(--deep-charcoal)' }}>
                    Main interest
                  </label>
                  <select
                    id="mainInterest"
                    name="mainInterest"
                    value={formData.mainInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border"
                    style={{ borderColor: 'var(--charcoal)', backgroundColor: 'var(--paper-white)' }}
                  >
                    <option value="">Select an option</option>
                    <option value="meeting-preparation">meeting preparation</option>
                    <option value="email-followup">email and follow-up</option>
                    <option value="knowledge-search">internal knowledge search</option>
                    <option value="reports-summaries">reports and summaries</option>
                    <option value="data-control">data control</option>
                    <option value="technical-architecture">technical architecture</option>
                    <option value="starter-partner">starter partner discussion</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium" style={{ color: 'var(--deep-charcoal)' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-md border"
                    style={{ borderColor: 'var(--charcoal)', backgroundColor: 'var(--paper-white)' }}
                  ></textarea>
                </div>

                <p className="text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
                  Your enquiry will be handled confidentially.
                </p>

                {isSubmitted && (
                  <p className="rounded-md px-4 py-3 text-sm" style={{ backgroundColor: 'var(--cloud-grey)', color: 'var(--deep-charcoal)' }}>
                    Thank you. Please email us directly at email@zuraio.ch so we can arrange the conversation.
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-md transition-all font-medium text-lg"
                  style={{ backgroundColor: 'var(--zuraio-olive)', color: 'var(--paper-white)' }}
                >
                  Submit enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1320px]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6" style={{ color: 'var(--deep-charcoal)' }}>
              Or contact us directly
            </h2>
            <p className="text-xl mb-4" style={{ color: 'var(--charcoal)' }}>
              email@zuraio.ch
            </p>
            <p className="text-xl" style={{ color: 'var(--charcoal)' }}>
              Switzerland
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

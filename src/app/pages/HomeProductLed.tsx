import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { FeatureCard } from '../components/FeatureCard';
import { ComparisonBanner } from '../components/ComparisonBanner';
import { useI18n } from '../../i18n/I18nProvider';
import heroImage from '../../imports/hero_image_2_-.png';

export default function HomeProductLed() {
  const { messages: m } = useI18n();
  const h = m.homeProductLed;
  const btn = m.common.buttons;

  return (
    <div className="w-full">
      <ComparisonBanner currentVersion="product-led" />

      <section className="w-full py-24 md:py-40" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 lg:px-20 xl:px-24 max-w-[1560px]">
          <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-12 lg:gap-14 items-center">
            <div className="max-w-[540px]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
                {h.hero.titleLines.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < h.hero.titleLines.length - 1 && <br />}
                  </span>
                ))}
              </h1>

              <p
                className="text-sm uppercase tracking-wider mb-8"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}
              >
                {h.hero.eyebrow}
              </p>

              <p className="text-lg md:text-xl mb-10 leading-relaxed" style={{ color: 'var(--charcoal)' }}>
                {h.hero.body}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact">{btn.bookPrivateDemo}</Button>
                <Button variant="secondary" to="/how-it-helps">{btn.seeHowItWorks}</Button>
              </div>
            </div>

            <div className="relative flex justify-center items-center overflow-visible">
              <img
                src={heroImage}
                alt={h.hero.imageAlt}
                className="relative z-10 w-full h-auto max-w-[720px] cursor-zoom-in scale-[1.08] rounded-lg transition-all duration-700 ease-out hover:z-30 hover:scale-[1.38] hover:opacity-90 lg:hover:-translate-x-[22%]"
                style={{ display: 'block', transformOrigin: 'center' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center max-w-3xl mx-auto" style={{ color: 'var(--deep-charcoal)' }}>
            {h.scattered.title}
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-16" style={{ color: 'var(--charcoal)' }}>
            {h.scattered.body}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {h.scattered.cards.map((card) => (
              <FeatureCard key={card.title} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {h.practical.title}
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-16" style={{ color: 'var(--charcoal)' }}>
            {h.practical.body}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {h.practical.cards.map((card) => (
              <FeatureCard key={card.title} title={card.title} description={card.description} />
            ))}
          </div>
          <div className="text-center">
            <Button to="/how-it-helps">{btn.exploreHowItHelps}</Button>
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {h.inPractice.title}
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-16" style={{ color: 'var(--charcoal)' }}>
            {h.inPractice.body}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {h.inPractice.cards.map((card) => (
              <div
                key={card.title}
                className="p-8 rounded-md border"
                style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.2)' }}
              >
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
                  {card.title}
                </h3>
                <p className="text-base mb-6" style={{ color: 'var(--charcoal)' }}>
                  {card.body}
                </p>
                <div className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)', opacity: 0.7 }}>
                  {card.bullets.map((bullet) => (
                    <p key={bullet}>{bullet}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {h.beforeAfter.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--deep-charcoal)' }}>
                {h.beforeAfter.beforeTitle}
              </h3>
              <ul className="space-y-4">
                {h.beforeAfter.before.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span style={{ color: 'var(--error)' }}>✗</span>
                    <span style={{ color: 'var(--charcoal)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--soft-olive)' }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--deep-charcoal)' }}>
                {h.beforeAfter.afterTitle}
              </h3>
              <ul className="space-y-4">
                {h.beforeAfter.after.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span style={{ color: 'var(--success)' }}>✓</span>
                    <span style={{ color: 'var(--deep-charcoal)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center max-w-3xl mx-auto" style={{ color: 'var(--deep-charcoal)' }}>
            {h.dataControl.title}
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-16" style={{ color: 'var(--charcoal)' }}>
            {h.dataControl.body}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-12">
            <div className="p-8 rounded-md border" style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.2)' }}>
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)', opacity: 0.7 }}>
                {h.dataControl.genericTitle}
              </h3>
              <ul className="space-y-3">
                {h.dataControl.genericItems.map((item) => (
                  <li key={item} className="text-base" style={{ color: 'var(--charcoal)' }}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-md border" style={{ backgroundColor: 'var(--zuraio-olive)', borderColor: 'rgba(159, 175, 82, 0.5)' }}>
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--paper-white)' }}>
                {h.dataControl.zuraioTitle}
              </h3>
              <ul className="space-y-3">
                {h.dataControl.zuraioItems.map((item) => (
                  <li key={item} className="text-base font-medium" style={{ color: 'var(--paper-white)' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Button to="/data-control">{btn.readDataControl}</Button>
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--paper-white)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-md overflow-hidden border shadow-lg" style={{ borderColor: 'rgba(70, 70, 70, 0.15)' }}>
                <img
                  src="https://images.unsplash.com/photo-1758876203342-fc14c0bba67c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt={h.built.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight" style={{ color: 'var(--deep-charcoal)' }}>
                {h.built.title}
              </h2>
              <p className="text-xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
                {h.built.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--cloud-grey)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center" style={{ color: 'var(--deep-charcoal)' }}>
            {h.technical.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {h.technical.cards.map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-md border text-center"
                style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.1)' }}
              >
                <p className="font-semibold text-base mb-2" style={{ color: 'var(--deep-charcoal)' }}>{card.title}</p>
                <p className="text-sm" style={{ color: 'var(--charcoal)', opacity: 0.8 }}>{card.body}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-center max-w-3xl mx-auto mb-10" style={{ color: 'var(--charcoal)', opacity: 0.8 }}>
            {h.technical.footnote}
          </p>
          <div className="text-center">
            <Button to="/technical-architecture">{btn.viewTechnicalArchitecture}</Button>
          </div>
        </div>
      </section>

      <section className="w-full py-20" style={{ backgroundColor: 'var(--zuraio-olive)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ color: 'var(--paper-white)' }}>
              {h.finalCta.title}
            </h2>
            <p className="text-xl mb-12" style={{ color: 'var(--paper-white)' }}>
              {h.finalCta.body}
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-md font-medium transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--paper-white)', color: 'var(--deep-charcoal)' }}
            >
              {btn.bookPrivateDemo}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

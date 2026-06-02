import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/I18nProvider';

export function Footer() {
  const { messages: m } = useI18n();
  const f = m.common.footer;

  return (
    <footer className="w-full border-t" style={{ backgroundColor: 'var(--cloud-grey)', borderColor: 'rgba(70, 70, 70, 0.2)' }}>
      <div className="container mx-auto px-6 py-16 max-w-[1320px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
              Zuraio
            </h3>
            <p className="text-base mb-4" style={{ color: 'var(--charcoal)', maxWidth: '400px' }}>
              {f.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
              {f.pages}
            </h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>{f.home}</Link></li>
              <li><Link to="/how-it-helps" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>{f.howItHelps}</Link></li>
              <li><Link to="/data-control" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>{f.dataControl}</Link></li>
              <li><Link to="/platform" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>{f.platform}</Link></li>
              <li><Link to="/technical-architecture" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>{f.technicalArchitecture}</Link></li>
              <li><Link to="/about" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>{f.about}</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>{f.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
              {f.forCompanies}
            </h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>{f.bookPrivateDemo}</Link></li>
              <li><Link to="/starter-partners" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>{f.starterPartner}</Link></li>
            </ul>

            <h4 className="font-semibold mb-4 mt-8" style={{ color: 'var(--deep-charcoal)' }}>
              {f.legal}
            </h4>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>{f.privacy}</a></li>
              <li><a href="#terms" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>{f.terms}</a></li>
              <li><a href="#imprint" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>{f.imprint}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t" style={{ borderColor: 'rgba(70, 70, 70, 0.2)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
              {f.contactLine}
            </p>
            <p className="text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
              {f.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

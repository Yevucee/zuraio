import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full border-t" style={{ backgroundColor: 'var(--cloud-grey)', borderColor: 'rgba(70, 70, 70, 0.2)' }}>
      <div className="container mx-auto px-6 py-16 max-w-[1320px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
              Zuraio
            </h3>
            <p className="text-base mb-4" style={{ color: 'var(--charcoal)', maxWidth: '400px' }}>
              AI for Swiss companies that need control of their data.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
              Pages
            </h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>Home</Link></li>
              <li><Link to="/how-it-helps" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>How It Helps</Link></li>
              <li><Link to="/data-control" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>Data Control</Link></li>
              <li><Link to="/platform" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>Platform</Link></li>
              <li><Link to="/technical-architecture" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>Technical Architecture</Link></li>
              <li><Link to="/about" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>About</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--deep-charcoal)' }}>
              For companies
            </h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>Book a private demo</Link></li>
              <li><Link to="/starter-partners" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>Starter partner enquiry</Link></li>
            </ul>

            <h4 className="font-semibold mb-4 mt-8" style={{ color: 'var(--deep-charcoal)' }}>
              Legal
            </h4>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>Privacy</a></li>
              <li><a href="#terms" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>Terms</a></li>
              <li><a href="#imprint" className="hover:text-[var(--zuraio-olive)] transition-colors" style={{ color: 'var(--charcoal)' }}>Imprint</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t" style={{ borderColor: 'rgba(70, 70, 70, 0.2)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
              email@zuraio.ch · Switzerland
            </p>
            <p className="text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--charcoal)' }}>
              © 2026 Zuraio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

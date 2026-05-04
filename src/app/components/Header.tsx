import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../imports/260209_Zuraio_Logo_and_Claim.png';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'How It Helps', to: '/how-it-helps' },
  { label: 'Data Control', to: '/data-control' },
  { label: 'Platform', to: '/platform' },
  { label: 'About', to: '/about' },
];

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navLinkClassName = (path: string) =>
    `transition-colors hover:text-[var(--zuraio-olive)] ${
      isActive(path) ? 'text-[var(--zuraio-olive)]' : 'text-[var(--charcoal)]'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" style={{ borderColor: 'rgba(70, 70, 70, 0.2)' }}>
      <div className="container mx-auto flex h-16 items-center justify-between px-6 max-w-[1320px]">
        <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="Zuraio - own your data" className="h-8" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className={navLinkClassName(item.to)}>
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 rounded-md transition-colors"
            style={{ backgroundColor: 'var(--zuraio-olive)', color: 'var(--paper-white)' }}
          >
            Book a Demo
          </Link>
        </nav>

        <button
          className="md:hidden p-2"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMenuOpen ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19"></line>
                <line x1="19" y1="5" x2="5" y2="19"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden border-t px-6 py-4" style={{ backgroundColor: 'var(--paper-white)', borderColor: 'rgba(70, 70, 70, 0.15)' }}>
          <div className="container mx-auto flex max-w-[1320px] flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className={navLinkClassName(item.to)} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-md px-6 py-3 text-center transition-colors"
              style={{ backgroundColor: 'var(--zuraio-olive)', color: 'var(--paper-white)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Demo
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

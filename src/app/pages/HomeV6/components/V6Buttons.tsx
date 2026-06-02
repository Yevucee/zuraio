import { Link } from 'react-router-dom';

interface V6ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
}

export function PrimaryButton({ children, to, href }: V6ButtonProps) {
  const className =
    'v6-btn-primary v6-focus inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold md:text-base';

  const style = { backgroundColor: 'var(--zuraio-olive)', color: 'var(--paper-white)' };

  if (to) {
    return (
      <Link className={className} style={style} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <a className={className} style={style} href={href}>
      {children}
    </a>
  );
}

export function GhostButton({ children, to, href }: V6ButtonProps) {
  const className =
    'v6-focus inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-semibold md:text-base transition-colors';

  const style = {
    borderColor: 'rgba(70, 70, 70, 0.2)',
    color: 'var(--deep-charcoal)',
    backgroundColor: 'var(--paper-white)',
  };

  if (to) {
    return (
      <Link className={className} style={style} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <a className={className} style={style} href={href}>
      {children}
    </a>
  );
}

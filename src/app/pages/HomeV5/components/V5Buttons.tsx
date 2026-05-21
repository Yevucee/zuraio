import { Link } from 'react-router-dom';
import { V5 } from '../tokens';

interface V5ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
}

export function PrimaryButton({ children, to, href, onClick }: V5ButtonProps) {
  const className =
    'v5-btn-primary v5-focus inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold md:text-base';

  const style = { backgroundColor: V5.olive, color: '#FFFFFF' };

  if (to) {
    return (
      <Link className={className} style={style} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={className} style={style} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} style={style} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export function GhostButton({ children, to, href, onClick }: V5ButtonProps) {
  const className =
    'v5-btn-ghost v5-focus inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-semibold md:text-base';

  const style = { borderColor: V5.hairline, color: V5.ink, backgroundColor: '#FFFFFF' };

  if (to) {
    return (
      <Link className={className} style={style} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={className} style={style} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} style={style} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

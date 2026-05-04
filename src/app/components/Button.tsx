import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, variant = 'primary', to, href, onClick, className = '' }: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-3 rounded-md transition-all font-medium';

  const variantStyles = {
    primary: 'bg-[var(--zuraio-olive)] text-[var(--paper-white)] hover:opacity-90',
    secondary: 'bg-transparent border-2 border-[var(--zuraio-olive)] text-[var(--zuraio-olive)] hover:bg-[var(--zuraio-olive)] hover:text-[var(--paper-white)]',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}

import type { ReactNode } from 'react';
import { V5 } from '../tokens';

interface V5SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'cream' | 'soft' | 'white';
  reveal?: boolean;
}

export function V5Section({
  children,
  className = '',
  id,
  background = 'cream',
  reveal = false,
}: V5SectionProps) {
  const bg =
    background === 'soft' ? V5.creamSoft : background === 'white' ? '#FFFFFF' : V5.creamBg;

  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-28 ${reveal ? 'v5-reveal' : ''} ${className}`}
      style={{ backgroundColor: bg }}
    >
      <div className="mx-auto max-w-[1200px] px-6">{children}</div>
    </section>
  );
}

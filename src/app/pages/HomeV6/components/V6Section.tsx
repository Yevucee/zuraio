import type { ReactNode } from 'react';

interface V6SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'grey' | 'soft';
  reveal?: boolean;
}

export function V6Section({
  children,
  className = '',
  id,
  background = 'white',
  reveal = false,
}: V6SectionProps) {
  const bg =
    background === 'grey'
      ? 'var(--cloud-grey)'
      : background === 'soft'
        ? 'var(--soft-olive)'
        : 'var(--paper-white)';

  return (
    <section
      id={id}
      className={`py-16 md:py-20 ${reveal ? 'v6-reveal' : ''} ${className}`}
      style={{ backgroundColor: bg }}
    >
      <div className="mx-auto max-w-[1200px] px-6">{children}</div>
    </section>
  );
}

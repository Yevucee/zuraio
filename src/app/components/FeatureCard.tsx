interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--cloud-grey)' }}>
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--deep-charcoal)' }}>
        {title}
      </h3>
      <p className="text-base leading-relaxed" style={{ color: 'var(--charcoal)' }}>
        {description}
      </p>
    </div>
  );
}

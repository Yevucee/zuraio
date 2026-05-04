import { Button } from '../components/Button';

export default function NotFound() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-[1320px] text-center">
      <h1 className="text-5xl font-semibold mb-6" style={{ color: 'var(--deep-charcoal)' }}>
        Page not found
      </h1>
      <p className="text-xl mb-8" style={{ color: 'var(--charcoal)' }}>
        The page you're looking for doesn't exist.
      </p>
      <Button to="/">Return home</Button>
    </div>
  );
}

import { Button } from '../components/Button';
import { useI18n } from '../../i18n/I18nProvider';

export default function NotFound() {
  const { messages: m } = useI18n();

  return (
    <div className="container mx-auto px-6 py-24 max-w-[1320px] text-center">
      <h1 className="text-5xl font-semibold mb-6" style={{ color: 'var(--deep-charcoal)' }}>
        {m.common.notFound.title}
      </h1>
      <p className="text-xl mb-8" style={{ color: 'var(--charcoal)' }}>
        {m.common.notFound.body}
      </p>
      <Button to="/">{m.common.buttons.returnHome}</Button>
    </div>
  );
}

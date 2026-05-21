import { useEffect, useState, type RefObject } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useInViewOnce<T extends Element>(
  ref: RefObject<T | null>,
  options: IntersectionObserverInit = { threshold: 0.2 }
) {
  const reducedMotion = useReducedMotion();
  const [inView, setInView] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setInView(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      options
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, reducedMotion]);

  return inView;
}

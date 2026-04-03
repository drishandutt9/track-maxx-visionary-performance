import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.12) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    // Observe the element and all children with anim classes
    const animElements = el.querySelectorAll('.anim-3d, .anim-up, .anim-fade, .word-reveal');
    animElements.forEach((child) => observer.observe(child));
    if (el.classList.contains('anim-3d') || el.classList.contains('anim-up') || el.classList.contains('anim-fade') || el.classList.contains('word-reveal')) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

import { useScrollReveal } from '@/hooks/useScrollReveal';

const ProblemSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-content px-[var(--gutter)] w-full">
        <div className="max-w-xl">
          <p className="font-mono-label mb-3 anim-up" style={{ color: 'var(--tm-accent)' }}>
            The Problem
          </p>
          <h2
            className="font-heading text-3xl md:text-5xl anim-up stagger-1 mb-6"
            style={{ color: 'var(--text)' }}
          >
            You're training blind.
          </h2>
          <div className="word-reveal anim-fade stagger-2">
            {'Wrist wearables count steps — not reps. Phone apps need you to prop and film. Personal trainers cost $80/hour. Nobody is tracking what actually matters: your form, your tempo, your symmetry, your bar speed. Until now.'.split(' ').map((word, i) => (
              <span
                key={i}
                className="mr-[0.3em]"
                style={{ transitionDelay: `${i * 0.04}s`, color: 'var(--text-secondary)' }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

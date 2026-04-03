import { useScrollReveal } from '@/hooks/useScrollReveal';

const ProblemSection = () => {
  const ref = useScrollReveal();

  const words =
    "Wrist-based trackers guess what you're doing from accelerometer vibrations. They can't see your knees caving in on squats. They can't count the eccentric phase of your bench press. They don't know if you did 8 reps or 10.".split(
      ' '
    );

  return (
    <section ref={ref} className="min-h-[85vh] flex items-center justify-center">
      <div className="mx-auto max-w-content px-[var(--gutter)] w-full">
        <div
          className="max-w-2xl mx-auto text-center rounded-2xl p-10 md:p-14"
          style={{
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <p className="font-mono-label mb-4 anim-up" style={{ color: 'var(--tm-accent)' }}>
            The Problem
          </p>

          <h2
            className="font-heading text-3xl md:text-5xl mb-8 anim-up stagger-1"
            style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}
          >
            Your tracker is{' '}
            <em style={{ color: 'var(--tm-accent)', fontStyle: 'italic' }}>blind.</em>
          </h2>

          <div className="word-reveal anim-fade stagger-2 mb-10" style={{ maxWidth: '640px', margin: '0 auto 2.5rem' }}>
            {words.map((word, i) => (
              <span
                key={i}
                className="mr-[0.3em] text-base md:text-lg inline-block"
                style={{ transitionDelay: `${i * 0.04}s`, color: 'var(--text-secondary)', lineHeight: 1.7 }}
              >
                {word}
              </span>
            ))}
          </div>

          <p
            className="text-xl md:text-2xl font-semibold anim-up stagger-3"
            style={{ color: 'var(--tm-accent)' }}
          >
            They measure movement. Track-Maxx measures performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

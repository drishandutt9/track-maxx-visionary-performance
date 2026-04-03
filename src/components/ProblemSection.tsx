import { useScrollReveal } from '@/hooks/useScrollReveal';

const ProblemSection = () => {
  const ref = useScrollReveal();

  const words = "Wrist-based trackers guess what you're doing from accelerometer vibrations. They can't see your knees caving in on squats. They can't count the eccentric phase of your bench press. They don't know if you did 8 reps or 10.".split(' ');

  return (
    <section ref={ref} className="min-h-[80vh] flex items-center">
      <div className="mx-auto max-w-content px-[var(--gutter)] w-full text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono-label mb-3 anim-up" style={{ color: 'var(--tm-accent)' }}>
            The Problem
          </p>
          <h2
            className="font-heading text-4xl md:text-5xl lg:text-6xl anim-up stagger-1 mb-8"
            style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}
          >
            Your tracker is{' '}
            <em style={{ color: 'var(--tm-accent)', fontStyle: 'italic' }}>blind.</em>
          </h2>

          <div className="word-reveal anim-fade stagger-2 mb-10" style={{ maxWidth: '640px', margin: '0 auto' }}>
            {words.map((word, i) => (
              <span
                key={i}
                className="mr-[0.3em] text-base md:text-lg"
                style={{ transitionDelay: `${i * 0.04}s`, color: 'var(--text-secondary)', lineHeight: 1.7 }}
              >
                {word}
              </span>
            ))}
          </div>

          <p
            className="anim-up stagger-3 font-heading text-xl md:text-2xl font-semibold"
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

import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Wrap it.',
    desc: 'Stretch the silicone band around any water bottle. 60mm to 100mm — it fits them all. IP67 rated. Drop it, splash it, sweat on it. It doesn\'t care.',
    align: 'right' as const,
  },
  {
    num: '02',
    title: 'Place it.',
    desc: 'Set your bottle where you normally would — on the floor, on a bench, on a rack. The 150° wide-angle lens captures your entire body from any angle.',
    align: 'left' as const,
  },
  {
    num: '03',
    title: 'Train.',
    desc: 'That\'s it. Track-Maxx auto-detects your exercise, counts reps, measures time under tension, scores form in real time, and flags dangerous movement patterns. You never touch your phone.',
    align: 'center' as const,
  },
];

const HowItWorksSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="how-it-works" ref={ref} className="py-[var(--section-pad)]">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <p className="font-mono-label mb-4 anim-up" style={{ color: 'var(--tm-accent)' }}>
          How It Works
        </p>
        <h2
          className="font-heading text-4xl md:text-5xl lg:text-6xl anim-up stagger-1 mb-24"
          style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}
        >
          Three steps. Zero friction.
        </h2>

        <div className="space-y-40">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`flex ${
                s.align === 'right'
                  ? 'justify-end'
                  : s.align === 'center'
                  ? 'justify-center text-center'
                  : 'justify-start'
              }`}
            >
              <div className={`max-w-md anim-up stagger-${i + 1}`}>
                <span
                  className="block mb-4 font-mono-label"
                  style={{
                    color: 'var(--tm-accent)',
                    fontSize: '64px',
                    lineHeight: 1,
                    fontFamily: "'Fragment Mono', monospace",
                  }}
                >
                  {s.num}
                </span>
                <h3
                  className="font-heading text-3xl md:text-4xl mb-4"
                  style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Wrap It',
    desc: 'Stretch the silicone band around any standard water bottle. The wide-angle camera lens faces the floor.',
    align: 'left' as const,
  },
  {
    num: '02',
    title: 'Place & Train',
    desc: 'Set your bottle where you normally would — bench, rack, floor. The 160° lens captures your full range of motion.',
    align: 'right' as const,
  },
  {
    num: '03',
    title: 'Track Everything',
    desc: 'On-device vision AI processes every frame in real-time. Reps, form scores, velocity curves — all logged to your phone.',
    align: 'left' as const,
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
          className="font-heading text-4xl md:text-5xl lg:text-6xl anim-up stagger-1 mb-20"
          style={{ color: 'var(--text)' }}
        >
          Three steps.
          <br />
          No setup app.
        </h2>

        <div className="space-y-32">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`flex ${s.align === 'right' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-md anim-up stagger-${i + 1}`}>
                <span
                  className="font-mono text-6xl md:text-7xl block mb-4 font-heading"
                  style={{ color: 'var(--tm-accent)', opacity: 0.25 }}
                >
                  {s.num}
                </span>
                <h3
                  className="font-heading text-2xl md:text-3xl mb-3"
                  style={{ color: 'var(--text)' }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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

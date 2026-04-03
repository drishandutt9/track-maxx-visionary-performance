import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Wrap it.',
    desc: "Stretch the silicone band around any water bottle. 60mm to 100mm — it fits them all. IP67 rated. Drop it, splash it, sweat on it. It doesn't care.",
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
    desc: "That's it. Track-Maxx auto-detects your exercise, counts reps, measures time under tension, scores form in real time, and flags dangerous movement patterns. You never touch your phone.",
    align: 'center' as const,
  },
];

const HowItWorksSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="how-it-works" className="py-[120px]">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <div
          className="text-center mb-16 rounded-2xl p-8 mx-auto max-w-lg"
          style={{
            background: 'rgba(0,0,0,0.45)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <p className="font-mono-label mb-3 anim-up" style={{ color: 'var(--tm-accent)' }}>
            How It Works
          </p>
          <h2
            className="font-heading text-3xl md:text-5xl anim-up stagger-1"
            style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}
          >
            Three steps. Zero friction.
          </h2>
        </div>

        <div className="space-y-12">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`flex ${s.align === 'right' ? 'justify-end' : s.align === 'left' ? 'justify-start' : 'justify-center'}`}
            >
              <div
                className={`anim-up stagger-${i + 2} max-w-md rounded-2xl p-8`}
                style={{
                  background: 'rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <span
                  className="font-mono-label block mb-2"
                  style={{ color: 'var(--tm-accent)', fontSize: '56px', lineHeight: 1 }}
                >
                  {s.num}
                </span>
                <h3
                  className="font-heading text-2xl md:text-3xl mb-3"
                  style={{ color: 'var(--text)' }}
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

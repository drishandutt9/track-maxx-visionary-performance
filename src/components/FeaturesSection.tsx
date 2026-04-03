import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  {
    num: '01',
    title: 'Form Quality Scoring',
    desc: 'Real-time 0–100 form score per rep. Flags knee valgus, back rounding, elbow flare. The feature personal trainers charge £50/hr for.',
  },
  {
    num: '02',
    title: 'Auto Rep Counting',
    desc: 'Detects 50+ exercises automatically. Counts concentric and eccentric phases. No manual logging. No buttons. Just lift.',
  },
  {
    num: '03',
    title: 'Asymmetry Detection',
    desc: 'Compares left vs right side performance. ROM, velocity, form. Flags imbalances >10% that lead to injury.',
  },
  {
    num: '04',
    title: 'Velocity-Based Training',
    desc: 'Bar/body speed per rep in m/s. Auto-regulate load based on velocity drop. Replaces £200–£500 VBT devices. Free.',
  },
  {
    num: '05',
    title: 'Injury Risk Alerts',
    desc: 'Detects dangerous form BEFORE injury occurs. Excessive lumbar flexion, knee valgus beyond 15°. Preventive, not reactive.',
  },
  {
    num: '06',
    title: 'AI Voice Coach',
    desc: '"Knees out!" "Chest up!" "Slow the eccentric!" Live audio cues from real-time form analysis. Like having a PT behind you.',
  },
];

const FeaturesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="features" ref={ref} className="py-[var(--section-pad)]">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left side — heading (model visible behind) */}
          <div className="lg:w-[35%] lg:sticky lg:top-32 lg:self-start">
            <p className="font-mono-label anim-up mb-4" style={{ color: 'var(--tm-accent)' }}>
              Capabilities
            </p>
            <h2
              className="font-heading text-3xl md:text-4xl lg:text-5xl anim-up stagger-1"
              style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}
            >
              What a camera sees that a wrist sensor never will.
            </h2>
          </div>

          {/* Right side — 2×3 grid */}
          <div className="lg:w-[60%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <div
                  key={f.num}
                  className={`bracket-card p-7 anim-3d stagger-${Math.min(i + 1, 5)} transition-all duration-300`}
                  style={{ backdropFilter: 'blur(16px)' }}
                >
                  <span
                    className="font-mono-label text-[11px] block mb-3"
                    style={{ color: 'var(--tm-accent)' }}
                  >
                    {f.num}
                  </span>
                  <h3
                    className="font-heading text-lg md:text-xl mb-3"
                    style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-tertiary)', lineHeight: 1.65 }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

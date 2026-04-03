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
    title: 'Post-Workout Debrief',
    desc: 'AI-generated session summary with specific coaching notes: "Your squat depth improved 12% vs last week but your bench press velocity dropped — consider deloading."',
  },
];

const FeaturesSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="features" className="py-[120px]">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left side — heading */}
          <div className="lg:w-[35%] lg:sticky lg:top-32 lg:self-start">
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(0,0,0,0.45)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <p className="font-mono-label mb-3 anim-up" style={{ color: 'var(--tm-accent)' }}>
                Capabilities
              </p>
              <h2
                className="font-heading text-3xl md:text-4xl anim-up stagger-1"
                style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}
              >
                What a camera sees that a wrist sensor never will.
              </h2>
            </div>
          </div>

          {/* Right side — 2×3 grid */}
          <div className="lg:w-[60%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <div
                  key={f.num}
                  className={`bracket-card anim-3d stagger-${Math.min(i + 1, 5)} p-6 transition-all duration-300`}
                >
                  <span className="font-mono-label text-xs block mb-2" style={{ color: 'var(--tm-accent)' }}>
                    {f.num}
                  </span>
                  <h3
                    className="font-heading text-lg mb-2"
                    style={{ color: 'var(--text)' }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
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

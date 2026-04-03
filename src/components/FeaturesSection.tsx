import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  {
    stat: '99.2%',
    label: 'Rep Detection',
    desc: 'Multi-joint pose estimation counts every rep across 50+ exercises — no wearable needed.',
  },
  {
    stat: '±1.5°',
    label: 'Form Analysis',
    desc: 'Real-time joint-angle feedback scores your form and flags dangerous ranges mid-set.',
  },
  {
    stat: '0.01s',
    label: 'Time Under Tension',
    desc: 'Frame-by-frame eccentric/concentric timing gives you TUT data per rep, per set.',
  },
  {
    stat: '<3%',
    label: 'Asymmetry Detection',
    desc: 'Left-vs-right comparison surfaces imbalances before they become injuries.',
  },
  {
    stat: 'm/s²',
    label: 'Velocity Tracking',
    desc: 'Bar speed and acceleration curves for velocity-based training, auto-logged.',
  },
  {
    stat: '∞',
    label: 'Any Bottle',
    desc: 'Flexible silicone band stretches to fit any standard water bottle — no mount, no clip.',
  },
];

const FeaturesSection = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-[var(--section-pad)]"
      style={{ background: 'var(--bg-section)' }}
    >
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <p className="font-mono-label anim-up mb-4" style={{ color: 'var(--tm-accent)' }}>
          What It Tracks
        </p>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl anim-up stagger-1 mb-16" style={{ color: 'var(--text)' }}>
          Six metrics.
          <br />
          Zero wearables.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.label}
              className={`bracket-card p-8 anim-3d stagger-${Math.min(i + 1, 5)}`}
            >
              <span
                className="font-heading text-4xl md:text-5xl block mb-1"
                style={{ color: 'var(--tm-accent)' }}
              >
                {f.stat}
              </span>
              <span className="font-mono-label block mb-4" style={{ color: 'var(--text-secondary)' }}>
                {f.label}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

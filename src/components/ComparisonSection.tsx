import { useScrollReveal } from '@/hooks/useScrollReveal';

const rows = [
  { metric: 'Rep Counting', tm: 'Auto — Vision AI', others: 'Manual / Accelerometer guess' },
  { metric: 'Form Feedback', tm: 'Real-time angle scoring', others: 'None' },
  { metric: 'Time Under Tension', tm: 'Per-rep, per-phase', others: 'Timer only' },
  { metric: 'Asymmetry', tm: 'Left vs Right comparison', others: 'Not tracked' },
  { metric: 'Velocity', tm: 'Frame-accurate m/s²', others: 'Requires separate device' },
  { metric: 'Setup', tm: 'Wrap on bottle → go', others: 'Strap, clip, calibrate' },
];

const ComparisonSection = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-[var(--section-pad)]"
    >
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <p className="font-mono-label anim-up mb-4" style={{ color: 'var(--tm-accent)' }}>
          Why Track-Maxx
        </p>
        <h2
          className="font-heading text-4xl md:text-5xl anim-up stagger-1 mb-14"
          style={{ color: 'var(--text)' }}
        >
          vs. Everything Else
        </h2>

        <div
          className="bracket-card overflow-hidden anim-fade stagger-2"
          style={{ backdropFilter: 'blur(12px)' }}
        >
          <table className="w-full text-left">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--tm-border)' }}>
                <th className="font-mono-label p-5" style={{ color: 'var(--text-tertiary)' }}>Metric</th>
                <th className="font-mono-label p-5" style={{ color: 'var(--tm-accent)' }}>Track-Maxx</th>
                <th className="font-mono-label p-5" style={{ color: 'var(--text-tertiary)' }}>Others</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.metric} style={{ borderBottom: '1px solid var(--tm-border)' }}>
                  <td className="p-5 font-medium text-sm" style={{ color: 'var(--text-secondary)' }}>{r.metric}</td>
                  <td className="p-5 text-sm" style={{ color: 'var(--text)' }}>{r.tm}</td>
                  <td className="p-5 text-sm" style={{ color: 'var(--text-tertiary)' }}>{r.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

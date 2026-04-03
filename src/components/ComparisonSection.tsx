import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IterationCcw, Target, Scale, Gauge, Timer, MapPin, CreditCard } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const features: { name: string; icon: LucideIcon }[] = [
  { name: 'Auto rep counting', icon: IterationCcw },
  { name: 'Form quality score', icon: Target },
  { name: 'Asymmetry detection', icon: Scale },
  { name: 'Velocity tracking', icon: Gauge },
  { name: 'Time under tension', icon: Timer },
  { name: 'Works at ANY gym', icon: MapPin },
  { name: 'No subscription', icon: CreditCard },
];

const competitors = [
  {
    name: 'Track-Maxx',
    values: ['✓ 50+ exercises', '✓ Real-time', '✓', '✓', '✓ Per-phase', '✓', '✓ Core free'],
    highlight: true,
    showMobile: true,
  },
  {
    name: 'Apple Watch',
    values: ['~6 exercises', '✗', '✗', '✗', '✗', '✓', '✓'],
    highlight: false,
    showMobile: true,
  },
  {
    name: 'Whoop',
    values: ['✗', '✗', '✗', '✗', '✗', '✓', '✗ £24/mo'],
    highlight: false,
    showMobile: false,
  },
  {
    name: 'Tempo',
    values: ['Limited', 'Home only', '✗', '✗', 'Total only', '✗ Home only', '✗ £39/mo'],
    highlight: false,
    showMobile: false,
  },
];

const ComparisonSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="pricing" ref={ref} className="py-[var(--section-pad)]">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <p className="font-mono-label anim-up mb-4" style={{ color: 'var(--tm-accent)' }}>
          The Competition
        </p>
        <h2
          className="font-heading text-4xl md:text-5xl anim-up stagger-1 mb-14"
          style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}
        >
          See the difference.
        </h2>

        <div className="anim-fade stagger-2 overflow-x-auto" style={{
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          background: 'rgba(0, 0, 0, 0.65)',
          borderRadius: '8px',
          border: '1px solid rgba(255,255,255,0.06)',
          padding: '4px',
        }}>
          {/* Header row */}
          <div
            className="grid gap-0"
            style={{
              gridTemplateColumns: '200px repeat(4, 1fr)',
              borderBottom: '1px solid var(--tm-border)',
            }}
          >
            <div className="p-4" />
            {competitors.map((c) => (
              <div
                key={c.name}
                className={`p-4 font-mono-label text-center ${!c.showMobile ? 'hidden md:block' : ''}`}
                style={{
                  color: c.highlight ? 'var(--tm-accent)' : 'var(--text-tertiary)',
                  borderTop: c.highlight ? '3px solid var(--tm-accent)' : 'none',
                }}
              >
                {c.name}
              </div>
            ))}
          </div>

          {/* Data rows */}
          {features.map((feature, fi) => (
            <div
              key={feature.name}
              className="grid gap-0"
              style={{
                gridTemplateColumns: '200px repeat(4, 1fr)',
                borderBottom: '1px solid var(--tm-border)',
                background: fi % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
              }}
            >
              <div
                className="p-4 text-sm font-medium flex items-center gap-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                {(() => { const Icon = feature.icon; return <Icon size={15} style={{ color: 'var(--tm-accent)', opacity: 0.7 }} />; })()}
                {feature.name}
              </div>
              {competitors.map((c) => {
                const val = c.values[fi];
                const isCheck = val.startsWith('✓');
                const isCross = val.startsWith('✗');

                return (
                  <div
                    key={c.name + feature.name}
                    className={`p-4 text-sm text-center ${!c.showMobile ? 'hidden md:block' : ''}`}
                    style={{
                      color: isCheck && c.highlight
                        ? 'var(--tm-accent)'
                        : isCross
                        ? 'var(--text-tertiary)'
                        : c.highlight
                        ? 'var(--text)'
                        : 'var(--text-tertiary)',
                    }}
                  >
                    {val}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

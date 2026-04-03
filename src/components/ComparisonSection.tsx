import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  'Auto rep counting',
  'Form quality score',
  'Asymmetry detection',
  'Velocity tracking',
  'Time under tension',
  'Works at ANY gym',
  'No subscription',
  'Price',
];

const competitors = [
  {
    name: 'Track-Maxx',
    values: ['✓ 50+ exercises', '✓ Real-time', '✓', '✓', '✓ Per-phase', '✓', '✓ Core free', '£99'],
    highlight: true,
    showMobile: true,
  },
  {
    name: 'Apple Watch',
    values: ['~6 exercises', '✗', '✗', '✗', '✗', '✓', '✓', '£399+'],
    highlight: false,
    showMobile: true,
  },
  {
    name: 'Whoop',
    values: ['✗', '✗', '✗', '✗', '✗', '✓', '✗ £24/mo', '£24/mo'],
    highlight: false,
    showMobile: false,
  },
  {
    name: 'Tempo',
    values: ['Limited', 'Home only', '✗', '✗', 'Total only', '✗ Home only', '✗ £39/mo', '£400–2500'],
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

        <div className="anim-fade stagger-2 overflow-x-auto" style={{ backdropFilter: 'blur(16px)' }}>
          {/* Header row */}
          <div
            className="grid gap-0"
            style={{
              gridTemplateColumns: '180px repeat(4, 1fr)',
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
              key={feature}
              className="grid gap-0"
              style={{
                gridTemplateColumns: '180px repeat(4, 1fr)',
                borderBottom: '1px solid var(--tm-border)',
                background: fi % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
              }}
            >
              <div
                className="p-4 text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                {feature}
              </div>
              {competitors.map((c) => {
                const val = c.values[fi];
                const isCheck = val.startsWith('✓');
                const isCross = val.startsWith('✗');
                const isPrice = feature === 'Price' && c.highlight;

                return (
                  <div
                    key={c.name + feature}
                    className={`p-4 text-sm text-center ${!c.showMobile ? 'hidden md:block' : ''}`}
                    style={{
                      color: isCheck && c.highlight
                        ? 'var(--tm-accent)'
                        : isCross
                        ? 'var(--text-tertiary)'
                        : c.highlight
                        ? 'var(--text)'
                        : 'var(--text-tertiary)',
                      fontSize: isPrice ? '24px' : undefined,
                      fontWeight: isPrice ? 700 : undefined,
                      fontFamily: isPrice ? "'Instrument Sans', system-ui" : undefined,
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

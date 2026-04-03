import { useScrollReveal } from '@/hooks/useScrollReveal';

const plans = [
  {
    name: 'Free Forever',
    subtitle: 'Webcam MVP',
    price: '£0',
    priceNote: 'forever',
    features: ['5 exercises', 'Rep counting', 'Form scoring', 'Laptop camera'],
    cta: 'Try Free',
    ctaStyle: 'ghost' as const,
    featured: false,
    disabled: false,
  },
  {
    name: 'Track-Maxx Band',
    subtitle: 'The hardware',
    price: '£69',
    priceNote: 'early access · £99 full price',
    features: ['50+ exercises', 'Form scoring', 'Asymmetry detection', 'Session logs', 'Injury alerts'],
    cta: 'Join Waitlist',
    ctaStyle: 'primary' as const,
    featured: true,
    disabled: false,
  },
  {
    name: 'Track-Maxx Pro',
    subtitle: 'Optional add-on',
    price: '£5.99',
    priceNote: '/month',
    features: ['Everything in Band +', 'AI voice coach', 'VBT tracking', 'Fatigue analytics', 'Progressive overload planner'],
    cta: 'Coming Soon',
    ctaStyle: 'ghost' as const,
    featured: false,
    disabled: true,
  },
];

const PricingSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-[var(--section-pad)]">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <div className="text-center mb-16">
          <p className="font-mono-label anim-up mb-4" style={{ color: 'var(--tm-accent)' }}>
            Pricing
          </p>
          <h2
            className="font-heading text-4xl md:text-5xl anim-up stagger-1"
            style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}
          >
            Simple. Transparent.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`bracket-card p-8 anim-3d stagger-${i + 1} flex flex-col transition-all duration-300`}
              style={{
                backdropFilter: 'blur(16px)',
                borderTop: plan.featured ? '3px solid var(--tm-accent)' : undefined,
                transform: plan.featured ? 'translateY(-8px)' : undefined,
              }}
            >
              <div className="mb-6">
                <span className="font-mono-label text-[11px] block mb-1" style={{ color: 'var(--tm-accent)' }}>
                  {plan.subtitle}
                </span>
                <h3
                  className="font-heading text-xl mb-4"
                  style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className="font-heading text-4xl"
                    style={{ color: plan.featured ? 'var(--tm-accent)' : 'var(--text)' }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="font-mono-label text-[11px]"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {plan.priceNote}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--tm-accent)' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                disabled={plan.disabled}
                className="w-full py-3 rounded-full font-semibold text-sm tracking-wider uppercase transition-all"
                style={{
                  fontFamily: "'Fragment Mono', monospace",
                  letterSpacing: '0.08em',
                  ...(plan.ctaStyle === 'primary'
                    ? {
                        background: 'var(--tm-accent)',
                        color: '#000',
                        cursor: 'pointer',
                      }
                    : {
                        background: 'transparent',
                        border: '1px solid var(--tm-border)',
                        color: plan.disabled ? 'var(--text-tertiary)' : 'var(--text-secondary)',
                        cursor: plan.disabled ? 'not-allowed' : 'pointer',
                        opacity: plan.disabled ? 0.5 : 1,
                      }),
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

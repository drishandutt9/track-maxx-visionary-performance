import { useScrollReveal } from '@/hooks/useScrollReveal';

const specs = ['150° FOV', 'IP67 Rated', '24g Weight'];

const LensReveal = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="min-h-[85vh] flex items-center">
      <div className="mx-auto max-w-content px-[var(--gutter)] w-full">
        <div
          className="max-w-md ml-auto text-right rounded-2xl p-8"
          style={{
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <p className="font-mono-label mb-3 anim-up" style={{ color: 'var(--tm-accent)' }}>
            150° Wide-Angle Vision
          </p>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl anim-up stagger-1 mb-5"
            style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}
          >
            The first tracker that actually{' '}
            <em style={{ color: 'var(--tm-accent)', fontStyle: 'italic' }}>watches</em>{' '}
            you train.
          </h2>
          <p
            className="text-sm md:text-base leading-relaxed anim-up stagger-2 mb-8"
            style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}
          >
            A wide-angle camera lens sits flush on the band surface — the only visible
            feature. No protrusion. No moving parts. Just a sapphire window that captures
            your entire body from any angle.
          </p>

          {/* Spec pills */}
          <div className="flex flex-wrap justify-end gap-3">
            {specs.map((spec, i) => {
              const parts = spec.split(' ');
              const num = parts[0];
              const label = parts.slice(1).join(' ');
              return (
                <div
                  key={spec}
                  className={`anim-up stagger-${i + 3} inline-flex items-center gap-1.5 px-4 py-2 rounded-full`}
                  style={{ border: '1px solid var(--tm-border)', background: 'rgba(0,0,0,0.3)' }}
                >
                  <span className="font-mono-label text-[12px]" style={{ color: 'var(--tm-accent)' }}>
                    {num}
                  </span>
                  <span className="font-mono-label text-[12px]" style={{ color: 'var(--text-secondary)' }}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LensReveal;

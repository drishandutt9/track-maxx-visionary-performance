import { useScrollReveal } from '@/hooks/useScrollReveal';

const BottleFitSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-[var(--section-pad)]">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        {/* Bottle Fit — close-up centre */}
        <div className="min-h-[50vh] flex items-center justify-center mb-32">
          <div className="text-center max-w-lg">
            <p className="font-mono-label mb-3 anim-up" style={{ color: 'var(--tm-accent)' }}>
              Universal Fit
            </p>
            <h2
              className="font-heading text-4xl md:text-5xl anim-up stagger-1 mb-4"
              style={{ color: 'var(--text)' }}
            >
              Any bottle.
              <br />
              Instant mount.
            </h2>
            <p className="text-sm leading-relaxed anim-up stagger-2" style={{ color: 'var(--text-secondary)' }}>
              Medical-grade silicone stretches from 60mm to 100mm diameter. Yeti, Hydro Flask,
              Nalgene, gym-provided — it fits. Slides on in 2 seconds.
            </p>
          </div>
        </div>

        {/* Inner Reveal — back view with specs */}
        <div className="min-h-[50vh] flex items-center">
          <div className="max-w-md ml-auto text-right">
            <p className="font-mono-label mb-3 anim-up" style={{ color: 'var(--tm-accent)' }}>
              Inner Architecture
            </p>
            <h2
              className="font-heading text-3xl md:text-4xl anim-up stagger-1 mb-4"
              style={{ color: 'var(--text)' }}
            >
              Engineered contact.
            </h2>
            <p className="text-sm leading-relaxed anim-up stagger-2" style={{ color: 'var(--text-secondary)' }}>
              Gold-plated pogo pins charge via magnetic dock. The orange lining is a thermal
              interface layer that wicks heat away from the on-board NPU during long sessions.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { val: '12h', label: 'Battery' },
                { val: '38g', label: 'Weight' },
                { val: 'IP67', label: 'Sweat-proof' },
              ].map((spec, i) => (
                <div key={spec.label} className={`anim-up stagger-${i + 2}`}>
                  <span className="font-heading text-2xl block" style={{ color: 'var(--tm-accent)' }}>
                    {spec.val}
                  </span>
                  <span className="font-mono-label text-[10px]" style={{ color: 'var(--text-tertiary)' }}>
                    {spec.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottleFitSection;

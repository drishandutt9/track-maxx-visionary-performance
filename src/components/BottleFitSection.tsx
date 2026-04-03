import { useScrollReveal } from '@/hooks/useScrollReveal';

const BottleFitSection = () => {
  const refZoom = useScrollReveal();
  const refDims = useScrollReveal();
  const refInner = useScrollReveal();
  const refBeauty = useScrollReveal();

  return (
    <section className="py-[var(--section-pad)]">
      <div ref={refZoom} className="min-h-[50vh]" />

      <div ref={refDims} className="min-h-[40vh] flex items-center justify-center px-4">
        <div
          className="flex flex-col items-center gap-6 rounded-2xl p-6 md:p-10"
          style={{
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 anim-fade">
            <div className="text-center sm:text-right">
              <span className="font-mono-label text-[11px] block" style={{ color: 'var(--text-secondary)' }}>
                Width
              </span>
              <span className="font-heading text-xl md:text-2xl" style={{ color: 'var(--tm-accent)' }}>
                ← 22mm →
              </span>
            </div>
            <div className="text-center sm:text-left">
              <span className="font-mono-label text-[11px] block" style={{ color: 'var(--text-secondary)' }}>
                Thickness
              </span>
              <span className="font-heading text-xl md:text-2xl" style={{ color: 'var(--tm-accent)' }}>
                ↕ 12mm
              </span>
            </div>
          </div>
          <div className="anim-fade stagger-1 text-center">
            <span
              className="font-heading text-5xl md:text-6xl block"
              style={{ color: 'var(--tm-accent)' }}
            >
              24g
            </span>
            <span className="font-mono-label text-[11px]" style={{ color: 'var(--text-tertiary)' }}>
              Total Weight
            </span>
          </div>
        </div>
      </div>

      <div ref={refInner} className="min-h-[50vh] flex items-center">
        <div className="mx-auto max-w-content px-[var(--gutter)] w-full">
          <div className="max-w-md mx-auto text-center md:ml-auto md:text-right">
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <p className="font-mono-label mb-3 anim-up" style={{ color: 'var(--tm-accent)' }}>
                Under the Surface
              </p>
              <p
                className="text-sm md:text-base leading-relaxed anim-up stagger-1"
                style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}
              >
                Magnetic pogo-pin charging. Medical-grade silicone inner lining. No exposed ports. No
                moving parts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div ref={refBeauty} className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center max-w-3xl px-4">
          <div
            className="rounded-2xl p-6 md:p-12"
            style={{
              background: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <h2
              className="font-heading text-3xl md:text-5xl lg:text-6xl anim-up"
              style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}
            >
              One band. Any bottle.{' '}
              <em style={{ color: 'var(--tm-accent)', fontStyle: 'italic' }}>Every rep tracked.</em>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottleFitSection;

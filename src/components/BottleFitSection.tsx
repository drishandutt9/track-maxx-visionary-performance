import { useScrollReveal } from '@/hooks/useScrollReveal';

const BottleFitSection = () => {
  const refZoom = useScrollReveal();
  const refDims = useScrollReveal();
  const refInner = useScrollReveal();
  const refBeauty = useScrollReveal();

  return (
    <section className="py-[var(--section-pad)]">
      {/* 72%–75%: Centre & Zoom — dramatic, text cleared */}
      <div ref={refZoom} className="min-h-[50vh] flex items-center justify-center">
        <h2
          className="font-heading text-3xl md:text-4xl text-center anim-fade px-4"
          style={{ color: 'var(--text-tertiary)' }}
        >
          {/* Minimal text — model is the star */}
        </h2>
      </div>

      {/* 75%–78%: Dimensions Reveal */}
      <div ref={refDims} className="min-h-[40vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-12 anim-fade">
            <div className="text-right">
              <span className="font-mono-label text-[11px] block" style={{ color: 'var(--text-secondary)' }}>Width</span>
              <span className="font-heading text-2xl" style={{ color: 'var(--tm-accent)' }}>← 22mm →</span>
            </div>
            <div className="text-left">
              <span className="font-mono-label text-[11px] block" style={{ color: 'var(--text-secondary)' }}>Thickness</span>
              <span className="font-heading text-2xl" style={{ color: 'var(--tm-accent)' }}>↕ 12mm</span>
            </div>
          </div>
          <div className="anim-fade stagger-1 text-center">
            <span
              className="font-heading text-6xl md:text-7xl block"
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

      {/* 78%–80%: Inner Reveal */}
      <div ref={refInner} className="min-h-[50vh] flex items-center">
        <div className="mx-auto max-w-content px-[var(--gutter)] w-full">
          <div className="max-w-md ml-auto text-right">
            <p className="font-mono-label mb-3 anim-up" style={{ color: 'var(--tm-accent)' }}>
              Under the Surface
            </p>
            <p
              className="text-sm md:text-base leading-relaxed anim-up stagger-1"
              style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}
            >
              Magnetic pogo-pin charging. Medical-grade silicone inner lining. No exposed
              ports. No moving parts.
            </p>
          </div>
        </div>
      </div>

      {/* 80%–82%: Beauty Shot */}
      <div ref={refBeauty} className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center max-w-3xl px-4">
          <h2
            className="font-heading text-4xl md:text-5xl lg:text-6xl anim-up"
            style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}
          >
            One band. Any bottle.{' '}
            <em style={{ color: 'var(--tm-accent)', fontStyle: 'italic' }}>Every rep tracked.</em>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default BottleFitSection;

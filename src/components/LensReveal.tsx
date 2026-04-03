import { useScrollReveal } from '@/hooks/useScrollReveal';

const LensReveal = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-content px-[var(--gutter)] w-full">
        <div className="max-w-md ml-auto text-right">
          <p className="font-mono-label mb-3 anim-up" style={{ color: 'var(--tm-accent)' }}>
            160° Wide-Angle Lens
          </p>
          <h2
            className="font-heading text-3xl md:text-4xl anim-up stagger-1 mb-4"
            style={{ color: 'var(--text)' }}
          >
            Sees everything
            <br />
            you do.
          </h2>
          <p className="text-sm leading-relaxed anim-up stagger-2" style={{ color: 'var(--text-secondary)' }}>
            A low-power wide-angle camera captures your full range of motion
            from floor level — no tripod, no phone propped up, no awkward angles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LensReveal;

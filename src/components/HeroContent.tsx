import { useScrollReveal } from '@/hooks/useScrollReveal';

const HeroContent = () => {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center pointer-events-none"
    >
      {/* Top spacer for model visibility */}
      <div className="flex-1" />

      <div className="text-center px-4 pointer-events-auto">
        <p className="font-mono-label mb-6 anim-up" style={{ color: 'var(--tm-accent)' }}>
          Vision AI × Fitness Hardware
        </p>

        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95] anim-up stagger-1"
          style={{ color: 'var(--text)' }}
        >
          Your Gym.
          <br />
          <span style={{ color: 'var(--tm-accent)' }}>Your Vision AI.</span>
        </h1>

        <p
          className="text-base md:text-lg leading-relaxed max-w-lg mx-auto mt-6 anim-up stagger-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          A camera band that wraps around any water bottle. Computer vision
          tracks every rep, every angle, every set — automatically.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="flex-1 flex flex-col items-center justify-end pb-10">
        <div className="flex flex-col items-center gap-2 opacity-40 anim-fade stagger-3">
          <span className="font-mono-label text-[10px]" style={{ color: 'var(--text-tertiary)' }}>
            Scroll
          </span>
          <div className="w-px h-8 animate-pulse" style={{ background: 'var(--text-tertiary)' }} />
        </div>
      </div>
    </section>
  );
};

export default HeroContent;

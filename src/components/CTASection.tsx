import { useScrollReveal } from '@/hooks/useScrollReveal';

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="waitlist"
      ref={ref}
      className="relative py-[var(--section-pad)]"
      style={{ background: 'var(--bg)' }}
    >
      <div className="mx-auto max-w-content px-[var(--gutter)] text-center">
        {/* Glow */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[100px] pointer-events-none"
          style={{ background: 'var(--tm-accent)', top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />

        <p className="font-mono-label anim-up mb-4" style={{ color: 'var(--tm-accent)' }}>
          Early Access
        </p>
        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl anim-up stagger-1 mb-6" style={{ color: 'var(--text)' }}>
          Be First to Track.
        </h2>
        <p className="anim-up stagger-2 text-lg max-w-md mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>
          Limited first-batch units shipping Q3 2026. Join the waitlist — no payment required.
        </p>

        <div className="anim-up stagger-3 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:flex-1 px-5 py-3 rounded-full text-sm outline-none transition-all focus:ring-2"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--tm-border)',
              color: 'var(--text)',
              fontFamily: "'Fragment Mono', monospace",
            }}
          />
          <button
            className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold text-sm tracking-wider uppercase transition-all hover:scale-105"
            style={{
              background: 'var(--tm-accent)',
              color: '#fff',
              fontFamily: "'Fragment Mono', monospace",
            }}
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

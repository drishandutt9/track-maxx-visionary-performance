import { useScrollReveal } from '@/hooks/useScrollReveal';

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section id="waitlist" ref={ref} className="py-[var(--section-pad)]">
      <div className="mx-auto max-w-content px-[var(--gutter)] flex justify-center">
        {/* Pill-shaped footer container */}
        <div
          className="relative w-full max-w-2xl text-center px-8 md:px-16 py-16 md:py-20 anim-fade"
          style={{
            background: 'rgba(0, 0, 0, 0.7)',
            border: '1px solid var(--tm-border)',
            borderRadius: '40px',
            backdropFilter: 'blur(16px)',
          }}
        >
          {/* Gym context strip */}
          <div className="flex items-center justify-center gap-3 mb-8 anim-fade">
            {['/gym-squat.jpg', '/gym-mirror.jpg', '/gym-dumbbell.jpg'].map((src, i) => (
              <div
                key={i}
                className="overflow-hidden"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,107,53,0.15)',
                }}
              >
                <img src={src} alt="Track-Maxx in gym" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>

          <p className="font-mono-label mb-4 anim-up" style={{ color: 'var(--tm-accent)' }}>
            Stop Guessing. Start Seeing.
          </p>
          <h2
            className="font-heading anim-up stagger-1 mb-6"
            style={{
              color: 'var(--text)',
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
            }}
          >
            Your gym sees every rep.
            <br />
            Now your{' '}
            <em style={{ color: 'var(--tm-accent)', fontStyle: 'italic' }}>tracker</em>{' '}
            does too.
          </h2>

          <div className="anim-up stagger-2 mb-8">
            <a
              href="#"
              className="inline-block px-10 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
              style={{
                background: 'var(--tm-accent)',
                color: '#000',
                fontFamily: "'Fragment Mono', monospace",
                fontSize: '14px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Join the Waitlist
            </a>
          </div>

          <p
            className="anim-up stagger-3 text-sm mb-8"
            style={{ color: 'var(--text-tertiary)' }}
          >
            First 500 sign-ups get founding member access.
          </p>

          {/* Email input */}
          <div className="anim-up stagger-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:flex-1 px-5 py-3 rounded-full text-sm outline-none transition-all focus:ring-2"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--tm-border)',
                color: 'var(--text)',
                fontFamily: "'Fragment Mono', monospace",
              }}
            />
            <button
              className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-sm tracking-wider uppercase transition-all hover:scale-105"
              style={{
                background: 'var(--tm-accent)',
                color: '#000',
                fontFamily: "'Fragment Mono', monospace",
              }}
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import { useScrollReveal } from '@/hooks/useScrollReveal';

const HeroContent = () => {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-end pb-16 pointer-events-none"
      style={{ paddingTop: '58vh' }}
    >
      <div className="text-center px-4 pointer-events-auto max-w-3xl mx-auto">

        {/* Heading */}
        <h1
          className="font-heading leading-[0.95] anim-up stagger-1 mb-6"
          style={{
            color: 'var(--text)',
            fontSize: 'clamp(44px, 7vw, 90px)',
            fontWeight: 600,
            letterSpacing: '-0.03em',
          }}
        >
          Your gym sees every rep.
          <br />
          Now your{' '}
          <em style={{ color: 'var(--tm-accent)', fontStyle: 'italic' }}>tracker</em>{' '}
          does too.
        </h1>

        {/* Body */}
        <p
          className="anim-up stagger-2 mx-auto mb-8"
          style={{
            color: 'var(--text-secondary)',
            fontSize: '18px',
            maxWidth: '560px',
            lineHeight: 1.65,
          }}
        >
          The world's first camera band. Wraps around any water bottle. Counts your reps, scores
          your form, and spots injury risks before they happen — all through vision AI.
        </p>

        {/* CTA */}
        <div className="anim-up stagger-3 flex flex-col items-center gap-3">
          <a
            href="#waitlist"
            className="inline-block px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
            style={{
              background: 'var(--tm-accent)',
              color: '#000',
              fontFamily: "'Fragment Mono', monospace",
              fontSize: '13px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Join the Waitlist
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 flex flex-col items-center gap-1 opacity-50 anim-fade stagger-4 pointer-events-none">
        <span className="font-mono-label text-[11px] animate-bounce" style={{ color: 'var(--text-secondary)' }}>
          ↓
        </span>
      </div>
    </section>
  );
};

export default HeroContent;

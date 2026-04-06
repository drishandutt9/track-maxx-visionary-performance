import { useScrollReveal } from '@/hooks/useScrollReveal';

const AppShowcaseSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ padding: 'var(--section-pad) var(--gutter)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 anim-up">
          <span
            className="font-mono-label text-[11px] tracking-[0.2em] uppercase mb-4 inline-block"
            style={{ color: 'var(--tm-accent)' }}
          >
            The App
          </span>
          <h2 className="font-heading text-3xl md:text-5xl mb-4" style={{ color: 'var(--text)' }}>
            Not another <em style={{ color: 'var(--tm-accent)', fontStyle: 'italic' }}>workout logger.</em>
          </h2>
          <p
            className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}
          >
            Most fitness apps are glorified spreadsheets. Track-Maxx shows you what your body is actually doing — in real-time and in review.
          </p>
        </div>

        {/* Phone frame */}
        <div className="flex justify-center mb-10 anim-up" style={{ animationDelay: '0.1s' }}>
          <div
            className="rounded-3xl overflow-hidden w-full max-w-[320px]"
            style={{
              background: 'rgba(10,10,14,0.95)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6), 0 0 40px rgba(255,107,53,0.04)',
            }}
          >
            {/* Status bar */}
            <div
              className="flex items-center justify-between px-5 py-2"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="font-mono-label text-[10px]" style={{ color: 'var(--text-secondary)' }}>
                9:41
              </span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 rounded-sm" style={{ background: 'rgba(255,255,255,0.3)' }} />
              </div>
            </div>

            {/* Top bar */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="font-heading text-sm" style={{ color: 'var(--text)' }}>
                Barbell Squat · Set 3
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-mono-label">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#34d399' }} />
                <span style={{ color: '#34d399' }}>LIVE</span>
              </span>
            </div>

            {/* Main area */}
            <div className="flex gap-3 px-5 py-5">
              {/* Stick figure SVG */}
              <div className="shrink-0" style={{ width: 100, height: 160 }}>
                <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100" height="160">
                  {/* Head */}
                  <circle cx="50" cy="18" r="10" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                  {/* Spine */}
                  <line x1="50" y1="28" x2="50" y2="80" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                  {/* Shoulders */}
                  <line x1="30" y1="42" x2="70" y2="42" stroke="#34d399" strokeWidth="2" />
                  {/* Left arm */}
                  <line x1="30" y1="42" x2="22" y2="65" stroke="#34d399" strokeWidth="1.5" />
                  <line x1="22" y1="65" x2="18" y2="85" stroke="#34d399" strokeWidth="1.5" />
                  {/* Right arm */}
                  <line x1="70" y1="42" x2="78" y2="65" stroke="#34d399" strokeWidth="1.5" />
                  <line x1="78" y1="65" x2="82" y2="85" stroke="#34d399" strokeWidth="1.5" />
                  {/* Hips */}
                  <line x1="38" y1="80" x2="62" y2="80" stroke="#34d399" strokeWidth="2" />
                  {/* Left leg - upper */}
                  <line x1="38" y1="80" x2="32" y2="112" stroke="#34d399" strokeWidth="1.5" />
                  {/* Left knee — problem joint */}
                  <circle cx="32" cy="112" r="4" fill="rgba(255,107,53,0.3)" stroke="var(--tm-accent)" strokeWidth="1.5" />
                  {/* Left leg - lower */}
                  <line x1="32" y1="112" x2="28" y2="148" stroke="var(--tm-accent)" strokeWidth="1.5" />
                  {/* Right leg - upper */}
                  <line x1="62" y1="80" x2="68" y2="112" stroke="#34d399" strokeWidth="1.5" />
                  {/* Right knee — good */}
                  <circle cx="68" cy="112" r="3" fill="rgba(52,211,153,0.2)" stroke="#34d399" strokeWidth="1.5" />
                  {/* Right leg - lower */}
                  <line x1="68" y1="112" x2="72" y2="148" stroke="#34d399" strokeWidth="1.5" />
                  {/* Valgus indicator arrow on left knee */}
                  <path d="M24 108 L18 112 L24 116" stroke="var(--tm-accent)" strokeWidth="1" fill="none" />
                </svg>
              </div>

              {/* Stats */}
              <div className="flex flex-col gap-2.5 justify-center min-w-0">
                <div>
                  <span className="font-mono-label text-[9px] uppercase" style={{ color: 'var(--text-tertiary)' }}>
                    Form Score
                  </span>
                  <p className="font-heading text-2xl" style={{ color: 'var(--tm-accent)' }}>87<span className="text-sm">/100</span></p>
                </div>
                <div className="flex gap-3">
                  <div>
                    <span className="font-mono-label text-[9px]" style={{ color: 'var(--text-tertiary)' }}>Rep</span>
                    <p className="font-heading text-sm" style={{ color: 'var(--text)' }}>6 of 8</p>
                  </div>
                  <div
                    className="px-2 py-0.5 rounded text-[10px] font-mono-label self-end"
                    style={{ background: 'rgba(255,107,53,0.1)', color: 'var(--tm-accent)', border: '1px solid rgba(255,107,53,0.15)' }}
                  >
                    0.42 m/s ↓
                  </div>
                </div>
                <div>
                  <span className="font-mono-label text-[9px]" style={{ color: 'var(--text-tertiary)' }}>TUT</span>
                  <p className="font-mono-label text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                    2.1s ecc · 0.3s pause · 1.4s con
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom home indicator */}
            <div className="flex justify-center pb-2 pt-1">
              <div className="w-28 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
            </div>
          </div>
        </div>

        {/* Stat cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 anim-up" style={{ animationDelay: '0.2s' }}>
          {/* Asymmetry */}
          <div
            className="bracket-card"
            style={{ padding: '20px' }}
          >
            <span className="font-mono-label text-[10px] uppercase tracking-[0.15em]" style={{ color: 'var(--tm-accent)' }}>
              Asymmetry
            </span>
            <p className="text-sm mt-1 mb-3" style={{ color: 'var(--text)' }}>
              L knee 12% weaker
            </p>
            <div className="flex gap-2 items-end">
              <div className="flex-1">
                <span className="font-mono-label text-[9px]" style={{ color: 'var(--text-tertiary)' }}>Left</span>
                <div className="h-1.5 rounded-full mt-1" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="h-full rounded-full" style={{ width: '72%', background: 'var(--tm-accent)' }} />
                </div>
              </div>
              <div className="flex-1">
                <span className="font-mono-label text-[9px]" style={{ color: 'var(--text-tertiary)' }}>Right</span>
                <div className="h-1.5 rounded-full mt-1" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="h-full rounded-full" style={{ width: '84%', background: '#34d399' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Fatigue Curve */}
          <div
            className="bracket-card"
            style={{ padding: '20px' }}
          >
            <span className="font-mono-label text-[10px] uppercase tracking-[0.15em]" style={{ color: 'var(--tm-accent)' }}>
              Fatigue Curve
            </span>
            <p className="text-sm mt-1 mb-3" style={{ color: 'var(--text)' }}>
              Form dropped 8% after set 4
            </p>
            {/* CSS sparkline */}
            <div className="flex items-end gap-[3px] h-6">
              {[92, 94, 91, 90, 88, 84, 82, 80].map((v, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${((v - 75) / 20) * 100}%`,
                    background: i >= 5 ? 'var(--tm-accent)' : '#34d399',
                    opacity: 0.7 + i * 0.04,
                  }}
                />
              ))}
            </div>
          </div>

          {/* AI Coach */}
          <div
            className="bracket-card"
            style={{ padding: '20px' }}
          >
            <span className="font-mono-label text-[10px] uppercase tracking-[0.15em]" style={{ color: 'var(--tm-accent)' }}>
              AI Coach
            </span>
            <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--text)', lineHeight: 1.6 }}>
              "Widen stance 2 inches — your knee valgus improves when you do"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;

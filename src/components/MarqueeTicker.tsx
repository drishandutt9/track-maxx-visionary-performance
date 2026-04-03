const KEYWORDS = [
  'VISION AI',
  'MEDIAPIPE',
  'COMPUTER VISION',
  '150° FOV',
  'IP67',
  '50+ EXERCISES',
  'FORM SCORING',
  'ASYMMETRY DETECTION',
];

const MarqueeTicker = () => {
  const items = [...KEYWORDS, ...KEYWORDS, ...KEYWORDS, ...KEYWORDS];

  return (
    <div className="relative overflow-hidden py-10" style={{ borderTop: '1px solid var(--tm-border)', borderBottom: '1px solid var(--tm-border)' }}>
      {/* Fade masks */}
      <div className="absolute inset-y-0 left-0 w-24 z-10" style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10" style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }} />

      <div className="marquee-track flex whitespace-nowrap">
        {items.map((kw, i) => (
          <span
            key={i}
            className="font-mono-label text-[13px] mx-6 shrink-0"
            style={{ color: 'var(--text-tertiary)', letterSpacing: '0.1em' }}
          >
            {kw}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;

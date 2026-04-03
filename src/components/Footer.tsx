const Footer = () => (
  <footer className="py-8 px-[var(--gutter)]">
    <div className="mx-auto max-w-content flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-heading text-sm tracking-[0.15em] font-semibold" style={{ color: 'var(--text-tertiary)' }}>
        TRACK-MAXX
      </span>
      <span className="font-mono-label text-[11px]" style={{ color: 'var(--text-tertiary)' }}>
        © 2026 Track-Maxx · London, UK · hello@trackmaxx.com
      </span>
    </div>
  </footer>
);

export default Footer;

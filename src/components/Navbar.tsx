const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{ mixBlendMode: 'difference' }}
    >
      <div className="font-heading text-lg tracking-[0.15em] font-semibold" style={{ color: '#fff' }}>
        TRACK-MAXX
      </div>

      <div className="hidden md:flex items-center gap-8">
        {['Features', 'How It Works', 'Pricing'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            className="font-mono-label transition-opacity hover:opacity-70"
            style={{ color: '#fff' }}
          >
            {link}
          </a>
        ))}
      </div>

      <a
        href="#waitlist"
        className="px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-all hover:scale-105"
        style={{
          background: '#FF6B35',
          color: '#fff',
          borderRadius: '100px',
          fontFamily: "'Fragment Mono', monospace",
        }}
      >
        Join Waitlist
      </a>
    </nav>
  );
};

export default Navbar;

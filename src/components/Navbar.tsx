import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5"
      style={{ mixBlendMode: 'difference' }}
    >
      <div
        className="font-heading text-lg tracking-[0.15em] font-semibold select-none"
        style={{ color: '#fff' }}
      >
        TRACK-MAXX
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {['Features', 'How It Works'].map((link) => (
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

      {/* Mobile hamburger button */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{ color: '#fff' }}
      >
        <span className="block w-5 h-[2px] bg-white transition-transform" style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
        <span className="block w-5 h-[2px] bg-white transition-opacity" style={{ opacity: menuOpen ? 0 : 1 }} />
        <span className="block w-5 h-[2px] bg-white transition-transform" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
      </button>

      {/* CTA button - hidden on small screens */}
      <a
        href="#waitlist"
        className="hidden md:inline-flex px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-all hover:scale-105 active:scale-95"
        style={{
          background: '#FF6B35',
          color: '#000',
          borderRadius: '100px',
          fontFamily: "'Fragment Mono', monospace",
          letterSpacing: '0.08em',
        }}
      >
        Join Waitlist
      </a>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col items-center gap-4 py-6 md:hidden"
          style={{
            background: 'rgba(0,0,0,0.9)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            mixBlendMode: 'normal',
          }}
        >
          {['Features', 'How It Works'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="font-mono-label text-sm"
              style={{ color: '#fff' }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#waitlist"
            className="px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full"
            style={{
              background: '#FF6B35',
              color: '#000',
              fontFamily: "'Fragment Mono', monospace",
              letterSpacing: '0.08em',
            }}
            onClick={() => setMenuOpen(false)}
          >
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

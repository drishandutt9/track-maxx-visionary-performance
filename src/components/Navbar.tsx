import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
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

        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className="hidden sm:inline-block px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-all hover:scale-105 active:scale-95"
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

          <button
            className="md:hidden p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ color: '#fff' }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8"
          style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)' }}
        >
          <button
            className="absolute top-5 right-6"
            onClick={() => setMobileOpen(false)}
            style={{ color: '#fff' }}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {['Features', 'How It Works'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-2xl transition-opacity hover:opacity-70"
              style={{ color: '#fff', letterSpacing: '-0.02em' }}
            >
              {link}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-3 text-sm font-semibold tracking-wider uppercase"
            style={{
              background: '#FF6B35',
              color: '#000',
              borderRadius: '100px',
              fontFamily: "'Fragment Mono', monospace",
            }}
          >
            Join Waitlist
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, MessageSquare, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT ME', href: '#about' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '64px',
        backgroundColor: '#ffffff',
        borderBottom: '3px solid var(--color-black)',
        boxShadow: '0 4px 0 var(--color-black)',
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo Sticker */}
        <a
          href="#hero"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'var(--color-yellow)',
            border: '2.5px solid var(--color-black)',
            boxShadow: '3px 3px 0 var(--color-black)',
            padding: '5px 12px',
            fontWeight: 800,
            fontSize: '1.1rem',
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ backgroundColor: 'var(--color-black)', color: '#fff', padding: '2px 6px', fontSize: '0.9rem' }}>
            MH
          </span>
          <span>MAULANA.H</span>
        </a>

        {/* Desktop Menu */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px',
          }}
          className="nb-desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  padding: '6px 12px',
                  backgroundColor: isActive ? 'var(--color-yellow)' : 'transparent',
                  border: isActive ? '2px solid var(--color-black)' : '2px solid transparent',
                  boxShadow: isActive ? '2px 2px 0 var(--color-black)' : 'none',
                  borderRadius: '4px',
                  color: 'var(--color-black)',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'var(--color-yellow-light)';
                    e.currentTarget.style.borderColor = 'var(--color-black)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'transparent';
                  }
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Quick Socials + Hire Me CTA */}
        <div style={{ display: 'none', alignItems: 'center', gap: '8px' }} className="nb-desktop-nav">
          <a
            href="https://github.com/maulanahidayatullah"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: '#fff',
              border: '2px solid var(--color-black)',
              boxShadow: '2px 2px 0 var(--color-black)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
            }}
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/maulana-hidayatullah-64a5a4158/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: '#fff',
              border: '2px solid var(--color-black)',
              boxShadow: '2px 2px 0 var(--color-black)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
            }}
          >
            <Linkedin size={18} />
          </a>

          <a
            href="#contact"
            className="nb-btn nb-btn-cyan"
            style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem', boxShadow: '3px 3px 0 var(--color-black)' }}
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="nb-mobile-toggle"
          style={{
            padding: '6px',
            backgroundColor: 'var(--color-yellow)',
            border: '2px solid var(--color-black)',
            boxShadow: '2px 2px 0 var(--color-black)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: '64px',
            left: 0,
            right: 0,
            backgroundColor: '#ffffff',
            borderBottom: '3px solid var(--color-black)',
            boxShadow: '0 8px 0 rgba(0,0,0,0.15)',
            padding: '20px 24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: '10px 14px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  border: '2px solid var(--color-black)',
                  boxShadow: activeSection === item.href.substring(1) ? '3px 3px 0 var(--color-black)' : 'none',
                  backgroundColor: activeSection === item.href.substring(1) ? 'var(--color-yellow)' : 'transparent',
                  borderRadius: '4px',
                }}
              >
                {item.label}
              </a>
            ))}

            <div style={{ display: 'flex', gap: '10px', marginTop: '10px', paddingTop: '15px', borderTop: '2px dashed var(--color-black)' }}>
              <a href="https://github.com/maulanahidayatullah" target="_blank" rel="noreferrer" className="nb-btn nb-btn-white" style={{ flex: 1, padding: '8px' }}>
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/maulana-hidayatullah-64a5a4158/" target="_blank" rel="noreferrer" className="nb-btn nb-btn-white" style={{ flex: 1, padding: '8px' }}>
                <Linkedin size={18} />
              </a>
              <a href="https://wa.me/+62895636598769" target="_blank" rel="noreferrer" className="nb-btn nb-btn-green" style={{ flex: 1, padding: '8px' }}>
                <MessageSquare size={18} />
              </a>
              <a href="mailto:maulanahidayatullah159@gmail.com" className="nb-btn nb-btn-cyan" style={{ flex: 1, padding: '8px' }}>
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .nb-desktop-nav {
            display: flex !important;
          }
          .nb-mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

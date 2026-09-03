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
      id="main-nav"
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        height: '62px',
        backgroundColor: 'var(--bg-card)',
        borderTop: '3px solid var(--color-border)',
        borderBottom: '3px solid var(--color-border)',
        boxShadow: '0 4px 0 var(--color-shadow)',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '100%',
          padding: '0 clamp(1.25rem, 3.5vw, 3.5rem)',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Mobile Menu Toggle Button: Positioned on the LEFT with comfortable margin */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="nb-mobile-toggle"
          style={{
            padding: '7px 11px',
            backgroundColor: 'var(--color-pastel-blue)',
            color: '#121212',
            border: '2px solid var(--color-border)',
            boxShadow: '2.5px 2.5px 0 var(--color-shadow)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 'auto', // Anchors button to the left on mobile
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Desktop Navigation Links: Left aligned with clean side margin */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '10px',
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
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  padding: '7px 15px',
                  backgroundColor: isActive ? 'var(--color-pastel-blue)' : 'transparent',
                  border: isActive ? '2px solid var(--color-border)' : '2px solid transparent',
                  boxShadow: isActive ? '2px 2px 0 var(--color-shadow)' : 'none',
                  borderRadius: '4px',
                  color: isActive ? '#121212' : 'var(--text-main)',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'var(--color-pastel-blue-light)';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
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

        {/* Desktop Social Icons: Aligned neatly beside sticky ThemeToggle */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px',
            marginRight: '90px', // Space for the fixed ThemeToggle button
          }}
          className="nb-desktop-nav"
        >
          <a
            href="https://github.com/maulanahidayatullah"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-main)',
              border: '2px solid var(--color-border)',
              boxShadow: '2px 2px 0 var(--color-shadow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              transition: 'all 0.12s ease',
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
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-main)',
              border: '2px solid var(--color-border)',
              boxShadow: '2px 2px 0 var(--color-shadow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              transition: 'all 0.12s ease',
            }}
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: '62px',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-card)',
            borderBottom: '3px solid var(--color-border)',
            boxShadow: '0 8px 0 rgba(0,0,0,0.25)',
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
                  border: '2px solid var(--color-border)',
                  boxShadow: activeSection === item.href.substring(1) ? '3px 3px 0 var(--color-shadow)' : 'none',
                  backgroundColor: activeSection === item.href.substring(1) ? 'var(--color-pastel-blue)' : 'transparent',
                  color: activeSection === item.href.substring(1) ? '#121212' : 'var(--text-main)',
                  borderRadius: '4px',
                }}
              >
                {item.label}
              </a>
            ))}

            <div style={{ display: 'flex', gap: '10px', marginTop: '10px', paddingTop: '15px', borderTop: '2px dashed var(--color-border)' }}>
              <a href="https://github.com/maulanahidayatullah" target="_blank" rel="noreferrer" className="nb-btn nb-btn-white" style={{ flex: 1, padding: '8px' }}>
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/maulana-hidayatullah-64a5a4158/" target="_blank" rel="noreferrer" className="nb-btn nb-btn-white" style={{ flex: 1, padding: '8px' }}>
                <Linkedin size={18} />
              </a>
              <a href="https://wa.me/+62895636598769" target="_blank" rel="noreferrer" className="nb-btn" style={{ flex: 1, padding: '8px' }}>
                <MessageSquare size={18} />
              </a>
              <a href="mailto:maulanahidayatullah159@gmail.com" className="nb-btn nb-btn-light" style={{ flex: 1, padding: '8px' }}>
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

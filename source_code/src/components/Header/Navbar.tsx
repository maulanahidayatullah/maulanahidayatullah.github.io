import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { t } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const navItems = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  // Detect when Navbar is sticky at the top of the viewport
  useEffect(() => {
    const navEl = document.getElementById('main-nav');
    if (!navEl) return;

    const handleScroll = () => {
      const rect = navEl.getBoundingClientRect();
      setIsSticky(rect.top <= 2);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll the active nav item into view when scrolling down through sections
  useEffect(() => {
    if (activeSection && itemRefs.current[activeSection]) {
      itemRefs.current[activeSection]?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeSection]);

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
        className="nb-navbar-container"
        style={{
          width: '100%',
          maxWidth: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {/* Navigation Links: Directly visible, scrollable horizontally on mobile */}
        <div
          className={`nb-nav-links-scrollable ${isSticky ? 'is-sticky' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            height: '100%',
          }}
        >
          {navItems.map((item) => {
            const sectionKey = item.href.substring(1);
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={item.href}
                ref={(el) => {
                  itemRefs.current[sectionKey] = el;
                }}
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
                  flexShrink: 0,
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

        {/* Mobile Sticky Dock with Full-Height Thick Neo-Brutalist Border Line */}
        {isSticky && (
          <div
            className="nb-mobile-sticky-dock"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '132px',
              backgroundColor: 'var(--bg-card)',
              borderLeft: '3.5px solid var(--color-border)',
              zIndex: 20,
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Desktop Social Icons: Displayed only on desktop, hidden on mobile */}
        <div
          className="nb-desktop-socials"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px',
            marginRight: '114px', // Space for LanguageToggle and ThemeToggle
            flexShrink: 0,
          }}
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

      <style>{`
        /* Mobile Scrollable Menu (Default non-sticky: Full width, no mask, full visibility) */
        .nb-nav-links-scrollable {
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-left: 16px;
          padding-right: 16px;
          width: 100%;
          max-width: 100%;
          transition: max-width 0.15s ease, margin-right 0.15s ease;
        }
        .nb-nav-links-scrollable::-webkit-scrollbar {
          display: none;
        }

        /* When Sticky on Mobile: Constrained width, smooth fade mask, separated by 132px divider */
        .nb-nav-links-scrollable.is-sticky {
          max-width: calc(100% - 132px);
          width: calc(100% - 132px);
          margin-right: 132px;
          padding-right: 18px;
          -webkit-mask-image: linear-gradient(to right, black calc(100% - 24px), transparent 100%);
          mask-image: linear-gradient(to right, black calc(100% - 24px), transparent 100%);
        }

        /* Desktop Layout (min-width: 900px) */
        @media (min-width: 900px) {
          .nb-navbar-container {
            padding: 0 clamp(1.5rem, 3.5vw, 3.5rem);
          }
          .nb-nav-links-scrollable,
          .nb-nav-links-scrollable.is-sticky {
            padding-left: 0;
            padding-right: 0;
            max-width: 100%;
            width: auto;
            margin-right: 0;
            overflow-x: visible;
            -webkit-mask-image: none !important;
            mask-image: none !important;
          }
          .nb-mobile-sticky-divider,
          .nb-mobile-sticky-dock {
            display: none !important;
          }
          .nb-desktop-socials {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

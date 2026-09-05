import { ArrowUp, Github, Linkedin, Instagram, Mail, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: '#04060a',
        padding: '3.5rem 0 2rem 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #00f2fe 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                color: '#06090e',
                fontSize: '1.1rem',
              }}
            >
              M
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>Maulana Hidayatullah</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Fullstack & Backend Engineer
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <a
              href="https://github.com/maulanahidayatullah"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.2s ease',
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
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.2s ease',
              }}
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://www.instagram.com/_17maulana/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.2s ease',
              }}
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://wa.me/+62895636598769"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.2s ease',
              }}
            >
              <MessageSquare size={18} />
            </a>

            <a
              href="mailto:maulanahidayatullah159@gmail.com"
              aria-label="Email"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.2s ease',
              }}
            >
              <Mail size={18} />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#06090e',
                background: 'var(--gradient-brand)',
                border: 'none',
                boxShadow: '0 0 15px rgba(0, 242, 254, 0.4)',
                marginLeft: '0.5rem',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Maulana Hidayatullah. All rights reserved.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
            Built with React 18, Vite, Framer Motion, GSAP & tsParticles
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Download, Award, Zap, Server, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AboutSection: React.FC = () => {
  const handleDownloadCV = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#facc15', '#38bdf8', '#4ade80', '#fb923c', '#121212'],
    });
  };

  const statCards = [
    { label: 'EXPERIENCE', val: '3+ YEARS', color: 'var(--color-yellow-light)', icon: <Award size={22} /> },
    { label: 'DELIVERED APPS', val: '15+ SYSTEMS', color: 'var(--color-cyan-light)', icon: <Zap size={22} /> },
    { label: 'PROTOCOLS & APIS', val: '8+ HARDWARE', color: 'var(--color-green-light)', icon: <Server size={22} /> },
    { label: 'POLINDRA DEGREE', val: '3.45 / 4.00', color: 'var(--color-coral-light)', icon: <ShieldCheck size={22} /> },
  ];

  const highlights = [
    'Applied Bachelor in Software Engineering from Politeknik Negeri Indramayu (POLINDRA).',
    'Specialist in EV Charger Telematics (OCPP 1.6 protocol) & centralized charging systems.',
    'Hands-on biometric hardware integration (TIMY, Suprema) & Avigilon Access Control.',
    'End-to-end delivery: ERD design, PostgreSQL optimization, and Ubuntu Linux server administration.',
  ];

  return (
    <section
      id="about"
      style={{
        padding: '6rem 0',
        backgroundColor: 'var(--bg-canvas)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="nb-sticker" style={{ marginBottom: '0.75rem' }}>
            ABOUT ME
          </div>
          <h2 className="section-title">ENGINEERING WITH PURPOSE</h2>
          <p className="section-subtitle">
            Bridging hardware devices, high-throughput backends, and responsive frontend experiences.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '4rem',
          }}
        >
          {/* Left Column: Photo Sticker Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="nb-card"
              style={{
                maxWidth: '420px',
                width: '100%',
                padding: '16px',
                backgroundColor: '#ffffff',
                transform: 'rotate(-1.5deg)',
                position: 'relative',
              }}
            >
              {/* Tape Sticker on Top */}
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'var(--color-yellow)',
                  border: '2px solid var(--color-black)',
                  padding: '4px 18px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  boxShadow: '2px 2px 0 var(--color-black)',
                  zIndex: 2,
                }}
              >
                📸 MAULANA HIDAYATULLAH
              </div>

              {/* Photo */}
              <div
                style={{
                  border: '2.5px solid var(--color-black)',
                  overflow: 'hidden',
                  backgroundColor: '#f4f0ea',
                  aspectRatio: '4/5',
                }}
              >
                <img
                  src="images/backgrounds/about-me.png"
                  alt="Maulana Hidayatullah"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              {/* Bottom Caption */}
              <div
                style={{
                  marginTop: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                }}
              >
                <span>FULLSTACK ENGINEER</span>
                <span>🇮🇩 ID</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Details */}
          <div>
            <div
              className="nb-card"
              style={{
                padding: '2rem 2.25rem',
                backgroundColor: '#ffffff',
              }}
            >
              <h3
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  lineHeight: 1.25,
                }}
              >
                Scalable Backend Systems, Clean Integrations & Pragmatic Architecture.
              </h3>

              <p
                style={{
                  color: 'var(--text-main)',
                  fontSize: '1.02rem',
                  lineHeight: 1.75,
                  marginBottom: '1.25rem',
                }}
              >
                Hello! I am Maulana, a Full-Stack Developer and Software Engineering graduate from Indramayu State
                Polytechnic. I specialize in architecting scalable backend systems using{' '}
                <strong>Express.js, Spring Boot, Laravel, and .NET</strong>, with expertise in mission-critical integrations
                like <strong>Xendit payments, OCR recognition, and OCPP 1.6 EV Charger protocols</strong>.
              </p>

              <p
                style={{
                  color: 'var(--text-main)',
                  fontSize: '1.02rem',
                  lineHeight: 1.75,
                  marginBottom: '1.5rem',
                }}
              >
                On the frontend, I transform designs into pixel-perfect, responsive interfaces using{' '}
                <strong>Vue.js, Next.js, and React</strong>. My hands-on track record spans GPS-based employee attendance systems,
                enterprise visitor access control, and nationwide EV charger telemetry. Proficient in PostgreSQL and Linux Ubuntu administration,
                I manage the complete lifecycle of robust enterprise software.
              </p>

              {/* Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                {highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={20} color="var(--color-black)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="CV-Maulana.pdf"
                  download="CV-Maulana.pdf"
                  onClick={handleDownloadCV}
                  className="nb-btn"
                >
                  <Download size={18} />
                  <span>DOWNLOAD CV (PDF)</span>
                </a>

                <a href="#contact" className="nb-btn nb-btn-white">
                  <span>CONTACT ME</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stat Cards Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {statCards.map((stat, idx) => (
            <div
              key={idx}
              className="nb-card"
              style={{
                backgroundColor: stat.color,
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  backgroundColor: '#ffffff',
                  border: '2.5px solid var(--color-black)',
                  boxShadow: '2px 2px 0 var(--color-black)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {stat.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-muted)' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-black)', lineHeight: 1.1 }}>
                  {stat.val}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

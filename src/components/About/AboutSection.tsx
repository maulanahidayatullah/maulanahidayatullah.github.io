import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const handleDownloadCV = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#93c5fd', '#60a5fa', '#7dd3fc', '#121212', '#ffffff'],
    });
  };

  const statCards = [
    { label: t('about.stats.experience_label'), val: t('about.stats.experience_val'), color: 'var(--color-pastel-blue-light)', icon: <Award size={22} /> },
    { label: t('about.stats.degree_label'), val: t('about.stats.degree_val'), color: 'var(--color-pastel-cyan-light)', icon: <ShieldCheck size={22} /> },
    // { label: t('about.stats.protocols_label'), val: t('about.stats.protocols_val'), color: 'var(--color-pastel-mint)', icon: <Server size={22} /> },
    // { label: t('about.stats.degree_label'), val: t('about.stats.degree_val'), color: 'var(--color-pastel-lavender)', icon: <ShieldCheck size={22} /> },
  ];

  const highlights = (t('about.highlights', { returnObjects: true }) as string[]) || [
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
        transition: 'background-color 0.2s ease',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="nb-sticker" style={{ marginBottom: '0.75rem', backgroundColor: 'var(--color-pastel-blue)', color: '#121212' }}>
            {t('about.badge')}
          </div>
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">
            {/* {t('about.subtitle')} */}
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
                backgroundColor: 'var(--bg-card)',
                transform: 'rotate(-1.5deg)',
                position: 'relative',
              }}
            >
              {/* Tape Sticker on Top in Pastel Blue */}
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'var(--color-pastel-blue)',
                  color: '#121212',
                  border: '2px solid var(--color-border)',
                  padding: '4px 18px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  boxShadow: '2px 2px 0 var(--color-shadow)',
                  zIndex: 2,
                }}
              >
                📸 MAULANA HIDAYATULLAH
              </div>

              {/* Photo */}
              <div
                style={{
                  border: '2.5px solid var(--color-border)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-elevated)',
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
                  color: 'var(--text-main)',
                }}
              >
                <span>{t('about.photo_label')}</span>
                <span>🇮🇩 {t('about.location')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Details */}
          <div>
            <div
              className="nb-card"
              style={{
                padding: '2rem 2.25rem',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              {/* <h3
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  lineHeight: 1.25,
                  color: 'var(--text-main)',
                }}
              >
                {t('about.bio_heading')}
              </h3> */}

              <p
                style={{
                  color: 'var(--text-main)',
                  fontSize: '1.02rem',
                  lineHeight: 1.75,
                  marginBottom: '1.25rem',
                }}
              >
                {t('about.bio_p1')}
              </p>

              {/* <p
                style={{
                  color: 'var(--text-main)',
                  fontSize: '1.02rem',
                  lineHeight: 1.75,
                  marginBottom: '1.5rem',
                }}
              >
                {t('about.bio_p2')}
              </p> */}

              {/* Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                {highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={20} color="var(--color-pastel-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-main)' }}>{item}</span>
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
                  <span>{t('about.download_btn')}</span>
                </a>

                <a href="#contact" className="nb-btn nb-btn-white">
                  <span>{t('about.contact_btn')}</span>
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
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-main)',
                  border: '2.5px solid var(--color-border)',
                  boxShadow: '2px 2px 0 var(--color-shadow)',
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
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.1 }}>
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

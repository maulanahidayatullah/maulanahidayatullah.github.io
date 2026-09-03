import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, ShieldCheck, Zap, Server, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AboutSection: React.FC = () => {
  const handleDownloadCV = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f2fe', '#4facfe', '#8b5cf6', '#10b981'],
    });
  };

  const stats = [
    { label: 'Years Experience', value: '3+', icon: <Award size={20} color="#00f2fe" /> },
    { label: 'Completed Systems', value: '15+', icon: <Zap size={20} color="#8b5cf6" /> },
    { label: 'Protocols & APIs', value: '8+', icon: <Server size={20} color="#10b981" /> },
    { label: 'Production Uptime Focus', value: '99.9%', icon: <ShieldCheck size={20} color="#f59e0b" /> },
  ];

  const highlights = [
    'Applied Bachelor in Software Engineering graduate from POLINDRA (GPA: 3.45 / 4.00)',
    'Specialist in OCPP 1.6 EV Charger protocols & nationwide telemetry systems',
    'Deep experience in biometric hardware (TIMY, Suprema) & Avigilon ACM',
    'Full lifecycle engineering from database modeling to Linux NGINX production servers',
  ];

  return (
    <section
      id="about"
      style={{
        padding: '7rem 0',
        position: 'relative',
      }}
    >
      <div className="container">
        <div className="text-center">
          <div className="section-badge">About Me</div>
          <h2 className="section-title">Bridging Hardware, Backends & Frontends</h2>
          <p className="section-subtitle">
            Get to know my engineering philosophy, background, and technical journey.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          {/* Profile Visual Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* Ambient Background Glow */}
            <div
              style={{
                position: 'absolute',
                inset: '-10px',
                background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.25), rgba(139, 92, 246, 0.25))',
                borderRadius: '30px',
                filter: 'blur(30px)',
                zIndex: 0,
              }}
            />

            <div
              className="glass-panel"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '1.25rem',
                borderRadius: '26px',
                background: 'linear-gradient(180deg, rgba(22, 30, 50, 0.75) 0%, rgba(10, 15, 29, 0.85) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                maxWidth: '420px',
                width: '100%',
              }}
            >
              <div
                style={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '4/5',
                  backgroundColor: '#090d16',
                }}
              >
                <img
                  src="images/backgrounds/about-me.png"
                  alt="Maulana Hidayatullah"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                
                {/* Floating Badge Over Photo */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    padding: '0.75rem 1rem',
                    background: 'rgba(6, 9, 14, 0.85)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>Maulana Hidayatullah</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                      Software Engineer
                    </div>
                  </div>
                  <span style={{ fontSize: '1.2rem' }}>🇮🇩</span>
                </div>
              </div>

              {/* Stats Row Under Photo */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.75rem',
                  marginTop: '1.25rem',
                }}
              >
                {stats.slice(0, 2).map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: '0.8rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                    }}
                  >
                    {item.icon}
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#fff', lineHeight: 1 }}>
                        {item.value}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* About Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <h3
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 700,
                marginBottom: '1.25rem',
                lineHeight: 1.3,
              }}
            >
              Architecting Reliable Solutions From Concept to Production.
            </h3>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
                textAlign: 'justify',
              }}
            >
              Hello! I am Maulana, a Full-Stack Developer and Software Engineering graduate from Indramayu State Polytechnic. 
              I specialize in architecting scalable backend systems using <strong>Express.js, Spring Boot, Laravel, and .NET</strong>, 
              with expertise in complex mission-critical integrations like <strong>Xendit, OCR, and OCPP 1.6 EV Charger protocols</strong>.
            </p>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                marginBottom: '2rem',
                textAlign: 'justify',
              }}
            >
              On the frontend, I transform designs into pixel-perfect, reactive interfaces using <strong>Vue.js and Next.js / React</strong>. 
              My track record covers GPS attendance systems, enterprise visitor access control, and nationwide EV charger telemetry. 
              Proficient in PostgreSQL database optimization and Ubuntu server administration, I own the full lifecycle of robust software.
            </p>

            {/* Bullet Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {highlights.map((point, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="CV-Maulana.pdf"
                download="CV-Maulana.pdf"
                onClick={handleDownloadCV}
                className="btn-primary"
              >
                <Download size={18} />
                <span>Download My Full Resume (PDF)</span>
              </a>

              <a href="#contact" className="btn-secondary">
                Let's Talk
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

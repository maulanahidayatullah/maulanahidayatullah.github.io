import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import confetti from 'canvas-confetti';
import { Download, ArrowRight, Terminal, Code2 } from 'lucide-react';
import { ParticlesHero } from './ParticlesHero';

const ROLES = [
  'Fullstack Developer',
  'Backend Specialist',
  'EV & IoT Protocol Engineer',
  'API & System Architect',
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  // Rotate roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance Animation
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-badge',
        { opacity: 0, y: -20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.4'
        )
        .fromTo(
          '.hero-role-wrapper',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          actionsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          '.hero-terminal-card',
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9 },
          '-=0.5'
        );
    },
    { scope: heroRef }
  );

  const handleDownloadCV = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f2fe', '#4facfe', '#8b5cf6', '#10b981'],
    });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        overflow: 'hidden',
      }}
    >
      {/* Interactive Particle.js Canvas */}
      <ParticlesHero />

      {/* Decorative Radial Glows */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.12) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ zIndex: 1 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {/* Status Badge */}
          <div
            className="hero-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1.1rem',
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: '#34d399',
              marginBottom: '1.5rem',
              boxShadow: '0 0 15px rgba(16, 185, 129, 0.15)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 8px #10b981',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
              }}
            />
            Available for High-Impact Roles & Projects
          </div>

          {/* Main Headline */}
          <h1
            ref={headlineRef}
            style={{
              fontSize: 'clamp(2.5rem, 6.5vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
            }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Maulana Hidayatullah</span>
          </h1>

          {/* Rotating Role Pill */}
          <div
            className="hero-role-wrapper"
            style={{
              height: '3.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ y: 25, opacity: 0, filter: 'blur(4px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: -25, opacity: 0, filter: 'blur(4px)' }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.4rem 1.25rem',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(0, 242, 254, 0.25)',
                  borderRadius: '9999px',
                  boxShadow: '0 0 20px rgba(0, 242, 254, 0.12)',
                }}
              >
                <Code2 size={20} color="var(--accent-cyan)" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                    fontWeight: 600,
                    color: '#e2e8f0',
                  }}
                >
                  {ROLES[roleIndex]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subtitle / Pitch */}
          <p
            ref={descRef}
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
            }}
          >
            Software Engineer specialized in architecting resilient backend systems,
            EV charging telematics (OCPP 1.6), biometric attendance, and high-performance
            full-stack web applications.
          </p>

          {/* CTA Buttons */}
          <div
            ref={actionsRef}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '3rem',
            }}
          >
            <a href="#portfolio" className="btn-primary">
              <span>Explore My Work</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="CV-Maulana.pdf"
              download="CV-Maulana.pdf"
              onClick={handleDownloadCV}
              className="btn-secondary"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>

            <a href="#about" className="btn-secondary" style={{ borderStyle: 'dashed' }}>
              <span>Know More</span>
            </a>
          </div>

          {/* Floating Interactive Terminal Preview */}
          <div
            className="hero-terminal-card glass-panel"
            style={{
              width: '100%',
              maxWidth: '620px',
              padding: '1.25rem 1.5rem',
              textAlign: 'left',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(8, 12, 22, 0.75)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '0.8rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '0.8rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                }}
              >
                <Terminal size={14} />
                <span>maulana@engineer:~$</span>
              </div>
              <span style={{ width: '20px' }} />
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
              }}
            >
              <div>
                <span style={{ color: 'var(--accent-cyan)' }}>const</span> engineer = {'{'}
              </div>
              <div style={{ paddingLeft: '1.2rem' }}>
                name: <span style={{ color: '#fcd34d' }}>'Maulana Hidayatullah'</span>,
              </div>
              <div style={{ paddingLeft: '1.2rem' }}>
                coreFocus: [<span style={{ color: '#fcd34d' }}>'Node.js'</span>, <span style={{ color: '#fcd34d' }}>'Spring Boot'</span>, <span style={{ color: '#fcd34d' }}>'OCPP 1.6'</span>, <span style={{ color: '#fcd34d' }}>'PostgreSQL'</span>],
              </div>
              <div style={{ paddingLeft: '1.2rem' }}>
                passion: <span style={{ color: '#fcd34d' }}>'Scalable Systems & Hardware-Software Bridges'</span>,
              </div>
              <div style={{ paddingLeft: '1.2rem' }}>
                readyToContribute: <span style={{ color: '#4ade80' }}>true</span>
              </div>
              <div>{'};'}</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
};

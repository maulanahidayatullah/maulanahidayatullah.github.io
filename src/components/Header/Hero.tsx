import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import confetti from 'canvas-confetti';
import { ArrowDownRight, Download, Sparkles, Code2 } from 'lucide-react';
import { ParticlesHero } from './ParticlesHero';

const ROLES = [
  'FULLSTACK DEVELOPER',
  'BACKEND SPECIALIST',
  'EV & IOT TELEMATICS ENGINEER',
  'API & DATABASE ARCHITECT',
];

const TICKER_ITEMS = [
  'NODE.JS / EXPRESS',
  'JAVA SPRING BOOT',
  'OCPP 1.6 EV PROTOCOL',
  'POSTGRESQL & MONGODB',
  'DOCKER & LINUX UBUNTU',
  'VUE.JS & REACT',
  'HARDWARE BIOMETRICS',
  'XENDIT PAYMENT RAILS',
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.nb-hero-card',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.3 }
      );
    },
    { scope: heroRef }
  );

  const handleDownloadCV = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#facc15', '#38bdf8', '#4ade80', '#fb923c', '#121212'],
    });
  };

  return (
    <header
      id="hero"
      ref={heroRef}
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-canvas)',
        paddingTop: '5rem',
        paddingBottom: '4rem',
        overflow: 'hidden',
      }}
    >
      {/* Neo-Brutalist Canvas Particles */}
      <ParticlesHero />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          {/* Top Stickers */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '1.5rem',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--color-yellow)',
                border: '2.5px solid var(--color-black)',
                boxShadow: '3px 3px 0 var(--color-black)',
                padding: '4px 14px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Sparkles size={14} />
              <span>INDONESIA BASED DEVELOPER</span>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-green-light)',
                border: '2.5px solid var(--color-black)',
                boxShadow: '3px 3px 0 var(--color-black)',
                padding: '4px 14px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#16a34a',
                  display: 'inline-block',
                }}
              />
              <span>OPEN FOR HIGH-IMPACT ROLES</span>
            </div>
          </div>

          {/* Main Giant Headline */}
          <h1
            ref={headlineRef}
            style={{
              fontSize: 'clamp(2.8rem, 7.5vw, 5.8rem)',
              fontWeight: 900,
              color: 'var(--color-black)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            MAULANA <br />
            <span
              style={{
                backgroundColor: 'var(--color-yellow)',
                padding: '0 12px',
                border: '3px solid var(--color-black)',
                boxShadow: '6px 6px 0 var(--color-black)',
                display: 'inline-block',
                transform: 'rotate(-1deg)',
              }}
            >
              HIDAYATULLAH
            </span>
          </h1>

          {/* Rotating Role Box */}
          <div
            style={{
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '1.75rem 0',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                style={{
                  backgroundColor: '#ffffff',
                  border: '3px solid var(--color-black)',
                  boxShadow: '4px 4px 0 var(--color-black)',
                  padding: '6px 20px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Code2 size={20} color="var(--color-black)" />
                <span>{ROLES[roleIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subtitle / Bio Pitch */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              fontWeight: 500,
              color: 'var(--text-main)',
              maxWidth: '740px',
              margin: '0 auto 2.5rem auto',
              lineHeight: 1.6,
            }}
          >
            Architecting robust backend microservices, EV charger protocols (OCPP 1.6), 
            biometric hardware integrations, and responsive web platforms with clean, reliable execution.
          </p>

          {/* Call-To-Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3.5rem',
            }}
          >
            <a href="#portfolio" className="nb-btn" style={{ padding: '0.9rem 2rem' }}>
              <span>EXPLORE PROJECTS</span>
              <ArrowDownRight size={20} />
            </a>

            <a
              href="CV-Maulana.pdf"
              download="CV-Maulana.pdf"
              onClick={handleDownloadCV}
              className="nb-btn nb-btn-white"
              style={{ padding: '0.9rem 2rem' }}
            >
              <Download size={20} />
              <span>DOWNLOAD CV</span>
            </a>

            <a href="#contact" className="nb-btn nb-btn-cyan" style={{ padding: '0.9rem 2rem' }}>
              <span>GET IN TOUCH</span>
            </a>
          </div>

          {/* Neo-Brutalist Terminal Card */}
          <div
            className="nb-hero-card nb-card"
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              padding: '0',
              textAlign: 'left',
              overflow: 'hidden',
            }}
          >
            {/* Terminal Window Header */}
            <div
              style={{
                backgroundColor: 'var(--color-yellow)',
                borderBottom: '3px solid var(--color-black)',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ width: '13px', height: '13px', border: '2px solid var(--color-black)', backgroundColor: '#ef4444', borderRadius: '50%' }} />
                <span style={{ width: '13px', height: '13px', border: '2px solid var(--color-black)', backgroundColor: '#facc15', borderRadius: '50%' }} />
                <span style={{ width: '13px', height: '13px', border: '2px solid var(--color-black)', backgroundColor: '#22c55e', borderRadius: '50%' }} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.85rem' }}>
                engineer_spec.json
              </div>
              <span style={{ width: '30px' }} />
            </div>

            {/* Terminal Content */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem',
                backgroundColor: '#ffffff',
                lineHeight: 1.7,
              }}
            >
              <div><strong style={{ color: '#0284c7' }}>"developer"</strong>: <span style={{ color: '#b45309' }}>"Maulana Hidayatullah"</span>,</div>
              <div><strong style={{ color: '#0284c7' }}>"core_specialties"</strong>: [</div>
              <div style={{ paddingLeft: '1.5rem' }}>
                <span style={{ color: '#b45309' }}>"Express.js"</span>, <span style={{ color: '#b45309' }}>"Spring Boot"</span>, <span style={{ color: '#b45309' }}>"OCPP 1.6 Telematics"</span>, <span style={{ color: '#b45309' }}>"PostgreSQL"</span>
              </div>
              <div>],</div>
              <div><strong style={{ color: '#0284c7' }}>"education"</strong>: <span style={{ color: '#b45309' }}>"Indramayu State Polytechnic (GPA 3.45/4.00)"</span>,</div>
              <div><strong style={{ color: '#0284c7' }}>"production_ready"</strong>: <span style={{ color: '#16a34a', fontWeight: 700 }}>true</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker Banner */}
      <div style={{ marginTop: '4rem' }}>
        <div className="ticker-wrap">
          <div className="ticker-track">
            {TICKER_ITEMS.concat(TICKER_ITEMS).map((item, idx) => (
              <div key={idx} className="ticker-item">
                <span>✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

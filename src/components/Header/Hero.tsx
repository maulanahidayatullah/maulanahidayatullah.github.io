import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import confetti from 'canvas-confetti';
import { ArrowDownRight, Download, Sparkles, Code2, Send } from 'lucide-react';
import { ParticlesHero } from './ParticlesHero';

const ROLES = [
  'FULLSTACK DEVELOPER',
  'BACKEND SPECIALIST',
  'EV & IOT TELEMATICS ENGINEER',
  'API & DATABASE ARCHITECT',
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
      colors: ['#93c5fd', '#60a5fa', '#7dd3fc', '#121212', '#ffffff'],
    });
  };

  return (
    <header
      id="hero"
      ref={heroRef}
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-canvas)',
        paddingTop: '6rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        transition: 'background-color 0.2s ease',
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
                backgroundColor: 'var(--color-pastel-blue)',
                border: '2.5px solid var(--color-border)',
                boxShadow: '3px 3px 0 var(--color-shadow)',
                padding: '4px 14px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                color: '#121212',
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
                backgroundColor: 'var(--bg-card)',
                border: '2.5px solid var(--color-border)',
                boxShadow: '3px 3px 0 var(--color-shadow)',
                padding: '4px 14px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                color: 'var(--text-main)',
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
                  backgroundColor: '#3b82f6',
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
              color: 'var(--text-main)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            MAULANA <br />
            <span
              style={{
                backgroundColor: 'var(--color-pastel-blue)',
                color: '#121212',
                padding: '0 14px',
                border: '3px solid var(--color-border)',
                boxShadow: '6px 6px 0 var(--color-shadow)',
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
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-main)',
                  border: '3px solid var(--color-border)',
                  boxShadow: '4px 4px 0 var(--color-shadow)',
                  padding: '6px 20px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Code2 size={20} color="var(--color-pastel-blue)" />
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

            <a
              href="#contact"
              className="nb-btn nb-btn-light"
              style={{ padding: '0.9rem 2rem' }}
            >
              <Send size={18} />
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
            {/* Terminal Window Header with Pastel Blue */}
            <div
              style={{
                backgroundColor: 'var(--color-pastel-blue)',
                color: '#121212',
                borderBottom: '3px solid var(--color-border)',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ width: '13px', height: '13px', border: '2px solid #121212', backgroundColor: '#ef4444', borderRadius: '50%' }} />
                <span style={{ width: '13px', height: '13px', border: '2px solid #121212', backgroundColor: '#facc15', borderRadius: '50%' }} />
                <span style={{ width: '13px', height: '13px', border: '2px solid #121212', backgroundColor: '#22c55e', borderRadius: '50%' }} />
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
                backgroundColor: 'var(--bg-card)',
                lineHeight: 1.7,
              }}
            >
              <div><strong style={{ color: 'var(--color-pastel-blue)' }}>"developer"</strong>: <span style={{ color: '#10b981' }}>"Maulana Hidayatullah"</span>,</div>
              <div><strong style={{ color: 'var(--color-pastel-blue)' }}>"core_specialties"</strong>: [</div>
              <div style={{ paddingLeft: '1.5rem' }}>
                <span style={{ color: '#10b981' }}>"Express.js"</span>, <span style={{ color: '#10b981' }}>"Spring Boot"</span>, <span style={{ color: '#10b981' }}>"OCPP 1.6 Telematics"</span>, <span style={{ color: '#10b981' }}>"PostgreSQL"</span>
              </div>
              <div>],</div>
              <div><strong style={{ color: 'var(--color-pastel-blue)' }}>"education"</strong>: <span style={{ color: '#10b981' }}>"Indramayu State Polytechnic (GPA 3.45/4.00)"</span>,</div>
              <div><strong style={{ color: 'var(--color-pastel-blue)' }}>"production_ready"</strong>: <span style={{ color: '#22c55e', fontWeight: 700 }}>true</span></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import confetti from 'canvas-confetti';
import { ArrowDownRight, Download, Code2, Send } from 'lucide-react';
import { ParticlesHero } from './ParticlesHero';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const roles = (t('hero.roles', { returnObjects: true }) as string[]) || [
    'FULLSTACK DEVELOPER',
    'BACKEND SPECIALIST',
    'EV & IOT TELEMATICS ENGINEER',
    'API & DATABASE ARCHITECT',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  useGSAP(
    () => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
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
        minHeight: 'calc(100vh - 62px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 1.5rem',
        overflow: 'hidden',
        transition: 'background-color 0.2s ease',
      }}
    >
      {/* Neo-Brutalist Canvas Particles */}
      <ParticlesHero />

      {/* Unified, Compact & Centered Hero Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '920px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* 1. Main Giant Headline */}
        <h1
          ref={headlineRef}
          style={{
            fontSize: 'clamp(2.6rem, 7vw, 5.4rem)',
            fontWeight: 900,
            color: 'var(--text-main)',
            letterSpacing: '-0.03em',
            lineHeight: 1.06,
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          MAULANA <br />
          <span
            style={{
              backgroundColor: 'var(--color-pastel-blue)',
              color: '#121212',
              padding: '2px 18px',
              border: '3px solid var(--color-border)',
              boxShadow: '5px 5px 0 var(--color-shadow)',
              display: 'inline-block',
              transform: 'rotate(-1deg)',
              marginTop: '0.35rem',
            }}
          >
            HIDAYATULLAH
          </span>
        </h1>

        {/* 2. Rotating Role Box (Compact spacing directly below name) */}
        <div
          style={{
            height: '54px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '0.75rem',
            marginBottom: '1.75rem',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${roles[roleIndex]}-${roleIndex}`}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              style={{
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-main)',
                border: '3px solid var(--color-border)',
                boxShadow: '4px 4px 0 var(--color-shadow)',
                padding: '8px 22px',
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.95rem, 2.5vw, 1.35rem)',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Code2 size={22} color="var(--color-pastel-blue)" />
              <span>{roles[roleIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. Action Buttons Row (Directly below role in a cohesive center cluster) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <a href="#portfolio" className="nb-btn" style={{ padding: '0.85rem 2rem' }}>
            <span>{t('hero.explore_projects')}</span>
            <ArrowDownRight size={20} />
          </a>

          <a
            href="Maulana_Hidayatullah-Fullstack_Developer.pdf"
            download="Maulana_Hidayatullah-Fullstack_Developer.pdf"
            onClick={handleDownloadCV}
            className="nb-btn nb-btn-white"
            style={{ padding: '0.85rem 2rem' }}
          >
            <Download size={20} />
            <span>{t('hero.download_cv')}</span>
          </a>

          <a
            href="#contact"
            className="nb-btn nb-btn-light"
            style={{ padding: '0.85rem 2rem' }}
          >
            <Send size={18} />
            <span>{t('hero.get_in_touch')}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

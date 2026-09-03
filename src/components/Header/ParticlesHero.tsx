import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

export const ParticlesHero: React.FC = () => {
  const [init, setInit] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // Check initial dark mode
    setIsDark(document.documentElement.classList.contains('dark'));

    // Observer for dark mode class changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        grab: {
          distance: 150,
          links: {
            opacity: isDark ? 0.8 : 0.6,
            color: isDark ? '#60a5fa' : '#3b82f6',
          },
        },
        push: {
          quantity: 3,
        },
      },
    },
    particles: {
      color: {
        value: isDark
          ? ['#f8fafc', '#60a5fa', '#38bdf8', '#a78bfa', '#2dd4bf']
          : ['#121212', '#93c5fd', '#60a5fa', '#7dd3fc', '#bfdbfe'],
      },
      links: {
        color: isDark ? '#60a5fa' : '#3b82f6',
        distance: 140,
        enable: true,
        opacity: isDark ? 0.45 : 0.35,
        width: 1.5,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 1.0,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          width: 900,
          height: 900,
        },
        value: 50,
      },
      opacity: {
        value: { min: isDark ? 0.45 : 0.35, max: isDark ? 0.95 : 0.85 },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 2, max: 4.5 },
      },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'auto',
        zIndex: 0,
      }}
    >
      <Particles
        id={`particles-hero-${isDark ? 'dark' : 'light'}`}
        options={options}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

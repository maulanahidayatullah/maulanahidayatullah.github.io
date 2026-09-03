import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

export const ParticlesHero: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
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
            opacity: 0.6,
            color: '#60a5fa',
          },
        },
        push: {
          quantity: 3,
        },
      },
    },
    particles: {
      color: {
        value: ['#121212', '#93c5fd', '#60a5fa', '#7dd3fc', '#bfdbfe'],
      },
      links: {
        color: '#60a5fa',
        distance: 140,
        enable: true,
        opacity: 0.35,
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
        value: { min: 0.35, max: 0.85 },
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
        id="particles-js"
        options={options}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

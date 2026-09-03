import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';
import { ProjectItem } from '../../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
        }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(12, 16, 23, 0.8)',
            backdropFilter: 'blur(4px)',
          }}
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-main)',
            border: '3.5px solid var(--color-border)',
            boxShadow: '8px 8px 0px var(--color-shadow)',
            borderRadius: '8px',
          }}
        >
          {/* Neo-Brutalist Window Titlebar in Pastel Blue */}
          <div
            style={{
              backgroundColor: 'var(--color-pastel-blue)',
              color: '#121212',
              borderBottom: '3.5px solid var(--color-border)',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'sticky',
              top: 0,
              zIndex: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '12px', height: '12px', border: '2px solid #121212', backgroundColor: '#ef4444', borderRadius: '50%' }} />
              <span style={{ width: '12px', height: '12px', border: '2px solid #121212', backgroundColor: '#facc15', borderRadius: '50%' }} />
              <span style={{ width: '12px', height: '12px', border: '2px solid #121212', backgroundColor: '#22c55e', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.85rem', marginLeft: '6px' }}>
                PROJECT_SPEC: {project.id.toUpperCase()}.EXE
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                width: '30px',
                height: '30px',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-main)',
                border: '2px solid var(--color-border)',
                boxShadow: '2px 2px 0 var(--color-shadow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Project Screenshot */}
          <div
            style={{
              borderBottom: '3px solid var(--color-border)',
              backgroundColor: 'var(--bg-elevated)',
              maxHeight: '380px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                maxHeight: '380px',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Details Body */}
          <div style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span className="nb-tag" style={{ backgroundColor: 'var(--color-pastel-blue-light)' }}>
                {project.categoryLabel}
              </span>
              {project.year && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                  }}
                >
                  <Calendar size={14} />
                  {project.year}
                </span>
              )}
            </div>

            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 900,
                color: 'var(--text-main)',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              {project.title}
            </h2>

            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              {project.description}
            </p>

            {/* Badges */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.82rem', marginBottom: '8px', textTransform: 'uppercase', color: 'var(--text-main)' }}>
                INTEGRATIONS & TECH STACK:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.badges.map((b, idx) => (
                  <span key={idx} className="nb-tag">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', borderTop: '2.5px solid var(--color-border)', paddingTop: '1.25rem' }}>
              <button onClick={onClose} className="nb-btn nb-btn-white" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}>
                CLOSE
              </button>
              <a href="#contact" onClick={onClose} className="nb-btn" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}>
                INQUIRE ABOUT THIS
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

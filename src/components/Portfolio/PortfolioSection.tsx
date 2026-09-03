import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioProjects, ProjectItem } from '../../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'backend' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: 'all', label: `ALL PROJECTS (${portfolioProjects.length})` },
    { id: 'fullstack', label: 'FULLSTACK (5)' },
    { id: 'backend', label: 'BACKEND (5)' },
    { id: 'mobile', label: 'MOBILE & IOT (2)' },
  ] as const;

  const filteredProjects =
    filter === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      style={{
        padding: '6rem 0',
        backgroundColor: 'var(--bg-canvas)',
        borderTop: '3px solid var(--color-border)',
        borderBottom: '3px solid var(--color-border)',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="nb-sticker" style={{ marginBottom: '0.75rem', backgroundColor: 'var(--color-pastel-blue)', color: '#121212' }}>
            PORTFOLIO
          </div>
          <h2 className="section-title">SELECTED WORKS & SYSTEMS</h2>
          <p className="section-subtitle">
            Commercial IoT platforms, EV charging telematics (OCPP 1.6), biometric attendance, and enterprise portals.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '2rem',
            }}
          >
            {filterTabs.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  style={{
                    padding: '8px 18px',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    letterSpacing: '0.02em',
                    backgroundColor: isActive ? 'var(--color-pastel-blue)' : 'var(--bg-card)',
                    color: isActive ? '#121212' : 'var(--text-main)',
                    border: '2.5px solid var(--color-border)',
                    boxShadow: isActive ? '4px 4px 0 var(--color-shadow)' : '2px 2px 0 var(--color-shadow)',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.transform = 'translate(-2px, -2px)';
                      e.currentTarget.style.boxShadow = '3px 3px 0 var(--color-shadow)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.transform = 'translate(0, 0)';
                      e.currentTarget.style.boxShadow = '2px 2px 0 var(--color-shadow)';
                    }
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedProject(project)}
                className="nb-card"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  padding: '0',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image Header with Thick Border */}
                <div
                  style={{
                    position: 'relative',
                    height: '210px',
                    backgroundColor: 'var(--bg-elevated)',
                    borderBottom: '3px solid var(--color-border)',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Category Sticker in Pastel Blue */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'var(--color-pastel-blue)',
                      color: '#121212',
                      border: '2px solid var(--color-border)',
                      boxShadow: '2px 2px 0 var(--color-shadow)',
                      padding: '3px 10px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}
                  >
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Card Details */}
                <div
                  style={{
                    padding: '1.5rem',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--text-main)',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.5,
                      marginBottom: '1.25rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Badges */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginBottom: '1.5rem',
                      marginTop: 'auto',
                    }}
                  >
                    {project.badges.slice(0, 3).map((badge, bIdx) => (
                      <span key={bIdx} className="nb-tag" style={{ fontSize: '0.75rem' }}>
                        {badge}
                      </span>
                    ))}
                    {project.badges.length > 3 && (
                      <span className="nb-tag" style={{ fontSize: '0.75rem', backgroundColor: 'var(--bg-elevated)' }}>
                        +{project.badges.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Inspect Button Bar */}
                  <div
                    style={{
                      borderTop: '2px solid var(--color-border)',
                      paddingTop: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      color: 'var(--text-main)',
                    }}
                  >
                    <span>INSPECT SPECS</span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

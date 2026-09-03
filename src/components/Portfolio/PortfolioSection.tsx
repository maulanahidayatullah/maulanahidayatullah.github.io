import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';
import { portfolioProjects, ProjectItem } from '../../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'backend' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Fullstack' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile & IoT' },
  ] as const;

  const filteredProjects =
    filter === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      style={{
        padding: '7rem 0',
        position: 'relative',
        backgroundColor: 'rgba(6, 9, 14, 0.5)',
      }}
    >
      <div className="container">
        <div className="text-center">
          <div className="section-badge">Selected Work</div>
          <h2 className="section-title">Engineered Portfolios</h2>
          <p className="section-subtitle">
            A showcase of production systems spanning IoT EV chargers, biometric attendance, payment APIs, and enterprise portals.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.4rem',
              backgroundColor: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '9999px',
              backdropFilter: 'blur(12px)',
              marginBottom: '3.5rem',
            }}
          >
            {filterTabs.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  style={{
                    position: 'relative',
                    padding: '0.6rem 1.4rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: isActive ? '#06090e' : 'var(--text-secondary)',
                    borderRadius: '9999px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterTab"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'var(--accent-cyan)',
                        borderRadius: '9999px',
                        boxShadow: '0 0 20px rgba(0, 242, 254, 0.45)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid with Framer Motion layout */}
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="glass-panel"
                onClick={() => setSelectedProject(project)}
                style={{
                  borderRadius: '22px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'rgba(15, 23, 42, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {/* Thumbnail Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '220px',
                    overflow: 'hidden',
                    backgroundColor: '#090d16',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Overlay on hover */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(6, 9, 14, 0.4)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                    }}
                    className="card-overlay"
                  >
                    <div
                      style={{
                        padding: '0.6rem 1.1rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(6, 9, 14, 0.85)',
                        border: '1px solid var(--accent-cyan)',
                        color: '#fff',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <Eye size={16} color="var(--accent-cyan)" />
                      <span>View Details</span>
                    </div>
                  </div>

                  {/* Category Chip */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(6, 9, 14, 0.8)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Card Body */}
                <div
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: '0.6rem',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      marginTop: 'auto',
                    }}
                  >
                    {project.badges.slice(0, 4).map((badge, bIdx) => (
                      <span key={bIdx} className="tech-badge">
                        {badge}
                      </span>
                    ))}
                    {project.badges.length > 4 && (
                      <span
                        className="tech-badge"
                        style={{ color: 'var(--accent-cyan)', borderColor: 'rgba(0, 242, 254, 0.3)' }}
                      >
                        +{project.badges.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        .glass-panel:hover .card-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

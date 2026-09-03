import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { workExperience, educationHistory } from '../../data/experienceData';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const items = activeTab === 'work' ? workExperience : educationHistory;

  return (
    <section
      id="experience"
      style={{
        padding: '7rem 0',
        position: 'relative',
        backgroundColor: 'rgba(10, 15, 29, 0.4)',
      }}
    >
      <div className="container">
        <div className="text-center">
          <div className="section-badge">Career & Education</div>
          <h2 className="section-title">Milestones & Experience</h2>
          <p className="section-subtitle">
            A track record of engineering backend architectures and real-world software deployments.
          </p>

          {/* Switcher Tabs */}
          <div
            style={{
              display: 'inline-flex',
              padding: '0.4rem',
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '9999px',
              gap: '0.5rem',
              marginBottom: '3.5rem',
            }}
          >
            <button
              onClick={() => setActiveTab('work')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.4rem',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: activeTab === 'work' ? '#06090e' : 'var(--text-secondary)',
                backgroundColor: activeTab === 'work' ? 'var(--accent-cyan)' : 'transparent',
                boxShadow: activeTab === 'work' ? '0 0 15px rgba(0, 242, 254, 0.4)' : 'none',
                transition: 'all 0.25s ease',
              }}
            >
              <Briefcase size={16} />
              <span>Work Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.4rem',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: activeTab === 'education' ? '#06090e' : 'var(--text-secondary)',
                backgroundColor: activeTab === 'education' ? 'var(--accent-cyan)' : 'transparent',
                boxShadow: activeTab === 'education' ? '0 0 15px rgba(0, 242, 254, 0.4)' : 'none',
                transition: 'all 0.25s ease',
              }}
            >
              <GraduationCap size={16} />
              <span>Education & Honors</span>
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Timeline Spine Line */}
          <div
            style={{
              position: 'absolute',
              top: '15px',
              bottom: '15px',
              left: '20px',
              width: '2px',
              background: 'linear-gradient(180deg, #00f2fe 0%, #8b5cf6 50%, rgba(255, 255, 255, 0.05) 100%)',
              zIndex: 0,
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
            >
              {items.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '1.75rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {/* Timeline Glowing Node */}
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: index === 0 ? 'var(--gradient-brand)' : '#1e293b',
                      border: '3px solid #06090e',
                      boxShadow: index === 0 ? '0 0 18px rgba(0, 242, 254, 0.5)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: index === 0 ? '#06090e' : '#94a3b8',
                    }}
                  >
                    {item.type === 'work' ? <Briefcase size={18} /> : <GraduationCap size={18} />}
                  </div>

                  {/* Card Content */}
                  <div
                    className="glass-panel"
                    style={{
                      flex: 1,
                      padding: '1.75rem',
                      borderRadius: '18px',
                      border: '1px solid rgba(255, 255, 255, 0.09)',
                      background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.75) 0%, rgba(10, 15, 29, 0.9) 100%)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <div>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>
                          {item.role}
                        </h3>
                        <div style={{ fontSize: '1rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                          {item.company}
                        </div>
                      </div>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          padding: '0.3rem 0.8rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '9999px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8rem',
                          color: '#cbd5e1',
                        }}
                      >
                        <Calendar size={13} color="var(--accent-cyan)" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Tech Badges if any */}
                    {item.badges && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', margin: '1rem 0' }}>
                        {item.badges.map((badge, bIdx) => (
                          <span key={bIdx} className="tech-badge">
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Highlights List */}
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.6rem',
                      }}
                    >
                      {item.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.65rem',
                            fontSize: '0.925rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                          }}
                        >
                          <span
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--accent-cyan)',
                              marginTop: '0.55rem',
                              flexShrink: 0,
                            }}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { workExperience, educationHistory } from '../../data/experienceData';

export const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const items = activeTab === 'work' ? workExperience : educationHistory;

  return (
    <section
      id="experience"
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
            {t('experience.badge')}
          </div>
          <h2 className="section-title">{t('experience.title')}</h2>
          <p className="section-subtitle">
            {t('experience.subtitle')}
          </p>

          {/* Switcher Buttons */}
          <div
            style={{
              display: 'inline-flex',
              gap: '12px',
              marginTop: '1.5rem',
            }}
          >
            <button
              onClick={() => setActiveTab('work')}
              className="nb-btn"
              style={{
                backgroundColor: activeTab === 'work' ? 'var(--color-pastel-blue)' : 'var(--bg-card)',
                color: activeTab === 'work' ? '#121212' : 'var(--text-main)',
                boxShadow: activeTab === 'work' ? '4px 4px 0 var(--color-shadow)' : '2px 2px 0 var(--color-shadow)',
              }}
            >
              <Briefcase size={18} />
              <span>{t('experience.tab_work')}</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className="nb-btn"
              style={{
                backgroundColor: activeTab === 'education' ? 'var(--color-pastel-blue)' : 'var(--bg-card)',
                color: activeTab === 'education' ? '#121212' : 'var(--text-main)',
                boxShadow: activeTab === 'education' ? '4px 4px 0 var(--color-shadow)' : '2px 2px 0 var(--color-shadow)',
              }}
            >
              <GraduationCap size={18} />
              <span>{t('experience.tab_edu')}</span>
            </button>
          </div>
        </div>

        {/* Timeline Cards Container */}
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className="nb-card"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    padding: '2rem',
                    position: 'relative',
                  }}
                >
                  {/* Period Sticker Tag in Pastel Blue */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: 'var(--color-pastel-blue-light)',
                      color: 'var(--text-main)',
                      border: '2px solid var(--color-border)',
                      boxShadow: '2px 2px 0 var(--color-shadow)',
                      padding: '4px 12px',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>

                  {/* Title & Company */}
                  <h3
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: 'var(--text-main)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {item.role}
                  </h3>
                  <div
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--text-muted)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {item.company}
                  </div>

                  {/* Badges */}
                  {item.badges && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.25rem' }}>
                      {item.badges.map((b, idx) => (
                        <span key={idx} className="nb-tag">
                          {b}
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
                      gap: '0.75rem',
                    }}
                  >
                    {item.highlights.map((point, hIdx) => (
                      <li
                        key={hIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '0.95rem',
                          lineHeight: 1.6,
                          color: 'var(--text-main)',
                        }}
                      >
                        <span
                          style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: 'var(--color-pastel-blue)',
                            marginTop: '0.55rem',
                            flexShrink: 0,
                          }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

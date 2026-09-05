import React from 'react';
import { useTranslation } from 'react-i18next';
import { Server, Layout, Database, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { technicalSkills, softSkills } from '../../data/skillsData';

export const SkillsSection: React.FC = () => {
  const { t } = useTranslation();

  const categoryHeaders = [
    { bg: 'var(--color-pastel-blue)', icon: <Server size={20} /> },
    { bg: 'var(--color-pastel-cyan)', icon: <Layout size={20} /> },
    { bg: 'var(--color-pastel-mint)', icon: <Database size={20} /> },
    { bg: 'var(--color-pastel-peach)', icon: <Cpu size={20} /> },
    { bg: 'var(--color-pastel-lavender)', icon: <Terminal size={20} /> },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: '6rem 0',
        backgroundColor: 'var(--bg-canvas)',
        transition: 'background-color 0.2s ease',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="nb-sticker" style={{ marginBottom: '0.75rem', backgroundColor: 'var(--color-pastel-blue)', color: '#121212' }}>
            {t('skills.badge')}
          </div>
          <h2 className="section-title">{t('skills.title')}</h2>
          {/* <p className="section-subtitle">
            {t('skills.subtitle')}
          </p> */}
        </div>

        {/* 5 Category Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4rem',
          }}
        >
          {technicalSkills.map((group, index) => {
            const headerConfig = categoryHeaders[index % categoryHeaders.length];
            return (
              <div
                key={group.category}
                className="nb-card"
                style={{
                  padding: '0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Colorful Card Header */}
                <div
                  style={{
                    backgroundColor: headerConfig.bg,
                    color: '#121212',
                    borderBottom: '3px solid var(--color-border)',
                    padding: '12px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: 'var(--bg-card)',
                      color: 'var(--text-main)',
                      border: '2px solid var(--color-border)',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {headerConfig.icon}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, textTransform: 'uppercase', color: '#121212' }}>
                    {group.category}
                  </h3>
                </div>

                {/* Card Body */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-card)' }}>
                  {/* <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.25rem', fontWeight: 500 }}>
                    {group.description}
                  </p> */}

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          backgroundColor: 'var(--bg-elevated)',
                          color: 'var(--text-main)',
                          border: '2px solid var(--color-border)',
                          boxShadow: '2px 2px 0 var(--color-shadow)',
                          padding: '5px 12px',
                          fontSize: '0.84rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          borderRadius: '4px',
                          display: 'inline-block',
                          transition: 'transform 0.15s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(-2px, -2px)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(0, 0)')}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills Section */}
        <div
          className="nb-card"
          style={{
            padding: '2rem',
            backgroundColor: 'var(--color-pastel-blue-light)',
            textAlign: 'center',
          }}
        >
          <div className="nb-sticker" style={{ marginBottom: '0.5rem', backgroundColor: 'var(--color-border)', color: 'var(--text-inverted)' }}>
            {t('skills.culture_badge')}
          </div>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase', color: 'var(--text-main)' }}>
            {t('skills.soft_title')}
          </h3>
          <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', maxWidth: '640px', margin: '0 auto 1.5rem auto' }}>
            {/* {t('skills.soft_subtitle')} */}
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
            }}
          >
            {softSkills.map((skill, index) => (
              <div
                key={index}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-main)',
                  border: '2px solid var(--color-border)',
                  boxShadow: '3px 3px 0 var(--color-shadow)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                }}
              >
                <CheckCircle2 size={16} color="var(--color-pastel-blue)" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

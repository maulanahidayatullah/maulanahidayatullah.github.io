import React from 'react';
import { Server, Layout, Database, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { technicalSkills, softSkills } from '../../data/skillsData';

export const SkillsSection: React.FC = () => {
  const categoryHeaders = [
    { bg: 'var(--color-yellow)', icon: <Server size={20} /> },
    { bg: 'var(--color-cyan)', icon: <Layout size={20} /> },
    { bg: 'var(--color-green)', icon: <Database size={20} /> },
    { bg: 'var(--color-coral)', icon: <Cpu size={20} /> },
    { bg: 'var(--color-purple)', icon: <Terminal size={20} /> },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: '6rem 0',
        backgroundColor: 'var(--bg-canvas)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="nb-sticker" style={{ marginBottom: '0.75rem' }}>
            TECHNICAL ARSENAL
          </div>
          <h2 className="section-title">SKILLS & FRAMEWORKS</h2>
          <p className="section-subtitle">
            Tools, languages, and hardware protocols I actively use to design and ship production applications.
          </p>
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
                    borderBottom: '3px solid var(--color-black)',
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
                      backgroundColor: '#ffffff',
                      border: '2px solid var(--color-black)',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {headerConfig.icon}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, textTransform: 'uppercase' }}>
                    {group.category}
                  </h3>
                </div>

                {/* Card Body */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.25rem', fontWeight: 500 }}>
                    {group.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          backgroundColor: '#ffffff',
                          border: '2px solid var(--color-black)',
                          boxShadow: '2px 2px 0 var(--color-black)',
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
            backgroundColor: 'var(--color-yellow-light)',
            textAlign: 'center',
          }}
        >
          <div className="nb-sticker" style={{ marginBottom: '0.5rem', backgroundColor: 'var(--color-black)', color: '#fff' }}>
            ENGINEERING CULTURE
          </div>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
            PROFESSIONAL & SOFT COMPETENCIES
          </h3>
          <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', maxWidth: '640px', margin: '0 auto 1.5rem auto' }}>
            Discipline, problem-solving, and clear cross-functional communication are fundamental to reliable execution.
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
                  backgroundColor: '#ffffff',
                  border: '2px solid var(--color-black)',
                  boxShadow: '3px 3px 0 var(--color-black)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                }}
              >
                <CheckCircle2 size={16} color="var(--color-black)" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

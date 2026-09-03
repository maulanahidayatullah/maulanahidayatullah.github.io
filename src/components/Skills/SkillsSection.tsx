import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Database, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { technicalSkills, softSkills } from '../../data/skillsData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Server size={22} color="#00f2fe" />;
      case 1:
        return <Layout size={22} color="#4facfe" />;
      case 2:
        return <Database size={22} color="#8b5cf6" />;
      case 3:
        return <Cpu size={22} color="#10b981" />;
      case 4:
        return <Terminal size={22} color="#f59e0b" />;
      default:
        return <Server size={22} color="#00f2fe" />;
    }
  };

  return (
    <section
      id="skills"
      style={{
        padding: '7rem 0',
        position: 'relative',
      }}
    >
      <div className="container">
        <div className="text-center">
          <div className="section-badge">Technical Arsenal</div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive suite of tools, frameworks, and system integrations I leverage for production engineering.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {technicalSkills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel"
              style={{
                padding: '1.75rem',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.6rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getCategoryIcon(index)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>{group.category}</h3>
                </div>
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                {group.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="tech-badge"
                    style={{
                      padding: '0.4rem 0.8rem',
                      fontSize: '0.82rem',
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel"
          style={{
            padding: '2.25rem',
            borderRadius: '22px',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(20, 15, 35, 0.8) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.25)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>
            Engineering Culture & Soft Competencies
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
            Technical excellence is amplified by proactive communication, agility, and disciplined execution.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.8rem',
              justifyContent: 'center',
            }}
          >
            {softSkills.map((skill, index) => (
              <div
                key={index}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  color: '#e2e8f0',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={16} color="var(--accent-purple)" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

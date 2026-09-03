import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Linkedin, Github, Copy, Check, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const emailAddress = 'maulanahidayatullah159@gmail.com';
  const phoneNumber = '+62895636598769';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00f2fe', '#4facfe', '#8b5cf6'],
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${name || 'Prospective Collaborator'}`
    )}&body=${encodeURIComponent(`Hi Maulana,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
    window.location.href = mailtoUrl;
  };

  const contactChannels = [
    {
      title: 'WhatsApp Chat',
      detail: '+62 895 6365 98769',
      href: `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`,
      icon: <MessageSquare size={24} color="#22c55e" />,
      subtext: 'Fastest response • Available for chats',
      action: 'Open WhatsApp',
    },
    {
      title: 'Direct Email',
      detail: emailAddress,
      href: `mailto:${emailAddress}`,
      icon: <Mail size={24} color="#00f2fe" />,
      subtext: 'Inquiries & Opportunities',
      action: 'Send Email',
    },
    {
      title: 'LinkedIn',
      detail: 'maulana-hidayatullah',
      href: 'https://www.linkedin.com/in/maulana-hidayatullah-64a5a4158/',
      icon: <Linkedin size={24} color="#38bdf8" />,
      subtext: 'Professional network & career updates',
      action: 'Connect on LinkedIn',
    },
    {
      title: 'GitHub Repositories',
      detail: '@maulanahidayatullah',
      href: 'https://github.com/maulanahidayatullah',
      icon: <Github size={24} color="#e2e8f0" />,
      subtext: 'Open source contributions & experiments',
      action: 'View Profile',
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: '7rem 0 5rem 0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* "Interested in working together?" Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel"
          style={{
            position: 'relative',
            overflow: 'hidden',
            padding: '3rem 2rem',
            borderRadius: '26px',
            background: 'linear-gradient(135deg, rgba(14, 26, 52, 0.9) 0%, rgba(26, 17, 50, 0.9) 100%)',
            border: '1px solid rgba(0, 242, 254, 0.25)',
            textAlign: 'center',
            marginBottom: '5rem',
            boxShadow: '0 20px 50px -10px rgba(0, 242, 254, 0.15)',
          }}
        >
          {/* Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '500px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(0, 242, 254, 0.15), transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '650px', margin: '0 auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--accent-cyan)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                marginBottom: '1rem',
              }}
            >
              <Sparkles size={16} />
              <span>COLLABORATE WITH ME</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                color: '#fff',
                marginBottom: '1rem',
                lineHeight: 1.2,
              }}
            >
              Interested in working together?
            </h2>
            <p
              style={{
                color: '#cbd5e1',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              Whether you need backend microservices, EV charger protocols (OCPP), hardware biometrics, 
              or a full-stack web application, let's build something exceptional.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="btn-primary">
                <MessageSquare size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <button onClick={handleCopyEmail} className="btn-secondary">
                {copiedEmail ? <Check size={18} color="#4ade80" /> : <Copy size={18} />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email Address'}</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <div className="text-center">
          <div className="section-badge">Get In Touch</div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Choose your preferred channel below or send a quick direct inquiry.
          </p>
        </div>

        {/* Main Grid: Channels & Quick Message Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Channels List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {contactChannels.map((channel, idx) => (
              <motion.a
                key={channel.title}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel"
                style={{
                  padding: '1.4rem 1.75rem',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {channel.icon}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{channel.subtext}</div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff', margin: '0.1rem 0' }}>
                    {channel.title}
                  </div>
                  <div
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--accent-cyan)',
                      fontFamily: 'var(--font-mono)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {channel.detail}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Quick Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel"
            style={{
              padding: '2rem 2.25rem',
              borderRadius: '22px',
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
            }}
          >
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
              Have an opening or a project inquiry? Fill this out and it will draft directly to my inbox.
            </p>

            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe / Company Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(6, 9, 14, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(6, 9, 14, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                  Message / Project Scope
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project, timeline, or position..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(6, 9, 14, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Mail, MessageSquare, Linkedin, Github, Copy, Check, Send, ArrowUp } from 'lucide-react';
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
      colors: ['#93c5fd', '#60a5fa', '#7dd3fc', '#121212', '#ffffff'],
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      `Project Inquiry from ${name || 'Prospective Partner'}`
    )}&body=${encodeURIComponent(`Hi Maulana,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
    window.location.href = mailtoUrl;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactChannels = [
    {
      title: 'WHATSAPP CHAT',
      detail: '+62 895 6365 98769',
      href: `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`,
      icon: <MessageSquare size={24} />,
      bg: 'var(--color-pastel-mint)',
      subtext: 'Fastest response / Direct messaging',
    },
    {
      title: 'DIRECT EMAIL',
      detail: emailAddress,
      href: `mailto:${emailAddress}`,
      icon: <Mail size={24} />,
      bg: 'var(--color-pastel-blue-light)',
      subtext: 'Formal inquiries & opportunities',
    },
    {
      title: 'LINKEDIN PROFILE',
      detail: 'maulana-hidayatullah',
      href: 'https://www.linkedin.com/in/maulana-hidayatullah-64a5a4158/',
      icon: <Linkedin size={24} />,
      bg: 'var(--color-pastel-cyan)',
      subtext: 'Professional network & experience',
    },
    {
      title: 'GITHUB PROFILE',
      detail: '@maulanahidayatullah',
      href: 'https://github.com/maulanahidayatullah',
      icon: <Github size={24} />,
      bg: 'var(--color-pastel-blue)',
      subtext: 'Open source & code repositories',
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 0 3rem 0',
        backgroundColor: 'var(--bg-canvas)',
      }}
    >
      <div className="container">
        {/* Collaboration Banner Box in Pastel Blue */}
        <div
          className="nb-card"
          style={{
            backgroundColor: 'var(--color-pastel-blue)',
            padding: '3.5rem 2rem',
            textAlign: 'center',
            marginBottom: '5rem',
          }}
        >
          <div className="nb-sticker" style={{ marginBottom: '1rem', backgroundColor: 'var(--color-black)', color: '#fff' }}>
            START A CONVERSATION
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 900,
              color: 'var(--color-black)',
              lineHeight: 1.1,
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            INTERESTED IN WORKING TOGETHER?
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--color-black)',
              fontWeight: 600,
              maxWidth: '680px',
              margin: '0 auto 2rem auto',
            }}
          >
            Whether you need resilient backend systems, EV charger protocols (OCPP), hardware biometrics,
            or an enterprise web platform, let's ship something exceptional.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="nb-btn nb-btn-mint"
              style={{ padding: '0.85rem 1.8rem' }}
            >
              <MessageSquare size={18} />
              <span>CHAT ON WHATSAPP</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="nb-btn nb-btn-white"
              style={{ padding: '0.85rem 1.8rem' }}
            >
              {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
              <span>{copiedEmail ? 'EMAIL COPIED!' : 'COPY EMAIL ADDRESS'}</span>
            </button>
          </div>
        </div>

        {/* Section Header */}
        <div className="section-header">
          <div className="nb-sticker" style={{ marginBottom: '0.75rem', backgroundColor: 'var(--color-pastel-blue)', color: 'var(--color-black)' }}>
            CONTACT ME
          </div>
          <h2 className="section-title">LET'S CONNECT</h2>
          <p className="section-subtitle">
            Reach out via any of the channels below or leave a quick message.
          </p>
        </div>

        {/* 2-Column Grid: Channels + Quick Message Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
            marginBottom: '5rem',
          }}
        >
          {/* Contact Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {contactChannels.map((channel, idx) => (
              <a
                key={idx}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="nb-card"
                style={{
                  backgroundColor: channel.bg,
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#ffffff',
                    border: '2.5px solid var(--color-black)',
                    boxShadow: '2px 2px 0 var(--color-black)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {channel.icon}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-muted)' }}>
                    {channel.subtext}
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-black)' }}>
                    {channel.title}
                  </div>
                  <div style={{ fontSize: '0.88rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--color-black)' }}>
                    {channel.detail}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Quick Form */}
          <div
            className="nb-card"
            style={{
              padding: '2rem 2.25rem',
              backgroundColor: '#ffffff',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              DIRECT INQUIRY
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: 500 }}>
              Need a developer for your project or engineering team? Fill this out and it will launch your email composer.
            </p>

            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                  YOUR NAME:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe / Tech Company"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#faf8f5',
                    border: '2.5px solid var(--color-black)',
                    boxShadow: '3px 3px 0 var(--color-black)',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                  YOUR EMAIL:
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
                    backgroundColor: '#faf8f5',
                    border: '2.5px solid var(--color-black)',
                    boxShadow: '3px 3px 0 var(--color-black)',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                  PROJECT SCOPE / MESSAGE:
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Briefly describe your project, timeline, or requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#faf8f5',
                    border: '2.5px solid var(--color-black)',
                    boxShadow: '3px 3px 0 var(--color-black)',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    resize: 'vertical',
                  }}
                />
              </div>

              <button type="submit" className="nb-btn" style={{ width: '100%', marginTop: '0.5rem', padding: '0.85rem' }}>
                <Send size={18} />
                <span>SEND INQUIRY NOW</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bar */}
        <div
          style={{
            borderTop: '3px solid var(--color-black)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} MAULANA HIDAYATULLAH. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="nb-btn nb-btn-white"
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

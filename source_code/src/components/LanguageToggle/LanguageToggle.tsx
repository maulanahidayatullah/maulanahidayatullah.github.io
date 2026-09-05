import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const currentLang = (i18n.language as 'id' | 'en' | 'ja') || 'id';

  const languages: ('id' | 'en' | 'ja')[] = ['id', 'en', 'ja'];

  const cycleLanguage = () => {
    const currentIndex = languages.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLang = languages[nextIndex];
    i18n.changeLanguage(nextLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-language', nextLang);
    }
  };

  const flagIcons: Record<'id' | 'en' | 'ja', { name: string; node: React.ReactNode }> = {
    id: {
      name: 'Bahasa Indonesia',
      node: (
        <svg width="22" height="15" viewBox="0 0 24 16" style={{ borderRadius: '2px', display: 'block', border: '1px solid rgba(0,0,0,0.18)' }}>
          <rect width="24" height="8" fill="#ef4444" />
          <rect y="8" width="24" height="8" fill="#ffffff" />
        </svg>
      ),
    },
    en: {
      name: 'English',
      node: (
        <svg width="22" height="15" viewBox="0 0 24 16" style={{ borderRadius: '2px', display: 'block', border: '1px solid rgba(0,0,0,0.18)' }}>
          <clipPath id="en-clip">
            <rect width="24" height="16" />
          </clipPath>
          <g clipPath="url(#en-clip)">
            <rect width="24" height="16" fill="#012169" />
            <path d="M0 0 L24 16 M24 0 L0 16" stroke="#ffffff" strokeWidth="2.8" />
            <path d="M0 0 L24 16 M24 0 L0 16" stroke="#c8102e" strokeWidth="1.4" />
            <path d="M12 0 v16 M0 8 h24" stroke="#ffffff" strokeWidth="4.8" />
            <path d="M12 0 v16 M0 8 h24" stroke="#c8102e" strokeWidth="2.8" />
          </g>
        </svg>
      ),
    },
    ja: {
      name: '日本語 (Japanese)',
      node: (
        <svg width="22" height="15" viewBox="0 0 24 16" style={{ borderRadius: '2px', display: 'block', border: '1px solid rgba(0,0,0,0.18)' }}>
          <rect width="24" height="16" fill="#ffffff" />
          <circle cx="12" cy="8" r="4.6" fill="#bc002d" />
        </svg>
      ),
    },
  };

  const active = flagIcons[currentLang] || flagIcons.id;

  return (
    <button
      onClick={cycleLanguage}
      aria-label={`Current language: ${active.name}. Click to change language`}
      title={`Language: ${active.name} (Click to switch ID ➔ EN ➔ JA)`}
      style={{
        position: 'fixed',
        top: '12px',
        right: '70px',
        zIndex: 10001,
        width: '38px',
        height: '38px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-card)',
        border: '2.5px solid var(--color-border)',
        boxShadow: '2.5px 2.5px 0 var(--color-shadow)',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'transform 0.12s ease, box-shadow 0.12s ease, background-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translate(-2px, -2px)';
        e.currentTarget.style.boxShadow = '3.5px 3.5px 0 var(--color-shadow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
        e.currentTarget.style.boxShadow = '2.5px 2.5px 0 var(--color-shadow)';
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translate(2px, 2px)';
        e.currentTarget.style.boxShadow = '1px 1px 0 var(--color-shadow)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translate(-2px, -2px)';
        e.currentTarget.style.boxShadow = '3.5px 3.5px 0 var(--color-shadow)';
      }}
    >
      {active.node}
    </button>
  );
};

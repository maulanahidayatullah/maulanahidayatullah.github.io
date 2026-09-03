import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{
        position: 'fixed',
        top: '12px',
        right: '18px',
        zIndex: 10001,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        padding: '6px 13px',
        backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
        color: theme === 'dark' ? '#f8fafc' : '#121212',
        border: '2.5px solid var(--color-border)',
        boxShadow: '3px 3px 0 var(--color-shadow)',
        borderRadius: '4px',
        fontWeight: 800,
        fontSize: '0.8rem',
        fontFamily: 'var(--font-mono)',
        cursor: 'pointer',
        transition: 'transform 0.12s ease, box-shadow 0.12s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translate(-2px, -2px)';
        e.currentTarget.style.boxShadow = '4px 4px 0 var(--color-shadow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
        e.currentTarget.style.boxShadow = '3px 3px 0 var(--color-shadow)';
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translate(2px, 2px)';
        e.currentTarget.style.boxShadow = '1px 1px 0 var(--color-shadow)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translate(-2px, -2px)';
        e.currentTarget.style.boxShadow = '4px 4px 0 var(--color-shadow)';
      }}
    >
      {theme === 'dark' ? (
        <>
          <Sun size={16} color="#fbbf24" />
          <span>LIGHT</span>
        </>
      ) : (
        <>
          <Moon size={16} color="#4f46e5" />
          <span>DARK</span>
        </>
      )}
    </button>
  );
};

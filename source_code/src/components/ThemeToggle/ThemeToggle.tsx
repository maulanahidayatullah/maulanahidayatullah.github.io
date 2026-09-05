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
      aria-label={`Toggle theme (currently ${theme})`}
      title={`Current: ${theme.toUpperCase()} mode (Click to switch)`}
      style={{
        position: 'fixed',
        top: '12px',
        right: '24px',
        zIndex: 10001,
        width: '38px',
        height: '38px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
        color: theme === 'dark' ? '#f8fafc' : '#121212',
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
      {theme === 'light' ? (
        <Sun size={20} color="#eab308" strokeWidth={2.5} />
      ) : (
        <Moon size={20} color="#60a5fa" strokeWidth={2.5} />
      )}
    </button>
  );
};

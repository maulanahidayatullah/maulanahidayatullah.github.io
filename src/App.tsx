import React from 'react';
import './i18n';
import { Hero } from './components/Header/Hero';
import { Navbar } from './components/Header/Navbar';
import { AboutSection } from './components/About/AboutSection';
import { ExperienceSection } from './components/Experience/ExperienceSection';
import { SkillsSection } from './components/Skills/SkillsSection';
import { PortfolioSection } from './components/Portfolio/PortfolioSection';
import { ContactSection } from './components/Contact/ContactSection';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { LanguageToggle } from './components/LanguageToggle/LanguageToggle';
import { useScrollSpy } from './hooks/useScrollSpy';

export const App: React.FC = () => {
  const sections = ['hero', 'about', 'experience', 'skills', 'portfolio', 'contact'];
  const activeSection = useScrollSpy(sections, 120);

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Language & Theme Toggles in the Top-Right Corner */}
      <LanguageToggle />
      <ThemeToggle />

      {/* 1. Hero Section at the top */}
      <Hero />

      {/* 2. Sticky Neo-Brutalist Navbar (sits below Hero, sticks on scroll) */}
      <Navbar activeSection={activeSection} />

      {/* 3. Main Content Sections */}
      <main style={{ flex: 1 }}>
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;

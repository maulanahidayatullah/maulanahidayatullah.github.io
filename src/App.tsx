import React from 'react';
import { Navbar } from './components/Header/Navbar';
import { Hero } from './components/Header/Hero';
import { AboutSection } from './components/About/AboutSection';
import { ExperienceSection } from './components/Experience/ExperienceSection';
import { SkillsSection } from './components/Skills/SkillsSection';
import { PortfolioSection } from './components/Portfolio/PortfolioSection';
import { ContactSection } from './components/Contact/ContactSection';
import { useScrollSpy } from './hooks/useScrollSpy';

export const App: React.FC = () => {
  const sections = ['hero', 'about', 'experience', 'skills', 'portfolio', 'contact'];
  const activeSection = useScrollSpy(sections, 120);

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Neo-Brutalist Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        <Hero />
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

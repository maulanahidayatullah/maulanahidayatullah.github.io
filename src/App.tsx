import React, { useEffect } from 'react';
import { Navbar } from './components/Header/Navbar';
import { Hero } from './components/Header/Hero';
import { AboutSection } from './components/About/AboutSection';
import { ExperienceSection } from './components/Experience/ExperienceSection';
import { SkillsSection } from './components/Skills/SkillsSection';
import { PortfolioSection } from './components/Portfolio/PortfolioSection';
import { ContactSection } from './components/Contact/ContactSection';
import { Footer } from './components/Footer/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

export const App: React.FC = () => {
  const sections = ['hero', 'about', 'experience', 'skills', 'portfolio', 'contact'];
  const activeSection = useScrollSpy(sections, 160);

  // Subtle ambient mouse glow tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Floating Glass Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

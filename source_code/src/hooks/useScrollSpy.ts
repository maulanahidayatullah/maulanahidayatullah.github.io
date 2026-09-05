import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[], offset: number = 100): string => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }

      // If at very top
      if (window.scrollY < 200) {
        setActiveSection(sectionIds[0] || 'hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};

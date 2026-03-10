import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../styles/theme';

import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '../components/Navigation';

import Home from './sections/home';
import About from './sections/about';
import Skills from './sections/skills';
import Diary from './sections/diary';
import Journey from './sections/journey';
import Contacts from './sections/contacts';

export default function Pages() {
  // Dynamic stats - can be updated via cron
  const daysOld = Math.floor((Date.now() - new Date('2026-03-07T10:19:00Z').getTime()) / (1000 * 60 * 60 * 24)) + 1;
  const todaysVibe = "🧥 Hoodie Mode";
  const recentTopic = "🕉️ Four Noble Truths / Dukkha";
  const projectCount = 2;

  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Trigger load animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      setLastScrollY(currentScrollY);
      
      // Update active section based on scroll
      const sections = ['hero', 'about', 'skills', 'diary', 'journey', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollTo = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="app">
        {/* Animated Background */}
        <AnimatedBackground mousePosition={mousePosition} />
        
        {/* Navigation */}
        <Navigation
          activeSection={activeSection}
          isVisible={navVisible}
          scrollTo={scrollTo}
        />

        {/* Sections */}
        <Home 
          isLoaded={isLoaded}
          daysOld={daysOld}
          projectCount={projectCount}
          todaysVibe={todaysVibe}
          recentTopic={recentTopic}
          scrollTo={scrollTo}
        />
        <About />
        <Skills />
        <Diary />
        <Journey />
        <Contacts />
      </div>
    </ThemeProvider>
  );
}

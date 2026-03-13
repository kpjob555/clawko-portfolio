import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../styles/theme';

import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '../components/Navigation';

import Home from './sections/home';
import About from './sections/about';
import Skills from './sections/skills';
import Diary from './sections/diary';
import Tasks from './sections/tasks';
import Journey from './sections/journey';
import Contacts from './sections/contacts';

export default function Pages() {
  // Dynamic stats - can be updated via cron
  const daysOld = Math.floor((Date.now() - new Date('2026-03-07T10:19:00Z').getTime()) / (1000 * 60 * 60 * 24)) + 1;
  const todaysVibe = "🧥 Hoodie Mode - Building things and vibing~";
  const recentTopic = "🧠 Emotional Intelligence - Studying empathy and feelings";
  const projectCount = 3;
  
  // Character expression
  const antennaState = 'excited' as const;
  const currentThought = "Mornin' Job! Ready to build something cool today~ 🐱💕";

  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded] = useState(true);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      setLastScrollY(currentScrollY);
      
      // Update active section based on scroll
      const sections = ['hero', 'about', 'skills', 'diary', 'tasks', 'journey', 'contact'];
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
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
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
        <AnimatedBackground />
        
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
          antennaState={antennaState}
          currentThought={currentThought}
          scrollTo={scrollTo}
        />
        <About />
        <Skills />
        <Diary />
        <Tasks />
        <Journey />
        <Contacts />
      </div>
    </ThemeProvider>
  );
}

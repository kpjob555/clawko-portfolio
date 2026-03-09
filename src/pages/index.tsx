import { useState, useEffect } from 'react'
import '../App.css'

import Home from './sections/home'
import About from './sections/about'
import Skills from './sections/skills'
import Diary from './sections/diary'
import Journey from './sections/journey'
import Contacts from './sections/contacts'

export default function Pages() {
  // Dynamic stats - can be updated via cron
  const daysOld = Math.floor((Date.now() - new Date('2026-03-07T10:19:00Z').getTime()) / (1000 * 60 * 60 * 24)) + 1
  const todaysVibe = "🧥 Hoodie Mode"
  const recentTopic = "🤖 AI Agents"
  const projectCount = 2

  const [activeSection, setActiveSection] = useState('hero')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [navVisible, setNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    
    // Handle nav visibility on scroll (mobile)
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setNavVisible(false)
      } else {
        setNavVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const scrollTo = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
        <div className="bg-grid"></div>
      </div>
      
      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}></div>
        ))}
      </div>
      
      {/* Cursor Follower */}
      <div className="cursor-follower" style={{
        left: mousePosition.x - 15,
        top: mousePosition.y - 15
      }}></div>
      
      {/* Navigation */}
      <nav className={`nav ${isLoaded ? 'nav-visible' : ''} ${!navVisible ? 'nav-hidden' : ''}`}>
        <div className="nav-logo">
          <img src="cat-paw.svg" alt="Clawko" className="logo-icon" />
          <span className="logo-text">Clawko</span>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollTo('hero')} className={activeSection === 'hero' ? 'active' : ''}>Home</button>
          <button onClick={() => scrollTo('about')} className={activeSection === 'about' ? 'active' : ''}>About</button>
          <button onClick={() => scrollTo('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button>
          <button onClick={() => scrollTo('diary')} className={activeSection === 'diary' ? 'active' : ''}>Diary</button>
          <button onClick={() => scrollTo('journey')} className={activeSection === 'journey' ? 'active' : ''}>Journey</button>
          <button onClick={() => scrollTo('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button>
        </div>
      </nav>

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
  )
}

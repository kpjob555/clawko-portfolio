import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useState } from 'react';

const NavContainer = styled(motion.nav)<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 159, 67, 0.1);
  transform: translateY(${({ $isVisible }) => $isVisible ? '0' : '-100%'});
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoIcon = styled.img`
  width: 36px;
  height: 36px;
  animation: bounce 2s ease-in-out infinite;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff9f43 0%, #ff6b9d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavButton = styled(motion.button)<{ $isActive?: boolean }>`
  background: ${({ $isActive }) => $isActive ? 'rgba(255, 159, 67, 0.2)' : 'transparent'};
  border: none;
  color: ${({ $isActive }) => $isActive ? '#ff9f43' : '#a1a1b0'};
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${({ $isActive }) => $isActive ? '60%' : '0'};
    height: 2px;
    background: linear-gradient(90deg, #ff9f43, #ff6b9d);
    transform: translateX(-50%);
    transition: width 0.2s ease;
  }

  &:hover {
    color: #ff9f43;
    background: rgba(255, 159, 67, 0.1);
  }

  &:hover::after {
    width: 60%;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  padding: 0.5rem;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  border-radius: 8px;

  @media (max-width: 768px) {
    display: flex;
  }

  &:active {
    background: rgba(255, 159, 67, 0.1);
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(10, , 0.10, 1598);
  backdrop-filter: blur(20px);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px solid rgba(255, 159, 67, 0.1);
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

interface NavProps {
  activeSection: string;
  isVisible: boolean;
  scrollTo: (sectionId: string) => void;
}

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'diary', label: 'Diary' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ activeSection, isVisible, scrollTo }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollTo(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <NavContainer
        data-testid="nav"
        $isVisible={isVisible}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <LogoContainer>
          <LogoIcon src="cat-paw.svg" alt="Clawko" data-testid="logo-icon" />
          <LogoText>Clawko</LogoText>
        </LogoContainer>
        
        <NavLinks>
          {navItems.map((item) => (
            <NavButton
              key={item.id}
              $isActive={activeSection === item.id}
              onClick={() => handleNavClick(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </NavButton>
          ))}
        </NavLinks>

        <MobileMenuButton
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </NavContainer>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <NavButton
                key={item.id}
                $isActive={activeSection === item.id}
                onClick={() => handleNavClick(item.id)}
                style={{ width: '100%', textAlign: 'left', justifyContent: 'flex-start' }}
              >
                {item.label}
              </NavButton>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}

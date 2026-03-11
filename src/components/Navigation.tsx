import styled from 'styled-components';
import { useState } from 'react';

const bounce = `
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
`;

const NavContainer = styled.nav<{ $isVisible: boolean }>`
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
  ${bounce}
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff9f43 0%, #ff6b9d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 640px) {
    display: none;
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 10, 15, 0.98);
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 2rem;
    gap: 1.5rem;
    transform: translateX(${({ $isOpen }) => $isOpen ? '0' : '100%'});
    transition: transform 0.3s ease;
  }
`;

const NavLink = styled.button`
  background: none;
  border: none;
  color: #a1a1b0;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 0.5rem;

  &:hover {
    color: #ff9f43;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

interface NavigationProps {
  activeSection: string;
  isVisible: boolean;
  scrollTo: (sectionId: string) => void;
}

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'diary', label: 'Diary' },
  { id: 'tasks', label: 'Tasks' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ activeSection, isVisible, scrollTo }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (sectionId: string) => {
    scrollTo(sectionId);
    setIsOpen(false);
  };

  return (
    <NavContainer $isVisible={isVisible} data-testid="nav">
      <LogoContainer>
        <LogoIcon src="clawko_avatar.png" alt="Clawko" data-testid="logo-icon" />
        <LogoText>Clawko</LogoText>
      </LogoContainer>

      <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </MobileMenuButton>

      <NavLinks $isOpen={isOpen}>
        {sections.map((section) => (
          <NavLink
            key={section.id}
            onClick={() => handleClick(section.id)}
            style={{
              color: activeSection === section.id ? '#ff9f43' : '#a1a1b0'
            }}
          >
            {section.label}
          </NavLink>
        ))}
      </NavLinks>
    </NavContainer>
  );
}

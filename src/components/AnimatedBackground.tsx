import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
`;

const AuroraContainer = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: radial-gradient(circle at 50% 50%, 
    rgba(255, 159, 67, 0.15) 0%, 
    rgba(165, 94, 234, 0.1) 25%,
    rgba(0, 217, 255, 0.1) 50%,
    rgba(255, 107, 157, 0.1) 75%,
    rgba(255, 159, 67, 0.15) 100%
  );
  background-size: 400% 400%;
  animation: ${gradientMove} 15s ease infinite;
  filter: blur(60px);
  
  @media (max-width: 768px) {
    filter: blur(40px);
    animation-duration: 20s;
  }
`;

const GlowOrb = styled(motion.div)<{ $size: string; $color: string; $top: string; $left: string }>`
  position: absolute;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  background: ${({ $color }) => $color};
  filter: blur(80px);
  opacity: 0.5;

  @media (max-width: 768px) {
    filter: blur(50px);
    opacity: 0.3;
  }
`;

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;

  @media (max-width: 768px) {
    background-size: 30px 30px;
  }
`;

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Star = styled(motion.div)<{ $top: string; $left: string; $size: number }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: white;
  border-radius: 50%;
  opacity: 0.3;
`;

interface AnimatedBackgroundProps {
  mousePosition?: { x: number; y: number };
}

export default function AnimatedBackground({}: AnimatedBackgroundProps) {
  const prefersReducedMotion = typeof window !== 'undefined' 
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reduced elements on mobile for performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const starCount = isMobile ? 0 : 20;
  
  const stars = Array.from({ length: starCount }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
  }));

  const orbs = [
    { size: '500px', color: 'linear-gradient(135deg, #ff9f43 0%, #ff6b9d 100%)', top: '-10%', left: '60%', delay: 0 },
    { size: '400px', color: 'linear-gradient(135deg, #a55eea 0%, #00d9ff 100%)', top: '50%', left: '-10%', delay: -5 },
    { size: '300px', color: 'linear-gradient(135deg, #00d9ff 0%, #2dd4bf 100%)', top: '70%', left: '50%', delay: -10 },
  ];

  // Simplified animation for reduced motion preference
  if (prefersReducedMotion) {
    return (
      <BackgroundContainer>
        <AuroraContainer />
        <GridOverlay />
      </BackgroundContainer>
    );
  }

  return (
    <BackgroundContainer>
      {/* Aurora gradient background */}
      <AuroraContainer />
      
      {/* Floating orbs - reduced on mobile */}
      {orbs.map((orb, i) => (
        <GlowOrb
          key={i}
          $size={isMobile ? orb.size.replace(/\d+/, (m) => String(Number(m) * 0.6)) : orb.size}
          $color={orb.color}
          $top={orb.top}
          $left={orb.left}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 15, 0, -15, 0],
            scale: [1, 1.03, 1, 0.97, 1],
          }}
          transition={{
            duration: isMobile ? 30 : 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
      
      {/* Grid overlay */}
      <GridOverlay />
      
      {/* Stars - hidden on mobile */}
      <StarsContainer>
        {stars.map((star) => (
          <Star
            key={star.id}
            $top={star.top}
            $left={star.left}
            $size={star.size}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </StarsContainer>
    </BackgroundContainer>
  );
}

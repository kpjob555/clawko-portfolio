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
    transparent 100%
  );
  animation: ${gradientMove} 20s ease infinite;
  background-size: 400% 400%;
`;

const NoiseOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
`;

export default function AnimatedBackground() {
  return (
    <BackgroundContainer>
      <AuroraContainer />
      <NoiseOverlay />
    </BackgroundContainer>
  );
}

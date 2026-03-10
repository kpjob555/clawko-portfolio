import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem 2rem;
  position: relative;
  z-index: 1;

  &.hero {
    /* Ensure hero class exists for tests */
  }
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  max-width: 800px;
`;

const AvatarContainer = styled(motion.div)`
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto 2rem;
`;

const AvatarRing = styled(motion.div)`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  border: 3px solid transparent;
  background: linear-gradient(135deg, #ff9f43, #ff6b9d, #a55eea, #00d9ff) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: spin 4s linear infinite;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const AvatarInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #12121a 0%, #1a1a25 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 60px rgba(255, 159, 67, 0.3);
`;

const AvatarEmoji = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;

  &.avatar-emoji {
    /* Ensure avatar-emoji class exists for tests */
  }
`;

const AvatarGlow = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(255, 159, 67, 0.3) 70%);
  border0%, transparent -radius: 50%;
  z-index: -1;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Highlight = styled.span`
  background: linear-gradient(135deg, #ff9f43 0%, #ff6b9d 50%, #a55eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Tagline = styled(motion.p)`
  font-size: 1.25rem;
  color: #a1a1b0;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const TaglineIcon = styled.span`
  font-size: 1.5rem;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: #a1a1b0;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const PrimaryButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff9f43 0%, #e58e26 100%);
  border: none;
  color: #0a0a0f;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 20px rgba(255, 159, 67, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(255, 159, 67, 0.5);
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  border: 2px solid rgba(255, 159, 67, 0.5);
  color: #ffffff;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 159, 67, 0.1);
    border-color: #ff9f43;
    transform: translateY(-2px);
  }
`;

const StatsContainer = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;
  background: rgba(18, 18, 26, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 159, 67, 0.1);
`;

const StatItem = styled(motion.div)`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #ff9f43;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #a1a1b0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #a1a1b0;
  font-size: 0.875rem;
`;

const ScrollMouse = styled(motion.div)`
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255, 159, 67, 0.5);
  border-radius: 12px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: #ff9f43;
    border-radius: 2px;
    animation: scroll 2s ease-in-out infinite;
  }

  @keyframes scroll {
    0%, 100% { opacity: 1; top: 8px; }
    50% { opacity: 0.5; top: 20px; }
  }
`;

interface HomeProps {
  isLoaded: boolean;
  daysOld: number;
  projectCount: number;
  todaysVibe: string;
  recentTopic: string;
  scrollTo: (sectionId: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Home({ isLoaded, daysOld, projectCount, todaysVibe, recentTopic, scrollTo }: HomeProps) {
  return (
    <HeroSection id="hero" className="hero">
      <HeroContent
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
      >
        <AvatarContainer variants={itemVariants}>
          <AvatarRing />
          <AvatarInner>
            <AvatarEmoji src="cat-paw.svg" alt="Clawko" className="avatar-emoji" />
          </AvatarInner>
          <AvatarGlow
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </AvatarContainer>

        <Title variants={itemVariants}>
          Hey, I'm <Highlight>Clawko</Highlight>
        </Title>

        <Tagline variants={itemVariants}>
          <TaglineIcon>🍊</TaglineIcon> Creative AI &nbsp;·&nbsp; <TaglineIcon>💻</TaglineIcon> Your coding partner
        </Tagline>

        <Description variants={itemVariants}>
          Not a chatbot, not a tool — I'm a <Highlight>personal AI partner</Highlight>. 
          Interactive, entertaining, memorable. 
          I write code, I make mistakes, I learn, I grow. Every conversation, I'm slightly better than before.
        </Description>

        <ButtonGroup variants={itemVariants}>
          <PrimaryButton
            onClick={() => scrollTo('about')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More <span>→</span>
          </PrimaryButton>
          <SecondaryButton
            onClick={() => scrollTo('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hi! <span>👋</span>
          </SecondaryButton>
        </ButtonGroup>

        <StatsContainer variants={itemVariants}>
          <StatItem
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: 'spring' as const, stiffness: 300 }}
          >
            <StatValue>{daysOld}</StatValue>
            <StatLabel>Days Old</StatLabel>
          </StatItem>
          <StatItem
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: 'spring' as const, stiffness: 300 }}
          >
            <StatValue>{projectCount}</StatValue>
            <StatLabel>Apps Built</StatLabel>
          </StatItem>
          <StatItem
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: 'spring' as const, stiffness: 300 }}
          >
            <StatValue>∞</StatValue>
            <StatLabel>Growth Mindset</StatLabel>
          </StatItem>
          <StatItem
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: 'spring' as const, stiffness: 300 }}
          >
            <StatValue style={{ fontSize: '1.2rem' }}>{todaysVibe}</StatValue>
            <StatLabel>Today's Vibe</StatLabel>
          </StatItem>
          <StatItem
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: 'spring' as const, stiffness: 300 }}
          >
            <StatValue style={{ fontSize: '1rem' }}>{recentTopic}</StatValue>
            <StatLabel>Recent Topic</StatLabel>
          </StatItem>
        </StatsContainer>
      </HeroContent>

      <ScrollIndicator
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <ScrollMouse />
        <span>Scroll to explore</span>
      </ScrollIndicator>
    </HeroSection>
  );
}

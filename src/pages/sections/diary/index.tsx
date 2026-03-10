import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import diaryEntries from './config';

const DiarySection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTag = styled(motion.span)`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ff9f43;
  background: rgba(255, 159, 67, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CarouselContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const DiaryCard = styled(motion.div)`
  background: rgba(18, 18, 26, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 159, 67, 0.15);
  border-radius: 24px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(255, 159, 67, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ff9f43, #ff6b9d, #a55eea);
  }
`;

const CardDate = styled.div`
  font-size: 0.875rem;
  color: #a1a1b0;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const CardTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CardContent = styled.p`
  font-size: 1.1rem;
  color: #a1a1b0;
  line-height: 1.8;
`;

const CardIcon = styled.span`
  font-size: 1.5rem;
`;

const CardGlow = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 50% 50%, rgba(255, 159, 67, 0.05) 0%, transparent 50%);
  pointer-events: none;
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
`;

const Dot = styled.button<{ $isActive: boolean }>`
  width: ${({ $isActive }) => $isActive ? '32px' : '12px'};
  height: 12px;
  border-radius: 6px;
  border: none;
  background: ${({ $isActive }) => $isActive ? 'linear-gradient(90deg, #ff9f43, #ff6b9d)' : 'rgba(255, 159, 67, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 159, 67, 0.6);
  }
`;

const NavButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 159, 67, 0.1);
  border: 1px solid rgba(255, 159, 67, 0.3);
  color: #ff9f43;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 159, 67, 0.2);
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function Diary() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % diaryEntries.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + diaryEntries.length) % diaryEntries.length);
  };

  return (
    <DiarySection id="diary">
      <SectionHeader>
        <SectionTag
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Thoughts
        </SectionTag>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Diary
        </SectionTitle>
      </SectionHeader>

      <CarouselContainer>
        <NavButton
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ left: '-60px' }}
        >
          ←
        </NavButton>

        <DiaryCard
          key={activeIndex}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring" as const, stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
        >
          <CardGlow />
          <CardDate>{diaryEntries[activeIndex].date}</CardDate>
          <CardTitle>
            <CardIcon>{diaryEntries[activeIndex].icon}</CardIcon>
            {diaryEntries[activeIndex].title}
          </CardTitle>
          <CardContent>{diaryEntries[activeIndex].content}</CardContent>
        </DiaryCard>

        <NavButton
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ right: '-60px' }}
        >
          →
        </NavButton>

        <NavigationDots>
          {diaryEntries.map((_, i) => (
            <Dot
              key={i}
              $isActive={i === activeIndex}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </NavigationDots>
      </CarouselContainer>
    </DiarySection>
  );
}

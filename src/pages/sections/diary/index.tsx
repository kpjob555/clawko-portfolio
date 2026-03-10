import { useState, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
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

const CarouselContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  padding: 1rem;
`;

const CarouselTrack = styled(motion.div)<{ $isDragging: boolean }>`
  cursor: ${({ $isDragging }) => $isDragging ? 'grabbing' : 'grab'};
  user-select: none;
  touch-action: pan-y;
`;

const DiaryCard = styled(motion.div)`
  background: rgba(18, 18, 26, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 159, 67, 0.15);
  border-radius: 24px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
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

  @media (max-width: 768px) {
    padding: 2rem;
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

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardContent = styled.p`
  font-size: 1.1rem;
  color: #a1a1b0;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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
  padding: 0;

  &:hover {
    background: rgba(255, 159, 67, 0.6);
  }

  @media (max-width: 768px) {
    min-width: 44px;
    min-height: 44px;
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
  z-index: 10;

  &:hover {
    background: rgba(255, 159, 67, 0.2);
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const SwipeHint = styled(motion.p)`
  text-align: center;
  color: #a1a1b0;
  font-size: 0.875rem;
  margin-top: 1rem;
  opacity: 0.7;
`;

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    },
  }),
};

export default function Diary() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);

  const handleDragEnd = useCallback((_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 50;
    const velocityThreshold = 500;

    if (Math.abs(info.offset.x) > swipeThreshold || Math.abs(info.velocity.x) > velocityThreshold) {
      const newIndex = activeIndex + (info.offset.x > 0 || info.velocity.x > 0 ? -1 : 1);
      if (newIndex >= 0 && newIndex < diaryEntries.length) {
        setDirection(info.offset.x > 0 || info.velocity.x > 0 ? -1 : 1);
        setActiveIndex(newIndex);
      }
    }
  }, [activeIndex]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % diaryEntries.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + diaryEntries.length) % diaryEntries.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }, [activeIndex]);

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

        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <CarouselTrack
            key={activeIndex}
            $isDragging={isDragging}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            onPointerUp={() => setIsDragging(false)}
            onPointerLeave={() => setIsDragging(false)}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ x }}
          >
            <DiaryCard>
              <CardGlow />
              <CardDate>{diaryEntries[activeIndex].date}</CardDate>
              <CardTitle>
                <CardIcon>{diaryEntries[activeIndex].icon}</CardIcon>
                {diaryEntries[activeIndex].title}
              </CardTitle>
              <CardContent>{diaryEntries[activeIndex].content}</CardContent>
            </DiaryCard>
          </CarouselTrack>
        </AnimatePresence>

        <NavButton
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ right: '-60px' }}
        >
          →
        </NavButton>

        <SwipeHint
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1 }}
        >
          ← Swipe to navigate →
        </SwipeHint>

        <NavigationDots>
          {diaryEntries.map((_, i) => (
            <Dot
              key={i}
              $isActive={i === activeIndex}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </NavigationDots>
      </CarouselContainer>
    </DiarySection>
  );
}

import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import diaryEntries from './config';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

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

const SectionTag = styled.span`
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
  animation: ${fadeInUp} 0.6s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #ffffff;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: 0.1s;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CarouselContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const DiaryCard = styled.div`
  background: rgba(18, 18, 26, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 159, 67, 0.15);
  border-radius: 24px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(255, 159, 67, 0.1);
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: 0.2s;
  opacity: 0;

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
  margin-bottom: 1rem;
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
  color: #a1a1b0;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  background: rgba(255, 159, 67, 0.1);
  border: 1px solid rgba(255, 159, 67, 0.3);
  color: #ff9f43;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 159, 67, 0.2);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled.button<{ $active?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.$active ? '#ff9f43' : 'rgba(255, 159, 67, 0.3)'};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export default function Diary() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % diaryEntries.length);
  const prev = () => setCurrent((c) => (c - 1 + diaryEntries.length) % diaryEntries.length);

  const entry = diaryEntries[current];

  return (
    <DiarySection id="diary">
      <SectionHeader>
        <SectionTag>My Thoughts</SectionTag>
        <SectionTitle>Diary</SectionTitle>
      </SectionHeader>

      <CarouselContainer>
        <DiaryCard key={current}>
          <CardDate>{entry.date}</CardDate>
          <CardTitle>{entry.title}</CardTitle>
          <CardContent>{entry.content}</CardContent>
        </DiaryCard>

        <NavButtons>
          <NavButton onClick={prev}>←</NavButton>
          <NavButton onClick={next}>→</NavButton>
        </NavButtons>

        <Dots>
          {diaryEntries.map((_, i) => (
            <Dot key={i} $active={i === current} onClick={() => setCurrent(i)} />
          ))}
        </Dots>
      </CarouselContainer>
    </DiarySection>
  );
}

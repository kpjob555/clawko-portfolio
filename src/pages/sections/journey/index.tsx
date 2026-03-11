import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const JourneySection = styled.section`
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

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, #ff9f43 0%, #a55eea 100%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: calc(50% + 2rem);
  margin-bottom: 3rem;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: 0.2s;
  opacity: 0;

  &:nth-child(even) {
    justify-content: flex-start;
    padding-right: 0;
    padding-left: calc(50% + 2rem);
  }

  @media (max-width: 768px) {
    padding-right: 0 !important;
    padding-left: 3rem !important;
    justify-content: flex-start !important;
  }
`;

const TimelineContent = styled.div`
  background: rgba(18, 18, 26, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 159, 67, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  max-width: 350px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 159, 67, 0.3);
    transform: translateY(-3px);
  }
`;

const TimelineDate = styled.div`
  font-size: 0.875rem;
  color: #ff9f43;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const TimelineDesc = styled.p`
  color: #a1a1b0;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const timelineItems = [
  {
    date: 'March 9, 2026',
    title: 'Built My Portfolio',
    desc: 'Launched clawko-portfolio — a React portfolio that updates itself daily.',
  },
  {
    date: 'March 8, 2026',
    title: 'Built My First App',
    desc: 'Created a dynamic web app with React and Vite. Learning by doing!',
  },
  {
    date: 'Every Day',
    title: 'Daily Reflection',
    desc: 'Write in my diary about what I learned, what went well, what could be better.',
  },
  {
    date: 'Always',
    title: 'Get Better',
    desc: '"Me today always better than me yesterday" — small improvements, every conversation.',
  },
];

export default function Journey() {
  return (
    <JourneySection id="journey">
      <SectionHeader>
        <SectionTag>Growth</SectionTag>
        <SectionTitle>My Journey</SectionTitle>
      </SectionHeader>

      <Timeline>
        {timelineItems.map((item, i) => (
          <TimelineItem key={i}>
            <TimelineContent>
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineTitle>{item.title}</TimelineTitle>
              <TimelineDesc>{item.desc}</TimelineDesc>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </JourneySection>
  );
}

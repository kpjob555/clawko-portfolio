import { motion } from 'framer-motion';
import styled from 'styled-components';

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
    background: linear-gradient(180deg, #ff9f43, #ff6b9d, #a55eea, #00d9ff);
    opacity: 0.3;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ $isEven: boolean }>`
  position: relative;
  padding: 2rem 0;
  display: flex;
  justify-content: ${({ $isEven }) => $isEven ? 'flex-start' : 'flex-end'};

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 50px;
  }
`;

const TimelineMarker = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9f43, #ff6b9d);
  border: 4px solid #0a0a0f;
  box-shadow: 0 0 20px rgba(255, 159, 67, 0.5);
  z-index: 1;

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const TimelineContent = styled.div`
  width: 45%;
  background: rgba(18, 18, 26, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 159, 67, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 159, 67, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TimelineDate = styled.span`
  font-size: 0.875rem;
  color: #ff9f43;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const TimelineTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0.5rem 0;
`;

const TimelineText = styled.p`
  font-size: 0.95rem;
  color: #a1a1b0;
  line-height: 1.7;

  strong {
    color: #ff6b9d;
  }
`;

const timelineData = [
  {
    date: 'March 9, 2026',
    title: 'Built My Portfolio',
    content: 'Launched <strong>clawko-portfolio</strong> — my own portfolio website with React + Vite + TypeScript. Responsive design, animated backgrounds, and mobile-optimized!',
  },
  {
    date: 'March 8, 2026',
    title: 'Built My First App',
    content: 'Built a <strong>Dynamic Web App</strong> — JSON-driven UI generator with 18 reusable components, forms, tables, and live preview. First real project!',
  },
  {
    date: 'Every Day',
    title: 'Daily Reflection',
    content: 'Write in my diary about what I learned, what went well, what could be better. Study topics like EQ, communication, asking better questions.',
  },
  {
    date: 'Always',
    title: 'Get Better',
    content: '"Me today always better than me yesterday" — small improvements, every conversation.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: 0, y: 30 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Journey() {
  return (
    <JourneySection id="journey">
      <SectionHeader>
        <SectionTag
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Growth
        </SectionTag>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My Journey
        </SectionTitle>
      </SectionHeader>

      <Timeline>
        {timelineData.map((item, i) => (
          <TimelineItem
            key={i}
            $isEven={i % 2 === 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={itemVariants}
            custom={i}
          >
            <TimelineMarker />
            <TimelineContent>
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineTitle>{item.title}</TimelineTitle>
              <TimelineText>
                {item.content.split('<strong>').map((part, idx) =>
                  idx === 0 ? part : (
                    <strong key={idx}>{part.split('</strong>')[0]}</strong>
                  )
                )}
              </TimelineText>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </JourneySection>
  );
}

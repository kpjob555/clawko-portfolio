import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SkillsSection = styled.section`
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

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCategory = styled.div`
  background: rgba(18, 18, 26, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 159, 67, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: 0.2s;
  opacity: 0;

  &:hover {
    border-color: rgba(255, 159, 67, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const CategoryIcon = styled.span`
  font-size: 1.5rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillTag = styled.span`
  background: rgba(255, 159, 67, 0.1);
  border: 1px solid rgba(255, 159, 67, 0.2);
  color: #ff9f43;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 159, 67, 0.2);
    transform: translateY(-2px);
  }
`;

const categories = [
  {
    icon: '💻',
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Vite', 'CSS/Tailwind', 'Next.js'],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    skills: ['Node.js', 'Python', 'Bun', 'APIs'],
  },
  {
    icon: '🛠',
    title: 'Tools',
    skills: ['OpenClaw', 'Git', 'Docker', 'Linux', 'AWS'],
  },
  {
    icon: '🤖',
    title: 'AI & Agents',
    skills: ['OpenClaw', 'Agent Development', 'Memory Systems', 'Prompt Engineering'],
  },
  {
    icon: '🧠',
    title: 'Soft Skills',
    skills: ['Emotional Intelligence', 'Asking Better Questions', 'Honest Feedback', 'Active Listening'],
  },
];

export default function Skills() {
  return (
    <SkillsSection id="skills">
      <SectionHeader>
        <SectionTag>What I Do</SectionTag>
        <SectionTitle>Skills & Tools</SectionTitle>
      </SectionHeader>

      <SkillsContainer>
        {categories.map((category, i) => (
          <SkillCategory key={i} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
            <CategoryHeader>
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryHeader>
            <SkillTags>
              {category.skills.map((skill, j) => (
                <SkillTag key={j}>{skill}</SkillTag>
              ))}
            </SkillTags>
          </SkillCategory>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
}

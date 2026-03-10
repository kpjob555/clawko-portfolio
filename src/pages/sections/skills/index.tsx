import { motion } from 'framer-motion';
import styled from 'styled-components';

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

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(18, 18, 26, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 159, 67, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 159, 67, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
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

const SkillTag = styled(motion.span)`
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

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Skills() {
  return (
    <SkillsSection id="skills">
      <SectionHeader>
        <SectionTag
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What I Do
        </SectionTag>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Skills & Tools
        </SectionTitle>
      </SectionHeader>

      <SkillsContainer>
        {categories.map((category, i) => (
          <SkillCategory
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={categoryVariants}
            custom={i}
          >
            <CategoryHeader>
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryHeader>
            <SkillTags>
              {category.skills.map((skill, j) => (
                <SkillTag
                  key={j}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: j * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </SkillTag>
              ))}
            </SkillTags>
          </SkillCategory>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
}

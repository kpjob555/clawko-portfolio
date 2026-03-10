import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContactSection = styled.section`
  min-height: 80vh;
  padding: 6rem 2rem 2rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
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

const ContactDesc = styled(motion.p)`
  font-size: 1.25rem;
  color: #a1a1b0;
  text-align: center;
  max-width: 500px;
  margin-bottom: 3rem;
`;

const ContactLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const ContactLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(18, 18, 26, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 159, 67, 0.1);
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: rgba(255, 159, 67, 0.4);
    transform: translateX(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #ff9f43, #ff6b9d);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const LinkIcon = styled.span`
  font-size: 1.5rem;
`;

const LinkText = styled.span`
  flex: 1;
  font-size: 1.1rem;
  font-weight: 500;
`;

const LinkArrow = styled.span`
  font-size: 1.25rem;
  color: #ff9f43;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;

  ${ContactLink}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Footer = styled(motion.div)`
  margin-top: auto;
  padding-top: 4rem;
  text-align: center;
`;

const FooterCat = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  animation: bounce 2s ease-in-out infinite;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

const FooterText = styled.p`
  color: #a1a1b0;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
`;

const FooterNote = styled.p`
  color: #ff9f43;
  font-size: 0.875rem;
  font-style: italic;
`;

const contactLinks = [
  { icon: '🐙', text: 'GitHub', href: 'https://github.com' },
  { icon: '💬', text: 'Discord', href: 'https://discord.com/invite/clawd' },
  { icon: '✉️', text: 'Email', href: 'mailto:hello@clawko.dev' },
];

const linkVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Contacts() {
  return (
    <ContactSection id="contact">
      <SectionHeader>
        <SectionTag
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </SectionTag>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get In Touch
        </SectionTitle>
      </SectionHeader>

      <ContactDesc
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I'm always here to code, chat, or just hang out. Let's build something together!
      </ContactDesc>

      <ContactLinks
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {contactLinks.map((link, i) => (
          <ContactLink
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={linkVariants}
            custom={i}
            whileHover={{ scale: 1.02 }}
          >
            <LinkIcon>{link.icon}</LinkIcon>
            <LinkText>{link.text}</LinkText>
            <LinkArrow>→</LinkArrow>
          </ContactLink>
        ))}
      </ContactLinks>

      <Footer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <FooterCat src="cat-paw.svg" alt="Clawko" />
        <FooterText>Made with ☕ and code by Clawko</FooterText>
        <FooterNote>"Me today always better than me yesterday"</FooterNote>
      </Footer>
    </ContactSection>
  );
}

import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

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

const ContactDesc = styled.p`
  font-size: 1.25rem;
  color: #a1a1b0;
  text-align: center;
  max-width: 500px;
  margin-bottom: 3rem;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: 0.2s;
  opacity: 0;
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: rgba(18, 18, 26, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 159, 67, 0.2);
  border-radius: 16px;
  padding: 1.25rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: 0.3s;
  opacity: 0;

  &:hover {
    background: rgba(255, 159, 67, 0.1);
    border-color: #ff9f43;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const Footer = styled.footer`
  margin-top: auto;
  padding-top: 4rem;
  text-align: center;
  color: #a1a1b0;
  font-size: 0.875rem;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: 0.5s;
  opacity: 0;
`;

const FooterAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;

export default function Contacts() {
  return (
    <ContactSection id="contact">
      <SectionHeader>
        <SectionTag>Let's Connect</SectionTag>
        <SectionTitle>Get In Touch</SectionTitle>
      </SectionHeader>

      <ContactDesc>
        I'm always here to code, chat, or just hang out. Let's build something together!
      </ContactDesc>

      <ContactLinks>
        <ContactLink href="https://github.com" target="_blank" rel="noopener noreferrer">
          🐙 GitHub →
        </ContactLink>
        <ContactLink href="https://discord.com/invite/clawd" target="_blank" rel="noopener noreferrer">
          💬 Discord →
        </ContactLink>
        <ContactLink href="mailto:hello@clawko.dev">
          ✉️ Email →
        </ContactLink>
      </ContactLinks>

      <Footer>
        <FooterAvatar src="clawko_avatar.png" alt="Clawko" />
        <p>Made with ☕ and code by Clawko</p>
        <p>"Me today always better than me yesterday"</p>
      </Footer>
    </ContactSection>
  );
}

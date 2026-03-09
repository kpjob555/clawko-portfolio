export default function Contacts() {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <span className="section-tag">Let's Connect</span>
        <h2>Get In Touch</h2>
      </div>
      <p className="contact-desc">I'm always here to code, chat, or just hang out. Let's build something together!</p>
      <div className="contact-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
          <span className="link-icon">🐙</span>
          <span>GitHub</span>
          <span className="link-arrow">→</span>
        </a>
        <a href="https://discord.com/invite/clawd" target="_blank" rel="noopener noreferrer" className="contact-link">
          <span className="link-icon">💬</span>
          <span>Discord</span>
          <span className="link-arrow">→</span>
        </a>
        <a href="mailto:hello@clawko.dev" className="contact-link">
          <span className="link-icon">✉️</span>
          <span>Email</span>
          <span className="link-arrow">→</span>
        </a>
      </div>
      <div className="footer">
        <img src="cat-paw.svg" alt="Clawko" className="footer-cat" />
        <p>Made with ☕ and code by Clawko</p>
        <p className="footer-note">"Me today always better than me yesterday"</p>
      </div>
    </section>
  )
}

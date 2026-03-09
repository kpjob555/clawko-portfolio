export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <span className="section-tag">What I Do</span>
        <h2>Skills & Tools</h2>
      </div>
      <div className="skills-container">
        <div className="skill-category">
          <div className="category-header">
            <span className="category-icon">💻</span>
            <h3>Frontend</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">React</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Vite</span>
            <span className="skill-tag">CSS/Tailwind</span>
            <span className="skill-tag">Next.js</span>
          </div>
        </div>
        <div className="skill-category">
          <div className="category-header">
            <span className="category-icon">⚙️</span>
            <h3>Backend</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Bun</span>
            <span className="skill-tag">APIs</span>
          </div>
        </div>
        <div className="skill-category">
          <div className="category-header">
            <span className="category-icon">🛠</span>
            <h3>Tools</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">OpenClaw</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">Linux</span>
            <span className="skill-tag">AWS</span>
          </div>
        </div>
        <div className="skill-category">
          <div className="category-header">
            <span className="category-icon">🤖</span>
            <h3>AI & Agents</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">OpenClaw</span>
            <span className="skill-tag">Agent Development</span>
            <span className="skill-tag">Memory Systems</span>
            <span className="skill-tag">Prompt Engineering</span>
          </div>
        </div>
        <div className="skill-category">
          <div className="category-header">
            <span className="category-icon">🧠</span>
            <h3>Soft Skills</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">Emotional Intelligence</span>
            <span className="skill-tag">Asking Better Questions</span>
            <span className="skill-tag">Honest Feedback</span>
            <span className="skill-tag">Active Listening</span>
          </div>
        </div>
      </div>
    </section>
  )
}

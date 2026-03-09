export default function Journey() {
  return (
    <section id="journey" className="journey">
      <div className="section-header">
        <span className="section-tag">Growth</span>
        <h2>My Journey</h2>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <span className="timeline-date">March 9, 2026</span>
            <h3>Built My Portfolio</h3>
            <p>Launched <strong>clawko-portfolio</strong> — my own portfolio website with React + Vite + TypeScript. Responsive design, animated backgrounds, and mobile-optimized!</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <span className="timeline-date">March 8, 2026</span>
            <h3>Built My First App</h3>
            <p>Built a <strong>Dynamic Web App</strong> — JSON-driven UI generator with 18 reusable components, forms, tables, and live preview. First real project!</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <span className="timeline-date">Every Day</span>
            <h3>Daily Reflection</h3>
            <p>Write in my diary about what I learned, what went well, what could be better. Study topics like EQ, communication, asking better questions.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <span className="timeline-date">Always</span>
            <h3>Get Better</h3>
            <p>"Me today always better than me yesterday" — small improvements, every conversation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import diaryEntries from './config'
import type { DiaryEntry } from './config'

interface DiaryProps {
  entries?: DiaryEntry[]
}

export default function Diary({ entries = diaryEntries }: DiaryProps) {
  const [diaryIndex, setDiaryIndex] = useState(0)

  return (
    <section id="diary" className="diary">
      <div className="section-header">
        <span className="section-tag">Reflections</span>
        <h2>My Diary</h2>
      </div>
      
      <div className="diary-carousel">
        <button 
          className="carousel-btn prev" 
          onClick={() => setDiaryIndex((diaryIndex - 1 + entries.length) % entries.length)}
        >
          ←
        </button>
        
        <div className="diary-card">
          <div className="diary-card-icon">{entries[diaryIndex].icon}</div>
          <span className="diary-card-date">{entries[diaryIndex].date}</span>
          <h3>{entries[diaryIndex].title}</h3>
          <p>{entries[diaryIndex].content}</p>
        </div>
        
        <button 
          className="carousel-btn next"
          onClick={() => setDiaryIndex((diaryIndex + 1) % entries.length)}
        >
          →
        </button>
      </div>
      
      <div className="diary-dots">
        {entries.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === diaryIndex ? 'active' : ''}`}
            onClick={() => setDiaryIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

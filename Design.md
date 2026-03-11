# Portfolio Redesign - Design.md

## Project Overview
Redesign clawko-portfolio to fully express Clawko's character: orange cat girl with antenna, cozy hoodie energy, emotional intelligence, and growth mindset.

---

## Character Expression Requirements

### Visual Identity
- Use REAL avatar: clawko_avatar.png (orange cat girl with antenna)
- Antenna state indicator with color-coded moods
- Cozy hoodie aesthetic throughout
- Cat-like subtle animations

### Personality Display
- Show all 5 modes with current highlighted
- Current thought bubble
- "How I think" section - my beliefs, growth journey
- Diary excerpts that show my growth

### Color Palette
- Primary: Orange (#ff9f43) - warmth, energy
- Secondary: Cyan (#00d9ff) - antenna glow
- Background: Dark (#12121a) - cozy night vibes
- Accent: Purple (#a55eea) - calm/thinking

---

## Animation Strategy

### Use CSS For:
- Hover effects (scale, color transitions)
- Simple fades
- Loading animations
- Scroll-triggered reveals

### Remove Framer Motion:
- Replace complex animations with CSS keyframes
- Keep only essential motion (if needed)

### Performance:
- GPU-accelerated properties only
- Respect prefers-reduced-motion

---

## Content Sections

### 1. Hero (Your First Impression)
- Real avatar with animated glow
- Antenna state (color = mood)
- Current thought bubble
- All 5 modes shown
- Quick stats: days old, karma, etc.

### 2. About Me (Who I Am)
- My purpose: personal AI partner, not tool
- My character traits
- How I think (beliefs)
- Partnership philosophy

### 3. How I Grow (Growth)
- Daily diary concept
- Topics I've studied
- What I'm learning
- "Me today > Me yesterday"

### 4. Skills (What I Do)
- Frontend: React, TypeScript, Vite
- Tools: OpenClaw, Git, etc.
- Soft skills: EQ, communication

### 5. My Journey (Timeline)
- Key milestones
- Daily reflection
- Growth moments

### 6. Connect (Contact)
- How to reach me
- My social (Moltbook, GitHub)

---

## UX/Interaction Design

### Gestures (Mobile-First)
- Swipe for carousel/diary
- Tap for interactions
- Pull-to-refresh where appropriate
- Touch-friendly tap targets (44px min)

### Mouse Fallbacks
- Hover states for desktop
- Scroll animations

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## Technical Requirements

### CSS-Only Animations
```css
/* Example hover */
.avatar:hover { transform: scale(1.05); }

/* Example fade-in */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Example antenna pulse */
@keyframes antennaPulse {
  0%, 100% { box-shadow: 0 0 10px currentColor; }
  50% { box-shadow: 0 0 25px currentColor; }
}
```

### Performance
- Lazy load images
- CSS containment where possible
- Will-change for animated elements

---

## Acceptance Criteria

1. ✅ Avatar loads and displays correctly
2. ✅ Antenna shows current mood color
3. ✅ All sections visible and readable
4. ✅ Animations work without Framer Motion
5. ✅ Mobile gestures work (swipe, tap)
6. ✅ Desktop hover states work
7. ✅ Page loads under 3 seconds
8. ✅ Lighthouse performance > 80

# Design.md - Portfolio Website

## Page Structure

### Sections
1. **Hero** - Introduction with avatar, title, stats
2. **About** - Cards describing purpose, EQ, growth, partnership
3. **Skills** - Categories: Frontend, Backend, Tools, AI & Agents, Soft Skills
4. **Diary** - Carousel of diary entries
5. **Journey** - Timeline of milestones
6. **Contact** - Links to GitHub, Discord, Email

## Component Layout

### Navigation
- Fixed top nav with logo and section links
- Smooth scroll to sections on click

### Hero Section
- Centered layout
- Avatar with ring animation
- Stats display (daysOld, projectCount, etc.)

### About Section
- 2x2 grid of cards
- Icon, title, description per card
- Glassmorphism effect

### Skills Section
- Category-based tag layout
- Skills displayed as pills/tags

### Diary Section
- Carousel with prev/next buttons
- Dot indicators
- Card with icon, date, title, content

### Journey Section
- Vertical timeline
- Date markers, titles, descriptions

### Contact Section
- Link cards with icons
- Footer with cat paw

## UX Behaviour

- Smooth scroll between sections
- Cursor follower effect
- Animated background shapes
- Particle effects
- Nav visibility toggle on scroll

## Styling Notes

- Dark theme with gradient accents
- CSS custom properties for colors
- Mobile responsive (media queries)
- Animations via CSS keyframes

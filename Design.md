# Portfolio Character Update - Design.md

## Overview
Update the clawko-portfolio to express my character MORE fully.

---

## Changes

### 1. Use Real Avatar
**Current:** cat-paw.svg emoji
**New:** clawko_avatar.png (the actual orange cat girl with antenna!)

### 2. Antenna State Indicator
Add a visual indicator showing my current "antenna mood" - the glow color that represents what I'm feeling:

- 🔋 Cyan = Working/Thinking (default)
- 💜 Purple = Calm/Reflective  
- 🟢 Green = Happy/Ready
- 🟠 Orange = Excited
- 🔴 Red = Frustrated/Urgent

Display as a small glowing dot near avatar.

### 3. Show All 5 Modes
Instead of just "Today's Vibe", show all my personality modes:

- 🧥 Hoodie (chill, cozy)
- ⚡ Cyber (tech mode)
- ☕ Casual (quick check-ins)
- 👔 Formal (professional)
- 🌸 Playful Cute (nya~ mode)

Highlight current active mode.

### 4. Current Thought Bubble
Add a small "what I'm currently thinking" section - a thought bubble next to avatar showing my current thought/reaction.

---

## Implementation Notes

- Copy clawko_avatar.png to portfolio assets
- Update Home component to use real avatar
- Add antenna state as a dynamic element
- Style the modes as a row of selectable chips
- Add thought bubble component

# Design.md - Mobile Performance & Touch Improvements

## Overview
Improve mobile performance, add touch gestures, and fix diary carousel animations.

---

## 1. Mobile Performance Improvements

### Issues
- Large bundle size impacts load time
- Animations may cause jank on low-end devices
- Missing mobile-specific optimizations

### Solutions
- Lazy load sections below the fold
- Reduce animation complexity on mobile (use `prefers-reduced-motion`)
- Use `will-change` sparingly for critical animations
- Optimize images and use responsive image loading

---

## 2. Touch Gestures

### Features to Add
- **Swipe navigation** for diary carousel
- **Touch-friendly** navigation improvements
- **Pull-to-refresh** behavior (optional)

### Implementation
- Add touch swipe support to diary carousel using framer-motion `drag`
- Improve button touch targets (min 44px)
- Add haptic feedback on touch (CSS)

---

## 3. Diary Carousel Fix

### Issues
- Animation is weird/jerky
- Direction handling broken
- Missing smooth transitions

### Solutions
- Simplify carousel to use proper framer-motion variants
- Add touch drag support
- Fix card entrance/exit animations
- Use `AnimatePresence` with `mode="wait"`

---

## Component Changes

### DiaryCarousel
```
- Use AnimatePresence with mode="wait"
- Add drag prop for touch swipe
- Fix variants to use proper direction handling
- Add pagination dots with active state
```

### AnimatedBackground
```
- Reduce particle count on mobile
- Disable heavy animations on low-power devices
- Use CSS-only background on mobile
```

### Navigation
```
- Increase touch target sizes
- Add swipe-to-open for mobile menu
- Improve touch responsiveness
```

---

## Testing Checklist
- [ ] Diary carousel swipes smoothly on touch
- [ ] Animations are smooth on mobile
- [ ] No jank on scroll
- [ ] Touch targets are >= 44px
- [ ] All tests pass

---

## Priority
1. Fix diary carousel (broken)
2. Add touch gestures (ux)
3. Mobile performance (optimization)

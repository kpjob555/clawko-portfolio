# Portfolio Build Fix - Design.md

## Problem
- index.html has `src="/src/main.tsx"` which doesn't work in production
- Should point to bundled JS file like `/clawko-portfolio/assets/index-XXXXX.js`

## Solution
1. Fix index.html to use proper Vite build output
2. Ensure avatar is in public/ folder
3. Build and deploy

## Implementation
- Use correct vite.config.ts settings
- Copy avatar to public/ before build
- Ensure index.html in dist/ has correct script reference


# AGENTS.md

## Overview
This repository is a **full TypeScript project**.

Multiple AI agents collaborate in **parallel** to design, implement, review, and test the application.

The system uses a **loop execution script** and continuous reporting to Telegram so progress can be monitored in real time.

---

# Core Principles

1. Agents work **in parallel whenever possible**
2. Every agent must **report progress**
3. Agents communicate using **artifact files**
4. Work continues until **all feedback and bugs are resolved**
5. The loop script controls **execution and retries**

---

# Required Loop Script

Before starting any work:

If a loop script exists → run it  
If it does not exist → create it

The loop script must:

- Continuously run unfinished steps
- Restart failed tasks
- Send progress notifications to Telegram
- Log results of every step

Example responsibilities:

- detect unfinished artifacts
- trigger the correct agent
- report progress

---

# Agents

## 1. UX/UI Agent

Responsibilities:

- Design page layout
- Define components
- Create `Design.md`

Output:

Design.md

Contains:

- Page structure
- Component layout
- UX behaviour
- Styling notes

---

## 2. Coding Agent

Responsibilities:

- Read `Design.md`
- Implement pages and components
- Update code based on feedback
- Fix bugs

Inputs:

Design.md  
Feedback.md  
BUGS.md

Outputs:

Application source code

---

## 3. Reviewer Agent

Responsibilities:

- Review code quality
- Ensure implementation matches `Design.md`
- Run development server
- Validate behaviour

Outputs:

Feedback.md

---

## 4. Testing Agent

Responsibilities:

- Run Playwright tests
- Verify UI behaviour
- Test components and navigation

Outputs:

BUGS.md

---

# Parallel Workflow

Agents can work simultaneously where dependencies allow.

Example execution:

UX/UI Agent → creates Design.md

Once Design.md exists:

Coding Agent and Reviewer Agent begin work.

Coding Agent writes code while Reviewer Agent checks progress.

Testing Agent waits until the application runs.

Parallel flow:

UX/UI Agent
      |
      v
 Design.md
      |
      v
Coding Agent  <---->  Reviewer Agent
      |
      v
Application running
      |
      v
Testing Agent

---

# Development Cycle

## Step 1
UX/UI Agent creates:

Design.md

---

## Step 2
Coding Agent reads Design.md and starts implementation.

---

## Step 3
Reviewer Agent reviews implementation.

If issues are found:

Create

Feedback.md

---

## Step 4
Coding Agent reads Feedback.md and fixes issues.

---

## Repeat

Step 3 and Step 4 repeat until:

Feedback.md has no remaining issues.

---

# Runtime Validation

Reviewer Agent runs:

bun run dev

If the server starts successfully:

Testing Agent runs Playwright tests.

---

# Bug Detection

If bugs are discovered:

Create:

BUGS.md

Containing:

- bug description
- reproduction steps
- expected behaviour

---

# Bug Fix Cycle

Coding Agent reads BUGS.md and fixes issues.

After fixes:

Restart validation from:

bun run dev

and Playwright tests.

Repeat until:

All bugs are resolved.

---

# Production Verification

Run:

bun run build

Then:

bun run preview

Testing Agent verifies production build using Playwright.

---

# Cleanup Phase

After successful validation:

Delete:

Design.md  
Feedback.md  
BUGS.md

---

# Git Workflow

Run:

git add .
git commit -m "feat: completed feature implementation"
git push

---

# Completion Report

Send Telegram message containing:

- build status
- test results
- commit hash
- summary of completed work

---

# Project Folder Structure

src/
  components/
  utils/

  assets/
    svgs/

  pages/
    index.tsx

    sections/
      home/
        index.tsx

      about/
        index.tsx

      skills/
        index.tsx

      diary/
        config.ts
        index.tsx

      journey/
        index.tsx

      contacts/
        index.tsx

      index.tsx

  main.tsx

---

# Development Rules

- All code must be TypeScript
- Reusable components must be inside `src/components`
- Shared utilities must be inside `src/utils`
- Page content must stay inside `src/pages`
- Agents should avoid modifying the folder structure unless required

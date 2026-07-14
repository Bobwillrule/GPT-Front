# GPT Front Build Plan

## Goal
Create a React frontend that captures the feel of the provided concepts:
- a cinematic landing screen with a central glowing form
- a glassy input composer with assistant tools
- a polished conversation view with rich answer cards and diagrams
- a structure that can later accept a background image and a liquid glass component library

## Current Status
- Phase 1 is complete.
- The app scaffold builds successfully with Vite, React, and TypeScript.
- The provided background image is wired into the shared scene.
- The liquid glass library is integrated through an app-level wrapper component.
- Phase 2 is now focused on visual tuning and refinement.
- The frontend is now prepared for a FastAPI backend that accepts text and optional file uploads and returns text.

## Phase 1: Foundation
- Scaffold the app with Vite, React, and TypeScript.
- Establish global design tokens for color, blur, radii, spacing, and shadows.
- Build a reusable layout shell that supports both the landing view and the chat view.
- Add routing so the home and conversation screens can evolve independently.
- Verify the app installs and builds successfully.

## Phase 2: Visual System
- Replace the current CSS-only glass treatment with the liquid glass library once provided.
- Add the final background image as a shared scene layer with desktop and mobile positioning rules.
- Tune typography, scale, spacing, and glow behavior to better match the reference images.
- Replace placeholder icons with the final icon set.

## Phase 3: Interaction Model
- Turn the composer into a real controlled input.
- Add prompt card hover states, keyboard interactions, and motion.
- Implement message rendering primitives for user, assistant, and rich content blocks.
- Add screen transitions between landing and active chat states.

## Phase 4: Data and State
- Define the chat message model and thread state.
- Add a local mocked conversation flow first.
- Introduce API integration once the backend contract is ready.
- Separate presentational components from stateful containers.

## Phase 5: Polish
- Add accessibility passes for focus, contrast, reduced motion, and screen readers.
- Add responsive refinements to match tablet and mobile layouts cleanly.
- Optimize visual effects so blur and glow stay smooth on lower-end devices.
- Add tests for key rendering paths and app navigation.

## Current Scaffold Included
- `src/components/AppFrame.tsx`: top-level shell and navigation
- `src/components/Composer.tsx`: shared bottom composer block
- `src/components/GlassPanel.tsx`: app-level wrapper around the liquid glass effect
- `src/components/PromptCard.tsx`: reusable landing prompt cards
- `src/screens/HomeScreen.tsx`: landing page inspired by image 1
- `src/screens/ChatScreen.tsx`: conversation page inspired by image 2
- `src/styles.css`: initial tokenized styling and responsive behavior

## Active Next Step
- Refine the visual system to more closely match the reference images.
- Replace placeholder ASCII icons with the final icon set.
- Tune the glass parameters, spacing, glow, and typography across both screens.
- Decide whether the next milestone is a static polished prototype or a wired chat experience.

## Backend Prep Notes
- Frontend request wiring lives in `src/lib/api.ts`.
- The FastAPI stub lives in `backend/main.py`.
- The `/api/chat` endpoint currently returns text-only JSON and is the place to connect your real backend pipeline later.

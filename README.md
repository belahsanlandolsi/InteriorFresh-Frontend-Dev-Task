InteriorFresh — 3-Step Project Wizard

A minimal Next.js + Tailwind flow:
1) Project details (name, description)
2) Room selection (4 image cards) + optional size (S/M/L)
3) Summary + Submit (mock POST to /api/submit)

How to run
----------
1. Install dependencies:
   npm install

2. Start the dev server:
   npm run dev

3. Open http://localhost:3000 in your browser.

Assumptions
-----------
- Framework: Next.js (App Router) with Tailwind.
- TypeScript: used, but code is simple and typed lightly.
- Images: stored under public/images/ and referenced as /images/... .
- Validation: basic “required” checks for name & description; room type must be selected; size is optional.
- Submit: no real backend; we simulate a request:
  • API route at src/app/api/submit/route.ts echoes the payload.
  • Reviewers can see the response in DevTools Console or Network tab.

Project structure (key files)
-----------------------------
src/
  app/
    page.tsx
    layout.tsx
    api/submit/route.ts
  components/
    Wizard.tsx
    Step1.tsx
    Step2.tsx
    Step3.tsx
    Stepper.tsx
public/
  images/ (living.jpg, bedroom.jpg, kitchen.jpg, office.jpg)

Ideas for future improvements (optional)
----------------------------------------
- Persist progress (e.g., localStorage) so refresh doesn’t lose state.
- Use react-hook-form + zod for stronger validation and errors.
- Add transitions between steps and keyboard navigation.
- Support multiple rooms and reorder via drag-and-drop.
- Internationalization (EN/DE) and accessibility improvements.

Live
---------------
Deployed on Vercel: https://interiorfresh.vercel.app/

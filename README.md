# Emmaville Academy Website

Marketing site for Emmaville Academy built with Next.js (App Router), Tailwind CSS, Motion, and Lucide. Includes a contact form wired to Resend to deliver inquiries to the school’s email.

## Getting Started
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

## Environment Variables
Create a `.env.local` (or set in Vercel) using `.env.local.example`:
```
RESEND_API_KEY=your_resend_api_key
CONTACT_TO=emmavilleacademy@gmail.com
CONTACT_FROM="Emmaville Website <onboarding@resend.dev>"
```
`CONTACT_FROM` can be any verified sender/domain in Resend.

## Contact Form (Email)
- Frontend: `components/ContactSection.tsx` posts to `/api/contact` and shows loading/success/error states.
- Backend: `app/api/contact/route.ts` validates inputs and sends via Resend to `CONTACT_TO`.

## Assets
School photos live in `public/images` and are used across hero, about, programs, community, and admissions sections.

## Scripts
```
npm run dev     # local development
npm run build   # production build
npm run start   # start built app
npm run lint    # lint
```

## Deploying to Vercel
1) Push this repo to GitHub/GitLab.
2) Create a Vercel project and import the repo.
3) Add env vars (`RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`) in Project Settings → Environment Variables.
4) Deploy. All static assets are under `public/` and the contact API is serverless-ready.

## Notes
- Tech stack: Next.js 14 App Router, Tailwind, Motion, Lucide, Resend.
- UI components live in `components/` with `ui/` primitives (button, input, textarea). Styles in `app/globals.css`. Tailwind config in `tailwind.config.ts`.***

# Uday Mankar — Portfolio

A responsive, editorial-style portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. The visual direction takes cues from print journalism: confident serif headlines, restrained burgundy accents, clear section hierarchy, and generous whitespace.

## Features

- Responsive layout with desktop navigation and mobile menu
- Profile, selected projects, skills, education, certifications, and contact sections
- Resume download from `public/resume.pdf`
- Animated section entrances with reduced-motion CSS support
- Contact form backed by the `/api/contact` route
- Page metadata for search and social previews

## Tech stack

- Next.js 16 / React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide icons

## Run locally

Requirements: a supported Node.js version and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

## Contact form configuration

The contact form submits to `app/api/contact/route.ts`. Configure the SMTP environment variables required by that route in your local environment or deployment provider; never commit credentials to Git.

## Deploy

This project is configured as a Next.js app and can be deployed to a compatible Next.js hosting provider such as Vercel. Set the required contact-form environment variables in the hosting dashboard before relying on email delivery.

## Repository

[github.com/udaymankar/Portfolio-Website](https://github.com/udaymankar/Portfolio-Website)

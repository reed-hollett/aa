# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Atelier Armbruster — portfolio website for a NYC architecture and interior design firm. Next.js 16 App Router with React Three Fiber for 3D elements and Framer Motion for animations.

## Commands

- `npm run dev` — start dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint (next config + TypeScript)

## Architecture

Single-page app with all components under `src/components/`, composed in `src/app/page.tsx`. Every component is client-side (`"use client"`) due to animation/3D dependencies.

**3D**: `Logo3D.tsx` uses `@react-three/fiber` + `@react-three/drei` to render an interactive AA monogram from box geometries. It must be dynamically imported with `ssr: false` — Three.js Canvas cannot render server-side.

**Animations**: Framer Motion handles entrance animations (staggered on load) and scroll-triggered reveals (`whileInView`).

**Styling**: Tailwind CSS 4 with inline theme variables defined in `globals.css`. Custom `.font-logo` class for heading typography. Fluid type sizing via `clamp()`.

## Key Conventions

- Images served from `public/images/` as standard `<img>` tags (not Next.js `<Image>` with `fill`)
- Design assets sourced from Figma via API (token in `.env.local` as `FIGMA_ACCESS_TOKEN`)
- TypeScript strict mode, path alias `@/*` → `./src/*`
- Color palette: black/white minimal — foreground `#0a0a0a`, muted `#ababab`
- Body font: Helvetica Neue

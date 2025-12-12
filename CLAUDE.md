# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Nuxt.js 4** application using Vue 3 and TypeScript, configured for deployment on Cloudflare Pages via NuxtHub. The project is in its initial state with minimal boilerplate code.

## Tech Stack

- **Nuxt.js 4.2.2** - Vue.js meta-framework
- **Vue 3.5.25** - Frontend framework  
- **TypeScript** - Type safety throughout
- **NuxtHub** - Deployment platform integration
- **Cloudflare Pages** - Edge deployment target

## Development Commands

```bash
npm run dev        # Start development server (localhost:3000)
npm run build      # Build for production
npm run generate   # Generate static site
npm run preview    # Preview production build locally
```

## Project Architecture

### Current Structure
- `app/` - Main application source (using Nuxt 3+ pattern)
- `app/app.vue` - Root component with welcome page
- `nuxt.config.ts` - Nuxt configuration with Cloudflare preset
- `public/` - Static assets (favicon, robots.txt)

### Expected Growth Pattern
As development progresses, follow standard Nuxt conventions:
- `pages/` - File-based routing
- `components/` - Vue components  
- `layouts/` - Page layouts
- `middleware/` - Route middleware
- `composables/` - Reusable composition functions
- `plugins/` - Vue plugins
- `server/api/` - Server-side API routes

## Configuration Notes

- **Environment**: NuxtHub project key configured as `competition-ccap`
- **Deployment**: Pre-configured for Cloudflare Pages edge deployment
- **TypeScript**: Full project-wide TypeScript support enabled
- **Development**: Hot reload and devtools active in dev mode

## Development Workflow

1. Use `npm run dev` for local development with hot reload
2. TypeScript errors will be caught during development
3. Build with `npm run build` before deployment
4. The project is ready for NuxtHub deployment features when needed
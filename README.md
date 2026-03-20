**Portfolio — Morgan Then**

Full‑stack portfolio website built with Next.js and TypeScript to showcase live projects, technical skills and background. Designed to showcase clear project writeups and live links.

**Live Demo:** https://morganthen.vercel.app

**Repo:** https://github.com/morganthen/portfolio

**Quick Pitch**

- **Role:** Full‑Stack Developer (junior / internship-ready)
- **Location:** Perth, WA
- **Highlights:** Three live full‑stack projects, production deployments, deliberate design choices (CSS Modules, next/font, App Router), and experience integrating backend services (Supabase) and server-side logic.

**Tech Stack**

- **Frontend:** Next.js (App Router), React, TypeScript
- **Styling:** CSS Modules, design tokens via CSS custom properties
- **Backend / Data:** Supabase, PostgreSQL (used in other projects linked from this repo)
- **Deployment & Tooling:** Vercel (CI/CD), Git/GitHub, ESLint, TypeScript

**Key Features**

- Clear hero and contact CTA for recruiters.
- Project case studies with live links, screenshots and technical bullets.
- `useReveal` IntersectionObserver hook for entrance animations.
- Accessible nav and semantic sections (`#skills`, `#projects`, `#about`, `#contact`).
- Open Graph metadata and zero layout-shift fonts via `next/font`.

**Notable Files**

- [src/app/page.tsx](src/app/page.tsx) — main page composition (imports all sections).
- [src/app/layout.tsx](src/app/layout.tsx) — metadata and font setup.
- [src/components/Projects.tsx](src/components/Projects.tsx) — project case studies and links.
- [src/components/Skills.tsx](src/components/Skills.tsx) — technical skills grid.
- [src/components/About.tsx](src/components/About.tsx) — background and accolades.
- [src/components/Contact.tsx](src/components/Contact.tsx) — contact links and footer text.
- [src/hooks/useReveal.ts](src/hooks/useReveal.ts) — small utility hook used across sections.

**Getting Started (Local)**

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000` and review the site.

**Build & Deploy**

- Build locally: `npm run build` then `npm run start` to preview production build.
- This project is optimized for deployment on Vercel (automatic builds from GitHub).

**What I built and what I learned**

- This site was built to showcase three live projects and to practise thoughtful component architecture, accessibility and performance.
- Biggest learn: Open Graph metadata. I found the problem the hard way when I shared the site with a friend the preview was blank/incorrect. I fixed this by adding explicit Open Graph fields and a properly sized image in `src/app/layout.tsx`, then verified previews with social preview tools.
- Styling: I intentionally rebuilt the site using CSS Modules after working with Tailwind CSS. That shift taught me a lot about the cascade and scoping. It also made me appreciate Tailwind's speed and ergonomics — I now choose the tool based on the project goal (learning vs rapid delivery).
- Technical highlights I implemented: zero layout-shift fonts via `next/font`, a tiny `useReveal` IntersectionObserver hook for entrance animations, and deliberate App Router structure to keep pages simple and composable.
- Tradeoffs I made: I chose CSS Modules here for deeper CSS fundamentals; for future production projects where speed and consistency matter, I may favour Tailwind.

**Contact**

- Email: morganthen@me.com
- GitHub: https://github.com/morganthen
- LinkedIn: https://linkedin.com/in/morganthen

---

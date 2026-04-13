"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    number: "01 / 03",
    name: "Remit",
    tagline: "Invoicing web app",
    url: "https://remit-next.vercel.app",
    urlLabel: "remit-next.vercel.app",
    githubUrl: "https://github.com/morganthen/remit-next",
    screenshot: "/screenshots/remit-v3.png",
    screenshotAlt: "Remit — simple invoicing solution",
    imagePosition: "top",
    bullets: [
      "Full-stack invoicing app built with Next.js, TypeScript, Supabase (auth + PostgreSQL), shadcn/ui and Tailwind. Client and invoice management with validated forms powered by Zod and React Hook Form.",
      "Each invoice carries a status — draft, sent, unpaid, paid, overdue and void, which conditionally renders an action menu, keeping the UI practical about what actions actually make sense.",
      "Shareable via a unique public URL, a pre-filled mailto action, and a browser-native Save to PDF flow. Chose void-over-delete after researching how professional invoicing tools handle financial records — invoices are immutable by design for better tax auditing trails.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "shadcn/ui",
      "Zod",
      "Vercel",
    ],
  },
  {
    number: "02 / 03",
    name: "decisiv",
    tagline: "AI-prioritised task manager",
    url: "https://decisiv-delta.vercel.app",
    urlLabel: "decisiv-delta.vercel.app",
    githubUrl: "https://github.com/morganthen/decisiv",
    screenshot: "/screenshots/decisiv-v2.png",
    screenshotAlt: "Decisiv — AI prioritisation view",
    imagePosition: "top",
    bullets: [
      "Next.js, TypeScript, Supabase, shadcn/ui with dark/light mode. Integrates Meta's Llama 4 Maverick via a third-party LLM API — calls run server-side through Server Actions to keep credentials off the client. Prompt-engineered the model to return structured JSON scoring each task; parsing and rendering that reliably was the core technical challenge.",
      "Built-in Pomodoro timer using useEffect and setInterval. Learned first-hand why the cleanup function and dependency array matter when managing a ticking interval without stale closures or memory leaks. Deep work duration is tracked and persisted per session, with the data layer already in place for a future focus stats section.",
      "Users add personal context in a settings page so the model ranks tasks relative to their actual situation. Includes full account deletion and auth lifecycle management via Supabase.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Llama 4",
      "Server Actions",
      "Supabase",
      "UI",
      "Pomodoro",
      "Prompt Engineering",
    ],
  },
  {
    number: "03 / 03",
    name: "Droptop",
    tagline: "Bookmark manager",
    url: "https://droptop-next.vercel.app",
    urlLabel: "droptop-next.vercel.app",
    githubUrl: "https://github.com/morganthen/droptop-next",
    screenshot: "/screenshots/droptop.png", // update filename to match yours
    screenshotAlt: "Droptop — bookmark manager",
    imagePosition: "top",
    bullets: [
      "Built twice on purpose. V1 used Node.js and Express with MongoDB and a separate Vite frontend — the full split-repo setup, CORS config and all. V2 is the same app rebuilt in Next.js with PostgreSQL and Prisma. Doing it the long way first meant Next.js API routes stopped feeling like magic and started making sense as a layer over the same request/response pattern.",
      "Automatically fetches page title, description and cover image via Open Graph scraping on URL blur — the same mechanic Pinterest uses when you save a pin. Database is PostgreSQL managed directly through Prisma 7, which has significant breaking changes from v6: the connection URL moved to a separate prisma.config.ts file and a new driver adapter is required. Most online tutorials were written for v6, so the official docs did the heavy lifting.",
      "Auth is JWT and bcrypt, rolled by hand. Having implemented it in Express first, doing it again in Next.js was about reinforcing the mental model rather than learning something new. The main difference is exporting named GET/POST/DELETE functions that return Response objects instead of calling res.send().",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Open Graph",
      "Tailwind",
    ],
  },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className={styles.section} ref={ref}>
      <div className={`${styles.label} reveal`}>Projects</div>
      <div className={styles.stack}>
        {PROJECTS.map((project) => (
          <div key={project.name} className={`${styles.row} reveal`}>
            {/* ── Screenshot: top on mobile, right col on desktop ── */}
            {project.screenshot ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.screenshotCol}
                tabIndex={-1}
                aria-hidden="true"
              >
                <div className={styles.screenshotWrap}>
                  <Image
                    src={project.screenshot}
                    alt={project.screenshotAlt ?? ""}
                    fill
                    className={styles.screenshot}
                    // style={{ objectPosition: project.imagePosition }}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className={styles.overlay}>
                    <span className={styles.overlayCta}>View live ↗</span>
                  </div>
                </div>
              </a>
            ) : (
              <div className={`${styles.screenshotCol} ${styles.placeholder}`}>
                <span className={styles.placeholderLabel}>
                  Screenshot coming soon
                </span>
              </div>
            )}

            {/* ── Text ── */}
            <div className={styles.textCol}>
              <div className={styles.textTop}>
                <div className={styles.number}>{project.number}</div>
                <h2 className={styles.name}>{project.name}</h2>
                <p className={styles.tagline}>{project.tagline}</p>
              </div>

              <ul className={styles.bullets}>
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>

              <div className={styles.textBottom}>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                {/* <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {project.urlLabel}
                </a> */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  GITHUB REPO
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

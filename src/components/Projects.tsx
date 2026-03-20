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
      "Built-in Pomodoro timer using useEffect and setInterval — learned first-hand why the cleanup function and dependency array matter when managing a ticking interval without stale closures or memory leaks. Deep work duration is tracked and persisted per session, with the data layer already in place for a future focus stats section.",
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
    name: "Portfolio Website",
    tagline: "This site",
    url: "https://morganthen.vercel.app",
    githubUrl: "https://github.com/morganthen/portfolio",
    urlLabel: "morganthen-portfolio.vercel.app",
    screenshot: "/screenshots/portfolio-v3.png",
    screenshotAlt: "Portfolio website",
    imagePosition: "top",
    bullets: [
      "Designed and built in vanilla HTML/CSS first to nail the layout and typography, then deliberately re-implemented in Next.js and TypeScript — treating the conversion itself as a learning exercise in component architecture and the App Router.",
      "Styled with CSS Modules and CSS custom properties throughout. Made the conscious choice to work without a utility framework to deepen understanding of the cascade, scoping, and design tokens at the CSS level.",
      "Deployed on Vercel with automatic CI/CD via GitHub; includes next/font for zero-layout-shift font loading and Open Graph metadata for clean link previews when shared.",
    ],
    tags: ["Next.js", "TypeScript", "CSS Modules", "next/font", "Vercel"],
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

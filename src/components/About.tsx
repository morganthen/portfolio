"use client";

import { useReveal } from "@/hooks/useReveal";
import styles from "./About.module.css";

const ACCOLADES = [
  {
    icon: "◆",
    title: "Bachelor of Commerce — UWA",
    body: "Triple major: Managerial Accounting, Finance & Business Economics",
  },
  {
    icon: "◆",
    title: "freeCodeCamp",
    body: "Responsive Web Design + JS Algorithms & Data Structures — 2025",
  },
  {
    icon: "◆",
    title: "App Brewery",
    body: "Full-Stack Bootcamp — 2025",
  },
  {
    icon: "◆",
    title: "2 x ARIA Award",
    body: "Producer on Daniel Johns (Silverchair) 'FutureNever' album. Highest selling Australian album of 2022",
  },
  {
    icon: "◆",
    title: "3× Gold-Certified Records",
    body: "Australian Recording Industry Association",
  },
  {
    icon: "◆",
    title: "3× Western Australia Music Award",
    body: "Best Independent Album",
  },
  {
    icon: "◆",
    title: "2× National Live Music Award",
    body: "AIR Awards 2018",
  },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className={styles.section} ref={ref}>
      <div className={`${styles.label} reveal`}>About</div>
      <div className={styles.grid}>
        <div>
          <h2 className={`${styles.headline} reveal`}>
            Built to <em>figure it out</em>
          </h2>
          <p className={`${styles.text} reveal reveal-delay-1`}>
            I came to development after a decade music production, audio
            engineering and touring internationally. Over the years, I&apos;ve
            learned how to manage complex projects, meet tight deadlines, and
            communicate clearly with non-technical stakeholders.
          </p>
          <p className={`${styles.text} reveal reveal-delay-2`}>
            I am fluent in English and Mandarin and I hold a triple major
            Bachelor of Commerce from the University of Western Australia in
            Managerial Accounting, Finance and Business Economics. I approach
            code the same way I approached music and finance: understand the
            system, know what it&apos;s trying to do, then build something that
            actually works for the people using it.
          </p>
          <p className={`${styles.text} reveal reveal-delay-3`}>
            I&apos;ve been building seriously for just over a year and have
            three full-stack TypeScript projects live in production. I&apos;m
            looking for a team where I can keep growing fast.
          </p>
        </div>

        <div className={`${styles.right} reveal reveal-delay-2`}>
          {ACCOLADES.map((a) => (
            <div key={a.title} className={styles.accoladeRow}>
              <div className={styles.icon}>{a.icon}</div>
              <div className={styles.accoladeText}>
                <strong>{a.title}</strong>
                {a.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useReveal } from "@/hooks/useReveal";
import styles from "./Skills.module.css";

const SKILLS = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5 · CSS3"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js (App Router)",
      "Server Actions",
      "Tailwind CSS · shadcn/ui",
    ],
  },
  {
    category: "Backend & Data",
    items: ["Supabase", "PostgreSQL · Raw SQL", "Supabase Auth"],
  },
  {
    category: "Tooling & Deployment",
    items: [
      "Git · GitHub",
      "Vercel (CI/CD)",
      "Zod · React Hook Form",
      "VS Code",
    ],
  },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className={styles.section} ref={ref}>
      <div className={`${styles.label} reveal`}>Technical Skills</div>
      <div className={styles.grid}>
        {SKILLS.map((skill, i) => (
          <div
            key={skill.category}
            className={`${styles.cell} reveal reveal-delay-${(i % 3) + 1}`}
          >
            <div className={styles.category}>{skill.category}</div>
            <div className={styles.list}>
              {skill.items.map((item) => (
                <span key={item}>
                  {item}
                  <br />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

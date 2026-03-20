import styles from "./Ticker.module.css";

const ITEMS = [
  "TypeScript",
  "Next.js",
  "React",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "shadcn/ui",
  "Vercel",
  "AI Integration",
  "Git / GitHub",
  "Zod",
  "React Hook Form",
];

export default function Ticker() {
  // Duplicate items so the seamless loop works
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <span key={i}>
            {item}
            <span className={styles.sep}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.left}>
        <span className={styles.eyebrow}>Full-Stack Developer · Perth, WA</span>
        <h1 className={styles.name}>
          Morgan
          <br />
          <em>Then</em>
        </h1>
      </div>

      <div className={styles.right}>
        <p className={styles.bio}>
          I came to development through an unconventional path and I think that
          shows in how I approach problems. Commerce graduate, ARIA-awarded
          music producer, and now a full-stack developer with three live
          projects and a genuine love for building things that work.
        </p>
        <div className={styles.ctaRow}>
          <Link href="#projects" className={styles.btnPrimary}>
            See my work
          </Link>
          <Link href="#contact" className={styles.btnGhost}>
            Get in touch
          </Link>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}

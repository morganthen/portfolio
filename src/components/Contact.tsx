"use client";

import { useReveal } from "@/hooks/useReveal";
import styles from "./Contact.module.css";

const LINKS = [
  {
    label: "Email",
    value: "morganthen@me.com",
    href: "mailto:morganthen@me.com",
  },
  {
    label: "GitHub",
    value: "github.com/morganthen",
    href: "https://github.com/morganthen",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/morganthen",
    href: "https://linkedin.com/in/morganthen",
  },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.label} reveal`}>Contact</div>
        <h2 className={`${styles.headline} reveal`}>
          Let&apos;s build
          <br />
          something <em>good</em>
        </h2>
        <p className={`${styles.sub} reveal reveal-delay-1`}>
          I&apos;m open to junior positions and internships with teams who build
          things they&apos;re proud of. If that sounds like you, I&apos;d love
          to chat.
        </p>
        <div className={`${styles.links} reveal reveal-delay-2`}>
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className={styles.linkRow}
            >
              <span className={styles.linkLabel}>{link.label}</span>
              <span className={styles.linkValue}>{link.value}</span>
              <span className={styles.arrow}>↗</span>
            </a>
          ))}
        </div>
        <div className={`${styles.footer} reveal reveal-delay-3`}>
          <span>Morgan Then · Perth, WA · 2025</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono, Syne } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Morgan Then — Full-Stack Developer",
  description:
    "Full-stack developer based in Perth, WA. TypeScript, Next.js, React, Supabase. Three live projects and a genuine love for building things that work.",
  openGraph: {
    images: [
      {
        url: "/screenshots/portfolio-v3.png",
        width: 1200,
        height: 630,
        alt: "Screenshot of Morgan Then's portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${dmMono.variable} ${syne.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

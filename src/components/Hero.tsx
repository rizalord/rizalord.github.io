"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";
import { Magnetic } from "@/components/ui/Magnetic";
import { profile } from "@/data/portfolio";
import { heroLine, stagger } from "@/lib/motion";

/* ─── Static hero content ──────────────────────────────── */

const NAME = "Rizal";
const ROLE = "Full Stack Developer";
const TAGLINE = "I craft digital products that ship fast and scale without the headache.";
const AVAILABILITY = "Available for work";
const SUBTITLE = "Building products that matter since 2019.";

const stats = [
  { value: "4+", label: "Years Building" },
  { value: "20+", label: "Projects Shipped" },
  { value: "15+", label: "Certifications" },
] as const;

/* ─── Component ────────────────────────────────────────── */

export function Hero() {
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 800], ["0%", "30%"]);
  const contentY = useTransform(scrollY, [0, 800], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollY, [0, 560], [1, 0]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Background layers */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <AnimatedGradient intensity="medium" />
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="section-shell container-px"
      >
        <motion.div
          variants={stagger(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-7"
        >
          {/* Availability pill */}
          <motion.span
            variants={heroLine}
            className="inline-flex items-center gap-2 rounded-full border-hairline bg-[var(--color-surface)]/70 px-3.5 py-1.5 text-xs font-medium text-[var(--color-muted)] backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {AVAILABILITY}
          </motion.span>

          {/* Headline */}
          <div className="flex flex-col gap-3">
            <motion.p
              variants={heroLine}
              className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]"
            >
              <Sparkles size={15} /> {ROLE}
            </motion.p>

            <motion.h1
              variants={heroLine}
              className="text-balance text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">{NAME}</span>
              <span className="text-gradient">.</span>
            </motion.h1>
            <motion.p
              variants={heroLine}
              className="text-balance text-lg font-medium text-[var(--color-muted)] sm:text-xl"
            >
              {SUBTITLE}
            </motion.p>
          </div>

          {/* Tagline */}
          <motion.p
            variants={heroLine}
            className="max-w-xl text-balance text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
          >
            {TAGLINE}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={heroLine} className="flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-[var(--color-accent-fg)] shadow-soft transition-transform hover:scale-[1.03]"
              >
                View Projects
                <ArrowDown size={16} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-hairline bg-[var(--color-surface)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
              >
                Download CV
                <Download size={16} />
              </a>
            </Magnetic>
          </motion.div>

          {/* Stats */}
          <motion.dl
            variants={heroLine}
            className="mt-6 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-[var(--color-line)] pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-[var(--color-muted)] sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[var(--color-muted)]"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-[var(--color-line)] p-1">
            <span className="h-1.5 w-1 rounded-full bg-[var(--color-muted)]" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { fadeUp, inView } from "@/lib/motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]"
        >
          <span className="h-px w-6 bg-[var(--color-accent)]" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "max-w-2xl text-balance text-base leading-relaxed text-[var(--color-muted)] sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

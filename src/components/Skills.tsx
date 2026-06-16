"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, inView, stagger } from "@/lib/motion";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative border-y border-[var(--color-line)] bg-[var(--color-surface)]/40 py-28 sm:py-36"
    >
      <div className="section-shell container-px">
        <SectionHeading
          eyebrow="Skills"
          title="The tools I reach for every day"
          description="From frontend to infrastructure, here's the stack I rely on most to ship products that scale."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.name}
              variants={fadeUp}
              className="rounded-3xl border-hairline bg-[var(--color-surface)] p-7 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold tracking-tight">
                  {group.name}
                </h3>
                <span className="text-xs text-[var(--color-muted)]">
                  {group.skills.length} tools
                </span>
              </div>
              <ul className="mt-5 grid grid-cols-2 gap-3">
                {group.skills.map((skill, i) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.04,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex items-center gap-2.5 rounded-xl border-hairline bg-[var(--color-bg)] px-3 py-2.5 transition-colors hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={22}
                      height={22}
                      className="h-[22px] w-[22px] shrink-0 opacity-60 transition-opacity group-hover:opacity-100 dark:invert"
                    />
                    <span className="truncate text-sm">{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

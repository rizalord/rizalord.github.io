"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";
import {
  employments,
  educations,
  formatDate,
} from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, inView, stagger } from "@/lib/motion";

function isOngoing(endDate: string): boolean {
  return new Date(endDate) > new Date();
}

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-y border-[var(--color-line)] bg-[var(--color-surface)]/40 py-28 sm:py-36"
    >
      <div className="section-shell container-px">
        <SectionHeading
          eyebrow="Experience"
          title="My professional journey"
          description="Each role taught me the balance between speed, quality, and real-world impact."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* Work experience */}
          <motion.ol
            variants={stagger(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="relative pl-10 sm:pl-12"
          >
            <span
              aria-hidden
              className="absolute left-[9px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-line)] to-transparent sm:left-[11px]"
            />
            {employments.map((exp) => {
              const ongoing = isOngoing(exp.endDate);
              return (
                <motion.li
                  key={`${exp.companyShort}-${exp.startDate}`}
                  variants={fadeUp}
                  className="relative pb-10 last:pb-0"
                >
                  <span className="absolute -left-10 top-1 grid h-5 w-5 place-items-center overflow-hidden rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-surface)] shadow-sm sm:-left-12 sm:h-6 sm:w-6">
                    <Image
                      src={exp.logo}
                      alt={exp.companyShort}
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain dark:invert"
                    />
                  </span>
                  <div className="rounded-2xl border-hairline bg-[var(--color-surface)] p-6 shadow-soft transition-colors hover:border-[var(--color-accent)]/40">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-base font-semibold tracking-tight">
                        {exp.positionLong}
                      </h3>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-[var(--color-accent)]">
                        <Briefcase size={11} className="opacity-60" />
                        {formatDate(exp.startDate)} —{" "}
                        {ongoing ? (
                          <span className="inline-flex items-center gap-1">
                            Present
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </span>
                          </span>
                        ) : (
                          formatDate(exp.endDate)
                        )}
                      </span>
                    </div>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
                    >
                      {exp.companyLong}
                    </a>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                      {exp.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>

          {/* Education */}
          <motion.ol
            variants={stagger(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="relative pl-10 sm:pl-12"
          >
            <span
              aria-hidden
              className="absolute left-[9px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-line)] to-transparent sm:left-[11px]"
            />
            {educations.map((edu) => (
              <motion.li
                key={`${edu.institution}-${edu.startDate}`}
                variants={fadeUp}
                className="relative pb-10 last:pb-0"
              >
                <span className="absolute -left-10 top-1 grid h-5 w-5 place-items-center overflow-hidden rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-surface)] shadow-sm sm:-left-12 sm:h-6 sm:w-6">
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain dark:invert"
                  />
                </span>
                <div className="rounded-2xl border-hairline bg-[var(--color-surface)] p-6 shadow-soft transition-colors hover:border-[var(--color-accent)]/40">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-base font-semibold tracking-tight">
                      {edu.degree}
                    </h3>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-[var(--color-accent)]">
                      <GraduationCap size={11} className="opacity-60" />
                      {formatDate(edu.startDate)} —{" "}
                      {formatDate(edu.endDate)}
                    </span>
                  </div>
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {edu.institution}
                  </a>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                    {edu.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

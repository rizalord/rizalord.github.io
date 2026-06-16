"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { projects, portfolioMeta } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { Magnetic } from "@/components/ui/Magnetic";
import { fadeUp, inView, stagger } from "@/lib/motion";

const INITIAL_COUNT = 6;

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="section-shell container-px">
        <SectionHeading
          eyebrow="Projects"
          title={`Check Out My Latest ${portfolioMeta.titleBold}`}
          description={portfolioMeta.description}
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less */}
        {projects.length > INITIAL_COUNT && (
          <div className="mt-10 flex justify-center">
            <Magnetic>
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border-hairline bg-[var(--color-surface)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] shadow-soft transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {showAll
                  ? "Show Less"
                  : `Show All ${projects.length} Projects`}
              </button>
            </Magnetic>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.div
      variants={fadeUp}
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group h-full"
    >
      <TiltCard
        max={5}
        className="flex h-full flex-col overflow-hidden rounded-3xl border-hairline bg-[var(--color-surface)] shadow-soft"
      >
        {/* Thumbnail — real screenshot */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg)]">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* category badge */}
          <div className="absolute left-3 top-3">
            <span className="inline-flex items-center rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-white backdrop-blur">
              {project.category}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold tracking-tight leading-snug">
              {project.name}
            </h3>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} live`}
                className="shrink-0 text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
            {project.description}
          </p>

          {project.technologies.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-[var(--color-bg)] px-2 py-1 font-mono text-[11px] text-[var(--color-muted)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </TiltCard>
    </motion.div>
  );
}

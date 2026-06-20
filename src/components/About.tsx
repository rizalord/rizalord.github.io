"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { profile, services } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp, inView, stagger } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="section-shell container-px">
        <SectionHeading
          eyebrow="About"
          title="A developer who sweats the details and the user experience"
          description={profile.description}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Portrait — real profile image */}
          <Reveal className="lg:col-span-2">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border-hairline bg-[var(--color-surface)] shadow-soft">
              <Image
                src="/assets/img/me.webp"
                alt={profile.name}
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/40 to-transparent p-5 text-white">
                <MapPin size={15} />
                <span className="text-sm font-medium">{profile.location}</span>
              </div>
            </div>
          </Reveal>

          {/* Bio points + Services */}
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="flex flex-col gap-5 lg:col-span-3"
          >
            {aboutPoints.map((point, i) => (
              <motion.div
                key={point.title}
                variants={fadeUp}
                className="group rounded-2xl border-hairline bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]/40"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--color-accent)]/10 text-sm font-semibold text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
                      {point.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Services — merged into About */}
            <motion.div variants={fadeUp} className="pt-2">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Services I Offer
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {services.map((svc) => (
                  <motion.div
                    key={svc.name}
                    variants={fadeUp}
                    className="group flex items-center gap-3 rounded-2xl border-hairline bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-accent)]/40"
                  >
                    <Image
                      src={svc.icon}
                      alt={svc.name}
                      width={32}
                      height={32}
                      className="shrink-0 opacity-70 transition-opacity group-hover:opacity-100"
                    />
                    <span className="text-sm font-medium">{svc.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const aboutPoints = [
  {
    title: "End-to-end, not just one side",
    body: "I'm comfortable designing databases, building APIs, and crafting the interface on top. There's no gap between logic and presentation in my work.",
  },
  {
    title: "Performance & visual detail",
    body: "Core Web Vitals, smooth animations, and precise typography are part of the job — not optional extras. I obsess over how things feel.",
  },
  {
    title: "Microservices-minded",
    body: "I build backends with scalability in mind — gRPC, Kafka, Redis, and Kubernetes — so products stay reliable as they grow.",
  },
];

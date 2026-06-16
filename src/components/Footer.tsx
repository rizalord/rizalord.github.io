"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { navLinks, profile, socials } from "@/data/portfolio";
import { Magnetic } from "@/components/ui/Magnetic";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Reveal } from "@/components/ui/Reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-line)] py-14">
      <div className="section-shell container-px">
        <div className="flex flex-col items-center gap-8 text-center">
          <Reveal>
            <a
              href="#home"
              className="group inline-flex items-center gap-2 text-lg font-semibold tracking-tight"
            >
              <span className="relative h-8 w-8 overflow-hidden rounded-lg transition-transform group-hover:rotate-6">
                <Image
                  src="/assets/img/logo.png"
                  alt={`${profile.name} logo`}
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </span>
              {profile.name}
            </a>
          </Reveal>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap justify-center gap-2">
            {socials.map((s) => (
              <Magnetic key={s.label} strength={10}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border-hairline bg-[var(--color-surface)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <SocialIcon name={s.icon} className="h-[17px] w-[17px]" />
                </a>
              </Magnetic>
            ))}
          </div>

          <Magnetic strength={12}>
            <a
              href="#home"
              aria-label="Back to top"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-[var(--color-surface)] px-4 py-2 text-xs font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              <ArrowUp size={14} /> Back to top
            </a>
          </Magnetic>

          <p className="text-xs text-[var(--color-muted)]">
            © {year} {profile.name}. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Magnetic } from "@/components/ui/Magnetic";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="section-shell container-px">
        <nav
          className={cn(
            "mt-3 flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300",
            scrolled
              ? "glass border-hairline shadow-soft"
              : "border border-transparent"
          )}
        >
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="relative h-8 w-8 overflow-hidden rounded-lg transition-transform group-hover:rotate-6">
              <Image
                src="/assets/img/logo.png"
                alt={`${profile.name} logo`}
                fill
                sizes="32px"
                className="object-contain"
                priority
              />
            </span>
            <span className="hidden sm:inline">{profile.firstName}</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative rounded-full px-3.5 py-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Magnetic className="hidden sm:inline-block">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-accent-fg)] transition-transform hover:scale-[1.03]"
              >
                Get in Touch
              </a>
            </Magnetic>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border-hairline bg-[var(--color-surface)] md:hidden"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="glass mt-2 flex flex-col gap-1 rounded-2xl border-hairline p-3 shadow-soft md:hidden"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-[var(--color-ink)] transition-colors hover:bg-[var(--color-bg)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

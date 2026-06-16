"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, inView } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** delay in seconds before the reveal starts */
  delay?: number;
  /** choose a preset variant */
  variant?: Variants;
  /** render as a different element via motion's `as` (default div) */
  as?: keyof typeof motion;
};

/**
 * Scroll-reveal wrapper. Fades + slides its children into view once.
 * Use generously across sections for the "cinematic" staggered feel.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = fadeUp,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;

  const customVariant: Variants = {
    hidden: variant.hidden,
    visible: {
      ...(variant.visible as object),
      transition: {
        ...((variant.visible as { transition?: object }).transition ?? {}),
        delay,
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={customVariant}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
    >
      {children}
    </MotionTag>
  );
}

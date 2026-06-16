import type { Variants } from "motion/react";

/** Cubic bezier easing tuple — matches --ease-out-expo in globals.css */
export const easeExpo = [0.16, 1, 0.3, 1] as const;

/** Fade + rise on enter. Use with `whileInView` / `animate`. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeExpo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: easeExpo } },
};

/** Scale-up reveal for cards / images. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeExpo },
  },
};

/** Container that staggers its children (each child uses `fadeUp`). */
export const stagger = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Hero intro variants — slightly larger travel distance. */
export const heroLine: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeExpo },
  },
};

/** Default viewport config for whileInView reveals. */
export const inView = { once: true, margin: "-80px 0px -80px 0px" } as const;

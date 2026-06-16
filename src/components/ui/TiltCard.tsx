"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** max rotation in degrees */
  max?: number;
  /** optional glare highlight following the cursor */
  glare?: boolean;
};

/**
 * 3D tilt card that follows the cursor. Used for project cards.
 * Physics-based spring for a smooth, premium feel.
 */
export function TiltCard({
  children,
  className,
  max = 8,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // raw pointer position (-0.5 .. 0.5)
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  // spring-smoothed for buttery motion
  const sx = useSpring(px, { stiffness: 150, damping: 18, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 150, damping: 18, mass: 0.4 });

  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);

  // glare position
  const glareX = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);
  const glareBg = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(255,255,255,0.18), transparent 45%)`;

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={cn("relative [transform-style:preserve-3d]", className)}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          style={{ background: glareBg }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 [transform:translateZ(40px)] group-hover:opacity-100"
        />
      )}
    </motion.div>
  );
}

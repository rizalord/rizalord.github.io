"use client";

import { cn } from "@/lib/utils";

type AnimatedGradientProps = {
  className?: string;
  /** opacity of the blobs */
  intensity?: "subtle" | "medium" | "strong";
};

/**
 * Soft animated "aurora" gradient backdrop.
 * Pure CSS animation (see --animate-aurora) — cheap and GPU-friendly.
 */
export function AnimatedGradient({
  className,
  intensity = "medium",
}: AnimatedGradientProps) {
  const opacity = {
    subtle: "opacity-30",
    medium: "opacity-50",
    strong: "opacity-70",
  }[intensity];

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "absolute -left-1/4 top-[-20%] h-[60vh] w-[60vh] rounded-full blur-[100px] animate-aurora",
          opacity
        )}
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #6366f1, transparent 60%)",
        }}
      />
      <div
        className={cn(
          "absolute right-[-15%] top-[10%] h-[55vh] w-[55vh] rounded-full blur-[100px] animate-aurora",
          opacity
        )}
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #22d3ee, transparent 60%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className={cn(
          "absolute bottom-[-25%] left-1/3 h-[55vh] w-[55vh] rounded-full blur-[100px] animate-aurora",
          opacity
        )}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #a78bfa, transparent 60%)",
          animationDelay: "-12s",
        }}
      />
    </div>
  );
}

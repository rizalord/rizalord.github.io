import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely (dedupes conflicting utilities). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ============================================================
   DATA LAYER — Thin import layer over your JSON files.
   All components import from here. Edit the JSON files to
   change content; this file just re-exports + adds types.
   ============================================================ */

import introData from "./intro.json";
import aboutData from "./about.json";
import skillData from "./skill.json";
import employmentData from "./employment.json";
import educationData from "./education.json";
import portfolioData from "./portfolio.json";
import serviceData from "./service.json";

// ─── Helpers ────────────────────────────────────────────────

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** "2023-08-01" → "Aug 2023" */
export function formatDate(dateStr: string): string {
  const [y, m] = dateStr.split("-");
  return `${MONTHS[Number(m) - 1]} ${y}`;
}

// ─── Profile (from intro.json + about.json) ────────────────

export const profile = {
  name: introData.name,
  firstName: "Rizal",
  role: "Full Stack Developer",
  description: aboutData.description,
  location: "Malang, Indonesia",
  email: aboutData.email,
  telegram: aboutData.telegram,
  availability: introData.available ? "Available for hire" : "Not available",
  resumeUrl: "https://drive.google.com/uc?export=download&id=1JhK8zY6A-F4OXfTyA1xFcjxTK0Ul15rK",
  stats: introData.counts.map((c) => ({
    label: c.label as string,
    value: c.count as string,
  })),
} as const;

// ─── Social links (from about.json) ───────────────────────

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "twitter" | "facebook" | "instagram";
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: aboutData.social.github, icon: "github" },
  { label: "LinkedIn", href: aboutData.social.linkedin, icon: "linkedin" },
  { label: "Facebook", href: aboutData.social.facebook, icon: "facebook" },
  { label: "Instagram", href: aboutData.social.instagram, icon: "instagram" },
  { label: "Email", href: `mailto:${aboutData.email}`, icon: "mail" },
];

// ─── Nav links (from nav.json) ─────────────────────────────

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

// ─── Intro (from intro.json) ──────────────────────────────

export type IntroSegment = {
  type: "normal" | "bold";
  text: string;
};

export const intro = {
  prefix: introData.prefix,
  name: introData.name,
  description: introData.description as unknown as IntroSegment[],
  available: introData.available,
};

// ─── Services (from service.json) ─────────────────────────

export type Service = {
  name: string;
  icon: string;
};

export const services: Service[] = serviceData.services;

// ─── Skills (from skill.json) ────────────────────────────

export type Skill = {
  name: string;
  icon: string;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export const skillGroups: SkillCategory[] = skillData.categories;

// ─── Projects (from portfolio.json) ────────────────────────

export type Project = {
  name: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  link: string | null;
  /** Always true; used to distinguish from Project type if needed */
  featured?: boolean;
};

export const projects: Project[] = portfolioData.projects;

export const portfolioMeta = {
  title: portfolioData.title,
  titleBold: portfolioData.title_bold,
  description: portfolioData.description,
};

// ─── Employment (from employment.json) ────────────────────

export type Employment = {
  companyLong: string;
  companyShort: string;
  logo: string;
  positionLong: string;
  positionShort: string;
  description: string;
  startDate: string;
  endDate: string;
  link: string;
};

export const employments: Employment[] = employmentData.jobs
  .map((job: Record<string, string>) => ({
    companyLong: job.company_longname,
    companyShort: job.company_shortname,
    logo: job.logo,
    positionLong: job.position_longname,
    positionShort: job.position_shortname,
    description: job.description,
    startDate: job.startDate,
    endDate: job.endDate,
    link: job.link,
  }))
  .sort((a, b) => b.endDate.localeCompare(a.endDate));

// ─── Education (from education.json) ────────────────────────

export type Education = {
  institution: string;
  logo: string;
  degree: string;
  description: string;
  startDate: string;
  endDate: string;
  link: string;
};

export const educations: Education[] = [...educationData.educations].sort(
  (a, b) => b.endDate.localeCompare(a.endDate)
);

// ─── Contact note ─────────────────────────────────────────

export const contactNote =
  "Your message goes straight to my inbox. You can also reach me directly via email or the social links on the left.";

import { profile, projects, socials } from "@/data/portfolio";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

export const siteConfig = {
  name: profile.name,
  title: `${profile.name} - Full Stack Developer`,
  description:
    "Full Stack Developer in Malang, Indonesia with 4+ years of experience building scalable web apps, mobile apps, APIs, and cloud-ready product systems.",
  url: rawSiteUrl.replace(/\/$/, ""),
  locale: "en_US",
  language: "en",
  image: "/assets/img/me.webp",
  keywords: [
    "Ahmad Rizal Khamdani",
    "Rizalord",
    "Full Stack Developer",
    "Web Developer",
    "Mobile Developer",
    "Next.js Developer",
    "React Developer",
    "Golang Developer",
    "NestJS Developer",
    "Flutter Developer",
    "Portfolio Developer Indonesia",
    "Software Engineer Malang",
  ],
} as const;

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: "Rizalord",
  jobTitle: profile.role,
  description: siteConfig.description,
  url: siteConfig.url,
  image: absoluteUrl(siteConfig.image),
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Malang",
    addressCountry: "ID",
  },
  sameAs: socials.map((social) => social.href),
  knowsAbout: [
    "Full Stack Development",
    "Web Development",
    "Mobile Development",
    "Backend Development",
    "Frontend Development",
    "Microservices",
    "Cloud Infrastructure",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.title,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: siteConfig.language,
  publisher: {
    "@type": "Person",
    name: profile.name,
  },
};

export const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${profile.name} Portfolio Projects`,
  itemListElement: projects.slice(0, 12).map((project, index) => ({
    "@type": "CreativeWork",
    position: index + 1,
    name: project.name,
    description: project.description,
    image: absoluteUrl(project.image),
    url: project.link || siteConfig.url,
    keywords: project.technologies.join(", "),
  })),
};

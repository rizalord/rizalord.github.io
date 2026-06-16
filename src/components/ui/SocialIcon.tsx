import { Github, Linkedin, Mail, Twitter, Instagram, Facebook } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
};

export function SocialIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? Github;
  return <Icon className={className} aria-hidden />;
}

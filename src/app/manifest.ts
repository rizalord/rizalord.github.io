import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#4f46e5",
    icons: [
      {
        src: "/assets/img/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/img/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

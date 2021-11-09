const title = "Ahmad Khamdani"
const description = `I'm Ahmad Khamdani a 18 years old guy who likes to learn technologies, especially in the backend. I really like designing a good cloud infrastructure, testing applications, doing automation and other things that make application performance better.`
const siteUrl = "https://rizalord.tech"

const SEO = {
  titleTemplate: `${title} ▸ %s`,
  defaultTitle: title,
  description,
  canonical: siteUrl,
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    images: [
      {
        url: `${siteUrl}/me-circle.png`,
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@rizalord_",
    site: "@rizalord_",
  },
  additionalMetaTags: [
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "apple-mobile-web-app-title", content: "Ahmad Khamdani" },
    { name: "application-name", content: "Ahmad Khamdani" },
    {
      name: "google-site-verification",
      content: "mbMt5Wd05a2zbsfKMmFefA_Pv_LwMd6_eBaDR3KbkkU",
    },
    { name: "msapplication-TileColor", content: "#da532c" },
    { name: "msapplication-config", content: "/favicon/browserconfig.xml" },
    { name: "theme-color", content: "#ffffff" },
    { name: "image", content: `${siteUrl}/me.jpg` },
    { name: "author", content: title },
  ],
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "/favicon/apple-icon-57x57.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "/favicon/apple-icon-60x60.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "/favicon/apple-icon-72x72.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "/favicon/apple-icon-76x76.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "/favicon/apple-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "/favicon/apple-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "/favicon/apple-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "/favicon/apple-icon-152x152.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-icon-180x180.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/favicon/android-icon-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/favicon/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/favicon/manifest.json",
    },
    {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
  ],
}

export default SEO

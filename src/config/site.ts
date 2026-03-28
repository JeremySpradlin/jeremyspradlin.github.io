export const siteConfig = {
  siteTitle: "Signal and Noise",
  authorName: "Jeremy Spradlin",
  siteUrl: "https://jeremyspradlin.github.io",
  tagline: "Applied machine learning, signals intelligence, and technical writing from a practitioner’s point of view.",
  description:
    "A dark, blog-first portfolio for writing about data science, machine learning, signals intelligence, and professional experience.",
  accentTheme: "blue",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Projects", href: "/projects/" },
    { label: "Resume", href: "/resume/" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/JeremySpradlin" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jkspradlin/" },
  ],
};

export type SiteConfig = typeof siteConfig;

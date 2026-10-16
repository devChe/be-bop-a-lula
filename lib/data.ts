/**
 * ============================================================
 *  EDIT ME — all portfolio content lives in this one file.
 *  Anything marked "PLACEHOLDER" must be replaced with real info.
 * ============================================================
 */

export const site = {
  name: "Your Name", // PLACEHOLDER: your full name
  role: "Full Stack Developer",
  location: "Philippines",
  url: "https://your-domain.example", // PLACEHOLDER: deployed URL (used for SEO / Open Graph)
  email: "you@example.com", // PLACEHOLDER
  photo: "", // PLACEHOLDER: e.g. "/me.jpg" (put the file in /public). Empty shows initials.
  resume: "#", // PLACEHOLDER: e.g. "/resume.pdf"
  headline: "I build fast, polished web apps people actually enjoy using.",
  subheadline:
    "Philippines-based full stack developer shipping AI-powered platforms, voting apps and storefronts with Next.js, React and Tailwind.",
  about: [
    "I'm a web developer based in the Philippines with experience across front-end, full-stack and product-page work. I like turning designs and rough ideas into clean, responsive, search-friendly products.",
    "Recently I've been building an AI-generated web-app platform with Next.js, Tailwind and MongoDB, and before that a ranking and voting app on Firebase. I'm equally at home optimizing a Shopify page, setting up WordPress with SEO in mind, or crafting emails and sites from PSD designs.",
    "I'm fluent in English and Tagalog, and I enjoy collaborating with teams across time zones.",
  ],
  stats: [
    { label: "Years building the web", value: "3+" }, // PLACEHOLDER: adjust to your real number
    { label: "Languages spoken", value: "2" },
    { label: "Featured projects", value: "4" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/your-handle" }, // PLACEHOLDER
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" }, // PLACEHOLDER
  ],
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Front-end", items: ["JavaScript", "React.js", "Next.js", "HTML5", "CSS/SASS", "Tailwind CSS", "Bootstrap"] },
  { group: "Back-end & Cloud", items: ["Firebase/Firestore", "MongoDB", "Vercel", "AWS Lambda"] },
  { group: "CMS & Commerce", items: ["WordPress", "Shopify/Liquid", "Sanity.io", "Strapi", "WP GraphQL", "Webflow"] },
  { group: "Practice", items: ["SEO", "Git"] },
];

export const languages = ["English", "Tagalog"];

export const experience = [
  {
    company: "Tagpros",
    period: "2024 – 2026",
    role: "Full Stack Developer", // PLACEHOLDER: confirm exact job title
    summary: "Worked on an AI-generated web-app platform.",
    stack: ["Next.js", "Tailwind", "MongoDB", "Vercel"],
  },
  {
    company: "KJC eSports",
    period: "2023 – 2024",
    role: "Web Developer", // PLACEHOLDER: confirm exact job title
    summary: "Built a ranking and voting app.",
    stack: ["Next.js", "React", "Tailwind", "Vercel", "Firebase Firestore"],
  },
  {
    company: "Tiweb",
    period: "2023 – 2024",
    role: "Shopify Developer", // PLACEHOLDER: confirm exact job title
    summary: "Shopify product listing and page optimization.",
    stack: ["Shopify", "Liquid"],
  },
];

export const otherWork = [
  "Company management system (React/Next.js, Firebase, Vercel)",
  "WordPress development and SEO",
  "Email development",
  "Websites built from PSD designs",
];

export const projects = [
  {
    title: "Usenet Reviewz",
    description: "A review site project from my portfolio.", // PLACEHOLDER: refine description
    tags: ["Web"], // PLACEHOLDER
    href: "https://example.com/usenet-reviewz", // PLACEHOLDER: use real link from resume
    image: "", // PLACEHOLDER: screenshot e.g. "/projects/usenet-reviewz.png"
  },
  {
    title: "Best NZB Sites",
    description: "A comparison and listing site project.", // PLACEHOLDER
    tags: ["Web"], // PLACEHOLDER
    href: "https://example.com/best-nzb-sites", // PLACEHOLDER
    image: "",
  },
  {
    title: "Tinds",
    description: "A web project from my portfolio.", // PLACEHOLDER
    tags: ["Web"], // PLACEHOLDER
    href: "https://example.com/tinds", // PLACEHOLDER
    image: "",
  },
  {
    title: "Keystream",
    description: "A web project from my portfolio.", // PLACEHOLDER
    tags: ["Web"], // PLACEHOLDER
    href: "https://example.com/keystream", // PLACEHOLDER
    image: "",
  },
];

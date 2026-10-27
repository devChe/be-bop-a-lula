/**
 * ============================================================
 *  EDIT ME — all portfolio content lives in this one file.
 *  Anything marked "PLACEHOLDER" must be replaced with real info.
 * ============================================================
 */

export const site = {
  name: "Steve Eugenio", // PLACEHOLDER: your full name
  role: "Full Stack Developer",
  location: "Philippines",
  url: "https://devche.github.io/be-bop-a-lula/", // PLACEHOLDER: deployed URL (used for SEO / Open Graph)
  email: "stevenson.manglicmot.eugenio@gmail.com", // PLACEHOLDER
  photo: "stevejobs.jpg", // PLACEHOLDER: e.g. "/me.jpg" (put the file in /public). Empty shows initials.
  resume: "/resume.pdf", // PLACEHOLDER: e.g. "/resume.pdf"
  headline: "I build fast, polished web apps people actually enjoy using.",
  subheadline:
    "Coding things from scratch while bringing ideas to life in the browser makes me love being a developer.",
  about: [
    "I'm a web developer based in the Philippines with experience across front-end, full-stack and product-page work. I like turning designs and rough ideas into clean, responsive, search-friendly products.",
    "Recently I've been building an AI-generated web-app platform with Next.js, Tailwind and MongoDB, and before that a ranking and voting app on Firebase. I'm equally at home optimizing a Shopify page, setting up WordPress with SEO in mind, or crafting emails and sites from PSD designs.",
    "I'm fluent in Tagalog and average in English, and I enjoy collaborating with teams across time zones.",
  ],
  stats: [
    { label: "Years building the web", value: "6" }, // PLACEHOLDER: adjust to your real number
    { label: "Languages spoken", value: "2" },
    { label: "Featured projects", value: "4" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/devChe" }, // PLACEHOLDER
    { label: "LinkedIn", href: "https://www.linkedin.com/in/stevenson-eugenio-6ba39118b/n ./" }, // PLACEHOLDER
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
    company: "Bless AD Final",
    period: "September 2024 – Present",
    role: "Front-End Developer (Consultant)",
    summary: "Built and developed an AI-generated web app platform.",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    company: "Tagpros Education OPC",
    period: "February 2024 – September 2026",
    role: "Software Engineer",
    summary: "Built and developed an AI-generated web app platform.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Vercel"],
  },
  {
    company: "Tiweb",
    period: "June 2023 – December 2024",
    role: "Product Lister",
    summary: "Handled product listings and optimized product pages.",
    stack: ["Shopify", "POKY", "ChatGPT"],
  },
  {
    company: "KJC eSports",
    period: "July 2023 – February 2024",
    role: "Full-Stack Web Developer (Project-Based)",
    summary: "Built a ranking and voting web application.",
    stack: [
      "Next.js",
      "React.js",
      "Vercel",
      "Tailwind CSS",
      "Firebase Firestore",
    ],
  },
  {
    company: "Applyflow",
    period: "January 2023 – July 2023",
    role: "Product Page Developer",
    summary: "Built individual product pages and customized website themes.",
    stack: [
      "WordPress",
      "SASS",
      "Beaver Builder",
      "Shopify",
      "Liquid",
    ],
  },
  {
    company: "TranscribeDirect",
    period: "October 2022 – January 2023",
    role: "Front-end Developer",
    summary: "Built a portal and implemented ClickFunnels pages.",
    stack: ["React.js", "Next.js", "Tailwind CSS", "AWS Lambda"],
  },
  {
    company: "Abseil Pro",
    period: "January 2022 – May 2023",
    role: "System App Developer (Project-Based)",
    summary: "Built a management system application for the company.",
    stack: ["React.js", "Next.js", "Firebase", "Vercel"],
  },
  {
    company: "Fielding Marshall",
    period: "July 2021 – January 2022",
    role: "Web Developer",
    summary: "Created websites from scratch and converted PSD designs into HTML.",
    stack: [
      "React.js",
      "Next.js",
      "Webflow",
      "Bootstrap",
      "Sanity.io",
      "WP GraphQL",
    ],
  },
  {
    company: "Next Gear Media Inc.",
    period: "March 2020 – December 2021",
    role: "WordPress Developer",
    summary: "Built individual website pages, handled SEO, and implemented social media content strategies.",
    stack: [
      "WordPress",
      "Tagdiv",
      "Newspaper Theme",
      "HTML",
      "CSS",
    ],
  },
  {
    company: "Aglaia Realty & Dev't Corp.",
    period: "January 2020 – December 2020",
    role: "Email Developer and Social Media Manager",
    summary: "Built email templates from scratch and managed social media activities.",
    stack: [
      "HTML",
      "CSS",
      "Email on Acid",
      "Litmus",
      "Putsmail",
      "Hootsuite",
    ],
  },
  {
    company: "Dodeca Drone Inc.",
    period: "August 2019 – December 2019",
    role: "Front End Web Developer",
    summary: "Converted PSD designs into HTML.",
    stack: ["React.js", "Next.js", "Firebase"],
  },
  {
    company: "Asian Psychological Services & Assessment Inc.",
    period: "July 2006 – July 2019",
    role: "Data Entry Specialist",
    summary: "Converted hardcopy data into electronic formats and implemented internal ISO audits.",
    stack: ["Remark OMR", "MS Word", "Excel", "Access"],
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
    title: "GabAI",
    description: "An AI-Powered Teacher Guide and Partner Developed by Filipino Teachers for Filipino Teachers", // PLACEHOLDER: refine description
    tags: ["Web", "OpenAI", "Gemini", "NextJs", "Tailwind", "MongoDB", "Vercel", "Hitpay"], // PLACEHOLDER
    href: "https://gabai.tagpros.us/", // PLACEHOLDER: use real link from resume
    image: "projects/gabai.png", // PLACEHOLDER: screenshot e.g. "projects/usenet-reviewz.png"
  },
  {
    title: "Tagpros CPD",
    description: "AI Training program for professional development.", // PLACEHOLDER
    tags: ["Web", "NextJs", "Tailwind", "MongoDB", "Vercel", "Hitpay"], // PLACEHOLDER
    href: "https://www.tagpros.com.ph/", // PLACEHOLDER
    image: "projects/cpd.png",
  },
  {
    title: "Votedaily",
    description: "A web project for daily voting.", // PLACEHOLDER
    tags: ["Web", "NextJs", "Tailwind", "Supabase", "Vercel"], // PLACEHOLDER
    href: "https://votedaily.vercel.app/", // PLACEHOLDER
    image: "projects/votedaily.png",
  },
  {
    title: "KJC eSports",
    description: "KJC eSports is a gaming and esports website featuring gaming news, tournament updates, game reviews, and guides, designed to provide an engaging experience for gaming enthusiasts.", // PLACEHOLDER
    tags: ["Web", "Wordpress", "SEO"], // PLACEHOLDER
    href: "https://www.kjcesports.com/", // PLACEHOLDER
    image: "projects/kjc.png",
  },
  {
    title: "USENET Reviewz",
    description: "UsenetReviewz’s NZB Sites page provides reviews, rankings, and comparisons of popular NZB indexers, helping users find suitable Usenet search and download platforms based on features, pricing, and membership options.", // PLACEHOLDER
    tags: ["Web", "HTML", "CSS", "SEO"], // PLACEHOLDER
    href: "https://usenetreviewz.com/nzb-sites/", // PLACEHOLDER
    image: "projects/usenet.png",
  },
  {
    title: "Tinds.com",
    description: "Tinds.com is a vibrant online platform dedicated to uplifting and celebrating the global South Asian community. ", // PLACEHOLDER
    tags: ["Web", "WordPress", "SEO"], // PLACEHOLDER
    href: "https://tinds.com", // PLACEHOLDER
    image: "projects/tinds.png",
  },
];

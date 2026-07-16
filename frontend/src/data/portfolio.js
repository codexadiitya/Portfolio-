
export const PROFILE = {
  name: "Aditya DIWAN ",
  handle: "@adityadiwan",
  title: "Full-Stack Developer /  Aspiring Software Engineer / AI Enthusiast",
  location: "Raipur Chhattisgarh, India",
  email: "adityadiwan2005@gmail.com",
  bio: "I engineer bespoke digital products that live at the intersection of craft, systems and machine intelligence. Currently obsessed with agentic UX and typography.",
  availability: "Available for select 2026 projects",
  resume: "#resume-demo",
  portrait: "/aditya_portrait.jpg",
  socials: [
    { label: "GitHub", handle: "codexadiitya", href: "https://github.com/codexadiitya" },
    { label: "LinkedIn", handle: "in/adityadiwan28", href: "https://www.linkedin.com/in/adityadiwan28" },
    { label: "Discord", handle: "aditya", href: "https://discord.com/users/854936390303612949" },
    { label: "X / Twitter", handle: "@adityadiwan", href: "https://x.com" },
  ],
};

export const SERVICES = [
  {
    id: "fs",
    number: "01",
    title: "Full-Stack Engineering",
    body:
      "End-to-end product engineering with a bias for elegance — from Postgres schemas to accessible React interfaces.",
    tools: ["Next.js", "Node", "Postgres", "Redis"],
  },
  {
    id: "ml",
    number: "02",
    title: "Machine Learning",
    body:
      "Training, fine-tuning and shipping small language models, RAG pipelines and computer vision systems into production.",
    tools: ["PyTorch", "LangChain", "Vec DBs", "ONNX"],
  },
  {
    id: "design",
    number: "03",
    title: "Interface Design",
    body:
      "Editorial, typography-first product design. I ship in Figma, then in code, without loss of intent.",
    tools: ["Figma", "Motion", "Tokens"],
  },
];

export const PROJECTS = [
  {
    id: "p0",
    slug: "portfolio",
    title: "Editorial Portfolio",
    year: "2026",
    category: "Web",
    stack: ["React", "Tailwind CSS", "Framer Motion", "Lenis"],
    link: "https://bharat-live.vercel.app",
    description:
      "A premium, dark editorial developer portfolio website with smooth momentum scroll, 3D card tilt glare, custom cursor, and built-in command palette.",
    image: "/aditya_portfolio_preview.jpg",
    featured: true,
  },
  {
    id: "p1",
    slug: "helios",
    title: "Helios Analytics",
    year: "2026",
    category: "Web",
    stack: ["Next.js 15", "Postgres", "tRPC", "Tailwind"],
    link: "https://github.com/codexadiitya",
    description:
      "A real-time observability dashboard for LLM applications. Traces, evals and cost — in one bento canvas.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFyayUyMGRhc2hib2FyZCUyMHVpfGVufDB8fHx8MTc4NDEyNTU5Mnww&ixlib=rb-4.1.0&q=85",
    featured: true,
  },
  {
    id: "p2",
    slug: "obscura",
    title: "Obscura Model Studio",
    year: "2025",
    category: "ML",
    stack: ["PyTorch", "FastAPI", "React"],
    link: "https://github.com/codexadiitya",
    description:
      "A visual playground to fine-tune diffusion and small language models with a single YAML file.",
    image:
      "https://images.unsplash.com/photo-1666027092835-7e668416b7c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwZGFyayUyMGRhc2hib2FyZCUyMHVpfGVufDB8fHx8MTc4NDEyNTU5Mnww&ixlib=rb-4.1.0&q=85",
    featured: true,
  },
  {
    id: "p3",
    slug: "ssipmt-portal",
    title: "SSIPMT Portal",
    year: "2026",
    category: "Web",
    stack: ["React", "Tailwind CSS", "Netlify", "Under Development"],
    link: "https://ssipmtportal.netlify.app/",
    description:
      "An interactive student and academic management portal for SSIPMT. (Under Development)",
    image: "/ssipmt_portal.png",
    featured: false,
  },
  {
    id: "p4",
    slug: "atlas",
    title: "Atlas / Semantic Search",
    year: "2024",
    category: "ML",
    stack: ["Python", "Qdrant", "OpenAI"],
    link: "https://github.com/codexadiitya",
    description:
      "Semantic search across 12M product SKUs with a 42ms p95 — replaced a legacy ElasticSearch cluster.",
    image:
      "https://images.unsplash.com/photo-1622737133809-d95047b9e673?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMDNkJTIwYXJ0JTIwZGFya3xlbnwwfHx8fDE3ODQxMjU1OTJ8MA&ixlib=rb-4.1.0&q=85",
    featured: false,
  },
  {
    id: "p5",
    slug: "ledger",
    title: "Ledger — Personal OS",
    year: "2024",
    category: "Web",
    stack: ["React", "SQLite", "Tauri"],
    link: "https://github.com/codexadiitya",
    description:
      "An offline-first, local-first personal finance OS. Zero SaaS, zero telemetry, one binary.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFyayUyMGRhc2hib2FyZCUyMHVpfGVufDB8fHx8MTc4NDEyNTU5Mnww&ixlib=rb-4.1.0&q=85",
    featured: false,
  },
  {
    id: "p6",
    slug: "type",
    title: "Type Foundry Site",
    year: "2023",
    category: "Design",
    stack: ["Astro", "GSAP", "Cloudflare"],
    link: "https://github.com/codexadiitya",
    description:
      "A specimen site for an independent type foundry — an editorial exercise in restraint and rhythm.",
    image:
      "https://images.unsplash.com/photo-1517241034903-9a4c3ab12f00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMDNkJTIwYXJ0JTIwZGFya3xlbnwwfHx8fDE3ODQxMjU1OTJ8MA&ixlib=rb-4.1.0&q=85",
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    year: "2026",
    role: "Lead Product Engineer",
    company: "Novus Labs",
    body:
      "Leading a 5-person squad shipping an agentic browser for research teams. Design + ML + platform.",
  },
  {
    year: "2025",
    role: "Sr. Full-Stack Engineer",
    company: "Ainocular",
    body:
      "Rebuilt the core inference pipeline in Rust — cut p99 latency from 820ms to 61ms. Owned the React admin.",
  },
  {
    year: "2024",
    role: "Full-Stack Engineer",
    company: "Webyapar Solutions",
    body:
      "Migrated a 12-service monolith to Postgres + event sourcing. Cut cloud spend by 41% in the first quarter.",
  },
  {
    year: "2023",
    role: "Frontend Engineer (Contract)",
    company: "AARP Communication",
    body:
      "Shipped a subscriber-management planner for 10 internal departments; reduced paper usage by 75%.",
  },
  {
    year: "2022",
    role: "Freelance",
    company: "Independent",
    body:
      "Design + build small marketing sites for founders. First taste of the entire stack, end to end.",
  },
];

export const SKILLS = [
  { name: "TypeScript", level: 95 },
  { name: "React / Next.js", level: 96 },
  { name: "Node / Bun", level: 88 },
  { name: "Python / PyTorch", level: 84 },
  { name: "Postgres / Redis", level: 82 },
  { name: "Figma / Design Systems", level: 90 },
  { name: "Rust", level: 62 },
  { name: "LLM / RAG", level: 87 },
];

export const MARQUEE_TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "Node",
  "Rust",
  "PyTorch",
  "Postgres",
  "Redis",
  "Tailwind",
  "Figma",
  "GraphQL",
  "Docker",
  "AWS",
  "Cloudflare",
  "Vercel",
];

export const BLOG = [
  {
    id: "b1",
    title: "Designing for the agentic web",
    excerpt:
      "What changes when your product's primary user is another agent? Six patterns from the trenches.",
    date: "Jan 2026",
    read: "8 min",
    tag: "Essay",
    cover:
      "https://images.unsplash.com/photo-1517241034903-9a4c3ab12f00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMDNkJTIwYXJ0JTIwZGFya3xlbnwwfHx8fDE3ODQxMjU1OTJ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "b2",
    title: "Small models, big product",
    excerpt:
      "Why we shipped a 1.5B parameter model in production and never looked back at the API bill.",
    date: "Nov 2025",
    read: "12 min",
    tag: "Engineering",
    cover:
      "https://images.unsplash.com/photo-1622737133809-d95047b9e673?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMDNkJTIwYXJ0JTIwZGFya3xlbnwwfHx8fDE3ODQxMjU1OTJ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "b3",
    title: "The case for editorial UIs",
    excerpt:
      "Enough dashboards. Software can look like a magazine and still be usable — a manifesto in three parts.",
    date: "Sep 2025",
    read: "6 min",
    tag: "Design",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFyayUyMGRhc2hib2FyZCUyMHVpfGVufDB8fHx8MTc4NDEyNTU5Mnww&ixlib=rb-4.1.0&q=85",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Rare combination. Aditya writes the code, designs the pixels, and still finds time to argue about kerning.",
    author: "Lena Ortiz",
    role: "CTO, Novus Labs",
  },
  {
    quote:
      "Shipped in six weeks what our previous vendor promised in six months. Every detail intentional.",
    author: "Marcus Feld",
    role: "Head of Product, Ainocular",
  },
  {
    quote:
      "The rare engineer who reads the design brief twice — and then improves it.",
    author: "Sana Ito",
    role: "Design Lead, Kiosk OS",
  },
];

// Deterministic pseudo-random for the mock contribution graph.
export const CONTRIBUTIONS = Array.from({ length: 7 * 26 }, (_, i) => {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  const r = x - Math.floor(x);
  if (r < 0.3) return 0;
  if (r < 0.55) return 1;
  if (r < 0.78) return 2;
  if (r < 0.93) return 3;
  return 4;
});

export const company = {
  name: "Full Stack Solutions",
  short: "FSS",
  tagline: "End-to-end software engineering & AI Automation, from idea to production.",
  email: "connect@fullstacksolutions.in",
};

export type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services#web-development", label: "Web Development" },
      { href: "/services#mobile-app-development", label: "Mobile App Development" },
      { href: "/services#backend-cloud", label: "Backend & Cloud Engineering" },
      { href: "/services#ui-ux-design", label: "UI/UX Design" },
      { href: "/services#custom-software", label: "Custom Software Solutions" },
      { href: "/services#devops-qa", label: "DevOps & QA" },
    ],
  },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    summary:
      "Fast, accessible, SEO-ready web applications built on modern frameworks like Next.js and React.",
    icon: "globe",
    points: [
      "Marketing sites & web apps",
      "Next.js / React / TypeScript",
      "Headless CMS integration",
      "Performance & SEO optimization",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    summary:
      "Native-quality iOS and Android apps built with React Native and Flutter for a single, maintainable codebase.",
    icon: "device",
    points: [
      "iOS & Android from one codebase",
      "React Native & Flutter",
      "Offline-first architecture",
      "App Store / Play Store launch support",
    ],
  },
  {
    slug: "backend-cloud",
    title: "Backend & Cloud Engineering",
    summary:
      "Scalable APIs and cloud infrastructure engineered for reliability, security, and cost efficiency.",
    icon: "server",
    points: [
      "Node.js, Python, Go microservices",
      "AWS / Azure / GCP architecture",
      "CI/CD pipelines & IaC (Terraform)",
      "Database design & optimization",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    summary:
      "Research-driven product design that turns complex workflows into interfaces people enjoy using.",
    icon: "layout",
    points: [
      "User research & wireframing",
      "Design systems & prototyping",
      "Figma-to-code handoff",
      "Accessibility (WCAG) compliance",
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software Solutions",
    summary:
      "Bespoke internal tools and platforms tailored to the exact way your business operates.",
    icon: "cube",
    points: [
      "ERP / CRM / internal tooling",
      "Workflow automation",
      "Legacy system modernization",
      "Third-party API integrations",
    ],
  },
  {
    slug: "devops-qa",
    title: "DevOps & QA",
    summary:
      "Automated testing and deployment pipelines that let your team ship faster with confidence.",
    icon: "shield",
    points: [
      "Automated test suites (unit/E2E)",
      "Docker & Kubernetes",
      "Monitoring & observability",
      "Zero-downtime deployments",
    ],
  },
];

export const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Go",
  "React Native",
  "Flutter",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Kubernetes",
  "GraphQL",
];

export const stats = [
  { value: "8+ Years", label: "Of App Development Experience" },
  { value: "120+", label: "Web & Mobile Applications Developed" },
  { value: "14+", label: "Distinct Industries Mastered" },
];

export type TechCategory = {
  slug: string;
  title: string;
  items: string[];
};

export const techCategories: TechCategory[] = [
  {
    slug: "frontend",
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS"],
  },
  {
    slug: "backend",
    title: "Backend",
    items: ["Node.js", "Python", "Go", "Java (Spring)", "GraphQL"],
  },
  {
    slug: "mobile",
    title: "Mobile",
    items: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    slug: "data",
    title: "Data & Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Snowflake", "Kafka"],
  },
];

export type Industry = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export const industries: Industry[] = [
  {
    slug: "fintech",
    title: "Fintech",
    description:
      "Secure, compliant platforms for payments, trading, and financial analytics that scale with regulatory demands.",
    icon: "shield",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "HIPAA-compliant patient portals, telehealth platforms, and clinical workflow tools built for reliability.",
    icon: "check",
  },
  {
    slug: "logistics",
    title: "Logistics",
    description:
      "Real-time tracking, route optimization, and fleet management systems for distribution and delivery networks.",
    icon: "globe",
  },
  {
    slug: "retail",
    title: "Retail & E-Commerce",
    description:
      "Headless commerce, inventory systems, and omnichannel experiences that unify online and in-store operations.",
    icon: "cube",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description:
      "IoT-connected monitoring, predictive maintenance, and supply chain visibility for industrial operations.",
    icon: "server",
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    description:
      "Property management platforms, listing portals, and transaction tools built for brokers and property teams.",
    icon: "layout",
  },
];

export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
};

export const portfolio: PortfolioItem[] = [
  {
    slug: "fintech-dashboard",
    title: "Fintech Analytics Dashboard",
    category: "Web App",
    description:
      "A real-time financial analytics platform processing millions of transactions daily with sub-second dashboard updates.",
    tags: ["Next.js", "PostgreSQL", "AWS", "D3.js"],
    gradient: "from-white/10 to-zinc-500/10",
  },
  {
    slug: "logistics-mobile",
    title: "Logistics Tracking App",
    category: "Mobile App",
    description:
      "Cross-platform driver and dispatcher app with live GPS tracking, route optimization, and offline mode.",
    tags: ["React Native", "Node.js", "MongoDB"],
    gradient: "from-zinc-400/10 to-white/10",
  },
  {
    slug: "healthcare-portal",
    title: "Healthcare Patient Portal",
    category: "Web App",
    description:
      "HIPAA-compliant patient portal enabling appointment scheduling, telehealth, and secure record access.",
    tags: ["React", "Node.js", "AWS", "GraphQL"],
    gradient: "from-white/10 to-zinc-600/10",
  },
  {
    slug: "retail-ecommerce",
    title: "Omnichannel Retail Platform",
    category: "E-Commerce",
    description:
      "Headless commerce platform unifying in-store and online inventory for a 200-location retail chain.",
    tags: ["Next.js", "Shopify Hydrogen", "Go"],
    gradient: "from-zinc-500/10 to-zinc-300/10",
  },
  {
    slug: "saas-crm",
    title: "B2B SaaS CRM",
    category: "SaaS Platform",
    description:
      "Multi-tenant CRM with custom pipelines, automation, and reporting built for a 40-person sales team.",
    tags: ["TypeScript", "PostgreSQL", "Kubernetes"],
    gradient: "from-white/10 to-zinc-400/10",
  },
  {
    slug: "iot-monitoring",
    title: "Industrial IoT Monitoring",
    category: "Enterprise Software",
    description:
      "Real-time equipment monitoring platform ingesting sensor data from 5,000+ industrial devices.",
    tags: ["Python", "Kafka", "AWS IoT", "React"],
    gradient: "from-zinc-300/10 to-white/10",
  },
];

export const testimonials = [
  {
    quote:
      "Full Stack Solutions rebuilt our entire platform in four months and it hasn't gone down once since launch. Their engineering discipline is rare.",
    name: "Sarah Whitfield",
    role: "CTO, Meridian Health",
  },
  {
    quote:
      "They didn't just write code — they challenged our assumptions and helped us ship a better product than what we originally scoped.",
    name: "David Okafor",
    role: "Founder, RouteWise Logistics",
  },
  {
    quote:
      "Responsive, transparent, and genuinely invested in our success. Our mobile app's crash rate dropped to near zero after their team took over.",
    name: "Priya Nandan",
    role: "VP Product, Fintrail",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We dig into your goals, users, and constraints to define a clear technical roadmap.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes and prototypes validate the experience before a single line of code is written.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Agile sprints with weekly demos keep you in the loop from first commit to launch.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    description:
      "We deploy, monitor, and continue optimizing as your product grows.",
  },
];

export const values = [
  {
    title: "Engineering Integrity",
    description:
      "We write code we'd be proud to hand off — tested, documented, and built to last.",
  },
  {
    title: "Radical Transparency",
    description:
      "Weekly demos, open backlogs, and direct access to the engineers on your project.",
  },
  {
    title: "Outcomes Over Output",
    description:
      "We measure success by the business results our software delivers, not lines of code shipped.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "Most of our clients stay with us for years — we build relationships, not just projects.",
  },
];

export const team = [
  { name: "Marcus Chen", role: "CEO & Co-Founder" },
  { name: "Elena Petrova", role: "CTO & Co-Founder" },
  { name: "Jordan Blake", role: "VP of Engineering" },
  { name: "Aisha Rahman", role: "Head of Design" },
];

export const perks = [
  { title: "Remote-First", description: "Work from anywhere — we've been distributed since day one." },
  { title: "Flexible Hours", description: "Ship great work on a schedule that fits your life." },
  { title: "Learning Budget", description: "Annual stipend for courses, conferences, and books." },
  { title: "Health Coverage", description: "Comprehensive medical, dental, and vision plans." },
  { title: "Equity", description: "Every full-time hire gets a stake in the company's success." },
  { title: "Unlimited PTO", description: "Take the time you need to recharge, no questions asked." },
];

export type OpenRole = {
  title: string;
  department: string;
  location: string;
  type: string;
};

export const openRoles: OpenRole[] = [
  { title: "Senior Full-Stack Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "React Native Developer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "DevOps Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Designer (UI/UX)", department: "Design", location: "Remote", type: "Full-time" },
  { title: "Technical Project Manager", department: "Delivery", location: "Remote", type: "Full-time" },
  { title: "QA Automation Engineer", department: "Engineering", location: "Remote", type: "Contract" },
];

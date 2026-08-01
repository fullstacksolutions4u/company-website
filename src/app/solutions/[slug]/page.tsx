import Link from "next/link";
import { notFound } from "next/navigation";

type SolutionData = {
  title: string;
  badge: string;
  heroLabel: string;
  description: string;
  features: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

const solutionsMap: Record<string, SolutionData> = {
  "ai-solutions": {
    title: "AI Solutions",
    badge: "Next-Gen AI & Core Orchestration Platforms",
    heroLabel: "Artificial Intelligence",
    description: "Automate repetitive workflows, unlock predictive capabilities, and drive business decision-making with custom-designed neural networks and Large Language Model integrations.",
    features: [
      { title: "Generative AI Integration", text: "Incorporate LLMs into your customer service, content generation, and product workflows." },
      { title: "Predictive Analytics", text: "Forecast future trends, inventory demands, and customer churn with high-precision models." },
      { title: "Intelligent Automation", text: "Automate complex business decision steps using cognitive processing agents." }
    ],
    faqs: [
      { question: "Why choose Full Stack Solutions for AI solutions?", answer: "We focus on building practical, secure, and production-ready AI pipelines that directly improve operational efficiency and business margins." },
      { question: "How do you ensure data privacy with LLMs?", answer: "We set up secure enterprise-grade APIs, filter sensitive data, or deploy private open-source models within your secure cloud boundary." }
    ]
  },
  "custom-software": {
    title: "Custom Software",
    badge: "Tailored Enterprise Systems",
    heroLabel: "Enterprise Software",
    description: "We design and build bespoke enterprise architectures that solve complex business bottlenecks, support massive transaction volumes, and scale effortlessly.",
    features: [
      { title: "Enterprise Architecture", text: "High-performance systems designed from the ground up for maximum scale and resilience." },
      { title: "API Integrations", text: "Construct clean, document-first REST & GraphQL APIs to power cross-system synchronizations." },
      { title: "Legacy Modernization", text: "Refactor old systems incrementally to ensure zero downtime and smooth data transitions." }
    ],
    faqs: [
      { question: "What is your custom software development methodology?", answer: "We operate in highly collaborative 2-week agile sprints, providing transparent builds and consistent milestone reporting." }
    ]
  },
  "web-development": {
    title: "Web Development",
    badge: "Modern, Scalable Web Applications",
    heroLabel: "Web Applications",
    description: "Construct responsive, ultra-fast web apps engineered on modern React framework paradigms to optimize user conversion and platform adoption.",
    features: [
      { title: "Full-Stack React Solutions", text: "Utilize state-of-the-art Next.js architectures to optimize load times and UI state." },
      { title: "Responsive Interface Engineering", text: "Ensure consistent experience across all screen viewports, devices, and browsers." },
      { title: "Performance Tuning", text: "Audit loading metrics, optimize image layers, and construct CDN caching hierarchies." }
    ],
    faqs: [
      { question: "Do you build static or dynamic web sites?", answer: "We construct both fully dynamic web applications (dashboards, e-commerce, SaaS boards) and search-optimized static web layers." }
    ]
  },
  "mobile-development": {
    title: "Mobile Development",
    badge: "High-Performance Mobile Apps",
    heroLabel: "Mobile Applications",
    description: "Develop native and cross-platform mobile apps focusing on buttery-smooth 60fps animations, rock-solid security, offline-first architectures, and frictionless user experiences.",
    features: [
      { title: "React Native & Flutter", text: "Build cross-platform apps with a single, highly performant codebase to reach both iOS and Android." },
      { title: "Offline-First Sync", text: "Store operations locally and sync them back to databases once network returns." },
      { title: "Native Feature Access", text: "Seamless integrations with Bluetooth, GPS coordinates, biometrics, and push alert networks." }
    ],
    faqs: [
      { question: "Should we build cross-platform apps or native apps?", answer: "We evaluate your specific performance needs, budget, and timeline to recommend whether React Native, Flutter, or pure native (Swift/Kotlin) is best." }
    ]
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    badge: "Secure and Scalable Cloud Infrastructures",
    heroLabel: "Cloud Engineering",
    description: "Construct scalable cloud topologies on AWS and GCP designed to sustain millions of connections with active auto-scaling and security boundaries.",
    features: [
      { title: "Infrastructure as Code", text: "Define your environments using Terraform, enabling automated deployments." },
      { title: "Serverless Topologies", text: "Design systems utilizing Lambdas and serverless databases to scale to zero and lower bills." },
      { title: "Secure Access Control", text: "Isolate databases inside private subnets and enforce zero-trust identity layers." }
    ],
    faqs: [
      { question: "How do you optimize cloud spend?", answer: "We conduct cloud cost audits, configure auto-scaling rules, shut down inactive staging servers, and set up caching layers." }
    ]
  },
  "devops": {
    title: "DevOps & CI/CD",
    badge: "Automated Deployments & System Stability",
    heroLabel: "System Operations",
    description: "Streamline software delivery cycles, orchestrate Kubernetes clusters, and automate deployment pipelines for high engineering speed.",
    features: [
      { title: "CI/CD Pipeline Automation", text: "Automate tests and deployment scripts inside GitHub Actions or GitLab CI." },
      { title: "Kubernetes Orchestration", text: "Deploy containerized applications into reliable, auto-scaling EKS or GKE clusters." },
      { title: "Real-Time Observability", text: "Set up Prometheus, Grafana, and alerts to monitor server health and log errors." }
    ],
    faqs: [
      { question: "What CI/CD platforms do you support?", answer: "We build deployment pipelines for GitHub Actions, GitLab CI, CircleCI, Jenkins, and AWS CodePipeline." }
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    badge: "Human-Centered Design Frameworks",
    heroLabel: "Visual Design",
    description: "Design intuitive interfaces and aesthetic visual layouts using modern prototyping tools to guarantee excellent user experiences.",
    features: [
      { title: "User Journey Prototyping", text: "Construct wireframes and clickable high-fidelity Figma layouts to test flow." },
      { title: "Design Systems", text: "Create structured style guides, typography patterns, and button kits for development." },
      { title: "Usability Research", text: "Conduct user testing, heat-mapping research, and accessibility audits." }
    ],
    faqs: [
      { question: "Do you design according to Web Accessibility (WCAG) standards?", answer: "Yes, we integrate accessibility principles (contrast ratios, keyboard focus states) into all our designs." }
    ]
  },
  "data-analytics": {
    title: "Data Analytics",
    badge: "Intelligent Data Dashboards",
    heroLabel: "Business Intelligence",
    description: "Transform raw database tables into interactive data visualizations, analytics reports, and business growth predictions.",
    features: [
      { title: "Data Lakehouse Setup", text: "Consolidate multiple data streams into Google BigQuery or Snowflake lakes." },
      { title: "BI Dashboards", text: "Construct real-time visual reports using Tableau, PowerBI, or custom React graphs." },
      { title: "Machine Learning Insights", text: "Train classification models to detect customer groups and optimize marketing." }
    ],
    faqs: [
      { question: "Can you construct custom analytics dashboards inside our application?", answer: "Yes, we build embedded React chart panels that update in real-time using secure API web sockets." }
    ]
  },
  "qa-testing": {
    title: "QA & Testing",
    badge: "Rigorous Software Verification Protocols",
    heroLabel: "Quality Assurance",
    description: "Ensure software reliability, verify logic against edge cases, and run automated regression test pipelines.",
    features: [
      { title: "E2E Test Automation", text: "Write script suites in Playwright or Cypress to automate click paths." },
      { title: "Performance Benchmarking", text: "Run load testing scripts using k6 to check server limits under high traffic." },
      { title: "Security Vulnerability Audits", text: "Conduct static code reviews and mock penetration tests to identify exploits." }
    ],
    faqs: [
      { question: "Why is automated testing important?", answer: "Automated test runs run before every build deployment, blocking buggy code from hitting staging or production." }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(solutionsMap).map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function SolutionPage(props: PageProps) {
  const { slug } = await props.params;
  const data = solutionsMap[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="bg-[#F7F8F5] text-[#171A17] font-sans antialiased min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-28 px-6 lg:px-8 bg-gradient-to-br from-[#FCFDFB] to-[#F2F5F0] border-b border-[#F2F5F0]">
        <div className="mx-auto max-w-5xl text-center flex flex-col gap-4">
          <div className="flex justify-center">
            <span className="glass-pill text-[11px] font-bold uppercase tracking-wider text-[#477B4B]">
              <span className="h-2 w-2 rounded-full bg-[#79C968]" />
              {data.heroLabel}
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-[#171917] leading-[1.1]">
            {data.title}
          </h1>
          <p className="text-xs font-semibold text-[#C59B27] tracking-wider uppercase">
            {data.badge}
          </p>
          <p className="mt-4 mx-auto max-w-3xl text-sm leading-relaxed text-[#545B56]">
            {data.description}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-3xl font-bold mb-16 text-[#171a17]">
          Key Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.features.map((feat, idx) => (
            <div key={idx} className="glass-card p-8 flex flex-col gap-4">
              <span className="text-2xl font-serif font-black text-[#4D8B4F]/20">0{idx + 1}</span>
              <h3 className="text-lg font-bold text-[#171a17]">{feat.title}</h3>
              <p className="text-xs leading-relaxed text-[#525b54]">{feat.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-24 bg-[#FCFDFB] px-6 lg:px-8 border-t border-[#F2F5F0]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center font-serif text-3xl font-bold mb-16 text-[#171a17]">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-6">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-[#F2F5F0] pb-6 flex flex-col gap-2">
                  <h3 className="text-sm font-bold text-[#171A17]">{faq.question}</h3>
                  <p className="text-xs leading-relaxed text-[#525b54]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-20 bg-[#F7F8F5] px-6 lg:px-8 border-t border-[#F2F5F0] text-center">
        <div className="max-w-xl mx-auto flex flex-col gap-6 items-center">
          <h2 className="font-serif text-3xl font-bold text-[#171a17]">
            Ready to Build Your Solution?
          </h2>
          <p className="text-xs text-[#525b54] leading-relaxed">
            Let us know what digital system your business needs to scale, and we will formulate an architectural roadmap within one business day.
          </p>
          <Link
            href="/contact"
            className="glass-button-primary"
          >
            Free Consultation
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

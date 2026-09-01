import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bogdan Nica — Senior Full Stack Engineer" },
      {
        name: "description",
        content:
          "Senior Full Stack & AI Engineer with 10+ years building scalable web platforms with Python, TypeScript, Django, NestJS, React and Next.js.",
      },
      { property: "og:title", content: "Bogdan Nica — Senior Full Stack Engineer" },
      {
        property: "og:description",
        content:
          "10+ years designing APIs, distributed systems and production-grade web applications across Python, TypeScript and cloud infrastructure.",
      },
    ],
  }),
  component: Index,
});

const EMAIL = "bogdannica03@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/bogdan-nica-666009427/";
const GITHUB = "https://github.com/bogdannica03/";

const stats = [
  { value: "10+", label: "Years shipping" },
  { value: "4", label: "Senior roles" },
  { value: "Full", label: "Stack ownership" },
  { value: "AI", label: "LLM integrations" },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "PHP", "SQL", "GraphQL"],
  },
  {
    title: "Backend",
    items: ["Django", "DRF", "FastAPI", "NestJS", "Express.js", "Node.js", "Microservices"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Angular", "Redux", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Data Engineering"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "Ansible", "Serverless"],
  },
  {
    title: "Practice",
    items: ["API Design", "Event-Driven Architecture", "Code Review", "Mentoring", "Agile"],
  },
];

const experience = [
  {
    company: "Optima AI",
    location: "Grand Est, France",
    role: "AI Engineer / Senior Full-Stack Engineer",
    period: "09/2024 — Present",
    points: [
      "Built scalable frontend and backend components for full-stack enterprise applications.",
      "Delivered products with TypeScript, React, Next.js, NestJS and Tailwind CSS.",
      "Designed RESTful APIs, business logic, database and third-party integrations.",
      "Ran testing, debugging, performance optimization and production support.",
    ],
  },
  {
    company: "TYMQI",
    location: "Wielkopolskie, Poland",
    role: "Senior Software Engineer / Technical Lead",
    period: "02/2020 — 06/2024",
    points: [
      "Led technical design and code reviews to ensure high-quality delivery.",
      "Built scalable REST APIs, microservices and enterprise backend services.",
      "Designed and optimized SQL Server, MySQL and MongoDB databases.",
      "Implemented AWS/Azure cloud solutions and automated release pipelines.",
    ],
  },
  {
    company: "Accedia",
    location: "Sofia, Bulgaria",
    role: "Senior Software Engineer / AI & Full-Stack Engineer",
    period: "05/2016 — 12/2019",
    points: [
      "Developed AI-powered applications and integrated LLM capabilities into business workflows.",
      "Architected distributed systems, REST APIs and automation tooling in Python and Django.",
      "Implemented AWS infrastructure, Docker containers and CI/CD pipelines.",
      "Integrated CRM systems, external APIs and authentication providers.",
    ],
  },
  {
    company: "Rigetti",
    location: "California, United States",
    role: "Senior Software Engineer / AI & Full-Stack Engineer",
    period: "05/2016 — 12/2019",
    points: [
      "Designed full-stack applications with Python, Django, TypeScript, PHP and Node.js.",
      "Built scalable REST APIs supporting business-critical systems.",
      "Developed responsive frontends with modern UI technologies.",
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-hairline bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-sm font-semibold tracking-tight">
            Bogdan Nica
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground sm:flex">
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#skills" className="transition-colors hover:text-foreground">
              Skills
            </a>
            <a href="#experience" className="transition-colors hover:text-foreground">
              Experience
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-hairline">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
          <div className="glow-orb pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full" />
          <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
            <p className="mono-label">Senior Full Stack &middot; AI Engineer</p>
            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-bold sm:text-6xl">
              <span className="text-gradient">Building scalable systems</span> from architecture to
              production.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              10+ years designing, developing and delivering web platforms with Python, TypeScript,
              Django, NestJS, React and Next.js — owning the full lifecycle from MVP to long-term
              maintenance.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get in touch
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                GitHub
              </a>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface px-5 py-6">
                  <dt className="font-display text-2xl font-semibold text-primary">{s.value}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-b border-hairline">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mono-label">01 / About</p>
            <div className="mt-8 grid gap-10 md:grid-cols-[1fr_1.4fr]">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Clean architecture, reliable systems, measurable delivery.
              </h2>
              <div className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  I specialise in backend engineering with Django, FastAPI, NestJS and Express.js,
                  paired with frontend work in React, Vue and Next.js. My focus is building reliable
                  systems through clean architecture and engineering best practices.
                </p>
                <p>
                  I design APIs, develop distributed systems, implement CI/CD workflows and monitor
                  applications to improve reliability. I work closely with cross-functional teams
                  and mentor junior developers through code reviews and technical guidance.
                </p>
                <p>
                  Additional experience spans DevOps, cloud platforms, AI/ML integrations and modern
                  automation for efficient, scalable products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-b border-hairline">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mono-label">02 / Skills</p>
            <h2 className="mt-6 text-2xl font-semibold sm:text-3xl">Technical toolkit</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="panel p-5">
                  <h3 className="font-mono text-xs tracking-widest text-primary uppercase">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-hairline bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-b border-hairline">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mono-label">03 / Experience</p>
            <h2 className="mt-6 text-2xl font-semibold sm:text-3xl">Where I&rsquo;ve worked</h2>
            <div className="mt-12 space-y-12 border-l border-hairline pl-6 sm:pl-10">
              {experience.map((job) => (
                <article key={job.company + job.period} className="relative">
                  <span className="absolute top-2 -left-[1.83rem] h-2 w-2 rounded-full bg-primary sm:-left-[2.83rem]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold">{job.company}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-primary">{job.role}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{job.location}</p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:top-2.5 before:left-0 before:h-px before:w-3 before:bg-border"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="border-b border-hairline">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mono-label">04 / Education</p>
            <div className="panel mt-8 flex flex-wrap items-baseline justify-between gap-3 p-6">
              <div>
                <h2 className="text-lg font-semibold">BSc Computer Science</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  University of California, Berkeley &middot; English (fluent)
                </p>
              </div>
              <span className="font-mono text-xs text-muted-foreground">Aug 2012 — May 2016</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden">
          <div className="glow-orb pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full" />
          <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
            <p className="mono-label">05 / Contact</p>
            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">Let&rsquo;s build something.</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              Open to senior full-stack and AI engineering roles. The fastest way to reach me is
              email.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-8 inline-block font-display text-lg font-semibold text-primary underline-offset-8 hover:underline sm:text-2xl"
            >
              {EMAIL}
            </a>
            <div className="mt-8 flex justify-center gap-3">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
              >
                LinkedIn
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-hairline">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Bogdan Nica — Senior Full Stack Engineer
        </div>
      </footer>
    </div>
  );
}

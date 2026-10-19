"use client";

import { useState, useEffect, useRef } from "react";
import { motion, type Variants, useInView } from "framer-motion";
import { ArrowUpRight, Download, Mail, MapPin, Menu, X } from "lucide-react";

/* ─── Animation variants ─────────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ─── Data ───────────────────────────────────────────────────────────── */
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

const projects = [
  {
    title: "UDAY SearchX",
    description:
      "A web search and discovery application project focused on bringing useful search experiences into one interface.",
    tech: ["Web Development", "Search UI"],
    github: "https://github.com/udaymankar/UDAY-SearchX",
    featured: true,
  },
  {
    title: "Digital Time Capsule Collective",
    description:
      "A full-stack platform for creating time-locked messages and media, with countdowns, social features, and an interactive 3D gallery.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Three.js", "Socket.io"],
    github: "https://github.com/udaymankar/Digital-time-capsule",
    featured: false,
  },
  {
    title: "ProFit Supplements",
    description:
      "A full-stack supplements e-commerce application with product browsing, filtering, cart and order flows, user accounts, and admin features.",
    tech: ["Node.js", "Express", "MongoDB", "JavaScript", "Bootstrap"],
    github: "https://github.com/udaymankar/Pro-fit-Supplements",
    featured: false,
  },
  {
    title: "UDAY Bank — Digital Passbook",
    description:
      "A Java and Spring Boot banking web app with authentication, account dashboard, deposits, withdrawals, and transaction history.",
    tech: ["Java 17", "Spring Boot", "Spring Security", "JPA", "Thymeleaf", "Maven"],
    github: "https://github.com/udaymankar/Uday-bank-Project",
    featured: false,
  },
  {
    title: "Java ATM Simulation System",
    description:
      "A console-based ATM simulation with card/PIN authentication, account locking, deposits, withdrawals, transfers, and saved transaction history.",
    tech: ["Java", "OOP", "Collections", "Serialization"],
    github: "https://github.com/udaymankar/Java_ATM-Simulation-System",
    featured: false,
  },
  {
    title: "Bank Management System",
    description:
      "A Core Java banking application with customer and admin workflows, account management, transactions, and reporting.",
    tech: ["Java", "OOP", "Collections", "File I/O"],
    github: "https://github.com/udaymankar/BankManagementSystem",
    featured: false,
  },
  {
    title: "Student Management System",
    description:
      "A console-based student records application supporting CRUD operations, marksheets, grade calculation, search, and academic reports.",
    tech: ["Java", "OOP", "Collections", "Serialization"],
    github: "https://github.com/udaymankar/StudentManagementSystem",
    featured: false,
  },
  {
    title: "Food Delivery App",
    description:
      "A responsive React frontend concept with page navigation and reusable components for a food delivery experience.",
    tech: ["React", "JavaScript", "React Router", "CSS"],
    github: "https://github.com/udaymankar/Food_Delivery_Web",
    featured: false,
  },
  {
    title: "App Generator",
    description:
      "A config-driven mini app platform designed to generate user interfaces, APIs, and database structure from JSON configuration.",
    tech: ["React", "Vite", "Node.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/udaymankar/app-generator",
    featured: false,
  },
  {
    title: "Auctioned Car",
    description:
      "A repository for an auctioned-car project. Visit the source repository for implementation details and setup instructions.",
    tech: ["Web Project"],
    github: "https://github.com/udaymankar/Auctioned-car",
    featured: false,
  },
  {
    title: "Forest Fire Detection",
    description:
      "A deep-learning project exploring forest fire detection using convolutional neural network (CNN) architecture.",
    tech: ["Python", "Deep Learning", "CNN", "Computer Vision"],
    github: "https://github.com/udaymankar/Week-1-forest-fire-detection-",
    featured: false,
  },
  {
    title: "Final Forest Fire Detection",
    description:
      "A larger forest-fire detection project repository. Review the repository for model, dataset, and implementation details.",
    tech: ["Python", "Deep Learning", "Computer Vision"],
    github: "https://github.com/udaymankar/Final-forest-fire-detection-",
    featured: false,
  },
  {
    title: "Water Quality Prediction",
    description:
      "An AICTE internship project repository focused on water-quality prediction.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    github: "https://github.com/udaymankar/Water-quality-prediction-AICTE-intern",
    featured: false,
  },
  {
    title: "AICTE Internship — Week 2",
    description:
      "A repository containing work from the second week of an AICTE internship. See the source for the exact task and implementation.",
    tech: ["Internship Project"],
    github: "https://github.com/udaymankar/Week-2_AICTE_Internship",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio website, designed as a modern editorial publication to present projects, skills, and professional background.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/udaymankar/Portfolio-Website",
    featured: false,
  },
];

const skillGroups = [
  {
    category: "Manual Testing",
    skills: [
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Integration Testing",
      "Black Box Testing",
      "UI Testing",
      "Test Case Design",
      "Positive & Negative Testing",
      "Boundary Value Analysis",
      "Test Planning & Execution",
    ],
  },
  {
    category: "Test Automation",
    skills: [
      "Selenium WebDriver",
      "Java Automation",
      "Page Object Model (POM)",
      "Automated Test Scripts",
      "Regression Automation",
    ],
  },
  {
    category: "Defect Management",
    skills: [
      "Bug Life Cycle",
      "Defect Reporting",
      "Severity & Priority",
      "Retesting",
      "Defect Tracking",
    ],
  },
  {
    category: "API & Database",
    skills: [
      "Postman",
      "REST API Testing",
      "HTTP Methods",
      "JSON",
      "SQL",
      "MySQL",
      "Joins",
      "Aggregations",
      "Data Validation",
    ],
  },
  {
    category: "Programming & Web",
    skills: ["Core Java", "OOP", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    category: "Process & Tools",
    skills: [
      "SDLC",
      "STLC",
      "Agile / Scrum",
      "Git",
      "GitHub",
      "VS Code",
      "Eclipse",
    ],
  },
];

const timeline = [
  {
    year: "2026",
    title: "Software Testing & Development",
    desc: "Building practical projects and seeking entry-level opportunities in software quality assurance and development.",
  },
  {
    year: "2022–2026",
    title: "B.Tech, Computer Science Engineering",
    desc: "Sant Gadge Baba Amravati University — studied core computer science, object-oriented programming, databases, and web technologies.",
  },
  {
    year: "2021–2022",
    title: "Higher Secondary Certificate",
    desc: "Shri Jageshwar Junior College, Wadegaon — completed HSC in Science stream.",
  },
];

const certifications = [
  {
    title: "Web Application Development Internship",
    org: "iBase Electrosoft LLP",
  },
  { title: "Programming in Java", org: "Infosys Springboard" },
  { title: "Database and SQL", org: "Infosys Springboard" },
  { title: "Learn Java Masterclass (Java 17)", org: "Udemy" },
  { title: "Software Testing", org: "Cyber Success, Pune" },
  { title: "Campus Ambassador Certification", org: "DevTown" },
];

/* ─── Helpers ────────────────────────────────────────────────────────── */
function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Components ─────────────────────────────────────────────────────── */
function SectionRule({ label }: { label: string }) {
  return (
    <div className="mb-8 border-t-2 border-[var(--ink)] pt-3">
      <span className="eyebrow">{label}</span>
    </div>
  );
}

function TechTag({ label }: { label: string }) {
  return <span className="tech-tag">{label}</span>;
}

/* ─── Page ───────────────────────────────────────────────────────────── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [edition, setEdition] = useState("");

  useEffect(() => {
    const d = new Date();
    setEdition(
      d.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen" style={{ background: "var(--ivory)" }}>
      {/* ── Mobile Menu ──────────────────────────────────────────────── */}
      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between mb-8">
          <span
            className="masthead-wordmark"
            style={{ fontSize: "1.4rem" }}
          >
            UDAY MANKAR
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-2"
            style={{ color: "var(--ink)" }}
          >
            <X size={22} />
          </button>
        </div>
        <hr className="rule mb-6" />
        <nav>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-8">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            download="Uday_Mankar_Resume.pdf"
            className="btn-primary w-full justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>
      </div>

      {/* ── Header / Masthead ────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "var(--ivory)",
          borderColor: "var(--rule)",
        }}
      >
        {/* Top bar */}
        <div
          className="border-b py-1.5 px-6 hidden md:flex items-center justify-between"
          style={{ borderColor: "var(--rule-light)" }}
        >
          <span className="meta-text">
            SOFTWARE ENGINEERING · DIGITAL PRODUCTS
          </span>
          <span className="meta-text">{edition}</span>
          <span className="avail-badge">Open to Opportunities</span>
        </div>

        {/* Main masthead row */}
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" aria-label="Home">
              <h1 className="masthead-wordmark text-3xl sm:text-4xl md:text-5xl">
                UDAY MANKAR
              </h1>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="nav-link">
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                download="Uday_Mankar_Resume.pdf"
                className="btn-outline hidden md:inline-flex"
              >
                <Download size={13} />
                Resume
              </a>
              <button
                className="md:hidden p-2"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                style={{ color: "var(--ink)" }}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile sub-bar */}
        <div
          className="md:hidden border-t px-6 py-2 flex items-center justify-between"
          style={{ borderColor: "var(--rule-light)" }}
        >
          <span className="meta-text">Software Engineering</span>
          <span className="avail-badge">Open to Opportunities</span>
        </div>
      </header>

      {/* ── Lead Story ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-4">
        <div
          className="border-t-2 border-b pt-6 pb-8 mb-0"
          style={{ borderColor: "var(--ink)", borderBottomColor: "var(--rule)" }}
        >
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16 lg:items-start">
            {/* Left: lead story */}
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.p variants={fadeUp} className="eyebrow mb-3">
                Professional Profile
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="headline-xl mb-5"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  maxWidth: "700px",
                }}
              >
                Building Software. Solving Problems. Creating Better Digital
                Experiences.
              </motion.h2>

              <motion.div
                variants={fadeUp}
                className="body-text mb-5"
                style={{ maxWidth: "560px", fontSize: "1.05rem" }}
              >
                <p>
                  I&apos;m Uday Mankar, a Computer Science Engineering graduate
                  focused on software development, Java, web technologies, and
                  building practical digital products. I enjoy turning ideas
                  into reliable applications with thoughtful design and clean
                  implementation.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex items-center gap-4 mb-6 meta-text"
              >
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={12} />
                  Pune, Maharashtra, India
                </span>
                <span
                  style={{
                    width: "1px",
                    height: "12px",
                    background: "var(--rule)",
                    display: "inline-block",
                  }}
                />
                <a
                  href="mailto:udaymankar9@gmail.com"
                  className="hover:underline transition-all"
                  style={{ color: "var(--muted)" }}
                >
                  udaymankar9@gmail.com
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-3"
              >
                <a href="#projects" className="btn-primary">
                  Explore My Work
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  download="Uday_Mankar_Resume.pdf"
                  className="btn-outline"
                >
                  <Download size={13} />
                  Read My Resume
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex gap-5 mt-5"
              >
                <a
                  href="https://github.com/udaymankar"
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                >
                  GitHub <ArrowUpRight size={11} />
                </a>
                <a
                  href="https://linkedin.com/in/udaymankar"
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                >
                  LinkedIn <ArrowUpRight size={11} />
                </a>
              </motion.div>
            </motion.div>

            {/* Right: edition highlights panel */}
            <motion.aside
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" as const }}
              className="lg:border-l lg:pl-8"
              style={{ borderColor: "var(--rule)" }}
            >
              <figure className="mb-6">
                <img
                  src="/Uday%20Passport%20photo%20og.png"
                  alt="Portrait of Uday Mankar"
                  className="w-full"
                  style={{
                    display: "block",
                    aspectRatio: "4 / 3",
                    objectFit: "cover",
                    objectPosition: "center 38%",
                    border: "1px solid var(--rule)",
                  }}
                />
                <figcaption className="meta-text mt-2">Uday Mankar · Software Testing &amp; Development</figcaption>
              </figure>
              <p className="eyebrow mb-4">Today&apos;s Edition</p>
              <div className="space-y-4">
                {[
                  { label: "Core Language", value: "Java" },
                  { label: "Projects Shipped", value: "3+" },
                  { label: "Focus Area", value: "Software Dev & Testing" },
                  { label: "Location", value: "Pune, India" },
                  { label: "Status", value: "Seeking Roles" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-2 border-b"
                    style={{ borderColor: "var(--rule-light)" }}
                  >
                    <span
                      className="meta-text"
                      style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="serif font-semibold"
                      style={{ color: "var(--ink)", fontSize: "0.9rem" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 p-4 border"
                style={{
                  borderColor: "var(--burgundy)",
                  background: "#fff9f9",
                }}
              >
                <p className="eyebrow mb-2">Current Focus</p>
                <p
                  className="serif"
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--ink-mid)",
                    lineHeight: "1.5",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;Building recruiter-friendly projects with clean code,
                  practical features, and strong fundamentals.&rdquo;
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────── */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-14">
        <AnimatedSection>
          <motion.div variants={fadeUp}>
            <SectionRule label="About" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="headline-lg mb-8"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", maxWidth: "620px" }}
          >
            The Person Behind the Code
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-[0.8fr_1fr_1fr] md:gap-10 lg:gap-14">
            <motion.figure variants={fadeUp} className="md:sticky md:top-28 md:self-start">
              <img
                src="/Uday%20Passport%20photo%20og.png"
                alt="Uday Mankar in a navy blue suit"
                className="w-full"
                style={{
                  display: "block",
                  aspectRatio: "4 / 5",
                  objectFit: "cover",
                  objectPosition: "center 35%",
                  border: "1px solid var(--rule)",
                }}
              />
              <figcaption className="meta-text mt-2">A little about the person behind the projects</figcaption>
            </motion.figure>
            <motion.div variants={fadeUp}>
              <p
                className="eyebrow mb-3"
                style={{ color: "var(--burgundy)" }}
              >
                What I Build
              </p>
              <hr style={{ borderColor: "var(--rule)", marginBottom: "1rem" }} />
              <p className="body-text" style={{ fontSize: "0.95rem" }}>
                I build frontend and backend features — from structured Java
                applications to web interfaces that feel clean and usable. My
                work spans console-based programs, web utilities, and portfolio
                experiences. I care about functionality and presentation
                equally.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p
                className="eyebrow mb-3"
                style={{ color: "var(--burgundy)" }}
              >
                How I Approach Problems
              </p>
              <hr style={{ borderColor: "var(--rule)", marginBottom: "1rem" }} />
              <p className="body-text" style={{ fontSize: "0.95rem" }}>
                I keep code organised, write reusable components, and focus on
                shipping reliable functionality. I value strong fundamentals —
                data structures, object-oriented design, and clean architecture
                — and I&apos;m always looking for the most readable, maintainable
                solution.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Projects ─────────────────────────────────────────────────── */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-14"
        style={{ borderTop: "1px solid var(--rule-light)" }}
      >
        <AnimatedSection>
          <motion.div variants={fadeUp}>
            <SectionRule label="Featured Work" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="headline-lg mb-10"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Selected Projects
          </motion.h2>

          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
            {/* Lead / featured project */}
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  className="lead-project"
                >
                  <p className="eyebrow mb-3">Lead Story · Featured Project</p>
                  <h3
                    className="headline-lg mb-3 card-headline transition-colors"
                    style={{ fontSize: "1.6rem" }}
                  >
                    {project.title}
                  </h3>
                  <p className="body-text mb-4" style={{ fontSize: "0.95rem" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <TechTag key={t} label={t} />
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    View on GitHub <ArrowUpRight size={12} />
                  </a>
                </motion.article>
              ))}

            {/* Supporting projects */}
            <div className="flex flex-col">
              {projects
                .filter((p) => !p.featured)
                .map((project, i) => (
                  <motion.article
                    key={project.title}
                    variants={fadeUp}
                    className="side-project"
                    style={{
                      borderTop:
                        i === 0
                          ? "2px solid var(--ink)"
                          : "1px solid var(--rule-light)",
                      paddingTop: "1.25rem",
                      paddingBottom: "1.25rem",
                    }}
                  >
                    <p className="eyebrow mb-2">Project</p>
                    <h3
                      className="headline-md mb-2 card-headline transition-colors"
                      style={{ fontSize: "1.15rem" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="body-text mb-3"
                      style={{ fontSize: "0.875rem" }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.map((t) => (
                        <TechTag key={t} label={t} />
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="github-link"
                    >
                      GitHub <ArrowUpRight size={11} />
                    </a>
                  </motion.article>
                ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Skills ───────────────────────────────────────────────────── */}
      <section
        id="skills"
        className="mx-auto max-w-7xl px-6 py-14"
        style={{ background: "#fff", borderTop: "1px solid var(--rule-light)" }}
      >
        <AnimatedSection>
          <motion.div variants={fadeUp}>
            <SectionRule label="Technical Desk" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="headline-lg mb-10"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Skills &amp; Technologies
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <motion.div key={group.category} variants={fadeUp}>
                <p className="eyebrow mb-3">{group.category}</p>
                <div>
                  {group.skills.map((skill) => (
                    <div key={skill} className="skill-item">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Journey ──────────────────────────────────────────────────── */}
      <section
        id="journey"
        className="mx-auto max-w-7xl px-6 py-14"
        style={{ borderTop: "1px solid var(--rule-light)" }}
      >
        <AnimatedSection>
          <motion.div variants={fadeUp}>
            <SectionRule label="Journey" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="headline-lg mb-8"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", maxWidth: "520px" }}
          >
            Education &amp; Career Direction
          </motion.h2>

          <div className="mb-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                variants={fadeUp}
                className="timeline-item"
                style={{
                  borderTop: i === 0 ? "2px solid var(--ink)" : undefined,
                }}
              >
                <div>
                  <p
                    className="serif font-bold"
                    style={{ color: "var(--burgundy)", fontSize: "0.9rem" }}
                  >
                    {item.year}
                  </p>
                </div>
                <div>
                  <h3
                    className="headline-md mb-1"
                    style={{ fontSize: "1.05rem" }}
                  >
                    {item.title}
                  </h3>
                  <p className="body-text" style={{ fontSize: "0.875rem" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div variants={fadeUp}>
            <p className="eyebrow mb-4">Certifications &amp; Learning</p>
            <div
              className="grid gap-4 sm:grid-cols-2"
              style={{ borderTop: "2px solid var(--ink)", paddingTop: "1rem" }}
            >
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="py-3 border-b"
                  style={{ borderColor: "var(--rule-light)" }}
                >
                  <p
                    className="font-semibold"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "var(--ink)",
                    }}
                  >
                    {cert.title}
                  </p>
                  <p className="meta-text mt-0.5">{cert.org}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          background: "var(--ink)",
          color: "var(--ivory)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16">
          <AnimatedSection>
            <motion.p variants={fadeUp} className="eyebrow mb-4" style={{ color: "#c9a8b0" }}>
              Contact
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="headline-xl mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                color: "var(--ivory)",
                maxWidth: "600px",
              }}
            >
              Have a Project, Opportunity, or Idea?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mb-10"
              style={{
                color: "#b0a89e",
                maxWidth: "480px",
                fontSize: "1rem",
                lineHeight: "1.7",
                fontFamily: "var(--font-sans)",
              }}
            >
              I&apos;m open to entry-level opportunities, meaningful projects, and
              conversations about software development. Fill in the form and
              I&apos;ll get back to you as soon as possible.
            </motion.p>

            <motion.div variants={fadeUp} className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              {/* Form */}
              <ContactForm />

              {/* Side info panel */}
              <div
                className="border-t lg:border-t-0 lg:border-l pt-8 lg:pt-0 lg:pl-10"
                style={{ borderColor: "rgba(250,248,244,0.12)" }}
              >
                <p className="eyebrow mb-5" style={{ color: "#c9a8b0" }}>
                  Other Ways to Reach Me
                </p>

                <div className="space-y-5">
                  {[
                    {
                      label: "Email",
                      content: (
                        <a
                          href="mailto:udaymankar9@gmail.com"
                          className="contact-link"
                          style={{ color: "var(--ivory)", fontSize: "0.9rem" }}
                        >
                          udaymankar9@gmail.com
                        </a>
                      ),
                    },
                    {
                      label: "GitHub",
                      content: (
                        <a
                          href="https://github.com/udaymankar"
                          target="_blank"
                          rel="noreferrer"
                          className="contact-link"
                          style={{ color: "var(--ivory)", fontSize: "0.9rem" }}
                        >
                          github.com/udaymankar <ArrowUpRight size={11} />
                        </a>
                      ),
                    },
                    {
                      label: "LinkedIn",
                      content: (
                        <a
                          href="https://linkedin.com/in/udaymankar"
                          target="_blank"
                          rel="noreferrer"
                          className="contact-link"
                          style={{ color: "var(--ivory)", fontSize: "0.9rem" }}
                        >
                          linkedin.com/in/udaymankar <ArrowUpRight size={11} />
                        </a>
                      ),
                    },
                    {
                      label: "Location",
                      content: (
                        <p style={{ color: "var(--ivory)", fontFamily: "var(--font-sans)", fontSize: "0.9rem" }}>
                          Pune, Maharashtra, India
                        </p>
                      ),
                    },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="pb-4 border-b"
                      style={{ borderColor: "rgba(250,248,244,0.1)" }}
                    >
                      <p
                        className="meta-text mb-1"
                        style={{ color: "#6e6560", textTransform: "uppercase", letterSpacing: "0.1em" }}
                      >
                        {row.label}
                      </p>
                      {row.content}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download="Uday_Mankar_Resume.pdf"
                    className="btn-outline"
                    style={{ color: "var(--ivory)", borderColor: "rgba(250,248,244,0.3)" }}
                  >
                    <Download size={13} />
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Footer */}
        <div
          className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 border-t"
          style={{ borderColor: "rgba(250,248,244,0.1)" }}
        >
          <p
            className="masthead-wordmark"
            style={{ fontSize: "1rem", color: "var(--ivory)" }}
          >
            UDAY MANKAR
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              color: "#6e6560",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            &copy; {new Date().getFullYear()} · Software Engineering · Pune,
            India
          </p>
        </div>
      </section>
    </div>
  );
}

/* ─── ContactForm component ──────────────────────────────────────────── */
type FormState = "idle" | "loading" | "success" | "error";

function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!fields.name.trim()) e.name = "Name is required.";
    if (!fields.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!fields.message.trim()) e.message = "Message is required.";
    else if (fields.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          subject: fields.subject,
          message: fields.message,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && (json as { success?: boolean }).success) {
        setState("success");
        setFields({ name: "", email: "", subject: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "rgba(250,248,244,0.06)",
    border: "1px solid rgba(250,248,244,0.18)",
    color: "var(--ivory)",
    fontFamily: "var(--font-sans)",
    fontSize: "0.9rem",
    padding: "0.75rem 1rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelBase: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-sans)",
    fontSize: "0.65rem",
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: "#9a9088",
    marginBottom: "0.4rem",
  };

  const errorStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: "0.72rem",
    color: "#f28b82",
    marginTop: "0.3rem",
  };

  if (state === "success") {
    return (
      <div
        style={{
          border: "1px solid rgba(165,214,167,0.4)",
          background: "rgba(46,125,50,0.12)",
          padding: "2.5rem 2rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            background: "rgba(46,125,50,0.2)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1rem",
            color: "#a5d6a7",
            fontSize: "1.4rem",
          }}
        >
          ✓
        </div>
        <p
          className="headline-md"
          style={{ color: "var(--ivory)", fontSize: "1.1rem", marginBottom: "0.5rem" }}
        >
          Message Sent
        </p>
        <p style={{ color: "#b0a89e", fontFamily: "var(--font-sans)", fontSize: "0.875rem" }}>
          Thank you for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setState("idle")}
          className="btn-outline mt-6"
          style={{ color: "var(--ivory)", borderColor: "rgba(250,248,244,0.3)" }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5">
        {/* Name + Email row */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" style={labelBase}>
              Full Name <span style={{ color: "#f28b82" }}>*</span>
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={fields.name}
              onChange={handleChange}
              style={{
                ...inputBase,
                borderColor: errors.name ? "#f28b82" : "rgba(250,248,244,0.18)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(250,248,244,0.5)")}
              onBlur={(e) =>
                (e.target.style.borderColor = errors.name
                  ? "#f28b82"
                  : "rgba(250,248,244,0.18)")
              }
            />
            {errors.name && <p style={errorStyle}>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="cf-email" style={labelBase}>
              Email Address <span style={{ color: "#f28b82" }}>*</span>
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={fields.email}
              onChange={handleChange}
              style={{
                ...inputBase,
                borderColor: errors.email ? "#f28b82" : "rgba(250,248,244,0.18)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(250,248,244,0.5)")}
              onBlur={(e) =>
                (e.target.style.borderColor = errors.email
                  ? "#f28b82"
                  : "rgba(250,248,244,0.18)")
              }
            />
            {errors.email && <p style={errorStyle}>{errors.email}</p>}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="cf-subject" style={labelBase}>
            Subject
          </label>
          <select
            id="cf-subject"
            name="subject"
            value={fields.subject}
            onChange={handleChange}
            style={{
              ...inputBase,
              appearance: "none" as const,
              cursor: "pointer",
            }}
          >
            <option value="" style={{ background: "#1a1a1a" }}>
              Select a topic…
            </option>
            <option value="Job Opportunity" style={{ background: "#1a1a1a" }}>
              Job Opportunity
            </option>
            <option value="Internship" style={{ background: "#1a1a1a" }}>
              Internship
            </option>
            <option value="Project Collaboration" style={{ background: "#1a1a1a" }}>
              Project Collaboration
            </option>
            <option value="Freelance Work" style={{ background: "#1a1a1a" }}>
              Freelance Work
            </option>
            <option value="General Inquiry" style={{ background: "#1a1a1a" }}>
              General Inquiry
            </option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="cf-message" style={labelBase}>
            Message <span style={{ color: "#f28b82" }}>*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            placeholder="Tell me about your project, opportunity, or idea…"
            value={fields.message}
            onChange={handleChange}
            style={{
              ...inputBase,
              resize: "vertical",
              minHeight: "130px",
              borderColor: errors.message ? "#f28b82" : "rgba(250,248,244,0.18)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "rgba(250,248,244,0.5)")}
            onBlur={(e) =>
              (e.target.style.borderColor = errors.message
                ? "#f28b82"
                : "rgba(250,248,244,0.18)")
            }
          />
          {errors.message && <p style={errorStyle}>{errors.message}</p>}
        </div>

        {/* Error banner */}
        {state === "error" && (
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              color: "#f28b82",
              padding: "0.6rem 0.9rem",
              border: "1px solid rgba(242,139,130,0.3)",
              background: "rgba(242,139,130,0.08)",
            }}
          >
            Something went wrong. Please try again or email me directly at udaymankar9@gmail.com
          </p>
        )}

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={state === "loading"}
            className="btn-primary"
            style={{
              background: state === "loading" ? "rgba(250,248,244,0.7)" : "var(--ivory)",
              color: "var(--ink)",
              borderColor: "var(--ivory)",
              cursor: state === "loading" ? "not-allowed" : "pointer",
              opacity: state === "loading" ? 0.8 : 1,
            }}
          >
            {state === "loading" ? (
              <>
                <span
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    border: "2px solid var(--ink)",
                    borderTopColor: "transparent",
                    borderRadius: "50%",
                    animation: "spin 0.7s linear infinite",
                  }}
                />
                Sending…
              </>
            ) : (
              <>
                <Mail size={13} />
                Send Message
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder, textarea::placeholder { color: #5a5450; }
      `}</style>
    </form>
  );
}
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
    title: "Java ATM Simulation System",
    description:
      "A console-based banking simulation featuring secure authentication, deposits, withdrawals, fund transfers, and a complete transaction history engine.",
    tech: ["Java", "OOP", "Collections", "Serialization"],
    github: "https://github.com/udaymankar/atm-simulation",
    featured: true,
  },
  {
    title: "Digital Passbook Generator",
    description:
      "A financial utility for displaying transaction data in a clean, digital passbook-style web interface.",
    tech: ["Python", "Django", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/udaymankar/digital-passbook",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing web development, interface design, and editorial presentation.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/udaymankar/portfolio-website",
    featured: false,
  },
];

const skillGroups = [
  {
    category: "Programming",
    skills: ["Java", "JavaScript", "Python"],
  },
  {
    category: "Web",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Database",
    skills: ["SQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub"],
  },
  {
    category: "Fundamentals",
    skills: ["Object-Oriented Programming", "Data Structures & Algorithms"],
  },
];

const timeline = [
  {
    year: "2026",
    title: "Software Developer",
    desc: "Actively seeking entry-level opportunities in software and web development.",
  },
  {
    year: "2022–2026",
    title: "B.Tech, Computer Science Engineering",
    desc: "RTM Nagpur University — studied core CS fundamentals, OOP, DSA, databases, and web technologies.",
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
              <p className="eyebrow mb-4">Today&apos;s Edition</p>
              <div className="space-y-4">
                {[
                  { label: "Core Language", value: "Java" },
                  { label: "Projects Shipped", value: "3+" },
                  { label: "Focus Area", value: "Software Dev" },
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

          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
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
              className="mb-8"
              style={{
                color: "#b0a89e",
                maxWidth: "480px",
                fontSize: "1rem",
                lineHeight: "1.7",
                fontFamily: "var(--font-sans)",
              }}
            >
              I&apos;m open to entry-level opportunities, meaningful projects, and
              conversations about software development.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="mailto:udaymankar9@gmail.com"
                className="btn-primary"
                style={{
                  background: "var(--ivory)",
                  color: "var(--ink)",
                  borderColor: "var(--ivory)",
                }}
              >
                <Mail size={13} />
                Email Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                download="Uday_Mankar_Resume.pdf"
                className="btn-outline"
                style={{
                  color: "var(--ivory)",
                  borderColor: "rgba(250,248,244,0.3)",
                }}
              >
                <Download size={13} />
                Resume
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-6 border-t pt-8"
              style={{ borderColor: "rgba(250,248,244,0.15)" }}
            >
              <a
                href="https://github.com/udaymankar"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                style={{ color: "#b0a89e" }}
              >
                GitHub <ArrowUpRight size={11} />
              </a>
              <a
                href="https://linkedin.com/in/udaymankar"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                style={{ color: "#b0a89e" }}
              >
                LinkedIn <ArrowUpRight size={11} />
              </a>
              <a
                href="mailto:udaymankar9@gmail.com"
                className="contact-link"
                style={{ color: "#b0a89e" }}
              >
                udaymankar9@gmail.com
              </a>
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
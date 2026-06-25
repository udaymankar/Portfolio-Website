"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Code2,
  Server,
  Database,
  Layers3,
  CheckCircle2,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const skills = [
  "Java",
  "JavaScript",
  "Python",
  "SQL",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "OOP",
  "DSA",
];

const projects = [
  {
    title: "Java ATM Simulation System",
    description:
      "A console-based banking simulation with secure authentication, deposits, withdrawals, transfers, and transaction history.",
    tech: ["Java", "OOP", "Collections", "Serialization"],
    github: "https://github.com/udaymankar/atm-simulation",
  },
  {
    title: "Digital Passbook Generator",
    description:
      "A responsive financial utility that displays transaction data in a clean and modern passbook style.",
    tech: ["Python", "Django", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/udaymankar/digital-passbook",
  },
  {
    title: "Portfolio Website",
    description:
      "A premium personal portfolio with animated sections, modern styling, and responsive layout.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/udaymankar/portfolio-website",
  },
];

const timeline = [
  {
    year: "2026",
    title: "Software Developer",
    desc: "Seeking entry-level opportunities in web and software development.",
  },
  {
    year: "2022–2026",
    title: "B.Tech CSE",
    desc: "Completed B.Tech in Computer Science Engineering from RTM, Nagpur University.",
  },
  {
    year: "2021–2022",
    title: "HSC",
    desc: "Shri Jageshwar Junior College, Wadegaon.",
  },
];

const certifications = [
  "Web Application Development Internship — iBase Electrosoft LLP",
  "Programming in Java — Infosys Springboard",
  "Database and SQL — Infosys Springboard",
  "Learn Java Masterclass (Java 17) — Udemy",
  "Software Testing — Cyber Success, Pune",
  "Campus Ambassador Certification — DevTown",
];

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-sm font-medium uppercase tracking-[0.4em] text-cyan-400/80">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-zinc-400">{subtitle}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-10 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Uday<span className="text-cyan-400"> Mankar</span>
          </a>

          <div className="hidden gap-7 text-sm text-zinc-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            download="Uday_Mankar_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20 hover:border-cyan-400/70"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </nav>
      </header>

      <section className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-20">
        <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <Sparkles className="h-4 w-4" />
              Available for internships and entry-level roles
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                Uday Mankar
              </span>
              .
              <br />
              I build modern software and polished web experiences.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Computer Science Engineering fresher with experience in Java,
              DSA, and full-stack web development. Focused on clean
              design, performance, and real-world problem solving.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-300"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                Pune, Maharashtra, India
              </span>
              <a
                href="mailto:udaymankar9@gmail.com"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                udaymankar9@gmail.com
              </a>
              <a
                href="https://github.com/udaymankar"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/udaymankar"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-white/5 to-fuchsia-500/20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <StatCard icon={<Code2 />} label="Core Skills" value="Java + Web" />
                <StatCard icon={<Server />} label="Projects" value="3+" />
                <StatCard icon={<Database />} label="Database" value="SQL" />
                <StatCard icon={<Layers3 />} label="Focus" value="Modern UI" />
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-[#050816] p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                  Current Focus
                </p>
                <p className="mt-3 text-xl font-semibold leading-8">
                  Building recruiter-friendly, high-quality projects with clean
                  design, smooth UX, and strong fundamentals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle
          eyebrow="About"
          title="A professional, modern developer profile"
          subtitle="I enjoy turning ideas into polished digital products with practical features and a premium visual experience."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          <motion.div variants={fadeUp}>
            <InfoCard
              title="What I do"
              text="I build frontend and backend features, solve logic-heavy problems, and make applications feel clean and usable."
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <InfoCard
              title="How I work"
              text="I keep code organized, write reusable components, and focus on shipping reliable functionality with a polished experience."
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <InfoCard
              title="What I want"
              text="An entry-level software role where I can learn fast, contribute to real products, and grow into a strong engineer."
            />
          </motion.div>
        </motion.div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle
          eyebrow="Skills"
          title="Tools and technologies"
          subtitle="A balanced mix of programming fundamentals, web development, and practical tools."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -2 }}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work"
          subtitle="A few projects that show problem solving, practical implementation, and a polished presentation."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 leading-7 text-zinc-300">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-black/30 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
                >
                  View on GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle
          eyebrow="Journey"
          title="Education and direction"
          subtitle="A short timeline that helps recruiters quickly understand your path."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {timeline.map((item) => (
            <motion.div
              key={item.year}
              variants={fadeUp}
              className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="text-sm text-cyan-400">{item.year}</p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="max-w-2xl text-zinc-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle
          eyebrow="Certifications"
          title="Learning and achievements"
          subtitle="A compact list of certifications and practical accomplishments."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-zinc-200"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 text-cyan-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 pb-28">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl md:p-12">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s build something great"
            subtitle="If you're hiring, collaborating, or want to connect, feel free to reach out."
          />
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:udaymankar9@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <a
              href="https://github.com/udaymankar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/udaymankar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex items-center gap-3 text-cyan-400">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
          {icon}
        </span>
        <div>
          <p className="text-sm text-zinc-400">{label}</p>
          <p className="text-lg font-semibold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/20">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-zinc-300">{text}</p>
    </div>
  );
}
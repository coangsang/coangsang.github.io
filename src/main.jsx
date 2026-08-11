import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, GitBranch, Mail, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles.css';

const profile = {
  name: 'Quang Sang Pham',
  role: 'Portfolio in progress',
  location: 'Ho Chi Minh City, Vietnam',
  hometown: 'Huong Son, Ha Tinh',
  email: 'coangsang19@gmail.com',
  dob: '19/06/2006',
};

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Vite',
  'GitHub Pages',
  'UI polish',
];

const projects = [
  {
    title: 'Personal Portfolio',
    description:
      'A fast personal site built with React, Vite, Tailwind CSS, and a compact visual system designed for easy iteration.',
    tags: ['React', 'Tailwind', 'Vite'],
    href: 'https://coangsang.github.io',
  },
  {
    title: 'Next Project Slot',
    description:
      'Use this card for a real project: add a short problem statement, your role, tech stack, and a live or GitHub link.',
    tags: ['Planned', 'Showcase'],
    href: 'mailto:coangsang19@gmail.com',
  },
];

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.16),transparent_32%)]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/78 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a className="text-sm font-semibold tracking-wide text-white" href="#top">
            coangsang
          </a>
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm text-zinc-300">
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="mx-auto grid min-h-[calc(100svh-72px)] max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-sm text-teal-200">
            <Sparkles size={16} />
            Available for learning, building, and shipping
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-normal text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-zinc-300">
            A cleaner portfolio foundation for projects, skills, and contact details. Built with pnpm, Vite, React, and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="primary-button" href="#projects">
              View projects
              <ArrowUpRight size={18} />
            </a>
            <a className="secondary-button" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              Email me
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
          className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30"
        >
          <div className="aspect-square rounded-md border border-white/10 bg-[linear-gradient(135deg,#0f766e,#18181b_44%,#be123c)] p-6">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-zinc-200/80">
                  Current focus
                </p>
                <p className="mt-3 text-3xl font-semibold leading-tight text-white">
                  Build a sharper public profile.
                </p>
              </div>
              <div className="space-y-3 text-sm text-zinc-100/86">
                <p className="flex items-center gap-2">
                  <MapPin size={16} />
                  {profile.location}
                </p>
                <p>DOB: {profile.dob}</p>
                <p>Hometown: {profile.hometown}</p>
              </div>
            </div>
          </div>
        </motion.aside>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="section-title">Simple, direct, and ready to grow.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-zinc-300">
            <p>
              Full name: {profile.name}. Currently based in Ho Chi Minh City, originally from Huong Son, Ha Tinh.
            </p>
            <p>
              Hobbies: reading books, walking, and doing nothing literally. This site is now structured so new sections, real projects, and richer visuals can be added quickly.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-kicker">Stack</p>
        <h2 className="section-title">Tools for a modern portfolio.</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-zinc-900/55">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Featured work.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <a key={project.title} className="project-card" href={project.href}>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-base leading-7 text-zinc-300">{project.description}</p>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight size={20} className="text-teal-200" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-8 rounded-lg border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="text-3xl font-semibold text-white">Let&apos;s connect.</h2>
            <p className="mt-3 text-zinc-300">Email is the best place to reach me.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="primary-button" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              {profile.email}
            </a>
            <a className="secondary-button" href="https://github.com/coangsang" target="_blank" rel="noreferrer">
              <GitBranch size={18} />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

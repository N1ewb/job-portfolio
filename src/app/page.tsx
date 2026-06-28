import stgoncThumbnail from "./assets/stgonc.png";
import databankThumbnail from "./assets/databank.png";
import Ylq from "./assets/YLQ.png";
import ProjectCard from "@/components/ProjectCard";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Python", icon: SiPython },
  { name: "Git", icon: SiGit },
];

export default function Home() {
  return (
    <div className="flex flex-col relative z-0">
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center py-10">
        <p className="mb-6 text-xl text-zinc-500 dark:text-zinc-400">
          Hi, I'm Nathaniel Lucero
        </p>
        <h1 className="mb-2 text-5xl font-bold tracking-tight sm:text-6xl">
          A Full Stack Web Developer
          <br />
          based on the Philippines.
        </h1>
        <p className="max-w-md text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          I build clean, performant web experiences with modern technologies.
        </p>
        <div className="mt-8 flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/nathaniel-lucero-a882a2369/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/N1ewb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a
            href="mailto:nathaniellucero20@gmail.com"
            className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            aria-label="Email"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01c3cd09f3b598e0da?viewMode=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            aria-label="Upwork"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
              />
            </svg>
          </a>
          <a
            href="https://v2.onlinejobs.ph/jobseekers/info/3345697"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            aria-label="OnlineJobs.ph"
          >
            OJPH
          </a>
        </div>
      </section>

      <section className="border-t border-zinc-200 px-6 py-20 dark:border-zinc-800">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-2xl font-semibold">About</h2>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            I'm a full-stack web developer from the Philippines with a
            background in Information Technology. Experienced in JavaScript
            frameworks such as React and Next.js, and skilled in building
            responsive, user-focused web applications from concept to
            deployment. I enjoy working across the stack — from designing
            intuitive interfaces to setting up databases and APIs — and I'm
            always looking for opportunities to learn and grow as a developer.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-200 px-6 py-20 dark:border-zinc-800">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-2xl font-semibold">Skills</h2>
          <p className="mb-8 text-sm leading-relaxed tracking-wide text-zinc-500 before:mr-2 before:text-zinc-300 before:content-['▸'] dark:text-zinc-400 dark:before:text-zinc-600">
            Some of the languages, technology and tools I use
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map(({ name, icon: Icon }) => (
              <span
                key={name}
                className="flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-1.5 text-sm text-zinc-700 dark:border-zinc-600 dark:text-zinc-300"
              >
                <Icon className="h-4 w-4 shrink-0" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 px-6 py-20 dark:border-zinc-800">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-2xl font-semibold">Featured Projects</h2>
          <div className="space-y-6">
            <ProjectCard
              link="https://stgonc.vercel.app"
              title="STGONC"
              description="A web-based online consultation system developed for St. Peter's College."
              image={stgoncThumbnail}
              alt="stgonc_thumbnail"
              technologies={[
                "ReactJS",
                "TailwindCSS",
                "JavaScript",
                "HTML/CSS",
                "WebRTC",
                "Firebase",
                "NoSQL",
              ]}
            />
            <ProjectCard
              link="#"
              title="SPC Data Bank"
              description="A web-based bar exam reviewer developed for St. Peter's College."
              image={databankThumbnail}
              alt="spc_databank_thumbnail"
              technologies={[
                "NextJS",
                "TailwindCSS",
                "JavaScript",
                "TypeScript",
                "HTML/CSS",
                "Postgresql",
                "Supabase",
                "Prisma",
              ]}
            />
            <ProjectCard
              link="https://ylq-gn6o.vercel.app"
              title="YLQ APP"
              description="A web-based quiz application that enables instructors to create, manage, and host live quizzes while allowing students to participate in interactive assessments and track their performance."
              image={Ylq}
              alt="YLQ_thumbnail"
              technologies={[
                "NextJS",
                "TailwindCSS",
                "JavaScript",
                "TypeScript",
                "HTML/CSS",
                "Postgresql",
                "Supabase",
                "Prisma",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 px-6 py-20 dark:border-zinc-800">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-2xl font-semibold">Work Experience</h2>
          <div className="mb-6 rounded-2xl border-2 border-zinc-200 p-10 dark:border-zinc-800">
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold">Web Developer</h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                St. Peter's College &middot; 2024 — 2025
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Built and maintained responsive web applications for St. Peter's
                College using modern JavaScript frameworks and NodeJS.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "Next.js", "NodeJS", "MySQL", "Tailwind CSS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-300 px-3 py-0.5 text-xs text-zinc-600 dark:border-zinc-600 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="mb-6 rounded-2xl border-2 border-zinc-200 p-10 dark:border-zinc-800">
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold">Web Designer</h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                St. Peter's College &middot; 2024 — 2025
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Designed wireframes, mockups, and responsive layouts for the
                college's websites.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Figma", "HTML/CSS", "JavaScript"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-300 px-3 py-0.5 text-xs text-zinc-600 dark:border-zinc-600 dark:text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-zinc-200 p-10 dark:border-zinc-800">
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold">College Instructor</h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                St. Peter's College &middot; 2025 — 2026
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Taught undergraduate courses in web development, programming,
                and information systems while guiding students in academic
                projects.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "C++",
                  "Java",
                  "HTML/CSS",
                  "API Development",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-300 px-3 py-0.5 text-xs text-zinc-600 dark:border-zinc-600 dark:text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 px-6 py-20 dark:border-zinc-800">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-2xl font-semibold">Contact</h2>
          <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            Feel free to reach out — I&apos;m always open to new opportunities
            and interesting conversations.
          </p>
          <a
            href="mailto:nathaniellucero20@gmail.com"
            className="inline-block rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}

import stgoncThumbnail from "./assets/stgonc.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
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
      </section>

      <section className="border-t border-zinc-200 px-6 py-20 dark:border-zinc-800">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-2xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
              "Python",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-300 px-4 py-1.5 text-sm text-zinc-700 dark:border-zinc-600 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 px-6 py-20 dark:border-zinc-800">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-2xl font-semibold">Featured Projects</h2>
          <div className="flex w-auto rounded-2xl border-2 border-zinc-200 p-10 dark:border-zinc-800">
            <img
              src={stgoncThumbnail.src}
              alt="stgonc_thumbnail"
              className="h-48 w-48 rounded-xl object-cover"
            />
            <div className="ml-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold">STGONC</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                A web-based online consultation system developed for St. Peter's
                College.
              </p>
            </div>
          </div>

          <div className="flex w-auto rounded-2xl border-2 border-zinc-200 p-10 dark:border-zinc-800">
            <img
              src={stgoncThumbnail.src}
              alt="stgonc_thumbnail"
              className="h-48 w-48 rounded-xl object-cover"
            />
            <div className="ml-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold">SPC Data Bank</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                A web-based bar exam reviewer developed for St. Peter's College.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 px-6 py-20 dark:border-zinc-800">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-2xl font-semibold">Work Experience</h2>
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
            href="mailto:nathaniel@example.com"
            className="inline-block rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}

import type { StaticImageData } from "next/image";

export default function ProjectCard({
  title,
  description,
  image,
  alt,
  technologies,
}: {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  technologies: string[];
}) {
  return (
    <div className="flex w-auto rounded-2xl border-2 border-zinc-200 p-10 dark:border-zinc-800">
      <img
        src={image.src}
        alt={alt}
        className="h-48 w-48 rounded-xl object-cover"
      />
      <div className="ml-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {technologies.map((tech) => (
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
  );
}

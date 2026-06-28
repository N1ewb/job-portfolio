import type { StaticImageData } from "next/image";
import Link from "next/link";

export default function ProjectCard({
  link,
  title,
  description,
  image,
  alt,
  technologies,
}: {
  link: string;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  technologies: string[];
}) {
  return (
    <div className="flex w-auto rounded-2xl border-2 border-zinc-200 p-10 dark:border-zinc-800 gap-3 flex-col items-center sm:flex-row sm:items-start">
      <Link href={link ? link : "#"} className="flex min-w-50">
        <img
          src={image.src}
          alt={alt}
          className=" object-cover h-48 w-50 rounded-xl"
        />
      </Link>
      <div className="flex flex-col justify-center gap-4">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border min-w-24 text-center border-zinc-300 px-3 py-0.5 text-xs text-zinc-600 dark:border-zinc-600 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

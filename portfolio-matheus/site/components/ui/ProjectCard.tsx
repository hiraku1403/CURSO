import Image from "next/image";

import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={`
        group
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-card/50
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-foreground/20
        hover:shadow-2xl
        ${
          featured
            ? "lg:col-span-2"
            : ""
        }
      `}
    >
      <div
        className={`
          relative
          overflow-hidden
          bg-secondary
          ${
            featured
              ? "aspect-[2/1]"
              : "aspect-video"
          }
        `}
      >
        <Image
          src={project.image}
          alt={`Imagem do projeto ${project.title}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visitar projeto ${project.title}`}
          className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ArrowUpRight size={19} />
        </a>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
              {project.category === "professional"
                ? "Projeto profissional"
                : "Projeto de estudo"}
            </p>

            <h3 className="text-xl font-bold">
              {project.title}
            </h3>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${project.title}`}
            className="shrink-0 rounded-full border border-border p-2 text-muted transition-colors hover:bg-secondary hover:text-foreground"
          >
            <ExternalLink size={16} />
          </a>
        </div>

        <p className="mt-4 text-sm leading-7 text-muted">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map(
            (technology) => (
              <span
                key={technology}
                className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-muted"
              >
                {technology}
              </span>
            ),
          )}
        </div>
      </div>
    </article>
  );
}
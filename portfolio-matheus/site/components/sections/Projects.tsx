"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "../../components/ui/ProjectCard";

import { AnimatedSection } from "../../components/ui/AnimatedSection";

import { SectionHeading } from "../../components/ui/SectionHeading";

import {
  projects,
  type ProjectCategory,
} from "../../data/projects";

type Filter = "all" | ProjectCategory;

const filters: {
  label: string;
  value: Filter;
}[] = [
  {
    label: "Todos",
    value: "all",
  },

  {
    label: "Profissionais",
    value: "professional",
  },

  {
    label: "Estudos",
    value: "study",
  },
];

export function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<Filter>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === activeFilter,
    );
  }, [activeFilter]);

  return (
    <section
      id="projetos"
      className="section-padding border-t border-border"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Projetos"
          title="Projetos que transformam ideias em experiências digitais."
          description="Uma seleção de projetos profissionais e estudos desenvolvidos ao longo da minha trajetória."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive =
              activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() =>
                  setActiveFilter(filter.value)
                }
                className={`
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  ${
                    isActive
                      ? "bg-foreground text-background"
                      : "bg-secondary text-muted hover:text-foreground"
                  }
                `}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map(
            (project, index) => (
              <AnimatedSection
                key={project.title}
                delay={index * 0.08}
              >
                <ProjectCard
                  project={project}
                  featured={project.featured}
                />
              </AnimatedSection>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
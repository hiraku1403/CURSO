import { BriefcaseBusiness } from "lucide-react";

import { experience } from "../../data/experience";

import { AnimatedSection } from "../../components/ui/AnimatedSection";

import { SectionHeading } from "../../components/ui/SectionHeading";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="section-padding border-t border-border"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Experiência"
          title="Minha trajetória profissional."
          description="Experiência combinando desenvolvimento, tecnologia, marketing digital, SEO e análise de dados."
        />

        <div className="relative">
          <div className="absolute left-[15px] top-0 hidden h-full w-px bg-border md:block" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <AnimatedSection
                key={`${item.company}-${item.period}`}
                delay={index * 0.1}
              >
                <article className="relative grid gap-6 md:grid-cols-[200px_1fr] md:gap-12">
                  <div className="relative">
                    <div className="hidden h-8 w-8 items-center justify-center rounded-full border border-border bg-background md:flex">
                      <div className="h-2 w-2 rounded-full bg-foreground" />
                    </div>

                    <p className="mt-2 text-sm font-medium text-muted md:ml-12 md:mt-[-27px]">
                      {item.period}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-xl sm:p-8">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                      <div>
                        <p className="mb-2 flex items-center gap-2 text-sm text-muted">
                          <BriefcaseBusiness size={15} />

                          {item.location}
                        </p>

                        <h3 className="text-xl font-bold">
                          {item.company}
                        </h3>

                        <p className="mt-1 font-medium text-muted">
                          {item.role}
                        </p>
                      </div>

                      <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted">
                        Experiência profissional
                      </span>
                    </div>

                    <p className="mt-6 max-w-3xl leading-8 text-muted">
                      {item.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm leading-7 text-muted"
                        >
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />

                          <span>
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
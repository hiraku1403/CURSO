import {
  CheckCircle2,
  Globe2,
} from "lucide-react";

import { AnimatedSection } from "../../components/ui/AnimatedSection";

import { SectionHeading } from "../../components/ui/SectionHeading";

import { languages } from "../../data/languages";

export function Languages() {
  return (
    <section
      id="idiomas"
      className="section-padding border-t border-border"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Idiomas"
          title="Comunicação sem fronteiras."
          description="Idiomas que fazem parte da minha trajetória profissional e acadêmica."
        />

        <div className="grid max-w-3xl gap-5 sm:grid-cols-2">
          {languages.map((language, index) => (
            <AnimatedSection
              key={language.name}
              delay={index * 0.1}
            >
              <div className="rounded-3xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary">
                    <Globe2 size={21} />
                  </div>

                  <CheckCircle2
                    size={20}
                    className="text-muted"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {language.name}
                </h3>

                <p className="mt-2 font-medium text-muted">
                  {language.level}
                </p>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {language.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
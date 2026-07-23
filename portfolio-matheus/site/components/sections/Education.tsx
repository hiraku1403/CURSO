import { AnimatedSection } from "../../components/ui/AnimatedSection";

import { EducationCard } from "../../components/ui/EducationCard";

import { SectionHeading } from "../../components/ui/SectionHeading";

import { education } from "../../data/education";

export function Education() {
  return (
    <section
      id="formacao"
      className="section-padding border-t border-border"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Formação"
          title="Aprendizado contínuo."
          description="Minha formação combina uma base sólida em Ciência da Computação com especializações contínuas em desenvolvimento, backend e análise de dados."
        />

        <div className="space-y-5">
          {education.map((item, index) => (
            <AnimatedSection
              key={`${item.institution}-${item.course}`}
              delay={index * 0.08}
            >
              <EducationCard item={item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
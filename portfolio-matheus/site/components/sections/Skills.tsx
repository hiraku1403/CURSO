import { AnimatedSection } from "../../components/ui/AnimatedSection";

import { SectionHeading } from "../../components/ui/SectionHeading";

import { SkillCard } from "../../components/ui/SkillCard";

import { skillCategories } from "../../data/skills";

export function Skills() {
  return (
    <section
      id="competencias"
      className="section-padding border-t border-border"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Competências"
          title="Uma combinação de tecnologia, dados e estratégia."
          description="Minha experiência transita entre desenvolvimento web, análise de dados, SEO, marketing digital e gestão de projetos."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map(
            (category, index) => (
              <AnimatedSection
                key={category.title}
                delay={index * 0.08}
              >
                <SkillCard
                  category={category}
                />
              </AnimatedSection>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
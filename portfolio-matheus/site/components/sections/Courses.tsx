import { AnimatedSection } from "../../components/ui/AnimatedSection";

import { CourseCard } from "../../components/ui/CourseCard";

import { SectionHeading } from "../../components/ui/SectionHeading";

import { courses } from "../../data/courses";

export function Courses() {
  return (
    <section
      id="cursos"
      className="section-padding border-t border-border"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Cursos & Certificações"
          title="Sempre buscando evoluir."
          description="Cursos e certificações complementares que ampliam minha atuação em tecnologia, marketing digital, SEO e gestão."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <AnimatedSection
              key={course.title}
              delay={index * 0.08}
            >
              <CourseCard course={course} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
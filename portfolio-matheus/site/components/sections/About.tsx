import {
  BarChart3,
  Code2,
  Lightbulb,
  Search,
} from "lucide-react";

import { profile } from "../../data/profile";

import { AnimatedSection } from "../../components/ui/AnimatedSection";

import { SectionHeading } from "../../components/ui/SectionHeading";

const areas = [
  {
    icon: Code2,

    title: "Desenvolvimento Web",

    description:
      "Construção de interfaces modernas, responsivas e performáticas utilizando tecnologias modernas do ecossistema JavaScript.",
  },

  {
    icon: Search,

    title: "SEO & Performance",

    description:
      "Experiência em otimização para mecanismos de busca, análise de dados e melhoria contínua da performance digital.",
  },

  {
    icon: BarChart3,

    title: "Analytics & Dados",

    description:
      "Utilização de dados para identificar oportunidades, acompanhar métricas e apoiar decisões estratégicas.",
  },

  {
    icon: Lightbulb,

    title: "Estratégia Digital",

    description:
      "Interface entre tecnologia, marketing, produto e conteúdo para desenvolver soluções digitais orientadas a resultados.",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      className="section-padding"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Sobre mim"
          title="Tecnologia, estratégia e resultados."
          description="Minha experiência combina desenvolvimento web, análise de dados, SEO e estratégia digital."
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <AnimatedSection>
            <div className="space-y-6 text-muted">
              <p className="text-lg leading-8">
                {profile.bio}
              </p>

              <p className="leading-8">
                Ao longo da minha trajetória profissional, desenvolvi
                projetos para diferentes segmentos, passando por
                e-commerce, sites institucionais, plataformas digitais
                e estratégias de marketing.
              </p>

              <p className="leading-8">
                Atualmente, estou aprofundando meus conhecimentos em
                React, Next.js, Python e Análise de Dados, buscando
                constantemente evoluir tecnicamente e criar soluções
                digitais cada vez melhores.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2">
            {areas.map((area, index) => {
              const Icon = area.icon;

              return (
                <AnimatedSection
                  key={area.title}
                  delay={index * 0.1}
                >
                  <div className="group h-full rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-foreground">
                      <Icon size={21} />
                    </div>

                    <h3 className="font-semibold">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {area.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
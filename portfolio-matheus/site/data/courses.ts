export interface Course {
  title: string;

  institution: string;

  year: string;

  description: string;
}

export const courses: Course[] = [
  {
    title:
      "Formação em Desenvolvimento Frontend com React/Angular e Node.js",

    institution: "EBAC",

    year: "2026",

    description:
      "Aprofundamento em desenvolvimento frontend moderno e tecnologias do ecossistema JavaScript.",
  },

  {
    title:
      "Marketing de Conteúdo: Inbound Marketing e SEO Estratégico",

    institution: "Curso de especialização",

    year: "2022",

    description:
      "Estratégias de conteúdo, inbound marketing e otimização para mecanismos de busca.",
  },

  {
    title:
      "Certificação SEMRush — SEO e Análise de Dados",

    institution: "SEMRush",

    year: "2021",

    description:
      "Certificação relacionada à utilização de SEO, análise de dados e ferramentas de marketing digital.",
  },

  {
    title:
      "Google Analytics Individual Qualification",

    institution: "Google",

    year: "2020",

    description:
      "Certificação relacionada à análise de dados e métricas digitais utilizando Google Analytics.",
  },

  {
    title:
      "Gestão de Projetos: Metodologias Ágeis e Scrum",

    institution: "Curso de especialização",

    year: "2019",

    description:
      "Fundamentos de gestão de projetos, metodologias ágeis e Scrum.",
  },
];
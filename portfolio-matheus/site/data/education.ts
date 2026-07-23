import {
  BookOpen,
  GraduationCap,
  Laptop,
} from "lucide-react";

export interface Education {
  institution: string;
  course: string;
  period: string;
  description: string;
  icon: typeof GraduationCap;
  status?: string;
}

export const education: Education[] = [
  {
    institution:
      "EBAC — Escola Britânica de Artes Criativas e Tecnologia",

    course:
      "Formação Profissional em Desenvolvimento Frontend com React, Next.js e Angular JS",

    period:
      "Jun/2025 – Jun/2026",

    description:
      "Aprofundamento em desenvolvimento frontend moderno, construção de interfaces e aplicações web utilizando o ecossistema JavaScript.",

    icon: Laptop,

    status: "Em andamento",
  },

  {
    institution:
      "EBAC — Escola Britânica de Artes Criativas e Tecnologia",

    course:
      "Formação Profissional em Desenvolvimento Backend com Python",

    period:
      "Dez/2025 – Nov/2026",

    description:
      "Formação voltada ao desenvolvimento backend utilizando Python e conceitos de construção de aplicações e sistemas.",

    icon: Laptop,

    status: "Em andamento",
  },

  {
    institution:
      "EBAC — Escola Britânica de Artes Criativas e Tecnologia",

    course:
      "Formação Profissional em Análise de Dados com Python",

    period:
      "Fev/2026 – Jan/2027",

    description:
      "Formação voltada à análise de dados, programação com Python e interpretação de informações para geração de insights.",

    icon: BookOpen,

    status: "Em andamento",
  },

  {
    institution:
      "Universidade La Salle Canoas",

    course:
      "Bacharelado em Ciência da Computação",

    period:
      "2009 – 2014",

    description:
      "Formação superior em Ciência da Computação, com base em fundamentos de tecnologia, programação e sistemas.",

    icon: GraduationCap,

    status: "Concluído",
  },

  {
    institution:
      "QI Faculdade & Escola Técnica",

    course:
      "Técnico em Informática",

    period:
      "2009",

    description:
      "Formação técnica na área de informática e tecnologia.",

    icon: Laptop,

    status: "Concluído",
  },
];
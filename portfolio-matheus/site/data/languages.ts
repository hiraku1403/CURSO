export interface Language {
  name: string;

  level: string;

  description: string;
}

export const languages: Language[] = [
  {
    name: "Português",

    level: "Nativo",

    description:
      "Idioma nativo.",
  },

  {
    name: "Inglês",

    level: "Avançado",

    description:
      "Avançado, incluindo conversação.",
  },
];
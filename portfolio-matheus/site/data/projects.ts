export type ProjectCategory =
  | "professional"
  | "study";

export interface Project {
  title: string;

  description: string;

  category: ProjectCategory;

  technologies: string[];

  url: string;

  image: string;

  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Natural Nuts",

    description:
      "Desenvolvimento de template de e-commerce para integração com a plataforma Shopify.",

    category: "professional",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Shopify",
    ],

    url: "https://naturalnuts.com.br/",

    image: "/projects/natural-nuts.jpg",

    featured: true,
  },

  {
    title: "QIX Skate Shop",

    description:
      "Desenvolvimento de template de e-commerce integrado à plataforma Magento.",

    category: "professional",

    technologies: [
      "Next.js",
      "Node.js",
      "React",
      "Magento",
    ],

    url: "https://qixskateshop.com.br/",

    image: "/projects/qix-skate-shop.jpg",

    featured: true,
  },

  {
    title: "Chua Brand",

    description:
      "Alteração e evolução de layout de e-commerce desenvolvido utilizando Python e React JS.",

    category: "professional",

    technologies: [
      "Python",
      "React",
      "SCSS",
      "CSS-in-JS",
    ],

    url: "https://www.chuabrand.com.br/",

    image: "/projects/chua-brand.jpg",
  },

  {
    title: "Grafiset",

    description:
      "Desenvolvimento de frontend para site institucional.",

    category: "professional",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    url: "https://grafiset.com.br/",

    image: "/projects/grafiset.jpg",
  },

  {
    title: "Instituto da Transformação",

    description:
      "Desenvolvimento de frontend e backend para site institucional utilizando PHP e React JS.",

    category: "professional",

    technologies: [
      "PHP",
      "React",
      "JavaScript",
    ],

    url: "https://www.institutodatransformacao.com.br/",

    image: "/projects/instituto-transformacao.jpg",
  },

  {
    title: "Articles Next",

    description:
      "Desenvolvimento de frontend para sistema de artigos utilizando Next.js, SCSS e React JS.",

    category: "study",

    technologies: [
      "Next.js",
      "React",
      "SCSS",
    ],

    url: "https://articles-next-ecru.vercel.app/",

    image: "/projects/articles-next.jpg",

    featured: true,
  },

  {
    title: "Estratégia de Otimização de SEO",

    description:
      "Otimização de mecanismos de busca aplicando estratégias de SEO, resultando em aumento de 70% nas visualizações em comparação aos três meses anteriores.",

    category: "study",

    technologies: [
      "SEO",
      "Google Analytics",
      "Content Strategy",
    ],

    url: "https://www.institutodatransformacao.com.br/",

    image: "/projects/seo-strategy.jpg",
  },

  {
    title: "Blog para E-commerce",

    description:
      "Desenvolvimento de estratégia de inbound marketing para blog de e-commerce, contribuindo para aumento de 20% na conversão.",

    category: "study",

    technologies: [
      "Inbound Marketing",
      "SEO",
      "Content Marketing",
    ],

    url: "https://qixskateshop.com.br/blogs/news",

    image: "/projects/qix-blog.jpg",
  },

  {
    title: "Agência de Viagens",

    description:
      "Desenvolvimento frontend para site de agência de viagens utilizando Next.js, SCSS e Node.js.",

    category: "study",

    technologies: [
      "Next.js",
      "SCSS",
      "Node.js",
    ],

    url: "https://agencia-de-viagens-azure.vercel.app",

    image: "/projects/travel-agency.jpg",

    featured: true,
  },
];
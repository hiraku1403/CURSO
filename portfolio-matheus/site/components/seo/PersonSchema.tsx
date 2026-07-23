import { profile } from "../../data/profile";

export function PersonSchema() {
  const schema = {
    "@context":
      "https://schema.org",

    "@type": "Person",

    name: profile.name,

    jobTitle:
      "Desenvolvedor Frontend e Analista de Dados",

    email:
      `mailto:${profile.email}`,

    url:
      "https://seu-portfolio.vercel.app",

    sameAs: [
      profile.social.linkedin,

      profile.social.github,
    ],

    knowsAbout: [
      "Frontend Development",

      "React",

      "Next.js",

      "JavaScript",

      "SEO",

      "Google Analytics",

      "Data Analysis",

      "Digital Marketing",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          schema,
        ),
      }}
    />
  );
}
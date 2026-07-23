import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import { PersonSchema } from "../components/seo/PersonSchema";

const inter = Inter({
  variable: "--font-inter",

  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://seu-portfolio.vercel.app",
  ),

  title: {
    default:
      "Matheus Henn | Desenvolvedor Frontend & Analista de Dados",

    template:
      "%s | Matheus Henn",
  },

  description:
    "Portfólio de Matheus Henn — Desenvolvedor Frontend, Analista de Dados e profissional de Marketing Digital. Especialista em React, Next.js, JavaScript, SEO, Analytics e estratégias digitais.",

  keywords: [
    "Matheus Henn",
    "Desenvolvedor Frontend",
    "Desenvolvedor React",
    "Desenvolvedor Next.js",
    "Analista de Dados",
    "Analista de SEO",
    "Marketing Digital",
    "JavaScript",
    "React",
    "Next.js",
    "Google Analytics",
    "SEO",
  ],

  authors: [
    {
      name: "Matheus Henn",
    },
  ],

  creator: "Matheus Henn",

  openGraph: {
    type: "website",

    locale: "pt_BR",

    url: "https://seu-portfolio.vercel.app",

    title:
      "Matheus Henn | Desenvolvedor Frontend & Analista de Dados",

    description:
      "Portfólio profissional de Matheus Henn, com experiência em desenvolvimento web, análise de dados, SEO e marketing digital.",

    siteName:
      "Matheus Henn — Portfolio",

    images: [
      {
        url: "/og-image.jpg",

        width: 1200,

        height: 630,

        alt:
          "Matheus Henn — Desenvolvedor Frontend e Analista de Dados",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Matheus Henn | Desenvolvedor Frontend & Analista de Dados",

    description:
      "Portfólio profissional de Matheus Henn.",

    images: [
      "/og-image.jpg",
    ],
  },

  robots: {
    index: true,

    follow: true,

    googleBot: {
      index: true,

      follow: true,

      "max-image-preview":
        "large",

      "max-snippet": -1,

      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
    >
      <body
  className={`${inter.variable} antialiased`}
>
  <PersonSchema />

  {children}
</body>
    </html>
  );
}
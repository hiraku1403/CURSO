import { Footer } from "../components/layout/Footer";

import { Navbar } from "../components/layout/Navbar";

import { About } from "../components/sections/About";

import { Contact } from "../components/sections/Contact";

import { Courses } from "../components/sections/Courses";

import { Education } from "../components/sections/Education";

import { Experience } from "../components/sections/Experience";

import { Hero } from "../components/sections/Hero";

import { Languages } from "../components/sections/Languages";

import { Projects } from "../components/sections/Projects";

import { Skills } from "../components/sections/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Experience />

        <Projects />

        <Skills />

        <Education />

        <Courses />

        <Languages />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
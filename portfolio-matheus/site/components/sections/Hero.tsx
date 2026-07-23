"use client";

import {
  ArrowDown,
  ArrowRight,
  Download,
  MapPin,
} from "lucide-react";

import { motion } from "framer-motion";

import { profile } from "../../data/profile";

import { stats } from "../../data/stats";

import { AnimatedSection } from "../ui/AnimatedSection";

import { Badge } from "../ui/Badge";

import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        pt-32
        pb-20
      "
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="container-custom">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          
          <div>
            <AnimatedSection>
              <Badge className="mb-6">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500" />

                {profile.availability}
              </Badge>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-muted">
                Olá, eu sou
              </p>
            </AnimatedSection>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
  {profile.name.split(" ")[0]}

  <br />

  <span className="gradient-text">
    {profile.name
      .split(" ")
      .slice(-2)
      .join(" ")}
  </span>
</h1>

            <AnimatedSection delay={0.3}>
              <h2 className="mt-6 text-xl font-medium text-muted sm:text-2xl">
                {profile.role}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {profile.description}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href="#projetos"
                  className="group"
                >
                  Ver meus projetos

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>

                <Button
                  href="/resume.pdf"
                  variant="secondary"
                  download
                >
                  <Download size={18} />

                  Download CV
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="mt-8 flex items-center gap-2 text-sm text-muted">
                <MapPin size={16} />

                {profile.location}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection
            delay={0.3}
            className="relative"
          >
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 blur-2xl" />

              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-card/60 p-8 backdrop-blur-xl">
                <div className="absolute inset-0 grid-background opacity-50" />

                <div className="relative z-10 text-center">
                  <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-border bg-secondary text-4xl font-bold">
                    MH
                  </div>

                  <p className="text-lg font-semibold">
                    {profile.shortName}
                  </p>

                  <p className="mt-2 text-sm text-muted">
                    {profile.role}
                  </p>
                </div>

                <div className="absolute left-1/2 top-10 -translate-x-1/2 rounded-xl border border-border bg-card px-4 py-3 text-center shadow-xl">
                    <p className="text-xs text-muted">
                        Stack principal
                    </p>

                    <p className="mt-1 font-semibold">
                        React + Next.js
                    </p>
                </div>

                <div className="absolute bottom-8 left-1/2 z-20 w-max -translate-x-1/2 rounded-xl border border-border bg-card px-4 py-3 text-center shadow-xl">
                    <p className="text-xs text-muted">
                        Foco
                    </p>

                    <p className="mt-1 font-semibold">
                        Performance & SEO
                    </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.7}>
          <div className="mt-20 grid grid-cols-2 gap-4 border-t border-border pt-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center md:text-left"
              >
                <p className="text-2xl font-bold sm:text-3xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs text-muted sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <motion.a
          href="#sobre"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
          }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted md:flex"
        >
          Scroll para explorar

          <ArrowDown
            size={16}
            className="animate-bounce"
          />
        </motion.a>
      </div>
    </section>
  );
}
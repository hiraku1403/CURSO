import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { profile } from "../../data/profile";

import { AnimatedSection } from "../../components/ui/AnimatedSection";

import { ContactForm } from "../../components/ui/ContactForm";

import { SectionHeading } from "../../components/ui/SectionHeading";

export function Contact() {
  return (
    <section
      id="contato"
      className="section-padding border-t border-border"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar?"
          description="Se você tem uma oportunidade, projeto ou simplesmente quer trocar uma ideia, envie uma mensagem."
        />

        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold">
                  Entre em contato
                </h3>

                <p className="mt-4 leading-8 text-muted">
                  Estou aberto a conversar sobre novas oportunidades profissionais, projetos digitais, desenvolvimento web e estratégias de crescimento.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Mail size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-muted">
                      E-mail
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      {profile.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${profile.phone.replace(
                    /\D/g,
                    "",
                  )}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Phone size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-muted">
                      Telefone
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      {profile.phone}
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/matheus-henn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-foreground group-hover:text-background">
                    <span className="text-sm font-bold">
                      in
                    </span>
                  </div>

                  <div>
                    <p className="text-xs text-muted">
                      LinkedIn
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      linkedin.com/in/matheus-henn
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/hiraku1403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-foreground group-hover:text-background">
                    <span className="text-sm font-bold">
                      GH
                    </span>
                  </div>

                  <div>
                    <p className="text-xs text-muted">
                      GitHub
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      github.com/hiraku1403
                    </p>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm text-muted">
                <MapPin size={17} />

                {profile.location}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="rounded-3xl border border-border bg-card/50 p-6 sm:p-8">
              <h3 className="mb-6 text-xl font-bold">
                Envie uma mensagem
              </h3>

              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
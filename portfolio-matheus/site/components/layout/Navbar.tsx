"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  {
    label: "Sobre",
    href: "#sobre",
  },

  {
    label: "Experiência",
    href: "#experiencia",
  },

  {
    label: "Projetos",
    href: "#projetos",
  },

  {
    label: "Competências",
    href: "#competencias",
  },

  {
    label: "Formação",
    href: "#formacao",
  },

  {
    label: "Contato",
    href: "#contato",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container-custom flex h-20 items-center justify-between">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="text-lg font-bold tracking-tight"
        >
          Matheus Henn
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-colors hover:bg-secondary md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-custom flex flex-col py-4">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-border py-4 text-sm text-muted transition-colors last:border-b-0 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
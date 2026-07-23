import Link from "next/link";

import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-custom flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/"
            className="font-bold"
          >
            Matheus Henn
          </Link>

          <p className="mt-2 text-sm text-muted">
            Desenvolvedor Full Stack & Analista de Dados
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:sartorhenn@gmail.com"
            aria-label="Enviar e-mail"
            className="rounded-full border border-border px-4 py-3 text-sm transition-colors hover:bg-secondary"
          >
            <span className="flex items-center gap-2">
              <Mail size={17} />

              E-mail
            </span>
          </a>

          <a
            href="https://github.com/hiraku1403"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-border px-4 py-3 text-sm transition-colors hover:bg-secondary"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/matheus-henn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-border px-4 py-3 text-sm transition-colors hover:bg-secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Matheus Henn. Todos os direitos reservados.
      </div>
    </footer>
  );
}
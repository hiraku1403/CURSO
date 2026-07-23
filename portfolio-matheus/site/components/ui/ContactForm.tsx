"use client";

import {
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";

import {
  FormEvent,
  useState,
} from "react";

interface FormData {
  name: string;

  email: string;

  subject: string;

  message: string;
}

const initialFormData: FormData = {
  name: "",

  email: "",

  subject: "",

  message: "",
};

export function ContactForm() {
  const [formData, setFormData] =
    useState<FormData>(
      initialFormData,
    );

  const [isLoading, setIsLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState("");

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) {
    const {
      name,
      value,
    } = event.target;

    setFormData((current) => ({
      ...current,

      [name]: value,
    }));

    setError("");

    setSuccess(false);
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setIsLoading(true);

    setError("");

    setSuccess(false);

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(formData),
        },
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Não foi possível enviar a mensagem.",
        );
      }

      setSuccess(true);

      setFormData(initialFormData);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao enviar a mensagem.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium"
          >
            Nome
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted focus:border-foreground"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium"
          >
            E-mail
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted focus:border-foreground"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium"
        >
          Assunto
        </label>

        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="Como posso ajudar?"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted focus:border-foreground"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium"
        >
          Mensagem
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={7}
          value={formData.message}
          onChange={handleChange}
          placeholder="Escreva sua mensagem..."
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted focus:border-foreground"
        />
      </div>

      {error && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500">
          {error}
        </div>
      )}

      {success && (
        <div className="flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-600">
          <CheckCircle2 size={18} />

          Mensagem enviada com sucesso!
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isLoading ? (
          <>
            <Loader2
              size={18}
              className="animate-spin"
            />

            Enviando...
          </>
        ) : (
          <>
            <Send size={18} />

            Enviar mensagem
          </>
        )}
      </button>
    </form>
  );
}
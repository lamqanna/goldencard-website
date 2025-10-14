"use client";

import { useState } from "react";

import type { Locale } from "@/lib/i18n";

interface ContactFormProps {
  locale: Locale;
  placeholders: {
    form_placeholder_name: string;
    form_placeholder_email: string;
    form_placeholder_phone: string;
    form_placeholder_company: string;
    form_placeholder_message: string;
    button_submit_form: string;
    form_success_message: string;
    form_error_message: string;
  };
}

export function ContactForm({ locale, placeholders }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("locale", locale);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed request");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
      aria-live="polite"
    >
      <div className="grid gap-3 md:grid-cols-2">
        <label className="flex flex-col">
          <span className="sr-only">{placeholders.form_placeholder_name}</span>
          <input
            required
            name="name"
            placeholder={placeholders.form_placeholder_name}
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm shadow-inner focus-visible:border-primary"
            autoComplete="name"
            aria-required="true"
          />
        </label>
        <label className="flex flex-col">
          <span className="sr-only">{placeholders.form_placeholder_email}</span>
          <input
            required
            type="email"
            name="email"
            placeholder={placeholders.form_placeholder_email}
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm shadow-inner focus-visible:border-primary"
            autoComplete="email"
            aria-required="true"
          />
        </label>
        <label className="flex flex-col">
          <span className="sr-only">{placeholders.form_placeholder_phone}</span>
          <input
            required
            name="phone"
            placeholder={placeholders.form_placeholder_phone}
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm shadow-inner focus-visible:border-primary"
            autoComplete="tel"
            aria-required="true"
          />
        </label>
        <label className="flex flex-col">
          <span className="sr-only">{placeholders.form_placeholder_company}</span>
          <input
            name="company"
            placeholder={placeholders.form_placeholder_company}
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm shadow-inner focus-visible:border-primary"
            autoComplete="organization"
          />
        </label>
      </div>
      <label className="flex flex-col">
        <span className="sr-only">{placeholders.form_placeholder_message}</span>
        <textarea
          required
          name="message"
          placeholder={placeholders.form_placeholder_message}
          className="h-32 rounded-xl border border-border bg-background px-4 py-3 text-sm shadow-inner focus-visible:border-primary"
          aria-required="true"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
        >
          {placeholders.button_submit_form}
        </button>
        {status === "success" ? (
          <p className="text-sm font-medium text-primary/90">
            {placeholders.form_success_message}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm font-medium text-destructive/90">
            {placeholders.form_error_message}
          </p>
        ) : null}
      </div>
      <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
    </form>
  );
}

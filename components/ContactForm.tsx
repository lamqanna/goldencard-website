"use client";

import { useState } from "react";
import { Send } from "lucide-react";

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
      className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-card to-card/50 p-8 shadow-lg shadow-primary/5 backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10"
      aria-live="polite"
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/5 blur-2xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-accent/5 blur-2xl" aria-hidden="true" />
      
      <div className="relative grid gap-5 md:grid-cols-2">
        <label className="group flex flex-col">
          <span className="sr-only">{placeholders.form_placeholder_name}</span>
          <input
            required
            name="name"
            placeholder={placeholders.form_placeholder_name}
            className="rounded-xl border border-border/60 bg-background/80 px-4 py-3.5 text-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground/60 focus-visible:border-primary/50 focus-visible:shadow-md focus-visible:shadow-primary/10 focus-visible:outline-none"
            autoComplete="name"
            aria-required="true"
          />
        </label>
        
        <label className="group flex flex-col">
          <span className="sr-only">{placeholders.form_placeholder_email}</span>
          <input
            required
            type="email"
            name="email"
            placeholder={placeholders.form_placeholder_email}
            className="rounded-xl border border-border/60 bg-background/80 px-4 py-3.5 text-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground/60 focus-visible:border-primary/50 focus-visible:shadow-md focus-visible:shadow-primary/10 focus-visible:outline-none"
            autoComplete="email"
            aria-required="true"
          />
        </label>
        
        <label className="group flex flex-col">
          <span className="sr-only">{placeholders.form_placeholder_phone}</span>
          <input
            required
            name="phone"
            placeholder={placeholders.form_placeholder_phone}
            className="rounded-xl border border-border/60 bg-background/80 px-4 py-3.5 text-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground/60 focus-visible:border-primary/50 focus-visible:shadow-md focus-visible:shadow-primary/10 focus-visible:outline-none"
            autoComplete="tel"
            aria-required="true"
          />
        </label>
        
        <label className="group flex flex-col">
          <span className="sr-only">{placeholders.form_placeholder_company}</span>
          <input
            name="company"
            placeholder={placeholders.form_placeholder_company}
            className="rounded-xl border border-border/60 bg-background/80 px-4 py-3.5 text-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground/60 focus-visible:border-primary/50 focus-visible:shadow-md focus-visible:shadow-primary/10 focus-visible:outline-none"
            autoComplete="organization"
          />
        </label>
      </div>
      
      <label className="relative mt-5 flex flex-col">
        <span className="sr-only">{placeholders.form_placeholder_message}</span>
        <textarea
          required
          name="message"
          placeholder={placeholders.form_placeholder_message}
          className="h-36 resize-none rounded-xl border border-border/60 bg-background/80 px-4 py-3.5 text-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground/60 focus-visible:border-primary/50 focus-visible:shadow-md focus-visible:shadow-primary/10 focus-visible:outline-none"
          aria-required="true"
        />
      </label>
      
      <div className="relative mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/90 px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-100"
        >
          {placeholders.button_submit_form}
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
        
        {status === "success" ? (
          <p className="flex items-center gap-2 text-sm font-medium text-accent">
            <span className="flex h-2 w-2 rounded-full bg-accent" />
            {placeholders.form_success_message}
          </p>
        ) : null}
        
        {status === "error" ? (
          <p className="flex items-center gap-2 text-sm font-medium text-destructive">
            <span className="flex h-2 w-2 rounded-full bg-destructive" />
            {placeholders.form_error_message}
          </p>
        ) : null}
      </div>
      
      <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
    </form>
  );
}

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  summary?: string;
  benefits?: string[];
  technicalPoints?: string[];
  icon?: ReactNode;
  className?: string;
  benefitsLabel?: string;
  technicalLabel?: string;
}

export function ServiceCard({
  title,
  summary = "",
  benefits = [],
  technicalPoints = [],
  icon,
  className,
  benefitsLabel = "Key benefits",
  technicalLabel = "Technical focus",
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col gap-6 rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition hover:border-primary/70",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        {icon ? <span className="text-primary">{icon}</span> : null}
        <div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          {summary ? <p className="mt-2 text-sm text-muted-foreground">{summary}</p> : null}
        </div>
      </div>
      <div className="space-y-3 text-sm">
        {benefits.length > 0 ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">
              {benefitsLabel}
            </p>
            <ul className="mt-2 space-y-2 text-foreground/80">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2">
                  <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {technicalPoints.length > 0 ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">
              {technicalLabel}
            </p>
            <ul className="mt-2 space-y-2 text-foreground/80">
              {technicalPoints.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary/80" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}

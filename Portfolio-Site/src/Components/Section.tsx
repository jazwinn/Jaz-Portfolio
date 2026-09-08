import type { ReactNode } from "react";
import useReveal from "../hooks/useReveal";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

/** Shared section shell: numbered mono label, heading, hairline, revealed body. */
export default function Section({
  id,
  index,
  title,
  intro,
  children,
  className = "",
}: SectionProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id={id}
      className={`relative py-24 sm:py-28 px-6 sm:px-10 lg:px-16 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <header className="reveal mb-14">
          <div className="flex items-center gap-4">
            <span className="label">{index}</span>
            <span className="h-px flex-1 hairline" />
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 max-w-2xl text-lg sm:text-xl leading-relaxed text-dim">
              {intro}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

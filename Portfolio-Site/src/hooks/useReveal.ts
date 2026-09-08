import { useEffect, useRef } from "react";

/**
 * Adds `is-visible` to every `.reveal` descendant as it scrolls into view,
 * staggering siblings so a grid resolves row by row rather than all at once.
 */
export default function useReveal<T extends HTMLElement>(stagger = 90) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    if (targets.length === 0) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, index) => {
            const el = entry.target as HTMLElement;
            el.style.transitionDelay = `${index * stagger}ms`;
            el.classList.add("is-visible");
            observer.unobserve(el);
          });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [stagger]);

  return ref;
}

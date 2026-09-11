import { useEffect, useRef, useState } from "react";

/**
 * Small helper hook: adds a fade/slide-up animation when an element
 * scrolls into the viewport. Frontend-only, no dependencies.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, className: visible ? "reveal reveal-visible" : "reveal" };
}

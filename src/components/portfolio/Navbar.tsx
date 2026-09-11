import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/portfolio";

/** Smoothly scrolls to a section by id. */
export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  // Shrink / add background to the navbar once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8"
      >
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="flex min-w-0 items-center gap-3 text-left"
          aria-label="Go to top"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow">
            AP
          </span>
          <span className="truncate text-sm font-semibold tracking-wide text-muted-foreground">
            Aleksandar Perošević
          </span>
        </button>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleNavClick(item.id)}
                aria-current={active === item.id ? "true" : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-foreground ${
                  active === item.id ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-primary transition-transform duration-300 ${
                    active === item.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-primary md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-border/70 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-80 border-b opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 pb-5 sm:px-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-secondary ${
                  active === item.id ? "bg-secondary text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

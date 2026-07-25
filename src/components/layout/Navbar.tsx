import { motion, useScroll, useSpring } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/constants/site";
import { useI18n } from "@/hooks/use-i18n";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t, lang, toggleLang } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0.1, 0.4, 0.8] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-[var(--gradient-brand)]"
      />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-2" : "py-4",
        )}
      >
        <nav
          aria-label="Principal"
          className={cn(
            "mx-auto flex w-[min(1180px,92vw)] items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500",
            scrolled ? "glass-strong shadow-[var(--shadow-soft)]" : "bg-transparent",
          )}
        >
          <a
            href="#inicio"
            className="group flex items-center gap-3"
            aria-label={SITE.name}
          >
            <span className="ring-gradient relative grid size-10 place-items-center rounded-xl bg-[var(--gradient-brand)] font-mono text-sm font-bold text-primary-foreground shadow-[var(--glow-primary)]">
              {SITE.initials}
            </span>
            <span className="hidden text-sm leading-tight font-semibold sm:block">
              {SITE.name}
              <span className="block text-xs font-normal text-muted-foreground">
                {SITE.role}
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                    active === link.id && "text-foreground",
                  )}
                >
                  {t(link.key)}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-0.5 h-px bg-[var(--gradient-brand)]"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              aria-label={t("a11y.lang")}
              className="glass inline-flex min-h-11 items-center gap-1.5 rounded-xl px-3 text-xs font-semibold transition-transform hover:scale-105"
            >
              <Languages className="size-4 text-accent" aria-hidden />
              {lang.toUpperCase()}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t("a11y.theme")}
              className="glass inline-grid size-11 place-items-center rounded-xl transition-transform hover:scale-105"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.25 }}
                  className="grid place-items-center"
                >
                  {theme === "dark" ? (
                    <Sun className="size-4 text-accent" aria-hidden />
                  ) : (
                    <Moon className="size-4 text-primary" aria-hidden />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
            <a
              href="#contacto"
              className="hidden rounded-xl bg-[var(--gradient-brand)] px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] transition-transform hover:scale-105 md:inline-flex"
            >
              {t("nav.cta")}
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={t("a11y.menu")}
              aria-expanded={open}
              className="glass inline-grid size-11 place-items-center rounded-xl lg:hidden"
            >
              {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="glass-strong mx-auto mt-2 w-[min(1180px,92vw)] overflow-hidden rounded-2xl p-3 lg:hidden"
            >
              <ul className="grid gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {t(link.key)}
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    to="/"
                    hash="contacto"
                    onClick={() => setOpen(false)}
                    className="mt-1 block rounded-xl bg-[var(--gradient-brand)] px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
                  >
                    {t("nav.cta")}
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

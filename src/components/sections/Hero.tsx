import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import heroImg from "@/assets/hero-developer.png";
import { SITE } from "@/constants/site";
import { useI18n } from "@/hooks/use-i18n";
import { Typewriter } from "@/components/ui-kit/Typewriter";
import { SocialLinks } from "@/components/layout/SocialLinks";

const WORDS_ES = [
  "Desarrollador Full Stack",
  "Software Engineer",
  "React Developer",
  "Backend Developer",
  "API Developer",
  "Problem Solver",
];
const WORDS_EN = [
  "Full Stack Developer",
  "Software Engineer",
  "React Developer",
  "Backend Developer",
  "API Developer",
  "Problem Solver",
];

export function Hero() {
  const { t, lang } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-dvh items-center overflow-hidden pt-32 pb-20"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div style={{ y: yText, opacity }} className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {t("hero.badge")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl leading-[1.05] font-bold text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {t("hero.title1")}{" "}
            <span className="text-gradient">{t("hero.title2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.85, duration: 0.7 }}
            className="mt-5 min-h-[2.25rem] font-mono text-lg sm:text-xl"
            aria-live="polite"
          >
            <Typewriter words={lang === "es" ? WORDS_ES : WORDS_EN} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.95, duration: 0.7 }}
            className="mt-6 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg"
          >
            {t("hero.desc")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.05, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#portafolio"
              className="group inline-flex min-h-12 items-center gap-2 rounded-xl bg-[var(--gradient-brand)] px-6 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] transition-transform duration-300 hover:scale-105"
            >
              <Sparkles className="size-4" aria-hidden />
              {t("hero.cta1")}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </a>
            <a
              href="#contacto"
              className="glass inline-flex min-h-12 items-center gap-2 rounded-xl px-6 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              <MessageSquare className="size-4" aria-hidden />
              {t("hero.cta2")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.7 }}
            className="mt-9"
          >
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yImage }}
          initial={{ opacity: 0, scale: 0.92, filter: "blur(16px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 1.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--electric)_45%,transparent),transparent_65%)] blur-3xl" />
          <motion.img
            src={heroImg}
            alt={`${SITE.name} — ${SITE.role}`}
            width={1024}
            height={1024}
            fetchPriority="high"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
          />
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute top-6 -left-2 z-20 rounded-2xl px-4 py-3 sm:left-0"
          >
            <p className="font-mono text-[11px] text-muted-foreground">{"</> TypeScript"}</p>
            <p className="text-sm font-semibold">React · Node · SQL</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="glass absolute right-0 bottom-8 z-20 rounded-2xl px-4 py-3"
          >
            <p className="font-mono text-[11px] text-muted-foreground">API uptime</p>
            <p className="text-sm font-semibold text-accent">99.9%</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        style={{ opacity }}
        className="absolute inset-x-0 bottom-6 hidden justify-center md:flex"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-2 text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
          {t("hero.scroll")}
          <span className="relative h-10 w-px overflow-hidden bg-border">
            <motion.span
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 h-4 bg-[var(--gradient-brand)]"
            />
          </span>
        </div>
      </motion.div>
    </section>
  );
}

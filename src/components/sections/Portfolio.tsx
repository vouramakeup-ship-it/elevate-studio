import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight, Calendar, ExternalLink, Github, Tag, User, X } from "lucide-react";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types";
import { Reveal, SectionShell } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { TiltCard } from "@/components/ui-kit/TiltCard";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/lib/utils";

const projects = projectsData as Project[];

const statusLabel: Record<string, { es: string; en: string }> = {
  completed: { es: "Completado", en: "Completed" },
  "in-progress": { es: "En desarrollo", en: "In progress" },
  maintenance: { es: "En mantenimiento", en: "Maintenance" },
};

export function Portfolio() {
  const { t, tl } = useI18n();
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const [slide, setSlide] = useState(0);

  const categories = useMemo(
    () => ["all", ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );
  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const open = (p: Project) => {
    setSelected(p);
    setSlide(0);
  };

  return (
    <SectionShell id="portafolio">
      <SectionHeading
        tag={t("portfolio.tag")}
        title={t("portfolio.title")}
        description={t("portfolio.desc")}
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={cn(
              "glass min-h-10 rounded-xl px-4 text-sm font-medium transition-all",
              filter === c
                ? "border-accent/50 text-accent shadow-[var(--glow-cyan)]"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {c === "all" ? t("portfolio.all") : c}
          </button>
        ))}
      </div>

      <motion.ul layout className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="h-full rounded-3xl" intensity={7}>
                <article className="glass ring-gradient group flex h-full flex-col overflow-hidden rounded-3xl transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                    <span className="glass-strong absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-medium">
                      {project.category}
                    </span>
                    <span className="glass-strong absolute top-3 right-3 rounded-full px-3 py-1 text-[11px] font-medium text-accent">
                      {tl(statusLabel[project.status])}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">
                      {tl(project.summary)}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => open(project)}
                        className="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-[var(--gradient-brand)] px-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                      >
                        {t("portfolio.more")}
                        <ArrowUpRight className="size-4" aria-hidden />
                      </button>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub ${project.title}`}
                          className="glass grid size-10 place-items-center rounded-xl transition-colors hover:text-accent"
                        >
                          <Github className="size-4" aria-hidden />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Demo ${project.title}`}
                          className="glass grid size-10 place-items-center rounded-xl transition-colors hover:text-accent"
                        >
                          <ExternalLink className="size-4" aria-hidden />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </TiltCard>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] grid place-items-center bg-background/80 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong ring-gradient max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={slide}
                    src={selected.gallery[slide] ?? selected.image}
                    alt={`${selected.title} ${slide + 1}`}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="size-full object-cover"
                  />
                </AnimatePresence>
                <button
                  onClick={() => setSelected(null)}
                  aria-label={t("portfolio.close")}
                  className="glass-strong absolute top-3 right-3 grid size-11 place-items-center rounded-xl"
                >
                  <X className="size-5" aria-hidden />
                </button>
                {selected.gallery.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                    {selected.gallery.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlide(i)}
                        aria-label={`${t("portfolio.gallery")} ${i + 1}`}
                        className={cn(
                          "h-1.5 rounded-full transition-all",
                          i === slide ? "w-6 bg-accent" : "w-2 bg-muted-foreground/60",
                        )}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold">{selected.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tl(selected.description)}
                </p>

                <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Meta icon={User} label={t("portfolio.client")} value={selected.client} />
                  <Meta icon={Calendar} label={t("portfolio.date")} value={selected.date} />
                  <Meta icon={Tag} label={t("portfolio.category")} value={selected.category} />
                  <Meta
                    icon={ExternalLink}
                    label={t("portfolio.status")}
                    value={tl(statusLabel[selected.status])}
                  />
                </dl>

                <h4 className="mt-6 text-sm font-semibold">{t("portfolio.stack")}</h4>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {selected.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {(selected.github || selected.demo) && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {selected.github && (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass inline-flex min-h-11 items-center gap-2 rounded-xl px-4 text-sm font-semibold"
                      >
                        <Github className="size-4" aria-hidden />
                        {t("portfolio.code")}
                      </a>
                    )}
                    {selected.demo && (
                      <a
                        href={selected.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[var(--gradient-brand)] px-4 text-sm font-semibold text-primary-foreground"
                      >
                        <ExternalLink className="size-4" aria-hidden />
                        {t("portfolio.demo")}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Reveal className="mt-4" />
    </SectionShell>
  );
}

function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof User;
  label: string;
  value: string;
}) {
  return (
    <div className="glass flex items-center gap-3 rounded-xl p-3">
      <Icon className="size-4 shrink-0 text-accent" aria-hidden />
      <div>
        <dt className="text-[11px] tracking-wide text-muted-foreground uppercase">{label}</dt>
        <dd className="text-sm font-medium">{value}</dd>
      </div>
    </div>
  );
}

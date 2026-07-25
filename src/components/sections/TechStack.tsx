import { motion } from "framer-motion";
import { useState } from "react";
import { techCategories } from "@/data/tech";
import { Reveal, SectionShell } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { TiltCard } from "@/components/ui-kit/TiltCard";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/lib/utils";

export function TechStack() {
  const { t, tl } = useI18n();
  const [active, setActive] = useState(techCategories[0].id);
  const category = techCategories.find((c) => c.id === active) ?? techCategories[0];

  return (
    <SectionShell id="tecnologias">
      <SectionHeading tag={t("tech.tag")} title={t("tech.title")} description={t("tech.desc")} />

      <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label={t("tech.title")}>
        {techCategories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={active === c.id}
            onClick={() => setActive(c.id)}
            className={cn(
              "glass relative inline-flex min-h-11 items-center gap-2 rounded-xl px-4 text-sm font-medium transition-colors",
              active === c.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {active === c.id && (
              <motion.span
                layoutId="tech-pill"
                className="absolute inset-0 -z-10 rounded-xl bg-[color-mix(in_oklab,var(--electric)_22%,transparent)]"
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              />
            )}
            <c.icon className="size-4 text-accent" aria-hidden />
            {tl(c.label)}
          </button>
        ))}
      </div>

      <motion.ul
        key={category.id}
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {category.items.map((item) => (
          <motion.li
            key={item.name}
            variants={{
              hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
            }}
          >
            <TiltCard className="h-full rounded-2xl" intensity={6}>
              <div className="glass ring-gradient group h-full rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-[color-mix(in_oklab,var(--cyan)_16%,transparent)] text-accent transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold">{item.name}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{tl(item.description)}</p>
                <div className="mt-5">
                  <div className="mb-1.5 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{t("tech.level")}</span>
                    <span className="font-mono">{item.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-[var(--gradient-brand)]"
                    />
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.li>
        ))}
      </motion.ul>

      <Reveal delay={0.1} className="mt-12">
        <div className="glass relative overflow-hidden rounded-2xl py-4">
          <div className="animate-marquee flex w-max gap-8 px-4">
            {[...techCategories, ...techCategories].flatMap((c, ci) =>
              c.items.map((i) => (
                <span
                  key={`${ci}-${c.id}-${i.name}`}
                  className="font-mono text-sm whitespace-nowrap text-muted-foreground"
                >
                  {i.name}
                  <span className="mx-4 text-accent">·</span>
                </span>
              )),
            )}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/site-content";
import { Reveal, SectionShell } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/lib/utils";

export function Faq() {
  const { t, tl } = useI18n();
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <SectionShell id="faq">
      <SectionHeading tag={t("faq.tag")} title={t("faq.title")} description={t("faq.desc")} />

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faqs.map((item, i) => {
          const expanded = open === item.id;
          return (
            <Reveal key={item.id} delay={i * 0.05}>
              <div
                className={cn(
                  "glass ring-gradient overflow-hidden rounded-2xl transition-shadow duration-300",
                  expanded && "shadow-[var(--shadow-lift)]",
                )}
              >
                <h3>
                  <button
                    onClick={() => setOpen(expanded ? null : item.id)}
                    aria-expanded={expanded}
                    aria-controls={`faq-${item.id}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-medium">{tl(item.question)}</span>
                    <motion.span
                      animate={{ rotate: expanded ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="grid size-8 shrink-0 place-items-center rounded-lg bg-secondary text-accent"
                    >
                      <Plus className="size-4" aria-hidden />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      id={`faq-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {tl(item.answer)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}

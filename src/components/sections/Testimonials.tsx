import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/site-content";
import { SectionShell } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const { t, tl } = useI18n();
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((next: number) => {
    setDir(next > 0 ? 1 : -1);
    setIndex((i) => (i + next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [go]);

  const item = testimonials[index];

  return (
    <SectionShell id="testimonios">
      <SectionHeading
        tag={t("testimonials.tag")}
        title={t("testimonials.title")}
        description={t("testimonials.desc")}
      />

      <div className="relative mx-auto mt-12 max-w-3xl">
        <div className="glass ring-gradient relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <Quote className="absolute top-6 right-6 size-16 text-accent/15" aria-hidden />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, x: dir * 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: dir * -40, filter: "blur(8px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-4 flex gap-1" aria-label={`${item.rating}/5`}>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" aria-hidden />
                ))}
              </div>
              <p className="text-lg leading-relaxed text-pretty sm:text-xl">“{tl(item.quote)}”</p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-[var(--gradient-brand)] text-sm font-bold text-primary-foreground">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {tl(item.role)} · {item.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="glass grid size-11 place-items-center rounded-xl transition-colors hover:text-accent"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <div className="flex gap-2">
            {testimonials.map((tItem, i) => (
              <button
                key={tItem.id}
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-7 bg-accent" : "w-2.5 bg-muted-foreground/50",
                )}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Siguiente"
            className="glass grid size-11 place-items-center rounded-xl transition-colors hover:text-accent"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
      </div>
    </SectionShell>
  );
}

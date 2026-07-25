import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";
import { Reveal, SectionShell } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { useI18n } from "@/hooks/use-i18n";

export function Experience() {
  const { t, tl } = useI18n();

  return (
    <SectionShell id="experiencia">
      <SectionHeading
        tag={t("experience.tag")}
        title={t("experience.title")}
        description={t("experience.desc")}
      />

      <ol className="relative mt-14 ml-4 space-y-8 sm:ml-8">
        <motion.span
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 -left-px h-full w-0.5 origin-top bg-[linear-gradient(180deg,var(--electric),var(--cyan),transparent)]"
        />
        {timeline.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 0.08} direction="left" className="relative pl-8 sm:pl-12">
            <span className="absolute top-6 -left-[7px] size-3.5 rounded-full border-2 border-background bg-accent shadow-[0_0_14px_var(--cyan)]" />
            <div className="glass ring-gradient rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
              <span className="font-mono text-xs tracking-wide text-accent">{item.period}</span>
              <h3 className="mt-2 text-lg font-semibold">{tl(item.role)}</h3>
              <p className="text-sm text-muted-foreground">{tl(item.org)}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {tl(item.description)}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}

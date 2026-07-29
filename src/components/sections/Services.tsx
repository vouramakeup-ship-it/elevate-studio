import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { whatsappLink } from "@/constants/site";
import { Reveal, SectionShell } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { TiltCard } from "@/components/ui-kit/TiltCard";
import { useI18n } from "@/hooks/use-i18n";

export function Services() {
  const { t, tl } = useI18n();

  return (
    <SectionShell id="servicios">
      <SectionHeading
        tag={t("services.tag")}
        title={t("services.title")}
        description={t("services.desc")}
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal as="li" key={service.id} delay={(i % 3) * 0.07} className="h-full">
            <TiltCard className="h-full rounded-2xl" intensity={6}>
              <article className="glass ring-gradient group flex h-full flex-col rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
                <span className="mb-5 grid size-12 place-items-center rounded-xl bg-[var(--gradient-brand)] text-cyan shadow-[var(--glow-primary)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
                  <service.icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold">{tl(service.title)}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {tl(service.description)}
                </p>
                <a
                  href={whatsappLink(`${t("wa.default")} (${tl(service.title)})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-primary"
                >
                  {t("services.cta")}
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </a>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}

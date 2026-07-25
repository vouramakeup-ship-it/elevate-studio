import { CalendarCheck, MessagesSquare, Target, LifeBuoy } from "lucide-react";
import { Reveal, SectionShell } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { TiltCard } from "@/components/ui-kit/TiltCard";
import { useI18n } from "@/hooks/use-i18n";
import type { TranslationKey } from "@/locales/es";

const highlights: { icon: typeof Target; title: TranslationKey; desc: TranslationKey }[] = [
  { icon: Target, title: "about.h1", desc: "about.h1d" },
  { icon: MessagesSquare, title: "about.h2", desc: "about.h2d" },
  { icon: CalendarCheck, title: "about.h3", desc: "about.h3d" },
  { icon: LifeBuoy, title: "about.h4", desc: "about.h4d" },
];

export function About() {
  const { t } = useI18n();

  return (
    <SectionShell id="sobre-mi">
      <SectionHeading tag={t("about.tag")} title={t("about.title")} align="left" />
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <Reveal delay={0.05}>
            <p className="text-lg text-foreground">{t("about.p1")}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <p>{t("about.p2")}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <p>{t("about.p3")}</p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={0.08 * i} direction="left">
              <TiltCard className="h-full rounded-2xl">
                <div className="glass ring-gradient h-full rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
                  <span className="mb-4 grid size-11 place-items-center rounded-xl bg-[color-mix(in_oklab,var(--electric)_18%,transparent)] text-accent">
                    <h.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold">{t(h.title)}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{t(h.desc)}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

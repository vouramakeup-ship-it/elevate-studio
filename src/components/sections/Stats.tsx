import { Cpu, Clock, FolderGit2, HeartHandshake } from "lucide-react";
import { CountUp } from "@/components/ui-kit/CountUp";
import { Reveal } from "@/components/ui-kit/Reveal";
import { useI18n } from "@/hooks/use-i18n";
import type { TranslationKey } from "@/locales/es";

const stats: { icon: typeof Cpu; value: number; suffix: string; prefix: string; key: TranslationKey }[] = [
  { icon: Cpu, value: 15, suffix: "", prefix: "+", key: "stats.tech" },
  { icon: FolderGit2, value: 10, suffix: "", prefix: "+", key: "stats.projects" },
  { icon: Clock, value: 500, suffix: "", prefix: "+", key: "stats.hours" },
  { icon: HeartHandshake, value: 100, suffix: "%", prefix: "", key: "stats.commit" },
];

export function Stats() {
  const { t } = useI18n();
  return (
    <section aria-label="Estadísticas" className="relative py-10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="glass ring-gradient grid gap-6 rounded-3xl p-8 sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
          {stats.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.08} className="text-center">
              <s.icon className="mx-auto mb-3 size-6 text-accent" aria-hidden />
              <p className="text-3xl font-bold sm:text-4xl">
                <span className="text-gradient">
                  <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{t(s.key)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

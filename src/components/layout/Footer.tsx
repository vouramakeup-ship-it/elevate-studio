import { ArrowUp } from "lucide-react";
import { NAV_LINKS, SITE } from "@/constants/site";
import { useI18n } from "@/hooks/use-i18n";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/60">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <a href="#inicio" className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-[var(--gradient-brand)] font-mono text-sm font-bold text-primary-foreground">
                {SITE.initials}
              </span>
              <span className="text-sm font-semibold">{SITE.name}</span>
            </a>
            <p className="max-w-sm text-sm text-muted-foreground">{t("footer.tagline")}</p>
            <p className="font-mono text-xs text-muted-foreground">{SITE.location}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="mb-4 text-sm font-semibold">{t("footer.links")}</h2>
            <ul className="grid gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {t(l.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-sm font-semibold">{t("footer.social")}</h2>
            <SocialLinks />
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 inline-block text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} {SITE.name}. {t("footer.rights")}
          </p>
          <p className="text-xs text-muted-foreground">{t("footer.built")}</p>
          <a
            href="#inicio"
            aria-label="Top"
            className="glass grid size-11 place-items-center rounded-xl transition-transform hover:-translate-y-1"
          >
            <ArrowUp className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { posts } from "@/data/blog";
import { Reveal, SectionShell } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { TiltCard } from "@/components/ui-kit/TiltCard";
import { useI18n } from "@/hooks/use-i18n";

export function Blog() {
  const { t, tl, lang } = useI18n();

  return (
    <SectionShell id="blog">
      <SectionHeading tag={t("blog.tag")} title={t("blog.title")} description={t("blog.desc")} />

      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal as="li" key={post.slug} delay={i * 0.08} className="h-full">
            <TiltCard className="h-full rounded-3xl" intensity={5}>
              <article className="glass ring-gradient group flex h-full flex-col overflow-hidden rounded-3xl transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={tl(post.title)}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-accent">
                    {tl(post.category)}
                  </span>
                  <h3 className="mt-3 text-lg leading-snug font-semibold">{tl(post.title)}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{tl(post.excerpt)}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="size-3.5" aria-hidden />
                      {new Date(post.date).toLocaleDateString(lang === "es" ? "es-ES" : "en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5" aria-hidden />
                      {post.readingTime} {t("blog.readtime")}
                    </span>
                  </div>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-primary"
                  >
                    {t("blog.read")}
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </div>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}

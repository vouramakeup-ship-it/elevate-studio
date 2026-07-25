import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { getPost } from "@/data/blog";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBackground } from "@/components/layout/AnimatedBackground";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { useI18n } from "@/hooks/use-i18n";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Artículo no disponible" }, { name: "robots", content: "noindex" }] };
    }
    const title = loaderData.post.title.es;
    const description = loaderData.post.excerpt.es;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            datePublished: loaderData.post.date,
          }),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const { t, tl, lang } = useI18n();

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="mx-auto w-full max-w-3xl px-5 pt-32 pb-24 sm:px-8">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft className="size-4" aria-hidden />
          {t("blog.back")}
        </Link>

        <article>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-accent">
            {tl(post.category)}
          </span>
          <h1 className="mt-4 text-3xl font-bold text-balance sm:text-4xl">{tl(post.title)}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-3.5" aria-hidden />
              {new Date(post.date).toLocaleDateString(lang === "es" ? "es-ES" : "en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden />
              {post.readingTime} {t("blog.readtime")}
            </span>
          </div>

          <img
            src={post.image}
            alt={tl(post.title)}
            width={1280}
            height={800}
            className="mt-8 aspect-[16/9] w-full rounded-3xl object-cover"
          />

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            {post.content.map((paragraph, i) => (
              <p key={i}>{tl(paragraph)}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

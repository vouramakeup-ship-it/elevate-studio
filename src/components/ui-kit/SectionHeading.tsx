import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  tag,
  title,
  description,
  align = "center",
}: {
  tag: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      <Reveal>
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--cyan)]" />
          {tag}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-3xl text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-base text-pretty text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

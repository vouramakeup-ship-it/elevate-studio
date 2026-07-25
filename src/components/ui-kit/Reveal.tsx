import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 34, y: 0 },
  right: { x: -34, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  blur = true,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  blur?: boolean;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { x, y } = offset[direction];
  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, x, y, filter: blur ? "blur(10px)" : "blur(0px)" }}
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
          : { opacity: 0, x, y, filter: blur ? "blur(10px)" : "blur(0px)" }
      }
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SectionShell({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-24 sm:py-28 lg:py-32", className)}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

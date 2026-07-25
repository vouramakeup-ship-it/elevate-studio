import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Tarjeta con inclinación 3D y luz que sigue al cursor. */
export function TiltCard({
  children,
  className,
  intensity = 8,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const glareX = useMotionTemplate`${useMotionTemplate`calc(${x} * 100%)`}`;
  const glareY = useMotionTemplate`${useMotionTemplate`calc(${y} * 100%)`}`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
    rotateY.set((px - 0.5) * intensity * 2);
    rotateX.set(-(py - 0.5) * intensity * 2);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={cn("group relative [transform-style:preserve-3d]", className)}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(340px circle at ${glareX} ${glareY}, color-mix(in oklab, var(--electric) 22%, transparent), transparent 65%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

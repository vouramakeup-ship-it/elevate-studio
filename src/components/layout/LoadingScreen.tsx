import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/constants/site";
import { useI18n } from "@/hooks/use-i18n";

export function LoadingScreen() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] grid place-items-center bg-background"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-6">
            <motion.span
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="ring-gradient grid size-16 place-items-center rounded-2xl bg-[var(--gradient-brand)] font-mono text-lg font-bold text-primary-foreground shadow-[var(--glow-primary)]"
            >
              {SITE.initials}
            </motion.span>
            <div className="h-0.5 w-48 overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="h-full w-full bg-[var(--gradient-brand)]"
              />
            </div>
            <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              {t("loader.text")}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

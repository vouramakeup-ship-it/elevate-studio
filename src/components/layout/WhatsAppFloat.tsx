import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/constants/site";
import { useI18n } from "@/hooks/use-i18n";

export function WhatsAppFloat() {
  const { t } = useI18n();
  return (
    <motion.a
      href={whatsappLink(t("wa.default"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("a11y.whatsapp")}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="animate-pulse-ring glass-strong fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-2xl border border-accent/40 text-accent sm:right-8 sm:bottom-8"
      title={`WhatsApp ${SITE.phone}`}
    >
      <MessageCircle className="size-6" aria-hidden />
    </motion.a>
  );
}

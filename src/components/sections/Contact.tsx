import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { AlertCircle, CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { SITE, whatsappLink } from "@/constants/site";
import { isEmailConfigured, sendContactEmail } from "@/services/email";
import { Reveal, SectionShell } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/lib/utils";

type Fields = "name" | "company" | "email" | "phone" | "message";
const empty: Record<Fields, string> = { name: "", company: "", email: "", phone: "", message: "" };

export function Contact() {
  const { t } = useI18n();
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const schema = z.object({
    name: z.string().trim().min(2, t("contact.err.name")).max(100),
    company: z.string().trim().max(100).optional(),
    email: z.string().trim().email(t("contact.err.email")).max(255),
    phone: z
      .string()
      .trim()
      .regex(/^[+()\d\s-]{7,20}$/, t("contact.err.phone")),
    message: z.string().trim().min(10, t("contact.err.message")).max(1500),
  });

  const update = (field: Fields, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<Fields, string>> = {};
      for (const issue of parsed.error.issues) next[issue.path[0] as Fields] = issue.message;
      setErrors(next);
      setStatus("idle");
      return;
    }
    if (!isEmailConfigured()) {
      setStatus("error");
      setFeedback(t("contact.notconfigured"));
      return;
    }
    setStatus("sending");
    try {
      await sendContactEmail({ ...values });
      setStatus("success");
      setFeedback(t("contact.success"));
      setValues(empty);
    } catch {
      setStatus("error");
      setFeedback(t("contact.error"));
    }
  };

  const fields: { id: Fields; type: string; required: boolean }[] = [
    { id: "name", type: "text", required: true },
    { id: "company", type: "text", required: false },
    { id: "email", type: "email", required: true },
    { id: "phone", type: "tel", required: true },
  ];

  return (
    <SectionShell id="contacto">
      <SectionHeading
        tag={t("contact.tag")}
        title={t("contact.title")}
        description={t("contact.desc")}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.25fr]">
        <Reveal direction="right">
          <div className="glass ring-gradient flex h-full flex-col gap-6 rounded-3xl p-8">
            <h3 className="text-lg font-semibold">{t("contact.direct")}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-secondary text-accent">
                  <Mail className="size-4" aria-hidden />
                </span>
                <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-secondary text-accent">
                  <Phone className="size-4" aria-hidden />
                </span>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-secondary text-accent">
                  <MapPin className="size-4" aria-hidden />
                </span>
                {SITE.location}
              </li>
            </ul>

            <a
              href={whatsappLink(t("wa.default"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--gradient-brand)] px-5 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="size-4" aria-hidden />
              {t("contact.whatsapp")}
            </a>

            <div className="mt-auto">
              <SocialLinks />
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.08}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="glass ring-gradient rounded-3xl p-8"
            aria-label={t("contact.title")}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.id} className={cn(f.id === "message" && "sm:col-span-2")}>
                  <label htmlFor={f.id} className="mb-1.5 block text-sm font-medium">
                    {t(`contact.${f.id}` as const)}
                    {f.required && <span className="ml-1 text-accent">*</span>}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    value={values[f.id]}
                    onChange={(e) => update(f.id, e.target.value)}
                    aria-invalid={Boolean(errors[f.id])}
                    aria-describedby={errors[f.id] ? `${f.id}-error` : undefined}
                    className="w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm transition-colors outline-none placeholder:text-muted-foreground focus:border-accent/60"
                  />
                  {errors[f.id] && (
                    <p id={`${f.id}-error`} className="mt-1.5 text-xs text-destructive">
                      {errors[f.id]}
                    </p>
                  )}
                </div>
              ))}

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  {t("contact.message")}
                  <span className="ml-1 text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder={t("contact.placeholder")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-3 text-sm transition-colors outline-none placeholder:text-muted-foreground focus:border-accent/60"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--gradient-brand)] px-6 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] disabled:opacity-70"
            >
              <Send className="size-4" aria-hidden />
              {status === "sending" ? t("contact.sending") : t("contact.send")}
            </motion.button>

            {status !== "idle" && status !== "sending" && feedback && (
              <p
                role="status"
                className={cn(
                  "mt-4 flex items-center gap-2 rounded-xl px-4 py-3 text-sm",
                  status === "success"
                    ? "bg-[color-mix(in_oklab,var(--cyan)_18%,transparent)] text-accent-foreground"
                    : "bg-[color-mix(in_oklab,var(--destructive)_15%,transparent)] text-destructive",
                )}
              >
                {status === "success" ? (
                  <CheckCircle2 className="size-4 shrink-0" aria-hidden />
                ) : (
                  <AlertCircle className="size-4 shrink-0" aria-hidden />
                )}
                {feedback}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </SectionShell>
  );
}

import { Facebook, Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/constants/site";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  const links = [
    { href: SITE.socials.github, label: "GitHub", Icon: Github },
    { href: SITE.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: whatsappLink("Hola"), label: "WhatsApp", Icon: MessageCircle },
    { href: SITE.socials.instagram, label: "Instagram", Icon: Instagram },
    { href: SITE.socials.facebook, label: "Facebook", Icon: Facebook },
    { href: `mailto:${SITE.email}`, label: "Email", Icon: Mail },
  ];

  return (
    <ul className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="glass group grid size-11 place-items-center rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:text-accent hover:shadow-[var(--glow-cyan)]"
          >
            <Icon className="size-[18px] transition-transform duration-300 group-hover:scale-110" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}

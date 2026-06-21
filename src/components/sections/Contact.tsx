import { Github, Send, Mail, Phone } from "lucide-react";
import { links } from "@/i18n/content";
import { useLang } from "@/i18n/lang";
import { Reveal } from "@/components/ui/Reveal";
import { EncryptedText } from "@/components/ui/EncryptedText";

/**
 * Contact — a single source of truth for how to reach me (the footer no longer
 * duplicates this). Styled after ozgur.design's contact: a big decoded title, a
 * column of one-line notes, a row of icon buttons, a giant ghost section number
 * and a closing line.
 */
export function Contact() {
  const { c, lang } = useLang();
  const ru = lang === "ru";
  const heading = ru ? "Связаться." : "Contact.";

  const lines = ru
    ? [
        "Почта — самый быстрый способ связаться.",
        "Telegram — для коротких вопросов.",
        "GitHub — код и эксперименты.",
        "Звонок — если совсем срочно.",
        "Москва, открыта к удалёнке.",
        "Открыта к ролям во frontend и UI/UX.",
      ]
    : [
        "Email is the fastest way to reach me.",
        "Telegram for quick questions.",
        "GitHub for the code and the tinkering.",
        "A call, if it's truly urgent.",
        "Based in Moscow, open to remote.",
        "Open to frontend & UI/UX roles.",
      ];

  const socials = [
    { label: "Email", href: `mailto:${links.email}`, Icon: Mail },
    { label: "Telegram", href: links.telegram, Icon: Send },
    { label: "GitHub", href: links.github, Icon: Github },
    { label: "Phone", href: `tel:${links.phone.replace(/\s/g, "")}`, Icon: Phone },
  ];

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-xs font-bold uppercase tracking-tight">
            <span className="text-accent">07</span>
            <span className="mx-2 text-accent/40">//</span>
            <span className="text-ink/80">{c.contact.eyebrow}</span>
          </span>
        </Reveal>

        <Reveal>
          <h2 className="mt-4 font-display text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            <EncryptedText key={heading} text={heading} />
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-12 space-y-2">
            {lines.map((l) => (
              <li
                key={l}
                className="text-lg leading-relaxed text-muted transition-colors duration-200 hover:text-ink"
              >
                {l}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mt-10 text-lg text-ink/45">
            {ru ? "Больше нигде." : "Nowhere else."}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

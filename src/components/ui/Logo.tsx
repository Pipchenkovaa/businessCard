import { Github, Send, Mail } from "lucide-react";
import { links } from "@/i18n/content";

/**
 * Fixed top-left wordmark <AP/>. On hover (or keyboard focus) the social
 * links unfurl to the right with a small stagger — same gesture ozgur.design
 * uses to hide its contact surface behind the logo.
 *
 * Pure CSS group-hover / focus-within so it works without JS state and stays
 * keyboard-accessible.
 */

const socials = [
  { href: links.github, label: "GitHub", Icon: Github },
  { href: links.telegram, label: "Telegram", Icon: Send },
  { href: `mailto:${links.email}`, label: "Email", Icon: Mail },
];

export function Logo() {
  return (
    <div className="group fixed left-4 top-4 z-50 flex items-center sm:left-6 sm:top-6">
      <a
        href="#top"
        aria-label="Alina Pipchenkova — top"
        className="glass-soft flex h-11 items-center rounded-full px-4 font-mono text-sm font-bold tracking-tight text-ink"
      >
        <span className="text-accent">&lt;</span>AP<span className="text-accent">/&gt;</span>
      </a>

      <div className="pointer-events-none flex items-center pl-2 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        {socials.map(({ href, label, Icon }, i) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={label}
            style={{ transitionDelay: `${i * 55}ms` }}
            className="ml-1.5 flex h-10 w-10 -translate-x-3 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent group-hover:translate-x-0 group-focus-within:translate-x-0"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}

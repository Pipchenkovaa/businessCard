import { links } from "@/i18n/content";
import { useLang } from "@/i18n/lang";
import { EncryptedText } from "@/components/ui/EncryptedText";

/**
 * Footer — just the oversized wordmark that bleeds across the full width and
 * clips at the edge (lessestudio.com), closed by a single hairline row:
 * © year on the left, the section links in the middle, back-to-top on the right.
 */
export function Footer() {
  const { c, lang } = useLang();
  const ru = lang === "ru";
  const year = new Date().getFullYear();

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  // surname-first wordmark (e.g. "Alina Pipchenkova" -> "Pipchenkova Alina")
  const parts = links.name.trim().split(/\s+/);
  const wordmark = parts.length > 1 ? [...parts.slice(1), parts[0]].join(" ") : links.name;

  return (
    <footer className="relative mt-12 overflow-hidden border-t border-white/10 pt-16 sm:pt-24">
      {/* oversized wordmark — bleeds the full width and clips at the edge */}
      <div className="overflow-hidden px-4">
        <h2
          className="select-none whitespace-nowrap font-display font-extrabold uppercase leading-[0.8] tracking-tight text-ink"
          style={{ fontSize: "clamp(3rem, 15vw, 11.5rem)" }}
        >
          <EncryptedText
            text={wordmark}
            className="whitespace-nowrap"
            encryptedClassName="text-accent/60"
          />
        </h2>
      </div>

      {/* hairline row: © year — navigation — back to top */}
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-6">
        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 font-mono text-xs tracking-tight text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {year}</span>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {c.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="uppercase tracking-tight text-muted transition-colors hover:text-ink"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toTop}
            className="text-left transition-colors hover:text-ink sm:text-right"
          >
            {ru ? "Наверх ↑" : "Back to top ↑"}
          </button>
        </div>
      </div>
    </footer>
  );
}

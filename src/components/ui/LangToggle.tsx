import { useLang } from "@/i18n/lang";
import { type Lang } from "@/i18n/content";
import { cn } from "@/lib/utils";

/** Fixed EN/RU switch pinned to the bottom-right corner of the viewport. */
export function LangToggle() {
  const { lang, setLang } = useLang();
  const options: Lang[] = ["en", "ru"];

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div
        role="group"
        aria-label="Language"
        className="glass-soft flex items-center rounded-full p-1 font-mono text-xs shadow-glass"
      >
        {options.map((opt) => {
          const active = lang === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => setLang(opt)}
              aria-pressed={active}
              className={cn(
                "relative z-10 rounded-full px-3 py-1.5 uppercase tracking-tight transition-colors",
                active ? "text-bg" : "text-muted hover:text-ink"
              )}
            >
              {active && <span className="absolute inset-0 -z-10 rounded-full bg-accent" />}
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

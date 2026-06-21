import { type ReactNode } from "react";

/**
 * Showcase card adapted from the community "highlight card" (beratberkay):
 * a centered panel with an icon ringed by animated halos, a gradient title, a
 * divider that grows on hover, three dots, a sweep of light and corner accents.
 * Re-implemented with Tailwind core utilities and the site's cream accent.
 */
export function HighlightCard({
  icon,
  title,
  body,
  tags,
}: {
  icon?: ReactNode;
  title: string;
  body: string;
  tags?: string[];
}) {
  return (
    <div className="group h-full transition-transform duration-500 motion-safe:hover:-rotate-1 motion-safe:hover:scale-[1.03]">
      <div className="relative h-full overflow-hidden rounded-glass border border-white/10 bg-gradient-to-br from-[#010101] via-[#0a0a0a] to-[#010101] shadow-glass backdrop-blur-xl transition-colors duration-500 hover:border-white/25">
        {/* animated background layers */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-white/[0.06] opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
          <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-gradient-to-tr from-accent/15 to-transparent opacity-30 blur-3xl transition-all duration-700 group-hover:scale-110 group-hover:opacity-60" />
          {/* sweep of light on hover */}
          <div className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[200%]" />
        </div>

        {/* content */}
        <div className="relative z-10 flex h-full flex-col items-center p-8 text-center">
          {icon && (
            <div className="relative mb-6">
              <span className="absolute inset-0 rounded-full border border-accent/25 motion-safe:animate-ping" />
              <span className="absolute inset-0 rounded-full border border-white/10 motion-safe:animate-pulse" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-black/80 to-black/50 text-accent shadow-glass transition-all duration-500 group-hover:rotate-[12deg] group-hover:scale-110">
                <div className="transition-transform duration-700 group-hover:rotate-180">{icon}</div>
              </div>
            </div>
          )}

          <h3 className="bg-gradient-to-r from-white via-accent to-white bg-clip-text font-display text-xl font-bold text-transparent transition-transform duration-300 group-hover:scale-105">
            {title}
          </h3>

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-ink/80">
            {body}
          </p>

          {/* growing divider */}
          <div className="mt-6 h-0.5 w-1/2 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-500 group-hover:h-1 group-hover:w-1/2" />

          {tags && tags.length > 0 && (
            <div className="mt-auto flex flex-wrap justify-center gap-2 pt-6">
              {tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* corner accents */}
        <div className="pointer-events-none absolute left-0 top-0 h-16 w-16 rounded-br-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 rounded-tl-3xl bg-gradient-to-tl from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </div>
  );
}

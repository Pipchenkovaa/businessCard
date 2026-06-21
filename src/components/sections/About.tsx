import { Check } from "lucide-react";
import { useLang } from "@/i18n/lang";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  const { c } = useLang();
  const a = c.about;

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <SectionHeader n="02" eyebrow={a.eyebrow} title={a.title} />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="space-y-5">
          {a.body.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p className="text-lg leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <GlassCard className="p-7 sm:p-9">
            <span className="font-mono text-xs uppercase tracking-tight text-muted">
              {a.highlightsLabel}
            </span>
            <ul className="mt-6 space-y-4">
              {a.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink/85">{h}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n/lang";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Lab() {
  const { c } = useLang();

  return (
    <section id="lab" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <SectionHeader n="06" eyebrow={c.lab.eyebrow} title={c.lab.title} />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {c.lab.items.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.06}>
            <a href={item.href} target="_blank" rel="noreferrer" className="group block h-full">
              <GlassCard interactive className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-base font-semibold leading-snug">{item.name}</h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.note}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span key={t} className="tag !text-[10px]">{t}</span>
                  ))}
                </div>
              </GlassCard>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

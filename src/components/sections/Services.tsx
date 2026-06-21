import { Code2, PenTool, Sparkles } from "lucide-react";
import { useLang } from "@/i18n/lang";
import { Reveal } from "@/components/ui/Reveal";
import { HighlightCard } from "@/components/ui/HighlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ICONS = [
  <Code2 className="h-6 w-6" />,
  <PenTool className="h-6 w-6" />,
  <Sparkles className="h-6 w-6" />,
];

export function Services() {
  const { c } = useLang();

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <SectionHeader n="03" eyebrow={c.services.eyebrow} title={c.services.title} />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {c.services.items.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <HighlightCard
              icon={ICONS[i % ICONS.length]}
              title={s.title}
              body={s.body}
              tags={s.tags}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

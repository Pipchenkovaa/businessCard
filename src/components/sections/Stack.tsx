import { useLang } from "@/i18n/lang"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeader } from "@/components/ui/SectionHeader"

export function Stack() {
	const { c } = useLang()

	return (
		<section id="stack" className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
			<SectionHeader n="04" eyebrow={c.stack.eyebrow} title={c.stack.title} />
			<Reveal delay={0.1}>
				<p className="mt-5 max-w-4xl leading-relaxed text-muted">
					{c.stack.note}
				</p>
			</Reveal>

			<div className="mt-10 divide-y divide-white/10 border-y border-white/10">
				{c.stack.groups.map((g, i) => (
					<Reveal key={g.label} delay={i * 0.08}>
						<div className="grid gap-2 py-5 sm:grid-cols-[200px_1fr] sm:gap-8">
							<span className="font-mono text-sm uppercase tracking-tight text-accent/70">
								{g.label}
							</span>
							<span className="font-mono text-sm leading-relaxed text-ink/85">
								{g.items}
							</span>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	)
}

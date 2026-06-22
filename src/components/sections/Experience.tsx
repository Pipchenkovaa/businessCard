import { useLang } from "@/i18n/lang"
import { Reveal } from "@/components/ui/Reveal"
import { GlassCard } from "@/components/ui/GlassCard"
import { SectionHeader } from "@/components/ui/SectionHeader"

export function Experience() {
	const { c } = useLang()
	const e = c.exp

	// Education reads as a progression, so order it chronologically and render a
	// connected pipeline instead of a stack of plaques.
	const eduTimeline = [...e.education].sort(
		(a, b) => parseInt(a.period, 10) - parseInt(b.period, 10),
	)

	return (
		<section id="experience" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
			<SectionHeader n="05" eyebrow={e.eyebrowExp} title={e.titleExp} />

			<div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
				{/* Experience — cards */}
				<div className="flex flex-col">
					<span className="font-mono text-xs font-bold uppercase tracking-tight text-accent/80">
						{e.eyebrowExp}
					</span>
					<div className="mt-5 flex flex-1 flex-col gap-4">
						{e.items.map((item, i) => (
							<Reveal key={item.org} delay={i * 0.08} className="flex-1">
								<GlassCard className="flex h-full flex-col justify-center p-6">
									<div className="flex items-baseline justify-between gap-4">
										<h3 className="font-display text-lg font-semibold">
											{item.org}
										</h3>
										<span className="shrink-0 font-mono text-xs text-muted">
											{item.period}
										</span>
									</div>
									<p className="mt-1 text-sm font-medium text-accent">
										{item.role}
									</p>
									<p className="mt-3 text-sm leading-relaxed text-muted">
										{item.detail}
									</p>
								</GlassCard>
							</Reveal>
						))}
					</div>
				</div>

				{/* Education — pipeline */}
				<div className="flex flex-col">
					<span className="font-mono text-xs font-bold uppercase tracking-tight text-accent/80">
						{e.eyebrowEdu}
					</span>

					<ol className="relative mt-6 ml-[6px] flex flex-col gap-9 border-l border-line pl-7 lg:flex-1 lg:justify-between lg:gap-0">
						{eduTimeline.map((ed, i) => {
							const isLast = i === eduTimeline.length - 1
							return (
								<Reveal
									as="li"
									key={ed.title}
									delay={i * 0.1}
									className="relative"
								>
									{/* node sitting on the line */}
									<span
										className={
											"absolute -left-[36px] top-0 flex h-4 w-4 items-center justify-center rounded-full " +
											(isLast ? "bg-accent" : "border-2 border-accent bg-bg")
										}
									>
										{isLast && (
											<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
										)}
									</span>

									<div className="flex items-baseline justify-between gap-3">
										<span className="font-mono text-sm font-bold tracking-tight text-accent">
											{ed.period}
										</span>
										<span className="font-mono text-[11px] uppercase tracking-tight text-muted">
											{ed.org}
										</span>
									</div>
									<p className="mt-1.5 leading-snug text-ink/90">{ed.title}</p>
								</Reveal>
							)
						})}
					</ol>
				</div>
			</div>
		</section>
	)
}

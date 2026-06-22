import { ArrowUpRight } from "lucide-react"
import { type Project } from "@/i18n/content"
import { useLang } from "@/i18n/lang"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeader } from "@/components/ui/SectionHeader"

export function Work() {
	const { c } = useLang()

	return (
		<section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
			<SectionHeader
				n="01"
				eyebrow={c.work.eyebrow}
				title={c.work.title}
				note="2024 — present"
			/>

			<div className="mt-12 border-t border-white/10">
				{c.work.projects.map((p, i) => (
					<Reveal key={p.name} delay={i * 0.05}>
						<ProjectRow project={p} index={i + 1} />
					</Reveal>
				))}
			</div>
		</section>
	)
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
	const inner = (
		<div className="grid gap-5 border-b border-white/10 py-8 transition-colors group-hover:border-white/25 md:grid-cols-[auto_1fr_auto] md:gap-8 md:py-10">
			<span className="font-mono text-sm text-accent md:pt-3">
				{String(index).padStart(2, "0")}
			</span>

			<div>
				<h3 className="flex items-center gap-3 font-display text-3xl font-semibold leading-none tracking-tight transition-colors group-hover:text-accent sm:text-4xl md:text-5xl">
					{project.name}
					{project.href && (
						<ArrowUpRight className="h-6 w-6 shrink-0 -translate-y-1 text-muted transition-colors group-hover:text-accent motion-safe:group-hover:animate-[arrow-bob_1s_ease-in-out_infinite]" />
					)}
				</h3>
				<p className="mt-4 font-mono text-sm uppercase tracking-tight text-muted">
					{project.kind}
				</p>
				<p className="mt-4 max-w-3xl leading-relaxed text-muted">
					{project.description}
				</p>
				<div className="mt-5 flex flex-wrap gap-2">
					{project.tags.map((t) => (
						<span key={t} className="tag">
							{t}
						</span>
					))}
				</div>
			</div>

			<div className="flex shrink-0 flex-col gap-2 md:items-end md:pt-3 md:text-right">
				<span className="font-mono text-sm tracking-tight text-muted">
					{project.year}
				</span>
				<span className="text-sm text-ink/75">{project.role}</span>
				{project.hrefLabel && (
					<span className="font-mono text-sm text-accent">
						{project.hrefLabel}
					</span>
				)}
			</div>
		</div>
	)

	if (project.href) {
		return (
			<a
				href={project.href}
				target="_blank"
				rel="noreferrer"
				className="group block"
				aria-label={`${project.name} — ${project.hrefLabel ?? "open site"}`}
			>
				{inner}
			</a>
		)
	}
	return <div className="group">{inner}</div>
}

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Download } from "lucide-react"
import { links } from "@/i18n/content"
import { useLang } from "@/i18n/lang"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { SquigglyText } from "@/components/ui/SquigglyText"
import { PixelField } from "@/components/ui/PixelField"

export function Hero() {
	const { c } = useLang()
	const reduce = useReducedMotion()

	const container = {
		hidden: {},
		show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
	}
	const item = {
		hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
		},
	}

	// Split line 2 around the accent word; peel a trailing period off so it can
	// blink like a terminal caret at the end of the headline.
	const [line1, line2] = c.hero.headline
	const [before, rawAfter] = line2.split(c.hero.accent)
	const endsWithDot = rawAfter.trimEnd().endsWith(".")
	const after = endsWithDot ? rawAfter.replace(/\.\s*$/, "") : rawAfter

	return (
		<section
			id="top"
			className="relative overflow-hidden px-4 pb-14 pt-28 sm:pt-32"
		>
			<PixelField />

			<div className="relative z-10 mx-auto max-w-6xl">
				<div className="mb-10 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-tight">
					<span>
						<span className="text-accent">00</span>
						<span className="mx-2 text-accent/40">//</span>
						<span className="text-ink/80">{c.hero.marker}</span>
					</span>
				</div>

				<motion.div
					variants={container}
					initial="hidden"
					animate="show"
					className="max-w-6xl"
				>
					<motion.div
						variants={item}
						className="mb-6 flex flex-wrap justify-between items-center gap-x-4 gap-y-2"
					>
						<Eyebrow>{c.hero.role}</Eyebrow>
						<span className="flex items-center gap-2">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
							</span>
							<span className="font-mono text-xs uppercase tracking-tight text-ink/70">
								{c.hero.availability}
							</span>
						</span>
					</motion.div>

					<h1 className="font-display text-[12vw] font-extrabold leading-[0.96] tracking-tight sm:text-7xl lg:text-[5.6rem]">
						<span className="block overflow-hidden">
							<motion.span variants={item} className="block">
								{line1}
							</motion.span>
						</span>
						<span className="block overflow-hidden">
							<motion.span variants={item} className="block">
								{before}
								<SquigglyText className="text-accent">
									{c.hero.accent}
								</SquigglyText>
								{after}
								{endsWithDot && (
									<span className="blink-caret text-accent">|</span>
								)}
							</motion.span>
						</span>
					</h1>

					<motion.p
						variants={item}
						className="mt-7 max-w-4xl text-lg leading-relaxed text-muted"
					>
						{c.hero.intro}
					</motion.p>

					<motion.div
						variants={item}
						className="mt-8 flex flex-wrap items-center gap-5"
					>
						<a
							href="#work"
							className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
						>
							{c.ui.seeWork}
							<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</a>
						<a
							href={links.cv}
							download
							className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white/[0.08]"
						>
							<Download className="h-4 w-4" />
							{c.ui.downloadCv}
						</a>
					</motion.div>
				</motion.div>

				{/* Editorial meta grid — shows the stack and status at a glance */}
				<motion.dl
					initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.6 }}
					className="mt-14 grid grid-cols-2 divide-x divide-y divide-white/5 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-5"
				>
					{c.hero.meta.map((m) => (
						<div key={m.k} className="px-6 py-6">
							<dt className="font-mono text-[11px] uppercase tracking-tight text-accent/80">
								{m.k}
							</dt>
							<dd className="mt-2 text-sm text-ink/90">{m.v}</dd>
						</div>
					))}
				</motion.dl>
			</div>
		</section>
	)
}

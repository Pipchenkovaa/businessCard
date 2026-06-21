import { useEffect, useState } from "react"
import { useLang } from "@/i18n/lang"
import { cn } from "@/lib/utils"

/**
 * Fixed vertical menu pinned to the LEFT edge — the "track" from ozgur.design,
 * mirrored to the left. Default state is compact (number + tick); hovering the
 * rail reveals every label at once. The section you're inside stays lit (ink);
 * hovering an individual item paints it accent and frames it with corner
 * brackets (the selection-frame gesture from the reference header).
 *
 * Desktop only (lg+); the page is a single scroll on smaller screens.
 */

type Item = { id: string; en: string; ru: string }

const ITEMS: Item[] = [
	{ id: "top", en: "Intro", ru: "Начало" },
	{ id: "work", en: "Work", ru: "Работы" },
	{ id: "about", en: "About", ru: "Обо мне" },
	{ id: "services", en: "Services", ru: "Услуги" },
	{ id: "stack", en: "Stack", ru: "Стек" },
	{ id: "experience", en: "Experience", ru: "Опыт" },
	{ id: "lab", en: "Lab", ru: "Лаб" },
	{ id: "contact", en: "Contact", ru: "Контакты" },
]

function Brackets() {
	// four corner crop-marks that fade in on item hover
	const base =
		"pointer-events-none absolute h-1.5 w-1.5 border-accent opacity-0 transition-opacity duration-200 group-hover/item:opacity-100"
	return (
		<>
			<span className={cn(base, "left-0 top-0 border-l border-t")} />
			<span className={cn(base, "right-0 top-0 border-r border-t")} />
			<span className={cn(base, "bottom-0 left-0 border-b border-l")} />
			<span className={cn(base, "bottom-0 right-0 border-b border-r")} />
		</>
	)
}

export function LeftTrack() {
	const { lang } = useLang()
	const [active, setActive] = useState("top")

	useEffect(() => {
		const sections = ITEMS.map((i) => document.getElementById(i.id)).filter(
			(el): el is HTMLElement => !!el,
		)
		if (!sections.length) return
		const io = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
				if (visible[0]) setActive(visible[0].target.id)
			},
			{ rootMargin: "-30% 0px -55% 0px", threshold: 0 },
		)
		sections.forEach((s) => io.observe(s))
		return () => io.disconnect()
	}, [])

	const go = (id: string) => {
		const el = document.getElementById(id)
		if (!el) return
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
		el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
	}

	return (
		<nav
			aria-label={lang === "ru" ? "Разделы" : "Sections"}
			className="group/rail fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 pl-4 lg:block"
		>
			<ul className="flex flex-col items-start gap-1">
				{ITEMS.map((item) => {
					const isActive = active === item.id
					return (
						<li key={item.id}>
							<button
								type="button"
								onClick={() => go(item.id)}
								aria-current={isActive ? "true" : undefined}
								className="group/item flex items-center gap-2 py-1.5"
							>
								<span className="relative flex h-px w-6 items-center">
									<span
										className={cn(
											"absolute left-0 h-px origin-left transition-all duration-300",
											isActive
												? "w-6 bg-accent"
												: "w-3 bg-white/25 group-hover/item:w-5 group-hover/item:bg-accent",
										)}
									/>
								</span>

								<span
									className={cn(
										"font-mono text-[11px] tabular-nums tracking-tight transition-colors duration-300",
										isActive ? "text-accent" : "text-muted",
										"group-hover/item:text-accent",
									)}
								></span>

								<span
									className={cn(
										"relative inline-flex items-center whitespace-nowrap px-1.5 py-0.5 font-mono text-[11px] uppercase tracking-tight transition-all duration-300",
										"opacity-0 -translate-x-1 group-hover/rail:opacity-100 group-hover/rail:translate-x-0",
										isActive
											? "text-ink opacity-100 translate-x-0"
											: "text-muted",
										"group-hover/item:text-accent",
									)}
								>
									{lang === "ru" ? item.ru : item.en}
									<Brackets />
								</span>
							</button>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

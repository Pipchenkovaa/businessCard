import { Reveal } from "@/components/ui/Reveal"
import { EncryptedText } from "@/components/ui/EncryptedText"
import { cn } from "@/lib/utils"

type SectionHeaderProps = {
	n: string
	eyebrow: string
	title: string
	note?: string
	className?: string
}

/**
 * The recurring editorial header: a hairline rule, a "NN // LABEL" marker
 * (number + the // syntax motif), an optional right-side note, then a large
 * display title that decrypts itself into place as it scrolls into view.
 */
export function SectionHeader({
	n,
	eyebrow,
	title,
	note,
	className,
}: SectionHeaderProps) {
	return (
		<Reveal className={cn("border-t border-white/10 pt-7", className)}>
			<div className="flex items-center justify-between gap-4">
				<span className="font-mono text-sm font-bold uppercase tracking-tight text-muted">
					<span>{n}</span>
					<span className="mx-2">//</span>
					<span>{eyebrow}</span>
				</span>
				{note && (
					<span className="font-mono text-xs tracking-tight text-muted">
						{note}
					</span>
				)}
			</div>
			<h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl">
				<EncryptedText key={title} text={title} />
			</h2>
		</Reveal>
	)
}

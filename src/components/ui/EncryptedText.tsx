import {
	useCallback,
	useEffect,
	useRef,
	useState,
	type ElementType,
} from "react"
import { useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * Decrypting-text effect (à la aceternity "encrypted text").
 * The string sits scrambled until it scrolls into view, then decodes itself
 * left-to-right. It also re-scrambles every time the pointer enters it, for a
 * tactile, hover-to-decode feel (lifted from the reference build).
 *
 * - Spaces are preserved so word shapes stay readable while decoding.
 * - An invisible sizer copy reserves the final box so layout never jumps.
 * - Two contiguous runs (revealed + encrypted) keep wrapping identical to the
 *   sizer's, so multi-line titles don't reflow.
 * - Honors prefers-reduced-motion; hover replay only on fine-pointer devices.
 * - Re-mount (via `key`) on language switch re-arms the whole thing.
 */

const DEFAULT_CHARSET = "</>abcdefghijklmnopqrstuvwxyz</>"

type EncryptedTextProps = {
	text: string
	as?: ElementType
	className?: string
	revealDelayMs?: number
	flipDelayMs?: number
	charset?: string
	encryptedClassName?: string
	revealedClassName?: string
	replayOnHover?: boolean
}

const rand = (set: string) => set[Math.floor(Math.random() * set.length)]

export function EncryptedText({
	text,
	as: Tag = "span",
	className,
	revealDelayMs = 35,
	flipDelayMs = 40,
	charset = DEFAULT_CHARSET,
	encryptedClassName = "text-accent/70",
	revealedClassName,
	replayOnHover = true,
}: EncryptedTextProps) {
	const reduce = useReducedMotion()
	const ref = useRef<HTMLElement>(null)
	const flipRef = useRef<number>()
	const revRef = useRef<number>()
	const countRef = useRef(0)
	const doneRef = useRef(reduce)

	const [revealed, setRevealed] = useState(reduce ? text.length : 0)
	// bumped on every gibberish flip so unrevealed glyphs re-randomize
	const [, force] = useState(0)

	const stop = useCallback(() => {
		window.clearInterval(flipRef.current)
		window.clearInterval(revRef.current)
	}, [])

	const run = useCallback(() => {
		if (reduce) {
			setRevealed(text.length)
			doneRef.current = true
			return
		}
		stop()
		countRef.current = 0
		doneRef.current = false
		setRevealed(0)
		flipRef.current = window.setInterval(() => force((n) => n + 1), flipDelayMs)
		revRef.current = window.setInterval(() => {
			countRef.current += 1
			setRevealed(countRef.current)
			if (countRef.current >= text.length) {
				stop()
				doneRef.current = true
			}
		}, revealDelayMs)
	}, [reduce, text, flipDelayMs, revealDelayMs, stop])

	// First reveal when it scrolls into view.
	useEffect(() => {
		if (reduce) return
		const el = ref.current
		if (!el) return
		const io = new IntersectionObserver(
			(entries) => {
				if (entries.some((e) => e.isIntersecting)) {
					run()
					io.disconnect()
				}
			},
			{ threshold: 0.4 },
		)
		io.observe(el)
		return () => {
			io.disconnect()
			stop()
		}
	}, [reduce, run, stop])

	// Re-scramble on hover (fine pointers only) once the first decode finished.
	const onEnter = useCallback(() => {
		if (!replayOnHover || reduce || !doneRef.current) return
		if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
		run()
	}, [replayOnHover, reduce, run])

	const chars = Array.from(text)
	const done = revealed >= chars.length
	const revealedStr = chars.slice(0, revealed).join("")
	const encryptedStr = chars
		.slice(revealed)
		.map((ch) => (ch === " " || ch === "\u00A0" ? ch : rand(charset)))
		.join("")

	return (
		<Tag
			ref={ref}
			onMouseEnter={onEnter}
			className={cn("relative inline-block align-top", className)}
		>
			{/* sizer: reserves the final footprint, invisible & inert */}
			<span aria-hidden className="invisible select-none">
				{text}
			</span>

			{/* animated overlay (hidden from AT) — two contiguous runs so the text
          wraps the same way the sizer does. */}
			<span aria-hidden className="absolute left-0 top-0 w-full">
				{revealedStr && (
					<span className={revealedClassName}>{revealedStr}</span>
				)}
				{!done && <span className={encryptedClassName}>{encryptedStr}</span>}
			</span>

			{/* real text for screen readers / copy-paste */}
			<span className="sr-only">{text}</span>
		</Tag>
	)
}

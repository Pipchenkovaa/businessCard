import { cn } from "@/lib/utils";

/** Section label: a // syntax marker + CAPS + bold, tight tracking.
 * The // is the recurring "developer syntax" motif used instead of dots. */
export function Eyebrow({ children, className }: { children: string; className?: string }) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-1.5 text-sm", className)}>
      <span className="text-accent/50">//</span>
      <span>{children}</span>
    </span>
  );
}

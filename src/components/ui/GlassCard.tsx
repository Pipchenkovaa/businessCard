import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

/** A frosted-glass panel. With `interactive`, it lifts and brightens on hover. */
export function GlassCard({ children, className, interactive }: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        interactive
          ? { y: -4, boxShadow: "0 24px 60px -18px rgba(0,0,0,0.8)" }
          : undefined
      }
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={cn(
        "glass relative overflow-hidden",
        interactive && "cursor-pointer transition-colors hover:border-white/20 hover:bg-white/[0.06]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

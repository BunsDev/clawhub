import * as React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "compact" | "pending" | "success" | "warning" | "destructive";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        // Base styles — premium editorial aesthetic
        "inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] text-fs-xs font-medium tracking-wide",
        // Variant styles — soft, refined colors
        variant === "default" && "bg-[color:var(--surface-muted)] px-3 py-1.5 text-[color:var(--ink-soft)] border-none",
        variant === "accent" && "bg-[rgba(214,69,65,0.1)] px-3 py-1.5 text-[color:var(--accent)] border-none",
        variant === "compact" && "bg-[color:var(--surface-muted)] px-2.5 py-1 text-fs-xs text-[color:var(--ink-soft)] border-none",
        variant === "pending" && "bg-status-warning-bg px-3 py-1.5 text-status-warning-fg border-none",
        variant === "success" && "bg-status-success-bg px-3 py-1.5 text-status-success-fg border-none",
        variant === "warning" && "bg-status-warning-bg px-3 py-1.5 text-status-warning-fg border-none",
        variant === "destructive" && "bg-status-error-bg px-3 py-1.5 text-status-error-fg border-none",
        className,
      )}
      {...props}
    />
  ),
);
Badge.displayName = "Badge";

export { Badge };

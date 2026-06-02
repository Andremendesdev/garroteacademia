import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-white/8 bg-white/[0.03] text-zinc-500",
        neon:
          "badge-neon-glow border-red-700/60 bg-red-950/50 text-red-600 shadow-[0_0_12px_rgba(220,38,38,0.2)]",
        glass:
          "glass-card border-white/10 text-zinc-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

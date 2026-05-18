import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "premium-card rounded-2xl p-6 lg:p-8",
        hover && "hover:shadow-[0_0_0_1px_hsl(142_76%_36%/0.2),0_20px_60px_hsl(0_0%_0%/0.5),0_0_40px_hsl(142_76%_36%/0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
};

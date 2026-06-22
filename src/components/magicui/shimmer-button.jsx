import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const ShimmerButton = forwardRef(function ShimmerButton(
  {
    as: Component = "button",
    shimmerColor = "#ffffff",
    shimmerSize = "0.08em",
    borderRadius = "12px",
    shimmerDuration = "3s",
    background = "#9b4dff",
    className,
    children,
    ...props
  },
  ref,
) {
  return (
    <Component
      ref={ref}
      className={cn(
        "shimmer-button group relative z-0 inline-flex items-center justify-center overflow-hidden whitespace-nowrap border border-white/15 px-6 py-3.5 font-semibold text-white transition-transform duration-300 active:translate-y-px",
        className,
      )}
      style={{
        "--shimmer-color": shimmerColor,
        "--radius": borderRadius,
        "--speed": shimmerDuration,
        "--cut": shimmerSize,
        "--button-bg": background,
      }}
      {...props}
    >
      <span aria-hidden="true" className="shimmer-button__spark" />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      <span aria-hidden="true" className="shimmer-button__highlight" />
      <span aria-hidden="true" className="shimmer-button__backdrop" />
    </Component>
  );
});

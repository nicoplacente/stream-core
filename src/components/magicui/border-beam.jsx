"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function BorderBeam({
  className,
  size = 56,
  delay = 0,
  duration = 8,
  colorFrom = "#c27aff",
  colorTo = "#36f6a5",
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[inherit] border-transparent [border-width:var(--beam-width)] [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
      style={{ "--beam-width": `${borderWidth}px` }}
    >
      <motion.div
        className={cn(
          "absolute aspect-square bg-linear-to-l from-(--beam-from) via-(--beam-to) to-transparent",
          className,
        )}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          "--beam-from": colorFrom,
          "--beam-to": colorTo,
        }}
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{ repeat: Infinity, ease: "linear", duration, delay: -delay }}
      />
    </div>
  );
}

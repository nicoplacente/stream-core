"use client";

import { useEffect, useId, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 5,
  delay = 0,
  pathColor = "#26304a",
  pathWidth = 2,
  pathOpacity = 0.5,
  gradientStartColor = "#c27aff",
  gradientStopColor = "#36f6a5",
}) {
  const id = useId();
  const [path, setPath] = useState("");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const container = containerRef.current.getBoundingClientRect();
      const from = fromRef.current.getBoundingClientRect();
      const to = toRef.current.getBoundingClientRect();
      const startX = from.left - container.left + from.width / 2;
      const startY = from.top - container.top + from.height / 2;
      const endX = to.left - container.left + to.width / 2;
      const endY = to.top - container.top + to.height / 2;

      setDimensions({ width: container.width, height: container.height });
      setPath(
        `M ${startX},${startY} Q ${(startX + endX) / 2},${startY - curvature} ${endX},${endY}`,
      );
    };

    const observer = new ResizeObserver(updatePath);
    if (containerRef.current) observer.observe(containerRef.current);
    updatePath();
    return () => observer.disconnect();
  }, [containerRef, curvature, fromRef, toRef]);

  const gradient = reverse
    ? { x1: ["90%", "-10%"], x2: ["100%", "0%"] }
    : { x1: ["10%", "110%"], x2: ["0%", "100%"] };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      width={dimensions.width}
      height={dimensions.height}
      className={cn("pointer-events-none absolute inset-0", className)}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
    >
      <path
        d={path}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path d={path} strokeWidth={pathWidth} stroke={`url(#${id})`} strokeLinecap="round" />
      <defs>
        <motion.linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: "0%" }}
          animate={{ ...gradient, y1: ["0%", "0%"], y2: ["0%", "0%"] }}
          transition={{ delay, duration, ease: [0.16, 1, 0.3, 1], repeat: Infinity }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
}

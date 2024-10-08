import React from "react";
import { twMerge } from "tailwind-merge";

export default function Skleton({ className, noAnimate = false }: { className?: string; noAnimate?: boolean }) {
  return (
    <div
      className={twMerge("bg-bg-disabled dark:bg-text-secondary rounded-2xl", !noAnimate && "animate-pulse", className)}
    />
  );
}

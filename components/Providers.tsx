"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Honors the user's prefers-reduced-motion setting for all animations. */
export default function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

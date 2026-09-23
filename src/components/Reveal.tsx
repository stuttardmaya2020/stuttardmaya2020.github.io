import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { rise, stagger } from "../lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
  step?: number;
}

/** Staggers its `RevealItem` children in once, when scrolled into view. */
export function Reveal({ children, className, as = "div", step }: RevealProps) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={stagger(step)}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15 }}>
      {children}
    </Tag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "p" | "figure";
}) {
  const Tag = motion[as];
  return (
    <Tag className={className} variants={rise}>
      {children}
    </Tag>
  );
}

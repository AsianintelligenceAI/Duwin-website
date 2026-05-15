"use client";

import { useEffect, useRef, ReactNode, ElementType } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  /** Animation variant — maps to global CSS class */
  variant?: "reveal" | "reveal-left" | "reveal-right" | "reveal-scale";
  delay?: "delay-100" | "delay-150" | "delay-200" | "delay-300" | "delay-400" | "delay-500" | "delay-600" | "delay-700" | "delay-800";
  /** Extra wrapper classes (layout, spacing, etc.) */
  wrapperClass?: string;
  as?: ElementType;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className,
  variant = "reveal",
  delay,
  wrapperClass,
  as: Tag = "div",
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const classes = [variant, delay, className].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={`${classes} ${wrapperClass ?? ""}`.trim()}>
      {children}
    </Tag>
  );
}

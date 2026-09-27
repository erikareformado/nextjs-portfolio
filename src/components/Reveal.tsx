"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined =
    delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  const classes = ["reveal", visible ? "reveal-visible" : null, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} style={style} className={classes}>
      {children}
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const layers = container.querySelectorAll<HTMLDivElement>(".stars, .stars2, .stars3");
    const speeds = [0.08, 0.15, 0.25];

    let rafId: number;

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        layers.forEach((layer, i) => {
          layer.style.transform = `translateY(${scrollY * speeds[i]}px)`;
        });
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="star-field fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />
    </div>
  );
}

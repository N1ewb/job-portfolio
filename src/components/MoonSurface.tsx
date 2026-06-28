"use client";

import { useEffect, useRef } from "react";

export default function MoonSurface() {
  const surfaceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const surface = surfaceRef.current;
    if (!surface) return;

    let rafId: number;

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(1, window.scrollY / maxScroll);
        const pct = 100 - progress * 150;
        surface.style.transform = `translateY(${pct}%)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={surfaceRef}
      className="fixed bottom-0 inset-x-0 flex justify-center pointer-events-none"
      style={{ transform: "translateY(100%)" }}
    >
      <div className="relative h-[150vh] w-[150vh] shrink-0 rounded-full moon-base">
        <div className="absolute inset-0 rounded-full moon-maria" />
        <div className="absolute inset-0 rounded-full moon-texture" />

        <div className="maria absolute left-[30%] top-[35%] h-[18%] w-[25%] rounded-[50%]" />
        <div className="maria absolute left-[55%] top-[28%] h-[12%] w-[16%] rounded-[50%]" />
        <div className="maria absolute left-[20%] top-[50%] h-[8%] w-[12%] rounded-[50%]" />

        <div className="crater absolute left-[15%] top-[18%] h-[6%] w-[10%] rounded-[50%]" />
        <div className="crater absolute left-[48%] top-[12%] h-[4%] w-[7%] rounded-[50%]" />
        <div className="crater absolute left-[65%] top-[20%] h-[5%] w-[8%] rounded-[50%]" />
        <div className="crater absolute left-[25%] top-[30%] h-[3%] w-[5%] rounded-[50%]" />
        <div className="crater absolute left-[40%] top-[45%] h-[7%] w-[11%] rounded-[50%]" />
        <div className="crater absolute left-[70%] top-[42%] h-[4%] w-[7%] rounded-[50%]" />
        <div className="crater absolute left-[18%] top-[55%] h-[3%] w-[5%] rounded-[50%]" />
        <div className="crater absolute left-[55%] top-[55%] h-[5%] w-[8%] rounded-[50%]" />
        <div className="crater absolute left-[78%] top-[50%] h-[3%] w-[5%] rounded-[50%]" />
        <div className="crater absolute left-[35%] top-[65%] h-[4%] w-[7%] rounded-[50%]" />
        <div className="crater absolute left-[60%] top-[68%] h-[3%] w-[5%] rounded-[50%]" />
        <div className="crater absolute left-[45%] top-[78%] h-[6%] w-[10%] rounded-[50%]" />

        <div className="crater-sm absolute left-[22%] top-[15%] h-[2%] w-[3.5%] rounded-[50%]" />
        <div className="crater-sm absolute left-[52%] top-[20%] h-[1.5%] w-[2.5%] rounded-[50%]" />
        <div className="crater-sm absolute left-[38%] top-[28%] h-[2%] w-[3%] rounded-[50%]" />
        <div className="crater-sm absolute left-[60%] top-[30%] h-[1.8%] w-[3%] rounded-[50%]" />
        <div className="crater-sm absolute left-[72%] top-[35%] h-[2.2%] w-[3.5%] rounded-[50%]" />
        <div className="crater-sm absolute left-[28%] top-[42%] h-[1.5%] w-[2.5%] rounded-[50%]" />
        <div className="crater-sm absolute left-[50%] top-[48%] h-[2%] w-[3%] rounded-[50%]" />
        <div className="crater-sm absolute left-[80%] top-[45%] h-[1.8%] w-[2.8%] rounded-[50%]" />
        <div className="crater-sm absolute left-[15%] top-[60%] h-[2%] w-[3%] rounded-[50%]" />
        <div className="crater-sm absolute left-[65%] top-[60%] h-[1.5%] w-[2.5%] rounded-[50%]" />
        <div className="crater-sm absolute left-[40%] top-[72%] h-[2%] w-[3%] rounded-[50%]" />
        <div className="crater-sm absolute left-[70%] top-[75%] h-[1.8%] w-[2.5%] rounded-[50%]" />
        <div className="crater-sm absolute left-[25%] top-[75%] h-[1.5%] w-[2%] rounded-[50%]" />
        <div className="crater-sm absolute left-[55%] top-[82%] h-[2%] w-[3%] rounded-[50%]" />

        <div className="absolute inset-0 rounded-full moon-ridges" />
        <div className="absolute inset-0 rounded-full moon-grain" />
        <div className="absolute inset-0 rounded-full moon-lighting" />
      </div>
    </div>
  );
}

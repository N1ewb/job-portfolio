"use client";

import { useEffect, useState } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
  websiteUrl?: string;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  images,
  websiteUrl,
}: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  const nextImage = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div
        className="modal-backdrop absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="relative z-10 max-w-4xl w-full max-h-[90vh] flex flex-col rounded-2xl overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a1a 50%, #050510 100%)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 0 60px rgba(100, 100, 200, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full transition-all hover:scale-110"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "rgba(255, 255, 255, 0.7)",
          }}
          aria-label="Close modal"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Carousel */}
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: direction === "next" ? 1 : 0,
              transform: direction === "next" ? "translateX(0)" : "translateX(-20px)",
            }}
          >
            <img
              src={images[currentIndex]}
              alt={`${title} - screenshot ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              style={{
                filter: "brightness(0.9) contrast(1.1)",
              }}
            />
            {/* Space-like vignette overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
            }} />
          </div>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all hover:scale-110"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "rgba(255, 255, 255, 0.9)",
                }}
                aria-label="Previous image"
              >
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all hover:scale-110"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "rgba(255, 255, 255, 0.9)",
                }}
                aria-label="Next image"
              >
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="w-2.5 h-2.5 rounded-full transition-all"
                  style={{
                    background: i === currentIndex ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                    transform: i === currentIndex ? "scale(1.3)" : "scale(1)",
                    boxShadow: i === currentIndex ? "0 0 12px rgba(255,255,255,0.5)" : "none",
                  }}
                  aria-label={`Go to image ${i + 1}`}
                  aria-current={i === currentIndex ? "true" : "false"}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex-1 overflow-y-auto">
          <h2 id="modal-title" className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#fff" }}>
            {title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
            {description}
          </p>

          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all"
              style={{
                background: "linear-gradient(135deg, rgba(100, 100, 220, 0.3) 0%, rgba(80, 80, 180, 0.3) 100%)",
                border: "1px solid rgba(120, 120, 255, 0.4)",
                color: "#fff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(100, 100, 220, 0.5) 0%, rgba(80, 80, 180, 0.5) 100%)";
                e.currentTarget.style.boxShadow = "0 0 24px rgba(100, 100, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(100, 100, 220, 0.3) 0%, rgba(80, 80, 180, 0.3) 100%)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Live Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
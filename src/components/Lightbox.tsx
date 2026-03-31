"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

interface LightboxProps {
  images: string[];
  alt: string;
  columns?: 3 | 4;
}

const gridClass: Record<number, string> = {
  3: "grid grid-cols-2 md:grid-cols-3 gap-3",
  4: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3",
};

export default function Lightbox({ images, alt, columns = 3 }: LightboxProps) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((i) => (i !== null ? (i - 1 + images.length) % images.length : null)),
    [images.length]
  );
  const next = useCallback(
    () => setOpen((i) => (i !== null ? (i + 1) % images.length : null)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, prev, next]);

  return (
    <>
      <div className={gridClass[columns]}>
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className={`${columns === 4 ? "aspect-square" : "aspect-[4/3]"} relative bg-neutral-200 overflow-hidden cursor-zoom-in`}
          >
            <Image
              src={src}
              alt={`${alt} — image ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-6 text-white text-3xl cursor-pointer z-10 hover:opacity-70"
            aria-label="Close"
          >
            &times;
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer z-10 hover:opacity-70 px-3 py-2"
                aria-label="Previous image"
              >
                &#8249;
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer z-10 hover:opacity-70 px-3 py-2"
                aria-label="Next image"
              >
                &#8250;
              </button>
            </>
          )}

          <div
            className="relative w-[90vw] h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[open]}
              alt={`${alt} — image ${open + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <div className="absolute bottom-6 text-neutral-400 text-sm">
            {open + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

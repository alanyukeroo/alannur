"use client";

import { useEffect } from "react";

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
  sections: { id: string; label: string }[];
}

export default function MenuOverlay({
  open,
  onClose,
  sections,
}: MenuOverlayProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-6 text-white text-3xl cursor-pointer"
        aria-label="Close menu"
      >
        &times;
      </button>
      <nav className="flex flex-col items-center gap-6">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={onClose}
            className="text-white text-2xl font-serif tracking-wide uppercase hover:opacity-70 transition-opacity"
          >
            {section.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

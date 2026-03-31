"use client";

import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects & Patents" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "awards", label: "Awards" },
  { id: "personal", label: "Personal" },
];

export default function Header({ name }: { name: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-14">
          <a
            href="#"
            className="text-sm font-semibold tracking-[0.2em] uppercase font-serif"
          >
            {name}
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 text-sm tracking-[0.15em] uppercase cursor-pointer"
            aria-label="Open menu"
          >
            <span className="hidden sm:inline">Menu</span>
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              className="mt-0.5"
            >
              <line y1="1" x2="20" y2="1" stroke="white" strokeWidth="2" />
              <line y1="7" x2="20" y2="7" stroke="white" strokeWidth="2" />
              <line y1="13" x2="20" y2="13" stroke="white" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </header>

      <MenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        sections={sections}
      />
    </>
  );
}

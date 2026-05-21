"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Skills", "Projects", "Vision", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#" className="text-xl font-bold tracking-wide text-white">
          Praise Innocent.
        </a>

        <div className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#050816] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-300 transition hover:text-cyan-400"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
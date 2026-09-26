"use client";

import { useEffect, useState } from "react";

const links = ["About", "Education", "Skills", "Projects", "Vision", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const lineClass =
    "absolute left-1/2 h-0.5 w-7 -translate-x-1/2 rounded-full bg-white transition-all duration-300 ease-out";

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
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="relative h-11 w-11 rounded-full border border-white/10 bg-white/5 md:hidden"
        >
          <span
            className={`${lineClass} ${open ? "top-1/2 rotate-45" : "top-3"}`}
          />
          <span
            className={`${lineClass} ${open ? "opacity-0" : "top-1/2 -translate-y-1/2"}`}
          />
          <span
            className={`${lineClass} ${open ? "top-1/2 -rotate-45" : "bottom-3"}`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-slate-900/70 backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col px-6 pt-5 text-slate-950">
          <div className="flex items-center justify-end border-b border-slate-950/20 pb-4">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="relative h-11 w-11 rounded-full border border-slate-950/20 bg-white/20"
            >
              <span className="absolute left-1/2 top-1/2 h-0.5 w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-slate-950" />
              <span className="absolute left-1/2 top-1/2 h-0.5 w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-slate-950" />
            </button>
          </div>

          <div className="flex bg-slate-900/90 backdrop-blur-lg flex-1 flex-col items-center justify-center gap-4 pb-16">
            {links.map((link, index) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className={`w-full max-w-xs -translate-y-6 rounded-2xl border border-slate-950/20 bg-white/15 px-5 py-4 text-center text-2xl font-semibold tracking-[0.12em] text-cyan-200  shadow-lg shadow-slate-900/10 transition-all duration-500 ease-out hover:bg-white/25 hover:text-slate-950 ${
                  open ? "translate-y-0 opacity-100" : ""
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
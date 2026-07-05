"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <Link
          href="/"
          className="font-display text-xl tracking-wide text-ink"
          onClick={() => setOpen(false)}
        >
          CLASES DE BATERÍA
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        <nav className="hidden sm:block">
          <ul className="flex items-center gap-6 font-body text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-ink/80 transition-colors hover:underline decoration-teal decoration-2 underline-offset-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-paper sm:hidden">
          <ul className="flex flex-col px-5 py-2 font-body text-base">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-ink/5 last:border-0">
                <Link
                  href={link.href}
                  className="block py-3 text-ink/85 hover:underline decoration-teal decoration-2 underline-offset-4"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

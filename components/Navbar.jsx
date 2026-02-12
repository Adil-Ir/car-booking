'use client';

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cars", label: "Cars" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,0.9)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/40">
            <span className="text-lg font-semibold text-primary">CB</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight">
              CarBook
            </span>
            <span className="text-xs text-slate-400">
              Premium car rentals
            </span>
          </div>
        </div>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900/70 text-slate-200 hover:bg-slate-900 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open main menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded bg-slate-200" />
            <span className="block h-0.5 w-4 rounded bg-slate-400" />
            <span className="block h-0.5 w-5 rounded bg-slate-200" />
          </div>
        </button>

        <div className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-primary-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/cars"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-light"
          >
            Book now
          </Link>
        </div>
      </nav>

      {open && (
        <div className="bg-slate-950/95 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900/80"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/cars"
              className="mt-2 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-primary-light"
              onClick={() => setOpen(false)}
            >
              Book now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


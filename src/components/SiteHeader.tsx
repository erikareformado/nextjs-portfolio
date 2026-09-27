"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks, site } from "@/data/site";

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) {
          current = id;
        }
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        current = sectionIds[sectionIds.length - 1];
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-violet/15 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <a href="#home" className="group flex items-center gap-2.5">
          <Image
            src="/Erika-portrait.jpg"
            alt={`Portrait of ${site.name}`}
            width={36}
            height={36}
            className="size-9 rounded-full object-cover ring-2 ring-violet/25 transition duration-300 group-hover:scale-105 group-hover:ring-coral/60"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-coral">
              {site.name}
            </span>
            <span className="text-xs font-medium text-ink/55">Developer</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === id ? "true" : undefined}
                className={`text-sm font-medium transition-colors hover:text-coral ${
                  active === id ? "text-coral" : "text-ink/70"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden h-10 items-center rounded-full bg-linear-to-r from-coral to-violet px-4 text-sm font-semibold text-white shadow-lg shadow-coral/25 transition hover:brightness-110 md:inline-flex"
          >
            Get in touch
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-violet/20 bg-surface text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span
                className={`h-0.5 w-4 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-4 bg-current transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-4 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-violet/15 bg-surface/90 px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block py-1 text-base font-medium ${active === id ? "text-coral" : "text-ink"}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
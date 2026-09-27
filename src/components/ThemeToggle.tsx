"use client";

import { useLayoutEffect } from "react";
import { applyTheme, getPreferredTheme, setThemeClass } from "@/lib/theme";

export default function ThemeToggle() {
  // The inline script in the root layout already applied the stored theme
  // before first paint, so the markup below never depends on the active theme
  // and hydration always matches. React only resets <html> on a Strict Mode
  // remount in development, so re-apply the class to undo that. No-op in prod.
  useLayoutEffect(() => {
    setThemeClass(getPreferredTheme());
  }, []);

  function toggleTheme() {
    const next = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    applyTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex size-10 items-center justify-center rounded-full border border-violet/20 bg-surface text-ink transition hover:border-coral/40 hover:text-coral"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <svg
        viewBox="0 0 24 24"
        className="hidden size-5 dark:block"
        fill="none"
        aria-hidden
      >
        <path
          d="M12 4V2M12 22v-2M4.93 4.93 3.51 3.51M20.49 20.49l-1.42-1.42M4 12H2M22 12h-2M4.93 19.07 3.51 20.49M20.49 3.51l-1.42 1.42"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="block size-5 dark:hidden"
        fill="none"
        aria-hidden
      >
        <path
          d="M21 14.3A8.5 8.5 0 0 1 9.7 3 7 7 0 1 0 21 14.3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

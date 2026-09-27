export const THEME_STORAGE_KEY = "theme";

export type Theme = "light" | "dark";

const DARK_QUERY = "(prefers-color-scheme: dark)";

export function getPreferredTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
      return stored;
    }
  } catch {
    // localStorage can be unavailable (private mode, blocked cookies).
  }
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

export function setThemeClass(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function applyTheme(theme: Theme) {
  setThemeClass(theme);
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore write failures; the class is still applied for this session.
  }
}

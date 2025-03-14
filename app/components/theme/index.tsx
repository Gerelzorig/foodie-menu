"use client";

import { useTheme } from "@/app/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="p-2" onClick={toggleTheme}>
      {theme === "dark" ? "☀️" : "🌑"}
    </button>
  );
}

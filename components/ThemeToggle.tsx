"use client";

import { useEffect, useState } from "react";

const THEMES = [
  {
    id: "navy",
    label: "Navy",
    swatch: "#1e3a5f",
    ring: "#1e3a5f",
  },
  {
    id: "teal",
    label: "Teal",
    swatch: "#1f8c9c",
    ring: "#1f8c9c",
  },
];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"navy" | "teal">("navy");

  // Restore from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("duwin-theme") as "navy" | "teal" | null;
    if (saved === "teal") {
      setTheme("teal");
      document.documentElement.setAttribute("data-theme", "teal");
    }
  }, []);

  function switchTheme(id: "navy" | "teal") {
    setTheme(id);
    localStorage.setItem("duwin-theme", id);
    if (id === "teal") {
      document.documentElement.setAttribute("data-theme", "teal");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  return (
    <div className="flex items-center gap-1.5 bg-slate-100 rounded-full p-1" role="group" aria-label="Switch colour palette">
      {THEMES.map((t) => {
        const active = theme === t.id;
        return (
          <button
            key={t.id}
            onClick={() => switchTheme(t.id as "navy" | "teal")}
            aria-pressed={active}
            aria-label={`Switch to ${t.label} colour palette`}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${
              active
                ? "bg-white shadow-sm text-slate-800"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: t.swatch }}
            />
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setIsDark(false);
      document.body.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div
      onClick={toggleTheme}
      className="widget-card col-span-1 rounded-xl overflow-hidden select-none border-2 border-black/40 bg-widget-bg flex items-center justify-center hover:scale-[1.03] cursor-pointer"
    >
      <div className="text-4xl">
        {isDark ? "🌙" : "☀️"}
      </div>
    </div>
  );
}

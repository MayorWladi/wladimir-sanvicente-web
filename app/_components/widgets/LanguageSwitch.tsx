// app/_components/widgets/LanguageSwitch.tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitch({
  currentLabel,
}: {
  currentLabel: string;
}) {
  const pathname = usePathname();

  // Dividimos el pathname para obtener el segmento del idioma (ej: ["", "en", "projects"])
  const segments = pathname.split("/");
  const currentLocale = segments[1]; // 'en' o 'es'

  // Determinamos el idioma contrario
  const targetLocale = currentLocale === "en" ? "es" : "en";

  // Reconstruimos el path reemplazando solo el primer segmento
  const newPath = `/${targetLocale}/${segments.slice(2).join("/")}`;

  return (
    <Link
      href={newPath}
      prefetch={true}
      className="transition-all widget-card col-span-1 rounded-xl overflow-hidden select-none border-2 border-black/40 bg-widget-bg hover:scale-[1.03] cursor-pointer relative"
    >
      {/* CAPA 1: Idioma activo siempre centrado */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-4xl font-bold">{currentLabel}</h1>
      </div>

      {/* CAPA 2: Chrome */}
      <div className="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none">
        {/* Globe icon — top-right */}
        <div className="flex justify-end">
          <svg className="text-text-secondary" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
          </svg>
        </div>
        {/* Selector EN / ES — bottom-center */}
        <div className="flex items-center justify-center gap-3">
          <span className={currentLocale === "en" ? "text-accent-purple text-lg font-bold" : "text-sm opacity-40 font-medium"}>
            EN
          </span>
          <span className={currentLocale === "es" ? "text-accent-purple text-lg font-bold" : "text-sm opacity-40 font-medium"}>
            ES
          </span>
        </div>
      </div>
    </Link>
  );
}
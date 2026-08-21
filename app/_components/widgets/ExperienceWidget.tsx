import type { Dictionary } from "@/app/[lang]/dictionaries";

export default function ExperienceWidget({ dict }: { dict: Dictionary }) {
  const experience = new Date().getFullYear() - 2019;

  return (
    <a
      href="/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="widget-card col-span-1 rounded-xl overflow-hidden select-none border-2 border-black/40 bg-accent-blue/75 flex items-center justify-center hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer relative"
    >
      {/* Icono indicador de descarga/enlace en la esquina */}
      <svg
        className="absolute top-3 right-3 text-white/60"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
      
      <div className="grid place-items-center">
        <h1 className="text-5xl font-bold">+{experience}</h1>
        <p className="text-sm font-medium opacity-80 text-center px-2">
          {dict.experience.unit}
        </p>
      </div>
    </a>
  );
}

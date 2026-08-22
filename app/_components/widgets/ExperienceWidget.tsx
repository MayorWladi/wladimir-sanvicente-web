import type { Dictionary } from "@/app/[lang]/dictionaries";

export default function ExperienceWidget({ dict }: { dict: Dictionary }) {
  const experience = new Date().getFullYear() - 2019;

  return (
    <a
      href="/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="widget-card col-span-1 sm:col-span-1 rounded-xl overflow-hidden select-none border-2 border-black/40 bg-accent-purple/20 hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer relative group"
    >
      {/* CAPA 1: Número siempre centrado */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white transition-all group-hover:scale-110">+{experience}</h1>
      </div>

      {/* CAPA 2: Chrome */}
      <div className="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none">
        <div className="flex justify-end">
          <svg className="text-white/60 group-hover:text-white transition-colors" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </div>
        <div>
          <p className="text-white/60 text-sm ">{dict.experience.unit}</p>
        </div>
      </div>
    </a>
  );
}

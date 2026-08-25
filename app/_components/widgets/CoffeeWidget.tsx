import type { Dictionary } from "@/app/[lang]/dictionaries";

export default function CoffeeWidget({ dict, count }: { dict: Dictionary, count: number }) {
  const formattedCount = count.toLocaleString();

  return (
    <div className="widget-card col-span-1 bg-accent-green/20 group">
      {/* CAPA 1: Centro */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white transition-all group-hover:scale-110">
          {formattedCount}+
        </h1>
      </div>

      {/* Barista SVG (Left of machine) */}
      <div className="absolute bottom-1 right-10 opacity-60 pointer-events-none">
        <svg width="40" height="48" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <style>{`
            @keyframes stir {
              0% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-1px) rotate(-5deg); }
              100% { transform: translateY(0px) rotate(0deg); }
            }
            .anim-stir { animation: stir 0.5s infinite; transform-origin: 16px 13px; }
          `}</style>
          {/* Head */}
          <rect x="4" y="4" width="8" height="8" fill="#FCD34D" />
          {/* Barista Hat (Green) */}
          <rect x="2" y="2" width="12" height="3" fill="#047857" />
          <rect x="14" y="3" width="4" height="2" fill="#047857" /> {/* visera facing right */}
          {/* Body (White shirt) */}
          <rect x="4" y="12" width="10" height="10" fill="#F3F4F6" />
          {/* Apron (Green) */}
          <rect x="4" y="15" width="10" height="9" fill="#047857" />
          {/* Legs */}
          <rect x="5" y="24" width="3" height="6" fill="#111827" />
          <rect x="10" y="24" width="3" height="6" fill="#111827" />
          {/* Arm holding pot - Animated */}
          <g className="anim-stir">
            <rect x="8" y="13" width="8" height="3" fill="#F3F4F6" />
            <rect x="16" y="13" width="2" height="4" fill="#FCD34D" /> {/* Hand */}
            {/* Coffee Pot */}
            <rect x="17" y="15" width="5" height="5" rx="1" fill="#9CA3AF" />
            <rect x="22" y="16" width="2" height="1" fill="#111827" /> {/* Spout */}
          </g>
        </svg>
      </div>

      {/* Coffee Machine SVG */}
      <div className="absolute bottom-1 right-2 opacity-70 pointer-events-none">
        <svg width="40" height="48" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base */}
          <rect x="4" y="34" width="22" height="6" rx="2" fill="#374151" />
          {/* Body */}
          <rect x="8" y="10" width="14" height="24" fill="#4B5563" />
          {/* Top/Reservoir */}
          <rect x="6" y="2" width="18" height="8" rx="2" fill="#9CA3AF" />
          {/* Spout */}
          <rect x="4" y="16" width="6" height="4" fill="#1F2937" />
          <rect x="4" y="20" width="2" height="4" fill="#1F2937" />
          {/* Cup */}
          <rect x="4" y="28" width="7" height="6" rx="1" fill="#F9FAFB" />
        </svg>
      </div>

      {/* CAPA 2: Bordes (Metadata) */}
      <div className="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none">
        <div className="flex justify-end">
          <span className="text-xl opacity-80 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            {dict.coffee.emoji}
          </span>
        </div>
        <div>
          <h2 className="text-zinc-300 text-sm">
            {dict.coffee.label}
          </h2>
        </div>
      </div>
    </div>
  );
}

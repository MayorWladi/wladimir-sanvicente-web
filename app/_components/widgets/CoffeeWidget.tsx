import type { Dictionary } from "@/app/[lang]/dictionaries";

export default function CoffeeWidget({ dict }: { dict: Dictionary }) {
  return (
    <div className="widget-card col-span-1 rounded-xl overflow-hidden select-none border-2 border-black/40 bg-accent-green/20 relative group">
      {/* CAPA 1: Centro */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white transition-all group-hover:scale-110">
          {dict.coffee.amount}
        </h2>
      </div>

      {/* CAPA 2: Bordes (Metadata) */}
      <div className="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none">
        <div className="flex justify-end">
          <span className="text-xl opacity-80 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            {dict.coffee.emoji}
          </span>
        </div>
        <div>
          <h2 className="text-white/60 text-sm">
            {dict.coffee.label}
          </h2>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useLanyard } from "../LanyardProvider";
import Image from "next/image";

function formatElapsed(ms: number) {
  if (ms < 0) return "0:00";
  const t = Math.floor(ms / 1000);
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  if (h > 0) return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function ActivityWidget() {
  const { activities } = useLanyard();
  const [elapsed, setElapsed] = useState<number>(0);

  const act = activities?.find((a) => a.timestamps?.start && a.name !== "Spotify" && a.name !== "Custom Status");

  useEffect(() => {
    if (!act?.timestamps?.start) return;
    setElapsed(Math.max(0, Date.now() - act.timestamps.start));
    const interval = setInterval(() => {
      setElapsed(Math.max(0, Date.now() - act.timestamps!.start!));
    }, 1000);
    return () => clearInterval(interval);
  }, [act]);

  const imageUrl = act?.assets?.large_image && act?.application_id 
    ? (act.assets.large_image.startsWith("mp:external/") 
        ? `https://media.discordapp.net/external/${act.assets.large_image.replace("mp:external/", "")}` 
        : `https://cdn.discordapp.com/app-assets/${act.application_id}/${act.assets.large_image}.png`)
    : null;

  if (!act) {
    return (
      <div className="widget-card widget-interactive col-span-1 bg-black/60 relative group overflow-hidden">
        {/* Capa 1: Icono siempre centrado */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg className="text-zinc-500 group-hover:scale-110 transition-transform duration-300" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
        </div>
        
        {/* Capa 2: Textos */}
        <div className="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none">
          <div /> {/* Espacio superior vacio */}
          <div className="mt-auto flex flex-col min-w-0 w-full text-left">
            <p className="text-zinc-500 font-medium text-[11px]">Thinking...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="widget-card widget-interactive col-span-1 bg-black/60 relative group overflow-hidden">
      {/* Dynamic Blurred Aura Background */}
      {imageUrl && (
        <div 
          className="absolute inset-0 z-0 opacity-40 blur-3xl scale-150"
          style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      )}

      {/* Capa 1: Icono siempre centrado */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        {imageUrl ? (
          <Image unoptimized src={imageUrl} alt={act.name} width={48} height={48} className="object-cover rounded-xl drop-shadow-xl group-hover:scale-110 transition-transform duration-300 mix-blend-screen" />
        ) : (
          <svg className="text-[#45b8d8] group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg>
        )}
      </div>

      {/* Capa 2: Textos & Timer */}
      <div className="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none z-20">
        {/* Top: Timer (Right aligned) */}
        <div className="flex justify-end w-full">
          <div className="text-[#23a559] font-mono text-[9px] font-bold tracking-wider drop-shadow-md bg-black/30 px-2 py-0.5 rounded-full border border-white/5">
            {formatElapsed(elapsed)}
          </div>
        </div>

        {/* Bottom: Details (Left aligned) */}
        <div className="mt-auto flex flex-col min-w-0 w-full text-left">
          <p className="text-white font-bold text-[11px] truncate drop-shadow-md">{act.name}</p>
          {act.details && (
            <p className="text-zinc-300 text-[9px] truncate mt-0.5 drop-shadow-sm leading-tight">{act.details}</p>
          )}
        </div>
      </div>
    </div>
  );
}


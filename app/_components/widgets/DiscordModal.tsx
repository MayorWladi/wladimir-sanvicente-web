"use client";

import { useEffect, useState } from "react";
import { useLanyard, Activity } from "../LanyardProvider";
import Image from "next/image";

function formatElapsed(ms: number) {
  if (ms < 0) return "00:00";
  const t = Math.floor(ms / 1000);
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  if (h > 0) return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function ActivityCard({ act }: { act: Activity }) {
  const [elapsed, setElapsed] = useState<number>(0);

  useEffect(() => {
    if (!act.timestamps?.start) return;
    setElapsed(Math.max(0, Date.now() - act.timestamps.start));
    const interval = setInterval(() => {
      setElapsed(Math.max(0, Date.now() - act.timestamps!.start!));
    }, 1000);
    return () => clearInterval(interval);
  }, [act]);

  let imageUrl = null;
  if (act.assets?.large_image) {
    if (act.assets.large_image.startsWith("spotify:")) {
      imageUrl = `https://i.scdn.co/image/${act.assets.large_image.replace("spotify:", "")}`;
    } else if (act.assets.large_image.startsWith("mp:external/")) {
      imageUrl = `https://media.discordapp.net/external/${act.assets.large_image.replace("mp:external/", "")}`;
    } else if (act.application_id) {
      imageUrl = `https://cdn.discordapp.com/app-assets/${act.application_id}/${act.assets.large_image}.png`;
    }
  } else if (act.application_id) {
    // Fallback: si Discord no provee un asset explícito pero el juego tiene application_id, buscamos su icono principal
    imageUrl = `https://dcdn.dstn.to/app-icons/${act.application_id}`;
  }

  let smallImageUrl = null;
  if (act.assets?.small_image) {
    if (act.assets.small_image.startsWith("spotify:")) {
      smallImageUrl = `https://i.scdn.co/image/${act.assets.small_image.replace("spotify:", "")}`;
    } else if (act.assets.small_image.startsWith("mp:external/")) {
      smallImageUrl = `https://media.discordapp.net/external/${act.assets.small_image.replace("mp:external/", "")}`;
    } else if (act.application_id) {
      smallImageUrl = `https://cdn.discordapp.com/app-assets/${act.application_id}/${act.assets.small_image}.png`;
    }
  }

  return (
    <div className="bg-[#111214] rounded-xl p-4 mt-1 relative">
      <div className="flex gap-4">
        <div className="relative shrink-0 w-16 h-16">
          {imageUrl ? (
            <Image unoptimized src={imageUrl} alt={act.name} fill className="object-cover rounded-xl" />
          ) : (
            <div className="w-full h-full bg-[#2b2d31] rounded-xl flex items-center justify-center">
              <svg className="text-zinc-500" width="32" height="32" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" /></svg>
            </div>
          )}
          {smallImageUrl && (
            <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full border-[3px] border-[#111214] bg-[#2b2d31] overflow-hidden">
              <Image unoptimized src={smallImageUrl} alt="small icon" fill className="object-cover" />
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 min-w-0 justify-center">
          <p className="text-white font-bold text-[14px] leading-tight truncate mb-0.5">{act.name}</p>
          {act.details && <p className="text-zinc-300 text-[13px] leading-snug truncate">{act.details}</p>}
          {act.state && <p className="text-zinc-300 text-[13px] leading-snug truncate">{act.state}</p>}
          {act.timestamps?.start && (
            <p className="text-zinc-400 text-[12px] mt-1 tabular-nums font-mono flex items-center gap-1.5">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm.5 3v4.25l3.5 2-.75 1.25-4.25-2.5V3h1.5z" /></svg>
              {elapsed > 0 ? formatElapsed(elapsed) : "00:00"} elapsed
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DiscordModal({ onClose }: { onClose: () => void }) {
  const { activities } = useLanyard();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const filteredActivities = activities?.filter(a => a.name !== "Custom Status") || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity cursor-pointer" onClick={onClose} />

      <div className="relative w-full max-w-85 bg-[#2b2d31] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/5 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">

        {/* Header Tab-like */}
        <div className="px-5 pt-5 pb-3 border-b border-black/20 flex items-center gap-6">
          <span className="text-white font-bold text-[15px] border-b-[3px] border-white pb-2 -mb-3.25">Activity</span>
        </div>

        {/* Content */}
        <div className="px-4 py-4 max-h-[70vh] overflow-y-auto">
          {filteredActivities.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filteredActivities.map((act, i) => (
                <div key={i}>
                  <h4 className="text-[#b5bac1] text-xs font-bold uppercase tracking-wider mb-2 ml-1">
                    {act.type === 2 ? 'Listening to' : 'Playing'}
                  </h4>
                  <ActivityCard act={act} />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 flex flex-col items-center justify-center text-zinc-400">
              <svg className="mb-2 opacity-50" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-sm">No recent activity</p>
            </div>
          )}
        </div>

        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors p-1">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Footer */}
        <div className="text-[#8e8f92] px-5 py-2.5 bg-black/10 border-t border-black/20 flex items-center justify-center">
          <a href="https://github.com/Phineas/lanyard" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-400 text-[10px] uppercase tracking-wider font-bold transition-colors flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M11.64 5.93h1.43v4.28h-1.43zM11.64 17.07h1.43v-4.28h-1.43zM5.93 11.64h4.28v1.43H5.93zM17.07 11.64h-4.28v1.43h4.28z" /><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
            Powered by Lanyard
          </a>
        </div>
      </div>
    </div>
  );
}




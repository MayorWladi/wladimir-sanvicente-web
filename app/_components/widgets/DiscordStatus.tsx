"use client";

import { useState, useEffect } from "react";

interface DiscordData {
  discord_status: "online" | "idle" | "dnd" | "offline";
}

const statusConfig = {
  online: { bg: "bg-[#23a559]/20", colorClass: "text-[#23a559]", label: "Online" },
  idle: { bg: "bg-[#f0b232]/20", colorClass: "text-[#f0b232]", label: "Idle" },
  dnd: { bg: "bg-[#f23f43]/20", colorClass: "text-[#f23f43]", label: "DnD" },
  offline: { bg: "bg-[#80848e]/20", colorClass: "text-[#80848e]", label: "Offline" },
} as const;

export default function DiscordStatus() {
  const [status, setStatus] = useState<keyof typeof statusConfig>("offline");

  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await fetch(
          "https://api.lanyard.rest/v1/users/201072569342885899"
        );
        const { data } = (await res.json()) as { data: DiscordData };
        setStatus(data.discord_status);
      } catch {
        setStatus("offline");
      }
    }

    fetchStatus();
    const interval = setInterval(fetchStatus, 30_000);
    return () => clearInterval(interval);
  }, []);

  const config = statusConfig[status];

  return (
    <div className={`widget-card col-span-1 rounded-xl overflow-hidden select-none border-2 border-black/40 ${config.bg} relative hover:scale-[1.03] transition-transform duration-300`}>
      {/* CAPA 1: Ícono Discord siempre centrado con color de estado */}
      <div className={`absolute inset-0 flex items-center justify-center ${config.colorClass}`}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
        </svg>
      </div>

      {/* CAPA 2: Chrome — status label abajo centrado */}
      <div className="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none">
        <div /> {/* espacio superior vacío */}
        <p className={`text-center font-bold text-sm ${config.colorClass}`}>{config.label}</p>
      </div>
    </div>
  );
}

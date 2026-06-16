"use client";

import { useRef } from "react";

export default function ProjectsWidget({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseEnter = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/cornifer.mp3");
    }
    audioRef.current.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    audioRef.current?.pause();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="widget-card col-span-2 rounded-xl overflow-hidden select-none border-2 border-black/40 p-0 hover:scale-[1.03] cursor-pointer"
      style={{
        backgroundImage:
          "url('https://media.tenor.com/DmC5jNLSQ0IAAAAC/cornifer.gif')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col h-full w-full bg-black/60 p-4">
        <div className="mt-auto">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-sm opacity-80">{description}</p>
        </div>
      </div>
    </div>
  );
}

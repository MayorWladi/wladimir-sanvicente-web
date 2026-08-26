"use client";

import { useState, useEffect } from "react";
import { useLanyard } from "../LanyardProvider";

interface SpotifyData {
  timestamps?: {
    start: number;
    end: number;
  };
  album_art_url: string;
  artist: string;
  song: string;
  album: string;
  track_id: string;
}

const formatTime = (ms: number) => {
  if (ms < 0) return "0:00";
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function SpotifyWidget({
  listeningLabel,
  offlineLabel,
}: {
  listeningLabel: string;
  offlineLabel: string;
}) {
  const { spotify } = useLanyard();
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (!spotify?.timestamps) return;
    setProgress(Math.max(0, Date.now() - spotify.timestamps.start));
    const interval = setInterval(() => {
      setProgress(Math.max(0, Date.now() - spotify.timestamps!.start));
    }, 1000);
    return () => clearInterval(interval);
  }, [spotify]);

  const spotifyUrl = spotify
    ? `https://open.spotify.com/intl-es/track/${spotify.track_id}`
    : "#";

  return (
    <a
      href={spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`widget-card widget-interactive col-span-2 block w-full h-full ${!spotify ? "bg-widget-bg" : ""}`}
    >
      {spotify ? (
        <>
          {/* Capa 0: Album Art (Image Tag para evitar bugs de CSS background) */}
          <div className="absolute inset-0 pointer-events-none -z-20">
            <img src={spotify.album_art_url} alt="Album Art" className="w-full h-full object-cover" />
          </div>

          {/* Capa 1: Filtro oscuro sobre el album art */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />

          {/* Capa 2: Chrome */}
          <div className="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none z-10">
            <div className="flex justify-end pointer-events-auto">
              <svg
                className="text-white/60 hover:text-white transition-colors"
                width="16"
                height="16"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>
            </div>

            <div className="flex flex-col min-w-0 w-full text-left">
              <h3 className="text-white/70 text-[10px] font-bold uppercase tracking-wider mb-0.5">{listeningLabel}</h3>
              <h1 className="text-white font-bold text-lg leading-tight truncate drop-shadow-md">{spotify.song}</h1>
              <h2 className="text-zinc-300 text-sm truncate drop-shadow-sm">{spotify.artist}</h2>
              {spotify.timestamps && (
                <div className="mt-2.5 flex items-center gap-2 text-[10px] text-zinc-300 font-mono drop-shadow-md">
                  <span>{formatTime(Math.min(progress, spotify.timestamps.end - spotify.timestamps.start))}</span>
                  <div className="flex-1 h-0.5 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white transition-all duration-1000 ease-linear"
                      style={{
                        width: `${Math.min(
                          100,
                          (progress / (spotify.timestamps.end - spotify.timestamps.start)) * 100
                        )}%`,
                      }}
                    />
                  </div>
                  <span>{formatTime(spotify.timestamps.end - spotify.timestamps.start)}</span>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Capa 1: Icono */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              className="opacity-20 w-12 h-12"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
            </svg>
          </div>
          {/* Capa 2: Texto al fondo */}
          <div className="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none z-10">
            <div />
            <p className="text-center font-bold text-sm text-white/60">{offlineLabel}</p>
          </div>
        </>
      )}
    </a>
  );
}





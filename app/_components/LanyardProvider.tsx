"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface SpotifyData {
  timestamps?: { start: number; end: number };
  album_art_url: string;
  artist: string;
  song: string;
  album: string;
  track_id: string;
}

export interface Activity {
  name: string;
  state?: string;
  details?: string;
  application_id?: string;
  timestamps?: { start?: number; end?: number };
}

export interface LanyardData {
  discord_status: "online" | "idle" | "dnd" | "offline";
  spotify: SpotifyData | null;
  activities: Activity[];
}

const LanyardContext = createContext<LanyardData | null>(null);

export function LanyardProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<LanyardData>({
    discord_status: "offline",
    spotify: null,
    activities: [],
  });

  const isListening = !!data.spotify;

  useEffect(() => {
    const fetchLanyard = async () => {
      try {
        const res = await fetch("https://api.lanyard.rest/v1/users/201072569342885899");
        const json = await res.json();
        const rawData = json.data;
        
        setData({
          discord_status: rawData.discord_status ?? "offline",
          spotify: rawData.spotify ?? null,
          activities: rawData.activities ?? [],
        });
      } catch (error) {
        console.error("Error fetching Lanyard:", error);
      }
    };

    fetchLanyard();
    const intervalMs = isListening ? 5_000 : 30_000;
    const interval = setInterval(fetchLanyard, intervalMs);
    
    return () => clearInterval(interval);
  }, [isListening]);

  return (
    <LanyardContext.Provider value={data}>
      {children}
    </LanyardContext.Provider>
  );
}

export function useLanyard() {
  const context = useContext(LanyardContext);
  if (!context) {
    throw new Error("useLanyard must be used within a LanyardProvider");
  }
  return context;
}

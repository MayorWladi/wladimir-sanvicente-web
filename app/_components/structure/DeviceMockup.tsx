"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface DeviceMockupProps {
  os: "android" | "ios";
  staticSrc: string;
  mediaSrc: string;
  alt?: string;
  className?: string;
  hoverMode?: boolean; // NUEVO: Determina si se anima en hover o es constante
}

export default function DeviceMockup({
  os,
  staticSrc,
  mediaSrc,
  alt = "App preview",
  className = "",
  hoverMode = false,
}: DeviceMockupProps) {
  const [staticLoaded, setStaticLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isGif = mediaSrc?.endsWith('.gif');

  // Lógica CSS inteligente: 
  // Si está en hoverMode, el GIF/Video se muestra solo al pasar el mouse por la tarjeta.
  // Si no (ej. en el Modal), se muestra siempre.
  const mediaOpacityClass = hoverMode
    ? "opacity-0 group-hover:opacity-100"
    : "opacity-100";

  // La imagen estática hace lo contrario: se oculta cuando entra el media
  const staticOpacityClass = hoverMode
    ? "opacity-100 group-hover:opacity-0"
    : "opacity-0";

  // Precarga y autoPlay de video (para cuando decidas cambiar el GIF por MP4/WebM)
  useEffect(() => {
    if (!videoRef.current || isGif) return;
    videoRef.current.load();
    videoRef.current.play().catch(() => { });
  }, [mediaSrc, isGif]);

  return (
    <div
      className={`relative z-10 aspect-9/19 bg-black border-4 border-[#1e1e1e] rounded-3xl shadow-2xl overflow-hidden ${className}`}
    >
      {/* Notch (según sistema operativo) */}
      {os === "android" ? (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-black rounded-b-xl z-20 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
        </div>
      ) : (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20"></div>
      )}

      {/* Skeleton mientras carga la imagen estática */}
      {!staticLoaded && (
        <div className="absolute inset-0 bg-widget-skills-bg animate-pulse z-0" />
      )}

      {/* Imagen estática base */}
      <Image
        src={staticSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={`object-cover transition-opacity duration-500 z-0 ${staticLoaded ? 'opacity-100' : 'opacity-0'
          } ${staticOpacityClass}`}
        onLoad={() => setStaticLoaded(true)}
        priority={false}
      />

      {/* Media interactiva (GIF o Video) */}
      {isGif ? (
        <img
          src={mediaSrc}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500 ${mediaOpacityClass}`}
        />
      ) : (
        <video
          ref={videoRef}
          src={mediaSrc}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500 ${mediaOpacityClass}`}
        />
      )}
    </div>
  );
}
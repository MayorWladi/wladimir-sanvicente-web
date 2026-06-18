"use client";

import { useEffect } from "react";
import { Project } from "@/app/lib/types";

export default function ProjectModal({ project, onClose }: { project: Project | null, onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Fondo oscuro interactivo para cerrar */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity cursor-pointer touch-manipulation"
        onClick={onClose}
      />

      {/* Contenedor principal Lo-Fi */}
      <div className="relative w-full max-w-md bg-widget-bg rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.5)] border-2 border-black animate-in fade-in zoom-in-95 duration-200">

        {/* Banner Superior */}
        <div
          className="h-28 w-full border-b-2 border-black/50 relative"
          style={{
            backgroundImage: `url(${project.bannerImage})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Icono de la App (Avatar) */}
        <div className="absolute top-16 left-4">
          <div className="w-20 h-20 rounded-xl bg-widget-skills-bg border-2 border-black shadow-md overflow-hidden flex items-center justify-center">
            <img
              src={project.iconImage}
              alt={`Logo de ${project.title}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-white/50 hover:text-white/90 bg-black/30 hover:bg-black/50 rounded-full p-1.5 backdrop-blur-sm transition-colors cursor-pointer touch-manipulation"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenido Textual */}
        <div className="px-4 pt-12 pb-5">
          <div className="mb-4">
            <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((t: string) => (
                <span key={t} className="bg-widget-skills-bg text-text-secondary text-xs font-bold px-2.5 py-1 rounded-md border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-text-secondary mb-5 leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Bloque Live Demo */}
          <div className="bg-black/40 rounded-xl p-3 mb-5 border-2 border-black/50">
            <div className="flex items-center gap-2 mb-2 px-1">
              <div className="w-2 h-2 rounded-full bg-accent-red animate-pulse"></div>
              <h3 className="text-xs font-bold text-white/60 uppercase tracking-wider">Demo en vivo</h3>
            </div>

            <div className={`w-full rounded-lg overflow-hidden relative border border-white/5 shadow-inner flex items-center justify-center ${project.isMobile ? 'py-6 min-h-[340px]' : 'bg-[#0a0a0a] h-48'}`}>

              {/* Ambient Blur para móviles */}
              {project.isMobile && (
                <div
                  className="absolute inset-0 opacity-40 blur-xl scale-110 z-0"
                  style={{
                    backgroundImage: `url(${project.bannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              )}

              {project.isMobile ? (
                // Simulador de Hardware Móvil
                <div className="relative z-10 h-80 aspect-9/19 bg-black border-4 border-[#1e1e1e] rounded-3xl shadow-2xl overflow-hidden">

                  {project.tech.includes("Android") ? (
                    // Android Notch (Gota)
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-black rounded-b-xl z-20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
                    </div>
                  ) : (
                    // iOS Notch (Isla)
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20"></div>
                  )}

                  <img
                    src={project.gifPreview}
                    alt="Demo en dispositivo"
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              ) : (
                // Pantalla Escritorio
                <img
                  src={project.gifPreview}
                  alt="Demo escritorio"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity relative z-10"
                />
              )}
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-widget-bg-hover hover:bg-[#32363b] text-text-primary border-2 border-black font-bold py-2.5 rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Ver Repositorio
          </a>
        </div>
      </div>
    </div>
  );
}
// Estructura de datos sugerida

const horizontalCardClass = "col-span-1 md:col-span-2";
const verticalCardClass = "col-span-1 row-span-2";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  gridImage: string;
  bannerImage: string;
  iconImage: string;
  gifPreview: string;
  link: string;
  isMobile?: boolean;
  gridSpan?: string;
}

export const projects: Project[] = [
  {
    id: "incoming",
    title: "Incoming",
    shortDescription: "Tracker minimalista de finanzas personales.",
    fullDescription: "Enfocado en reducir la carga cognitiva del usuario mediante una interfaz limpia y utilidad directa. Actualmente en fase Alfa Cerrada.",
    // tech: ["Flutter", "Dart", "iOS"],
    tech: ["Flutter", "Dart", "Android"],

    gridImage: "/projects/incoming-app/app-static-preview.webp", // Reemplazar con captura vertical
    bannerImage: "/projects/incoming-app/app-banner.webp",
    iconImage: "/projects/incoming-app/app-icon.webp",
    gifPreview: "/projects/incoming-app/app-preview.mp4",

    link: "https://github.com/MayorWladi/incoming",
    isMobile: true, // Agrega esta propiedad
    gridSpan: verticalCardClass // Esto vuelve la tarjeta vertical (2 filas de alto)
  },
];
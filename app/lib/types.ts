// Estructura de datos sugerida

const horizontalCardClass = "col-span-1 md:col-span-2";
const verticalCardClass = "col-span-1 row-span-2";

export interface BaseProject {
  status?: "in-development" | "completed";
  version?: string;
  id: string;
  tech: string[];
  staticImage: string;
  previewGallery?: string[];
  bannerImage: string;
  iconImage: string;
  demoPreview?: string;
  githubLink?: string;
  deployLink?: string;
  isMobile?: boolean;
  gridSpan?: string;
  hasJournal?: boolean;
}

export interface Project extends BaseProject {
  title: string;
  shortDescription: string;
  fullDescription: string;
}

export const projects: BaseProject[] = [
  {
    id: "incoming",
    // tech: ["Flutter", "Dart", "iOS"],
    tech: ["Flutter", "Dart", "Android"],

    staticImage: "/projects/incoming-app/app-static-preview.webp", // Reemplazar con captura vertical
    previewGallery: [
      "/projects/incoming-app/gallery/slide-1.webp",
      "/projects/incoming-app/gallery/slide-2.webp",
      "/projects/incoming-app/gallery/slide-3.webp",
      "/projects/incoming-app/gallery/slide-4.webp",
      "/projects/incoming-app/gallery/slide-5.webp",
      "/projects/incoming-app/gallery/slide-6.webp",
      "/projects/incoming-app/gallery/slide-7.webp",
      "/projects/incoming-app/gallery/slide-8.webp",
    ],
    bannerImage: "/projects/incoming-app/app-banner.webp",
    iconImage: "/projects/incoming-app/app-icon.webp",
    demoPreview: "/projects/incoming-app/app-preview.gif",
    // demoPreview: "/projects/incoming-app/app-preview.webm",

    deployLink: "https://play.google.com/store/apps/details?id=com.mayorwladi.incoming",
    isMobile: true, // Agrega esta propiedad
    gridSpan: verticalCardClass, // Esto vuelve la tarjeta vertical (2 filas de alto)
    hasJournal: true
  },
  {
    id: "lite-project-manager",
    tech: ["Next.js", "TailwindCSS", "TypeScript"],
    staticImage: "/projects/lite-project-manager/app-banner.webp",
    bannerImage: "/projects/lite-project-manager/app-banner-light.webp",
    iconImage: "/projects/lite-project-manager/app-icon.png",
    demoPreview: "/projects/lite-project-manager/app-preview.gif", // o un video
    githubLink: "https://github.com/MayorWladi/lite-project-manager",
    deployLink: "https://lite-project-manager.vercel.app",
    isMobile: false,
    gridSpan: horizontalCardClass,
    hasJournal: true
  },
  {
    id: "ant-manager",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    staticImage: "/projects/ant-manager/app-static-preview.png",
    bannerImage: "/projects/ant-manager/app-banner.png",
    iconImage: "/projects/ant-manager/app-icon.svg",
    deployLink: "",
    isMobile: false,
    gridSpan: horizontalCardClass,
    hasJournal: true,
    status: "in-development",
    version: "v1.0.0"
  },
  {
    id: "e-notebook",
    tech: ["Next.js", "Tiptap", "Prisma", "PostgreSQL"],
    staticImage: "/projects/e-notebook/app-static-preview.png",
    bannerImage: "/projects/e-notebook/app-banner.png",
    iconImage: "/projects/e-notebook/app-icon.svg",
    deployLink: "",
    isMobile: false,
    gridSpan: horizontalCardClass,
    hasJournal: true,
    status: "in-development",
    version: "v0.1.5"
  },
];

export interface JournalCard {
  type: "text" | "feature" | "image" | "quote" | "tech";
  title?: string;
  content?: string;
  imageUrl?: string;
  gridSpan?: string; // e.g. "col-span-1 md:col-span-2 md:row-span-2"
  tags?: string[];
}

export interface JournalEntry {
  version: string;
  date: string;
  title: string;
  cards: JournalCard[];
}
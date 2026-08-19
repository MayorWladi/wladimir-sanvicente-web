import { JournalEntry } from "../types";

export const eNotebookJournal: JournalEntry[] = [
  {
    version: "v0.1.5",
    date: "Agosto 2026",
    title: "Ecosistema de Plugins",
    cards: [
      {
        type: "tech",
        title: "El Marketplace Interno",
        content: "Creación de un registro centralizado de plugins. Ahora los widgets (Kanban, Pomodoro con audio, Dictado) viven en carpetas aisladas y se inyectan en el editor sin tocar el core.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["FSD", "Architecture"]
      },
      {
        type: "feature",
        title: "Audio & Focus",
        content: "Integración de web APIs de audio para el temporizador Pomodoro (ej. sonidos de lluvia para enfoque profundo).",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.1.2",
    date: "Agosto 2026",
    title: "El Motor Tiptap",
    cards: [
      {
        type: "tech",
        title: "Migración a Texto Rico",
        content: "Se abandonó react-markdown en favor de Tiptap/ProseMirror. Esto abrió la puerta a extensiones nativas, bubble menus, tablas y menciones interactivas.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["Tiptap", "ProseMirror"]
      },
      {
        type: "tech",
        title: "Feature-Sliced Design",
        content: "Reestructuración total del frontend hacia FSD para mantener el código hiper-modular y escalable a medida que crecen las herramientas del cuaderno.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.1.0",
    date: "Agosto 2026",
    title: "La Nube",
    cards: [
      {
        type: "feature",
        title: "Sincronización Híbrida",
        content: "Transición de ser una app local (localStorage) a un SaaS completo. Implementación de NextAuth y PostgreSQL para sincronizar el árbol infinito de páginas de forma segura.",
        gridSpan: "col-span-1 md:col-span-3",
        tags: ["NextAuth", "Prisma"]
      }
    ]
  },
  {
    version: "v0.0.1",
    date: "Julio 2026",
    title: "Prototipo Lo-Fi",
    cards: [
      {
        type: "text",
        title: "Minimalismo Local",
        content: "La primera iteración enfocada puramente en velocidad y estética Lo-Fi, renderizando markdown directamente en el navegador sin base de datos.",
        gridSpan: "col-span-1 md:col-span-3"
      }
    ]
  }
];

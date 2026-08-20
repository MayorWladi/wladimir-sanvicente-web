import { JournalEntry } from "../types";

export const eNotebookJournal: JournalEntry[] = [
  {
    version: "v0.6.0",
    date: "Agosto 2026",
    title: "FSD y Experiencia de Usuario",
    cards: [
      {
        type: "tech",
        title: "Arquitectura Feature-Sliced Design (FSD)",
        content: "Refactorización final encapsulando herramientas complejas (como Pomodoro con presets y audio) en widgets totalmente aislados.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["FSD", "React", "Architecture"]
      },
      {
        type: "feature",
        title: "Core de Interfaz e i18n",
        content: "Implementación de orquestación global de ventanas modales, internacionalización (i18n) dinámica, y rediseño completo de la página de autenticación con animaciones fluidas.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.5.0",
    date: "Julio 2026",
    title: "Vista de Grafo y Panel Admin",
    cards: [
      {
        type: "feature",
        title: "Navegación Visual",
        content: "Integración de un grafo interactivo (react-force-graph) que mapea en tiempo real las conexiones y referencias (menciones) entre todas las notas del usuario.",
        gridSpan: "col-span-1 md:col-span-2"
      },
      {
        type: "tech",
        title: "Flujo de Contribución",
        content: "Desarrollo del panel de Administración y la pestaña 'Submit' para que usuarios externos puedan proponer nuevos plugins al ecosistema.",
        gridSpan: "col-span-1",
        tags: ["Next.js API", "Admin"]
      }
    ]
  },
  {
    version: "v0.4.0",
    date: "Julio 2026",
    title: "Ecosistema y Bundles",
    cards: [
      {
        type: "tech",
        title: "Marketplace Dinámico",
        content: "Sincronización completa entre la base de datos (PostgreSQL) y el estado local de los plugins instalados.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["PostgreSQL", "Prisma"]
      },
      {
        type: "feature",
        title: "Instalación en Bloque",
        content: "Soporte para Bundles o paquetes temáticos (ej. Study Starter, Writer's Pack) permitiendo instalar múltiples herramientas relacionadas con un solo clic.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.3.0",
    date: "Julio 2026",
    title: "La Nube (Cloud Sync)",
    cards: [
      {
        type: "tech",
        title: "Motor Local-First",
        content: "Transición de una app puramente local a un híbrido en la nube. Implementación de una cola de sincronización API con debounce para asegurar que las notas siempre estén guardadas sin saturar la red.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["Sync", "Debounce"]
      },
      {
        type: "tech",
        title: "Base de Datos y Auth",
        content: "Integración de PostgreSQL mediante Prisma y autenticación segura con NextAuth.",
        gridSpan: "col-span-1",
        tags: ["NextAuth", "Prisma"]
      }
    ]
  },
  {
    version: "v0.2.0",
    date: "Julio 2026",
    title: "Arquitectura de Plugins",
    cards: [
      {
        type: "tech",
        title: "El Registro Universal",
        content: "Separación estricta del core del editor y sus extensiones. Creación del PluginRegistry para inyectar widgets de forma dinámica sin acoplar código.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["Registry", "Dynamic Imports"]
      },
      {
        type: "feature",
        title: "Marketplace Integrado",
        content: "Creación de la interfaz base del catálogo de extensiones directamente en el App Shell (Sidebar).",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.1.0",
    date: "Junio 2026",
    title: "El Motor Tiptap y Menciones",
    cards: [
      {
        type: "tech",
        title: "Reemplazo de Motor",
        content: "Migración del antiguo renderizador Markdown a Tiptap/ProseMirror. Desarrollo del sistema de menús flotantes.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["Tiptap", "ProseMirror"]
      },
      {
        type: "feature",
        title: "Comportamiento Obsidian",
        content: "Implementación de menciones interactivas (con el trigger [[) que soportan enlaces huérfanos y creación de páginas on-the-fly.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.0.1",
    date: "Junio 2026",
    title: "Prototipo Markdown (Local)",
    cards: [
      {
        type: "tech",
        title: "Fundación",
        content: "Setup inicial de Next.js y Tailwind. Implementación del primer lienzo (canvas) renderizando Markdown básico con guardado exclusivo en el navegador (localStorage).",
        gridSpan: "col-span-1 md:col-span-3",
        tags: ["Next.js", "LocalStorage", "Markdown"]
      }
    ]
  }
];

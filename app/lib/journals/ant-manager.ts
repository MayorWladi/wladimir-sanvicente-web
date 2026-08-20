import { JournalEntry } from "../types";

export const antManagerJournal: JournalEntry[] = [
  {
    version: "v1.0.0",
    date: "Agosto 2026",
    title: "Seguridad Avanzada y Alfa",
    cards: [
      {
        type: "tech",
        title: "Rol Based Access Control (RBAC)",
        content: "Implementación de RolesGuard en NestJS para validar que solo administradores puedan editar el menú y staff pueda crear órdenes.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["NestJS", "Security", "JWT"]
      },
      {
        type: "feature",
        title: "Lanzamiento Alfa",
        content: "Propagación final del restauranteId a través de todos los módulos del frontend y backend para asegurar un sistema funcional y aislado de punta a punta.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.8.0",
    date: "Agosto 2026",
    title: "Motor POS y Órdenes",
    cards: [
      {
        type: "feature",
        title: "Point of Sale (POS)",
        content: "Creación de la interfaz de Punto de Venta con cálculo de subtotales en tiempo real y previsualización de menú de productos.",
        gridSpan: "col-span-1 md:col-span-2"
      },
      {
        type: "tech",
        title: "Estado Global de Modales",
        content: "Extracción del hook useModal para un manejo centralizado de ventanas y diálogos en toda la aplicación.",
        gridSpan: "col-span-1",
        tags: ["React", "Custom Hooks"]
      }
    ]
  },
  {
    version: "v0.5.0",
    date: "Julio 2026",
    title: "Aislamiento Multi-Tenant",
    cards: [
      {
        type: "tech",
        title: "Arquitectura SaaS",
        content: "Refactorización profunda para incorporar validación de contexto por empresaId. Los endpoints ahora filtran de forma estricta los datos.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["Architecture", "Multi-Tenant"]
      },
      {
        type: "feature",
        title: "Selector de Contexto",
        content: "Implementación de un RestauranteContext global en Next.js permitiendo al usuario cambiar de sucursal sin recargar la página.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.4.0",
    date: "Julio 2026",
    title: "Postgres y Escalabilidad",
    cards: [
      {
        type: "tech",
        title: "Migración a PostgreSQL",
        content: "Cambio del adaptador de Prisma de SQLite a PostgreSQL y creación del módulo central de Empresas para soportar múltiples clientes reales.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["PostgreSQL", "Prisma"]
      },
      {
        type: "tech",
        title: "Soft Deletes",
        content: "Implementación de borrados lógicos en toda la base de datos para preservar el historial financiero.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.3.0",
    date: "Julio 2026",
    title: "Migración FSD y UI",
    cards: [
      {
        type: "tech",
        title: "Feature-Sliced Design",
        content: "Reestructuración completa del frontend hacia una arquitectura modular (FSD), extrayendo componentes comunes de UI para máxima reusabilidad.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["FSD", "Next.js"]
      },
      {
        type: "feature",
        title: "Tablas Genéricas",
        content: "Creación e implementación de un componente de tabla inteligente utilizado de forma consistente en todas las vistas del dashboard.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.2.0",
    date: "Junio 2026",
    title: "Core de Autenticación",
    cards: [
      {
        type: "tech",
        title: "Seguridad JWT",
        content: "Implementación del módulo de autenticación con firmas RS256, cookies HttpOnly y protección de Layouts en Next.js.",
        gridSpan: "col-span-1 md:col-span-3",
        tags: ["JWT", "Auth", "Cookies"]
      }
    ]
  },
  {
    version: "v0.1.0",
    date: "Junio 2026",
    title: "Fundación y Schemas",
    cards: [
      {
        type: "tech",
        title: "Infraestructura Base",
        content: "Inicialización del servidor NestJS con Prisma y Swagger; inicialización del cliente Next.js con React Query y openapi-fetch para tipado automático de APIs.",
        gridSpan: "col-span-1 md:col-span-3",
        tags: ["Monorepo", "NestJS", "React Query"]
      }
    ]
  }
];

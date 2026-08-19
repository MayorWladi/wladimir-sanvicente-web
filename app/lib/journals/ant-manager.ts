import { JournalEntry } from "../types";

export const antManagerJournal: JournalEntry[] = [
  {
    version: "v1.0.0",
    date: "Agosto 2026",
    title: "El Sistema Completo",
    cards: [
      {
        type: "tech",
        title: "Rol Based Access Control (RBAC)",
        content: "Se implementó RolesGuard a nivel de backend en NestJS para asegurar que solo los dueños y managers puedan modificar inventario y recetas, mientras el staff maneja órdenes.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["NestJS", "Security", "JWT"]
      },
      {
        type: "feature",
        title: "Lanzamiento Alfa",
        content: "El sistema cliente, base de datos y servidor están completamente acoplados y listos para gestionar un flujo de trabajo real de cocina.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.8.0",
    date: "Agosto 2026",
    title: "Gestión de Órdenes y Tickets",
    cards: [
      {
        type: "feature",
        title: "Motor de Órdenes",
        content: "Creación del sistema de órdenes de mesa con soporte para sustituciones dinámicas, cálculo de subtotales en tiempo real y sobrecargos por ingredientes extra.",
        gridSpan: "col-span-1 md:col-span-2"
      },
      {
        type: "text",
        title: "UI Reactiva",
        content: "Uso intensivo de Modales y Contexto en el frontend (Next.js) para permitir a los meseros armar órdenes complejas con unos pocos clics.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.5.0",
    date: "Julio 2026",
    title: "Ingeniería de Menú",
    cards: [
      {
        type: "feature",
        title: "Costeo Preciso",
        content: "Se construyó la lógica relacional entre Insumos, Elaboraciones y Listas de Precios para calcular el margen de ganancia exacto de cada plato.",
        gridSpan: "col-span-1 md:col-span-2"
      },
      {
        type: "tech",
        title: "Multi-Tenant Seguro",
        content: "Refactorización de todas las consultas de Prisma para asegurar el aislamiento de datos por restaurante (empresaId).",
        gridSpan: "col-span-1",
        tags: ["Prisma", "PostgreSQL"]
      }
    ]
  },
  {
    version: "v0.1.0",
    date: "Julio 2026",
    title: "La Fundación",
    cards: [
      {
        type: "tech",
        title: "Arquitectura Base",
        content: "Inicialización del monorepo separando el cliente (Next.js) de la API (NestJS). Configuración de PostgreSQL y Prisma ORM.",
        gridSpan: "col-span-1 md:col-span-3",
        tags: ["Monorepo", "Next.js", "NestJS"]
      }
    ]
  }
];

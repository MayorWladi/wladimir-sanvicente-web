import { JournalEntry } from "../types";

export const antManagerJournal: JournalEntry[] = [
  {
    version: "v0.9.0",
    date: "August 2026",
    title: "Advanced Security and Alpha",
    cards: [
      {
        type: "tech",
        title: "Role-Based Access Control (RBAC)",
        content: "Implemented RolesGuard in NestJS to validate that only admins can edit the menu and staff can create orders.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["NestJS", "Security", "JWT"]
      },
      {
        type: "feature",
        title: "Alpha Launch",
        content: "Final propagation of restauranteId across all frontend and backend modules to ensure a fully functional, end-to-end isolated system.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.8.0",
    date: "August 2026",
    title: "POS Engine and Orders",
    cards: [
      {
        type: "feature",
        title: "Point of Sale (POS)",
        content: "Created the Point of Sale interface with real-time subtotal calculations and product menu preview.",
        gridSpan: "col-span-1 md:col-span-2"
      },
      {
        type: "tech",
        title: "Global Modals State",
        content: "Extracted the useModal hook for centralized window and dialog management across the application.",
        gridSpan: "col-span-1",
        tags: ["React", "Custom Hooks"]
      }
    ]
  },
  {
    version: "v0.5.0",
    date: "July 2026",
    title: "Multi-Tenant Isolation",
    cards: [
      {
        type: "tech",
        title: "SaaS Architecture",
        content: "Deep refactoring to incorporate context validation by empresaId. Endpoints now strictly filter data.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["Architecture", "Multi-Tenant"]
      },
      {
        type: "feature",
        title: "Context Selector",
        content: "Implemented a global RestauranteContext in Next.js allowing users to switch branches without reloading the page.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.4.0",
    date: "July 2026",
    title: "Postgres and Scalability",
    cards: [
      {
        type: "tech",
        title: "Migration to PostgreSQL",
        content: "Switched Prisma adapter from SQLite to PostgreSQL and created the central Companies module to support multiple real clients.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["PostgreSQL", "Prisma"]
      },
      {
        type: "tech",
        title: "Soft Deletes",
        content: "Implemented soft deletes across the entire database to preserve financial history.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.3.0",
    date: "July 2026",
    title: "FSD Migration and UI",
    cards: [
      {
        type: "tech",
        title: "Feature-Sliced Design",
        content: "Complete frontend restructuring towards a modular architecture (FSD), extracting common UI components for maximum reusability.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["FSD", "Next.js"]
      },
      {
        type: "feature",
        title: "Generic Tables",
        content: "Created and implemented a smart table component used consistently across all dashboard views.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.2.0",
    date: "June 2026",
    title: "Authentication Core",
    cards: [
      {
        type: "tech",
        title: "JWT Security",
        content: "Implemented the authentication module with RS256 signatures, HttpOnly cookies, and Layout protection in Next.js.",
        gridSpan: "col-span-1 md:col-span-3",
        tags: ["JWT", "Auth", "Cookies"]
      }
    ]
  },
  {
    version: "v0.1.0",
    date: "June 2026",
    title: "Foundation and Schemas",
    cards: [
      {
        type: "tech",
        title: "Base Infrastructure",
        content: "Initialized NestJS server with Prisma and Swagger; initialized Next.js client with React Query and openapi-fetch for automatic API typing.",
        gridSpan: "col-span-1 md:col-span-3",
        tags: ["Monorepo", "NestJS", "React Query"]
      }
    ]
  }
];

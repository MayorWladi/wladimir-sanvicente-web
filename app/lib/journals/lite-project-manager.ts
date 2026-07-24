import { JournalEntry } from "../types";

export const litePmJournal: JournalEntry[] = [
  {
    version: "v1.0.0",
    date: "July 2026",
    title: "Native View Transitions & Polish",
    cards: [
      {
        type: "feature",
        title: "Buttery Smooth",
        content: "Dropped heavy animation libraries in favor of the experimental View Transitions API. Now, kanban columns shift and sprints switch with zero lag.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["Performance", "Web APIs"]
      },
      {
        type: "text",
        title: "Micro-Interactions",
        content: "Added subtle sound effects when completing a task, and tuned native CSS transitions on mount for that pixel-perfect dopamine hit.",
        gridSpan: "col-span-1 md:col-span-1"
      }
    ]
  },
  {
    version: "v0.9.0",
    date: "July 2026",
    title: "The Great Refactor",
    cards: [
      {
        type: "tech",
        title: "Feature-Sliced Design",
        content: "Migrated the entire codebase to Feature-Sliced Design (FSD) architecture.",
        gridSpan: "col-span-1 md:col-span-2 md:row-span-2"
      },
      {
        type: "text",
        title: "Clean Hooks",
        content: "Extracted massive CRUD logic into a clean `useActivityActions` hook and optimized storage polling.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.8.0",
    date: "July 2026",
    title: "Data Safety & Global Reach",
    cards: [
      {
        type: "feature",
        title: "JSON Backups",
        content: "Implemented JSON backup import and export with collision resolution. Your data is yours.",
        gridSpan: "col-span-1 md:col-span-2"
      },
      {
        type: "text",
        title: "Internationalization",
        content: "Extracted dictionary objects and added full i18n support, including global toast notifications.",
        gridSpan: "col-span-1",
        tags: ["i18n", "ES/EN"]
      }
    ]
  },
  {
    version: "v0.7.0",
    date: "July 2026",
    title: "Settings & Tutorials",
    cards: [
      {
        type: "text",
        title: "Modular Modals",
        content: "Split the monolithic Settings modal into clean sub-components. Added an interactive InfoModal with a carrousel tutorial.",
        gridSpan: "col-span-1 md:col-span-3"
      }
    ]
  },
  {
    version: "v0.6.0",
    date: "July 2026",
    title: "UX Polish & Masonry",
    cards: [
      {
        type: "feature",
        title: "Masonry Grid",
        content: "Added dynamic masonry layout grid modes and fixed kanban race conditions on sprint switch.",
        gridSpan: "col-span-1 md:col-span-2"
      }
    ]
  },
  {
    version: "v0.5.0",
    date: "June 2026",
    title: "Activities & Inline Editing",
    cards: [
      {
        type: "text",
        title: "Details Sidebar",
        content: "Introduced the Activity Details sidebar and refactored task components for improved inline editing and state management.",
        gridSpan: "col-span-1 md:col-span-3"
      }
    ]
  },
  {
    version: "v0.4.0",
    date: "June – July 2026",
    title: "Themes & Metrics",
    cards: [
      {
        type: "text",
        title: "Matcha & Midnight",
        content: "Implemented a dynamic theme engine to support multiple visual themes, starting with Matcha and Midnight.",
        gridSpan: "col-span-1 md:col-span-2"
      },
      {
        type: "text",
        title: "Metrics",
        content: "Added mathematical logic to calculate progress based on completed tasks.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.3.0",
    date: "June 2026",
    title: "Sprints & Swimlanes",
    cards: [
      {
        type: "feature",
        title: "Persistent Storage",
        content: "Connected the entire system to LocalStorage so no data is ever lost on reload.",
        gridSpan: "col-span-1 md:col-span-2"
      },
      {
        type: "text",
        title: "Navigation",
        content: "Added Sprint management and Swimlanes without breaking the mental model of a Kanban board.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.2.0",
    date: "June 2026",
    title: "Drag & Drop Mechanics",
    cards: [
      {
        type: "text",
        title: "The Core",
        content: "Built the KanbanBoard component and implemented the core Drag & Drop functionality for sprint activities.",
        gridSpan: "col-span-1 md:col-span-3"
      }
    ]
  },
  {
    version: "v0.1.0",
    date: "June 2026",
    title: "The Foundation",
    cards: [
      {
        type: "tech",
        title: "Tech Stack",
        content: "Initialized Next.js, Tailwind CSS, and Sileo UI. Established the global Project Context.",
        gridSpan: "col-span-1 md:col-span-3",
        tags: ["Next.js", "Tailwind", "React Context"]
      }
    ]
  }
];

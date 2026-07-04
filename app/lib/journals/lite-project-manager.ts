import { JournalEntry } from "../types";

export const litePmJournal: JournalEntry[] = [
  {
    version: "v0.3.0",
    date: "July 2026",
    title: "UI Polish & Micro-interactions",
    cards: [
      {
        type: "feature",
        title: "View Transitions",
        content: "I wanted the app to feel buttery smooth without heavy libraries. Integrated the native View Transitions API for zero-lag kanban column shifts and fast fades.",
        gridSpan: "col-span-1 md:col-span-2 md:row-span-2",
        tags: ["Web APIs", "CSS", "Performance"]
      },
      {
        type: "text",
        title: "Sound Design",
        content: "Added subtle sound effects when completing a task. It's a small detail that massively increases the dopamine hit of checking off a to-do item.",
        gridSpan: "col-span-1 md:col-span-2"
      },
      {
        type: "text",
        title: "Pixel Perfecting",
        content: "Spent hours fixing right-edge clipping on mobile, adjusting AddActivityForm widths to match buttons exactly, and tuning native CSS transitions on mount.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.2.0",
    date: "July 2026",
    title: "The Great Refactor & i18n",
    cards: [
      {
        type: "tech",
        title: "FSD Architecture",
        content: "Migrated the entire codebase to Feature-Sliced Design (FSD).",
        gridSpan: "col-span-1 md:col-span-2"
      },
      {
        type: "text",
        title: "Cleaning the House",
        content: "Extracted massive CRUD logic into a clean `useActivityActions` hook. Cleaned up duplicate code, removed dead checkboxes, and optimized storage polling.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["Refactoring", "Clean Code"]
      },
      {
        type: "feature",
        title: "Global Reach",
        content: "Extracted the dictionary objects and replaced all hardcoded strings with i18n keys to support multiple languages.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.1.0",
    date: "July 2026",
    title: "The Minimalist MVP",
    cards: [
      {
        type: "text",
        title: "The Vision",
        content: "Most project managers are bloated with features we never use. I wanted something fast, local, and incredibly clean. This MVP handles Kanban boards, sprints, and tasks instantly, with zero loading states.",
        gridSpan: "col-span-1 md:col-span-2 md:row-span-2",
        tags: ["Local Storage", "React Context", "Minimalist UI"]
      },
      {
        type: "image",
        imageUrl: "/projects/lite-project-manager/app-banner-light.webp",
        gridSpan: "col-span-1 md:col-span-2"
      },
      {
        type: "tech",
        title: "Tech Stack",
        content: "Next.js 15, Tailwind CSS v4, TypeScript.",
        gridSpan: "col-span-1"
      },
      {
        type: "text",
        title: "100% Client-Side",
        content: "No Database. Your data stays with you.",
        gridSpan: "col-span-1"
      }
    ]
  }
];

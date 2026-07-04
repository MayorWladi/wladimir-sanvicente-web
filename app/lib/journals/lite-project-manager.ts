import { JournalEntry } from "../types";

export const litePmJournal: JournalEntry[] = [
  {
    version: "v0.1.0",
    date: "July 2026",
    title: "The Minimalist MVP",
    cards: [
      {
        type: "text",
        title: "The Vision",
        content: "Most project managers are bloated with features we never use. I wanted something fast, local, and incredibly clean. This MVP handles Kanban boards, sprints, and tasks instantly, with zero loading states. Everything is stored locally.",
        gridSpan: "col-span-1 md:col-span-2 md:row-span-2",
        tags: ["Local Storage", "React Context", "Minimalist UI"]
      },
      {
        type: "feature",
        title: "Zero-Lag Animations",
        content: "Implemented the experimental View Transitions API to make dragging and dropping tasks feel like a native application. No heavy animation libraries, just native browser power.",
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

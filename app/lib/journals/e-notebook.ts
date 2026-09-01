import { JournalEntry } from "../types";

export const eNotebookJournal: JournalEntry[] = [
  {
    version: "v0.10.0",
    date: "August 2026",
    title: "Workspace Layout & Multi-Pane Engine",
    cards: [
      {
        type: "tech",
        title: "Advanced Multi-Pane Architecture",
        content: "Overhauled the core layout using react-resizable-panels. Users can now open multiple pages side-by-side in independent resizable panes, creating a highly flexible workspace tailored for multitasking and parallel reading.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["Architecture", "React Resizable Panels"]
      },
      {
        type: "feature",
        title: "Tab System & Navigation",
        content: "Introduced a robust multi-tab system supporting unlimited open pages per pane. Implemented Ctrl+Click functionality on the Sidebar to seamlessly split the view and open documents instantly in a new pane.",
        gridSpan: "col-span-1",
        tags: ["Tabs", "UX"]
      }
    ]
  },
  {
    version: "v0.9.0",
    date: "August 2026",
    title: "Security and Notebook Management",
    cards: [
      {
        type: "tech",
        title: "Authentication Hardening",
        content: "Closed a critical security flaw in NextAuth. The system now actively blocks registrations if a valid code is missing, and the Login UI dynamically hides the registration option based on production environment variables.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["NextAuth", "Security"]
      },
      {
        type: "feature",
        title: "Inline Notebook Editing",
        content: "Implemented renaming capabilities for notebooks and pages directly from the Sidebar via an 'inline editing' experience, eliminating visual flickering during state re-hydration.",
        gridSpan: "col-span-1",
        tags: ["Sidebar", "UX"]
      }
    ]
  },
  {
    version: "v0.8.0",
    date: "August 2026",
    title: "Speed Dial & UI Refinements",
    cards: [
      {
        type: "feature",
        title: "Global Tools Injection",
        content: "Migrated global plugins (Pomodoro, Graph View, etc.) into a vertical 'Speed Dial' menu dynamically injected as a 'leftAccessory' within the EditorPane.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["Speed Dial", "Registry"]
      },
      {
        type: "tech",
        title: "Visual Hierarchy & Collision Fixes",
        content: "Upscaled heading sizes, fixed visual overlapping between the Collapsible Heading icon and Markdown formatting, and resolved Z-index issues using React Portals.",
        gridSpan: "col-span-1",
        tags: ["TailwindCSS", "React Portal"]
      }
    ]
  },
  {
    version: "v0.7.0",
    date: "August 2026",
    title: "Multimedia Content and Resilience",
    cards: [
      {
        type: "feature",
        title: "Multimedia Ecosystem",
        content: "Integrated plugins for images and embedded YouTube and Twitch players. Replaced native browser dialogs with custom modals aligned to the interface design.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["TipTap", "React Modals"]
      },
      {
        type: "tech",
        title: "Data and UI Resilience",
        content: "Implemented timeout mechanisms with Promise.race to prevent infinite loading (504 Timeout) during initial hydration. Added advanced floating menus for table editing.",
        gridSpan: "col-span-1",
        tags: ["Error Handling", "UX"]
      }
    ]
  },
  {
    version: "v0.6.0",
    date: "August 2026",
    title: "FSD and User Experience",
    cards: [
      {
        type: "tech",
        title: "Feature-Sliced Design (FSD) Architecture",
        content: "Final refactoring encapsulating complex tools (like Pomodoro with presets and audio) into completely isolated widgets.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["FSD", "React", "Architecture"]
      },
      {
        type: "feature",
        title: "Interface Core and i18n",
        content: "Implemented global modal window orchestration, dynamic internationalization (i18n), and a complete redesign of the authentication page with fluid animations.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.5.0",
    date: "July 2026",
    title: "Graph View and Admin Panel",
    cards: [
      {
        type: "feature",
        title: "Visual Navigation",
        content: "Integrated an interactive graph (react-force-graph) that maps in real-time the connections and references (mentions) across all user notes.",
        gridSpan: "col-span-1 md:col-span-2"
      },
      {
        type: "tech",
        title: "Contribution Flow",
        content: "Developed the Administration panel and the 'Submit' tab so external users can propose new plugins to the ecosystem.",
        gridSpan: "col-span-1",
        tags: ["Next.js API", "Admin"]
      }
    ]
  },
  {
    version: "v0.4.0",
    date: "July 2026",
    title: "Ecosystem and Bundles",
    cards: [
      {
        type: "tech",
        title: "Dynamic Marketplace",
        content: "Complete synchronization between the database (PostgreSQL) and the local state of installed plugins.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["PostgreSQL", "Prisma"]
      },
      {
        type: "feature",
        title: "Bulk Installation",
        content: "Added support for Bundles or thematic packages (e.g., Study Starter, Writer's Pack), allowing multiple related tools to be installed with a single click.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.3.0",
    date: "July 2026",
    title: "The Cloud (Cloud Sync)",
    cards: [
      {
        type: "tech",
        title: "Local-First Engine",
        content: "Transitioned from a purely local app to a cloud hybrid. Implemented an API sync queue with debounce to ensure notes are always saved without saturating the network.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["Sync", "Debounce"]
      },
      {
        type: "tech",
        title: "Database and Auth",
        content: "Integrated PostgreSQL via Prisma and secure authentication using NextAuth.",
        gridSpan: "col-span-1",
        tags: ["NextAuth", "Prisma"]
      }
    ]
  },
  {
    version: "v0.2.0",
    date: "July 2026",
    title: "Plugin Architecture",
    cards: [
      {
        type: "tech",
        title: "The Universal Registry",
        content: "Strict separation of the editor core and its extensions. Created the PluginRegistry to inject widgets dynamically without coupling code.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["Registry", "Dynamic Imports"]
      },
      {
        type: "feature",
        title: "Integrated Marketplace",
        content: "Created the base interface for the extension catalog directly within the App Shell (Sidebar).",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.1.0",
    date: "June 2026",
    title: "The Tiptap Engine and Mentions",
    cards: [
      {
        type: "tech",
        title: "Engine Replacement",
        content: "Migrated from the old Markdown renderer to Tiptap/ProseMirror. Developed the floating menu system.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["Tiptap", "ProseMirror"]
      },
      {
        type: "feature",
        title: "Obsidian Behavior",
        content: "Implemented interactive mentions (using the [[ trigger) that support orphan links and on-the-fly page creation.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.0.1",
    date: "June 2026",
    title: "Markdown Prototype (Local)",
    cards: [
      {
        type: "tech",
        title: "Foundation",
        content: "Initial Next.js and Tailwind setup. Implemented the first canvas rendering basic Markdown, strictly saved in the browser (localStorage).",
        gridSpan: "col-span-1 md:col-span-3",
        tags: ["Next.js", "LocalStorage", "Markdown"]
      }
    ]
  }
];

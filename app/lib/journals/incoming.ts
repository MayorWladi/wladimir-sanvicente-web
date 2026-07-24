import { JournalEntry } from "../types";

export const incomingJournal: JournalEntry[] = [
  {
    version: "v1.1.1",
    date: "June 2026",
    title: "Performance & UI Polish",
    cards: [
      {
        type: "text",
        title: "Under the Hood",
        content: "Released patch notes containing significant performance improvements, UI enhancements, and deep bug fixes across the navigation and transaction flows.",
        gridSpan: "col-span-1 md:col-span-3"
      }
    ]
  },
  {
    version: "v1.1.0",
    date: "June 2026",
    title: "The Trash & Undo System",
    cards: [
      {
        type: "feature",
        title: "Safety Net",
        content: "We've all accidentally deleted a transaction. Added a complete Trash system (TrashController & TrashScreen) with restoration and permanent deletion support.",
        gridSpan: "col-span-1 md:col-span-2 md:row-span-2",
        tags: ["Data Safety", "UX", "State Management"]
      },
      {
        type: "text",
        title: "Undo Snackbars",
        content: "Implemented custom snackbar timers and state management tokens to allow instant undo functionality right when you delete an item.",
        gridSpan: "col-span-1 md:col-span-1"
      },
      {
        type: "tech",
        title: "Helper Functions",
        content: "Built a robust HelperFunctions utility class to streamline UI, formatting, and data transformation operations across the app.",
        gridSpan: "col-span-1 md:col-span-3"
      }
    ]
  },
  {
    version: "v1.0.2",
    date: "May – June 2026",
    title: "Localization & Theming",
    cards: [
      {
        type: "feature",
        title: "Hablamos Español",
        content: "Implemented full internationalization support with language selection bottom sheets and persistent storage. Available in English and Spanish.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["i18n", "Localization"]
      },
      {
        type: "text",
        title: "Theme Engine",
        content: "Added theme selection bottom sheets (Light/Dark) powered by AnimatedContainer for smooth transitions.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v1.0.0",
    date: "September – November 2025",
    title: "Account Management Polish",
    cards: [
      {
        type: "feature",
        title: "Drag & Drop",
        content: "Implemented drag-and-drop functionality for account management with visual feedback and delete confirmations. Managing multiple wallets has never been smoother.",
        gridSpan: "col-span-1 md:col-span-2 md:row-span-2",
        tags: ["UX", "Animations", "Gestures"]
      },
      {
        type: "text",
        title: "Customization",
        content: "Added a color palette for consistent app theming, allowing users to customize account card colors and personalize their dashboard.",
        gridSpan: "col-span-1"
      },
      {
        type: "tech",
        title: "Modals & States",
        content: "Reduced animation durations for modals to improve responsiveness and enhanced state handling across the board.",
        gridSpan: "col-span-1 md:col-span-3"
      }
    ]
  },
  {
    version: "v0.9.0",
    date: "August 2025",
    title: "Common Transactions Engine",
    cards: [
      {
        type: "feature",
        title: "Smart Memory",
        content: "Introduced the FrequentTransaction model and CommonTransactionsStore. The app now learns your most common expenses to speed up data entry.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["Local Storage", "QoL"]
      },
      {
        type: "text",
        title: "Currency Exchange",
        content: "Enhanced the CurrencyExchange model with conversion methods and equality checks.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.8.0",
    date: "August 2025",
    title: "Core Storage Refactor",
    cards: [
      {
        type: "tech",
        title: "Storage Engine",
        content: "Replaced the generic LocalStore with dedicated AccountsStore and SessionStore for improved, type-safe local storage management.",
        gridSpan: "col-span-1 md:col-span-3",
        tags: ["Architecture", "Data Safety"]
      }
    ]
  },
  {
    version: "v0.7.0",
    date: "April 2025",
    title: "Multi-Currency & UI Overhaul",
    cards: [
      {
        type: "text",
        title: "Global Money",
        content: "Added currency model data, a currency picker, and primitive CRUD operations. Incoming can now handle expenses anywhere in the world.",
        gridSpan: "col-span-1 md:col-span-2"
      },
      {
        type: "feature",
        title: "Screen Redesign",
        content: "Massive updates to the Tracker Screen, Accounts screen, and App management screens.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.6.0",
    date: "January – March 2025",
    title: "Feature Architecture Migration",
    cards: [
      {
        type: "tech",
        title: "Modular Scaling",
        content: "Migrated the codebase to a Feature-based architecture using Flutter Modular to support future scaling without spaghetti code.",
        gridSpan: "col-span-1 md:col-span-3",
        tags: ["Flutter Modular", "Clean Code"]
      }
    ]
  },
  {
    version: "v0.5.0",
    date: "October 2024",
    title: "Subtransactions",
    cards: [
      {
        type: "feature",
        title: "Micro-Management",
        content: "Added support for Transactions with subTransactions. Now list-tiles dynamically expand to reveal itemized receipts.",
        gridSpan: "col-span-1 md:col-span-2",
        tags: ["UI Expansion", "Details"]
      },
      {
        type: "text",
        title: "Floating Messages",
        content: "Implemented floating messages for immediate user feedback.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.4.0",
    date: "October 2024",
    title: "Data Modeling & Fquery",
    cards: [
      {
        type: "tech",
        title: "Fquery Integration",
        content: "Integrated Fquery for better asynchronous data fetching and state management, alongside a massive models refactor.",
        gridSpan: "col-span-1 md:col-span-3"
      }
    ]
  },
  {
    version: "v0.3.0",
    date: "October 2024",
    title: "The Animated Board",
    cards: [
      {
        type: "feature",
        title: "Fluid Motion",
        content: "Added Movement Card animations and unfilter animations to make the list feel alive and responsive.",
        gridSpan: "col-span-1 md:col-span-3",
        tags: ["Flutter Animations", "UX"]
      }
    ]
  },
  {
    version: "v0.2.0",
    date: "October 2024",
    title: "MVP Filtering & Stats",
    cards: [
      {
        type: "text",
        title: "Slicing Data",
        content: "Built primitive filtering functionality and replaced the 'Total expensive' card with dual Expense/Income summary cards.",
        gridSpan: "col-span-1 md:col-span-2"
      },
      {
        type: "text",
        title: "Visual Clarity",
        content: "Expense records now appear in gray and income in white. The first and last records in lists feature rounded outer borders.",
        gridSpan: "col-span-1"
      }
    ]
  },
  {
    version: "v0.1.0",
    date: "October 2024",
    title: "The Foundation",
    cards: [
      {
        type: "tech",
        title: "Tech Stack",
        content: "Initialized the base Flutter app, integrated fl_chart for graphics, and set up primitive task logging.",
        gridSpan: "col-span-1 md:col-span-3",
        tags: ["Flutter", "Dart", "fl_chart"]
      }
    ]
  }
];

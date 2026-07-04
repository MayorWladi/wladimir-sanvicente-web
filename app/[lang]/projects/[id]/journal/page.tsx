import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/app/[lang]/dictionaries";
import Link from "next/link";
import { projects, JournalEntry } from "@/app/lib/types";
import { litePmJournal } from "@/app/lib/journals/lite-project-manager";
import { incomingJournal } from "@/app/lib/journals/incoming";
import TimelineJournal from "@/app/_components/structure/TimelineJournal";

export default async function JournalPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;

  if (!hasLocale(lang)) notFound();

  const project = projects.find(p => p.id === id);
  
  if (!project || !project.hasJournal) {
    notFound();
  }

  const dict = await getDictionary(lang);

  // In a real app, this would be a dynamic import or DB fetch based on the ID.
  let journalData: JournalEntry[] = [];
  if (id === "lite-project-manager") {
    journalData = litePmJournal;
  } else if (id === "incoming") {
    journalData = incomingJournal;
  }

  return (
    <main className="w-full max-w-[1200px] mx-auto p-4 sm:p-6 flex flex-col gap-8 min-h-screen">
      <div className="flex justify-between items-center">
        <Link
          href={`/${lang}/projects`}
          className="widget-card px-4 py-2 border-2 border-black rounded-xl bg-widget-bg text-sm font-bold hover:scale-[1.03] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2 select-none"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          {dict.navigation?.back || "Volver"}
        </Link>
      </div>

      <header className="mb-4">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-text-primary">Dev Journal</h1>
        <p className="text-text-secondary text-lg mt-2 font-medium">
          The making of <span className="text-text-primary font-bold">{dict.projectsList?.[id]?.title || project.id}</span>.
        </p>
      </header>

      <TimelineJournal journal={journalData} />
    </main>
  );
}

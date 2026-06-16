import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">{dict.projectsPage.placeholder}</h1>
    </div>
  );
}

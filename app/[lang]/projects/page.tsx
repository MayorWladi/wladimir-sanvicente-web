import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import ProjectCard from "@/app/_components/widgets/ProjectCard";
import Link from "next/link";

// 1. Definimos la constante projects fuera del componente para que esté disponible
const projects = [
  {
    id: "incoming",
    title: "Incoming",
    description: "Tracker de finanzas personales enfocado en el minimalismo, reducción de carga cognitiva y utilidad directa para el usuario de Android.",
    tech: ["Flutter", "Dart", "Android"],
    bgImage: "https://media.tenor.com/YZPnGuPeZv8AAAAd/coding.gif", // Reemplaza con la imagen real de tu formulario de transacciones
    link: "https://github.com/MayorWladi/incoming" // Ajusta el enlace si es privado o tiene otra ruta
  },
  {
    id: "inventory-dashboard",
    title: "Dashboard de Inventario",
    description: "Panel de control interactivo diseñado para la gestión de almacenes, seguimiento de stock y flujos de movimiento de inventario.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    bgImage: "https://media.tenor.com/DmC5jNLSQ0IAAAAC/cornifer.gif", // Reemplaza con una captura de tu dashboard
    link: "https://github.com/MayorWladi/inventory-dashboard"
  },
  {
    id: "beatemup-game",
    title: "Juego Beat 'em up 2.5D",
    description: "Desarrollo de mecánicas de combate y arquitectura de sistemas acoplados bajo patrones Pub/Sub en un entorno tridimensional estilizado.",
    tech: ["Unity", "C#"],
    bgImage: "https://cdna.artstation.com/p/assets/images/images/021/720/920/original/pixel-jeff-mario.gif?1572709433", // Reemplaza con un GIF de tu gameplay
    link: "https://github.com/MayorWladi/beatemup"
  }
];

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <main className="w-full max-w-[1200px] p-4 sm:p-6 flex flex-col gap-4">
      {/* Botón de retorno manteniendo el estilo de tarjeta */}
      <div className="flex justify-between items-center mb-2">
        <Link
          href={`/${lang}`}
          className="widget-card px-4 py-2 border-2 border-black/40 rounded-xl bg-widget-bg text-sm font-bold hover:scale-[1.03] transition-transform flex items-center gap-2 select-none"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          {dict.navigation?.back || "Volver"}
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">{dict.projects?.title || "Proyectos"}</h1>
      </div>

      {/* Bento Grid para Proyectos */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[220px]">
        {projects.map((project, index) => {
          // El primer proyecto (Incoming) ocupa 2 columnas en pantallas medianas en adelante
          const colSpan = index === 0 ? "md:col-span-2" : "col-span-1";

          return (
            <div key={project.id} className={`${colSpan}`}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                bgImage={project.bgImage}
                link={project.link}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}
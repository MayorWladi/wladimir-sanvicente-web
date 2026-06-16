import type { Dictionary } from "@/app/[lang]/dictionaries";

export default function ExperienceWidget({ dict }: { dict: Dictionary }) {
  const experience = new Date().getFullYear() - 2019;

  return (
    <div className="widget-card col-span-1 rounded-xl overflow-hidden select-none border-2 border-black/40 bg-accent-blue/75 flex items-center justify-center">
      <div className="grid place-items-center">
        <h1 className="text-5xl font-bold">+{experience}</h1>
        <p className="text-sm font-medium opacity-80 text-center px-2">
          {dict.experience.unit}
        </p>
      </div>
    </div>
  );
}

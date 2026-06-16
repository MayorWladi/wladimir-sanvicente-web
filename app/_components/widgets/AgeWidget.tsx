import type { Dictionary } from "@/app/[lang]/dictionaries";

function calculateAge(): number {
  const today = new Date();
  let age = today.getFullYear() - 1999;
  const month = today.getMonth();
  const day = today.getDate();
  if (month < 11 || (month === 11 && day < 14)) {
    age--;
  }
  return age;
}

export default function AgeWidget({ dict }: { dict: Dictionary }) {
  const age = calculateAge();

  return (
    <div className="widget-card col-span-1 rounded-xl overflow-hidden select-none border-2 border-black/40 bg-accent-green/75 flex items-center justify-center">
      <div className="grid place-items-center">
        <p className="text-sm font-medium opacity-80">{dict.age.label}</p>
        <h1 className="text-5xl font-bold">{age}</h1>
        <p className="text-sm font-medium opacity-80">{dict.age.years}</p>
        {dict.age.old && (
          <p className="text-sm font-medium opacity-80">{dict.age.old}</p>
        )}
      </div>
    </div>
  );
}

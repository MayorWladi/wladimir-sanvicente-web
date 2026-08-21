import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <div className="widget-card col-span-1 rounded-xl overflow-hidden select-none border-2 border-black/40 relative p-0">
      <Image
        src="/wladimirLofi.jpg"
        alt="Wladimir Sanvicente"
        width={192}
        height={192}
        className="object-cover object-top w-full h-full opacity-90"
        priority
      />
      {/* Gradient fade at the bottom to blend with dark background */}
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

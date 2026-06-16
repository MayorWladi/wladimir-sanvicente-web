import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <div className="widget-card col-span-1 rounded-xl overflow-hidden select-none border-2 border-black/40 flex items-center justify-center p-0">
      <Image
        src="/wladimirLofi.jpg"
        alt="Wladimir Sanvicente"
        width={192}
        height={192}
        className="object-cover w-full h-full opacity-60"
        priority
      />
    </div>
  );
}

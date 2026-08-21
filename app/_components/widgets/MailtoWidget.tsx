export default function MailtoWidget() {
  return (
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=wladimirss142@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Email"
      className="transition-all widget-card col-span-1 rounded-xl overflow-hidden select-none border-2 border-black/40 bg-accent-red/75 hover:scale-[1.03] cursor-pointer relative"
    >
      {/* CAPA 1: Ícono siempre centrado */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="opacity-90 text-[#f0f8ff]"
          width="52"
          height="52"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      </div>

      {/* CAPA 2: Chrome */}
      <div className="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none">
        <div className="flex justify-end">
          <svg className="text-white/60" width="16" height="16" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
          </svg>
        </div>
        <div>
          <p className="text-white/70 text-[10px] font-mono truncate">wladimirss142@gmail.com</p>
        </div>
      </div>
    </a>
  );
}

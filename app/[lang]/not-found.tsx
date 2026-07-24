import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full max-w-300 mx-auto p-4 sm:p-6 flex flex-col items-center justify-center min-h-[80vh] gap-6">
      {/* CRT TV Container */}
      <section className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden select-none border-2 border-black/40 bg-[#1e2124] flex flex-col items-center justify-center">

        {/* Giant 404 (Behind everything) */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-60">
          <h1 className="text-8xl sm:text-9xl font-black text-white/20 font-mono tracking-tighter">
            404
          </h1>
        </div>

        {/* Noise layer */}
        <div
          className="absolute inset-0 animate-noise mix-blend-overlay z-10 opacity-40"
          style={{
            backgroundImage: "url('/noise.gif')",
            backgroundSize: "200px 200px",
          }}
        />

        {/* Scanlines */}
        <div className="absolute inset-0 scanlines pointer-events-none opacity-60 z-20" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-30" />

        {/* Content */}
        <div className="relative z-40 flex flex-col items-center justify-center">
          <div className="px-3 py-1 bg-black/60 border-2 border-black rounded shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <span className="text-white font-mono font-bold tracking-widest text-sm animate-pulse">
              NO SIGNAL
            </span>
          </div>
        </div>
      </section>

      {/* Text below the TV */}
      <div className="text-center space-y-3">
        <p className="text-text-secondary text-sm font-medium">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/en"
          className="widget-card inline-flex items-center gap-2 px-5 py-2.5 border-2 border-black/40 rounded-xl bg-widget-bg text-sm font-bold hover:scale-[1.03] transition-all select-none"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Go Home
        </Link>
      </div>
    </main>
  );
}

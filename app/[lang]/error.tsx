"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="w-full max-w-300 mx-auto p-4 sm:p-6 flex flex-col items-center justify-center min-h-[80vh] gap-6">
      {/* CRT TV Container */}
      <section className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden select-none border-2 border-black/40 bg-[#1e2124] flex flex-col items-center justify-center">
        {/* Noise layer */}
        <div
          className="absolute inset-0 animate-noise mix-blend-overlay z-0 opacity-50"
          style={{
            backgroundImage: "url('/noise.gif')",
            backgroundSize: "200px 200px",
          }}
        />

        {/* Scanlines */}
        <div className="absolute inset-0 scanlines pointer-events-none opacity-60 z-10" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-20" />

        {/* Content */}
        <div className="relative z-30 flex flex-col items-center gap-4">
          <span className="text-4xl">💥</span>
          <div className="px-3 py-1 bg-black/60 border-2 border-accent-red/60 rounded shadow-[0_0_10px_rgba(219,68,55,0.2)]">
            <span className="text-accent-red font-mono font-bold tracking-widest text-sm animate-pulse">
              SIGNAL LOST
            </span>
          </div>
        </div>
      </section>

      {/* Text below the TV */}
      <div className="text-center space-y-3">
        <p className="text-text-primary text-base font-bold">
          Something went wrong
        </p>
        <p className="text-text-secondary text-sm font-medium max-w-sm">
          An unexpected error occurred. You can try again or go back home.
        </p>
        <div className="flex items-center justify-center gap-3 pt-1">
          <button
            onClick={() => reset()}
            className="widget-card inline-flex items-center gap-2 px-5 py-2.5 border-2 border-black/40 rounded-xl bg-widget-bg text-sm font-bold hover:scale-[1.03] transition-all select-none cursor-pointer"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
            </svg>
            Try Again
          </button>
          <a
            href="/en"
            className="widget-card inline-flex items-center gap-2 px-5 py-2.5 border-2 border-black/40 rounded-xl bg-widget-bg text-sm font-bold hover:scale-[1.03] transition-all select-none"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Go Home
          </a>
        </div>
      </div>
    </main>
  );
}

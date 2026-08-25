"use client";

import { useState, useEffect } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import CoffeeWidget from "./CoffeeWidget";
import LinkedInWidget from "./LinkedInWidget";

const PixelDev = ({ stage }: { stage: string }) => {
  const isWalkingRight = stage === "walking_right";
  const isPouring = stage === "pouring";
  const isWalking = stage === "walking_left" || stage === "walking_right";
  const flip = isWalkingRight ? "scaleX(-1)" : "scaleX(1)";

  return (
    <>
      <style>{`
        @keyframes walk {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .anim-walk { animation: walk 0.35s infinite; }
      `}</style>
      <div className={`${isWalking ? "anim-walk" : ""} transition-transform duration-300 origin-bottom ${stage === "idle" ? "scale-y-[0.8]" : "scale-y-100"}`}>
        <div
          style={{ transform: flip }}
          className="transition-transform duration-200"
        >
          <svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Head */}
            <rect x="12" y="8" width="8" height="8" fill="#FFB6C1" />
            {/* Glasses */}
            <rect x="12" y="10" width="8" height="2" fill="#111" />
            {/* Hair */}
            <rect x="10" y="6" width="12" height="3" fill="#333" />
            <rect x="10" y="9" width="2" height="3" fill="#333" />
            {/* Body (Hoodie) */}
            <rect x="10" y="16" width="12" height="10" fill="#4B5563" />
            {/* Legs */}
            <rect x="12" y="26" width="3" height="6" fill="#1D4ED8" />
            <rect x="17" y="26" width="3" height="6" fill="#1D4ED8" />
            {/* Arms */}
            {isPouring ? (
              <>
                {/* Arm reaching out to coffee */}
                <rect x="4" y="18" width="6" height="3" fill="#FFB6C1" />
                <rect x="6" y="16" width="8" height="3" fill="#4B5563" />
              </>
            ) : (
              <>
                {/* Arm resting */}
                <rect x="14" y="18" width="4" height="6" fill="#374151" />
                {/* Coffee cup in hand if he has it */}
                {(stage === "walking_right" || stage === "idle") && (
                  <>
                    <rect x="13" y="21" width="5" height="5" rx="1" fill="#F9FAFB" />
                    <rect x="14" y="20" width="3" height="1" fill="#4B5563" /> {/* Lid/Coffee */}
                  </>
                )}
              </>
            )}
          </svg>
        </div>
      </div>
    </>
  );
};

export default function CoffeeLinkedInSection({ dict }: { dict: Dictionary }) {
  const [count, setCount] = useState(9964);
  const [stage, setStage] = useState<"idle" | "walking_left" | "pouring" | "walking_right">("idle");

  useEffect(() => {
    // 15 second cycle
    const interval = setInterval(() => {
      // 1. Start walking left towards coffee
      setStage("walking_left");

      // 2. Arrive after 2 seconds
      setTimeout(() => {
        setStage("pouring");

        // 3. Pour coffee for 1.5 seconds, then increment
        setTimeout(() => {
          setCount((c) => c + 1);
          setStage("walking_right");

          // 4. Walk back for 2 seconds, then sit idle
          setTimeout(() => {
            setStage("idle");
          }, 2000);
        }, 1500);
      }, 2000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // Calculate position class based on stage
  // The wrapper is 2 cols: Coffee is 0-50%, LinkedIn is 50-100%
  // Desk is on the far right of LinkedIn (~91%)
  // Coffee Machine is on the far right of Coffee (~48%). Character stands at 51% facing left.
  const isAtLinkedIn = stage === "idle" || stage === "walking_right";
  const positionClass = isAtLinkedIn ? "left-[91%]" : "left-[51%]";

  return (
    <div className="col-span-2 sm:col-span-2 grid grid-cols-2 gap-3 sm:gap-4 relative">
      {/* Background Widgets */}
      <CoffeeWidget dict={dict} count={count} />
      <LinkedInWidget />

      {/* The Animated Character Overlay */}
      <div
        className={`absolute bottom-1 -translate-x-1/2 transition-all duration-2000 ease-linear z-40 pointer-events-none ${positionClass}`}
      >
        <PixelDev stage={stage} />
      </div>

      {/* Desk & Laptop SVG (Moved here to sit in front of the character) */}
      <div className="absolute bottom-0 right-4 opacity-100 pointer-events-none z-50">
        <svg width="60" height="36" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Desk Top */}
          <rect x="0" y="10" width="40" height="3" fill="#8B4513" />
          {/* Desk Legs */}
          <rect x="4" y="13" width="3" height="11" fill="#654321" />
          <rect x="33" y="13" width="3" height="11" fill="#654321" />
          {/* Laptop */}
          <rect x="14" y="4" width="12" height="6" fill="#D1D5DB" />
          <rect x="12" y="10" width="16" height="2" fill="#9CA3AF" />
        </svg>
      </div>
    </div>
  );
}

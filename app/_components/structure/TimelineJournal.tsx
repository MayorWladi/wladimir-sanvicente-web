"use client";

import React from "react";
import { JournalEntry, JournalCard } from "@/app/lib/types";

export default function TimelineJournal({ journal }: { journal: JournalEntry[] }) {
  if (!journal || journal.length === 0) {
    return <div className="text-center py-20 text-text-secondary">No journal entries found.</div>;
  }

  return (
    <div className="relative border-l-4 border-black/20 ml-4 md:ml-8 pl-6 md:pl-12 py-10 space-y-16">
      {journal.map((entry, idx) => (
        <div key={idx} className="relative animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
          
          {/* Timeline Node */}
          <div className="absolute -left-[30px] md:-left-[54px] top-1 w-5 h-5 bg-black border-4 border-widget-bg rounded-full shadow-[0_0_0_4px_rgba(0,0,0,0.1)]"></div>
          
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">{entry.version}</h2>
              <span className="text-sm font-bold bg-black/10 text-text-secondary px-3 py-1 rounded-full">{entry.date}</span>
            </div>
            <h3 className="text-lg text-text-secondary font-medium">{entry.title}</h3>
          </div>

          {/* Bento Grid for this entry */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[minmax(150px,auto)]">
            {entry.cards.map((card, cardIdx) => (
              <JournalCardComponent key={cardIdx} card={card} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function JournalCardComponent({ card }: { card: JournalCard }) {
  const baseClasses = "bg-widget-bg border-2 border-black rounded-xl p-5 md:p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all duration-200 overflow-hidden relative flex flex-col";
  
  if (card.type === "image" && card.imageUrl) {
    return (
      <div className={`${baseClasses} ${card.gridSpan || 'col-span-1'} p-0 md:p-0`}>
        <img src={card.imageUrl} alt={card.title || "Image"} className="w-full h-full object-cover" />
      </div>
    );
  }

  if (card.type === "tech") {
    return (
      <div className={`${baseClasses} ${card.gridSpan || 'col-span-1'} justify-center items-center text-center bg-[#1C1A19] text-[#E5E0D8]`}>
        <span className="text-3xl mb-3">⚡</span>
        <h4 className="font-bold">{card.title}</h4>
        {card.content && <p className="text-xs text-white/60 mt-2">{card.content}</p>}
      </div>
    );
  }

  return (
    <div className={`${baseClasses} ${card.gridSpan || 'col-span-1'} justify-between`}>
      <div className="space-y-3">
        {card.type === "feature" && (
          <span className="text-[10px] font-black uppercase tracking-widest text-accent-red">Feature</span>
        )}
        {card.title && <h4 className="text-lg font-bold text-text-primary leading-tight">{card.title}</h4>}
        {card.content && <p className="text-sm text-text-secondary leading-relaxed">{card.content}</p>}
      </div>
      
      {card.tags && card.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {card.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-black/5 rounded-md border border-black/10">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

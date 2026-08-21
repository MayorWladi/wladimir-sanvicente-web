"use client";

import React from "react";
import { JournalEntry, JournalCard } from "@/app/lib/types";

export default function TimelineJournal({ journal, emptyLabel }: { journal: JournalEntry[], emptyLabel?: string }) {
  if (!journal || journal.length === 0) {
    return <div className="text-center py-20 text-text-secondary">{emptyLabel || "No journal entries found."}</div>;
  }

  return (
    <div className="relative ml-4 md:ml-8 pl-8 md:pl-14 py-10 space-y-20">
      {/* Timeline spine */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.75 bg-accent-purple/20" />

      {journal.map((entry, idx) => (
        <div key={idx} className="relative">

          {/* Timeline Node */}
          <div className="absolute -left-5.5 md:-left-7.75 top-3 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-accent-purple border-[3px] border-body-dark shadow-[0_0_8px_rgba(192,132,252,0.4)]" />
          </div>

          {/* Header */}
          <div className="mb-5">
            <div className="flex items-baseline gap-3 mb-1 flex-wrap">
              <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">{entry.version}</h2>
              <span className="text-xs font-bold text-accent-purple/80 uppercase tracking-widest">{entry.date}</span>
            </div>
            <h3 className="text-base text-text-secondary font-medium">{entry.title}</h3>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[minmax(140px,auto)]">
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
  const baseClasses = "widget-card rounded-xl overflow-hidden select-none border-2 border-black/40 bg-widget-bg relative flex flex-col transition-all duration-300";

  if (card.type === "image" && card.imageUrl) {
    return (
      <div className={`${baseClasses} ${card.gridSpan || 'col-span-1'} p-0`}>
        <img src={card.imageUrl} alt={card.title || "Image"} className="w-full h-full object-cover" />
      </div>
    );
  }

  if (card.type === "tech") {
    return (
      <div className={`${baseClasses} ${card.gridSpan || 'col-span-1'} justify-center items-center text-center p-5 md:p-6`}>
        <span className="text-3xl mb-2">⚡</span>
        <h4 className="font-bold text-text-primary text-sm">{card.title}</h4>
        {card.content && <p className="text-xs text-text-secondary mt-2 leading-relaxed">{card.content}</p>}
        {card.tags && card.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
            {card.tags.map(tag => (
              <span key={tag} className="text-[10px] font-medium bg-black/40 text-white/90 px-2 py-0.5 rounded border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`${baseClasses} ${card.gridSpan || 'col-span-1'} justify-between p-5 md:p-6`}>
      <div className="space-y-2">
        {card.type === "feature" && (
          <span className="text-[10px] font-black uppercase tracking-widest text-accent-red">Feature</span>
        )}
        {card.title && <h4 className="text-base font-bold text-text-primary leading-tight">{card.title}</h4>}
        {card.content && <p className="text-sm text-text-secondary leading-relaxed">{card.content}</p>}
      </div>

      {card.tags && card.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {card.tags.map(tag => (
            <span key={tag} className="text-[10px] font-medium bg-black/40 text-white/90 px-2 py-0.5 rounded border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

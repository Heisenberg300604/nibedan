'use client';

import { type Hackathon } from '@/config/Hackathons';
import React from 'react';

interface HackathonCardProps {
  hackathon: Hackathon;
}

const rankColors: Record<string, string> = {
  '1st': 'text-yellow-500 border-yellow-500/30 bg-yellow-500/10',
  '2nd': 'text-slate-300 border-slate-300/30 bg-slate-300/10',
  '3rd': 'text-amber-500 border-amber-500/30 bg-amber-500/10',
  'Grand Finalist': 'text-purple-400 border-purple-400/30 bg-purple-400/10',
};

// SVG rank icons instead of emojis
function RankIcon({ rank }: { rank: string }) {
  if (rank === '1st') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    );
  }
  if (rank === '2nd' || rank === '3rd') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    );
  }
  // Grand Finalist — trophy cup
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3.5"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

const rankLabel: Record<string, string> = {
  '1st': '1st Place',
  '2nd': '2nd Place',
  '3rd': '3rd Place',
  'Grand Finalist': 'Grand Finalist',
};

export function HackathonCard({ hackathon }: HackathonCardProps) {
  const rank = hackathon.rank ?? '';
  const colorClass =
    rankColors[rank] ??
    'text-neutral-400 border-neutral-400/30 bg-neutral-400/10';
  const label = rankLabel[rank] ?? hackathon.achievement;

  return (
    <div className="group relative flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-border/80 hover:shadow-md hover:shadow-black/10 dark:hover:shadow-black/30">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold leading-tight">
            {hackathon.eventName}
          </h3>
          <p className="text-secondary text-sm">{hackathon.date}</p>
          {hackathon.venue && (
            <p className="text-secondary text-xs">📍 {hackathon.venue}</p>
          )}
        </div>
        <span
          className={`flex items-center gap-1.5 self-start rounded-md border px-2.5 py-1 text-xs font-semibold whitespace-nowrap ${colorClass}`}
        >
          <RankIcon rank={rank} />
          {label}
        </span>
      </div>

      {/* Description */}
      <p className="text-secondary text-sm leading-relaxed">
        {hackathon.description}
      </p>

      {/* Project */}
      <div className="rounded-md border border-border/60 bg-background/50 p-4">
        <h4 className="mb-1 text-sm font-semibold">{hackathon.project.name}</h4>
        <p className="text-secondary text-xs leading-relaxed">
          {hackathon.project.description}
        </p>
        {hackathon.project.impact && (
          <p className="text-secondary mt-2 text-xs italic opacity-80">
            ↳ {hackathon.project.impact}
          </p>
        )}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5">
        {hackathon.project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-secondary/20 px-2 py-0.5 text-xs text-neutral-600 dark:text-neutral-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {(hackathon.project.github || hackathon.project.live) && (
        <div className="flex gap-3">
          {hackathon.project.github && (
            <a
              href={hackathon.project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary text-xs underline underline-offset-4 transition-colors hover:text-foreground"
            >
              GitHub →
            </a>
          )}
          {hackathon.project.live && (
            <a
              href={hackathon.project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary text-xs underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Live Demo →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

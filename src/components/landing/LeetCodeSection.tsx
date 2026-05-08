'use client';

import React, { useEffect, useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import LeetCodeIcon from '../svgs/LeetCode';

interface LeetCodeData {
  username: string;
  profile: { ranking: number | null };
  stats: {
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    totalEasy: number;
    totalMedium: number;
    totalHard: number;
  };
  contest: {
    rating: number;
    globalRanking: number | null;
    attendedContests: number;
    topPercentage: number | null;
  };
  submissionCalendar: Record<string, number>;
}

const LeetCodeSection = () => {
  const [data, setData] = useState<LeetCodeData | null>(null);

  useEffect(() => {
    fetch('/api/leetcode')
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch(console.error);
  }, []);

  if (!data) return <div className="h-64 animate-pulse rounded-xl bg-neutral-800/50 mt-12" />;

  const calendar = data.submissionCalendar || {};
  const today = new Date();
  const cursor = new Date();
  cursor.setDate(today.getDate() - 365);
  cursor.setDate(cursor.getDate() - cursor.getDay()); // start on Sunday

  const weeks: { date: Date; count: number; level: 0 | 1 | 2 | 3 | 4 }[][] = [];

  while (cursor <= today) {
    const week: { date: Date; count: number; level: 0 | 1 | 2 | 3 | 4 }[] = [];
    for (let d = 0; d < 7; d++) {
      const utcTs = Date.UTC(cursor.getFullYear(), cursor.getMonth(), cursor.getDate()) / 1000;
      const count = calendar[String(utcTs)] ?? 0;
      let level: 0 | 1 | 2 | 3 | 4 = 0;
      if (count >= 1) level = 1;
      if (count >= 3) level = 2;
      if (count >= 6) level = 3;
      if (count >= 10) level = 4;
      week.push({ date: new Date(cursor), count, level });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }

  return (
    <section className="mt-20">
      <SectionHeading subHeading="LeetCode" heading="Activity" />
      <div className="flex flex-col gap-6 mt-8 rounded-2xl border border-border/50 bg-secondary/10 p-6 md:flex-row md:items-start">
        {/* Left Side: Stats */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-[#FFA116]/10">
              <LeetCodeIcon className="size-6 text-[#FFA116]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{data.username || 'Nibedan'}</h3>
              <p className="text-xs text-muted-foreground">Rank {data.profile?.ranking?.toLocaleString() ?? 'N/A'}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <div className="flex flex-col rounded-xl border border-border/50 bg-background/50 p-3">
              <span className="text-xs text-muted-foreground">Total Solved</span>
              <span className="text-xl font-bold text-foreground">{data.stats?.totalSolved || 0}</span>
            </div>
            <div className="flex flex-col rounded-xl border border-border/50 bg-background/50 p-3">
              <span className="text-xs text-muted-foreground">Contest Rating</span>
              <span className="text-xl font-bold text-foreground">{(data.contest?.rating || 0) > 0 ? data.contest.rating : 'N/A'}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#00B8A3]">Easy</span>
              <span className="font-medium text-foreground">{data.stats?.easySolved || 0} <span className="text-muted-foreground">/ {data.stats?.totalEasy || 0}</span></span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#FFC01E]">Medium</span>
              <span className="font-medium text-foreground">{data.stats?.mediumSolved || 0} <span className="text-muted-foreground">/ {data.stats?.totalMedium || 0}</span></span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#FF375F]">Hard</span>
              <span className="font-medium text-foreground">{data.stats?.hardSolved || 0} <span className="text-muted-foreground">/ {data.stats?.totalHard || 0}</span></span>
            </div>
          </div>
        </div>

        {/* Right Side: Heatmap */}
        <div className="flex-1 overflow-x-auto md:ml-4 border-t border-border/50 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-6">
          <div className="flex gap-1 pb-2">
            {weeks.map((week, i) => (
              <div key={i} className="flex flex-col gap-1">
                {week.map((day) => (
                  <div
                    key={day.date.toISOString()}
                    className={`size-3 rounded-sm transition-colors hover:ring-1 hover:ring-foreground/50 ${
                      day.level === 0 ? 'bg-neutral-800' :
                      day.level === 1 ? 'bg-[#FFA116]/30' :
                      day.level === 2 ? 'bg-[#FFA116]/60' :
                      day.level === 3 ? 'bg-[#FFA116]/80' : 'bg-[#FFA116]'
                    }`}
                    title={`${day.count} submissions on ${day.date.toDateString()}`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <span>Last 365 days</span>
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="size-3 rounded-sm bg-neutral-800" />
                <div className="size-3 rounded-sm bg-[#FFA116]/30" />
                <div className="size-3 rounded-sm bg-[#FFA116]/60" />
                <div className="size-3 rounded-sm bg-[#FFA116]/80" />
                <div className="size-3 rounded-sm bg-[#FFA116]" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeSection;
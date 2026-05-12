'use client';

import React, { useEffect, useRef, useState } from 'react';

import Container from '../common/Container';
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

interface DayCell {
  date: Date;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  count: number;
  date: string;
}

const MONTH_LABELS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const LEVEL_COLORS = [
  'bg-[#161b22]',      // 0 - empty (GitHub dark)
  'bg-[#0e4429]',      // 1 - low
  'bg-[#006d32]',      // 2 - medium-low
  'bg-[#26a641]',      // 3 - medium-high
  'bg-[#39d353]',      // 4 - high
];

function buildWeeks(calendar: Record<string, number>): DayCell[][] {
  const today = new Date();
  const cursor = new Date(today);
  cursor.setDate(today.getDate() - 364);
  cursor.setDate(cursor.getDate() - cursor.getDay()); // align to Sunday

  const weeks: DayCell[][] = [];

  while (cursor <= today) {
    const week: DayCell[] = [];
    for (let d = 0; d < 7; d++) {
      const utcTs =
        Date.UTC(cursor.getFullYear(), cursor.getMonth(), cursor.getDate()) / 1000;
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
  return weeks;
}

function getMonthPositions(weeks: DayCell[][]): { label: string; col: number }[] {
  const positions: { label: string; col: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, i) => {
    const m = week[0].date.getMonth();
    if (m !== lastMonth) {
      positions.push({ label: MONTH_LABELS[m], col: i });
      lastMonth = m;
    }
  });
  return positions;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

const LeetCodeSection = () => {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    count: 0,
    date: '',
  });
  const heatmapRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/api/leetcode')
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch(console.error);
  }, []);

  // Scroll to the rightmost (latest) activity on mount
  useEffect(() => {
    if (data && scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [data]);

  if (!data)
    return (
      <div className="mt-12 h-64 animate-pulse rounded-xl bg-neutral-800/50" />
    );

  const calendar = data.submissionCalendar || {};
  const weeks = buildWeeks(calendar);
  const monthPositions = getMonthPositions(weeks);

  const totalSubmissions = Object.values(calendar).reduce(
    (a, b) => a + b,
    0,
  );

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    day: DayCell,
  ) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const heatmapRect = heatmapRef.current?.getBoundingClientRect();
    if (!heatmapRect) return;
    setTooltip({
      visible: true,
      x: rect.left - heatmapRect.left + rect.width / 2,
      y: rect.top - heatmapRect.top - 8,
      count: day.count,
      date: formatDate(day.date),
    });
  };

  const handleMouseLeave = () => {
    setTooltip((t) => ({ ...t, visible: false }));
  };

  return (
    <Container className="mt-20">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-secondary text-sm">LeetCode</p>
            <h2 className="text-foreground text-2xl font-bold">Activity</h2>
            {data.stats && (
              <p className="text-muted-foreground mt-1 text-sm">
                <b className="text-foreground">{data.username || 'Nibedan'}</b>
                &apos;s submissions over the past year
              </p>
            )}
          </div>
          <a
            href={`https://leetcode.com/u/${data.username || 'Nibedan'}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-[#FFA116]/50 hover:text-[#FFA116]"
          >
            <LeetCodeIcon className="size-4 text-[#FFA116]" />
            <span className="hidden sm:inline">View Profile</span>
          </a>
        </div>

        <div className="flex flex-col gap-6 rounded-2xl border border-border/50 bg-[#0d1117] p-4 sm:p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            {/* Left Side: Profile & Overall Stats */}
            <div className="flex flex-col gap-4 lg:w-56 lg:shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-[#FFA116]/10">
                  <LeetCodeIcon className="size-5 text-[#FFA116]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {data.username || 'Nibedan'}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Rank #{data.profile?.ranking?.toLocaleString() ?? 'N/A'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-0.5 rounded-lg border border-white/5 bg-white/[0.03] p-3">
                  <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
                    Solved
                  </span>
                  <span className="text-lg font-bold text-foreground">
                    {data.stats?.totalSolved || 0}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 rounded-lg border border-white/5 bg-white/[0.03] p-3">
                  <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
                    Rating
                  </span>
                  <span className="text-lg font-bold text-foreground">
                    {(data.contest?.rating || 0) > 0
                      ? Math.round(data.contest.rating)
                      : '—'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Heatmap */}
            <div className="min-w-0 flex-1 overflow-hidden lg:border-l lg:border-white/5 lg:pl-6">
              <div
                ref={heatmapRef}
                className="relative"
              >
                {/* Tooltip */}
                {tooltip.visible && (
                  <div
                    className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full rounded-md border border-white/10 bg-[#1c2128] px-2.5 py-1.5 text-xs shadow-xl"
                    style={{ left: tooltip.x, top: tooltip.y }}
                  >
                    <span className="font-semibold text-foreground">
                      {tooltip.count}{' '}
                      {tooltip.count === 1 ? 'submission' : 'submissions'}
                    </span>
                    <br />
                    <span className="text-muted-foreground">{tooltip.date}</span>
                    <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[#1c2128]" />
                  </div>
                )}

                {/* Scrollable heatmap */}
                <div
                  ref={scrollRef}
                  className="overflow-x-auto pb-2"
                  style={{ scrollbarWidth: 'thin', scrollbarColor: '#30363d transparent' }}
                >
                  <div className="inline-flex flex-col gap-0">
                    {/* Month labels */}
                    <div className="relative mb-1 h-4" style={{ width: weeks.length * 14 }}>
                      {monthPositions.map(({ label, col }) => (
                        <span
                          key={`${label}-${col}`}
                          className="absolute text-[10px] text-muted-foreground"
                          style={{ left: col * 14 }}
                        >
                          {label}
                        </span>
                      ))}
                    </div>

                    {/* Grid: day rows x week columns */}
                    <div className="flex gap-0">
                      {/* Day labels */}
                      <div className="mr-1 flex flex-col justify-between py-px" style={{ gap: '2px' }}>
                        {DAY_LABELS.map((d, i) => (
                          <span
                            key={d}
                            className="flex h-[10px] items-center text-[9px] leading-none text-muted-foreground"
                            style={{ visibility: i % 2 === 1 ? 'visible' : 'hidden' }}
                          >
                            {d}
                          </span>
                        ))}
                      </div>

                      {/* Cells */}
                      <div className="flex gap-[3px]">
                        {weeks.map((week, wi) => (
                          <div key={wi} className="flex flex-col gap-[3px]">
                            {week.map((day) => (
                              <div
                                key={day.date.toISOString()}
                                className={`size-[10px] cursor-pointer rounded-sm transition-all duration-100 hover:ring-1 hover:ring-white/40 hover:brightness-125 ${LEVEL_COLORS[day.level]}`}
                                onMouseEnter={(e) => handleMouseEnter(e, day)}
                                onMouseLeave={handleMouseLeave}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-3 flex items-center justify-end gap-1.5 text-[10px] text-muted-foreground">
                  <span>Less</span>
                  {LEVEL_COLORS.map((cls, i) => (
                    <div key={i} className={`size-[10px] rounded-sm ${cls}`} />
                  ))}
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Side: Difficulty & Submissions */}
          <div className="grid grid-cols-1 gap-4 border-t border-white/5 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: 'Easy',
                solved: data.stats?.easySolved || 0,
                total: data.stats?.totalEasy || 0,
                color: '#00B8A3',
              },
              {
                label: 'Medium',
                solved: data.stats?.mediumSolved || 0,
                total: data.stats?.totalMedium || 0,
                color: '#FFC01E',
              },
              {
                label: 'Hard',
                solved: data.stats?.hardSolved || 0,
                total: data.stats?.totalHard || 0,
                color: '#FF375F',
              },
            ].map(({ label, solved, total, color }) => (
              <div key={label} className="space-y-2 rounded-lg border border-white/5 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between text-sm">
                  <span style={{ color }} className="font-medium">
                    {label}
                  </span>
                  <span className="text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {solved}
                    </span>
                    <span className="text-xs">/{total}</span>
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: total > 0 ? `${(solved / total) * 100}%` : '0%',
                      backgroundColor: color,
                    }}
                  />
                </div>
              </div>
            ))}
            
            <div className="flex flex-col items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] p-4">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wide">
                Total Submissions
              </span>
              <p className="mt-1 text-2xl font-bold text-foreground">
                {totalSubmissions.toLocaleString()}
              </p>
            </div>
          </div>

        </div>
      </div>
    </Container>
  );
};

export default LeetCodeSection;

'use client';

import React, { useEffect, useRef, useState } from 'react';

interface LeetCodeStats {
  username: string;
  profile: {
    ranking: number | null;
    realName: string | null;
  };
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
  activeBadge: { displayName: string } | null;
}

function AnimatedNumber({ value, duration = 1200 }: { value: number; duration?: number }) {
  const [displayed, setDisplayed] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (value === 0) return;
    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * value));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration]);

  return <>{displayed.toLocaleString()}</>;
}

function StatCard({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: number;
  sub?: string;
  color: string;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-border/80 hover:shadow-sm">
      <p className="text-secondary text-xs uppercase tracking-widest">{label}</p>
      <p className={`text-3xl font-bold ${color}`}>
        <AnimatedNumber value={value} />
      </p>
      {sub && <p className="text-secondary text-xs">{sub}</p>}
    </div>
  );
}

function DifficultyBar({
  label,
  solved,
  total,
  color,
}: {
  label: string;
  solved: number;
  total: number;
  color: string;
}) {
  const pct = total > 0 ? (solved / total) * 100 : 0;
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className={`font-medium ${color}`}>{label}</span>
        <span className="text-secondary">
          {solved} / {total}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary/30">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color.replace('text-', 'bg-')}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function LeetCodeStats() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/leetcode')
      .then((r) => {
        if (!r.ok) throw new Error('Failed to fetch');
        return r.json();
      })
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setStats(data);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <div className="text-secondary text-sm animate-pulse">Loading LeetCode stats...</div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <p className="text-secondary text-sm">
          Could not load live stats.{' '}
          <a
            href="https://leetcode.com/u/Nibedan/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            View profile on LeetCode →
          </a>
        </p>
      </div>
    );
  }

  const { profile, stats: s, contest } = stats;

  return (
    <div className="flex flex-col gap-6">
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-[#FFA116]/10 text-[#FFA116]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold">{stats.username}</p>
            {profile.ranking && (
              <p className="text-secondary text-xs">Global Rank #{profile.ranking.toLocaleString()}</p>
            )}
          </div>
        </div>
        <a
          href="https://leetcode.com/u/Nibedan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary text-xs underline underline-offset-4 transition-colors hover:text-foreground"
        >
          View Profile →
        </a>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard
          label="Total Solved"
          value={s.totalSolved}
          color="text-foreground"
        />
        <StatCard
          label="Easy"
          value={s.easySolved}
          sub={`/ ${s.totalEasy}`}
          color="text-green-500"
        />
        <StatCard
          label="Medium"
          value={s.mediumSolved}
          sub={`/ ${s.totalMedium}`}
          color="text-yellow-500"
        />
        <StatCard
          label="Hard"
          value={s.hardSolved}
          sub={`/ ${s.totalHard}`}
          color="text-red-500"
        />
      </div>

      {/* Progress Bars */}
      <div className="rounded-lg border border-border bg-card p-4">
        <h4 className="mb-4 text-sm font-semibold">Problem Breakdown</h4>
        <div className="flex flex-col gap-4">
          <DifficultyBar label="Easy" solved={s.easySolved} total={s.totalEasy} color="text-green-500" />
          <DifficultyBar label="Medium" solved={s.mediumSolved} total={s.totalMedium} color="text-yellow-500" />
          <DifficultyBar label="Hard" solved={s.hardSolved} total={s.totalHard} color="text-red-500" />
        </div>
      </div>

      {/* Contest Stats */}
      {contest.attendedContests > 0 && (
        <div className="rounded-lg border border-border bg-card p-4">
          <h4 className="mb-3 text-sm font-semibold">Contest Rating</h4>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {contest.rating > 0 && (
              <div>
                <p className="text-secondary text-xs">Rating</p>
                <p className="text-xl font-bold text-[#FFA116]">
                  <AnimatedNumber value={contest.rating} />
                </p>
              </div>
            )}
            <div>
              <p className="text-secondary text-xs">Contests</p>
              <p className="text-xl font-bold">
                <AnimatedNumber value={contest.attendedContests} />
              </p>
            </div>
            {contest.topPercentage && (
              <div>
                <p className="text-secondary text-xs">Top</p>
                <p className="text-xl font-bold">{contest.topPercentage.toFixed(1)}%</p>
              </div>
            )}
          </div>
        </div>
      )}

      <p className="text-secondary text-center text-xs">Stats updated hourly via LeetCode API</p>
    </div>
  );
}

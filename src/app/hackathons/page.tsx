import Container from '@/components/common/Container';
import { HackathonList } from '@/components/hackathons/HackathonList';
import { Separator } from '@/components/ui/separator';
import { hackathons } from '@/config/Hackathons';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Hackathons | Nibedan Pati',
  description:
    '5x Hackathon Winner including SIH Grand Finalist. Explore my hackathon journey, projects built under pressure, and innovative solutions.',
  robots: {
    index: true,
    follow: true,
  },
};

const winners = hackathons.filter((h) => h.isWinner);
const finalists = hackathons.filter((h) => h.isFinalist && !h.isWinner);

export default function HackathonsPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Hackathon Achievements
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My journey through hackathons and coding competitions — 5 wins, 8 finals, countless
            lessons.
          </p>
          {/* Stats */}
          <div className="mx-auto mt-6 flex max-w-sm justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold">5x</p>
              <p className="text-secondary text-sm">Wins</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">8x</p>
              <p className="text-secondary text-sm">Finals</p>
            </div>
            <div className="text-center">
              <div className="flex h-9 items-center justify-center mb-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-yellow-500">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <p className="text-secondary text-sm">SIH Finalist</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Grand Finalist / Special Achievements */}
        {finalists.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Grand Finalist</h2>
            <HackathonList hackathons={finalists} />
          </div>
        )}

        {/* Winning Hackathons */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold">
              Wins
              <span className="text-muted-foreground ml-2 text-sm font-normal">
                ({winners.length} hackathons)
              </span>
            </h2>
          </div>
          <HackathonList hackathons={winners} />
        </div>
      </div>
    </Container>
  );
}

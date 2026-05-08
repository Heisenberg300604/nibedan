import { type Hackathon } from '@/config/Hackathons';
import React from 'react';

import { HackathonCard } from './HackathonCard';

interface HackathonListProps {
  hackathons: Hackathon[];
}

export function HackathonList({ hackathons }: HackathonListProps) {
  return (
    <div className="flex flex-col gap-6">
      {hackathons.map((hackathon) => (
        <HackathonCard key={hackathon.id} hackathon={hackathon} />
      ))}
    </div>
  );
}

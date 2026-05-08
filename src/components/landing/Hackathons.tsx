import { hackathons } from '@/config/Hackathons';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { HackathonCard } from '../hackathons/HackathonCard';
import { Button } from '../ui/button';

export default function Hackathons() {
  const featured = hackathons.slice(0, 2);

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Competitions" heading="Hackathons" />
      <div className="mt-4 flex flex-col gap-6">
        {featured.map((hackathon) => (
          <HackathonCard key={hackathon.id} hackathon={hackathon} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/hackathons">View all hackathons</Link>
        </Button>
      </div>
    </Container>
  );
}

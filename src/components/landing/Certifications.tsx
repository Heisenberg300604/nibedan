import { CertificationCard } from '@/components/certifications/CertificationCard';
import { featuredCertifications } from '@/config/Certifications';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Button } from '../ui/button';

export default function Certifications() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Credentials" heading="Certifications" />
      <div className="mt-4 flex flex-col gap-6">
        {featuredCertifications.map((certification) => (
          <CertificationCard
            key={certification.id}
            certification={certification}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/certifications">View all certifications</Link>
        </Button>
      </div>
    </Container>
  );
}

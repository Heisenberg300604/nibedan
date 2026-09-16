import { type Certification } from '@/config/Certifications';
import React from 'react';

import { CertificationCard } from './CertificationCard';

interface CertificationListProps {
  certifications: Certification[];
}

export function CertificationList({ certifications }: CertificationListProps) {
  return (
    <div className="flex flex-col gap-6">
      {certifications.map((certification) => (
        <CertificationCard
          key={certification.id}
          certification={certification}
        />
      ))}
    </div>
  );
}

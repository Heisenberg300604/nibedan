import { CertificationList } from '@/components/certifications/CertificationList';
import Container from '@/components/common/Container';
import { PageJsonLd } from '@/components/seo/JsonLd';
import { Separator } from '@/components/ui/separator';
import { certifications } from '@/config/Certifications';
import {
  generateMetadata as getMetadata,
  getPageMetadata,
} from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = getMetadata('/certifications');

const awsCertifications = certifications.filter((c) => c.issuerKey === 'aws');
const otherCertifications = certifications.filter((c) => c.issuerKey !== 'aws');

export default function CertificationsPage() {
  return (
    <Container className="py-16">
      <PageJsonLd
        path="/certifications"
        name="Certifications"
        description={getPageMetadata('/certifications').description}
      />
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Certifications
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Credentials I have earned along the way — cloud and AI foundations
            on AWS, plus assessed skill certificates. Every one is verifiable.
          </p>
          {/* Stats */}
          <div className="mx-auto mt-6 flex max-w-sm justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold">{awsCertifications.length}x</p>
              <p className="text-secondary text-sm">AWS Certified</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{certifications.length}</p>
              <p className="text-secondary text-sm">Credentials</p>
            </div>
            <div className="text-center">
              <div className="mb-1 flex h-9 items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-8 text-emerald-500"
                >
                  <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <p className="text-secondary text-sm">Verified</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* AWS — the headline credentials */}
        {awsCertifications.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              AWS Certifications
              <span className="text-muted-foreground ml-2 text-sm font-normal">
                ({awsCertifications.length})
              </span>
            </h2>
            <CertificationList certifications={awsCertifications} />
          </div>
        )}

        {/* Everything else */}
        {otherCertifications.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Skill Certifications</h2>
            <CertificationList certifications={otherCertifications} />
          </div>
        )}
      </div>
    </Container>
  );
}

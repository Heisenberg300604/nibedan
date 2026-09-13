import Container from '@/components/common/Container';
import { PageJsonLd } from '@/components/seo/JsonLd';
import { Separator } from '@/components/ui/separator';
import {
  generateMetadata as getMetadata,
  getPageMetadata,
} from '@/config/Meta';
import { resumeConfig } from '@/config/Resume';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = getMetadata('/resume');

export default function ResumePage() {
  return (
    <Container className="py-16">
      <PageJsonLd
        path="/resume"
        name="Resume"
        description={getPageMetadata('/resume').description}
      />
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Resume
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My resume.
          </p>
        </div>
        <Separator />
        <div className="mx-auto max-w-2xl">
          <iframe
            src={resumeConfig.url}
            className="min-h-screen w-full"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}

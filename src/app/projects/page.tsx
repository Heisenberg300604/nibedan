import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import { Suspense } from 'react';

import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  ...getMetadata('/projects'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ProjectsPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Projects
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My projects and work across different technologies and domains.
          </p>
        </div>

        <Separator />

        <Suspense fallback={<div className="h-10 animate-pulse rounded-lg bg-neutral-800/50" />}>
          <ProjectsClient />
        </Suspense>
      </div>
    </Container>
  );
}

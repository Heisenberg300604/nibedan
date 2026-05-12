'use client';

import { projects } from '@/config/Projects';
import { Link } from 'next-view-transitions';
import React, { useState } from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ProjectList } from '../projects/ProjectList';
import { Button } from '../ui/button';

type Tab = 'all' | 'web' | 'mobile' | 'cli';

const TABS: { label: string; value: Tab }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'CLI / OSS', value: 'cli' },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>('all');

  const filtered =
    activeTab === 'all'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const featured = filtered.slice(0, 4);

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Projects" />

      {/* Tabs */}
      <div className="mt-6 flex gap-2 flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
              activeTab === tab.value
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground border border-border/50 hover:border-border'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <ProjectList className="mt-6" projects={featured} />

      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href={`/projects${activeTab !== 'all' ? `?tab=${activeTab}` : ''}`}>
            Show all projects
          </Link>
        </Button>
      </div>
    </Container>
  );
}

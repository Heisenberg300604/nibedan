'use client';

import { ProjectList } from '@/components/projects/ProjectList';
import { projects } from '@/config/Projects';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type Tab = 'all' | 'web' | 'mobile' | 'cli';

const TABS: { label: string; value: Tab }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'CLI / OSS', value: 'cli' },
];

export default function ProjectsClient() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get('tab') as Tab) || 'all';
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  useEffect(() => {
    const tab = (searchParams.get('tab') as Tab) || 'all';
    setActiveTab(tab);
  }, [searchParams]);

  const filtered =
    activeTab === 'all'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {TABS.map((tab) => {
          const count =
            tab.value === 'all'
              ? projects.length
              : projects.filter((p) => p.category === tab.value).length;
          return (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeTab === tab.value
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:text-foreground border border-border/50 hover:border-border'
              }`}
            >
              {tab.label}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                  activeTab === tab.value
                    ? 'bg-background/20 text-background'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Count label */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          {TABS.find((t) => t.value === activeTab)?.label} Projects
          <span className="text-muted-foreground ml-2 text-sm font-normal">
            ({filtered.length} {filtered.length === 1 ? 'project' : 'projects'})
          </span>
        </h2>
      </div>

      <ProjectList projects={filtered} />
    </div>
  );
}

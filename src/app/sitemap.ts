import { getPublishedProjectCaseStudies } from '@/lib/project';
import type { MetadataRoute } from 'next';

import { absoluteUrl } from '../config/Site';

/**
 * Only canonical, indexable routes belong here. API routes are excluded
 * because they return JSON, not pages.
 */
const staticRoutes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/projects', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/work-experience', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/hackathons', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/resume', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/leetcode', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/setup', changeFrequency: 'yearly', priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Published case studies only — drafts must not enter the index.
  const caseStudies: MetadataRoute.Sitemap =
    getPublishedProjectCaseStudies().map((study) => ({
      url: absoluteUrl(`/projects/${study.slug}`),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  return [...pages, ...caseStudies];
}

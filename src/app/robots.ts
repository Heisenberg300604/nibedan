import type { MetadataRoute } from 'next';

import { absoluteUrl, isProductionUrl } from '../config/Site';

export default function robots(): MetadataRoute.Robots {
  // Never invite crawlers to a preview/local origin whose canonical URLs
  // would point somewhere they cannot reach.
  if (!isProductionUrl) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // API routes return JSON, not indexable pages. CSS, JS and images
        // stay crawlable so Google can render the page properly.
        disallow: ['/api/'],
      },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl('/'),
  };
}

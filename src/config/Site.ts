/*
 * Single source of truth for the site's absolute URL and identity signals.
 *
 * Canonical tags, the sitemap, OG image URLs and every JSON-LD @id are built
 * from `siteUrl`. A production build uses the custom domain automatically, so
 * no environment configuration is required for a normal deploy.
 */
/** The canonical production origin. No trailing slash. */
export const PRODUCTION_URL = 'https://nibedanpati.com';

const DEV_URL = 'http://localhost:3000';

/**
 * Resolution order:
 *   1. NEXT_PUBLIC_URL          — explicit override (preview deploys, staging)
 *   2. PRODUCTION_URL           — any production build
 *   3. DEV_URL                  — local development, stays noindex
 *
 * Deliberately NOT falling back to VERCEL_PROJECT_PRODUCTION_URL: that
 * resolves to the *.vercel.app address, which would emit canonicals on a
 * second domain and split the site's ranking signals away from the custom one.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_URL ||
  (process.env.NODE_ENV === 'production' ? PRODUCTION_URL : DEV_URL)
).replace(/\/+$/, '');

/** True once a real public origin is configured. Guards indexing directives. */
export const isProductionUrl =
  siteUrl.startsWith('https://') && !siteUrl.includes('localhost');

/** Build an absolute URL for a root-relative path. */
export function absoluteUrl(path = '/'): string {
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Profiles that genuinely belong to Nibedan Pati. Used for schema.org
 * `sameAs`, which is how a search engine ties this site to the same person
 * behind these accounts. Only verified, self-owned profiles belong here.
 */
export const profiles = {
  github: 'https://github.com/Heisenberg300604',
  linkedin: 'https://www.linkedin.com/in/nibedan-pati-2139b3277/',
  x: 'https://x.com/ItsHeisenberg04',
  leetcode: 'https://leetcode.com/u/Nibedan/',
  youtube: 'https://www.youtube.com/@techwithheisenberg',
  instagram: 'https://www.instagram.com/nibedan_3006',
  codolio: 'https://codolio.com/profile/Heisenberg300604',
} as const;

export const sameAs: string[] = Object.values(profiles);

/** Identity facts, confirmed by the site owner. Nothing here is inferred. */
export const identity = {
  name: 'Nibedan Pati',
  jobTitle: 'Software Engineer',
  email: 'nibedanpati@gmail.com',
  worksFor: 'Veersa Technologies',
  alumniOf: 'Bhagwan Parshuram Institute of Technology (BPIT), Delhi',
  image: '/assets/logo.png',
  knowsAbout: [
    'Full-Stack Web Development',
    'Mobile Application Development',
    'React',
    'Next.js',
    'React Native',
    'TypeScript',
    'Node.js',
    'Flutter',
    'PostgreSQL',
    'Software Engineering',
  ],
} as const;

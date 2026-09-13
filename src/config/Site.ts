/*
 * Single source of truth for the site's absolute URL and identity signals.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * DEPLOYMENT: set NEXT_PUBLIC_URL to the production origin, with no trailing
 * slash (e.g. "https://nibedanpati.com"). Canonical tags, the sitemap, OG
 * image URLs and all JSON-LD @id values are derived from it. Leaving it at
 * localhost tells search engines your canonical page is on a machine they
 * cannot reach, which prevents indexing.
 * ─────────────────────────────────────────────────────────────────────────
 */
const FALLBACK_URL = 'http://localhost:3000';

/**
 * Vercel exposes the stable production domain here. Used only as a safety net
 * so a deploy that forgets NEXT_PUBLIC_URL still emits reachable canonicals
 * instead of localhost. Read server-side only — every consumer of `siteUrl`
 * renders on the server, so this cannot cause a hydration mismatch.
 */
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const siteUrl = (
  process.env.NEXT_PUBLIC_URL ||
  vercelProductionUrl ||
  FALLBACK_URL
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

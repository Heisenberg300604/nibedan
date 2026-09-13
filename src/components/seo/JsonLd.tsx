import { about } from '@/config/About';
import { absoluteUrl, identity, sameAs, siteUrl } from '@/config/Site';

/**
 * Renders a JSON-LD block. Kept server-rendered so crawlers see the graph in
 * the initial HTML response rather than after hydration.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Content is built from local config, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Stable node id for the Person, so other nodes can reference one entity. */
export const personId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': personId,
    name: identity.name,
    url: siteUrl,
    image: absoluteUrl(identity.image),
    jobTitle: identity.jobTitle,
    description: about.description.trim(),
    email: `mailto:${identity.email}`,
    worksFor: {
      '@type': 'Organization',
      name: identity.worksFor,
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: identity.alumniOf,
    },
    knowsAbout: identity.knowsAbout,
    sameAs,
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: siteUrl,
    name: `${identity.name} — ${identity.jobTitle}`,
    description: about.description.trim(),
    inLanguage: 'en',
    publisher: { '@id': personId },
    copyrightHolder: { '@id': personId },
  };
}

/**
 * Homepage graph: the site IS the person's profile page. ProfilePage +
 * Person + WebSite in one @graph lets a crawler resolve them as one entity.
 */
export function HomeJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          personSchema(),
          websiteSchema(),
          {
            '@type': 'ProfilePage',
            '@id': `${siteUrl}/#profilepage`,
            url: siteUrl,
            name: `${identity.name} — ${identity.jobTitle}`,
            isPartOf: { '@id': websiteId },
            about: { '@id': personId },
            mainEntity: { '@id': personId },
          },
        ],
      }}
    />
  );
}

/** Ordinary content page: WebPage tied back to the Person, plus breadcrumbs. */
export function PageJsonLd({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id': `${absoluteUrl(path)}#webpage`,
            url: absoluteUrl(path),
            name,
            description,
            isPartOf: { '@id': websiteId },
            about: { '@id': personId },
            inLanguage: 'en',
          },
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name, path },
          ]),
        ],
      }}
    />
  );
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/**
 * A project case study: the page describes a SoftwareSourceCode work that the
 * Person authored. `codeRepository` is only emitted when a repo actually exists.
 */
export function ProjectJsonLd({
  slug,
  name,
  description,
  image,
  technologies,
  github,
  live,
  datePublished,
}: {
  slug: string;
  name: string;
  description: string;
  image?: string;
  technologies?: string[];
  github?: string;
  live?: string;
  datePublished?: string;
}) {
  const path = `/projects/${slug}`;

  const work: Record<string, unknown> = {
    '@type': 'SoftwareSourceCode',
    '@id': `${absoluteUrl(path)}#project`,
    name,
    description,
    url: absoluteUrl(path),
    author: { '@id': personId },
    creator: { '@id': personId },
  };

  if (image) work.image = absoluteUrl(image);
  if (technologies?.length) work.programmingLanguage = technologies;
  if (github) work.codeRepository = github;
  if (live) work.sameAs = live;
  if (datePublished) work.datePublished = datePublished;

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          work,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
            { name, path },
          ]),
        ],
      }}
    />
  );
}

import type { Metadata } from 'next';

import { about } from './About';
import { heroConfig } from './Hero';
import { absoluteUrl, identity, isProductionUrl, siteUrl } from './Site';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

// Base site configuration
export const siteConfig = {
  name: heroConfig.name,
  // og:site_name — must be the person's name, not the template's name, so
  // shares and search results attribute the site to Nibedan Pati.
  title: `${identity.name} — ${identity.jobTitle}`,
  description: about.description.trim(),
  url: siteUrl,
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: about.name,
    twitter: '@ItsHeisenberg04',
    github: 'Heisenberg300604',
    linkedin: 'nibedan-pati-2139b3277',
    email: 'nibedanpati@gmail.com',
  },
  keywords: [
    'portfolio',
    'developer',
    'full-stack',
    'react',
    'nextjs',
    'typescript',
    'web development',
    heroConfig.name.toLowerCase(),
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  // Home page
  '/': {
    title: `${identity.name} — ${identity.jobTitle} | Full-Stack & Mobile Developer`,
    description: `${about.description} Explore my projects, experience, and technical expertise.`,
    keywords: [
      'portfolio',
      'developer',
      'full-stack',
      'web development',
      'projects',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Contact page
  '/contact': {
    title: `Contact ${identity.name}`,
    description:
      "Get in touch with me for collaborations, projects, or opportunities. I'd love to hear from you!",
    keywords: ['contact', 'hire', 'collaboration', 'freelance', 'developer'],
    ogImage: '/assets/logo.png',
    twitterCard: 'summary',
  },

  // Work Experience page
  '/work-experience': {
    title: `Work Experience — ${identity.name}`,
    description:
      'Explore my professional work experience across different companies and roles in software development.',
    keywords: [
      'work experience',
      'career',
      'professional',
      'software developer',
      'employment history',
    ],
    ogImage: '/meta/work.png',
    twitterCard: 'summary_large_image',
  },

  // Projects page
  '/projects': {
    title: `Projects — ${identity.name}`,
    description:
      'Discover my projects and work across different technologies and domains. From web apps to mobile solutions.',
    keywords: [
      'projects',
      'portfolio',
      'web development',
      'applications',
      'software',
    ],
    ogImage: '/meta/projects.png',
    twitterCard: 'summary_large_image',
  },

  // Resume page
  '/resume': {
    title: `Resume — ${identity.name}`,
    description: `View and download ${heroConfig.name}'s professional resume and CV. Technical skills, experience, and qualifications.`,
    keywords: [
      'resume',
      'cv',
      'professional',
      'skills',
      'qualifications',
      'download',
    ],
    ogImage: '/meta/resume.png',
    twitterCard: 'summary',
  },

  // Gears page
  '/gears': {
    title: `Gear & Tools — ${identity.name}`,
    description:
      'Discover the tools, devices, and software I use to get my work done efficiently.',
    keywords: [
      'setup',
      'tools',
      'devices',
      'software',
      'productivity',
      'development environment',
    ],
    ogImage: '/meta/gears.png',
    twitterCard: 'summary_large_image',
  },

  // Setup page
  '/setup': {
    title: `VS Code Setup — ${identity.name}`,
    description:
      'Complete guide to setting up VS Code with my preferred configuration, extensions, and fonts for optimal development.',
    keywords: [
      'vscode',
      'setup',
      'configuration',
      'extensions',
      'development environment',
      'guide',
    ],
    ogImage: '/meta/setup.png',
    twitterCard: 'summary_large_image',
  },

  // Hackathons page
  '/hackathons': {
    title: `Hackathons — ${identity.name}`,
    description:
      '5x hackathon winner and Smart India Hackathon grand finalist. The competitions I have entered, what my team built under deadline, and what shipped afterwards.',
    keywords: ['hackathon', 'smart india hackathon', 'winner', 'finalist'],
    ogImage: '/meta/projects.png',
    twitterCard: 'summary_large_image',
  },

  // Certifications page
  '/certifications': {
    title: `Certifications — ${identity.name}`,
    description:
      'AWS Certified Cloud Practitioner and AWS Certified AI Practitioner, plus assessed skill certificates — every credential listed with its verification link.',
    keywords: [
      'certifications',
      'aws certified cloud practitioner',
      'aws certified ai practitioner',
      'hackerrank sql',
      'credentials',
    ],
    ogImage: '/meta/projects.png',
    twitterCard: 'summary_large_image',
  },

  // LeetCode page
  '/leetcode': {
    title: `LeetCode Progress — ${identity.name}`,
    description:
      'Live data structures and algorithms progress pulled from my LeetCode profile, broken down by difficulty.',
    keywords: ['leetcode', 'dsa', 'algorithms', 'problem solving'],
    ogImage: '/meta/projects.png',
    twitterCard: 'summary',
  },
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

// Helper function to generate complete metadata object for Next.js
export function generateMetadata(pathname: string): Metadata {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: absoluteUrl(pathname),
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      // Until NEXT_PUBLIC_URL points at the real origin, canonical URLs are
      // unreachable — better to withhold indexing than to index localhost.
      index: isProductionUrl,
      follow: isProductionUrl,
      googleBot: {
        index: isProductionUrl,
        follow: isProductionUrl,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: absoluteUrl(pathname),
    },
  };
}

import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Github from '@/components/technologies/Github';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MySQL from '@/components/technologies/MySQL';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import ReactNative from '@/components/technologies/ReactNative';
import Sass from '@/components/technologies/Sass';
import Supabase from '@/components/technologies/Supabase';
import TypeScript from '@/components/technologies/TypeScript';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website?: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'HiTouchCX',
    position: 'Full Stack Developer Intern',
    location: 'Gurugram Sector 55-56',
    image: '/company/hitouch.png',
    description: [
      'Led end-to-end development of Reeboo8, a gig-work platform mobile application (React Native, Expo SDK 55, TypeScript) connecting agents with work opportunities; architected Auth Stack, tabbed Dashboard, Opportunities browser, Notifications feed, and Profile management screens using React Navigation v7.',
      'Designed a scalable, maintainable project structure with per-screen StyleSheet files, a shared UI component library (AppHeader, SkeletonBox, StatusChip, EmptyState, SectionCard), and strict @/ path-alias conventions; also built and maintained full-stack web features for the company website.',
      'Successfully delivered AI integration features, enhancing the overall functionality and capabilities of the platform.',
    ],
    startDate: 'February 2026',
    endDate: 'March 2026',
    technologies: [
      { name: 'Supabase', href: 'https://supabase.com/', icon: <Supabase /> },
      {
        name: 'React Native',
        href: 'https://reactnative.dev/',
        icon: <ReactNative />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      { name: 'Prisma', href: 'https://prisma.io/', icon: <Prisma /> },
      {
        name: 'Express.js',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      {
        name: 'PostgreSQL',
        href: 'https://postgresql.org/',
        icon: <PostgreSQL />,
      },
    ],
  },
  {
    isCurrent: false,
    company: 'NoBrokerage.com',
    position: 'App Developer Intern',
    location: 'Remote',
    image: '/company/nobo.png',
    description: [
      'Engineered a production-grade cross-platform mobile application from scratch using React Native (Expo) and TypeScript; implemented scalable state management with Zustand, responsive UI with NativeWind, RESTful API integrations, secure authentication flows, and deep-link navigation with Expo Router.',
      'Delivered performance-optimized builds via EAS Build for both iOS and Android; additionally contributed to company web platform development using PHP, HTML, and CSS, collaborating across teams via Git and GitHub.',
    ],
    startDate: 'July 2025',
    endDate: 'February 2026',
    technologies: [
      {
        name: 'React Native',
        href: 'https://reactnative.dev/',
        icon: <ReactNative />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      { name: 'Figma', href: 'https://figma.com/', icon: <Figma /> },
      { name: 'GitHub', href: 'https://github.com/', icon: <Github /> },
      { name: 'MySQL', href: 'https://mysql.com/', icon: <MySQL /> },
      { name: 'HTML', href: 'https://html.com/', icon: <Html /> },
      { name: 'CSS', href: 'https://css.com/', icon: <CSS /> },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
    ],
    website: 'https://nobrokerage.com',
  },
  {
    isCurrent: false,
    company: 'Mappls MapMyIndia',
    position: 'SWE Intern',
    location: 'Remote Hybrid',
    image: '/company/mappls.png',
    description: [
      'Worked on the Sanskriti app, identifying and fixing critical bugs and crashes to improve app stability and user experience.',
      'Conducted comprehensive API testing to ensure app performance across different Android versions and device configurations.',
      'Collaborated with the development team to debug and resolve issues in the existing codebase, enhancing overall app reliability.',
    ],
    startDate: 'June 2025',
    endDate: 'September 2025',
    technologies: [
      {
        name: 'React Native',
        href: 'https://reactnative.dev/',
        icon: <ReactNative />,
      },
      { name: 'GitHub', href: 'https://github.com/', icon: <Github /> },
      { name: 'Figma', href: 'https://figma.com/', icon: <Figma /> },
    ],
    website: 'https://mappls.com',
  },
  {
    isCurrent: false,
    company: 'Eterna Infotech Pvt Ltd',
    position: 'Web Developer Intern',
    location: 'Remote',
    image: '/company/eterna-info.png',
    description: [
      'Enhanced MTS LMS website by improving both frontend and backend functionality using React, Sass, MUI, and MySQL.',
      'Actively collaborated with cross-functional teams, resolving bugs, implementing new features, and conducting code reviews via Jira and GitHub.',
      'Optimized APIs with Postman and MySQL Workbench, ensuring smooth data flow and improved system performance.',
    ],
    startDate: 'November 2024',
    endDate: 'March 2025',
    technologies: [
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'Sass', href: 'https://sass-lang.com/', icon: <Sass /> },
      { name: 'MySQL', href: 'https://mysql.com/', icon: <MySQL /> },
      { name: 'GitHub', href: 'https://github.com/', icon: <Github /> },
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
    ],
    website: 'https://eternainfotech.com',
  },
  {
    isCurrent: true,
    company: 'Geek Room & Namespace BPIT',
    position: 'Open Source Contributor',
    location: 'Remote',
    image: '/company/geekroom.png',
    description: [
      'Developed responsive React pages for both mobile and desktop views, collaborating with Figma for UI design.',
      'Contributed to the Geek Room community Pears hackathon website by enhancing functionality.',
      'Identified, troubleshot, and fixed open issues on the Namespace GitHub repository, improving overall platform performance and user engagement.',
    ],
    startDate: 'November 2024',
    endDate: 'Present',
    technologies: [
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'GitHub', href: 'https://github.com/', icon: <Github /> },
      { name: 'Figma', href: 'https://figma.com/', icon: <Figma /> },
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
    ],
    website: 'https://geekroom.in',
    github: 'https://github.com/Heisenberg300604',
  },
];

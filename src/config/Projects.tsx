import ExpressJs from '@/components/technologies/ExpressJs';
import Firebase from '@/components/technologies/Firebase';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import ReactNative from '@/components/technologies/ReactNative';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'PustakHub',
    description:
      '500+ downloads. Cross-platform book marketplace for competitive exam prep — Supabase backend with RLS, geolocation-based search, and EAS production builds.',
    image: '/project/pustakhub.png',
    link: '#',
    technologies: [
      { name: 'React Native', icon: <ReactNative key="rn" /> },
      { name: 'TypeScript', icon: <TypeScript key="ts" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="pg" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/Heisenberg300604/PustakHub',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/pustakhub',
    isWorking: true,
  },
  {
    title: 'Taply',
    description:
      'Digital business card platform — QR codes auto-sync in real time when your profile changes. Built with Supabase Realtime, Expo Router, and native share sheets.',
    image: '/project/taply.png',
    link: '#',
    technologies: [
      { name: 'React Native', icon: <ReactNative key="rn" /> },
      { name: 'TypeScript', icon: <TypeScript key="ts" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="pg" /> },
      { name: 'Node.js', icon: <NodeJs key="node" /> },
    ],
    github: 'https://github.com/Heisenberg300604/Taply',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/taply',
    isWorking: true,
  },
  {
    title: 'Recap — AI Study Companion',
    description:
      '🥇 NS Hacks Winner. AI note-taking platform with OCR, audio transcription, flashcard generation, and gamified learning. Built in 48 hours.',
    image: '/project/recap.png',
    link: 'https://recap-5ajg.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
    ],
    github: 'https://github.com/Heisenberg300604/Recap',
    live: 'https://recap-5ajg.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/recap',
    isWorking: true,
  },
  {
    title: 'BudgetMap — Expense Tracker',
    description:
      'Full-stack expense tracker with dynamic dashboard, JWT auth, multi-currency live rates, and CSV/PDF data export.',
    image: '/project/BudgetMap.png',
    link: 'https://budget-map-new.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
    ],
    github: 'https://github.com/Heisenberg300604/BudgetMap',
    live: 'https://budget-map-new.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/budgetmap',
    isWorking: true,
  },
  {
    title: 'Signal-X — AI Traffic Management',
    description:
      'YOLOv8-powered traffic system with IoT integration, MapMyIndia API, adaptive signal control, and emergency vehicle prioritization.',
    image: '/project/SignalX.png',
    link: 'https://signal-x-zkh5.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
    ],
    github: 'https://github.com/Heisenberg300604/Signal-X/tree/main',
    live: 'https://signal-x-zkh5.vercel.app/',
    details: false,
    projectDetailsPageSlug: '/projects/signal-x',
    isWorking: true,
  },
  {
    title: 'Flox — Social Media Platform',
    description:
      'Modern social media platform with Google OAuth via Clerk, post creation, follow system, real-time notifications, and Prisma/PostgreSQL backend.',
    image: '/project/Flox.png',
    link: 'https://flox-social-media.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
    ],
    github: 'https://github.com/Heisenberg300604/Flox',
    live: 'https://flox-social-media.vercel.app/',
    details: false,
    projectDetailsPageSlug: '/projects/flox',
    isWorking: true,
  },
  {
    title: 'Zap-URL — URL Shortening Service',
    description:
      'Production-ready URL shortener applying system design principles — Redis caching, DynamoDB, AWS EC2 + Nginx, Docker, and click analytics.',
    image: '/project/zapurl.png',
    link: 'https://zap-url-five.vercel.app',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
    ],
    github: 'https://github.com/Heisenberg300604/Zap-Url',
    live: 'https://zap-url-five.vercel.app',
    details: false,
    projectDetailsPageSlug: '/projects/zapurl',
    isWorking: true,
  },
  {
    title: 'create-expo-starter — NPM Package',
    description:
      'Published CLI tool that scaffolds production-ready Expo React Native apps in seconds. Pre-configures TypeScript, Expo Router, NativeWind, Zustand, and Axios.',
    image: '/project/initexpo.png',
    link: 'https://www.npmjs.com/package/create-expo-starter',
    technologies: [
      { name: 'React Native', icon: <ReactNative key="react-native" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
    ],
    github: 'https://github.com/Heisenberg300604/create-expo-starter',
    live: 'https://www.npmjs.com/package/create-expo-starter',
    details: false,
    projectDetailsPageSlug: '/projects/create-expo-starter',
    isWorking: true,
  },
  {
    title: 'EchoChat — Real-time Communication',
    description:
      'Real-time 1-to-1 video calling and chat built with WebRTC, Socket.io, JWT auth, and Prisma/PostgreSQL.',
    image: '/project/echochat.png',
    link: 'https://echo-chat-iota.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
    ],
    github: 'https://github.com/Heisenberg300604/EchoChat',
    live: 'https://echo-chat-iota.vercel.app',
    details: false,
    projectDetailsPageSlug: '/projects/echochat',
    isWorking: true,
  },
  {
    title: 'Athleto — Empowering Athletes',
    description:
      'Platform supporting underprivileged Indian athletes with AI talent scouting, gamified crowdfunding, and sponsorship matching.',
    image: '/project/athleto.png',
    link: 'https://athleto-project.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/Heisenberg300604/Athleto',
    live: 'https://athleto-project.vercel.app/',
    details: false,
    projectDetailsPageSlug: '/projects/athleto',
    isWorking: true,
  },
  {
    title: 'Travello — Gamified Tourism',
    description:
      'AI-personalized, gamified tourism platform with eco-travel rewards, dynamic itinerary generation, interactive quests, and Mapbox integration.',
    image: '/project/travello.png',
    link: 'https://travello-project.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
    ],
    github: 'https://github.com/Heisenberg300604/Travello-Final',
    live: 'https://travello-project.vercel.app/',
    details: false,
    projectDetailsPageSlug: '/projects/travello',
    isWorking: true,
  },
];

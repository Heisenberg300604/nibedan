export interface HackathonProject {
  name: string;
  description: string;
  techStack: string[];
  github?: string;
  live?: string;
  impact?: string;
}

export interface Hackathon {
  id: string;
  eventName: string;
  date: string;
  achievement: string;
  rank?: string; // e.g. "1st", "2nd", "3rd", "Grand Finalist"
  project: HackathonProject;
  team?: string;
  venue?: string;
  isWinner: boolean;
  isFinalist?: boolean;
  description: string;
}

export const hackathons: Hackathon[] = [
  {
    id: 'sih-2024',
    eventName: 'Smart India Hackathon (SIH)',
    date: 'December 8-9, 2025',
    achievement: 'Grand Finalist',
    rank: 'Grand Finalist',
    isWinner: false,
    isFinalist: true,
    venue: 'Pondicherry',
    description:
      "Selected as Grand Finalist for Smart India Hackathon, India's largest and most prestigious hackathon. Traveled to Pondicherry for the grand finals. Developed ComminuSense — an AI-driven energy-optimization and predictive-maintenance platform for NMDC (India's Largest Iron Ore Producer).",
    team: 'Team Synapse',
    project: {
      name: 'ComminuSense: Smart Comminution for NMDC',
      description:
        'An AI-driven energy-optimization and predictive-maintenance platform for NMDC iron-ore comminution circuits. Integrates IoT telemetry, ML models for energy optimization, predictive maintenance with RUL estimates, and a digital twin simulator. Features role-based dashboards for Operators, Engineers, Maintenance, and Management with real-time kWh/ton insights.',
      techStack: [
        'React',
        'Node.js',
        'MongoDB',
        'TailwindCSS',
        'Express',
        'Machine Learning',
        'IoT',
        'Digital Twin',
        'Time-Series DB',
      ],
      impact:
        "Built for NMDC — India's largest iron ore producer. The platform targets significant energy cost reduction in comminution circuits which account for the highest energy usage in mining.",
    },
  },
  {
    id: 'tryst-2025',
    eventName: 'Tryst 2025 (IIT Delhi)',
    date: 'March 2025',
    achievement: '1st Place',
    rank: '1st',
    isWinner: true,
    description:
      'Won first place at Tryst 2025, the annual techno-cultural fest of IIT Delhi. Built Waygen — an AI-driven Smart Traffic Management System.',
    team: 'Synapse',
    project: {
      name: 'Waygen',
      description:
        'An AI-driven Smart Traffic Management System designed to revolutionize urban mobility by integrating computer vision, IoT, and geospatial intelligence. Addresses critical challenges of urban traffic congestion through real-time monitoring, analysis, and optimization.',
      techStack: [
        'React',
        'Node.js',
        'Flask',
        'Raspberry Pi',
        'TailwindCSS',
        'Framer Motion',
        'Vercel',
        'YOLOv8',
        'Streamlit',
      ],
      impact:
        'AI-powered traffic management using YOLOv8 for real-time vehicle detection and adaptive signal control to reduce urban congestion.',
    },
  },
  {
    id: 'ns-hacks-2025',
    eventName: 'NS Hacks',
    date: 'January 2025',
    achievement: '1st Place',
    rank: '1st',
    isWinner: true,
    description:
      'Won first place at NS Hacks. Built Recap — an innovative study companion that revolutionizes how students organize and interact with study materials using AI.',
    team: 'Synapse',
    project: {
      name: 'Recap',
      description:
        'An innovative study companion designed to revolutionize how students organize and interact with their study materials. Leverages AI to create an intelligent note-taking ecosystem that grows with your learning journey. Features smart note organization, flashcard generation, OCR for handwritten notes, and audio transcription.',
      techStack: [
        'React',
        'Node.js',
        'Firebase',
        'Tesseract.js',
        'Assembly AI',
        'Recharts',
        'Vercel',
      ],
      impact:
        'AI-powered study tool enabling students to convert any learning material (text, handwritten, audio) into organized, searchable digital notes.',
      live: 'https://recapapp.vercel.app',
    },
  },
  {
    id: 'invictus-dtu-2025',
    eventName: 'Invictus DTU',
    date: 'February 2025',
    achievement: '2nd Place',
    rank: '2nd',
    isWinner: true,
    description:
      'Secured second place at Invictus DTU — a Bugathon challenge where participants had to identify vulnerabilities in website code.',
    team: 'Synapse',
    project: {
      name: 'Bugathon',
      description:
        'A security challenge requiring identification of vulnerabilities in website code. Successfully found and documented critical security flaws in web applications.',
      techStack: ['Drupal', 'PHP', 'AJAX', 'DevTools', 'Web Security'],
      impact:
        'Identified multiple critical security vulnerabilities, demonstrating strong web security analysis skills.',
    },
  },
  {
    id: 'm-hash-2024',
    eventName: 'M# Hackathon',
    date: 'September 2024',
    achievement: '3rd Place',
    rank: '3rd',
    isWinner: true,
    description:
      'Won third place at M# Hackathon. Built Travello — an interactive gamified tourism platform to revolutionize how travelers explore their destinations.',
    team: 'Team Synapse',
    project: {
      name: 'Travello: Interactive Tourism Platform',
      description:
        'A gamified tourism platform designed to revolutionize how travelers explore their destinations. Guides users to hidden attractions and cultural experiences through interactive challenges and quests. Leverages AI-driven personalization for customized itineraries adapting to user preferences and real-time conditions.',
      techStack: [
        'React',
        'MongoDB',
        'ExpressJS',
        'Tailwind CSS',
        'Node.js',
        'Vercel',
        'Mapbox API',
        'Cloudinary',
      ],
      impact:
        'Transforming Indian tourism through gamification and AI — connecting travelers to authentic local experiences while supporting local communities.',
    },
  },
];

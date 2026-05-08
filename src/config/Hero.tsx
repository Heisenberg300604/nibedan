/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Codolio from '@/components/svgs/Codolio';
import Github from '@/components/svgs/Github';
import Instagram from '@/components/svgs/Instagram';
import LeetCodeIcon from '@/components/svgs/LeetCode';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import YouTube from '@/components/svgs/YouTube';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import ReactNative from '@/components/technologies/ReactNative';
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  ReactNative: ReactNative,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
};

export const heroConfig = {
  // Personal Information
  name: 'Nibedan Pati',
  title: 'Full Stack & Mobile Developer.',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'React Native',
      href: 'https://reactnative.dev/',
      component: 'ReactNative',
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build full-stack web and mobile apps using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. <b>5x Hackathon Winner</b> · <b>SIH Grand Finalist</b> · Open Source Contributor.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Buy me a Coffee',
      href: 'https://buymeacoffee.com/nibedanpati',
      icon: 'Coffee',
    },
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: 'https://drive.google.com/file/d/1ormIiMVpWGAMOZ3FZVj_XrKPkEmPlPQj/preview',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Heisenberg300604',
    icon: <Github />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nibedan-pati-2139b3277/',
    icon: <LinkedIn />,
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/ItsHeisenberg04',
    icon: <X />,
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/Nibedan/',
    icon: <LeetCodeIcon />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@Heisenberg3006-y0',
    icon: <YouTube />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: <Instagram />,
  },
  {
    name: 'Codolio',
    href: 'https://codolio.com/profile/Heisenberg300604',
    icon: <Codolio />,
  },
  {
    name: 'Email',
    href: 'mailto:nibedanpati@gmail.com',
    icon: <Mail />,
  },
];

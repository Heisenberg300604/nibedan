import Codolio from '@/components/svgs/Codolio';
import Github from '@/components/svgs/Github';
import Instagram from '@/components/svgs/Instagram';
import LeetCodeIcon from '@/components/svgs/LeetCode';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import YouTube from '@/components/svgs/YouTube';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from './Container';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/work-experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Hackathons', href: '/hackathons' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Nibedan/' },
  { label: 'Resume', href: 'https://resumenibedanpati.tiiny.site' },
];

const socialLinks = [
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
    href: 'https://www.instagram.com/nibedan_3006',
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

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border/50">
      <Container className="py-12">
        {/* Top section */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Left — Nav Links */}
          <div className="flex flex-col gap-3">
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest">
              NAVIGATE
            </p>
            <nav className="grid grid-cols-3 gap-y-3 gap-x-6 sm:grid-cols-4 md:grid-cols-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="text-secondary w-fit text-sm transition-all duration-200 hover:text-foreground hover:underline hover:decoration-2 hover:underline-offset-4"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right — Social Icons */}
          <div className="flex flex-col gap-3">
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest">
              CONNECT
            </p>
            <div className="grid grid-cols-4 gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  aria-label={link.name}
                  className="text-secondary flex size-9 items-center justify-center rounded-md border border-border transition-all duration-200 hover:border-border/80 hover:bg-secondary/20 hover:text-foreground"
                >
                  <span className="size-4">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-border/40" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:text-left">
          <p className="text-secondary text-xs">
            Developed by <b className="text-foreground">Nibedan Pati</b> &copy;{' '}
            {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

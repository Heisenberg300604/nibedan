import { Button } from '@/components/ui/button';
import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from './Container';
import MobileNav from './MobileNav';
import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3 px-2 sm:px-6">
        {/* Phones: links live in a menu. md and up: shown inline. */}
        <MobileNav
          label={navbarConfig.menuLabel}
          items={[navbarConfig.homeItem, ...navbarConfig.navItems]}
        />
        <div className="hidden items-center gap-x-4 text-base md:flex">
          {navbarConfig.navItems.map((item) => (
            <Link
              className="transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
              key={item.label}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href={navbarConfig.cta.href}>{navbarConfig.cta.label}</Link>
          </Button>
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </div>
    </Container>
  );
}

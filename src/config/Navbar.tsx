export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/assets/logo.png',
    alt: 'logo',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Experience',
      href: '/work-experience',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Hackathons',
      href: '/hackathons',
    },
    {
      label: 'Certifications',
      href: '/certifications',
    },
  ] as NavItem[],
  // Always visible (also on phones), so it is not part of the link list.
  cta: {
    label: 'Book a call',
    href: '/book',
  } as NavItem,
  // Phones collapse the links into a menu, which also gets a way back home.
  menuLabel: 'Menu',
  homeItem: { label: 'Home', href: '/' } as NavItem,
};

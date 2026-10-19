'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import type { NavItem } from '@/config/Navbar';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

export default function MobileNav({
  items,
  label,
}: {
  items: NavItem[];
  label: string;
}) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="size-10 cursor-pointer md:hidden"
          aria-label={`Open ${label.toLowerCase()}`}
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <SheetHeader>
          <SheetTitle>{label}</SheetTitle>
          <SheetDescription className="sr-only">
            Navigate to a page on this site.
          </SheetDescription>
        </SheetHeader>
        <nav aria-label={label} className="flex flex-col gap-1 px-4">
          {items.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'rounded-md px-3 py-3 text-base transition-colors',
                    active
                      ? 'bg-black/5 font-semibold dark:bg-white/10'
                      : 'hover:bg-black/5 dark:hover:bg-white/5',
                  )}
                >
                  {item.label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

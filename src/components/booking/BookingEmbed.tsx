'use client';

import { Skeleton } from '@/components/ui/skeleton';
import {
  type BookingEvent,
  bookingEvents,
  calUsername,
} from '@/config/Booking';
import { useUmami } from '@/hooks/use-umami';
import { cn } from '@/lib/utils';
import Cal, { getCalApi } from '@calcom/embed-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// Brand color per site theme, so Cal's primary buttons stay readable.
const brandColor = { light: '#171717', dark: '#e5e5e5' } as const;

function EventPicker({
  active,
  onSelect,
}: {
  active: BookingEvent;
  onSelect: (event: BookingEvent) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Call length"
      className="grid gap-3 sm:grid-cols-2"
    >
      {bookingEvents.map((event) => {
        const selected = event.id === active.id;
        return (
          <button
            key={event.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onSelect(event)}
            className={cn(
              'focus-visible:ring-ring/50 rounded-md border border-dashed p-4 text-left transition-all outline-none focus-visible:ring-[3px]',
              selected
                ? 'border-black/40 bg-black/5 dark:border-white/50 dark:bg-white/10'
                : 'border-black/20 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5',
            )}
          >
            <span className="flex items-baseline justify-between gap-2">
              <span className="font-semibold">{event.label}</span>
              <span className="text-muted-foreground text-sm">
                {event.duration}
              </span>
            </span>
            <span className="text-muted-foreground mt-1 block text-sm">
              {event.description}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function BookingEmbed() {
  const [active, setActive] = useState<BookingEvent>(bookingEvents[0]);
  const [loaded, setLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { trackEvent } = useUmami();

  const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

  // The theme is unknown until mount; waiting avoids a wrong-theme flash.
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    let cancelled = false;

    (async () => {
      const cal = await getCalApi({ namespace: active.id });
      if (cancelled) return;

      cal('ui', {
        theme,
        hideEventTypeDetails: false,
        styles: { branding: { brandColor: brandColor[theme] } },
      });
      cal('on', { action: 'linkReady', callback: () => setLoaded(true) });
      cal('on', {
        action: 'bookingSuccessful',
        callback: () =>
          trackEvent({
            name: 'form_submit',
            data: { formId: `booking_${active.id}`, success: true },
          }),
      });
    })();

    return () => {
      cancelled = true;
    };
  }, [mounted, active.id, theme, trackEvent]);

  const handleSelect = (event: BookingEvent) => {
    if (event.id === active.id) return;
    setLoaded(false);
    setActive(event);
    trackEvent({
      name: 'button_click',
      data: {
        buttonId: `booking_select_${event.id}`,
        section: 'booking',
      },
    });
  };

  return (
    <div className="space-y-6">
      <EventPicker active={active} onSelect={handleSelect} />

      <div
        className="relative min-h-[500px]"
        aria-busy={!loaded}
        aria-label={`${active.label}, ${active.duration}: choose a time`}
      >
        {!loaded && (
          <div className="absolute inset-0 space-y-3">
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-[440px] w-full" />
          </div>
        )}
        {mounted && (
          <Cal
            key={active.id}
            namespace={active.id}
            calLink={`${calUsername}/${active.slug}`}
            config={{
              layout: 'month_view',
              theme,
              'ui.autoscroll': 'false',
            }}
            style={{ width: '100%' }}
            className={cn(
              'transition-opacity duration-300',
              loaded ? 'opacity-100' : 'opacity-0',
            )}
          />
        )}
      </div>
    </div>
  );
}

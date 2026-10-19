/*
 * Booking Configuration (Cal.com)
 *
 * The /book page embeds Cal.com's scheduler. Visitors pick a call length,
 * then a time. Change `username` here if the Cal.com username ever changes.
 */

/** Cal.com username, i.e. the path in https://cal.com/<username>. */
export const calUsername = 'nibedan-pati-7rongi';

export interface BookingEvent {
  /** Stable id, also used as the Cal embed namespace. */
  id: string;
  /** Event type slug in Cal.com: https://cal.com/<username>/<slug>. */
  slug: string;
  label: string;
  duration: string;
  description: string;
}

export const bookingEvents: BookingEvent[] = [
  {
    id: 'quick-chat',
    slug: '15min',
    label: 'Quick chat',
    duration: '15 min',
    description:
      'A short intro call. Good for a quick question, feedback, or saying hi.',
  },
  {
    id: 'deep-dive',
    slug: '30min',
    label: 'Deeper conversation',
    duration: '30 min',
    description:
      'More time to talk through a project, a role, or a collaboration.',
  },
];

export const bookingConfig = {
  title: 'Book a call',
  description:
    'Pick a length, then pick a time that works for you. Times are shown in your own timezone, and you will get a calendar invite by email.',
  profileUrl: `https://cal.com/${calUsername}`,
  fallbackText: 'Trouble with the calendar?',
  fallbackLinkText: 'Open it on Cal.com',
  emailText: 'or email me at',
  linkText: 'Book a call',
  href: '/book',
};

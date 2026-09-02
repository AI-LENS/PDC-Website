/**
 * Single source of truth for PDC sessions.
 *
 * The same session shows up on the home page (timeline + gallery strip), the
 * events list, the past-events archive, the gallery and its own detail page.
 * Keeping one record per event stops those five views from drifting apart.
 *
 * When adding an event, also add its id to EVENT_IDS in app.routes.server.ts
 * so the detail page gets prerendered.
 */

export interface EventPhoto {
  /** Path under public/, served from the site root. */
  src: string;
  /** Shown under the image in the gallery. */
  caption: string;
  /** Describes the image for screen readers and when it fails to load. */
  alt: string;
  width: number;
  height: number;
}

export interface EventSpeaker {
  name: string;
  role: string;
}

export interface PdcEvent {
  id: string;
  /** ISO date, used for sorting and for the <time> element. */
  date: string;
  /**
   * Written out for display. Held literally rather than formatted from `date`
   * because an ISO date parses as UTC midnight, which renders as the previous
   * day in any negative-offset timezone.
   */
  dateLabel: string;
  day: string;
  month: string;
  year: number;
  title: string;
  /** One line, for list rows and cards. */
  summary: string;
  /** Full paragraph, for the detail page. */
  description: string;
  venue: string;
  founders: EventSpeaker[];
  speakers: EventSpeaker[];
  photos: EventPhoto[];
}

const SESSION_1_PHOTOS: EventPhoto[] = [
  {
    src: '/img/events/session-1/group-photo.jpg',
    caption: 'Attendees at the inaugural session',
    alt: 'Wide group photograph of everyone who attended the inaugural PharmaDS Collective session, standing in front of the event screen.',
    width: 1280,
    height: 337,
  },
  {
    src: '/img/events/session-1/title-slide.jpg',
    caption: 'Inaugural session opening slide',
    alt: 'Presentation screen reading "Inaugural Session, PharmaDS Collective, 25 July 2026" above icons for Pharma, Technology, Academia and Healthcare.',
    width: 1057,
    height: 667,
  },
  {
    src: '/img/events/session-1/founding-members.jpg',
    caption: 'Founding members',
    alt: 'Four founding members of the PharmaDS Collective in branded polo shirts, standing in front of the inaugural session screen.',
    width: 1280,
    height: 960,
  },
  {
    src: '/img/events/session-1/speakers-and-founders.jpg',
    caption: 'Founding members with speakers and panellists',
    alt: 'Founding members together with the session speakers and panellists, lined up on stage in front of the event screen.',
    width: 1280,
    height: 960,
  },
  {
    src: '/img/events/session-1/felicitation-1.jpg',
    caption: 'Speaker felicitation',
    alt: 'A speaker being felicitated on stage by a member of the PharmaDS Collective.',
    width: 1280,
    height: 854,
  },
  {
    src: '/img/events/session-1/felicitation-2.jpg',
    caption: 'Speaker felicitation',
    alt: 'A speaker receiving a token of appreciation on stage at the inaugural session.',
    width: 1280,
    height: 854,
  },
  {
    src: '/img/events/session-1/felicitation-3.jpg',
    caption: 'Speaker felicitation',
    alt: 'A panellist being thanked on stage after the discussion.',
    width: 1280,
    height: 854,
  },
  {
    src: '/img/events/session-1/felicitation-4.jpg',
    caption: 'Speaker felicitation',
    alt: 'A panellist receiving a token of appreciation at the close of the session.',
    width: 1280,
    height: 854,
  },
];

const SESSION_1: PdcEvent = {
  id: '1',
  date: '2026-07-25',
  dateLabel: '25 July 2026',
  day: '25',
  month: 'Jul',
  year: 2026,
  title: 'Inaugural Session',
  summary:
    'The launch of the PharmaDS Collective, bringing together professionals from pharma, technology, academia and healthcare.',
  description:
    'The first PharmaDS Collective session marked the launch of the community in Bangalore. Built around the theme ' +
    '"Building a Collaborative Community for Pharmaceutical Data Science & Innovation", the day brought together ' +
    'professionals from pharma, technology, academia and healthcare for a series of talks and a panel discussion. ' +
    'The session drew an overwhelming response and set the tone for the meetups to come.',
  venue: 'Bangalore, India',
  founders: [
    { name: 'Ajay Daparthi', role: 'Founding member' },
    { name: 'Ashwini Mathur', role: 'Founding member' },
    { name: 'Abhijit Roy', role: 'Founding member' },
    { name: 'Suhas Kirani Ravindra', role: 'Founding member' },
  ],
  speakers: [
    { name: 'Ramasuri Narayanam', role: 'Speaker' },
    { name: 'Avinash Bandi', role: 'Speaker' },
    { name: 'Shivakumar Krishnamurthy', role: 'Panellist' },
    { name: 'Rajesh Anantharaman', role: 'Panellist' },
  ],
  photos: SESSION_1_PHOTOS,
};

/** Newest first. */
export const EVENTS: PdcEvent[] = [SESSION_1];

export function findEvent(id: string | null): PdcEvent | undefined {
  return EVENTS.find((event) => event.id === id);
}

/** True once the event date has passed, so past events can drop registration. */
export function hasHappened(event: PdcEvent, now: Date = new Date()): boolean {
  return new Date(event.date) < now;
}

export function pastEvents(now: Date = new Date()): PdcEvent[] {
  return EVENTS.filter((event) => hasHappened(event, now));
}

/** Groups past events by year, newest year first, for the archive page. */
export function pastEventsByYear(now: Date = new Date()): { year: number; events: PdcEvent[] }[] {
  const years = [...new Set(pastEvents(now).map((event) => event.year))].sort((a, b) => b - a);
  return years.map((year) => ({
    year,
    events: pastEvents(now).filter((event) => event.year === year),
  }));
}

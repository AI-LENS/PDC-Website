import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface EventCard {
  name: string;
  date: string;
  venue: string;
  topic: string;
}

interface TimelineEntry {
  month: string;
  day: string;
  title: string;
  description: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  /* ---- PLACEHOLDER DATA -------------------------------------------------
     Layout scaffolding only. Swap these arrays for real content; the
     templates read from them, so nothing in the markup needs to change. */

  protected readonly upcomingEvents: EventCard[] = [
    {
      name: 'Inaugural Session',
      date: '25 July 2026',
      venue: 'Venue to be announced',
      topic: 'Launch of the PharmaDS Collective and introduction of the founding members.',
    },
    {
      name: 'Event title placeholder',
      date: 'Date placeholder',
      venue: 'Venue placeholder',
      topic: 'Short description of the session topic goes here.',
    },
    {
      name: 'Event title placeholder',
      date: 'Date placeholder',
      venue: 'Venue placeholder',
      topic: 'Short description of the session topic goes here.',
    },
    {
      name: 'Event title placeholder',
      date: 'Date placeholder',
      venue: 'Venue placeholder',
      topic: 'Short description of the session topic goes here.',
    },
  ];

  protected readonly timeline: TimelineEntry[] = [
    {
      month: 'Jul',
      day: '25',
      title: 'Inaugural Session',
      description: 'Venue and agenda details coming soon.',
    },
    {
      month: 'Mon',
      day: '00',
      title: 'Event title placeholder',
      description: 'One or two lines describing what happened at this session.',
    },
    {
      month: 'Mon',
      day: '00',
      title: 'Event title placeholder',
      description: 'One or two lines describing what happened at this session.',
    },
    {
      month: 'Mon',
      day: '00',
      title: 'Event title placeholder',
      description: 'One or two lines describing what happened at this session.',
    },
  ];

  /** Placeholder tiles until real gallery images are added. */
  protected readonly galleryTiles = Array.from({ length: 8 }, (_, i) => i);

  /** Placeholder sponsor slots. */
  protected readonly sponsors = Array.from({ length: 4 }, (_, i) => i);

  /* ---- Upcoming-events carousel ---------------------------------------- */

  private readonly perView = 3;
  protected readonly slide = signal(0);

  protected readonly maxSlide = computed(() =>
    Math.max(0, this.upcomingEvents.length - this.perView),
  );

  protected readonly offset = computed(() => `-${this.slide() * (100 / this.perView)}%`);

  protected prev(): void {
    this.slide.update((i) => (i <= 0 ? this.maxSlide() : i - 1));
  }

  protected next(): void {
    this.slide.update((i) => (i >= this.maxSlide() ? 0 : i + 1));
  }
}

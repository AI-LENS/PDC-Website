import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EVENTS, pastEvents } from '../../data/events';

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
  /** Set for real events; placeholders have no detail page to link to. */
  id?: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  /* PLACEHOLDER DATA - no upcoming session is scheduled yet. Replace with
     real cards when the next session is announced. */
  protected readonly upcomingEvents: EventCard[] = Array.from({ length: 3 }, () => ({
    name: 'Event title placeholder',
    date: 'Date placeholder',
    venue: 'Venue placeholder',
    topic: 'Short description of the session topic goes here.',
  }));

  /** Sessions that have run, followed by placeholders for the ones to come. */
  protected readonly timeline: TimelineEntry[] = [
    ...pastEvents().map((event) => ({
      month: event.month,
      day: event.day,
      title: event.title,
      description: event.summary,
      id: event.id,
    })),
    ...Array.from({ length: 3 }, () => ({
      month: 'Mon',
      day: '00',
      title: 'Event title placeholder',
      description: 'One or two lines describing what happened at this session.',
    })),
  ];

  /** Newest photos across all events, for the gallery strip. */
  protected readonly galleryTiles = EVENTS.flatMap((event) => event.photos).slice(0, 8);

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

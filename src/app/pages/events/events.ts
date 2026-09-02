import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  imports: [RouterLink, PageHero],
  selector: 'app-events',
  templateUrl: './events.html',
})
export class Events {
  protected readonly year = new Date().getFullYear();

  /* PLACEHOLDER DATA - no upcoming session is scheduled yet. Replace these
     rows with real entries when the next session is announced; past sessions
     live in src/app/data/events.ts and surface on the past-events page. */
  protected readonly events = Array.from({ length: 3 }, () => ({
    day: '00',
    month: 'Mon',
    title: 'Event title placeholder',
    description: 'Short description of the session topic goes here.',
    venue: 'Venue placeholder',
  }));
}

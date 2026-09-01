import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  imports: [RouterLink, PageHero],
  selector: 'app-past-events',
  templateUrl: './past-events.html',
})
export class PastEvents {
  /* Placeholder archive - replace with real past events. */
  protected readonly archive = [2026, 2025].map((year) => ({
    year,
    events: Array.from({ length: 3 }, () => ({
      day: '00',
      month: 'Mon',
      title: 'Event title placeholder',
      description: 'One or two lines summarising what this session covered.',
    })),
  }));
}

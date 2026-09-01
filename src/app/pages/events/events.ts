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

  protected readonly events = [
    {
      day: '25',
      month: 'Jul',
      title: 'Inaugural Session',
      description: 'Launch of the PharmaDS Collective and introduction of the founding members.',
      venue: 'Venue and agenda details coming soon',
    },
    ...Array.from({ length: 3 }, () => ({
      day: '00',
      month: 'Mon',
      title: 'Event title placeholder',
      description: 'Short description of the session topic goes here.',
      venue: 'Venue placeholder',
    })),
  ];
}

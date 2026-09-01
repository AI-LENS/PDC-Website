import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  imports: [PageHero],
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.html',
})
export class EventCalendar {
  protected readonly columns = ['Month', 'Event', 'Type', 'Venue', 'Status'];

  protected readonly rows = [
    { month: 'July', title: 'Inaugural Session', type: 'Launch', venue: 'To be announced', status: 'Confirmed' },
    ...Array.from({ length: 5 }, () => ({
      month: 'Month',
      title: 'Event title placeholder',
      type: 'Knowledge sharing',
      venue: 'Venue placeholder',
      status: 'Planned',
    })),
  ];
}

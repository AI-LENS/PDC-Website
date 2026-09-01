import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  imports: [PageHero],
  selector: 'app-event-detail',
  templateUrl: './event-detail.html',
})
export class EventDetail {
  protected readonly facilitators = Array.from({ length: 3 }, () => ({
    name: 'Name placeholder',
    role: 'Role placeholder',
  }));

  protected readonly agenda = Array.from({ length: 5 }, () => ({
    time: '00:00 - 00:00',
    title: 'Session title placeholder',
    speaker: 'Speaker name placeholder',
  }));

  protected readonly sponsors = Array.from({ length: 4 }, (_, i) => i);

  protected readonly registrationFields = [
    { name: 'name', label: 'Full name', type: 'text' },
    { name: 'org', label: 'Organisation', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'contact', label: 'Contact number', type: 'tel' },
    { name: 'attending', label: 'Attending as', type: 'select' },
  ];
}

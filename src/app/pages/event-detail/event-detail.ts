import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PageHero } from '../../shared/page-hero/page-hero';
import { findEvent, hasHappened } from '../../data/events';

@Component({
  imports: [RouterLink, PageHero],
  selector: 'app-event-detail',
  templateUrl: './event-detail.html',
})
export class EventDetail {
  private readonly route = inject(ActivatedRoute);

  /** Undefined when the id in the URL matches no published event. */
  protected readonly event = findEvent(this.route.snapshot.paramMap.get('id'));

  /** A session that has already run shows a recap instead of a booking form. */
  protected readonly isPast = this.event ? hasHappened(this.event) : false;

  protected readonly registrationFields = [
    { name: 'name', label: 'Full name', type: 'text' },
    { name: 'org', label: 'Organisation', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'contact', label: 'Contact number', type: 'tel' },
    { name: 'attending', label: 'Attending as', type: 'select' },
  ];
}

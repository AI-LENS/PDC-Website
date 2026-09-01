import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  imports: [PageHero],
  selector: 'app-contact',
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly fields = [
    { name: 'name', label: 'Name *', type: 'text', wide: false },
    { name: 'email', label: 'Email *', type: 'email', wide: false },
    { name: 'phone', label: 'Phone *', type: 'tel', wide: false },
    { name: 'subject', label: 'Subject', type: 'text', wide: false },
    { name: 'message', label: 'Message *', type: 'textarea', wide: true },
  ];
}

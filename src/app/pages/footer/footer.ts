import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  protected readonly quickLinks = [
    { label: 'Home', path: '/home' },
    { label: 'About us', path: '/about' },
    { label: 'Meet our team', path: '/team' },
    { label: 'Events & happenings', path: '/events' },
    { label: 'Resources', path: '/resources' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];
}

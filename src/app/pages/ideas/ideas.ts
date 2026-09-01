import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  imports: [PageHero],
  selector: 'app-ideas',
  templateUrl: './ideas.html',
})
export class Ideas {
  protected readonly fields = [
    { name: 'name', label: 'Your name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'org', label: 'Organisation', type: 'text' },
    { name: 'category', label: 'Category', type: 'select' },
    { name: 'title', label: 'Idea title', type: 'text' },
    { name: 'details', label: 'Describe your idea', type: 'textarea' },
  ];
}

import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  imports: [PageHero],
  selector: 'app-presentations',
  templateUrl: './presentations.html',
})
export class Presentations {
  protected readonly presentations = Array.from({ length: 6 }, () => ({
    title: 'Presentation title placeholder',
    speaker: 'Speaker name',
    event: 'Event name placeholder',
  }));
}

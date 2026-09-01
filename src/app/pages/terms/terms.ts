import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  imports: [PageHero],
  selector: 'app-terms',
  templateUrl: './terms.html',
})
export class Terms {
  protected readonly sections = Array.from({ length: 6 }, () => ({
    heading: 'Section heading placeholder',
    body: 'Placeholder body text for this section. Replace with the real wording.',
  }));
}

import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  imports: [PageHero],
  selector: 'app-privacy',
  templateUrl: './privacy.html',
})
export class Privacy {
  protected readonly sections = Array.from({ length: 6 }, () => ({
    heading: 'Section heading placeholder',
    body: 'Placeholder body text for this section. Replace with the real wording.',
  }));
}

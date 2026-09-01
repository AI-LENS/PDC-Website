import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  imports: [PageHero],
  selector: 'app-resources',
  templateUrl: './resources.html',
})
export class Resources {
  protected readonly groups = [
    {
      title: 'Useful resources',
      blurb: 'Guides, tutorials and reading picked by the community.',
      items: Array.from({ length: 6 }, () => ({
        title: 'Resource title placeholder',
        description: 'Short description of what this resource covers.',
        kind: 'Link',
      })),
    },
    {
      title: 'Industry standards',
      blurb: 'Standards and regulatory references relevant to pharma data science.',
      items: Array.from({ length: 3 }, () => ({
        title: 'Standard name placeholder',
        description: 'Short description of the standard and where it applies.',
        kind: 'Reference',
      })),
    },
  ];
}

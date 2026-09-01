import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  imports: [RouterLink, PageHero],
  selector: 'app-volunteers',
  templateUrl: './volunteers.html',
})
export class Volunteers {
  protected readonly roles = Array.from({ length: 6 }, () => ({
    title: 'Position title placeholder',
    description: 'Short description of what this volunteering role involves.',
    commitment: 'Time commitment placeholder',
  }));
}

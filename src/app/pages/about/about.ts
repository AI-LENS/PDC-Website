import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  imports: [RouterLink, PageHero],
  selector: 'app-about',
  templateUrl: './about.html',
})
export class About {
  /* Objectives taken from the launch poster. */
  protected readonly mission = [
    'Drive collaboration between data science professionals and organisations.',
    'Promote sharing of knowledge and best practices across the pharma ecosystem.',
    'Organise hackathons and networking opportunities.',
    'Develop analytical solutions for real-world challenges.',
    'Support the professional growth of community members.',
    'Bring a dedicated focus on data science, including AI and machine learning, complementing traditional statistics-focused forums.',
  ];
}

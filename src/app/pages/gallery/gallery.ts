import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';
import { EVENTS } from '../../data/events';

@Component({
  imports: [PageHero],
  selector: 'app-gallery',
  templateUrl: './gallery.html',
})
export class Gallery {
  /** One album per event that has photos. */
  protected readonly albums = EVENTS.filter((event) => event.photos.length > 0).map((event) => ({
    title: event.title,
    date: event.dateLabel,
    venue: event.venue,
    photos: event.photos,
  }));
}

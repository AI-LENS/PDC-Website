import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  imports: [PageHero],
  selector: 'app-gallery',
  templateUrl: './gallery.html',
})
export class Gallery {
  protected readonly albums = Array.from({ length: 3 }, () => ({
    title: 'Album title placeholder',
    date: 'Date placeholder',
    photos: Array.from({ length: 8 }, (_, i) => i),
  }));
}

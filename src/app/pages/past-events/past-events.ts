import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/page-hero/page-hero';
import { pastEventsByYear } from '../../data/events';

@Component({
  imports: [RouterLink, PageHero],
  selector: 'app-past-events',
  templateUrl: './past-events.html',
})
export class PastEvents {
  protected readonly query = signal('');

  private readonly archive = pastEventsByYear();

  /** Year groups filtered by the search box, dropping any year left empty. */
  protected readonly results = computed(() => {
    const term = this.query().trim().toLowerCase();
    if (!term) return this.archive;

    return this.archive
      .map((group) => ({
        year: group.year,
        events: group.events.filter((event) =>
          `${event.title} ${event.summary} ${event.venue}`.toLowerCase().includes(term),
        ),
      }))
      .filter((group) => group.events.length > 0);
  });

  protected onSearch(value: string): void {
    this.query.set(value);
  }
}

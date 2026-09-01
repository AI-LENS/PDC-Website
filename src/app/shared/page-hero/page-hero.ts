import { Component, input } from '@angular/core';

/** Navy band used at the top of every inner page. */
@Component({
  selector: 'app-page-hero',
  template: `
    <section class="bg-brand-700">
      <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 class="text-white">{{ heading() }}</h1>
        @if (subtitle()) {
          <p class="mt-3 max-w-2xl text-brand-100/85">{{ subtitle() }}</p>
        }
      </div>
    </section>
  `,
})
export class PageHero {
  readonly heading = input.required<string>();
  readonly subtitle = input<string>('');
}

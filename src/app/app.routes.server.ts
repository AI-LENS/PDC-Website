import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Ids that get a prerendered event page. A parameterised route cannot be
 * enumerated automatically, so list every id that should exist as a real file.
 * Add to this list when a new event detail page is published.
 */
const EVENT_IDS = ['1'];

export const serverRoutes: ServerRoute[] = [
  {
    path: 'events/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => EVENT_IDS.map((id) => ({ id })),
  },
  {
    // every other route is a fixed path, so it prerenders to its own index.html
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

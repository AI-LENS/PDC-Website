import { Component, signal } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  imports: [PageHero],
  selector: 'app-faq',
  templateUrl: './faq.html',
})
export class Faq {
  protected readonly faqs = [
    { question: 'What is the PharmaDS Collective?', answer: 'Placeholder answer describing the collective and its purpose.' },
    ...Array.from({ length: 7 }, () => ({
      question: 'Question placeholder?',
      answer: 'Placeholder answer text goes here.',
    })),
  ];

  private readonly openIndex = signal<number | null>(0);

  protected isOpen(i: number): boolean {
    return this.openIndex() === i;
  }

  protected toggle(i: number): void {
    this.openIndex.update((current) => (current === i ? null : i));
  }
}

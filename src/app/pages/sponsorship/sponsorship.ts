import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  imports: [RouterLink, PageHero],
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.html',
})
export class Sponsorship {
  protected readonly columns = ['Category', 'Contribution', 'Benefits', 'Slots'];

  protected readonly tiers = [
    { name: 'Platinum', amount: 'Amount placeholder', benefits: 'Benefit summary placeholder', slots: '2' },
    { name: 'Gold', amount: 'Amount placeholder', benefits: 'Benefit summary placeholder', slots: '4' },
    { name: 'Silver', amount: 'Amount placeholder', benefits: 'Benefit summary placeholder', slots: '6' },
    { name: 'Workshop sponsor', amount: 'Amount placeholder', benefits: 'Benefit summary placeholder', slots: '3' },
  ];
}

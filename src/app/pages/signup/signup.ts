import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  imports: [RouterLink, PageHero],
  selector: 'app-signup',
  templateUrl: './signup.html',
})
export class Signup {
  protected readonly groups = [
    {
      title: 'Personal information',
      fields: [
        { name: 'firstName', label: 'First name', type: 'text', wide: false },
        { name: 'lastName', label: 'Last name', type: 'text', wide: false },
        { name: 'email', label: 'Email', type: 'email', wide: false },
        { name: 'contact', label: 'Contact number', type: 'tel', wide: false },
        { name: 'city', label: 'City', type: 'text', wide: false },
        { name: 'country', label: 'Country', type: 'select', wide: false },
      ],
    },
    {
      title: 'Professional details',
      fields: [
        { name: 'org', label: 'Organisation', type: 'text', wide: false },
        { name: 'role', label: 'Job title', type: 'text', wide: false },
        { name: 'experience', label: 'Years of experience', type: 'select', wide: false },
        { name: 'area', label: 'Area of interest', type: 'select', wide: false },
        { name: 'about', label: 'Tell us about yourself', type: 'textarea', wide: true },
      ],
    },
    {
      title: 'Account',
      fields: [
        { name: 'password', label: 'Password', type: 'password', wide: false },
        { name: 'confirm', label: 'Confirm password', type: 'password', wide: false },
      ],
    },
  ];
}

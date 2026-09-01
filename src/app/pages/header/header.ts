import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
}

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header {
  /** Mirrors the reference site's menu, including its two submenus. */
  protected readonly navItems: NavItem[] = [
    { label: 'HOME', path: '/home' },
    {
      label: 'ABOUT US',
      children: [
        { label: 'About us', path: '/about' },
        { label: 'Meet our team', path: '/team' },
      ],
    },
    {
      label: 'EVENTS',
      children: [
        { label: 'Upcoming events', path: '/events' },
        { label: 'Past events', path: '/past-events' },
        { label: 'Events calendar', path: '/event-calendar' },
        { label: 'Sponsorship', path: '/sponsorship' },
        { label: 'Presentations', path: '/presentations' },
      ],
    },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'RESOURCES', path: '/resources' },
    { label: 'FAQ', path: '/faq' },
    { label: 'CONTACT', path: '/contact' },
  ];

  protected readonly menuOpen = signal(false);
  protected readonly openSubmenu = signal<string | null>(null);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
    this.openSubmenu.set(null);
  }

  protected openDropdown(label: string): void {
    this.openSubmenu.set(label);
  }

  protected closeDropdown(): void {
    this.openSubmenu.set(null);
  }

  /** Desktop uses hover, mobile taps the same submenu open and shut. */
  protected toggleSubmenu(label: string): void {
    this.openSubmenu.update((current) => (current === label ? null : label));
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { EventDetail } from './event-detail';

/** Builds the component with :id resolved to the given value. */
async function renderWithId(id: string): Promise<ComponentFixture<EventDetail>> {
  TestBed.resetTestingModule();
  await TestBed.configureTestingModule({
    imports: [EventDetail],
    providers: [
      provideRouter([]),
      {
        provide: ActivatedRoute,
        useValue: { snapshot: { paramMap: convertToParamMap({ id }) } },
      },
    ],
  }).compileComponents();

  const fixture = TestBed.createComponent(EventDetail);
  await fixture.whenStable();
  return fixture;
}

describe('EventDetail', () => {
  it('should create', async () => {
    const fixture = await renderWithId('1');
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the real session for a known id', async () => {
    const fixture = await renderWithId('1');
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';

    expect(text).toContain('Inaugural Session');
    expect(text).toContain('Bangalore, India');
    expect(text).toContain('25 July 2026');
  });

  it('lists the speakers and founding members', async () => {
    const fixture = await renderWithId('1');
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';

    expect(text).toContain('Ramasuri Narayanam');
    expect(text).toContain('Ajay Daparthi');
  });

  it('shows the session photos with alt text', async () => {
    const fixture = await renderWithId('1');
    const images = (fixture.nativeElement as HTMLElement).querySelectorAll('img');

    expect(images.length).toBe(8);
    images.forEach((img) => expect(img.getAttribute('alt')).toBeTruthy());
  });

  it('hides the registration form for an event that has already happened', async () => {
    const fixture = await renderWithId('1');
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('form')).toBeNull();
  });

  it('falls back to a not-found message for an unknown id', async () => {
    const fixture = await renderWithId('999');
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';

    expect(text).toContain('not found');
  });
});

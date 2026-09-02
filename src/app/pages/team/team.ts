import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';

interface Person {
  name: string;
  role: string;
  /** Path under public/, or null to show the placeholder tile. */
  photo: string | null;
  bio: string;
}

@Component({
  imports: [PageHero],
  selector: 'app-team',
  templateUrl: './team.html',
})
export class Team {
  /* Founding members and their photos are taken from the launch poster,
     in the same left-to-right order. Bios are placeholders. */
  protected readonly groups: { title: string; people: Person[] }[] = [
    {
      title: 'Founding members',
      people: [
        {
          name: 'Ashwini Mathur',
          role: 'Founding member',
          photo: 'img/team/ashwini-mathur.png',
          bio: 'Short bio placeholder.',
        },
        {
          name: 'Ajay Daparthi',
          role: 'Founding member',
          photo: 'img/team/ajay-daparthi.png',
          bio: 'Short bio placeholder.',
        },
        {
          name: 'Suhas Kirani',
          role: 'Founding member',
          photo: 'img/team/suhas-kirani.png',
          bio: 'Short bio placeholder.',
        },
        {
          name: 'Abhijit Roy',
          role: 'Founding member',
          photo: 'img/team/abhijit-roy.png',
          bio: 'Short bio placeholder.',
        },
      ],
    },
    // {
    //   title: 'Executive committee',
    //   people: Array.from({ length: 4 }, () => ({
    //     name: 'Name placeholder',
    //     role: 'Role placeholder',
    //     photo: null,
    //     bio: 'Short bio placeholder.',
    //   })),
    // },
    // {
    //   title: 'Volunteers',
    //   people: Array.from({ length: 8 }, () => ({
    //     name: 'Name placeholder',
    //     role: 'Volunteer',
    //     photo: null,
    //     bio: '',
    //   })),
    // },
  ];
}

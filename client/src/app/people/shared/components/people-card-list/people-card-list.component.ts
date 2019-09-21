import { Component, Input } from '@angular/core';

import { People } from '../../people.interface';

@Component({
  selector: 'app-people-card-list',
  templateUrl: './people-card-list.component.html',
  styleUrls: ['./people-card-list.component.scss'],
})
export class PeopleCardListComponent {
  @Input() people: People[];

  getKnownFor(peopleItem: People): string {
    return peopleItem.known_for.map((x) => x.title || x.name).join(', ');
  }
}

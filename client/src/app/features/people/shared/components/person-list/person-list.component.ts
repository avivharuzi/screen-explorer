import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Person } from '../../shared/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonListComponent {
  @Input() people: Person[];
}

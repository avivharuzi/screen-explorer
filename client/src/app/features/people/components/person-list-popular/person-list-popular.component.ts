import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PersonListType } from '../../shared/shared/person-list-type.enum';

@Component({
  selector: 'app-person-list-popular',
  templateUrl: './person-list-popular.component.html',
  styleUrls: ['./person-list-popular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonListPopularComponent {
  PersonListType = PersonListType;
}

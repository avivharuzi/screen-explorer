import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { APP_ROUTES } from '../../../../../../app-routes';
import { Person } from '../../../shared/person';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonItemComponent {
  @Input() person: Person;

  APP_ROUTES = APP_ROUTES;
}

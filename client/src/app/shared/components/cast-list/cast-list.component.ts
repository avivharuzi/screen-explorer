import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Cast } from '../../shared/cast';

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
  styleUrls: ['./cast-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CastListComponent {
  @Input() cast: Cast[];

  trackPerson(index, person) {
    return person.id;
  }
}

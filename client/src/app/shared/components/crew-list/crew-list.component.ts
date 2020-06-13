import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Crew } from '../../shared/crew';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrewListComponent {
  @Input() crew: Crew[];
}

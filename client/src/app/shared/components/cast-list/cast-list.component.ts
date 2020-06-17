import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Cast } from '../../shared/cast';

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
  styleUrls: ['./cast-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CastListComponent {
  @Input() casts: Cast[];

  trackByCast(index: number, cast: Cast): number {
    return cast.id || index;
  }
}

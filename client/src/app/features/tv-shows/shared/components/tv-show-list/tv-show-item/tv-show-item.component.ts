import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { APP_ROUTES } from '../../../../../../app-routes';
import { TvShow } from '../../../tv-show';

@Component({
  selector: 'app-tv-show-item',
  templateUrl: './tv-show-item.component.html',
  styleUrls: ['./tv-show-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvShowItemComponent {
  @Input() tvShow: TvShow;

  APP_ROUTES = APP_ROUTES;
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TvShow } from '../../../tv-show';

@Component({
  selector: 'app-tv-show-item',
  templateUrl: './tv-show-item.component.html',
  styleUrls: ['./tv-show-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvShowItemComponent {
  @Input() tvShow: TvShow;
}

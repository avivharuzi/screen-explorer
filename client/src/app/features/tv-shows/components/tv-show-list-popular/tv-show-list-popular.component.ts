import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TvShowListType } from '../../shared/tv-show-list-type.enum';

@Component({
  selector: 'app-tv-show-list-popular',
  templateUrl: './tv-show-list-popular.component.html',
  styleUrls: ['./tv-show-list-popular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvShowListPopularComponent {
  TvShowListType = TvShowListType;
}

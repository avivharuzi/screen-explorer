import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TvShowListType } from '../../shared/tv-show-list-type.enum';

@Component({
  selector: 'app-tv-show-list-top-rated',
  templateUrl: './tv-show-list-top-rated.component.html',
  styleUrls: ['./tv-show-list-top-rated.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvShowListTopRatedComponent {
  TvShowListType = TvShowListType;
}

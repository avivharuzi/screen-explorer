import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TvShowListType } from '../../shared/tv-show-list-type.enum';

@Component({
  selector: 'app-tv-show-list-on-the-air',
  templateUrl: './tv-show-list-on-the-air.component.html',
  styleUrls: ['./tv-show-list-on-the-air.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvShowListOnTheAirComponent {
  TvShowListType = TvShowListType;
}

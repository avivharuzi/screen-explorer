import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TvShowListType } from '../../shared/tv-show-list-type.enum';

@Component({
  selector: 'app-tv-show-list-airing-today',
  templateUrl: './tv-show-list-airing-today.component.html',
  styleUrls: ['./tv-show-list-airing-today.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvShowListAiringTodayComponent {
  TvShowListType = TvShowListType;
}

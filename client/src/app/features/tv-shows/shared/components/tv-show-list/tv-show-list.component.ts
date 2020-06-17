import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TvShow } from '../../tv-show';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvShowListComponent {
  @Input() tvShows: TvShow[];

  trackByTvShow(index: number, tvShow: TvShow): number {
    return tvShow.id || index;
  }
}

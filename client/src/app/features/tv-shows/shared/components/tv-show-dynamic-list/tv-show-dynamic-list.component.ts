import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

import { TvShow } from '../../tv-show';
import { TvShowListType } from '../../tv-show-list-type.enum';
import { TvShowService } from '../../tv-show.service';

@Component({
  selector: 'app-tv-show-dynamic-list',
  templateUrl: './tv-show-dynamic-list.component.html',
  styleUrls: ['./tv-show-dynamic-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvShowDynamicListComponent {
  @Input() listType: TvShowListType;

  tvShows: TvShow[];
  totalItems: number;

  constructor(private changeDetectorRef: ChangeDetectorRef, private tvShowService: TvShowService) {}

  load(page: number): void {
    this.tvShowService.getList(this.listType, { page }).subscribe(res => {
      this.tvShows = res.results;
      this.totalItems = res.total_results;
      this.changeDetectorRef.detectChanges();
    });
  }
}

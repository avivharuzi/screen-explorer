import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Episode, TvShowSeasonDetail } from '../../shared/tv-show-season-detail';
import { TvShowService } from '../../shared/tv-show.service';

@Component({
  selector: 'app-tv-show-season-detail',
  templateUrl: './tv-show-season-detail.component.html',
  styleUrls: ['./tv-show-season-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvShowSeasonDetailComponent implements OnInit {
  tvShowSeasonDetail: TvShowSeasonDetail;

  constructor(private activatedRoute: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef, private tvShowService: TvShowService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params.id;
      const seasonNumber = +params.seasonNumber;

      this.tvShowService.getSeasonDetail(id, seasonNumber).subscribe(res => {
        this.tvShowSeasonDetail = res;
        this.changeDetectorRef.detectChanges();
      });
    });
  }

  trackByEpisode(index: number, episode: Episode): number {
    return episode.id || index;
  }
}

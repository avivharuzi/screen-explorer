import { ActivatedRoute, Router } from '@angular/router';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { map } from 'rxjs/operators';
import { NgxSeoService } from '@avivharuzi/ngx-seo';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

import { APP_ROUTES } from '../../../../app-routes';
import { Season, TvShowDetail } from '../../shared/tv-show-detail';
import { TvShow } from '../../shared/tv-show';
import { TvShowService } from '../../shared/tv-show.service';
import { Video } from '../../../../shared/shared/video';
import { VideoService } from '../../../../shared/shared/video.service';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvShowDetailComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  seasonId: string;
  selectedSeason: Season;
  similarTvShows: TvShow[];
  tvShowDetail: TvShowDetail;

  private playTrailerVideo: Video;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private ngxSeoService: NgxSeoService,
    private router: Router,
    private tvShowService: TvShowService,
    private videoService: VideoService
  ) {
    this.seasonId = '';
  }

  // noinspection DuplicatedCode
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params.id;

      this.tvShowService
        .getDetail(id)
        .pipe(
          map(res => {
            this.ngxSeoService.setTitle(res.name); // Set tv show name...

            res.videos.results = this.videoService.getOnlyYouTubeVideos(
              res.videos.results
            );
            this.playTrailerVideo =
              this.videoService.getYouTubeVideoTrailerOrFirstOne(
                res.videos.results
              );
            return res;
          })
        )
        .subscribe(res => {
          this.tvShowDetail = res;
          this.initSeasons();
          this.changeDetectorRef.detectChanges();
        });

      this.tvShowService
        .getSimilar(id)
        .pipe(
          map(res => {
            return res.results;
          })
        )
        .subscribe(res => {
          this.similarTvShows = res;
          this.changeDetectorRef.detectChanges();
        });
    });
  }

  onSeasonSelect(): void {
    this.selectedSeason = this.tvShowDetail.seasons.find(
      season => season.id === +this.seasonId
    );
    this.changeDetectorRef.detectChanges();

    if (!this.selectedSeason) {
      return;
    }

    this.router
      .navigate([
        '/',
        APP_ROUTES.TV_SHOWS.self,
        this.tvShowDetail.id,
        APP_ROUTES.TV_SHOWS.children.DETAIL.SEASONS,
        this.selectedSeason.season_number,
      ])
      .then();
  }

  onSeasonsTabDeselect(): void {
    this.seasonId = '';
    this.selectedSeason = null;
    this.changeDetectorRef.detectChanges();

    this.router
      .navigate(['/', APP_ROUTES.TV_SHOWS.self, this.tvShowDetail.id])
      .then();
  }

  onCallToActionClicked(): void {
    this.videoService.openModal(this.playTrailerVideo);
  }

  hasVideo(): boolean {
    return !!this.playTrailerVideo;
  }

  trackBySeason(index: number, season: Season): number {
    return season.id || index;
  }

  private initSeasons(): void {
    const seasonNumber =
      +this.activatedRoute.firstChild?.snapshot?.params?.seasonNumber;
    if (isNaN(seasonNumber)) {
      return;
    }

    const season = this.tvShowDetail.seasons.find(
      s => s.season_number === seasonNumber
    );
    if (!season) {
      return;
    }

    this.seasonId = `${season.id}`;

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const i = this.staticTabs.tabs.findIndex(tab => tab.id === 'episodes');
        this.staticTabs.tabs[i].active = true;
        this.changeDetectorRef.detectChanges();
      }, 0);
    }
  }
}

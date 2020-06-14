import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { TvShow } from '../../shared/tv-show';
import { TvShowDetail } from '../../shared/tv-show-detail';
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
  tvShowDetail: TvShowDetail;
  similarTvShows: TvShow[];

  private playTrailerVideo: Video;

  constructor(
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private tvShowService: TvShowService,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params.id;

      this.tvShowService
        .getDetail(id)
        .pipe(
          map(res => {
            res.videos.results = this.videoService.getOnlyYouTubeVideos(res.videos.results);
            this.playTrailerVideo = this.videoService.getYouTubeVideoTrailerOrFirstOne(res.videos.results);
            return res;
          })
        )
        .subscribe(res => {
          this.tvShowDetail = res;
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

  onCallToActionClicked(): void {
    this.videoService.openModal(this.playTrailerVideo);
  }

  hasVideo(): boolean {
    return !!this.playTrailerVideo;
  }
}

import { ActivatedRoute } from '@angular/router';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { map } from 'rxjs/operators';
import { NgxSeoService } from '@avivharuzi/ngx-seo';

import { Movie } from '../../shared/movie';
import { MovieDetail } from '../../shared/movie-detail';
import { MovieService } from '../../shared/movie.service';
import { Video } from '../../../../shared/shared/video';
import { VideoService } from '../../../../shared/shared/video.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailComponent implements OnInit {
  movieDetail: MovieDetail;
  similarMovies: Movie[];

  private playTrailerVideo: Video;

  constructor(
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private movieService: MovieService,
    private ngxSeoService: NgxSeoService,
    private videoService: VideoService
  ) {}

  // noinspection DuplicatedCode
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params.id;

      this.movieService
        .getDetail(id)
        .pipe(
          map(res => {
            this.ngxSeoService.setTitle(res.title); // Set movie title...

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
          this.movieDetail = res;
          this.changeDetectorRef.detectChanges();
        });

      this.movieService
        .getSimilar(id)
        .pipe(
          map(res => {
            return res.results;
          })
        )
        .subscribe(res => {
          this.similarMovies = res;
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

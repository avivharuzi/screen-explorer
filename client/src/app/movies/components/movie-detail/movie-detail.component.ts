import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { MovieDetail } from '../../shared/movie-detail.interface';
import { MovieService } from '../../shared/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id: string;
  movieDetail: MovieDetail;

  private paramsSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
  ) {
  }

  ngOnInit(): void {
    this.initParams();
    this.initMovieDetail();
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  private initParams(): void {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
    });
  }

  private initMovieDetail() {
    this.movieService.getDetail(this.id).subscribe((res) => {
      this.movieDetail = res;
    }, _ => {
      this.router.navigateByUrl('**', { skipLocationChange: true }).then(_ => {
      });
    });
  }
}

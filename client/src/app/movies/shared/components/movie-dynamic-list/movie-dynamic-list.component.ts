import { Component, OnInit, OnDestroy, Input, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { HttpResponsePagination } from '../../../../shared/shared/http-response-pagination.interface';
import { Movie } from '../../movie.interface';
import { MovieCategory } from '../../movie-category.enum';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-movie-dynamic-list',
  templateUrl: './movie-dynamic-list.component.html',
  styleUrls: ['./movie-dynamic-list.component.scss'],
})
export class MovieDynamicListComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() category: MovieCategory;

  movies: Movie[];
  page: number;
  length: number;
  pageSize: number;
  disabled: boolean;

  private paramsSubscription: Subscription;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: string,
  ) {
    this.page = 1;
  }

  ngOnInit() {
    this.initParams();
    this.populateMovies();
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  getPageIndex(): number {
    return this.page - 1;
  }

  onPage(event: PageEvent): void {
    if (event.pageIndex === this.getPageIndex()) {
      return;
    }

    this.page = event.pageIndex + 1;

    this.populateMovies();
  }

  private initParams(): void {
    this.paramsSubscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (!params.page || isNaN(params.page)) {
        return;
      }

      if (params.page < 1) {
        return;
      }

      this.page = +params.page;
    });
  }

  private populateMovies(): void {
    this.disabled = true;

    switch (this.category) {
      case MovieCategory.NowPlaying: {
        // noinspection JSDeprecatedSymbols
        this.movieService.getNowPlaying(this.page).subscribe(this.success.bind(this), this.error);
        break;
      }
      case MovieCategory.Popular: {
        // noinspection JSDeprecatedSymbols
        this.movieService.getPopular(this.page).subscribe(this.success.bind(this), this.error);
        break;
      }
      case MovieCategory.TopRated: {
        // noinspection JSDeprecatedSymbols
        this.movieService.getTopRated(this.page).subscribe(this.success.bind(this), this.error);
        break;
      }
      case MovieCategory.Upcoming: {
        // noinspection JSDeprecatedSymbols
        this.movieService.getUpcoming(this.page).subscribe(this.success.bind(this), this.error);
        break;
      }
    }
  }

  private success(res: HttpResponsePagination<Movie>): void {
    this.movies = res.results;
    this.length = res.total_results;
    this.pageSize = res.results.length;
    this.disabled = false;

    this.addPageToQuery();

    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

  private error(): void {
    this.router.navigateByUrl('**', { skipLocationChange: true }).then(_ => {
    });
  }

  private addPageToQuery(): void {
    this.router.navigate([], {
      queryParams: {
        page: this.page,
      },
      queryParamsHandling: 'merge',
    }).then(_ => {
    });
  }
}

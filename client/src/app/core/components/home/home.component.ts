import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TrendingService } from '../../../features/trendings/shared/trending.service';
import { Observable } from 'rxjs';
import { Trending } from '../../../features/trendings/shared/trending';
import { MediaType } from '../../../features/trendings/shared/media-type.enum';
import { TimeWindow } from '../../../features/trendings/shared/time-window.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  weekAll$: Observable<Trending[]>;

  dayMovies$: Observable<Trending[]>;
  weekMovies$: Observable<Trending[]>;
  dayTvShows$: Observable<Trending[]>;
  weekTvShows$: Observable<Trending[]>;
  dayPeople$: Observable<Trending[]>;
  weekPeople$: Observable<Trending[]>;

  constructor(
    private trendingService: TrendingService
  ) {
  }

  ngOnInit(): void {
    this.weekAll$ = this.trendingService.getListOnlyResults(MediaType.All, TimeWindow.Week);
    this.dayMovies$ = this.trendingService.getListOnlyResults(MediaType.Movie, TimeWindow.Day);
    this.weekMovies$ = this.trendingService.getListOnlyResults(MediaType.Movie, TimeWindow.Week);
    this.dayTvShows$ = this.trendingService.getListOnlyResults(MediaType.TV, TimeWindow.Day);
    this.weekTvShows$ = this.trendingService.getListOnlyResults(MediaType.TV, TimeWindow.Week);
    this.dayPeople$ = this.trendingService.getListOnlyResults(MediaType.Person, TimeWindow.Day);
    this.weekPeople$ = this.trendingService.getListOnlyResults(MediaType.Person, TimeWindow.Week);
  }
}

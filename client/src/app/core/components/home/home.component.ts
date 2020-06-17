import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TrendService } from '../../../features/trends/shared/trend.service';
import { Observable } from 'rxjs';
import { Trend } from '../../../features/trends/shared/trend';
import { MediaType } from '../../../features/trends/shared/media-type.enum';
import { TimeWindow } from '../../../features/trends/shared/time-window.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  weekAll$: Observable<Trend[]>;

  dayMovies$: Observable<Trend[]>;
  weekMovies$: Observable<Trend[]>;
  dayTvShows$: Observable<Trend[]>;
  weekTvShows$: Observable<Trend[]>;
  dayPeople$: Observable<Trend[]>;
  weekPeople$: Observable<Trend[]>;

  constructor(private trendService: TrendService) {}

  ngOnInit(): void {
    this.weekAll$ = this.trendService.getListOnlyResults(MediaType.All, TimeWindow.Week);
    this.dayMovies$ = this.trendService.getListOnlyResults(MediaType.Movie, TimeWindow.Day);
    this.weekMovies$ = this.trendService.getListOnlyResults(MediaType.Movie, TimeWindow.Week);
    this.dayTvShows$ = this.trendService.getListOnlyResults(MediaType.TV, TimeWindow.Day);
    this.weekTvShows$ = this.trendService.getListOnlyResults(MediaType.TV, TimeWindow.Week);
    this.dayPeople$ = this.trendService.getListOnlyResults(MediaType.Person, TimeWindow.Day);
    this.weekPeople$ = this.trendService.getListOnlyResults(MediaType.Person, TimeWindow.Week);
  }
}

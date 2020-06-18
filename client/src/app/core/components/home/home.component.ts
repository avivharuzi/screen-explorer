import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { APP_SEO } from '../../../app-seo';
import { MediaTypeList } from '../../../features/trends/shared/media-type-list.enum';
import { TimeWindow } from '../../../features/trends/shared/time-window.enum';
import { Trend } from '../../../features/trends/shared/trend';
import { TrendService } from '../../../features/trends/shared/trend.service';

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

  constructor(private titleService: Title, private trendService: TrendService) {}

  ngOnInit(): void {
    this.titleService.setTitle(APP_SEO.HOME.title);

    this.weekAll$ = this.trendService.getListOnlyResults(MediaTypeList.All, TimeWindow.Week);
    this.dayMovies$ = this.trendService.getListOnlyResults(MediaTypeList.Movie, TimeWindow.Day);
    this.weekMovies$ = this.trendService.getListOnlyResults(MediaTypeList.Movie, TimeWindow.Week);
    this.dayTvShows$ = this.trendService.getListOnlyResults(MediaTypeList.TV, TimeWindow.Day);
    this.weekTvShows$ = this.trendService.getListOnlyResults(MediaTypeList.TV, TimeWindow.Week);
    this.dayPeople$ = this.trendService.getListOnlyResults(MediaTypeList.Person, TimeWindow.Day);
    this.weekPeople$ = this.trendService.getListOnlyResults(MediaTypeList.Person, TimeWindow.Week);
  }
}

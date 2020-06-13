import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MovieListType } from '../../shared/movie-list-type.enum';

@Component({
  selector: 'app-movie-list-upcoming',
  templateUrl: './movie-list-upcoming.component.html',
  styleUrls: ['./movie-list-upcoming.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListUpcomingComponent {
  MovieListType = MovieListType;
}

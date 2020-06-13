import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MovieListType } from '../../shared/movie-list-type.enum';

@Component({
  selector: 'app-movie-list-top-rated',
  templateUrl: './movie-list-top-rated.component.html',
  styleUrls: ['./movie-list-top-rated.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListTopRatedComponent {
  MovieListType = MovieListType;
}

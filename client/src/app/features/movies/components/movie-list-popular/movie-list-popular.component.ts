import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MovieListType } from '../../shared/movie-list-type.enum';

@Component({
  selector: 'app-movie-list-popular',
  templateUrl: './movie-list-popular.component.html',
  styleUrls: ['./movie-list-popular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListPopularComponent {
  MovieListType = MovieListType;
}

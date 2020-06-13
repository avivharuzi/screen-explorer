import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MovieListType } from '../../shared/movie-list-type.enum';

@Component({
  selector: 'app-movie-list-now-playing',
  templateUrl: './movie-list-now-playing.component.html',
  styleUrls: ['./movie-list-now-playing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListNowPlayingComponent {
  MovieListType = MovieListType;
}

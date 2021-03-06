import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Movie } from '../../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent {
  @Input() movies: Movie[];

  trackByMovie(index: number, movie: Movie): number {
    return movie.id || index;
  }
}

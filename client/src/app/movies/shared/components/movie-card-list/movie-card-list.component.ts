import { Component, Input } from '@angular/core';

import { Movie } from '../../movie.interface';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.scss'],
})
export class MovieCardListComponent {
  @Input() movies: Movie[];
}

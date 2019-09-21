import { Component } from '@angular/core';

import { MovieCategory } from '../../shared/movie-category.enum';

@Component({
  selector: 'app-movie-top-rated',
  templateUrl: './movie-top-rated.component.html',
  styleUrls: ['./movie-top-rated.component.scss'],
})
export class MovieTopRatedComponent {
  movieCategory: MovieCategory;

  constructor() {
    this.movieCategory = MovieCategory.TopRated;
  }
}

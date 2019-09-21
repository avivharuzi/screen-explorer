import { Component } from '@angular/core';

import { MovieCategory } from '../../shared/movie-category.enum';

@Component({
  selector: 'app-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.scss'],
})
export class MoviePopularComponent {
  movieCategory: MovieCategory;

  constructor() {
    this.movieCategory = MovieCategory.Popular;
  }
}

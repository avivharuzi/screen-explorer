import { Component } from '@angular/core';

import { MovieCategory } from '../../shared/movie-category.enum';

@Component({
  selector: 'app-movie-upcoming',
  templateUrl: './movie-upcoming.component.html',
  styleUrls: ['./movie-upcoming.component.scss'],
})
export class MovieUpcomingComponent {
  movieCategory: MovieCategory;

  constructor() {
    this.movieCategory = MovieCategory.Upcoming;
  }
}

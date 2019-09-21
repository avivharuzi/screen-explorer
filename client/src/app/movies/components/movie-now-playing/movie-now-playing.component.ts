import { Component } from '@angular/core';

import { MovieCategory } from '../../shared/movie-category.enum';

@Component({
  selector: 'app-movie-now-playing',
  templateUrl: './movie-now-playing.component.html',
  styleUrls: ['./movie-now-playing.component.scss'],
})
export class MovieNowPlayingComponent {
  movieCategory: MovieCategory;

  constructor() {
    this.movieCategory = MovieCategory.NowPlaying;
  }
}

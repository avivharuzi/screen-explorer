import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-movies-now-playing',
  templateUrl: './movies-now-playing.component.html',
  styleUrls: ['./movies-now-playing.component.scss']
})
export class MoviesNowPlayingComponent implements OnInit {
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
  }
}

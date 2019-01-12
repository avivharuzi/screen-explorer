import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-movies-popular',
  templateUrl: './movies-popular.component.html',
  styleUrls: ['./movies-popular.component.scss']
})
export class MoviesPopularComponent implements OnInit {
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
  }
}

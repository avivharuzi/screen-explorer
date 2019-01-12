import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-movies-top-rated',
  templateUrl: './movies-top-rated.component.html',
  styleUrls: ['./movies-top-rated.component.scss']
})
export class MoviesTopRatedComponent implements OnInit {
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
  }
}

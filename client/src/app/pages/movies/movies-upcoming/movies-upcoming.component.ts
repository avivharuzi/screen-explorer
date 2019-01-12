import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-movies-upcoming',
  templateUrl: './movies-upcoming.component.html',
  styleUrls: ['./movies-upcoming.component.scss']
})
export class MoviesUpcomingComponent implements OnInit {
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
  }
}

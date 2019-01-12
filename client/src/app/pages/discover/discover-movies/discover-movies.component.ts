import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-discover-movies',
  templateUrl: './discover-movies.component.html',
  styleUrls: ['./discover-movies.component.scss']
})
export class DiscoverMoviesComponent implements OnInit {
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
  }
}

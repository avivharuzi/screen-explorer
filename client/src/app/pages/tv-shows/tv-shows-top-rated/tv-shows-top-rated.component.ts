import { Component, OnInit } from '@angular/core';

import { TvShowsService } from '../../../services/tv-shows.service';

@Component({
  selector: 'app-tv-shows-top-rated',
  templateUrl: './tv-shows-top-rated.component.html',
  styleUrls: ['./tv-shows-top-rated.component.scss']
})
export class TvShowsTopRatedComponent implements OnInit {
  constructor(
    private tvShowsService: TvShowsService
  ) { }

  ngOnInit() {
  }
}

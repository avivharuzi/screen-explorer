import { Component, OnInit } from '@angular/core';

import { TvShowsService } from '../../../services/tv-shows.service';

@Component({
  selector: 'app-tv-shows-popular',
  templateUrl: './tv-shows-popular.component.html',
  styleUrls: ['./tv-shows-popular.component.scss']
})
export class TvShowsPopularComponent implements OnInit {
  constructor(
    private tvShowsService: TvShowsService
  ) { }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';

import { TvShowsService } from '../../../../services/tv-shows.service';

@Component({
  selector: 'app-tv-shows-seasons-episodes',
  templateUrl: './tv-shows-seasons-episodes.component.html',
  styleUrls: ['./tv-shows-seasons-episodes.component.scss']
})
export class TvShowsSeasonsEpisodesComponent implements OnInit {
  constructor(
    private tvShowsService: TvShowsService
  ) { }

  ngOnInit() {
  }
}

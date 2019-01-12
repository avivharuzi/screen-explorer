import { Component, OnInit } from '@angular/core';

import { TvShowsService } from '../../../services/tv-shows.service';

@Component({
  selector: 'app-discover-tv-shows',
  templateUrl: './discover-tv-shows.component.html',
  styleUrls: ['./discover-tv-shows.component.scss']
})
export class DiscoverTvShowsComponent implements OnInit {
  constructor(
    private tvShowsService: TvShowsService
  ) { }

  ngOnInit() {
  }
}

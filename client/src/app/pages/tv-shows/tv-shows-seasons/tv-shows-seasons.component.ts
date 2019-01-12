import { Component, OnInit } from '@angular/core';

import { TvShowsService } from '../../../services/tv-shows.service';

@Component({
  selector: 'app-tv-shows-seasons',
  templateUrl: './tv-shows-seasons.component.html',
  styleUrls: ['./tv-shows-seasons.component.scss']
})
export class TvShowsSeasonsComponent implements OnInit {
  constructor(
    private tvShowsService: TvShowsService
  ) { }

  ngOnInit() {
  }
}

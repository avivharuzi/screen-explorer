import { Component, OnInit } from '@angular/core';

import { TvShowsService } from '../../../services/tv-shows.service';

@Component({
  selector: 'app-tv-shows-airing-today',
  templateUrl: './tv-shows-airing-today.component.html',
  styleUrls: ['./tv-shows-airing-today.component.scss']
})
export class TvShowsAiringTodayComponent implements OnInit {
  constructor(
    private tvShowsService: TvShowsService
  ) { }

  ngOnInit() {
  }
}

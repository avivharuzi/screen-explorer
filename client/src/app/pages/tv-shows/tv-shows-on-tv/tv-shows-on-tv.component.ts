import { Component, OnInit } from '@angular/core';

import { TvShowsService } from '../../../services/tv-shows.service';

@Component({
  selector: 'app-tv-shows-on-tv',
  templateUrl: './tv-shows-on-tv.component.html',
  styleUrls: ['./tv-shows-on-tv.component.scss']
})
export class TvShowsOnTvComponent implements OnInit {
  constructor(
    private tvShowsService: TvShowsService
  ) { }

  ngOnInit() {
  }
}

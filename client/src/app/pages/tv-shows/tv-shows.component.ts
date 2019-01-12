import { Component, OnInit } from '@angular/core';

import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  constructor(
    private tvShowsService: TvShowsService
  ) { }

  ngOnInit() {
  }
}

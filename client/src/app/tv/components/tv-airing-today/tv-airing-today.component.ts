import { Component } from '@angular/core';

import { TvCategory } from '../../shared/tv-category.enum';

@Component({
  selector: 'app-tv-airing-today',
  templateUrl: './tv-airing-today.component.html',
  styleUrls: ['./tv-airing-today.component.scss'],
})
export class TvAiringTodayComponent {
  tvCategory: TvCategory;

  constructor() {
    this.tvCategory = TvCategory.AiringToday;
  }
}

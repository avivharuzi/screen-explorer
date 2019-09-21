import { Component } from '@angular/core';

import { TvCategory } from '../../shared/tv-category.enum';

@Component({
  selector: 'app-tv-top-rated',
  templateUrl: './tv-top-rated.component.html',
  styleUrls: ['./tv-top-rated.component.scss'],
})
export class TvTopRatedComponent {
  tvCategory: TvCategory;

  constructor() {
    this.tvCategory = TvCategory.TopRated;
  }
}

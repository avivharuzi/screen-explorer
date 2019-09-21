import { Component } from '@angular/core';

import { TvCategory } from '../../shared/tv-category.enum';

@Component({
  selector: 'app-tv-on-tv',
  templateUrl: './tv-on-tv.component.html',
  styleUrls: ['./tv-on-tv.component.scss'],
})
export class TvOnTvComponent {
  tvCategory: TvCategory;

  constructor() {
    this.tvCategory = TvCategory.OnTheAir;
  }
}

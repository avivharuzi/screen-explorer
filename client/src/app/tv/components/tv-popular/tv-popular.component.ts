import { Component } from '@angular/core';
import { TvCategory } from '../../shared/tv-category.enum';

@Component({
  selector: 'app-tv-popular',
  templateUrl: './tv-popular.component.html',
  styleUrls: ['./tv-popular.component.scss'],
})
export class TvPopularComponent {
  tvCategory: TvCategory;

  constructor() {
    this.tvCategory = TvCategory.Popular;
  }
}

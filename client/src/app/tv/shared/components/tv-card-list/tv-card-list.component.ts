import { Component, Input } from '@angular/core';

import { Tv } from '../../tv.interface';

@Component({
  selector: 'app-tv-card-list',
  templateUrl: './tv-card-list.component.html',
  styleUrls: ['./tv-card-list.component.scss'],
})
export class TvCardListComponent {
  @Input() tv: Tv[];
}

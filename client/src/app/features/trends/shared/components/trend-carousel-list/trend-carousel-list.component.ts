import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Trend } from '../../trend';

@Component({
  selector: 'app-trend-carousel-list',
  templateUrl: './trend-carousel-list.component.html',
  styleUrls: ['./trend-carousel-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendCarouselListComponent {
  @Input() trends: Trend[];

  trackByTrend(index: number, trend: Trend): number {
    return trend.id || index;
  }
}

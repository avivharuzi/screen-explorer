import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Trend } from '../../trend';

@Component({
  selector: 'app-trend-list',
  templateUrl: './trend-list.component.html',
  styleUrls: ['./trend-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendListComponent {
  @Input() trends: Trend[];

  trackByTrend(index: number, trend: Trend): number {
    return trend.id || index;
  }
}

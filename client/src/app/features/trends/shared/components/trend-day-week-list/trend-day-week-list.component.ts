import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Trend } from '../../trend';

@Component({
  selector: 'app-trend-day-week-list',
  templateUrl: './trend-day-week-list.component.html',
  styleUrls: ['./trend-day-week-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendDayWeekListComponent {
  @Input() title: string;
  @Input() dayTrends: Trend[];
  @Input() weekTrends: Trend[];
}

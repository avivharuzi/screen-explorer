import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineItemComponent {
  @Input() asSubtitle: string;
  @Input() date: string;
  @Input() poster: string;
  @Input() subtitle: string;
  @Input() title: string;
  @Input() titleLink: string | (string | number)[];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-timeline-container',
  templateUrl: './timeline-container.component.html',
  styleUrls: ['./timeline-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineContainerComponent {}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalCardComponent {
  @Input() poster: string;
  @Input() subtitle: string;
  @Input() title: string;
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Genre } from '../../shared/genre';

@Component({
  selector: 'app-hero-stats',
  templateUrl: './hero-stats.component.html',
  styleUrls: ['./hero-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroStatsComponent {
  @Input() date: string;
  @Input() genres: Genre[];
  @Input() runtime: number;
}

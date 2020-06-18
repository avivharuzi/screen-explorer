import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { APP_ROUTES } from '../../../../../../app-routes';
import { Movie } from '../../../movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieItemComponent {
  @Input() movie: Movie;

  APP_ROUTES = APP_ROUTES;
}

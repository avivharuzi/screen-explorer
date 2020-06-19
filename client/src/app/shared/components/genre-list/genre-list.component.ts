import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Genre } from '../../shared/genre';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenreListComponent {
  @Input() genres: Genre[];

  trackByGenre(index: number, genre: Genre): number {
    return genre.id || index;
  }
}

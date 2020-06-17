import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { MediaType, SearchMulti } from '../../search-multi';
import { APP_ROUTES } from '../../../../../app-routes';

@Component({
  selector: 'app-search-multi-list',
  templateUrl: './search-multi-list.component.html',
  styleUrls: ['./search-multi-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchMultiListComponent {
  @Input() title: string;
  @Input() searchMulti: SearchMulti[];

  @Output() itemClick: EventEmitter<(string | number)[]> = new EventEmitter<(string | number)[]>();

  trackBySearchMulti(index: number, searchMulti: SearchMulti): number {
    return searchMulti.id || index;
  }

  getRoute(mediaType: MediaType): string {
    switch (mediaType) {
      case MediaType.Movie:
        return APP_ROUTES.MOVIES.self;
      case MediaType.TV:
        return APP_ROUTES.TV_SHOWS.self;
      case MediaType.Person:
        return APP_ROUTES.PEOPLE.self;
    }
  }
}

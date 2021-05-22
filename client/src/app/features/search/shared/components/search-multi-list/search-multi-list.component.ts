import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { MediaTypeToRouteNamePipe } from '../../../../../shared/pipes/media-type-to-route-name.pipe';
import { SearchMulti } from '../../search-multi';

@Component({
  selector: 'app-search-multi-list',
  templateUrl: './search-multi-list.component.html',
  styleUrls: ['./search-multi-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchMultiListComponent {
  @Input() title: string;
  @Input() searchMulti: SearchMulti[];

  @Output() itemClick: EventEmitter<(string | number)[]> = new EventEmitter<
    (string | number)[]
  >();

  constructor(private mediaTypeToRouteNamePipe: MediaTypeToRouteNamePipe) {}

  trackBySearchMulti(index: number, searchMulti: SearchMulti): number {
    return searchMulti.id || index;
  }

  onSearchSingleClick(searchSingle: SearchMulti): void {
    this.itemClick.emit([
      '/',
      this.mediaTypeToRouteNamePipe.transform(searchSingle.media_type),
      searchSingle.id,
    ]);
  }
}

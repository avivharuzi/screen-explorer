import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { SearchMulti } from '../../search-multi';

@Component({
  selector: 'app-search-multi-list',
  templateUrl: './search-multi-list.component.html',
  styleUrls: ['./search-multi-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchMultiListComponent {
  @Input() movies: SearchMulti[];
  @Input() tvShows: SearchMulti[];
  @Input() people: SearchMulti[];

  @Output() itemClick: EventEmitter<(string | number)[]> = new EventEmitter<(string | number)[]>();
}

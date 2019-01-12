import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Filter } from './../../models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() public filterClick: EventEmitter<any> = new EventEmitter<any>();

  public year: string;
  public sortBy: string;
  public genres: string;
  public keywords: string;

  constructor() {
    this.year = '2018';
    this.sortBy = 'popularity.desc';
    this.genres = '';
    this.keywords = '';
  }

  ngOnInit() {
  }

  onFilterClick() {
    const filter = new Filter(this.year, this.sortBy, this.genres, this.keywords);
    this.filterClick.emit(filter);
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-stats',
  templateUrl: './pagination-stats.component.html',
  styleUrls: ['./pagination-stats.component.scss']
})
export class PaginationStatsComponent implements OnInit {
  @Input() public page: number;
  @Input() public totalPages: number;
  @Input() public results: number;
  @Input() public totalResults: number;

  constructor() {
    this.page = 0;
    this.totalPages = 0;
    this.results = 0;
    this.totalResults = 0;
  }

  ngOnInit() {
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Trending } from '../../trending';

@Component({
  selector: 'app-trending-list',
  templateUrl: './trending-list.component.html',
  styleUrls: ['./trending-list.component.scss']
})
export class TrendingListComponent implements OnInit {
  @Input() trendings: Trending[];

  constructor() { }

  ngOnInit(): void {
  }

}

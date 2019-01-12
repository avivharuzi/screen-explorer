import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  @Input() public cards: any[];
  @Input() public mediaType: string;

  constructor() { }

  ngOnInit() {
  }
}

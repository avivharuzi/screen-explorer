import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-item',
  templateUrl: './cards-item.component.html',
  styleUrls: ['./cards-item.component.scss']
})
export class CardsItemComponent implements OnInit {
  @Input() public card: any;
  @Input() public mediaType: string;

  constructor() { }

  ngOnInit() {
  }
}

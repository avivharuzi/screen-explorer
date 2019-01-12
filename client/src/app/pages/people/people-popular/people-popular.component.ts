import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../../../services/people.service';

@Component({
  selector: 'app-people-popular',
  templateUrl: './people-popular.component.html',
  styleUrls: ['./people-popular.component.scss']
})
export class PeoplePopularComponent implements OnInit {
  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
  }
}

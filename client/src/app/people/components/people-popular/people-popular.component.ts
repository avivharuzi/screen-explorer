import { Component } from '@angular/core';

import { PeopleCategory } from '../../shared/people-category.enum';

@Component({
  selector: 'app-people-popular',
  templateUrl: './people-popular.component.html',
  styleUrls: ['./people-popular.component.scss'],
})
export class PeoplePopularComponent {
  peopleCategory: PeopleCategory;

  constructor() {
    this.peopleCategory = PeopleCategory.Popular;
  }
}

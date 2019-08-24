import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';

import { PeopleComponent } from './people.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleItemComponent } from './components/people-list/people-item/people-item.component';
import { PeoplePopularComponent } from './components/people-popular/people-popular.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';

@NgModule({
  declarations: [PeopleComponent, PeopleListComponent, PeopleItemComponent, PeoplePopularComponent, PeopleDetailComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }

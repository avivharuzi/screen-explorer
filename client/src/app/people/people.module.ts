import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';

import { SharedModule } from '../shared/shared.module';
import { PeopleRoutingModule } from './people-routing.module';

import { PeopleComponent } from './people.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleItemComponent } from './components/people-list/people-item/people-item.component';
import { PeoplePopularComponent } from './components/people-popular/people-popular.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { PeopleCardListComponent } from './shared/components/people-card-list/people-card-list.component';
import { PeopleDynamicListComponent } from './shared/components/people-dynamic-list/people-dynamic-list.component';

@NgModule({
  declarations: [
    PeopleComponent,
    PeopleListComponent,
    PeopleItemComponent,
    PeoplePopularComponent,
    PeopleDetailComponent,
    PeopleCardListComponent,
    PeopleDynamicListComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    SharedModule,
    PeopleRoutingModule,
  ],
})
export class PeopleModule {}

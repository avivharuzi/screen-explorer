import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { PeopleComponent } from './people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PersonDynamicListComponent } from './shared/components/person-dynamic-list/person-dynamic-list.component';
import { PersonItemComponent } from './shared/components/person-list/person-item/person-item.component';
import { PersonListComponent } from './shared/components/person-list/person-list.component';
import { PersonListPopularComponent } from './components/person-list-popular/person-list-popular.component';

@NgModule({
  declarations: [
    PeopleComponent,
    PersonDetailComponent,
    PersonDynamicListComponent,
    PersonItemComponent,
    PersonListComponent,
    PersonListPopularComponent,
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule,
    TabsModule.forRoot(),
  ],
})
export class PeopleModule {
}

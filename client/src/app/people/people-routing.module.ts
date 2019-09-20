import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from './people.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeoplePopularComponent } from './components/people-popular/people-popular.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';

const routes: Routes = [
  {
    path: '', component: PeopleComponent, children: [
      { path: '', component: PeopleListComponent },
      { path: 'popular', component: PeoplePopularComponent },
      { path: ':id', component: PeopleDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule { }

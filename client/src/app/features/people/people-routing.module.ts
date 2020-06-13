import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from './people.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PersonListPopularComponent } from './components/person-list-popular/person-list-popular.component';

const routes: Routes = [
  {
    path: '', component: PeopleComponent, children: [
      { path: 'popular', component: PersonListPopularComponent },
      { path: ':id', component: PersonDetailComponent },
      { path: '', redirectTo: 'popular', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {
}

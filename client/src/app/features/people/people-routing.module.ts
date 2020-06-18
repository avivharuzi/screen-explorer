import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APP_ROUTES } from '../../app-routes';
import { PeopleComponent } from './people.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PersonListPopularComponent } from './components/person-list-popular/person-list-popular.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent,
    children: [
      { path: APP_ROUTES.PEOPLE.children.POPULAR, component: PersonListPopularComponent },
      { path: ':id', component: PersonDetailComponent },
      { path: '', redirectTo: 'popular', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}

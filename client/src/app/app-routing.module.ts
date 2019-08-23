import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', loadChildren: () => import('./movies/movies.module').then(mod => mod.MoviesModule) },
  { path: 'tv', loadChildren: () => import('./tv/tv.module').then(mod => mod.TvModule) },
  { path: 'people', loadChildren: () => import('./people/people.module').then(mod => mod.PeopleModule) },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

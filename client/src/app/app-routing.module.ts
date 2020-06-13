import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', loadChildren: () => import('./features/movies/movies.module').then(m => m.MoviesModule) },
  { path: 'tv-shows', loadChildren: () => import('./features/tv-shows/tv-shows.module').then(m => m.TvShowsModule) },
  { path: 'people', loadChildren: () => import('./features/people/people.module').then(m => m.PeopleModule) },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

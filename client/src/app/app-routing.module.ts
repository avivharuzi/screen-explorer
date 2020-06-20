import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { APP_ROUTES } from './app-routes';
import { APP_SEO } from './app-seo';
import { HomeComponent } from './core/components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: APP_ROUTES.MOVIES.self, loadChildren: () => import('./features/movies/movies.module').then(m => m.MoviesModule) },
  { path: APP_ROUTES.TV_SHOWS.self, loadChildren: () => import('./features/tv-shows/tv-shows.module').then(m => m.TvShowsModule) },
  { path: APP_ROUTES.PEOPLE.self, loadChildren: () => import('./features/people/people.module').then(m => m.PeopleModule) },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, data: { seo: APP_SEO.PAGE_NOT_FOUND } },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      paramsInheritanceStrategy: 'always',
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

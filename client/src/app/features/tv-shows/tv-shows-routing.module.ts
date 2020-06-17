import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APP_ROUTES } from '../../app-routes';
import { TvShowDetailComponent } from './components/tv-show-detail/tv-show-detail.component';
import { TvShowListAiringTodayComponent } from './components/tv-show-list-airing-today/tv-show-list-airing-today.component';
import { TvShowListOnTheAirComponent } from './components/tv-show-list-on-the-air/tv-show-list-on-the-air.component';
import { TvShowListPopularComponent } from './components/tv-show-list-popular/tv-show-list-popular.component';
import { TvShowListTopRatedComponent } from './components/tv-show-list-top-rated/tv-show-list-top-rated.component';
import { TvShowsComponent } from './tv-shows.component';

const routes: Routes = [
  {
    path: '',
    component: TvShowsComponent,
    children: [
      { path: APP_ROUTES.TV_SHOWS.children.POPULAR, component: TvShowListPopularComponent },
      { path: APP_ROUTES.TV_SHOWS.children.TOP_RATED, component: TvShowListTopRatedComponent },
      { path: APP_ROUTES.TV_SHOWS.children.ON_THE_AIR, component: TvShowListOnTheAirComponent },
      { path: APP_ROUTES.TV_SHOWS.children.AIRING_TODAY, component: TvShowListAiringTodayComponent },
      { path: ':id', component: TvShowDetailComponent },
      { path: '', redirectTo: 'popular', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvShowsRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APP_ROUTES } from '../../app-routes';
import { TV_SHOWS_SEO } from './tv-shows-seo';
import { TvShowDetailComponent } from './components/tv-show-detail/tv-show-detail.component';
import { TvShowListAiringTodayComponent } from './components/tv-show-list-airing-today/tv-show-list-airing-today.component';
import { TvShowListOnTheAirComponent } from './components/tv-show-list-on-the-air/tv-show-list-on-the-air.component';
import { TvShowListPopularComponent } from './components/tv-show-list-popular/tv-show-list-popular.component';
import { TvShowListTopRatedComponent } from './components/tv-show-list-top-rated/tv-show-list-top-rated.component';
import { TvShowsComponent } from './tv-shows.component';
import { TvShowSeasonDetailComponent } from './components/tv-show-season-detail/tv-show-season-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TvShowsComponent,
    children: [
      {
        path: APP_ROUTES.TV_SHOWS.children.POPULAR,
        component: TvShowListPopularComponent,
        data: { seo: TV_SHOWS_SEO.POPULAR },
      },
      {
        path: APP_ROUTES.TV_SHOWS.children.TOP_RATED,
        component: TvShowListTopRatedComponent,
        data: { seo: TV_SHOWS_SEO.TOP_RATED },
      },
      {
        path: APP_ROUTES.TV_SHOWS.children.ON_THE_AIR,
        component: TvShowListOnTheAirComponent,
        data: { seo: TV_SHOWS_SEO.ON_THE_AIR },
      },
      {
        path: APP_ROUTES.TV_SHOWS.children.AIRING_TODAY,
        component: TvShowListAiringTodayComponent,
        data: { seo: TV_SHOWS_SEO.AIRING_TODAY },
      },
      {
        path: ':id',
        component: TvShowDetailComponent,
        children: [
          {
            path: 'seasons/:seasonNumber',
            component: TvShowSeasonDetailComponent,
          },
        ],
      },
      { path: '', redirectTo: 'popular', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvShowsRoutingModule {}

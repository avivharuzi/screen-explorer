import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvComponent } from './tv.component';
import { TvListComponent } from './components/tv-list/tv-list.component';
import { TvPopularComponent } from './components/tv-popular/tv-popular.component';
import { TvTopRatedComponent } from './components/tv-top-rated/tv-top-rated.component';
import { TvOnTvComponent } from './components/tv-on-tv/tv-on-tv.component';
import { TvAiringTodayComponent } from './components/tv-airing-today/tv-airing-today.component';
import { TvDetailComponent } from './components/tv-detail/tv-detail.component';
import { TvSeasonComponent } from './components/tv-season/tv-season.component';
import { TvEpisodeComponent } from './components/tv-episode/tv-episode.component';

const routes: Routes = [
  {
    path: '', component: TvComponent, children: [
      { path: '', component: TvListComponent },
      { path: 'popular', component: TvPopularComponent },
      { path: 'top-rated', component: TvTopRatedComponent },
      { path: 'on-tv', component: TvOnTvComponent },
      { path: 'airing-today', component: TvAiringTodayComponent },
      { path: ':id', component: TvDetailComponent },
      { path: ':id/seasons/:season', component: TvSeasonComponent },
      { path: ':id/seasons/:season/episodes/:episode', component: TvEpisodeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvRoutingModule { }
